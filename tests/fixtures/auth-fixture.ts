import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

type AuthFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<AuthFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginAsValidUser();
        await page.waitForURL('/dashboard/')
        await use(loginPage);
    }
});

export {expect};
