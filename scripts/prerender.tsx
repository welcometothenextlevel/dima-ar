import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "node:stream";
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import App from "../src/App";
import { routes, pageMeta, business, services } from "../src/data/content";
const base = process.env.SITE_BASE || "/dima-ar/";
const origin =
  process.env.SITE_ORIGIN || "https://welcometothenextlevel.github.io";
const fontFile = (await readdir("dist/assets")).find((f) =>
  f.endsWith(".woff2"),
);
const template = await readFile("dist/index.html", "utf8");
const escape = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
async function render(path: string) {
  return new Promise<string>((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on("finish", () => resolve(html));
    const { pipe } = renderToPipeableStream(<App path={path} />, {
      onAllReady() {
        pipe(sink);
      },
      onError: reject,
    });
  });
}
for (const path of [...routes, "/404"]) {
  const html = await render(path);
  const meta = pageMeta(path);
  const canonical =
    origin + base + path.replace(/^\//, "") + (path === "/" ? "" : "/");
  const schema: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": origin + base + "#business",
      name: business.name,
      url: origin + base,
      telephone: business.tel,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        postalCode: "1123",
        addressLocality: "Aclens",
        addressRegion: "Vaud",
        addressCountry: "CH",
      },
      sameAs: [business.instagram],
    },
  ];
  if (path !== "/") {
    schema.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: origin + base,
        },
        { "@type": "ListItem", position: 2, name: meta.title, item: canonical },
      ],
    });
  }
  const service = services.find((s) => path === "/services/" + s.slug);
  if (service)
    schema.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.intro,
      provider: { "@id": origin + base + "#business" },
      areaServed: { "@type": "AdministrativeArea", name: "Vaud" },
    });
  const extra = `<link rel="preload" as="font" type="font/woff2" href="${base}assets/${fontFile}" crossorigin><meta name="description" content="${escape(meta.description)}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:locale" content="fr_CH"><meta property="og:title" content="${escape(meta.title)} · DIMA AR"><meta property="og:description" content="${escape(meta.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin + base}media/07-960.webp"><meta property="og:image:alt" content="Véhicule dans l’atelier DIMA AR à Aclens"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/svg+xml" href="${base}favicon.svg">${path === "/404" ? '<meta name="robots" content="noindex">' : ""}<script type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`;
  const result = template
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escape(meta.title)}${path === "/" ? "" : " · DIMA AR"}</title>`,
    )
    .replace("</head>", extra + "</head>")
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const output =
    path === "/404"
      ? "dist/404.html"
      : `dist${path === "/" ? "" : path}/index.html`;
  await mkdir(output.substring(0, output.lastIndexOf("/")), {
    recursive: true,
  });
  await writeFile(output, result);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((p) => `<url><loc>${origin + base + p.replace(/^\//, "") + (p === "/" ? "" : "/")}</loc></url>`).join("")}</urlset>`,
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${origin + base}sitemap.xml\n`,
);
await writeFile("dist/.nojekyll", "");
console.log(`Prerendered ${routes.length} routes + 404 for ${origin + base}`);
