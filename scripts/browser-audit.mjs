import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
const origin = process.env.TEST_ORIGIN || "http://localhost:4173";
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const paths = [
  ...sitemap.matchAll(
    /<loc>https:\/\/welcometothenextlevel.github.io([^<]+)<\/loc>/g,
  ),
].map((m) => m[1]);
const browser = await chromium.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
const failures = [];
const badResponses = [];
let checks = 0;
page.on("pageerror", (e) => errors.push(e.message));
page.on("response", (r) => {
  if (r.status() >= 400) badResponses.push(r.url() + ": " + r.status());
});
for (const width of [375, 390, 430, 768, 1280, 1440, 1920]) {
  await page.setViewportSize({ width, height: 900 });
  for (const p of paths) {
    await page.goto(origin + p, { waitUntil: "load" });
    await page.evaluate(async () => {
      for (const img of document.images) {
        img.loading = "eager";
      }
      await document.fonts.ready;
      await Promise.all(
        [...document.images].map((im) => im.decode().catch(() => {})),
      );
    });
    const result = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      missing: [...document.images]
        .filter((i) => !i.complete || !i.naturalWidth)
        .map((i) => i.src),
      h1: document.querySelectorAll("h1").length,
    }));
    if (result.overflow || result.missing.length || result.h1 !== 1)
      failures.push({ width, path: p, ...result });
    checks++;
  }
  console.log("Completed width", width);
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(origin + "/dima-ar/");
await page.getByRole("button", { name: "Ouvrir le menu" }).click();
assert(await page.locator("dialog.mobile-menu").evaluate((d) => d.open));
await page.keyboard.press("Escape");
await page.waitForFunction(() => document.body.style.overflow === "");
assert(
  await page
    .getByRole("button", { name: "Ouvrir le menu" })
    .evaluate((e) => e === document.activeElement),
);
for (const width of [375, 390, 430]) {
  await page.setViewportSize({ width, height: 844 });
  await page.getByRole("button", { name: "Ouvrir DIMA Assistant" }).click();
  await page.getByLabel("Votre question").fill("Vos horaires");
  await page.getByRole("button", { name: "Envoyer la question" }).click();
  await page.waitForFunction(() =>
    document
      .querySelector(".chat-log")
      ?.textContent?.includes("confirmer les horaires"),
  );
  assert(
    await page.locator(".assistant").evaluate((d) => {
      const r = d.getBoundingClientRect();
      return r.width <= innerWidth && r.height <= innerHeight + 1;
    }),
  );
  await page.setViewportSize({ width, height: 480 });
  await page.getByLabel("Votre question").focus();
  assert(
    await page
      .locator(".chat-input")
      .evaluate((d) => d.getBoundingClientRect().bottom <= innerHeight),
  );
  await page.getByLabel("Votre question").fill("Une peinture");
  await page.getByRole("button", { name: "Envoyer la question" }).click();
  await page.getByRole("button", { name: "Fermer DIMA Assistant" }).click();
  await page.waitForFunction(() => document.body.style.overflow === "");
  await page.setViewportSize({ width, height: 844 });
}
await page.setViewportSize({ width: 1440, height: 1000 });
await page.getByRole("button", { name: "Services", exact: true }).click();
assert(await page.locator(".mega").isVisible());
await page.keyboard.press("Escape");
assert.equal(await page.locator(".mega").count(), 0);
await page.goto(origin + "/dima-ar/realisations/");
await page.getByRole("button", { name: "Jantes", exact: true }).click();
assert.equal(await page.locator(".project").count(), 1);
await page.getByRole("button", { name: "Tous", exact: true }).click();
assert.equal(await page.locator(".project").count(), 6);
await page.goto(origin + "/dima-ar/services/peinture/");
assert.equal(await page.locator("video").count(), 0);
await page.getByRole("button", { name: /Voir le film/ }).click();
await page.waitForFunction(() => {
  const v = document.querySelector("video");
  return v && v.readyState >= 2;
});
assert(await page.locator("video").evaluate((v) => v.muted));
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(origin + "/dima-ar/devis/?service=peinture");
await page.getByRole("radio", { name: "Peinture automobile" }).waitFor();
assert(
  await page.getByRole("radio", { name: "Peinture automobile" }).isChecked(),
);
await page.getByRole("button", { name: "Continuer" }).click();
await page.getByLabel("Marque", { exact: true }).fill("Audi");
await page.getByLabel("Modèle", { exact: true }).fill("A4");
await page.getByRole("button", { name: "Continuer" }).click();
await page
  .getByLabel("Décrivez votre besoin")
  .fill("Une rayure sur la porte avant droite.");
await page.getByRole("button", { name: "Continuer" }).click();
await page
  .getByLabel("Ajouter des photos", { exact: true })
  .setInputFiles("public/media/07-480.webp");
assert.equal(await page.locator(".upload-previews img").count(), 1);
await page.getByRole("button", { name: "Continuer" }).click();
await page.getByLabel("Prénom", { exact: true }).fill("Test");
await page.getByLabel("Nom", { exact: true }).fill("Validation");
await page.getByLabel("Téléphone", { exact: true }).fill("021 000 00 00");
await page.getByRole("button", { name: "Continuer" }).click();
await page.getByRole("checkbox").check();
await page.getByRole("button", { name: "Préparer mon e-mail" }).click();
assert(
  await page
    .getByRole("heading", { name: "Votre demande est prête." })
    .isVisible(),
);
const mail = await page
  .getByRole("link", { name: /Ouvrir mon e-mail/ })
  .getAttribute("href");
assert(mail.startsWith("mailto:info@dimacarrosserie.ch"));
assert(decodeURIComponent(mail).includes("Audi A4"));
assert(
  await page
    .getByText("Aucune information n’a encore été envoyée.", { exact: false })
    .isVisible(),
);
for (const width of [390, 1440]) {
  await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
  await page.goto(origin + "/dima-ar/");
  await page.evaluate(async () => {
    for (const img of document.images) img.loading = "eager";
    await Promise.all(
      [...document.images].map((im) => im.decode().catch(() => {})),
    );
  });
  await page.screenshot({
    path: `../audit/final-home-${width}.png`,
    fullPage: true,
  });
  await page.screenshot({ path: `../audit/hero-${width}.png` });
  await page.goto(origin + "/dima-ar/services/peinture/");
  await page.evaluate(async () => {
    for (const img of document.images) img.loading = "eager";
    await Promise.all(
      [...document.images].map((im) => im.decode().catch(() => {})),
    );
  });
  await page.screenshot({
    path: `../audit/peinture-${width}.png`,
    fullPage: true,
  });
}
const report = {
  routeViewportChecks: checks,
  widths: [375, 390, 430, 768, 1280, 1440, 1920],
  interactions: [
    "mobile navigation",
    "Escape and focus restoration",
    "assistant focused / submitted / short viewport",
    "desktop menu",
    "gallery filters",
    "video playback",
    "quote 6 steps, upload, consent, email handoff",
  ],
  errors: [...new Set(errors)],
  failures,
  badResponses: [...new Set(badResponses)],
};
await writeFile("docs/browser-audit.json", JSON.stringify(report, null, 2));
console.log(report);
await browser.close();
assert.equal(report.errors.length + failures.length + badResponses.length, 0);
