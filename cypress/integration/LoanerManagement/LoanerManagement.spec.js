import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoanerManagementActions } from '../PageObject/PageActions/LoanerManagementActions'

const acc = new LoanerManagementActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('close the terms of service window', () => {
    cy.wait(8000)
    acc.closeTermsOfServiceWindow()
})
Then('Click on Manage Devices', () => {
    acc.clickOnManageDevices()
})
And('Click on LoanerManagement Tab', () => {
    acc.clickOnLoanerManagement()
})
And('Table for LoanerManagement should be visible', () => {
    acc.tableVisible()
})
