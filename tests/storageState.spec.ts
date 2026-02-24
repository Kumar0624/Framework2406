import { test } from '../fixtures/customFixture'

import { ENV } from '../constants/urlConstants'
import { credentials } from '../constants/credentials'


test('Store leaf login', async ({ leafLog, page }) => {

    await leafLog.launchUrl(ENV.LEAF_QA)
    await leafLog.enterUserName(credentials.USERLOGIN.username)
    await leafLog.enterPassWord(credentials.USERLOGIN.password)
    await leafLog.clickLoginButton()
    // expect(page.url()).toContain('/login/')
    await leafLog.clickDashBoard()
    // expect(page.url()).toContain('/main?externalLoginKey/')
    await page.context().storageState({ path: 'Data/login_leaf.json' })
  

})