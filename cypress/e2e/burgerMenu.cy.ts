import loginPage  from '../pages/LoginPage';
import productsPage from '../pages/ProductsPage';
import burgerMenu from '../pages/BurgerMenuPage';

describe('Burger menu actions', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('TC30 - Should log out via burger menu', () => {
    burgerMenu.logout();
    cy.location('pathname').should('eq', '/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('TC31 - Should reset app state and clear cart', () => {
    productsPage.elements.addToCartButtons().first().click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    burgerMenu.resetApp();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('TC32 - Should display all options in burger menu', () => {
    burgerMenu.open();
    burgerMenu.elements.inventoryLink().should('be.visible');
    burgerMenu.elements.aboutLink().should('be.visible');
    burgerMenu.elements.logoutLink().should('be.visible');
    burgerMenu.elements.resetAppState().should('be.visible');
    burgerMenu.close();
  });

  it('TC33 - Should navigate to inventory when clicking All Items', () => {
    productsPage.openCart();
    burgerMenu.open();
    burgerMenu.elements.inventoryLink().click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('TC34 - Should redirect to Sauce Labs site when clicking About', () => {
    burgerMenu.open();
    burgerMenu.elements.aboutLink()
      .should('have.attr', 'href')
      .and('include', 'saucelabs.com');
    burgerMenu.close();
  });

  it('TC35 - Should close menu when clicking X', () => {
    burgerMenu.open();
    burgerMenu.close();
    cy.get('body').should('not.have.class', 'bm-menu-open');
  });
});
