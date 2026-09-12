import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(repoRoot, "src");
const publicRoot = path.join(sourceRoot, ".vuepress/public");
const distRoot = path.join(sourceRoot, ".vuepress/dist");

const limits = {
  imageBytes: 300 * 1024,
  publicationTotalBytes: 400 * 1024,
  distBytes: 130 * 1024 * 1024,
  homepageHtmlBytes: 150 * 1024,
  appGzipBytes: 230 * 1024,
  cssGzipBytes: 70 * 1024,
};

function walk(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(absolute, predicate));
    else if (entry.isFile() && predicate(absolute)) files.push(absolute);
  }
  return files;
}

function bytes(files) {
  return files.reduce((total, file) => total + fs.statSync(file).size, 0);
}

function check(condition, message) {
  assert.ok(condition, message);
  console.log(`PASS ${message}`);
}

const sourceFiles = walk(sourceRoot, (file) =>
  /\.(?:md|ts|vue|scss|mjs|json)$/u.test(file) &&
  !file.includes(`${path.sep}.vuepress${path.sep}dist${path.sep}`) &&
  !file.includes(`${path.sep}.vuepress${path.sep}.temp${path.sep}`),
);
const sourceText = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");

const imageFiles = walk(publicRoot, (file) => /\.(?:png|jpe?g|webp|avif|svg)$/iu.test(file));
const oversizedImages = imageFiles.filter((file) => fs.statSync(file).size > limits.imageBytes);
check(
  oversizedImages.length === 0,
  `Every source image is at most ${limits.imageBytes / 1024} KiB`,
);

const publicationFiles = walk(path.join(publicRoot, "publication"), (file) =>
  /\.(?:png|jpe?g|webp|avif)$/iu.test(file),
);
check(
  bytes(publicationFiles) <= limits.publicationTotalBytes,
  `Publication images total at most ${limits.publicationTotalBytes / 1024} KiB`,
);

const unusedPublicationFiles = publicationFiles.filter((file) => {
  const publicPath = `/${path.relative(publicRoot, file).split(path.sep).join("/")}`;
  return !sourceText.includes(publicPath);
});
check(unusedPublicationFiles.length === 0, "Every publication image is referenced");

for (const expected of ["gos.webp", "drclaw.webp", "lhtb.webp"]) {
  check(
    sourceText.includes(`/publication/${expected}`),
    `Open Source uses ${expected}`,
  );
}

check(fs.existsSync(distRoot), "Built site exists");
check(!fs.existsSync(path.join(distRoot, "blog")), "Build does not duplicate pages under dist/blog");

const distFiles = walk(distRoot);
check(bytes(distFiles) <= limits.distBytes, `Built site is at most ${limits.distBytes / 1024 / 1024} MiB`);

const homepage = path.join(distRoot, "index.html");
check(fs.statSync(homepage).size <= limits.homepageHtmlBytes, "Homepage HTML stays within budget");

const assetFiles = walk(path.join(distRoot, "assets"));
const appFile = assetFiles.find((file) => /\/app-[^/]+\.js$/u.test(file));
const cssFile = assetFiles.find((file) => /\/style-[^/]+\.css$/u.test(file));
check(Boolean(appFile), "Shared app bundle exists");
check(Boolean(cssFile), "Shared stylesheet exists");
check(gzipSync(fs.readFileSync(appFile)).byteLength <= limits.appGzipBytes, "Shared app gzip stays within budget");
check(gzipSync(fs.readFileSync(cssFile)).byteLength <= limits.cssGzipBytes, "Shared CSS gzip stays within budget");
check(fs.existsSync(path.join(distRoot, "slimsearch.worker.js")), "Local search index is generated");

const htmlFiles = walk(distRoot, (file) => file.endsWith(".html"));
const languageCounts = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const lang = html.match(/<html lang="([^"]+)"/u)?.[1] ?? "missing";
  languageCounts.set(lang, (languageCounts.get(lang) ?? 0) + 1);
}
check((languageCounts.get("zh-CN") ?? 0) > 0, "Predominantly Chinese pages emit lang=zh-CN");
check((languageCounts.get("en-US") ?? 0) > 0, "English pages retain lang=en-US");

const broken = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/gu)) {
    const raw = match[1];
    if (!raw.startsWith("/") || raw.startsWith("//")) continue;
    const pathname = decodeURIComponent(raw.split(/[?#]/u)[0]);
    if (!pathname) continue;
    const absolute = path.join(distRoot, pathname);
    const candidates = pathname.endsWith("/")
      ? [path.join(absolute, "index.html")]
      : [absolute, `${absolute}.html`, path.join(absolute, "index.html")];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      broken.push(`${path.relative(distRoot, file)} -> ${raw}`);
    }
  }
}
check(broken.length === 0, `All ${htmlFiles.length} generated pages have valid internal assets and links`);

console.log(
  `Site verification complete: ${htmlFiles.length} HTML pages, ${Math.round(bytes(distFiles) / 1024 / 1024)} MiB, languages ${JSON.stringify(Object.fromEntries(languageCounts))}`,
);
