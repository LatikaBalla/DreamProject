import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { VivacityRepairReportActions } from '../PageObject/PageActions/VivacityRepairReportActions'

const viva = new VivacityRepairReportActions()
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
    viva.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Report center page', () => {
    viva.clickOnReportCenter()
})
Then('Click on VivacityRepairReport page', () => {
    viva.clickOnVivacityRepairReport()
})
And('Verify all sections of VivacityRepairReport Page should be visible', () => {
    viva.AllSectionsVisible()
})
Then('Verify repair status graph should be visible', () => {
    viva.repairStatusGraphVisible()
})

Then('Verify warranty claim graph should be visible', () => {
    viva.warrantyClaimGraphvisible()
})
And('Verify cavas of Repair ticket by status should be visible', () => {
    viva.cavasOfRepairTicketByStatusVisible()
})




