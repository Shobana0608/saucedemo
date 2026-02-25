export class CartPage {
    constructor(page) {
        this.page = page;   
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.itemcount = page.locator('.cart_item');

    }

    async checkout() {

        await this.checkoutButton.click();
    }

    async removeitem() {
        await this.removeButton.click();
    }
    async getItemCount() {
        return await this.itemcount.count();
    }
    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }               
    async continueCheckout() {
        await this.continueButton.click();
    }

}   
