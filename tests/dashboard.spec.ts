import {test, expect} from './fixtures/authenticated';

test('Should show dashboard after login', async ({ loginPage }) => {
    await expect(loginPage.page).toHaveURL(/dashboard/);

    const avatar = loginPage.page.locator('.oxd-userdropdown-img');
    await expect(avatar).toBeVisible();
});