import { BasePage } from "../helpers/playwright";

export class LoginPage extends BasePage {


    private getUserNameField() {
        return this.page.getByPlaceholder('Email');
    }

    async clickHomepage() {
        await this.click(this.getUserNameField());
    }
}

    
