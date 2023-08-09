import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { VivacityRepairCenterActions } from '../PageObject/PageActions/VivacityRepairCenterActions.js'

const repc = new VivacityRepairCenterActions()
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
})
And('Click on Repair360 page', () => {
    repc.clickOnRepair360()
})
Then('I should be redirected to the Repair360 page', () => {
    cy.url().should('include', '/repair-360')
})
And('Verify the Title of VivacityRepairCenter Page', () => {
    repc.verifyTitleVivacityRepairCenter()
})
Then('Verify the VivaRepairTickets Tab should be visible', () => {
    repc.vivaRepairTicketsTabVisible()
})
And ('Verify the RepairBoxes tab should be visible',()=>{
    repc.repairBoxesTabVisible()
})
