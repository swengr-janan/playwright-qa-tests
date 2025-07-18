import {test} from '../fixtures/login-fixture'
import { validAccounts } from '../../utils/testData'

test('@positive This test should is for successful login', async ({ loginPage }) => {
    await loginPage.login(validAccounts.username, validAccounts.password);
    await loginPage.assertSuccessfulLogin();
});