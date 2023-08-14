import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { StudentRepairCenterActions } from '../PageObject/PageActions/StudentRepairCenterActions.js'

const repc = new StudentRepairCenterActions()
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
    cy.wait(1000)
})
And('Click on Repair360 page', () => {
    repc.clickOnRepair360()
})
Then('Click on StudentRepairCenter tab', () => {
    repc.clickOnStudentRepairCenter()
})
And('Verify the Title of StudentRepairCenter Page', () => {
    repc.verifyTitleStudentRepairCenter()
})
Then('Verify the SRCrepairTickets Tab should be visible', () => {
    repc.srcRepairTicketsTabVisible()
})
And('Verify the SRCfacilitators tab should be visible', () => {
    repc.srcFacilitatorsTabVisible()
})
Then('Verify the Students Tab should be visible', () => {
    repc.studentsTabVisible()
})
