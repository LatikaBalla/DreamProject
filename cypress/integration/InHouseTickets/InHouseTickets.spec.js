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
    iht.selectBuilding()
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
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    iht.searchRecordId()
})
Then('Enter the Search - Ticket Number in search box and Verify the Result', () => {
    iht.searchTicketNumber()
})
And('Enter the Search - Repair type in search box and Verify the Result', () => {
    iht.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    iht.searchRepairStatus()
})
And('Enter the Search - Building in search box and Verify the Result', () => {
    iht.searchbuiling()
})
Then('Click on Clear filter', () => {
    iht.clickOnClearFilter()
})

And('Click More filter select- Record Id in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterAssetTag()
})
And('Click More filter select- internal Technician in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterInternalTechnician()
})
And('Click More filter select- Created By in search box and Verify the Result', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterCreatedBy()
})
And ('Click More filter select- Building in search box and Verify the Result',()=>{
    iht.clickOnMoreFilter()
    iht.selectFilterBuilding()
})
And ('Click More filter select- Last Modified Date in search box and Verify the Result',()=>{
    iht.clickOnMoreFilter()
    iht.selectFilterlastmodifieddate()
})
And('Enter the Search value in search box', () => {
    iht.enterSearchBox()
})
Then('Verify the Results in the table', () => {
    iht.verifySearchResult()
})
And('Click on view button', () => {
    iht.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    iht.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    iht.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    iht.editTehnician()
    iht.editRepairStatus()
})
And('Click on Update Button', () => {
    iht.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    iht.verifyUpdate()
})
And('Click on Add Line and Verify', () => {
    iht.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    iht.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    iht.clickOnAddNote()
})
And ('Click on the Update to student Button', () => {
    iht.clickOnUpdateStudent()
})
Then ('Updated to student successfully', () => {
    iht.verifyUpdateStudent()
})
 And ('Click on the Update to in house Button', () => {
    iht.clickOnUpdateInhouse()
 })
Then ('Updated to in house successfully', () => {
    iht.verifyUpdateInhouse()
})