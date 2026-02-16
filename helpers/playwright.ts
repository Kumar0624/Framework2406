import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    
    constructor(public page: Page, public context: any) { }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async fillAndEnter(locator: Locator, value: string) {
        await locator.fill(value);
        await locator.press('Enter');
    }

    async type(locator: Locator, value: string) {
        await locator.pressSequentially(value, { delay: 50 });
    }

    async typeAndEnter(locator: Locator, value: string) {
        await locator.pressSequentially(value, { delay: 50 });
        await locator.press('Enter');
    }

    async getTitle() {
        return this.page.title();
    }

    async hover(locator: Locator) {
        await locator.hover();
    }

    async hoverAndClick(locator: Locator) {
        await locator.hover();
        await locator.click();
    }

    async dragAndDrop(source: Locator, target: Locator) {
        await source.dragTo(target);
    }

    async rightClick(locator: Locator) {
        await locator.click({ button: 'right' });
    }

    async doubleClick(locator: Locator) {
        await locator.dblclick();
    }

    async setCheckbox(locator: Locator, shouldCheck: boolean) {
        shouldCheck
            ? await locator.check() // check() will check the checkbox if it's not already checked
            : await locator.uncheck(); // uncheck() will uncheck the checkbox if it's already checked
    } // await expect(locator).toBeChecked()

    async selectRadio(locator: Locator) {
        await locator.check();
    } // await expect(locator).toBeChecked();

    async dropDownSelect(locator: Locator,
        option: { value?: string; label?: string; index?: number }) {
        await locator.selectOption(option);
    }

    async selectCustomDropdown(dropdown: Locator, option: string) {
        await dropdown.click();
        await this.page.getByText(option).click();
    }

    async uploadFile(locator: Locator, filePath: string) {
        await locator.setInputFiles(filePath);
    }

    async handleAlert(alertText?: string) {

        this.page.once('dialog', async (alert) => {

            console.log(`The alert message is: ${alert.message()}`);
            console.log(`The alert type is: ${alert.type()}`);
            switch (alert.type()) {
                case "simple":
                    await alert.accept();
                    break;
                case "confirm":
                    await alert.accept();
                    break;
                case "prompt":
                    await alert.accept(alertText);
                    break;
                default:
                    await alert.dismiss();
            }
        });
    }

    async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async verifyText(locator: Locator, text: string) {
        await expect(locator).toHaveText(text);
    }

    async verifyChecked(locator: Locator) {
        await expect(locator).toBeChecked();
    }

}




