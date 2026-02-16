import { Page, Locator } from '@playwright/test'

export class BaseDemo {

    constructor(public page: Page) {}

    async launchUrl(url: string) {
        await this.page.goto(url)
    }
    async clickElement(locator : Locator){
        await locator.click()   
    }
    async fillElement(locator: Locator, data: string){
        await locator.fill(data)
    }
    async takeScreenShot(screenShotName: string){
        await this.page.screenshot({path: `screenshots/${screenShotName}-${Date.now()}.png`})
    }
}