/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Items shown on the Landing page', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.waitForReact()
     
    })

    it('landing page is loaded', () => {
      // Test the page at initial load
    //  cy.injectAxe()
      cy.url().should('contains', '/')
      // checkA11y(cy)
    })
    
    it('should go to the landing page and show header image and links ', () => {   
        cy.get('#wb-bnr > .btn').should('be.visible', 'Français')
  
     })

     it('should have a Title component ', () => {  
      cy.react('Title').should('have.length', '1')
      cy.get('[data-cy=home-page-title]').should('contain.text', 'Welcome to the Benefits Finder')
    
   })

   it('should have a Page description component ', () => {  
    cy.react('PageDescription').should('have.length', '1')
  
 })


})