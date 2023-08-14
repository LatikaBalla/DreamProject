import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseWorkflowActions } from '../PageObject/PageActions/InHouseWorkflowActions.js'

const repc = new InHouseWorkflowActions()
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
    repc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    repc.clickOnRepair360()
})
And('Click on InHouseRepairCenter tab', () => {
    repc.clickOnInHouseRepairCenter()
})
Then('Filters of InHouseWorkflow should be visible', () => {
    repc.filtersVisible()
})


