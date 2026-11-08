import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.beforeEach(async ({ page }) => {
  await page.route("https://api.emailjs.com/**", (route) => route.abort());
});
test("primary journeys and accessible content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pawan Sargar.",
  );
  await expect(
    page.getByRole("heading", { name: "Cassandra Risk", exact: true }),
  ).toBeVisible();
  await page.getByRole("article", { name: "Cassandra Risk", exact: true }).locator("summary").click();
  await page.getByRole("link", { name: "Inside the project" }).click();
  await expect(page).toHaveURL(/\/work\/cassandra-risk$/);
  await expect(
    page.getByRole("heading", { name: "My contribution" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Visit Cassandra Risk" }),
  ).toHaveAttribute("href", "https://cassandrarisk.com");
  await page.getByRole("link", { name: "Back to selected work" }).click();
  await expect(page).toHaveURL(/\/#work$/);
  await page.getByRole("link", { name: "Writing", exact: true }).click();
  await page
    .getByRole("link", {
      name: "Getting Started with Next.js: A Complete Guide",
      exact: true,
    })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Getting Started with Next.js: A Complete Guide", exact: true })).toHaveCount(1);
  await expect(page.locator("pre code").first()).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://pavansargar.com/blog/getting-started-with-nextjs",
  );
  await page.goto("/blog/modern-web-development-trends");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Modern Web Development",
  );
  const response = await page.goto("/blog/nonexistent-post");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "A small wrong turn." }),
  ).toBeVisible();
  expect((await page.goto("/not-a-real-page"))?.status()).toBe(404);
});
test("project accordions start closed and reveal the right screenshots and links", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".project-card h3")).toHaveText(["Cassandra Risk", "YapTxt", "VFX AI"]);
  await expect(page.locator(".project-details[open]")).toHaveCount(0);
  await expect(page.locator(".project-grid img:visible")).toHaveCount(0);
  for (const [name, url, alt] of [
    ["Cassandra Risk", "https://cassandrarisk.com", /Cassandra Risk public website/],
    ["YapTxt", "https://yaptxt.com", /YapTxt public website/],
    ["VFX AI", "https://www.vfxai.com", /VFX AI public product page/],
  ] as const) {
    const trigger = page.getByRole("article", { name, exact: true }).locator("summary");
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".project-details[open]")).toHaveCount(1);
    await expect(page.getByAltText(alt)).toBeVisible();
    await expect(page.getByRole("link", { name: `Visit ${name}`, exact: true })).toHaveAttribute("href", url);
  }
  await expect(page.locator(".project-vfx")).toContainText("Radiansys");
  await page.getByRole("article", { name: "VFX AI", exact: true }).locator("summary").press("Space");
  await expect(page.locator(".project-details[open]")).toHaveCount(0);
});
for (const width of [320, 390, 768, 1280]) {
  test(`responsive layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/work/cassandra-risk",
      "/blog",
      "/blog/getting-started-with-nextjs",
    ]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      if (path === "/") {
        await expect(page.locator(".hero-portrait").getByAltText(/Pawan Sargar standing/)).toBeVisible();
        await expect
          .poll(() =>
            page.locator("img").evaluateAll((images) =>
              images
                .map((el) => el as HTMLImageElement)
                .filter((img) => img.loading !== "lazy")
                .every((img) => img.complete && img.naturalWidth > 0),
            ),
          )
          .toBe(true);
        for (const img of await page.locator("img:visible").all()) {
          await img.scrollIntoViewIfNeeded();
          await expect
            .poll(() =>
              img.evaluate(
                (el) =>
                  (el as HTMLImageElement).complete &&
                  (el as HTMLImageElement).naturalWidth > 0,
              ),
            )
            .toBe(true);
        }
        await page.getByRole("heading", { level: 1 }).scrollIntoViewIfNeeded();
        await page.screenshot({
          path: `test-results/home-${width}.png`,
          fullPage: true,
          animations: "disabled",
        });
        for (const name of ["Cassandra Risk", "YapTxt", "VFX AI"]) {
          await page.getByRole("article", { name, exact: true }).locator("summary").click();
          const image = page.locator(".project-details[open] img");
          await image.scrollIntoViewIfNeeded();
          await expect.poll(() => image.evaluate((el) => (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0)).toBe(true);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        }
      }
    }
  });
}
test("mobile menu, escape, anchors and focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(
    page.getByRole("button", { name: "Close", exact: false }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Menu" })).toBeFocused();
  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/#about$/);
  await expect(page.getByRole("button", { name: "Menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.getByRole("textbox", { name: "Your name" }).focus();
  expect(
    await page
      .getByRole("textbox", { name: "Your name" })
      .evaluate((el) => getComputedStyle(el).outlineStyle),
  ).not.toBe("none");
});
test("contact validates, recovers from failure and prevents duplicates", async ({
  page,
}) => {
  let calls = 0;
  let release: (() => void) | undefined;
  await page.unroute("https://api.emailjs.com/**");
  await page.route("https://api.emailjs.com/**", async (route) => {
    calls++;
    if (calls === 1) await route.fulfill({ status: 500, body: "Test failure" });
    else {
      await new Promise<void>((resolve) => {
        release = resolve;
      });
      await route.fulfill({ status: 200, body: "OK" });
    }
  });
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Send message" }).click();
  expect(calls).toBe(0);
  await page.getByRole("textbox", { name: "Your name" }).fill("Portfolio test");
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("test@example.com");
  await page
    .getByRole("textbox", { name: "What are you thinking?" })
    .fill("This is an intercepted test message.");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("status")).toContainText("could not be sent");
  await expect(page.getByRole("textbox", { name: "Your name" })).toHaveValue(
    "Portfolio test",
  );
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByRole("button", { name: "Sending" })).toBeDisabled();
  await expect.poll(() => calls).toBe(2);
  release?.();
  await expect(page.getByRole("status")).toContainText(
    "Your message has been sent",
  );
  await expect(page.getByRole("textbox", { name: "Your name" })).toHaveValue(
    "",
  );
  await expect(
    page.getByRole("button", { name: "Send message" }),
  ).toBeEnabled();
});
test("reduced motion and 200 percent text resize", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".hero-copy")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await page.addStyleTag({ content: "body { zoom: 2; }" });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
test("primary content and project links without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("article", { name: "Cassandra Risk", exact: true }).locator("summary").click();
  await page.getByRole("link", { name: "Inside the project" }).click();
  await expect(
    page.getByRole("heading", { name: "My contribution" }),
  ).toBeVisible();
  await context.close();
});
test("WCAG accessibility on the main page types", async ({ page }) => {
  for (const path of [
    "/",
    "/work/cassandra-risk",
    "/blog",
    "/blog/getting-started-with-nextjs",
  ]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      results.violations,
      `${path}: ${JSON.stringify(results.violations)}`,
    ).toEqual([]);
    if (path === "/") {
      await page.getByRole("article", { name: "Cassandra Risk", exact: true }).locator("summary").click();
      const expanded = await new AxeBuilder({ page }).include("#work").withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      expect(expanded.violations).toEqual([]);
    }
  }
});

test("photo stack selects, cycles and respects reduced motion", async ({ page }) => {
  await page.goto("/#about");
  const stack = page.getByRole("figure", { name: "A few snapshots from my life" });
  const choices = stack.getByRole("group", { name: "Choose a photo" });
  await expect(choices.getByRole("button")).toHaveText(["Desk", "Mountains", "Snow", "Paragliding"]);
  await expect(stack.getByRole("img")).toHaveCount(4);
  await expect(choices.getByRole("button", { name: "Desk", exact: true })).toHaveAttribute("aria-pressed", "true");
  for (const image of await stack.getByRole("img").all()) {
    await expect(image).toHaveAttribute("loading", "lazy");
  }
  for (const label of ["Mountains", "Snow", "Paragliding", "Desk"]) {
    const choice = choices.getByRole("button", { name: label, exact: true });
    await choice.focus();
    await choice.press("Enter");
    await expect(choice).toHaveAttribute("aria-pressed", "true");
    const front = stack.locator('.photo-card[data-rank="0"]');
    await expect(front).toHaveCount(1);
    await expect.poll(() => front.locator("img").evaluate((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true);
  }
  await stack.getByRole("button", { name: "Show next photo", exact: true }).click();
  await expect(choices.getByRole("button", { name: "Mountains", exact: true })).toHaveAttribute("aria-pressed", "true");
  expect(await stack.locator(".is-clockwise").evaluate((image) => getComputedStyle(image).transform)).toBe("matrix(0, 1, -1, 0, 0, 0)");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await choices.getByRole("button", { name: "Paragliding", exact: true }).click();
  expect(await stack.locator('.photo-card[data-rank="0"]').evaluate((card) => getComputedStyle(card).animationName)).toBe("none");
  expect((await new AxeBuilder({ page }).include(".photo-stack").withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze()).violations).toEqual([]);
});

for (const width of [390, 1280]) {
  test(`section navigation scrolls smoothly at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    for (const [label, id] of [["Work", "work"], ["Experience", "experience"], ["About", "about"], ["Contact", "contact"]]) {
      await page.goto("/");
      if (width < 760) await page.getByRole("button", { name: "Menu", exact: false }).click();
      await page.evaluate(() => {
        const positions: number[] = [];
        Object.assign(window, { scrollSamples: positions });
        window.addEventListener("scroll", () => positions.push(scrollY), { passive: true });
      });
      await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect.poll(() => page.locator(`#${id}`).evaluate((section) => {
        const root = document.documentElement;
        const destination = Math.min(section.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(root).scrollPaddingTop), root.scrollHeight - innerHeight);
        return Math.abs(scrollY - destination);
      })).toBeLessThan(2);
      const intermediateScroll = await page.evaluate(() => (window as Window & { scrollSamples?: number[] }).scrollSamples?.some((position) => position > 1 && position < scrollY - 1));
      expect(intermediateScroll).toBe(true);
    }
    await page.goto("/blog");
    if (width < 760) await page.getByRole("button", { name: "Menu", exact: false }).click();
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/\/#about$/);
    await expect(page.getByRole("heading", { name: "There’s always something to figure out." })).toBeInViewport();
  });
}
