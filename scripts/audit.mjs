import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const htmls = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    const file = path.join(dir, name);
    if ((await stat(file)).isDirectory()) await walk(file);
    else if (file.endsWith(".html")) htmls.push(file);
  }
}
await walk("dist");
const errors = [];
const titles = new Set();
const descriptions = new Set();
let links = 0;
let images = 0;
for (const file of htmls) {
  const html = await readFile(file, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(
    /<meta name="description" content="(.*?)"/,
  )?.[1];
  if (!title || titles.has(title)) errors.push(file + " title");
  titles.add(title);
  if (!description || descriptions.has(description))
    errors.push(file + " description");
  descriptions.add(description);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) errors.push(file + " H1");
  if (!html.includes("application/ld+json")) errors.push(file + " schema");
  if (/unsplash|lorem ipsum|Powered by SINNIAH|Grande Inauguration/i.test(html))
    errors.push(file + " prohibited content");
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    images++;
    if (
      !/alt="[^"]+"/.test(match[0]) ||
      !/width=/.test(match[0]) ||
      !/height=/.test(match[0])
    )
      errors.push(file + " image attributes");
  }
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const url = match[1].replaceAll("&amp;", "&");
    if (!url.startsWith("/dima-ar/")) continue;
    links++;
    const local = decodeURIComponent(
      url.split(/[?#]/)[0].replace("/dima-ar/", "dist/"),
    );
    try {
      const s = await stat(local);
      if (s.isDirectory()) await stat(path.join(local, "index.html"));
    } catch {
      errors.push(file + " missing " + url);
    }
  }
}
console.log({
  pages: htmls.length,
  links,
  images,
  uniqueTitles: titles.size,
  errors,
});
assert.equal(errors.length, 0);
await writeFile(
  "docs/static-audit.json",
  JSON.stringify(
    { pages: htmls.length, links, images, uniqueTitles: titles.size, errors },
    null,
    2,
  ),
);
