import {test, expect} from '../fixtures/auth-fixture';
import { ProfilePage } from '../../pages/ProfilePage';
import { DashboardPage } from '../../pages/DashboardPage';

test('User can navigate to Profile Page after login', async({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.assertOnDashboard();
    await dashboard.openUserDropdown();
    await dashboard.openAboutModal();
    await dashboard.assertAboutModalVisible();

})