import {
  baseUrl,
  cookiesWidget,
  cookieDeclineButton,
  productSelector,
  lastVisitedProductPath,
  lastVisitedProductUrl,
  lastVisitedProductTitle,
  productApiUrl,
  byLogoToHomepage,
  productItemName,
  firstProductTitle
} from '../support/constants';

describe('Homepage E2E Test', () => {
  before(() => {
    // Decline cookies once before all tests
    cy.declineCookies(baseUrl, cookiesWidget, cookieDeclineButton);
  });

  beforeEach(() => {
    cy.intercept('GET', productApiUrl).as('loadProducts');
    cy.visit(baseUrl);
    cy.wait('@loadProducts');
  });

  it('should display the first product as 100% Whey Gold Standard - Optimum Nutrition', () => {
    // Verify the name of the first product on the homepage
    cy.verifyFirstProduct(productSelector, productItemName, firstProductTitle);

    // Simulate the action of viewing another product
    cy.visit(lastVisitedProductUrl);
    cy.url().should('include', lastVisitedProductPath);

    // Navigate back to the homepage
    cy.get(byLogoToHomepage).should('be.visible').click();
    cy.wait('@loadProducts');

    // Verify the last visited product is now the first item in the product list
    cy.verifyFirstProduct(productSelector, productItemName, lastVisitedProductTitle);
  });
});