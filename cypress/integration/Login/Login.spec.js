import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginActions } from '../PageObject/PageActions/LoginActions'

const log = new LoginActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('On landing page Click on login button', () => {
    log.clickOnLoginButton()
})
Then('User enters valid credentials', () => {
    log.enterUsername()
    log.enterPassword()
})
And('Clicks the login button', () => {
    log.clickOnContiune()
})
Then('User should be redirected to the dashboard', () => {
    log.closeTermsOfServiceWindow()
    log.verifyTitleDashboard()
})
Then('User enters invalid credentials', () => {
    log.enterWrongUsername()
    log.enterWrongPassword()
})
Then('Verify error message should be displayed', () => {
    log.verifyErrorMessage()
})
