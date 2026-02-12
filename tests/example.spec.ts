import { test } from '../fixtures/customFixture';

test('has title', async ({ lopfix , page }) => {
  await page.goto('https://playwright.dev/');
  await lopfix.clickHomepage();
});



test.skip('get started link', async ({ page }) => {
await page.goto('https://playwright.dev/');
});
