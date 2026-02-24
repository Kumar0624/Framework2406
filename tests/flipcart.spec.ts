import { expect, test } from '@playwright/test';

test(`Handling Multiple pages`, async ({ page, context }) => {
  console.log("Test started");
  await page.goto("https://www.flipkart.com/");
  // Close login popup if appears
  // Try clicking for 3 seconds
  // If found → click
  // If not found → error occurs
  // .catch() catches error
  // Empty function runs
  // Test continues without failing

  await page.pause()
  await page.getByRole('button', { name: '✕' })
    .click({ timeout: 3000 })
    .catch(() => { });

  const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands and More' })
  await searchBox.fill("poco");
  await searchBox.press("Enter");
  // await page.waitForTimeout(2000)
  console.log(`Current Page Title is : ${await page.title()}`);

  // to Print all Price List Count 
  const mobilePriceList = page.locator(`//div[@id="container"]//div[@class="hZ3P6w DeU9vF"]`)
  const priceCount  = await mobilePriceList.count()
  console.log("Price List Count:", priceCount);

  for (let i = 0; i < priceCount ; i++) {
    const printPrice = await mobilePriceList.nth(i).innerText()
    console.log(`Mobile ${i + 1} Value is : ${printPrice}`);
  }
 
  // to print & select Particular Mobile 
  const selectedMobile = page.locator(`//div[@data-id="MOBHAFVJZ5CHWMH8"]//div[contains(@class,'hZ3P6w DeU9vF')]`);
  const actualRate = await selectedMobile.innerText()
  console.log(`Selected Mobile Price : ${actualRate}`);

  const [newpage] =await Promise.all([    // Promise.all is a method which is going to wait for all the actions to complete
    context.waitForEvent('page'),
    selectedMobile.click()
  ]) 
  // one way
  const val = await newpage.locator('//div[contains(@class,"v1zwn21j v1zwn20 _1psv1zeb9")]').innerText()

  // second way 
  const allpages = context.pages(); // pages() this is a method to basically capture the number of pages opened in the browser context
  const expectedRate = await allpages[1].locator('//div[contains(@class,"v1zwn21j v1zwn20 _1psv1zeb9")]').innerText()
  console.log(`Actual Mobile Value is : ${expectedRate} `);
  expect(actualRate).toBe(expectedRate)
  console.log(`Total number of pages opened are: ${allpages.length}`) // to get the total number of pages opened.
  console.log(`The title of the parent page is: ${await allpages[0].title()}`) //
  console.log(`The title of the child page is: ${await allpages[1].title()}`); // 

  await newpage.title()
  await page.title()
  await page.pause()
})