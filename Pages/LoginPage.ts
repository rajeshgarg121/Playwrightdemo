import {Page,expect,Locator} from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
declare const process: any;

export class LoginPage {
   readonly page:Page;
   readonly usernameInput: any;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
     this.usernameInput = this.page.getByLabel('Username');
     this.passwordInput = this.page.getByLabel('Password');
     this.submitButton = this.page.getByRole('button', {name: 'Submit'});
  
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }



    }