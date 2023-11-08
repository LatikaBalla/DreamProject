import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SupportActions } from '../PageObject/PageActions/SupportActions'

const su = new SupportActions()
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
    su.closeTermsOfServiceWindow()
})
And('Click on Support page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({force:true})
    su.clickOnSupport()
})
Then('Verify the Title of Support Page', () => {
    cy.title().should('eq', 'Support')
})
And('Enter Full name', () => {
    su.enterFullname()
})
Then('Select task Priority and Topic', () => {
    su.selectPriority()
    su.selectTopic()
})
And('Upload the image and enter Notes', () => {
    su.uploadImage()
    su.enterNotes()
})
Then('Click on submit button', () => {
  su.clickOnSubmit()
})
And('Verify the Send Feedback successfully', () => {
    su.verfiyFeedbackSuccess()
})



