import {test,expect,Page} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage';
import dotenv from 'dotenv';
dotenv.config();      
declare const process: any;
var loginPage: LoginPage;
 const username = process.env.PLAYWRIGHT_USER;
  const password = process.env.PLAYWRIGHT_PASSWORD;
const invalidPassword = process.env.PLAYWRIGHT_INVALID_PASSWORD;  
const invalidUsername = process.env.PLAYWRIGHT_INVALID_USERNAME;
test  ('check login', {tag: '@smoke2'}, async ({page}) => {
 
  if(!username || !password) {
    throw new Error('Environment variables PLAYWRIGHT_USER and PLAYWRIGHT_PASSWORD must be set');
  }
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  loginPage = new LoginPage(page);
  await loginPage.login(username,password);
  await expect(page.getByRole('heading', {name: 'Logged in successfully'})).toBeVisible();
})

test('check login with invalid password', async ({page}) => {
  
  if(!username || !invalidPassword) {
    throw new Error('Environment variables PLAYWRIGHT_USER and PLAYWRIGHT_INVALID_PASSWORD must be set');
  } 
  await page.goto('https://practicetestautomation.com/practice-test-login/');
 loginPage = new LoginPage(page);
  await loginPage.login(username,invalidPassword);
  await expect(page.getByText('Your password is invalid!').first()).toBeVisible();
})

test('check login with invalid username', async ({page}) => {
 
  if(!invalidUsername || !password) {
    throw new Error('Environment variables PLAYWRIGHT_INVALID_USERNAME and PLAYWRIGHT_PASSWORD must be set');
  }
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  loginPage = new LoginPage(page);
  await loginPage.login(invalidUsername,password);
  await expect(page.getByText('Your username is invalid!').first()).toBeVisible();
})
