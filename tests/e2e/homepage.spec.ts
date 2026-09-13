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

  await page.setViewportSize({ width: 1440, height: 1000 });
  const contentWidths = await page.evaluate(() => ({
    header: document.querySelector(".vp-portfolio-container")?.getBoundingClientRect().width ?? 0,
    body: document.querySelector("#markdown-content")?.getBoundingClientRect().width ?? 0,
  }));
  expect(Math.abs(contentWidths.header - contentWidths.body)).toBeLessThanOrEqual(1);

  await expect(page.getByRole("button", { name: "Archive" })).toHaveCount(0);
  const navbarBounds = await page.evaluate(() => {
    const center = document.querySelector("#navbar .vp-navbar-center")?.getBoundingClientRect();
    const end = document.querySelector("#navbar .vp-navbar-end")?.getBoundingClientRect();
    return { centerRight: center?.right ?? 0, endLeft: end?.left ?? 0 };
  });
  expect(navbarBounds.centerRight).toBeLessThanOrEqual(navbarBounds.endLeft + 1);

  for (const [id, expectedFile] of [
    ["repo-graph-of-skills", "gos.webp"],
    ["repo-dr-claw", "drclaw.webp"],
    ["repo-lhtb", "lhtb.webp"],
  ]) {
    await expect(page.locator(`#${id} img`)).toHaveAttribute("src", new RegExp(`${expectedFile}$`));
    const alignment = await page.locator(`#${id}`).evaluate((card) => {
      const head = card.querySelector(".pub-head")?.getBoundingClientRect();
      const image = card.querySelector(".pub-img")?.getBoundingClientRect();
      return {
        offset: head && image ? Math.abs((head.left + head.width / 2) - (image.left + image.width / 2)) : 999,
      };
    });
    expect(alignment.offset).toBeLessThanOrEqual(1);
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

  const searchButton = page.getByRole("button", { name: "Search" });
  await expect(searchButton).toBeVisible();
  await searchButton.click();
  await page.locator("#slimsearch-input").fill("Speculative Decoding");
  await expect(page.locator("#slimsearch-results")).toContainText("Speculative Decoding");

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator(".pub-card").first()).toHaveCSS("opacity", "1");
  expect(errors).toEqual([]);
});

test("knowledge pages, language metadata and legacy redirects work", async ({ page }) => {
  await page.goto("/ai/");
  await expect(page.locator("#ai-systems")).toContainText("AI Systems");
  await expect(page.locator(".portfolio-intro")).toHaveCount(0);
  await expect(page.locator("html")).toHaveAttribute("lang", "en-US");

  await page.goto("/ai/engineering/data.html");
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");

  await page.goto("/blog/ai/");
  await expect(page).toHaveURL(/\/ai\/$/u);
  await expect(page.locator("#ai-systems")).toContainText("AI Systems");

  const pdf = await page.request.get("/resume/david-liu-resume.pdf");
  expect(pdf.ok()).toBe(true);
  expect(pdf.headers()["content-type"]).toContain("pdf");
});

test("navbar communicates the active section and supports keyboard dropdowns", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });

  await page.goto("/");
  const homeItem = page.locator("#navbar .vp-nav-links > .vp-nav-item").filter({
    has: page.getByRole("link", { name: "Home", exact: true }),
  });
  await expect(homeItem).toHaveAttribute("data-route-active", "");
  await expect(homeItem.locator(":scope > a")).toHaveCSS("color", /.+/u);
  expect(
    await homeItem.locator(":scope > a").evaluate((link) => getComputedStyle(link, "::before").display),
  ).toBe("none");

  await page.goto("/ai/gm/inference/");
  const aiItem = page.locator("#navbar .vp-nav-links > .vp-nav-item").filter({
    has: page.getByRole("button", { name: "AI Systems", exact: true }),
  });
  const aiTrigger = aiItem.getByRole("button", { name: "AI Systems", exact: true });
  await expect(aiItem).toHaveAttribute("data-route-active", "");
  await expect(aiTrigger).toHaveAttribute("aria-current", "location");
  await expect(homeItem).not.toHaveAttribute("data-route-active", "");

  await aiTrigger.focus();
  await page.keyboard.press("Enter");
  await expect(aiTrigger).toHaveAttribute("aria-expanded", "true");
  await expect(aiTrigger.locator(":scope > .vp-dropdown")).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(aiTrigger).toHaveAttribute("aria-expanded", "false");
  await expect(aiTrigger).toBeFocused();

  await page.goto("/se/database/mysql/");
  const engineeringItem = page.locator("#navbar .vp-nav-links > .vp-nav-item").filter({
    has: page.getByRole("button", { name: "Software Engineering", exact: true }),
  });
  await expect(engineeringItem).toHaveAttribute("data-route-active", "");
  await expect(engineeringItem.getByRole("button", { name: "Software Engineering", exact: true })).toHaveAttribute(
    "aria-current",
    "location",
  );
});
