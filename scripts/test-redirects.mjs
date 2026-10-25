import express from "express";
import http from "http";

const app = express();
const CANONICAL_HOST = "pragmatto.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

app.enable("trust proxy");

// Canonical Redirect Middleware
app.use((req, res, next) => {
  const rawHost = req.headers["x-forwarded-host"] || req.headers.host || "";
  const host = rawHost.split(":")[0].toLowerCase();

  // Test bypass switch: if test-skip-local is passed, simulate production
  const simulateProduction = req.headers["x-simulate-prod"] === "true";
  const isLocal =
    !simulateProduction &&
    (host === "localhost" ||
      host === "127.0.0.1" ||
      host === "::1" ||
      host.endsWith(".local") ||
      host.endsWith(".internal"));

  if (isLocal) {
    return next();
  }

  const forwardedProto = req.headers["x-forwarded-proto"];
  const isHttps =
    req.secure ||
    forwardedProto === "https" ||
    (typeof forwardedProto === "string" && forwardedProto.split(",")[0].trim() === "https") ||
    (req.headers["cf-visitor"] && req.headers["cf-visitor"].includes('"scheme":"https"'));

  const originalPath = req.path;
  const hasTrailingSlash = originalPath.length > 1 && originalPath.endsWith("/");
  const normalizedPath = hasTrailingSlash ? originalPath.replace(/\/+$/, "") : originalPath;

  const queryIndex = req.originalUrl.indexOf("?");
  const queryString = queryIndex !== -1 ? req.originalUrl.slice(queryIndex) : "";

  const needsHostRedirect = host !== CANONICAL_HOST;
  const needsHttpsRedirect = !isHttps;
  const needsTrailingSlashRedirect = hasTrailingSlash;

  if (needsHostRedirect || needsHttpsRedirect || needsTrailingSlashRedirect) {
    const targetUrl = `${CANONICAL_ORIGIN}${normalizedPath}${queryString}`;

    const currentUrl = `${isHttps ? "https" : "http"}://${host}${req.originalUrl}`;
    if (targetUrl === currentUrl) {
      return next();
    }

    return res.redirect(301, targetUrl);
  }

  next();
});

app.use(express.static("dist", { redirect: false, index: false }));

app.get("*", (req, res) => {
  res.status(200).send(`Served: ${req.path}`);
});

const server = app.listen(5099, async () => {
  console.log("=== Testing Canonical Redirect Middleware ===");

  const testCases = [
    // 1. http://pragmatto.com/ -> https://pragmatto.com/
    {
      name: "1. http://pragmatto.com/ -> 301 to https://pragmatto.com/",
      headers: { host: "pragmatto.com", "x-forwarded-proto": "http", "x-simulate-prod": "true" },
      path: "/",
      expectedStatus: 301,
      expectedLocation: "https://pragmatto.com/",
    },
    // 2. http://www.pragmatto.com/ -> https://pragmatto.com/
    {
      name: "2. http://www.pragmatto.com/ -> 301 to https://pragmatto.com/",
      headers: { host: "www.pragmatto.com", "x-forwarded-proto": "http", "x-simulate-prod": "true" },
      path: "/",
      expectedStatus: 301,
      expectedLocation: "https://pragmatto.com/",
    },
    // 3. https://www.pragmatto.com/ -> https://pragmatto.com/
    {
      name: "3. https://www.pragmatto.com/ -> 301 to https://pragmatto.com/",
      headers: { host: "www.pragmatto.com", "x-forwarded-proto": "https", "x-simulate-prod": "true" },
      path: "/",
      expectedStatus: 301,
      expectedLocation: "https://pragmatto.com/",
    },
    // 4. https://pragmatto.com/ -> 200 OK
    {
      name: "4. https://pragmatto.com/ -> 200 OK (Preferred Canonical)",
      headers: { host: "pragmatto.com", "x-forwarded-proto": "https", "x-simulate-prod": "true" },
      path: "/",
      expectedStatus: 200,
    },
    // 5. https://www.pragmatto.com/services -> 301 to https://pragmatto.com/services
    {
      name: "5. https://www.pragmatto.com/services -> 301 to https://pragmatto.com/services",
      headers: { host: "www.pragmatto.com", "x-forwarded-proto": "https", "x-simulate-prod": "true" },
      path: "/services",
      expectedStatus: 301,
      expectedLocation: "https://pragmatto.com/services",
    },
    // 6. https://pragmatto.com/services/ -> 301 to https://pragmatto.com/services
    {
      name: "6. https://pragmatto.com/services/ -> 301 to https://pragmatto.com/services (Trailing slash cleanup)",
      headers: { host: "pragmatto.com", "x-forwarded-proto": "https", "x-simulate-prod": "true" },
      path: "/services/",
      expectedStatus: 301,
      expectedLocation: "https://pragmatto.com/services",
    },
    // 7. https://pragmatto.com/services?foo=bar -> 200 OK
    {
      name: "7. https://pragmatto.com/services?foo=bar -> 200 OK (Query param preserved)",
      headers: { host: "pragmatto.com", "x-forwarded-proto": "https", "x-simulate-prod": "true" },
      path: "/services?foo=bar",
      expectedStatus: 200,
    },
    // 8. http://www.pragmatto.com/contact?source=ad -> https://pragmatto.com/contact?source=ad
    {
      name: "8. http://www.pragmatto.com/contact?source=ad -> 301 to https://pragmatto.com/contact?source=ad",
      headers: { host: "www.pragmatto.com", "x-forwarded-proto": "http", "x-simulate-prod": "true" },
      path: "/contact?source=ad",
      expectedStatus: 301,
      expectedLocation: "https://pragmatto.com/contact?source=ad",
    },
    // 9. Localhost dev bypass
    {
      name: "9. Localhost dev bypass -> 200 OK",
      headers: { host: "localhost:5099" },
      path: "/",
      expectedStatus: 200,
    },
  ];

  let passed = 0;
  for (const tc of testCases) {
    await new Promise((resolve) => {
      const options = {
        hostname: "127.0.0.1",
        port: 5099,
        path: tc.path,
        method: "GET",
        headers: tc.headers,
      };

      const req = http.request(options, (res) => {
        let ok = res.statusCode === tc.expectedStatus;
        if (tc.expectedLocation && res.headers.location !== tc.expectedLocation) {
          ok = false;
        }
        if (ok) {
          console.log(`✓ [PASS] ${tc.name}`);
          passed++;
        } else {
          console.error(
            `✗ [FAIL] ${tc.name}\n   Expected: ${tc.expectedStatus} (location: ${tc.expectedLocation || "none"})\n   Received: ${res.statusCode} (location: ${res.headers.location || "none"})`
          );
        }
        resolve();
      });
      req.end();
    });
  }

  console.log(`\nResults: ${passed}/${testCases.length} tests passed successfully.`);
  server.close(() => process.exit(passed === testCases.length ? 0 : 1));
});
