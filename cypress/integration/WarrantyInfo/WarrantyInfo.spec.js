import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { WarrantyInfoActions } from '../PageObject/PageActions/WarrantyInfoActions.js'

const repc = new WarrantyInfoActions()
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
})
And('Click on Resources page', () => {
    repc.clickOnResources()
})
Then('Click on WarrantyInfo tab', () => {
    repc.clickOnInWarrantyInfo()
})
And('Verify the Title of WarrantyInfo Page', () => {
    repc.verifyTitleWarrantyInfo()
})


