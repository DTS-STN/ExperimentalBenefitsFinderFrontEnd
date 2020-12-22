/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("the requests", () => {
    it("GET - 200", () => {
       cy.request('GET', 'http://localhost:3000/').then((response) => {
           expect(response).to.have.property('status', 200)
           expect(response).to.have.property('statusText', 'OK')
       })
      });

      it("show 404 error for page that does not exist", () => {
        cy.visit( 'http://localhost:3000/thispagedoesnotexist')
         cy.get('[data-testid=error-message-title]').should('contain.text', '404')
         cy.get('[data-testid=error-message]').should("be.visible")
        })
     

       it.skip("It - placeholder", () => {
        cy.visit( 'http://localhost:3000/')

    });

    it("Stub 500 error - only works first time otherwise the response is cached.", () => {
      cy.visit("http://localhost:3000/");
      // message to intergect into the page.
      let message = "500?";
      // Stub a response
      cy.intercept(
        {
          method: "GET",
          url: "**/benefits/count", 
        },
        {
          statusCode: 500,
          body: { error: message }, // stub returns above message
          headers: { "access-control-allow-origin": "*" },
          delayMs: 500,
        }
      )
      .as("get500");
      // cy.wait("@get500");
      cy.wait('@get500').its('response.statusCode').should('eq', 500)
      // the message is not yet added it to the project.
      //  cy.get('[data-testid=error-message-title]').should('contain.text', '500')
      cy.get("[data-testid=error-message]").should("contain", message);
    });
// Produces this response.
// Request URL: http://localhost:1337/benefits/count
// Request Method: GET
// Status Code: 500 Internal Server Error
// Remote Address: 127.0.0.1:53781
// Referrer Policy: strict-origin-when-cross-origin

it('always gets the new data for the count', () => {
  cy.intercept('**/benefits/count', req => {
    delete req.headers['if-none-match']
  }).as('counts')
  cy.visit('/')
  cy.wait('@counts')
    .its('response')
    .should('deep.include', {
      statusCode: 200,
      statusMessage: 'OK'
    })
    .and('have.property', 'body') // yields the "response.body"
    .then(body => {
      // since we do not know the number of items
      // just check if it is a number
      expect(body).to.be.a('number')
    })
})



    });
  
  