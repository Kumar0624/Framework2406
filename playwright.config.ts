import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  //workers: 1,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    
    headless: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    //video: 'on',

  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: "chromium",
        viewport: null, // disable the deafult 1280x720
        //storageState: 'login_leaf.json', 
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },

  ],
});
