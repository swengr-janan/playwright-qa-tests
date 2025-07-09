import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.ts'


const invalidAccounts = [
    {username: 'janan', password: 'balbin'},
    {username: 'pluto', password: 'balbino'},
    {username: 'ploot', password: 'Gordito'},
    {username: 'Admin', password: 'password'},
    {username: 'Admin', password: 'admin1243'}
];

for (const creds of invalidAccounts){
    test(`@smoke Testing for invalid logins for ${creds.username} with password ${creds.password}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(creds.username, creds.password);

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    });
}

