import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getAllIndexableRoutes, SITE_DOMAIN } from "../src/data/seoMetadata.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const distDir = path.join(projectRoot, "dist");

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Generate XML Sitemap
function generateSitemapXML(routes) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const xmlFooter = "</urlset>\n";

  const urlEntries = routes
    .map((route) => {
      return `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  return xmlHeader + urlEntries + "\n" + xmlFooter;
}

// 2. Generate robots.txt
function generateRobotsTxt() {
  return `# Robots.txt for Pragmatto Solutions
# Production Domain: ${SITE_DOMAIN}

User-agent: *
Allow: /

# Sitemap Reference
Sitemap: ${SITE_DOMAIN}/sitemap.xml
`;
}

function run() {
  console.log("=== Pragmatto SEO: Generating Sitemap & Robots.txt ===");

  ensureDirectoryExists(publicDir);

  const routes = getAllIndexableRoutes();
  console.log(`Discovered ${routes.length} canonical indexable routes:`);
  routes.forEach((r, idx) => {
    console.log(`  [${idx + 1}] ${r.path} (${r.type})`);
  });

  const sitemapContent = generateSitemapXML(routes);
  const robotsContent = generateRobotsTxt();

  // Write to public/ directory (included in Vite build)
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent, "utf-8");
  console.log("✓ Successfully created public/sitemap.xml");
  console.log("✓ Successfully created public/robots.txt");

  // Also write to dist/ if it already exists
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapContent, "utf-8");
    fs.writeFileSync(path.join(distDir, "robots.txt"), robotsContent, "utf-8");
    if (fs.existsSync(path.join(publicDir, ".htaccess"))) {
      fs.copyFileSync(path.join(publicDir, ".htaccess"), path.join(distDir, ".htaccess"));
    }
    console.log("✓ Synchronized sitemap.xml, robots.txt, and .htaccess into dist/");
  }

  console.log("=== SEO Generation Complete ===");
}

run();
