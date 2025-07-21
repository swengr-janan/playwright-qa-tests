import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

type BasicFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<BasicFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  }
});

export { expect };
