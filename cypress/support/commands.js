Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  Cypress.Commands.add('declineCookies', (baseUrl, cookiesWidget, cookieDeclineButton) => {
    cy.visit(baseUrl);
    cy.get(cookiesWidget).should('be.visible');
    cy.get(cookieDeclineButton).should('be.visible').click();
    cy.get(cookiesWidget).should('not.be.visible');
  });
  
  Cypress.Commands.add('verifyFirstProduct', (productSelector, productItemName, expectedTitle) => {
    cy.get(productSelector).find(productItemName).eq(0).should(($el) => {
      const text = $el.text().trim();
      expect(text).to.eq(expectedTitle.trim());
    });
  });