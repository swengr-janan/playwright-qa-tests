import {test, expect} from '../fixtures/basic-fixture';
import { LoginPage } from '../../pages/LoginPage';
import { validAccounts } from '../../utils/testData';
import { log } from 'console';

test.describe('Role Based Access Control - Admin vs Employee', () => {
    let loginPage : LoginPage;

    test('Admin should see Admin Panel', async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(validAccounts.admin.username, validAccounts.admin.password);
        const adminPanel = page.getByText('Admin');
        await expect(adminPanel).toBeVisible();
    });

    test('Employee should see Employee Panel', async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(validAccounts.employee.username, validAccounts.employee.password);
        const adminPanel = page.getByText('Admin');
        await expect(adminPanel).toHaveCount(0);
    });

});