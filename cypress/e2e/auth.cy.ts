import loginPage from '../pages/LoginPage';

describe('Authentication tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('TC01 – Login succeeds with valid credentials', () => {
    cy.fixture('users').then(users => loginPage.login(users.standard.user, users.standard.pass));
    cy.url().should('include', '/inventory.html');
  });

  it('TC02 – Login fails with invalid username', () => {
    cy.fixture('users').then(users => loginPage.login(users.invalid.user, users.standard.pass));
    loginPage.login('invalid_user', 'secret_sauce');
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC03 – Login fails with invalid password', () => {
    cy.fixture('users').then(users => loginPage.login(users.standard.user, users.invalid.pass));
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('TC04 – Login fails with missing username', () => {
    cy.fixture('users').then(users => loginPage.login(undefined, users.standard.pass));
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username is required');
  });

  it('TC05 – Login fails with missing password', () => {
    cy.fixture('users').then(users => loginPage.login(users.standard.user, undefined));
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });
});
