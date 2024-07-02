import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginActions } from '../PageObject/PageActions/LoginActions'

const log = new LoginActions()
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
Then('User should be redirected to the Report center page', () => {
    log.closeTermsOfServiceWindow()
    log.verifyTitleReportCenter()
})
Then('User enters invalid credentials', () => {
    log.enterWrongUsername()
    log.enterWrongPassword()
})
Then ('User enters invalid credentials for lock',()=>{
    log.enterWrongUsernameLock()
    log.enterWrongPassword()
})
Then ('Verify error lock account message should be displayed',()=>{
    log.verifyLockedacc()
})
Then('Verify error message should be displayed', () => {
    log.verifyErrorMessage()
})
Then('User enter the wrong emailid', () => {
    log.enterWrongUsername()
})
Then('Verify recovery password to email has been send message should be displayed', () => {
    log.verifyMailforgetpass()
})
Then('User enter the valid emailid', () => {
    log.enterUsername()
})
And('Clicks the ForgetPassword button', () => {
    log.clickOnForgetPassword()
})
Then('Verify recovery email has been send message should be displayed', () => {
    log.verifyErrorforgetpass()
})