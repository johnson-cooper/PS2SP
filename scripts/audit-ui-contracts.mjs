import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = path.join(ROOT, "src", "pages");
const layoutPath = path.join(ROOT, "src", "layouts", "BaseLayout.astro");
const resourcesPath = path.join(ROOT, "src", "pages", "resources.astro");
const projectDirectoryPath = path.join(ROOT, "src", "components", "ProjectDirectory.astro");
const reportComponentPath = path.join(ROOT, "src", "components", "ReportBrokenLink.astro");

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

const failures = [];
const pageFiles = (await walk(pagesDir)).filter((file) => file.endsWith(".astro"));

for (const file of pageFiles) {
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");
  const source = await fs.readFile(file, "utf8");
  if (!source.includes("BaseLayout")) {
    failures.push(`${rel}: user-facing Astro page does not use BaseLayout`);
  }

  if (
    rel !== "src/pages/index.astro" &&
    /\/brand\/ps2sp-(?:wordmark|mark(?:-glow)?)\.(?:png|webp)/.test(source)
  ) {
    failures.push(`${rel}: page embeds PS2SP branding directly instead of inheriting the linked BaseLayout brand`);
  }
}

const layout = await fs.readFile(layoutPath, "utf8");
if (!/<a\s+class="brand"\s+href="\/"[^>]*>/m.test(layout)) {
  failures.push("src/layouts/BaseLayout.astro: brand logo is not a direct home link");
}
if (!layout.includes('anchor.classList.contains("resource-report-link")')) {
  failures.push("src/layouts/BaseLayout.astro: global report fallback does not exclude dedicated resource-report links");
}
if (!layout.includes('querySelector(".report-broken-link, .resource-report-link")')) {
  failures.push("src/layouts/BaseLayout.astro: global report fallback does not detect existing dedicated report controls");
}
if (!layout.includes('document.querySelectorAll("[data-report-url]")')) {
  failures.push("src/layouts/BaseLayout.astro: global report fallback does not dedupe existing reports by target URL");
}
if (!layout.includes("report.dataset.reportUrl = targetUrl")) {
  failures.push("src/layouts/BaseLayout.astro: fallback reports do not tag their target URL for idempotent dedupe");
}

const resources = await fs.readFile(resourcesPath, "utf8");
if (!resources.includes('report.className = "resource-report-link report-broken-link";')) {
  failures.push("src/pages/resources.astro: dedicated resource report control is missing canonical report-broken-link class");
}
if (!resources.includes("report.dataset.reportUrl = entry.url")) {
  failures.push("src/pages/resources.astro: dedicated resource reports are not tagged with their target URL");
}

const projectDirectory = await fs.readFile(projectDirectoryPath, "utf8");
if (!projectDirectory.includes("report.dataset.reportUrl = entry.reportUrl")) {
  failures.push("src/components/ProjectDirectory.astro: software reports are not tagged with their target URL");
}

const reportComponent = await fs.readFile(reportComponentPath, "utf8");
if (!reportComponent.includes("data-report-url={url}")) {
  failures.push("src/components/ReportBrokenLink.astro: reusable reports are not tagged with their target URL");
}

if (failures.length) {
  console.error("UI contract audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`UI contract audit passed for ${pageFiles.length} user-facing page(s).`);
