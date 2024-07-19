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
    rt.selectStudent()
    rt.selectChromebookIssue()
    rt.selectBuilding()
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
And('Click on view the details', () => {
    rt.clickOnViewButton()
})
Then('Verify the Details of Repair Ticket', () => {
    rt.verifyDetails()
})
And('Enter the Search -  Record Id in search box and Verify the Result', () => {
    rt.searchRecordId()
})
And('Enter the Search - Ticket Number in search box and Verify the Result', () => {
    rt.searchTicketNumber()
})
Then('Enter the Search - Repair type in search box and Verify the Result', () => {
    rt.searchRepairType()
})
And('Enter the Search - Serial Number in search box and Verify the Result', () => {
    rt.searchSerialNumber()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    rt.searchRepairStatus()
})
And('Enter the Search - Repair Box in search box and Verify the Result', () => {
    rt.searchRepairBox()
})
Then('Enter the Search - Asset tag in search box and Verify the Result', () => {
    rt.searchAssetTag()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairType()
})
And('Click on filter of Serial Number contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterSerialNumber()
})
And('Click More filter select- Building in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterBuilding()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairStatus()
})
And('Click More filter select- Repair Box in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairBox()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterAssetTag()
})
And('Click More filter select- Created By in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterCreatedBy()
})
And('Click More filter select- Last Modified Date in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilteLastModifiedDate()
})
Then('Click on Clear filter', () => {
    rt.clickOnClearFilter()
})
And('Click More filter select- Repair device in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairDevice()
})
And('Enter the Search value in search box', () => {
    rt.enterSearchBox()
})
Then('Verify the Results in the table', () => {
    rt.verifySearchResult()
})
And('Click on view button', () => {
    rt.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    rt.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    rt.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    rt.editTehnician()
    rt.editRepairStatus()
})
And('Click on Update Button', () => {
    rt.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    rt.verifyUpdate()
})
And('Click on Add Line and Verify', () => {
    rt.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    rt.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    rt.clickOnAddNote()
})
And('Click on filter of Serial Number Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontain()
})
And('Click on filter of Serial Number Equals in search box and Verify the Result', () => {
    rt.filterEquals()
})
And('Click on filter of Serial Number Does not equal in search box and Verify the Result', () => {
    rt.filterNotequal()
})
And('Click on filter of Serial Number Begins with in search box and Verify the Result', () => {
    rt.filterBeginswith()
})
And('Click on filter of Serial Number Ends with in search box and Verify the Result', () => {
    rt.Endswith()
})
And('Click on filter of Serial Number Blank in search box and Verify the Result', () => {
    rt.filterBlank()
})
And('Click on filter of Serial Number Not blank in search box and Verify the Result', () => {
    rt.filterNotblank()
})
