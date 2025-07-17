import {test} from './fixtures/login-fixture.ts'
import { invalidAccounts } from '../utils/testData.ts';

for (const creds of invalidAccounts){
    test(`Testing for invalid logins for ${creds.username} with password ${creds.password}`, async ({ loginPage }) => {

        await loginPage.login(creds.username, creds.password);
        await loginPage.assertInvalidLoginMessage();
    });
}

