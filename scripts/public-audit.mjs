import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import assert from "node:assert/strict";
const origin = "https://welcometothenextlevel.github.io";
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const assets = new Set();
const results = [];
for (const url of urls) {
  const r = await fetch(url, { cache: "no-store" });
  const html = await r.text();
  const localPath = url.replace(origin + "/dima-ar", "dist") + "index.html";
  const local = await readFile(localPath, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const expected = local.match(/<title>(.*?)<\/title>/)?.[1];
  results.push({
    url,
    status: r.status,
    title,
    matchingTitle: title === expected,
  });
  for (const m of html.matchAll(
    /(?:src|href)="(\/dima-ar\/(?:assets|media)\/[^"?]+)"/g,
  ))
    assets.add(m[1]);
  assert.equal(r.status, 200);
  assert.equal(title, expected);
}
const media = [];
for (const asset of assets) {
  const r = await fetch(origin + asset, { cache: "no-store" });
  const buffer = Buffer.from(await r.arrayBuffer());
  const local = await readFile(asset.replace("/dima-ar/", "dist/"));
  const equal =
    createHash("sha256").update(buffer).digest("hex") ===
    createHash("sha256").update(local).digest("hex");
  media.push({ asset, status: r.status, matchingHash: equal });
  assert.equal(r.status, 200);
  assert(equal);
}
for (const file of ["sitemap.xml", "robots.txt", "favicon.svg"]) {
  const r = await fetch(origin + "/dima-ar/" + file);
  assert.equal(r.status, 200);
}
const unknown = await fetch(origin + "/dima-ar/cette-page-nexiste-pas/");
assert.equal(unknown.status, 404);
assert((await unknown.text()).includes("Reprenons"));
const report = {
  verifiedAt: new Date().toISOString(),
  routes: results,
  assets: media,
  custom404: true,
};
await writeFile("docs/public-audit.json", JSON.stringify(report, null, 2));
console.log({
  routes: results.length,
  assets: media.length,
  allStatus200: true,
  allAssetHashesMatch: true,
  custom404: true,
});
