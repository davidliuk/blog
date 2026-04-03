/**
 * After `vuepress build`, emit static HTML under dist/blog/** that mirror each
 * built page and redirect to the same path without the /blog prefix.
 *
 * Works on static hosts (e.g. GitHub Pages) where server rewrites are unavailable.
 * Set VP_CANONICAL_ORIGIN if the public origin differs from the default.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const dist = path.join(repoRoot, "src/.vuepress/dist");
const CANONICAL_ORIGIN = (
  process.env.VP_CANONICAL_ORIGIN || "https://davidliuk.github.io"
).replace(/\/$/, "");

function shouldSkipScan(relPosix) {
  if (relPosix.startsWith("assets/")) return true;
  if (relPosix.startsWith("blog/")) return true;
  return false;
}

function htmlRedirect(targetPath) {
  const canonical = CANONICAL_ORIGIN + targetPath;
  const esc = JSON.stringify(targetPath);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <title>Redirecting…</title>
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="refresh" content="0;url=${targetPath}">
  <script>location.replace(${esc});</script>
</head>
<body>
  <p>This page has moved. <a href="${targetPath}">Continue to the new location</a>.</p>
</body>
</html>
`;
}

function collectHtmlFiles(dir, rel = "") {
  const out = [];
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${name.name}` : name.name;
    const posix = r.replace(/\\/g, "/");
    if (name.isDirectory()) {
      if (shouldSkipScan(posix)) continue;
      out.push(...collectHtmlFiles(path.join(dir, name.name), r));
    } else if (name.isFile() && name.name.endsWith(".html")) {
      if (shouldSkipScan(posix)) continue;
      out.push({ rel: posix });
    }
  }
  return out;
}

/** Map dist-relative file to site URL path (with base /). */
function relToUrl(rel) {
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) {
    const dir = rel.slice(0, -"/index.html".length);
    return `/${dir}/`;
  }
  return `/${rel}`;
}

/** Where to write the redirect stub under dist/blog/. */
function blogStubFile(rel) {
  if (rel === "index.html") return path.join(dist, "blog", "index.html");
  if (rel.endsWith("/index.html")) {
    const dir = rel.slice(0, -"/index.html".length);
    return path.join(dist, "blog", dir, "index.html");
  }
  return path.join(dist, "blog", rel);
}

function writeStub(absFile, content) {
  fs.mkdirSync(path.dirname(absFile), { recursive: true });
  fs.writeFileSync(absFile, content, "utf8");
}

function main() {
  if (!fs.existsSync(dist)) {
    console.error("inject-blog-redirects: dist not found at", dist);
    process.exit(1);
  }

  const files = collectHtmlFiles(dist);
  let n = 0;
  for (const { rel } of files) {
    const target = relToUrl(rel);
    writeStub(blogStubFile(rel), htmlRedirect(target));
    n += 1;
  }

  console.log(`inject-blog-redirects: wrote ${n} stubs under dist/blog/ → site root`);
}

main();
