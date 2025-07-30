class LoginPage {
  elements = {
    usernameInput:  () => cy.get('[data-test="username"]'),
    passwordInput:  () => cy.get('[data-test="password"]'),
    loginButton:    () => cy.get('[data-test="login-button"]'),
    errorMessage:   () => cy.get('[data-test="error"]'),
  };

  visit(): void {
    cy.visit('/');
  }

  login(username?: string, password?: string): void {
    this.elements.usernameInput().clear();
    this.elements.passwordInput().clear();

    if (username) {
      this.elements.usernameInput().type(username);
    }

    if (password) {
      this.elements.passwordInput().type(password);
    }

    this.elements.loginButton().click();
  }
}

export default new LoginPage();
