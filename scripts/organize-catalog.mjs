import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inferCategories, shouldHideProject } from "./lib/categorization.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = path.join(ROOT, "content", "projects");

function updateFrontmatter(content, newCategories, setHidden = false) {
  const catYaml = "categories:\n" + newCategories.map((c) => `  - ${c}`).join("\n");
  let updated = content.replace(/^categories:\s*\n(?:\s*-\s*[^\n]+\r?\n)*/m, catYaml + "\n");

  if (setHidden) {
    if (/^hidden:\s*.+$/m.test(updated)) {
      updated = updated.replace(/^hidden:\s*.+$/m, "hidden: true");
    } else {
      updated = updated.replace(/^featured:\s*.+$/m, (m) => `${m}\nhidden: true`);
    }
  }

  return updated;
}

async function main() {
  const fileNames = (await fs.readdir(projectsDir)).filter((name) => name.endsWith(".md"));
  console.log(`Auditing and categorizing ${fileNames.length} projects in ${projectsDir}...`);

  let updatedCount = 0;
  let hiddenCount = 0;
  const categoryCounts = new Map();

  for (const fileName of fileNames) {
    const filePath = path.join(projectsDir, fileName);
    const content = await fs.readFile(filePath, "utf8");

    const fmM = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmM) continue;
    const fm = fmM[1];

    const getField = (regex) => {
      const m = fm.match(regex);
      return m ? m[1].trim() : null;
    };

    const getList = (field) => {
      const regex = new RegExp(`^${field}:\\s*\\n((?:\\s*-\\s*[^\\n]+\\r?\\n)*)`, "m");
      const m = fm.match(regex);
      if (!m) return [];
      return m[1]
        .split("\n")
        .map((l) => l.replace(/^\s*-\s*/, "").trim())
        .filter(Boolean);
    };

    const slug = getField(/^slug:\s*(.+)$/m) || fileName.replace(/\.md$/, "");
    const name = getField(/^name:\s*(.+)$/m) || slug;
    const summary = (getField(/^summary:\s*(?:>-|\|-)?\s*\n?([^\n]+(?:\n[ \t]+[^\n]+)*)/m) || "").replace(/\s+/g, " ");
    const repo = getField(/repository:\s*([^\s\n]+)/) || "";
    const forkOf = getField(/forkOf:\s*([^\s\n]+)/) || null;
    const tags = getList("tags");
    const oldCategories = getList("categories");
    const oldHidden = /hidden:\s*true/m.test(fm);

    const isHidden = shouldHideProject({ slug, name, summary, repository: repo });
    const newCategories = inferCategories({
      slug,
      name,
      summary,
      tags,
      repository: repo,
      forkOf
    });

    for (const c of newCategories) {
      categoryCounts.set(c, (categoryCounts.get(c) ?? 0) + 1);
    }

    const categoriesChanged =
      oldCategories.length !== newCategories.length ||
      oldCategories.some((c, i) => c !== newCategories[i]);
    const hiddenChanged = isHidden && !oldHidden;

    if (categoriesChanged || hiddenChanged) {
      const updatedContent = updateFrontmatter(content, newCategories, isHidden);
      await fs.writeFile(filePath, updatedContent, "utf8");
      updatedCount++;
      if (hiddenChanged) hiddenCount++;
    }
  }

  console.log(`Reorganization complete!`);
  console.log(`- Updated projects: ${updatedCount} / ${fileNames.length}`);
  console.log(`- Hidden non-PS2 projects: ${hiddenCount}`);
  console.log(`- Uncategorized projects remaining: ${categoryCounts.get("uncategorized") ?? 0}`);
  console.log(`- Category distribution:`);
  for (const [cat, count] of [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`    ${cat}: ${count}`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
