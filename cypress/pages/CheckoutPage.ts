class CheckoutPage {
  elements = {
    checkoutButton:        () => cy.get('[data-test="checkout"]'),
    firstName:             () => cy.get('[data-test="firstName"]'),
    lastName:              () => cy.get('[data-test="lastName"]'),
    postalCode:            () => cy.get('[data-test="postalCode"]'),
    continueButton:        () => cy.get('[data-test="continue"]'),
    finishButton:          () => cy.get('[data-test="finish"]'),
    backHomeButton:        () => cy.get('[data-test="back-to-products"]'),
    errorMessage:          () => cy.get('[data-test="error"]'),
    title:                 () => cy.get('.title'),
    completeHeader:        () => cy.get('.complete-header'),
  };

  goToCheckout(): void {
    this.elements.checkoutButton().click();
  }

  fillYourInformation(first?: string, last?: string, postal?: string): void {
    this.elements.firstName().clear();
    this.elements.lastName().clear();
    this.elements.postalCode().clear();

    if (first) {
      this.elements.firstName().type(first);
    }
    if (last) {
      this.elements.lastName().type(last);
    }
    if (postal) {
      this.elements.postalCode().type(postal);
    }
    this.elements.continueButton().click();
  }

  finish(): void {
    this.elements.finishButton().click();
  }

  backHome(): void {
    this.elements.backHomeButton().click();
  }
}

export default new CheckoutPage();
