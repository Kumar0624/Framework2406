import{test} from '../fixtures/customFixture'
import { ENV } from '../constants/urlConstants'
import { expect } from '@playwright/test'
import { log } from 'console'

test.use({storageState:'Data/login_leaf.json'})

test('Use Storage State', async({leafLog,page}) => {
    await leafLog.launchUrl(ENV.LEAF_MAINPAGE)
    await expect(page).toHaveURL(ENV.LEAF_MAINPAGE)
    console.log(`TestCase One Passed`);  
    await page.waitForTimeout(1000)
})


test('Use Storage State Two ', async({leafLog,page}) => {
    await leafLog.launchUrl(ENV.LEAF_MAINPAGE)
    await expect(page).toHaveURL(ENV.LEAF_MAINPAGE)
    console.log(`TestCase Two Passed`); 
    await page.waitForTimeout(1000)
})

test('Use Storage State Three ', async({leafLog,page}) => {
    await leafLog.launchUrl(ENV.LEAF_MAINPAGE)
    await expect(page).toHaveURL(ENV.LEAF_MAINPAGE)
    console.log(`TestCase Three Passed`); 
    await page.waitForTimeout(1000)
})

test('Use Storage State Four ', async({leafLog,page}) => {
    await leafLog.launchUrl(ENV.LEAF_MAINPAGE)
    await expect(page).toHaveURL(ENV.LEAF_MAINPAGE)
    console.log(`TestCase Four Passed`); 
    await page.waitForTimeout(1000)
})

test('Use Storage State Five', async({leafLog,page}) => {
    await leafLog.launchUrl(ENV.LEAF_MAINPAGE)
    await expect(page).toHaveURL(ENV.LEAF_MAINPAGE)
    console.log(`TestCase Five Passed`); 
    await page.pause()
})
