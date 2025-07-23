import {test, expect} from '../fixtures/basic-fixture'
import { validAccounts } from '../../utils/testData';

test('This test should logout and redirect the user to login page', async ({page, loginPage}) => {

    await loginPage.goto()
    await loginPage.login(validAccounts.username, validAccounts.password);
    await loginPage.assertSuccessfulLogin();

    await page.click('.oxd-userdropdown-tab');

    await page.click('.oxd-userdropdown-link:has-text("Logout")');

    await expect(page).toHaveURL(/login/);

    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();

});