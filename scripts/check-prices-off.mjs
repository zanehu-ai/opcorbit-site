/**
 * Prices-off gate.
 *
 * Applies /\$[0-9]/ to published HTML after script and style tags are removed.
 * A raw `grep -R -E '\$[0-9]' out` cannot pass this Next.js export:
 * the RSC payload uses "$" plus a row id ("$2"), minified bundles contain
 * regex replacements ("$1"), and the Quillfen WebP bytes contain the same
 * two-byte sequence. None of those are prices.
 *
 * The flight payload is not scanned: Next.js writes RSC row ids ("$2")
 * and style paths ("$0:t:t:...") into every page, and those match the
 * regex without being prices. The production-default noindex policy is
 * checked as well.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = "out";
const visiblePrice = /\$[0-9]/g;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function visibleHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
}

function snippet(text, index) {
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + 40);
  return text.slice(start, end).replace(/\s+/g, " ");
}

const failures = [];

let files;
try {
  files = await walk(root);
} catch (error) {
  console.error(`prices-off: cannot read ${root}: ${error.message}`);
  process.exit(1);
}

const htmlFiles = files.filter((file) => file.endsWith(".html"));
if (htmlFiles.length === 0) {
  console.error("prices-off: no HTML files under out/");
  process.exit(1);
}

for (const file of htmlFiles) {
  const raw = await readFile(file, "utf8");
  const visible = visibleHtml(raw);
  for (const match of visible.matchAll(visiblePrice)) {
    failures.push(`${file}: visible $[0-9] ${JSON.stringify(snippet(visible, match.index ?? 0))}`);
  }
}

const robots = await readFile(path.join(root, "robots.txt"), "utf8");
if (!/Disallow:\s*\//.test(robots)) {
  failures.push("out/robots.txt: production default must disallow /");
}
if (/Allow:\s*\//.test(robots) && !/Disallow:\s*\//.test(robots)) {
  failures.push("out/robots.txt: production default must not allow crawling");
}

for (const page of ["index.html", "dev/index.html", "creative/index.html"]) {
  const html = await readFile(path.join(root, page), "utf8");
  if (!html.includes("noindex")) {
    failures.push(`${page}: production default must send noindex`);
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  console.error(`prices-off: ${failures.length} problem(s)`);
  process.exit(1);
}

console.log(
  `prices-off: no $[0-9] in visible HTML across ${htmlFiles.length} pages; robots disallow /; noindex present`,
);
