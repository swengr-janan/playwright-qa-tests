import {test, expect} from '../fixtures/basic-fixture'
import { DashboardPage } from '../../pages/DashboardPage';
import { validAccounts } from '../../utils/testData'

test('This test should check if the about modal is visible', async ({page, loginPage}) => {
    await loginPage.goto();
    await loginPage.login(validAccounts.username, validAccounts.password);
    await loginPage.assertSuccessfulLogin();

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.openUserDropdown();
    await dashboardPage.openAboutModal();
    await dashboardPage.assertAboutModalVisible();
    await dashboardPage.closeAboutModal();
});
