import { readFile, writeFile, mkdir } from "node:fs/promises";
import { render } from "../dist/render/entry-server.js";
const origin = "https://oshbazaar.org",
  template = await readFile("dist/public/index.html", "utf8");
const meta = {
  ky: {
    home: [
      "Ош базары Бишкекте: бүгүн иштейби, дарек жана баруу",
      "Ош базарынын Бишкектеги карта белгиси, бүгүнкү иштөөнү жана көчүрүү абалын текшерүү, баруу алдындагы маалымат жана аба ырайы.",
    ],
    privacy: [
      "Купуялык саясаты | Ош базары гид",
      "Ош базары гидинин Google Analytics, карта, аба ырайы, браузер сактагычы жана хостинг кызматтары жөнүндө маалыматы.",
    ],
    terms: [
      "Колдонуу шарттары | Ош базары гид",
      "Көз карандысыз Ош базары гидинин маалымат чектери, булактары жана тарыхый сүрөттүн лицензиясы.",
    ],
    cookies: [
      "Cookie жана сактагыч | Ош базары гид",
      "Google Analytics жана аба ырайынын кэши жөнүндө маалымат; cookie жана сактагычты браузерден башкаруу.",
    ],
    error: [
      "404 — Барак табылган жок | Ош базары",
      "Бул дарек жеткиликсиз. Ош базарынын башкы гидине кайтыңыз.",
    ],
  },
  en: {
    home: [
      "Osh Bazaar Bishkek: Open Today? Location & Visit Checks",
      "Check Osh Bazaar’s Bishkek listing, operation and relocation uncertainty before travel. Dated sources, location guidance and weather for planning.",
    ],
    privacy: [
      "Privacy policy | Osh Bazaar Guide",
      "Google Analytics, embedded maps, forecast requests, browser storage and hosting services used by this independent Osh Bazaar guide.",
    ],
    terms: [
      "Terms of use | Osh Bazaar Guide",
      "Information limits, current-status checks, external sources and historic image licensing for this independent Osh Bazaar visitor guide.",
    ],
    cookies: [
      "Cookies and storage | Osh Bazaar Guide",
      "Information about Google Analytics and forecast caching, with browser controls for cookies and storage.",
    ],
    error: [
      "404 — Page not found | Osh Bazaar",
      "This address is unavailable. Return to the independent Osh Bazaar guide.",
    ],
  },
};
const esc = s =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const routes = [];
for (const locale of ["ky", "en"])
  for (const page of ["home", "privacy", "terms", "cookies", "error"]) {
    const prefix = locale === "en" ? "/en" : "",
      suffix = page === "home" ? "/" : "/" + (page === "error" ? "404" : page),
      route = prefix + suffix;
    const [title, description] = meta[locale][page];
    let tags = `<meta name="description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${origin + route}"><meta property="og:image" content="${origin}/assets/social.jpg"><meta property="og:image:alt" content="Historic 2007 market photograph by Thomas Depenbusch (Depi), CC BY 2.0"><meta name="twitter:card" content="summary_large_image">`;
    if (page === "error")
      tags += '<meta name="robots" content="noindex, follow">';
    else
      tags += `<link rel="canonical" href="${origin + route}"><link rel="alternate" hreflang="ky" href="${origin + suffix}"><link rel="alternate" hreflang="en" href="${origin + "/en" + suffix}"><link rel="alternate" hreflang="x-default" href="${origin + suffix}">`;
    const html = template
      .replace('<html lang="ky">', `<html lang="${locale}">`)
      .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>${tags}`)
      .replace(
        '<div id="root"></div>',
        `<div id="root">${render(route)}</div>`
      );
    const file =
      page === "error"
        ? `dist/public${prefix}/404.html`
        : page === "home"
          ? `dist/public${prefix}/index.html`
          : `dist/public${route}/index.html`;
    await mkdir(file.slice(0, file.lastIndexOf("/")), { recursive: true });
    await writeFile(file, html);
    if (page !== "error") routes.push(route);
  }
await writeFile(
  "dist/public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${origin + route}</loc></url>`).join("")}</urlset>`
);
await writeFile(
  "dist/public/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
);
