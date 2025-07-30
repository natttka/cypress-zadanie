class BurgerMenu {
  elements = {
    menuButton:     () => cy.get('#react-burger-menu-btn'),
    closeButton:    () => cy.get('#react-burger-cross-btn'),
    logoutLink:     () => cy.get('#logout_sidebar_link'),
    resetAppState:  () => cy.get('#reset_sidebar_link'),
    aboutLink:      () => cy.get('#about_sidebar_link'),
    inventoryLink:  () => cy.get('#inventory_sidebar_link'),
  };

  open(): void {
    this.elements.menuButton().click();
  }

  close(): void {
    this.elements.closeButton().click();
  }

  logout(): void {
    this.open();
    this.elements.logoutLink().click();
  }

  resetApp(): void {
    this.open();
    this.elements.resetAppState().click();
  }
}

export default new BurgerMenu();
