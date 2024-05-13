import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { NonWarrantyRepairsActions } from '../PageObject/PageActions/NonWarrantyRepairsActions.js'

const repc = new ReportCenterActions()
const nwr = new NonWarrantyRepairsActions()
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
And('Click on Report center page', () => {
    repc.clickOnReportCenter()
})
And('Click on NonwarrantyRepairs page', () => {
    nwr.clickOnNonWarrantyRepairs()
})
Then('Select failure Type, Return site and Serial Device', () => {
    nwr.selectFailureType()
    nwr.selectSite()
    nwr.selectSerialDevice()
})
And('Select Building and Chromebook issue', () => {
    nwr.selectBuilding()
      nwr.selectRepaireIssue()
})
Then('Enter the Describe Your Issue', () => {
    nwr.enterChromebookIssue()
})
And('Click on save button', () => {
    nwr.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    nwr.verifyNewTicket()
})
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    nwr.searchRecordId()
})
Then('Enter the Search - Repair type in search box and Verify the Result', () => {
    nwr.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    nwr.searchRepairStatus() 
})
And('Enter the Search - Repair Box in search box and Verify the Result', () => {
    nwr.searchRepairBox()
})
And('Enter the Ticket Number in search box for warranty', () => {
    nwr.selectdropdownList()
    nwr.enterTicketNumberSearch()
})
Then('Verify the Ticket details in table for warranty', () => {

    nwr.verifyTicketDetailsTable()
})
And('Click on the Ticket Number for warranty', () => {
    nwr.clickOnTicketNumberTable()
})
Then('Verify the Repair Ticket page will open for warranty', () => {
    nwr.verifyRapairTicketPAge()
})
And('Verfiy the details of Ticket for warranty', () => {
    nwr.verifyTicketDetails()
})
Then('Click on the download Ticket Estimation button for warranty', () => {
    nwr.clickOnDownloadButton()
    cy.go('back')
})
And('Verify downloaded ticket successfully for warranty', () => {
    nwr.verifyDownloadSuccessful()
})
Then('Click on the export button', () => {
    nwr.clickOnExport()
})
Then('Click on Clear filter', () => {
    nwr.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterAssetTag()
})
And('Click More filter select- Repair Box in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairBox()
})
And('Click More filter select- Created By in search box and Verify the Result', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterCreatedBy()
})
