import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    constructor(public page: Page) { }

    async getBy(type: 'role' | 'text' | 'placeholder' | 'label' | 'altText' | 'title' | 'testId',
        value: string,
        options?: any
    ): Promise<Locator> {
        switch (type) {
            case 'role':
                 return this.page.getByRole(value as any, options);
            case 'text':
                return this.page.getByText(value);
            case 'placeholder':
                return this.page.getByPlaceholder(value);
            case 'label':
                return this.page.getByLabel(value,);
            case 'altText':
                return this.page.getByAltText(value);
            case 'title':
                return this.page.getByTitle(value);
            case 'testId':
                return this.page.getByTestId(value);
            default:
                throw new Error(`Unsupported locator type`);
        }
    }

    async click(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }
}