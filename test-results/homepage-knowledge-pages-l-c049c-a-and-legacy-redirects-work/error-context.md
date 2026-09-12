# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> knowledge pages, language metadata and legacy redirects work
- Location: tests/e2e/homepage.spec.ts:81:1

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('html')
Expected: "zh-CN"
Received: "en-US"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" locator('html') with timeout 5000ms
  - waiting for locator('html')
    4 × locator resolved to <html lang="en-US" data-theme="light">…</html>
      - unexpected value "en-US"
    - locator resolved to <html lang="en-US" data-theme="light" class="fontawesome-i2svg-pending">…</html>
    9 × unexpected value "en-US"
      - locator resolved to <html lang="en-US" data-theme="light" class="fontawesome-i2svg-active fontawesome-i2svg-complete">…</html>
    - unexpected value "en-US"

```

```yaml
- document:
  - link "Skip to main content":
    - /url: "#main-content"
  - banner
  - complementary
  - main
  - contentinfo
  - text: Opens in a new tab
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | 
  3  | test("homepage is responsive, accessible and interactive", async ({ page }) => {
  4  |   const errors: string[] = [];
  5  |   page.on("pageerror", (error) => errors.push(error.message));
  6  |   page.on("console", (message) => {
  7  |     if (message.type() === "error") errors.push(message.text());
  8  |   });
  9  | 
  10 |   await page.goto("/");
  11 |   await expect(page.locator(".portfolio-intro")).toBeVisible();
  12 |   await expect(page.locator("h1")).toHaveCount(1);
  13 |   await expect(page.locator("vite-error-overlay")).toHaveCount(0);
  14 | 
  15 |   const invalidAnchors = await page.locator('a[href^="#"]').evaluateAll((links) =>
  16 |     links
  17 |       .map((link) => link.getAttribute("href") ?? "")
  18 |       .filter((hash) => hash && !document.getElementById(decodeURIComponent(hash.slice(1)))),
  19 |   );
  20 |   expect(invalidAnchors).toEqual([]);
  21 | 
  22 |   for (const width of [320, 390, 768, 1024, 1440]) {
  23 |     await page.setViewportSize({ width, height: 1000 });
  24 |     expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  25 |     expect(
  26 |       await page.locator(".portfolio-intro__button").evaluateAll((actions) =>
  27 |         actions.every((action) => {
  28 |           const box = action.getBoundingClientRect();
  29 |           return box.left >= 0 && box.right <= innerWidth && box.height >= 44;
  30 |         }),
  31 |       ),
  32 |     ).toBe(true);
  33 |     expect(
  34 |       await page.locator(".publications-open-source").evaluate((grid) =>
  35 |         getComputedStyle(grid).gridTemplateColumns.split(" ").length,
  36 |       ),
  37 |     ).toBe(width > 1099 ? 3 : 1);
  38 |   }
  39 | 
  40 |   for (const [id, expectedFile] of [
  41 |     ["repo-graph-of-skills", "gos.webp"],
  42 |     ["repo-dr-claw", "drclaw.webp"],
  43 |     ["repo-lhtb", "lhtb.webp"],
  44 |   ]) {
  45 |     await expect(page.locator(`#${id} img`)).toHaveAttribute("src", new RegExp(`${expectedFile}$`));
  46 |   }
  47 | 
  48 |   await page.locator(".portfolio-intro__button--primary").click();
  49 |   await expect(page).toHaveURL(/#publications$/u);
  50 |   expect(
  51 |     await page.locator("#publications").evaluate((heading) => {
  52 |       const rail = document.querySelector(".home-page-nav");
  53 |       return Boolean(rail && heading.getBoundingClientRect().top >= rail.getBoundingClientRect().bottom - 1);
  54 |     }),
  55 |   ).toBe(true);
  56 | 
  57 |   const abstractButton = page.locator("#paper-graph-of-skills .abs-action");
  58 |   await abstractButton.click();
  59 |   await expect(abstractButton).toHaveAttribute("aria-expanded", "true");
  60 |   await abstractButton.click();
  61 |   await expect(abstractButton).toHaveAttribute("aria-expanded", "false");
  62 | 
  63 |   await page.locator("#paper-graph-of-skills .copy-button").click();
  64 |   await expect(page.locator("#paper-graph-of-skills .copy-button")).toContainText("BibTeX copied");
  65 | 
  66 |   await page.locator('.home-page-nav a[href="#updates"]').click();
  67 |   await page.locator(".news-timeline button").click();
  68 |   await expect(page.locator(".news-timeline button")).toHaveAttribute("aria-expanded", "true");
  69 | 
  70 |   await page.setViewportSize({ width: 390, height: 844 });
  71 |   const contact = page.locator('.home-page-nav a[href="#contact"]');
  72 |   await contact.focus();
  73 |   await page.keyboard.press("Enter");
  74 |   await expect(page.locator("#contact")).toBeFocused();
  75 |   await expect(contact).toHaveAttribute("aria-current", "location");
  76 | 
  77 |   await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  78 |   expect(errors).toEqual([]);
  79 | });
  80 | 
  81 | test("knowledge pages, language metadata and legacy redirects work", async ({ page }) => {
  82 |   await page.goto("/ai/");
  83 |   await expect(page.locator("#ai-systems")).toContainText("AI Systems");
  84 |   await expect(page.locator(".portfolio-intro")).toHaveCount(0);
> 85 |   await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
     |                                      ^ Error: expect(locator).toHaveAttribute(expected) failed
  86 | 
  87 |   await page.goto("/blog/ai/");
  88 |   await expect(page).toHaveURL(/\/ai\/$/u);
  89 |   await expect(page.locator("#ai-systems")).toContainText("AI Systems");
  90 | 
  91 |   const pdf = await page.request.get("/resume/david-liu-resume.pdf");
  92 |   expect(pdf.ok()).toBe(true);
  93 |   expect(pdf.headers()["content-type"]).toContain("pdf");
  94 | });
  95 | 
```