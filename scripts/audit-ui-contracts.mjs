import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = path.join(ROOT, "src", "pages");
const layoutPath = path.join(ROOT, "src", "layouts", "BaseLayout.astro");
const resourcesPath = path.join(ROOT, "src", "pages", "resources.astro");

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

const resources = await fs.readFile(resourcesPath, "utf8");
if (!resources.includes('report.className = "resource-report-link report-broken-link";')) {
  failures.push("src/pages/resources.astro: dedicated resource report control is missing canonical report-broken-link class");
}

if (failures.length) {
  console.error("UI contract audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`UI contract audit passed for ${pageFiles.length} user-facing page(s).`);
