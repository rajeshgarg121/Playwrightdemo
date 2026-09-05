import {test,expect,Page} from '@playwright/test';


test("check simple alert",async ({page})=>{

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
       await dialog.accept();
      })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button', {name: 'Click for JS Alert'}).click();

    await expect(page.getByText('You successfully clicked an alert')).toBeVisible();
   await page.waitForTimeout(5000);

    });