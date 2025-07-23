import { Page, Locator, expect } from '@playwright/test';
import { validAccounts } from '../utils/testData';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertInvalidLoginMessage() {
    await expect(this.errorMessage).toBeVisible({timeout:5000});
    await expect(this.errorMessage).toHaveText('Invalid credentials')
  }

  async assertSuccessfulLogin(){
    await this.page.waitForURL('**/dashboard/**')
    await expect(this.page.getByRole('heading',{ name: 'Dashboard'})).toBeVisible();
  }

  async loginAsValidUser() {
    await this.login(validAccounts.username, validAccounts.password);
  }
}
