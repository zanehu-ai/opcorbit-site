import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");

const requiredPages = [
  "index.html",
  "pricing/index.html",
  "contact/index.html",
  "terms/index.html",
  "privacy/index.html",
  "refund/index.html",
];

const forbiddenTerms = [
  "russia",
  "russian",
  "moscow",
  "cargo",
  "freight",
  "escrow",
  "coming soon",
  "draft.",
  "noindex",
  "outbound sales",
  "ad creative",
  "done-for-you",
  "[to confirm]",
  "32 n gould st",
];

const globalRequired = [
  "OpcOrbit LLC",
  "30 N Gould St Ste R, Sheridan, WY 82801",
  "support@opcorbit.com",
  "/terms/",
  "/privacy/",
  "/refund/",
];

const pricingRequired = ["$29", "$99", "$299", "OPCORBIT"];

function stripScriptAndStyle(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function assert(condition, message, failures) {
  if (!condition) failures.push(message);
}

function main() {
  const failures = [];

  assert(fs.existsSync(outDir), `Missing static export directory: ${outDir}`, failures);
  if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exit(1);
  }

  for (const relPath of requiredPages) {
    const absPath = path.join(outDir, relPath);
    if (!fs.existsSync(absPath)) {
      failures.push(`Missing required exported page: ${relPath}`);
      continue;
    }

    const rawHtml = fs.readFileSync(absPath, "utf8");
    const visibleText = stripScriptAndStyle(rawHtml);
    const combinedLower = `${rawHtml}\n${visibleText}`.toLowerCase();

    for (const forbidden of forbiddenTerms) {
      if (combinedLower.includes(forbidden)) {
        failures.push(`[${relPath}] contains forbidden term: "${forbidden}"`);
      }
    }

    for (const required of globalRequired) {
      if (!rawHtml.includes(required)) {
        failures.push(`[${relPath}] missing required compliance string: "${required}"`);
      }
    }

    if (relPath === "index.html" || relPath === "pricing/index.html") {
      for (const priceToken of pricingRequired) {
        if (!visibleText.includes(priceToken)) {
          failures.push(`[${relPath}] missing required pricing/descriptor text: "${priceToken}"`);
        }
      }
    }
  }

  const robotsPath = path.join(outDir, "robots.txt");
  if (!fs.existsSync(robotsPath)) {
    failures.push("Missing out/robots.txt");
  } else {
    const robots = fs.readFileSync(robotsPath, "utf8");
    assert(robots.includes("Allow: /"), "robots.txt must include 'Allow: /'", failures);
    assert(!robots.includes("Disallow: /"), "robots.txt must not include 'Disallow: /'", failures);
    assert(
      robots.includes("https://www.opcorbit.com/sitemap.xml"),
      "robots.txt must reference sitemap.xml",
      failures,
    );
  }

  const sitemapPath = path.join(outDir, "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    failures.push("Missing out/sitemap.xml");
  } else {
    const sitemap = fs.readFileSync(sitemapPath, "utf8");
    const expectedUrls = [
      "https://www.opcorbit.com/",
      "https://www.opcorbit.com/pricing/",
      "https://www.opcorbit.com/contact/",
      "https://www.opcorbit.com/terms/",
      "https://www.opcorbit.com/privacy/",
      "https://www.opcorbit.com/refund/",
    ];
    for (const url of expectedUrls) {
      assert(sitemap.includes(`<loc>${url}</loc>`), `sitemap.xml missing <loc>${url}</loc>`, failures);
    }
  }

  if (failures.length > 0) {
    console.error("Compliance checks failed:\n- " + failures.join("\n- "));
    process.exit(1);
  }

  console.log(`Compliance checks passed for ${requiredPages.length} pages, robots.txt, and sitemap.xml.`);
}

main();
