// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("AdminLogin", () => {    
        cy.visit("/");
        cy.origin('https://vivacity-valkyrie.us.auth0.com', () => {
          Cypress.on("uncaught:exception", () => {
            return false;
          });
          cy.get('#input-box-email').type('demo@vivacitytech.com')
          cy.get('#input-box-password').type('VIVA2020!demo!')
          cy.get('.submit-text').click()  
          cy.wait(3000)
        })
        cy.visit("/")
      })
    
    

    