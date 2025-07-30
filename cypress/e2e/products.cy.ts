import loginPage    from '../pages/LoginPage';
import productsPage from '../pages/ProductsPage';

describe('Products page tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('TC06 - Should be on the Products page after login', () => {
    productsPage.verifyOnProductsPage();
  });

  it('TC07 - Should display exactly 6 products', () => {
    productsPage.elements.inventoryItems()
      .should('be.visible')
      .and('have.length', 6);
  });

  it('TC08 - Each product should have a name', () => {
    productsPage.elements.itemName().each(($el) => {
      cy.wrap($el).should('be.visible').and('not.be.empty');
    });
  });

  it('TC09 - Each product should have a description', () => {
    productsPage.elements.itemDesc().each(($el) => {
      cy.wrap($el).should('be.visible').and('not.be.empty');
    });
  });

  it('TC10 - Each product should have a price', () => {
    productsPage.elements.itemPrice().each(($el) => {
      cy.wrap($el).should('be.visible').and('contain.text', '$');
    });
  });

  it('TC11 - Each product should have a visible image', () => {
    productsPage.elements.itemImage().each(($el) => {
      cy.wrap($el).should('be.visible');
    });
  });

  it('TC12 - Each product should have an Add to cart button', () => {
    productsPage.elements.addToCartButtons().each(($el) => {
      cy.wrap($el).should('be.visible').and('contain.text', 'Add to cart');
    });
  });

  it('TC13 - Should sort products A to Z by name', () => {
    productsPage.selectSortOption('az');
    productsPage.elements.productNames()
      .first()
      .should('have.text', 'Sauce Labs Backpack');
  });

  it('TC14 - Should sort products Z to A by name', () => {
    productsPage.selectSortOption('za');
    productsPage.elements.productNames()
      .first()
      .should('have.text', 'Test.allTheThings() T-Shirt (Red)');
  });

  it('TC15 - Should sort products by price Low to High', () => {
    productsPage.selectSortOption('lohi');
    productsPage.elements.productPrices()
      .first()
      .should('contain.text', '$7.99');
  });

  it('TC16 - Should sort products by price High to Low', () => {
    productsPage.selectSortOption('hilo');
    productsPage.elements.productPrices()
      .first()
      .should('contain.text', '$49.99');
  });
});
