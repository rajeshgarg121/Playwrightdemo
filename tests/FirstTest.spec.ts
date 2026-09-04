import {test,expect} from '@playwright/test';
declare const process: any;

test('has title',{tag: '@smoke'}, async ({page}) => {
  const username = process.env.PLAYWRIGHT_USER;
  await page.goto('https://playwright.dev/');  
  console.log("user name is "+username);
  await expect(page).toHaveTitle(/playwright/i);
});

test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/');  
  await page.getByRole('link', {name: 'Get started'}).click();  
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});

test  ('check login', {tag: '@smoke2'}, async ({page}) => {
  const username = process.env.PLAYWRIGHT_USER;
  const password = process.env.PLAYWRIGHT_PASSWORD;
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').fill(username);``
  await page.getByLabel('Password').fill(password);
  console.log("user name is "+username);  
  console.log("password is "+password);
  await page.getByRole('button', {name: 'Submit'}).click();
  await expect(page.getByRole('heading', {name: 'Logged in successfully'})).toBeVisible();
})