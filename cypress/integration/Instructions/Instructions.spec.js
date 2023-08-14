import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InstructionsActions } from '../PageObject/PageActions/InstructionsActions.js'

const repc = new InstructionsActions()
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
And('Click on Resources page', () => {
    repc.clickOnResources()
})
Then('Click on Instructions tab', () => {
    repc.clickOnInstructions()
})
Then('Verify the provisionDevice Tab should be visible', () => {
    repc.provisionDeviceTabVisible()
})
And('Verify the deprovisionDevice tab should be visible', () => {
    repc.deprovisionDeviceTabVisible()
})

