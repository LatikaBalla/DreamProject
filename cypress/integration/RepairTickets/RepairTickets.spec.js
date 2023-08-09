import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { RepairTicketsActions } from '../PageObject/PageActions/RepairTicketsActions'

const acc = new RepairTicketsActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('close the terms of service window', () => {
    cy.wait(8000)
    acc.closeTermsOfServiceWindow()
})
Then('Click on Repair360 page', () => {
    acc.clickOnRepair360()
})
And('Verify the Title of RepairTickets Page', () => {
    acc.verifyTitle()
})
Then('Filters of RepairTickets should be visible', () => {
    acc.filtersVisible()
})
And('Table for RepairTickets should be visible', () => {
    acc.tableVisible()
})
