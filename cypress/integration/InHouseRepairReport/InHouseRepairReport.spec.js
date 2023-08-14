import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseRepairReportActions } from '../PageObject/PageActions/InHouseRepairReportActions'

const inh = new InHouseRepairReportActions()
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
    inh.closeTermsOfServiceWindow()
    cy.wait(2000)
})
And('Click on Report center page', () => {
    inh.clickOnReportCenter()
})
Then('Click on InHouseRepairReport page', () => {
    inh.clickOnInHouseRepairReport()
})
And('Verify all sections of InHouseRepairReport Page should be visible', () => {
    inh.AllSectionsVisible()
})
Then('Verify ticketdata graph should be visible', () => {
    inh.ticketDataGraphVisible()
})






