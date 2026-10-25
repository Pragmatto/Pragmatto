import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  getAllIndexableRoutes,
  STATIC_PAGES_SEO,
  SITE_DOMAIN,
  DEFAULT_OG_IMAGE,
} from "../src/data/seoMetadata.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function injectMetadataIntoHTML(baseHTML, meta) {
  let html = baseHTML;

  // 1. Title replacement
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);

  // 2. Meta description replacement
  const descPattern = /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  const newDesc = `<meta name="description" content="${meta.description.replace(/"/g, "&quot;")}" />`;
  if (descPattern.test(html)) {
    html = html.replace(descPattern, newDesc);
  } else {
    html = html.replace("</head>", `  ${newDesc}\n</head>`);
  }

  // 3. Canonical link replacement
  const canonicalPattern = /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i;
  const newCanonical = `<link rel="canonical" href="${meta.url}" />`;
  if (canonicalPattern.test(html)) {
    html = html.replace(canonicalPattern, newCanonical);
  } else {
    html = html.replace("</head>", `  ${newCanonical}\n</head>`);
  }

  // 4. OpenGraph and Twitter replacements
  const ogTitlePattern = /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  html = html.replace(ogTitlePattern, `<meta property="og:title" content="${meta.title.replace(/"/g, "&quot;")}" />`);

  const ogDescPattern = /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  html = html.replace(ogDescPattern, `<meta property="og:description" content="${meta.description.replace(/"/g, "&quot;")}" />`);

  const ogUrlPattern = /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  html = html.replace(ogUrlPattern, `<meta property="og:url" content="${meta.url}" />`);

  const twitterTitlePattern = /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  html = html.replace(twitterTitlePattern, `<meta name="twitter:title" content="${meta.title.replace(/"/g, "&quot;")}" />`);

  const twitterDescPattern = /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  html = html.replace(twitterDescPattern, `<meta name="twitter:description" content="${meta.description.replace(/"/g, "&quot;")}" />`);

  // 5. Robots meta tag
  const robotsTag = meta.noindex
    ? '<meta name="robots" content="noindex, nofollow" />'
    : '<meta name="robots" content="index, follow, max-image-preview:large" />';
  const robotsPattern = /<meta\s+name=["']robots["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  if (robotsPattern.test(html)) {
    html = html.replace(robotsPattern, robotsTag);
  } else {
    html = html.replace("</head>", `  ${robotsTag}\n</head>`);
  }

  return html;
}

function run() {
  console.log("=== Pragmatto SEO: Post-Build Static Pre-rendering ===");

  const indexPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("Error: dist/index.html not found. Run 'vite build' first.");
    process.exit(1);
  }

  const baseHTML = fs.readFileSync(indexPath, "utf-8");
  const routes = getAllIndexableRoutes();

  let generatedCount = 0;

  for (const route of routes) {
    const routeHTML = injectMetadataIntoHTML(baseHTML, route);

    if (route.path === "/") {
      fs.writeFileSync(indexPath, routeHTML, "utf-8");
      generatedCount++;
    } else {
      const targetDir = path.join(distDir, route.path.replace(/^\//, ""));
      ensureDirectoryExists(targetDir);
      fs.writeFileSync(path.join(targetDir, "index.html"), routeHTML, "utf-8");
      generatedCount++;
    }
  }

  // Generate 404.html
  const notFoundMeta = {
    ...STATIC_PAGES_SEO["not-found"],
    url: `${SITE_DOMAIN}/404`,
  };
  const notFoundHTML = injectMetadataIntoHTML(baseHTML, notFoundMeta);
  fs.writeFileSync(path.join(distDir, "404.html"), notFoundHTML, "utf-8");

  console.log(`✓ Pre-rendered static SEO entry points for ${generatedCount} canonical routes.`);
  console.log("✓ Pre-rendered dist/404.html for unknown route handling.");
  console.log("=== Post-Build Static Pre-rendering Complete ===");
}

run();
