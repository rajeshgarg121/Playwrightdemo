import {test,expect} from '@playwright/test';
declare const process: any;

test('has title',{tag: '@smoke'}, async ({page}) => {
  const username = process.env.PLAYWRIGHT_USER;
  await page.goto('https://playwright.dev/');  
  console.log("user name is "+username);
  await expect(page).toHaveTitle(/junk/);
});

test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/');  
  await page.getByRole('link', {name: 'Get started'}).click();  
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});