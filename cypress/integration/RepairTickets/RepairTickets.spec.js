import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { RepairTicketsActions } from '../PageObject/PageActions/RepairTicketsActions'

const rt = new RepairTicketsActions()
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
    rt.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    rt.clickOnRepair360()
})
And('Verify the Title of RepairTickets Page', () => {
    rt.verifyTitle()
})
Then('Filters of RepairTickets should be visible', () => {
    rt.filtersVisible()
})
And('Table for RepairTickets should be visible', () => {
    rt.tableVisible()
})
Then('I should click on create new ticket', () => {
    rt.clickOnCreateNewTicket()
})

Then('Select failure Type, Return site and Serial Device', () => {
    rt.selectFailureType()
    rt.selectReturnSite()
    rt.selectSerialDevice()
})
And('Select Building and Chromebook issue', () => {
    rt.selectBuilding()
    rt.selectChromebookIssue()
})
Then('Enter the Describe Your Issue', () => {
    rt.enterDescritionOfIssue()
})
And('Click on save button', () => {
    rt.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    rt.verifyNewTicket()
})
And('Click on Download import button', () => {
    rt.clickOnExport()
})
Then('Verify the successfully downloaded', () => {
    rt.verifyDownload()
})
And ('Click on view the details',()=>{
rt.clickOnViewButton()
})
Then ('Verify the Details of Repair Ticket',()=>{
rt.verifyDetails()
})
