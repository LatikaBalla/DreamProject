import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseTicketsActions } from '../PageObject/PageActions/InHouseTicketsActions'

const iht = new InHouseTicketsActions()
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
    iht.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    iht.clickOnRepair360()
})
And('Click on InHouseRepairCenter tab', () => {
    iht.clickOnInHouseRepairCenterTab()
})
Then('Click All InHouseTickets tab', () => {
    iht.clickOnInHouseTicketsTab()
})
And('Verify the Title of InHouseTickets Page', () => {
    iht.verifyTitle()
})
Then('Filters of InHouseTickets should be visible', () => {
    iht.filtersVisible()
})
And('Table for InHouseTickets should be visible', () => {
    iht.tableVisible()
})
Then('I should click on Create new button', () => {
    iht.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician, issue and Building', () => {
    iht.selectFailureType()
    iht.selectTechnician()
    iht.selectSerialDevice()
    iht.selectRepaireIssue()
    iht.selectBilding()
})
Then('Enter the Chromebook issue', () => {
    iht.enterChromebookIssue()
})
And('Click on save button', () => {
    iht.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    iht.verifyNewTicket()
})
And('Click on Download Export button', () => {
    iht.clickOnExport()
})
Then('Verify the successfully downloaded', () => {
    iht.verifyDownload()
})


