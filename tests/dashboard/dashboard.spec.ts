import {test, expect} from '../fixtures/auth-fixture';
import { DashboardPage } from '../../pages/DashboardPage';

test('Should show dashboard after login', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.assertOnDashboard();
});