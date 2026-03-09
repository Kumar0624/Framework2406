import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  console.log("🚀 Before All: Launching browser once");
  page = await browser.newPage();
});

test.beforeEach(async () => {
  console.log("🔐 Before Each: Logging into application");

  await page.goto('https://example-crm.com');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin123');
  await page.click('button[type="submit"]');
});

test.afterEach(async ({}, testInfo) => {
  console.log("📸 After Each: Checking test status");

  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }

  await page.click('#logout'); // Logout after each test
});

test.afterAll(async () => {
  console.log("🛑 After All: Closing browser");
  await page.close();
});

test('Create Lead Test', async () => {
  await page.click('#createLead');
  await page.fill('#company', 'TCS');
  await page.click('#submit');
  await expect(page.locator('.success')).toBeVisible();
});