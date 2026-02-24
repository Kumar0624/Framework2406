import{test, expect} from '@playwright/test'

// Try clicking for 3 seconds
// If found → click
// If not found → error occurs
// .catch() catches error
// Empty function runs
// Test continues without failing


test('test make my trip', async ({ page }) => {

  await page.goto('https://www.makemytrip.com/');
  await page.getByRole('img', { name: 'minimize' })
    .click({ timeout: 4000 })
    .catch(() => { });
  await page.locator('.commonModal__close')
    .click({ timeout: 4000 })
    .catch(() => { });
    
  await page.getByRole('link', { name: 'Flights', exact: true }).click()
  await expect(page).toHaveURL("https://www.makemytrip.com/flights/");
  await page.getByRole('img', { name: 'minimize' })
    .click({ timeout: 4000 })
    .catch(() => { });
  await page.locator('.coachmark') // A highlighted element
    .click({ timeout: 3000 })
    .catch(() => { });
  await page.getByRole('textbox', { name: 'DEL, Delhi Airport India' }).click();
  await page.getByRole('textbox', { name: 'From', exact: true }).fill('chennai');
  await page.getByText('Chennai, India').click();
  await page.getByRole('textbox', { name: 'To BLR, Bengaluru' }).click();
  await page.getByRole('textbox', { name: 'To', exact: true }).fill('delhi');
  await page.getByText('New Delhi, India').click()
  await page.getByLabel('Wed Mar 04').click();
  await page.getByText('Search').click();
  
  const priceLocator = page.locator('//div[@id="listing-id"]//span[@class=" fontSize18 blackFont"]')
  const priceValue = await priceLocator.innerText()
  console.log(`Price Values are : ${priceValue}`);
  await page.pause()

})