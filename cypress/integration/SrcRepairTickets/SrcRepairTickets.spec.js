import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcRepairTicketsActions } from '../PageObject/PageActions/SrcRepairTicketsActions'

const srt = new SrcRepairTicketsActions()
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
    srt.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    srt.clickOnRepair360()
})
And('Click on StudentRepairCenter tab', () => {
    srt.clickOnStudentRepairCenterTab()
})
Then('Click on SrcRepairTickets tab', () => {
    srt.clickOnSrcRepairTicketsTab()
})
And('Verify the Title of SrcRepairTickets Page', () => {
    srt.verifyTitle()
})
Then('Filters of SrcRepairTickets should be visible', () => {
    srt.filtersVisible()
})
And('Table for SrcRepairTickets should be visible', () => {
    srt.tableVisible()
})
Then('I should click on Create Student Repair Ticket button', () => {
    srt.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician and building', () => {
    srt.selectFailureType()
    srt.selectTechnician()
    srt.selectSerialDevice()
    srt.selectIssue()
    srt.selectBuilding()
})
Then('Enter the Chromebook issue and Image description', () => {
    srt.enterChromebookIssue()
    srt.enterimagedescription()
})
And('Click on save button', () => {
    srt.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    srt.verifyNewTicket()
})
And('Enter the Search value in search box', () => {
    srt.enterSearchBox()
})
Then('Verify the Results in the table', () => {
    srt.verifySearchResult()
})
And('Click on view button', () => {
    srt.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    srt.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    srt.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    srt.editTehnician()
    srt.editRepairStatus()
})
And('Click on Update Button', () => {
    srt.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    srt.verifyUpdate()
})
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    srt.searchRecordId()
})
Then('Enter the Search - Ticket Number in search box and Verify the Result', () => {
    srt.searchTicketNumber()
})
And('Enter the Search - Repair type in search box and Verify the Result', () => {
    srt.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    srt.searchRepairStatus()
})
Then('Click on Clear filter', () => {
    srt.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterAssetTag()
})
And('Click More filter select- internal Technician in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterStudentTechnician()
})
And('Click More filter select- Created By in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterCreatedBy()
})
And ('Click More filter select- Last Modified Date in search box and Verify the Result',()=>{
    srt.clickOnMoreFilter()
    srt.selectFilterLastModifiedDate()
})
And('Click on Add Line and Verify', () => {
    srt.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    srt.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    srt.clickOnAddNote()
})
And('Click on Download Export button', () => {
    srt.clickOnExport()
})