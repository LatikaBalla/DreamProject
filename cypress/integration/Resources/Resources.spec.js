import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ResourcesActions } from '../PageObject/PageActions/ResourcesActions.js'

const repc = new ResourcesActions()
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
Then('I should be redirected to the Resources page', () => {
    cy.url().should('include', '/resources')
})
And('Verify the Title of Resources Page', () => {
    repc.verifyTitleResources()
})
Then('Verify the Instructions Tab should be visible', () => {
    repc.instructionsTabVisible()
})
And('Verify the HowToVideos tab should be visible', () => {
    repc.howToVideosTabVisible()
})
Then('Verify the WarrantyInfo tab should be visible', () => {
    repc.warrantyInfoTabVisible()
})
