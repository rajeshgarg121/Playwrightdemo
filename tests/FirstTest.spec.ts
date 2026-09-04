import {test,expect} from '@playwright/test';

test('has title',{tag: '@smoke'}, async ({page}) => {
  await page.goto('https://playwright.dev/');  
  await expect(page).toHaveTitle(/junk/);
});

test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/');  
  await page.getByRole('link', {name: 'Get started'}).click();  
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});