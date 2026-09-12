import { expect, test } from "@playwright/test";

test("homepage is responsive, accessible and interactive", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page.locator(".portfolio-intro")).toBeVisible();
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("vite-error-overlay")).toHaveCount(0);

  const invalidAnchors = await page.locator('a[href^="#"]').evaluateAll((links) =>
    links
      .map((link) => link.getAttribute("href") ?? "")
      .filter((hash) => hash && !document.getElementById(decodeURIComponent(hash.slice(1)))),
  );
  expect(invalidAnchors).toEqual([]);

  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(
      await page.locator(".portfolio-intro__button").evaluateAll((actions) =>
        actions.every((action) => {
          const box = action.getBoundingClientRect();
          return box.left >= 0 && box.right <= innerWidth && box.height >= 44;
        }),
      ),
    ).toBe(true);
    expect(
      await page.locator(".publications-open-source").evaluate((grid) =>
        getComputedStyle(grid).gridTemplateColumns.split(" ").length,
      ),
    ).toBe(width > 1099 ? 3 : 1);
  }

  for (const [id, expectedFile] of [
    ["repo-graph-of-skills", "gos.webp"],
    ["repo-dr-claw", "drclaw.webp"],
    ["repo-lhtb", "lhtb.webp"],
  ]) {
    await expect(page.locator(`#${id} img`)).toHaveAttribute("src", new RegExp(`${expectedFile}$`));
  }

  await page.locator(".portfolio-intro__button--primary").click();
  await expect(page).toHaveURL(/#publications$/u);
  expect(
    await page.locator("#publications").evaluate((heading) => {
      const rail = document.querySelector(".home-page-nav");
      return Boolean(rail && heading.getBoundingClientRect().top >= rail.getBoundingClientRect().bottom - 1);
    }),
  ).toBe(true);

  const abstractButton = page.locator("#paper-graph-of-skills .abs-action");
  await abstractButton.click();
  await expect(abstractButton).toHaveAttribute("aria-expanded", "true");
  await abstractButton.click();
  await expect(abstractButton).toHaveAttribute("aria-expanded", "false");

  await page.locator("#paper-graph-of-skills .copy-button").click();
  await expect(page.locator("#paper-graph-of-skills .copy-button")).toContainText("BibTeX copied");

  await page.locator('.home-page-nav a[href="#updates"]').click();
  await page.locator(".news-timeline button").click();
  await expect(page.locator(".news-timeline button")).toHaveAttribute("aria-expanded", "true");

  await page.setViewportSize({ width: 390, height: 844 });
  const contact = page.locator('.home-page-nav a[href="#contact"]');
  await contact.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#contact")).toBeFocused();
  await expect(contact).toHaveAttribute("aria-current", "location");

  await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("knowledge pages, language metadata and legacy redirects work", async ({ page }) => {
  await page.goto("/ai/");
  await expect(page.locator("#ai-systems")).toContainText("AI Systems");
  await expect(page.locator(".portfolio-intro")).toHaveCount(0);
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");

  await page.goto("/blog/ai/");
  await expect(page).toHaveURL(/\/ai\/$/u);
  await expect(page.locator("#ai-systems")).toContainText("AI Systems");

  const pdf = await page.request.get("/resume/david-liu-resume.pdf");
  expect(pdf.ok()).toBe(true);
  expect(pdf.headers()["content-type"]).toContain("pdf");
});
