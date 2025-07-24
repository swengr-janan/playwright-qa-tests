import {test} from '../fixtures/basic-fixture'
import { validAccounts } from '../../utils/testData'

test('@positive This test should is for successful login', async ({ loginPage }) => {
    await loginPage.login(validAccounts.admin.username, validAccounts.admin.password);
    await loginPage.assertSuccessfulLogin();
});