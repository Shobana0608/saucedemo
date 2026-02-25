import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage'; 
import { InventoryPage} from '../pages/InventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/Checkoutpage';

test.describe('SauceDemo E2E Test', () => {
    let loginPage;
    let inventoryPage ;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);

        await page.goto('https://www.saucedemo.com/');
    });

    test('should complete a purchase successfully', async () => {
        await loginPage.loginWithValidCredentials();
        await inventoryPage.addToCart();
        await inventoryPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
        await checkoutPage.continueCheckout();
    });

  });