/**
 * Build-time snapshot of GitHub star counts for the repositories linked from
 * the homepage. Writes src/.vuepress/public/data/github-stars.json, which
 * PublicationCard reads first (one same-origin request, cached by the PWA)
 * before falling back to the live GitHub API.
 *
 * The API is only consulted here, at build time, so visitors never spend
 * their unauthenticated 60-requests-per-hour quota on this page. If the fetch
 * fails (offline, rate-limited), the previous snapshot is kept as-is.
 *
 * Set GITHUB_TOKEN in CI to lift the rate limit.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const out = path.join(repoRoot, "src/.vuepress/public/data/github-stars.json");
const sources = [
  path.join(repoRoot, "src/README.md"),
  path.join(repoRoot, "src/.vuepress/data/portfolio.ts"),
].map((file) => fs.readFileSync(file, "utf8")).join("\n");

const repos = [...new Set(
  [...sources.matchAll(/github\.com\/([\w.-]+)\/([\w.-]+)/g)]
    .map((m) => `${m[1]}/${m[2]}`)
    .filter((r) => !/^davidliuk\/blog$/.test(r)),
)];

let previous = {};
try {
  previous = JSON.parse(fs.readFileSync(out, "utf8")).repos ?? {};
} catch {
  previous = {};
}

const headers = { Accept: "application/vnd.github+json", "User-Agent": "davidliuk-blog-build" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const result = { ...previous };
let updated = 0;
for (const repo of repos) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = await res.json();
    if (typeof data.stargazers_count === "number") {
      result[repo] = { stars: data.stargazers_count, forks: data.forks_count ?? null };
      updated += 1;
    }
  } catch (error) {
    console.warn(`fetch-github-stars: keeping previous value for ${repo} (${error.message})`);
  }
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(
  out,
  JSON.stringify({ generatedAt: new Date().toISOString(), repos: result }, null, 2) + "\n",
);
console.log(`fetch-github-stars: ${updated}/${repos.length} repositories refreshed → ${path.relative(repoRoot, out)}`);
