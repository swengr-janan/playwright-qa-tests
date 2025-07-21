import { Page, expect } from '@playwright/test'

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async assertOnDashboard(){
        await expect(this.page.locator('h6.oxd-text--h6')).toHaveText('Dashboard');
    }
}
