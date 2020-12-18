/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Intercept", () => {
  
    beforeEach(() => { 
      cy.visit("/");
    });
  
    it("landing page is loaded", () => {
      // Test the page at initial load

  
      cy.intercept({
        pathname: '/benefits',
        // query: {
        //   _limit: '3'
        // }
      }, {
          fixture: 'benefit-cards.json',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
      }).as('benefits')
      
      cy.get("[data-cy=eligibleBenefitsHeader]").should('be.visible')
      cy.get("[data-cy=home-page-benefit-counter]").should('be.visible')
    });
  
    it("see if the count is working", () => {
     //   
    
// Commented out by Bernie
//     cy.intercept('GET', '**/benefits/count', '3')
      cy.intercept({
        pathname: '/benefits/count',
        // query: {
        //   _limit: '3'
        // }
      }, {
          fixture: 'benefit-count.json',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
      }).as('count')
      
      cy.get("[data-cy=home-page-benefit-counter]").should('be.visible')
    });

});