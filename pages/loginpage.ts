import { Page, Locator } from "@playwright/test";
import { BaseDemo } from "../helpers/basic";
import { credentials } from '../constants/credentials'

export class LoginPage extends BaseDemo {
    // locators
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly userNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly consentOne: Locator;
    readonly consentTwo: Locator;
    readonly confirmButton: Locator;

    constructor(page: Page) {
        super(page)
        this.firstNameInput = this.page.getByTestId('text-input-First Name');
        this.lastNameInput = this.page.getByTestId('text-input-Last Name');
        this.userNameInput = this.page.getByTestId('text-input-Username');
        this.emailInput = this.page.getByTestId('email-input-Email');
        this.passwordInput = this.page.getByTestId('password-input-Password');
        this.confirmPasswordInput = this.page.getByTestId('password-input-Password Confirmation');
        this.consentOne = this.page.getByTestId('consentedToTerms');
        this.consentTwo = this.page.getByTestId('consentedToCallMessage');
        this.confirmButton = this.page.getByRole('button', { name: "Create Account" })
    }

    // Actions 

    public async adminlogin() {
        await this.fillElement(this.firstNameInput, credentials.ADMINLOGIN.username)
        await this.fillElement(this.lastNameInput, credentials.ADMINLOGIN.password)
    }


    async enterFirstName(firstName: string) {
        try {
            await this.fillElement(this.firstNameInput, firstName)
        } catch (error) {
            throw new Error(`Unable to fill the FirstName Field. Reason: ${error}`)
        }
    }
    async enterLastName(lastName: string) {
        try {
            await this.fillElement(this.lastNameInput, lastName)
        } catch (error) {
            throw new Error(`Unable to fill the LastName Field. Reason : ${error}`)
        }
    }
    
    async enterUserName(userName: string) {
        await this.fillElement(this.userNameInput, userName)
    }
    async enterEmailId(emailId: string) {
        await this.fillElement(this.emailInput, emailId)
    }
    async enterPassword(password: string) {
        await this.fillElement(this.passwordInput, password)
    }
    async enterConfirmPassword(confirmPassword: string) {
        await this.fillElement(this.confirmPasswordInput, confirmPassword)
    }
    async clickConsentOne() {
        await this.consentOne.check()
    }
    async clickConsentTwo() {
        await this.consentTwo.check()
    }
    async clickConfirmButton() {
        await this.clickElement(this.confirmButton)
    }
}


