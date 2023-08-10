import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { UsersActions } from '../PageObject/PageActions/UsersActions'

const acc = new UsersActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    acc.closeTermsOfServiceWindow()
})
And('Click on Users page', () => {
    acc.clickOnUsers()
})
Then('I should be redirected to the Users page', () => {
    cy.url().should('include', '/users')
})
Then('All Organizational unit should be visible', () => {
    acc.AllOrganizationalUnitVisible()
})
And('All Users Unit should be visible', () => {
    acc.AllUserUnitVisible()
})
Then('Filters of Users unit should be visible', () => {
    acc.filtersVisible()
})
And('Table for Users unit should be visible', () => {
    acc.tableVisible()
})



