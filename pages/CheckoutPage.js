export class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');      
        this.lastNameInput = page.locator('[data-test="lastName"]');                                    
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');   
    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async completeCheckout() {
        await this.fillCheckoutInformation('John', 'Doe', '12345');
        await this.continueCheckout();
        await this.finishbutton.click();

    }

    async isorderComplete() {
        return await this.page.locator('.complete-header').isVisible();

    }
}