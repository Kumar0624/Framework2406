import { Page } from "@playwright/test";
import { BasePage } from "../helpers/playwright";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);    
    }   

   
    private leadsButton =`//a[text()="Leads"]`
  
    async clickHomepage() {
        this.click(await this.getBy('role','button',{name:this.leadsButton}))
    }
}