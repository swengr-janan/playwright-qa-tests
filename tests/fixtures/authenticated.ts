import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

export const test = baseTest.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('Admin', 'admin123');
        await use (loginPage);
    },
});

export {expect} from '@playwright/test';