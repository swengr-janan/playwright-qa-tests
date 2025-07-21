import { test as base, expect, Page } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

type AuthFixtures = {
    page: Page;
};

export const test = base.extend<AuthFixtures>({
    page: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginAsValidUser();
        await page.waitForURL(/dashboard/)
        await use(page);
    }
});

export {expect};
