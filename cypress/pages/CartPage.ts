class CartPage {
  elements = {
    cartItem: () => cy.get('.cart_item'),
    itemName: () => cy.get('.inventory_item_name'),
    itemPrice: () => cy.get('.inventory_item_price'),
    itemQuantity: () => cy.get('.cart_quantity'),
    continueShoppingButton: () => cy.get('[data-test="continue-shopping"]')
  };
}

export default new CartPage();
