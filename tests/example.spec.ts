import { test } from '../fixtures/customFixture';
import testData from '../test-data/testdata.json'

test('Login Test', async ({ loginfix, page }) => {
  await loginfix.launchUrl("https://app.playonereal.com/agent-signup")
  await loginfix.enterFirstName(testData.FIRSTNAME)
  await loginfix.enterLastName(testData.LASTNAME)
  await loginfix.enterUserName(testData.USERNAME)
  await loginfix.enterEmailId(testData.EMAIL)
  await loginfix.enterPassword(testData.PASSWORD)
  await loginfix.enterConfirmPassword(testData.PASSWORD)
  await loginfix.clickConsentOne()
  await loginfix.clickConsentTwo()
  await loginfix.takeScreenShot("loginPage")
  await page.waitForTimeout(10000)
});











