import { test as baseTest , expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import {leafLoginPage} from '../pages/leafLogin'

type myFixtures = {
    loginfix: LoginPage; // we need to mention the type  
    leafLog: leafLoginPage; 
};

// lopfix will hold page fixture as well as the object created for LoginPage
export const test = baseTest.extend<myFixtures>({

    loginfix: async ({ page }, use) => {
        const lopobj = new LoginPage(page);
        await use(lopobj);        
    },

    leafLog: async ({ page }, use) => {
        const leafObj = new leafLoginPage(page);
        await use(leafObj);        
    }

});