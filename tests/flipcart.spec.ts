import { test } from '@playwright/test';

test(`Handling Multiple pages`, async ({ page, context }) => {
    console.log("Test started");
    await page.goto("https://www.flipkart.com/");
    const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands and More' })
    await searchBox.fill("poco");
    await searchBox.press("Enter");
    // await page.waitForTimeout(2000)
    console.log(`Current Page Title is : ${await page.title()}`);
    const mobilePriceList = page.locator(`//div[@id="container"]//div[@class="hZ3P6w DeU9vF"]`)
    const allPriceList = await mobilePriceList.count()
    console.log("Price List Count",allPriceList);
    for(let i = 0;i< allPriceList;i++){
        const printPrice = await mobilePriceList.nth(i).innerText()
        console.log(`Mobile Value is : ${printPrice}`);
    }
    

    const product = page.locator(`//div[contains(text(),"POCO M6 Plus 5G (Graphite Black, 128 GB")]`)

    const price = await product.locator


    //console.log("The mobile Amount is :" + mobileAmount)

    // await Promise.all([ // Promise.all is a method which is going to wait for all the actions to complete
    //     context.waitForEvent('page'), 
    //            page.locator(`(//div[contains(text(),"POCO")])[1]`).click()
    // ]);
    // const allPages =  context.pages() // pages() this is a method to basically capture the number of pages opened in the browser context
    // console.log(`Total number of pages opened are: ${ allPages.length}`); // to get the total number of pages opened.
    // console.log(`The title of the parent page is: ${await allPages[0].title()}`) //
    // console.log(`The title of the child page is: ${await allPages[1].title()}`); // 
    //  const mobileAmount = allPages[1].locator(`(//div[contains(text(),"₹")])[1]`).innerText()

    await page.pause()
})