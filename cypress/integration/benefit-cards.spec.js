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
  
    it.only("see if the count is working", () => {
      //
      let message = "whoa, this does not exist";

      // Stub a response to PUT comments/ ****
      cy.intercept(
        {
          method: "GET",
          url: "**/benefits/*",
        },
        {
          statusCode: 500,
          body: { error: message }, // stub returns above message
          headers: { "access-control-allow-origin": "*" }
          
        }
      ).as("putComment");
      cy.wait("@putComment");

      // our 404 statusCode logic in scripts.js executed
      cy.get("[data-testid=error-message]").should("contain", message);

      // Commented out
      //     cy.intercept('GET', '**/benefits/count', '3')
      //   cy.intercept({
      //     pathname: '/benefits/count',
      //     // query: {
      //     //   _limit: '3'
      //     // }
      //   }, {
      //       fixture: 'benefit-count.json',
      //       headers: {
      //         'Access-Control-Allow-Origin': '*'
      //       }
      //   }).as('count')

      //   cy.get("[data-cy=home-page-benefit-counter]").should('be.visible')
    });


    it("see if the count is working", () => {
    
    cy.intercept('benefits*', { fixture: 'benefit-cards.json' }).as('getBenefits')
    cy.intercept('/benefits/count', { fixture: 'benefit-count.json' }).as('getCount')
    
    // visit the dashboard, which should make requests that match
    // the two routes above
    cy.visit('http://localhost:3000/')
    
    // pass an array of Route Aliases that forces Cypress to wait
    // until it sees a response for each request that matches
    // each of these aliases
    cy.wait(['@getBenefits', '@getCount'])
    
    // these commands will not run until the wait command resolves above
    
    cy.get("[data-cy=home-page-benefit-counter]").should('be.visible').and('contain.text', '3')
});

});