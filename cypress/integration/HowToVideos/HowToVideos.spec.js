import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { HowToVideosActions } from '../PageObject/PageActions/HowToVideosActions.js'

const repc = new HowToVideosActions()
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
Then('Click on HowToVideos tab', () => {
    repc.clickOnHowToVideos()
})
Then('Verify the Videos Section should be visible', () => {
    repc.videosVisible()
})


