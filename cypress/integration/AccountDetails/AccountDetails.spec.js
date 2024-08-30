import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'

const acc = new AccountDetailsActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('close the terms of service window', () => {
    cy.wait(8000)
    acc.closeTermsOfServiceWindow()
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
})
Then('Click on My Account Dashboard page', () => {
    acc.clickonAccountDash()
})
And('Verify the Title of Account Details Page', () => {
    acc.verifyTitleAccountDetails()
})
Then('Account Details -Aaccount Name and no should be visible', () => {
    acc.AccountDetailsVisible()
})
And('Account Manager,Billing Address and Shipping Address should be visible', () => {
    acc.sectionManaddressVisible()
})
Then('Vivacity Tech Dream should be visible', () => {
    acc.vivaTechVisible()
})
