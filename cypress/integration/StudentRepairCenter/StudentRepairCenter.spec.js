import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { StudentRepairCenterActions } from '../PageObject/PageActions/StudentRepairCenterActions.js'

const srepc = new StudentRepairCenterActions()
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
    srepc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Repair360 page', () => {
    srepc.clickOnRepair360()
})
Then('Click on StudentRepairCenter tab', () => {
    srepc.clickOnStudentRepairCenter()
})
And('Verify the Title of StudentRepairCenter Page', () => {
    srepc.verifyTitleStudentRepairCenter()
})
Then('Verify the SRCrepairTickets Tab should be visible', () => {
    srepc.srcRepairTicketsTabVisible()
})
And('Verify the SRCfacilitators tab should be visible', () => {
    srepc.srcFacilitatorsTabVisible()
})
Then('Verify the Students Tab should be visible', () => {
    srepc.studentsTabVisible()
})
