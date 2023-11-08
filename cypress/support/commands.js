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
import 'cypress-file-upload';
Cypress.Commands.add("AdminLogin", () => {
  cy.get('[href="/login"]').click({ force: true })
  cy.origin('https://vivacity-valkyrie.us.auth0.com/', () => {
  //  cy.origin('https://dream-vivacity.us.auth0.com/', () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.get('#input-box-email').type(Cypress.env('USERNAME'))
    cy.get('#input-box-password').type(Cypress.env('PASSWORD'))
    cy.get('.submit-text').click()
    cy.wait(1000)
  })
})
Cypress.Commands.add("VivacityAdminLogin", () => {
  cy.get('[href="/login"]').click({ force: true })
  // cy.origin('https://dream-vivacity.us.auth0.com/', () => {
  cy.origin('https://vivacity-valkyrie.us.auth0.com/', () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.get('#input-box-email').type('demo_adminVivacity@vivacitytech.com')
    cy.get('#input-box-password').type(Cypress.env('PASSWORD'))
    cy.get('.submit-text').click()
    cy.wait(1000)
  })
})

Cypress.Commands.add("RepaireTechLogin", () => {
  cy.get('[href="/login"]').click({ force: true })
  cy.origin('https://vivacity-valkyrie.us.auth0.com/', () => {
  //  cy.origin('https://dream-vivacity.us.auth0.com/', () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.get('#input-box-email').type('demo_repairTech@vivacitytech.com')
    cy.get('#input-box-password').type(Cypress.env('PASSWORD'))
    cy.get('.submit-text').click()
    cy.wait(1000)
  })
})



