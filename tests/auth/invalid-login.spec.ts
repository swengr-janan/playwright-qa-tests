import {test} from '../fixtures/basic-fixture'
import { invalidAccounts } from '../../utils/testData'

for (const creds of invalidAccounts){
    test(`@negative Should show error for invalid login: ${creds.username}`, async ({page, loginPage}) => {
        await loginPage.goto();
        await loginPage.login(creds.username, creds.password);
        await loginPage.assertInvalidLoginMessage();
    });
}

