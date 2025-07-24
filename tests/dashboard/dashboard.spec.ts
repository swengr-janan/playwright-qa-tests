import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Dashboard Page', ( )=> {
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginAsValidUser();
    });

    test('This test should show dashboard after successful login', async ({page}) => {
        await loginPage.assertSuccessfulLogin();
        await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
    });

    test('This test should expect Quick Launch text in the dashboard', async ({page}) => {
        const quickLaunch = page.getByText('Quick Launch');
        await expect(quickLaunch).toBeVisible(); 
    });

    test('This test should expect Employee Distribution by Sub Unit text in the dashboard', async ({page}) => {
        const chart = page.getByText('Employee Distribution by Sub Unit');
        await expect(chart).toBeVisible();
    })
});