export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.sortDropdown = page.locator('[data-test="product_sort_container"]');
        this.inventorylist = page.locator('.inventory_item');


    }

    async addToCart() {

        await this.addToCartButton.click();

    }
    async goToCart() {
        await this.shoppingCartLink.click();
    }   
    async sortByPriceLowToHigh() {
        await this.sortDropdown.selectOption('lohi');
    }

    async productcount() {
        return await this.inventorylist.count();
    }


    async getInventoryItems() {
        return await this.inventorylist.allTextContents();

    }
}

