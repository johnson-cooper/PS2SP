import fs from "node:fs/promises";

const source = process.env.PS2LINKS_SOURCE ??
  "https://raw.githubusercontent.com/NathanNeurotic/PS2Links/main/links.json";
const target = new URL("../data/resources/ps2links.json", import.meta.url);

const response = await fetch(source, {
  headers: { "User-Agent": "PS2SP-resource-sync" }
});

if (!response.ok) {
  throw new Error(`PS2Links fetch failed: HTTP ${response.status}`);
}

const groups = await response.json();
if (!Array.isArray(groups)) throw new Error("PS2Links registry must be an array.");

let total = 0;
for (const [index, group] of groups.entries()) {
  if (!group || typeof group !== "object") throw new Error(`Invalid group at index ${index}.`);
  if (typeof group.category !== "string" || !group.category.trim()) throw new Error(`Missing category at index ${index}.`);
  if (typeof group.description !== "string") throw new Error(`Missing description for ${group.category}.`);
  if (!Array.isArray(group.links)) throw new Error(`Missing links array for ${group.category}.`);

  for (const [linkIndex, link] of group.links.entries()) {
    if (!link || typeof link !== "object") throw new Error(`Invalid link ${linkIndex} in ${group.category}.`);
    if (typeof link.name !== "string" || !link.name.trim()) throw new Error(`Missing link name in ${group.category}.`);
    if (typeof link.url !== "string" || !/^https?:\/\//i.test(link.url)) {
      throw new Error(`Invalid URL for ${link.name}: ${link.url}`);
    }
    total++;
  }
}

const output = JSON.stringify(groups, null, 2) + "\n";
let previous = "";
try {
  previous = await fs.readFile(target, "utf8");
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

if (previous === output) {
  console.log(`PS2Links resource registry already current: ${total} links in ${groups.length} categories.`);
} else {
  await fs.mkdir(new URL("../data/resources/", import.meta.url), { recursive: true });
  await fs.writeFile(target, output, "utf8");
  console.log(`Updated PS2Links resource registry: ${total} links in ${groups.length} categories.`);
}
