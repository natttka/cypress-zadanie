import loginPage from '../pages/LoginPage';
import productsPage from '../pages/ProductsPage';
import cartPage from '../pages/CartPage';

describe('Cart page tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('TC17 - Should add 1 product and verify it in cart', () => {
    productsPage.elements.productNames().eq(0).invoke('text').as('productName');
    productsPage.elements.productPrices().eq(0).invoke('text').as('productPrice');

    productsPage.elements.addToCartButtons().eq(0).click();
    productsPage.openCart();

    cy.url().should('include', '/cart.html');
    cartPage.elements.cartItem().should('have.length', 1);
    cartPage.elements.itemQuantity().should('contain.text', '1');

    cy.get('@productName').then((name) => {
      cartPage.elements.itemName().should('have.text', name.toString().trim());
    });

    cy.get('@productPrice').then((price) => {
      cartPage.elements.itemPrice().should('have.text', price.toString().trim());
    });
  });

  it('TC18 - Should add 2 products and verify both in cart', () => {
    productsPage.elements.addToCartButtons().eq(0).click();
    productsPage.elements.addToCartButtons().eq(1).click();
    productsPage.openCart();

    cartPage.elements.cartItem().should('have.length', 2);
    cartPage.elements.itemQuantity().each(($el) => {
      cy.wrap($el).should('contain.text', '1');
    });
  });

  it('TC19 - Should remove product from cart', () => {
    productsPage.elements.addToCartButtons().eq(0).click();
    productsPage.openCart();

    cartPage.elements.cartItem().should('have.length', 1);
    
    cy.get('[data-test^="remove-sauce-labs"]').click();

    cartPage.elements.cartItem().should('not.exist');
  });

  it('TC20 - Should return to products page after clicking Continue Shopping', () => {
  loginPage.visit();
  loginPage.login('standard_user', 'secret_sauce');
  productsPage.elements.addToCartButtons().eq(0).click();
  productsPage.openCart();
  cartPage.elements.continueShoppingButton().click();
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('contain.text', 'Products');
});

it('TC21 - Should not allow adding same item twice (quantity remains 1)', () => {
  loginPage.visit();
  loginPage.login('standard_user', 'secret_sauce');
  productsPage.elements.addToCartButtons().eq(0).click();  

  cy.get('[data-test^="remove-sauce-labs"]')
    .eq(0)
    .should('be.visible')
    .and('contain.text', 'Remove');

  productsPage.openCart();
  cartPage.elements.cartItem().should('have.length', 1);
  cartPage.elements.itemQuantity().should('have.text', '1');
});


});
