import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

type myFixtures = {
    lopfix: LoginPage; // we need to mention the type 
};
// lopfix will hold page fixture as well as the object created for LoginPage
export const test = baseTest.extend<myFixtures>({
    
    lopfix: async ({ page }, use) => {
        const lopobj = new LoginPage(page);
        await use(lopobj);
    }
});