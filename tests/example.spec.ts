import { test } from '../fixtures/customFixture';
import testData from '../test-data/testdata.json';
import { ENV } from '../constants/urlConstants'

test('Login Test', async ({ loginfix, page }) => {
  // const log = new LoginPage(page);
  await loginfix.launchUrl(ENV.QA)
  await loginfix.enterFirstName(testData.FIRSTNAME)
  await loginfix.enterLastName(testData.LASTNAME)
  await loginfix.enterUserName(testData.USERNAME)
  await loginfix.enterEmailId(testData.EMAIL)
  await loginfix.enterPassword(testData.PASSWORD)
  await loginfix.enterConfirmPassword(testData.PASSWORD)
  await loginfix.clickConsentOne()
  await loginfix.clickConsentTwo()
  
  await loginfix.takeScreenShot("loginPage")
  await page.waitForTimeout(100)
});

test('Login Test2', async ({ loginfix, page }) => {

  // const log = new LoginPage(page);

  await loginfix.launchUrl(ENV.PROD)
  await loginfix.enterFirstName(testData.FIRSTNAME)
  await loginfix.enterLastName(testData.LASTNAME)
  await loginfix.enterUserName(testData.USERNAME)
  await loginfix.enterEmailId(testData.EMAIL)
  await loginfix.enterPassword(testData.PASSWORD)
  await loginfix.enterConfirmPassword(testData.PASSWORD)
  await loginfix.clickConsentOne()
  await loginfix.clickConsentTwo()
  
  await loginfix.takeScreenShot("loginPage")
  await page.waitForTimeout(1000)
});












