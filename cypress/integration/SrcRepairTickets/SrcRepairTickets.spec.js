import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcRepairTicketsActions } from '../PageObject/PageActions/SrcRepairTicketsActions'

const acc = new SrcRepairTicketsActions()
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
And('Click on StudentRepairCenter tab', () => {
    acc.clickOnStudentRepairCenterTab()
})
Then('Click on SrcRepairTickets tab', () => {
    acc.clickOnSrcRepairTicketsTab()
})
And('Verify the Title of SrcRepairTickets Page', () => {
    acc.verifyTitle()
})
Then('Filters of SrcRepairTickets should be visible', () => {
    acc.filtersVisible()
})
And('Table for SrcRepairTickets should be visible', () => {
    acc.tableVisible()
})
