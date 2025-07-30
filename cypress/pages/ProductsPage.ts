class ProductsPage {
  elements = {
    title:               () => cy.get('.title'),
    inventoryItems:      () => cy.get('.inventory_item'),
    itemName:            () => cy.get('.inventory_item_name'),
    itemDesc:            () => cy.get('.inventory_item_desc'),
    itemPrice:           () => cy.get('.inventory_item_price'),
    itemImage:           () => cy.get('.inventory_item_img img'),
    addToCartButtons:    () => cy.get('[data-test^="add-to-cart"]'),
    sortDropdown:        () => cy.get('[data-test="product-sort-container"]'),
    productNames:        () => cy.get('.inventory_item_name'),
    productPrices:       () => cy.get('.inventory_item_price'),
    cartLink:            () => cy.get('.shopping_cart_link'),
  };

  verifyOnProductsPage(): void {
    this.elements.title().should('contain.text', 'Products');
  }

  selectSortOption(option: string): void {
    this.elements.sortDropdown()
      .should('be.visible')
      .select(option);
  }

  openCart(): void {
    this.elements.cartLink().click();
  }
}

export default new ProductsPage();
