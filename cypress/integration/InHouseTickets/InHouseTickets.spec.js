import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseTicketsActions } from '../PageObject/PageActions/InHouseTicketsActions'

const acc = new InHouseTicketsActions()
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
And('Click on InHouseRepairCenter tab', () => {
    acc.clickOnInHouseRepairCenterTab()
})
Then('Click All InHouseTickets tab', () => {
    acc.clickOnInHouseTicketsTab()
})
And('Verify the Title of InHouseTickets Page', () => {
    acc.verifyTitle()
})
Then('Filters of InHouseTickets should be visible', () => {
    acc.filtersVisible()
})
And('Table for InHouseTickets should be visible', () => {
    acc.tableVisible()
})
