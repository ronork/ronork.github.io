const fs = require("fs");
const path = require("path");

const site = "https://ronork.com";
const blogListPath = path.join(__dirname, "../src/data/blogList.json");
const outputPath = path.join(__dirname, "../build/sitemap.xml");

const slugify = (title) =>
  title.toLowerCase().split(" ").join("-").replace(/[^a-zA-Z0-9-]/g, "");

const escapeXml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const blogList = JSON.parse(fs.readFileSync(blogListPath, "utf8"));
const urls = new Set([
  "/",
  "/blogs/",
  "/projects/",
  "/assets/docs/rohangrover.pdf",
]);

for (const blog of blogList.data || []) {
  if (blog.title) urls.add(`/blogs/${slugify(blog.title)}/`);
}

const entries = [...urls]
  .sort((a, b) => a.localeCompare(b))
  .map((url) => `  <url><loc>${escapeXml(site + url)}</loc></url>`)
  .join("\n");

const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries +
  "\n</urlset>\n";

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap);
console.log(`Generated sitemap with ${urls.size} URLs at ${outputPath}`);
