import { test, expect } from '@playwright/test';

test('complete sauce demo purchase', async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // 2. Add first item to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').first().click();
 // await page.getByRole('link', { name: 'Shopping Cart' }).click();
 await page.locator('[data-test="shopping-cart-link"]').click();
  
  // 3. Verify cart & checkout
  await expect(page.locator('.cart_quantity')).toHaveText('1');
  await page.getByRole('button', { name: 'Checkout' }).click();
  
  // 4. Complete checkout
  await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  
  // 5. Verify success
  //await expect(page.getByRole('heading', { name: 'Complete!' })).toBeVisible();

   await expect(page.locator('.complete-header')).toBeVisible();

});
