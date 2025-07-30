import loginPage    from '../pages/LoginPage';
import productsPage from '../pages/ProductsPage';
import checkoutPage from '../pages/CheckoutPage';

describe('Checkout flow', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
    productsPage.elements.addToCartButtons().eq(0).click();
    productsPage.openCart();
  });

  it('TC23 - Navigate to Checkout form', () => {
    checkoutPage.goToCheckout();
    checkoutPage.elements.title()
      .should('have.text', 'Checkout: Your Information');
  });

  it('TC24 - Fill out information and go to Overview', () => {
    checkoutPage.goToCheckout();
    checkoutPage.fillYourInformation('Anna', 'Tester', '12345');
    checkoutPage.elements.title()
      .should('have.text', 'Checkout: Overview');
  });

  it('TC25 - Complete checkout and see success message', () => {
    checkoutPage.goToCheckout();
    checkoutPage.fillYourInformation('Anna', 'Tester', '12345');
    checkoutPage.finish();
    checkoutPage.elements.completeHeader()
      .should('have.text', 'Thank you for your order!');
  });

  it('TC26 - Back Home button returns to Products', () => {
    checkoutPage.goToCheckout();
    checkoutPage.fillYourInformation('Anna', 'Tester', '12345');
    checkoutPage.finish();
    checkoutPage.backHome();
    checkoutPage.elements.title()
      .should('have.text', 'Products');
  });

  it('TC27 - Error on missing First Name', () => {
    checkoutPage.goToCheckout();
    checkoutPage.fillYourInformation('', 'Tester', '12345');
    checkoutPage.elements.errorMessage()
      .should('have.text', 'Error: First Name is required');
  });

  it('TC28 - Error on missing Last Name', () => {
    checkoutPage.goToCheckout();
    checkoutPage.fillYourInformation('Anna', '', '12345');
    checkoutPage.elements.errorMessage()
      .should('have.text', 'Error: Last Name is required');
  });

  it('TC29 - Error on missing Postal Code', () => {
    checkoutPage.goToCheckout();
    checkoutPage.fillYourInformation('Anna', 'Tester', '');
    checkoutPage.elements.errorMessage()
      .should('have.text', 'Error: Postal Code is required');
  });
});
