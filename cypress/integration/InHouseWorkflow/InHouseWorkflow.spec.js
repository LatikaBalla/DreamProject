import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseWorkflowActions } from '../PageObject/PageActions/InHouseWorkflowActions.js'

const ihw = new InHouseWorkflowActions()
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
    ihw.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    ihw.clickOnRepair360()
})
And('Click on InHouseRepairCenter tab', () => {
    ihw.clickOnInHouseRepairCenter()
})
Then('Filters of InHouseWorkflow should be visible', () => {
    ihw.filtersVisible()
})

Then('I should click on new button', () => {
    ihw.clickOnNewButton()
})
And('Select failure Type, Serial Device and Technician', () => {
    ihw.selectFailureType()
    ihw.selectTechnician()
    ihw.selectSerialDevice()
})
Then('Enter the Chromebook issue', () => {
    ihw.enterChromebookIssue()
})
And('Click on save button', () => {
    ihw.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    ihw.verifyNewTicket()
})
And('Click on Download Export button', () => {
    ihw.clickOnExport()
})
Then('Verify the successfully downloaded', () => {
    ihw.verifyDownload()
})

