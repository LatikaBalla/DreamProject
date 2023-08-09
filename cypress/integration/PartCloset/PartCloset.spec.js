import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { PartClosetActions } from '../PageObject/PageActions/PartClosetActions'

const acc = new PartClosetActions()
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
Then('Click on Repair360 page', () => {
    acc.clickOnRepair360()
})
And('Click on PartCloset Tab', () => {
    acc.clickOnPartClosetTab()
})
And('Verify the Title of PartCloset Page', () => {
    acc.verifyTitle()
})
Then('Filters of PartCloset should be visible', () => {
    acc.filtersVisible()
})
And('Table for PartCloset should be visible', () => {
    acc.tableVisible()
})
