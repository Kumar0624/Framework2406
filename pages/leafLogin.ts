import { Page, Locator } from "@playwright/test";
import { BaseDemo } from "../helpers/basic";


export class leafLoginPage extends BaseDemo {
    // locators
    readonly userNameInput: Locator;
    readonly passWordInput: Locator;
    readonly loginbtn: Locator;
    readonly dashBoard: Locator;

    constructor(page: Page) {
        super(page)
        this.userNameInput = this.page.getByLabel('Username')
        this.passWordInput = this.page.getByLabel('Password')
        this.loginbtn = this.page.locator('.decorativeSubmit')
        this.dashBoard = this.page.locator("//a[contains(text(),'CRM/SFA')]")
    }

    // Actions

    public async enterUserName(firstName: string) {
        await this.fillElement(this.userNameInput, firstName)
    }
    public async enterPassWord(password: string){
        await this.fillElement(this.passWordInput,password)
    }
    public async clickLoginButton(){
        await this.clickElement(this.loginbtn)
    }
    public async clickDashBoard(){
        await this.clickElement(this.dashBoard)
    }
}


