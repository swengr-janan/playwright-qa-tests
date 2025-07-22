import { Page, expect } from '@playwright/test'

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async assertOnDashboard(){
        await expect(this.page).toHaveURL(/dashboard/)
        await expect(this.page.locator('h6.oxd-text--h6')).toHaveText(/Dashboard|仪表盘/);
    }

    async openUserDropdown(){
        await this.page.locator('.oxd-userdropdown-tab').click();
    }

    async openAboutModal(){
        await this.page.locator('a:has-text("About")').click();
    }

    async assertAboutModalVisible(){
        const modal = this.page.locator('.oxd-dialog-sheet');
        await expect(modal).toBeVisible();
        await expect (modal.locator('h6')).toHaveText('About');
    }
}
