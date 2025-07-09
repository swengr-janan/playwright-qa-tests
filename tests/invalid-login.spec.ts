import {test, expect} from '@playwright/test';

test('This test should checki if the credentials is invalid', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', "janan2ny");
    await page.fill('input[name="password"]',  "pluto");

    await page.click('button:has-text("Login")');

    await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');

})