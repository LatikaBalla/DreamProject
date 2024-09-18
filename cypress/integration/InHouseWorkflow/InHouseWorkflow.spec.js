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
And('Select failure Type, Serial Device, Technician and repair issue', () => {
    ihw.selectFailureType()
    ihw.selectTechnician()
    ihw.selectSerialDevice()
    ihw.selectReturnsite()
    ihw.selectRepairissue()
})
Then('Select building and Enter the Chromebook issue', () => {
    cy.wait(100)
    ihw.selectBuilding()
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
And('Enter Search ticket no in search box', () => {
    ihw.searchTicketNo()
})
Then('Verify search result below', () => {
    ihw.verfiySearchResult()
})
And('Click on view button', () => {
    ihw.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    ihw.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    ihw.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    ihw.editTehnician()
    ihw.editRepairStatus()
})
And('Click on Update Button', () => {
    ihw.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    ihw.verifyUpdate()
})
And('Click on Add Line and Verify', () => {
    ihw.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    ihw.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    ihw.clickOnAddNote()
})

