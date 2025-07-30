import loginPage from '../pages/LoginPage';

describe('Authentication tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('TC01 – Login succeeds with valid credentials', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('TC02 – Login fails with invalid username', () => {
    loginPage.login('invalid_user', 'secret_sauce');
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC03 – Login fails with invalid password', () => {
    loginPage.login('standard_user', 'wrong_password');
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC04 – Login fails with missing username', () => {
    loginPage.login(undefined, 'secret_sauce');
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('TC05 – Login fails with missing password', () => {
    loginPage.login('standard_user', undefined);
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });
});
