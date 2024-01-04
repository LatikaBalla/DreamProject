import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions.js'
const dev = new DeviceRepairReportActions()
const repc = new ReportCenterActions()

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
Then('I should be redirected to the Report center page', () => {
    cy.url().should('include', '/report-center')
})
And('Verify the Title of Report center Page', () => {
    repc.verifyTitleReportCenter()
})
Then('Verify the VivacityRepairReport Tab should be visible', () => {
    repc.vivacityRepairReportTabVisible()
})
And('Verify the InHouseRepairReport tab should be visible', () => {
    repc.inhouseRepairReportTabVisible()
})
Then('Verify the DeviceRepairReport tab should be visible', () => {
    repc.deviceRepairReportTabVisible()
})
And('Verify the NonwarrantyRepairs tab should be visible', () => {
    repc.nonwarrantyRepairsTabVisible()
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
Then('Click on InHouseRepairReport page', () => {
    inh.clickOnInHouseRepairReport()
})
And('Verify all sections of InHouseRepairReport Page should be visible', () => {
    inh.AllSectionsVisible()
})
Then('Verify ticketdata graph should be visible', () => {
    inh.ticketDataGraphVisible()
})
Then('Click on DeviceRepairReport page', () => {
    dev.clickOnDeviceRepairReport()
    cy.wait(3000)
})

And('Verify title of DeviceRepairReport Page should be visible', () => {
    dev.verifyTitle()
})
Then('Verify the filters should be visible', () => {
    dev.filtersVisible()
})
Then('Verify history table should be visible', () => {
    dev.tableVisible()
})
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    dev.searchRecordId()
})
Then('Enter the Search - Repair type in search box and Verify the Result', () => {
    dev.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    //dev.searchRepairStatus() 
})
And('Enter the Search - Repair Box in search box and Verify the Result', () => {
    dev.searchRepairBox()
})
And('Enter the Ticket Number in search box', () => {
    dev.selectdropdownList()
    dev.enterTicketNumberSearch()
})
Then('Verify the Ticket details in table', () => {
    dev.verifyTicketDetailsTable()
})
And('Click on the Ticket Number', () => {
    dev.clickOnTicketNumberTable()
})
Then('Verify the Repair Ticket page will open', () => {
    dev.verifyRapairTicketPAge()
})
And('Verfiy the details of Ticket', () => {
    dev.verifyTicketDetails()
})
Then('Click on the download Ticket Estimation button', () => {
    dev.clickOnDownloadButton()
})
And('Verify downloaded ticket successfully', () => {
    dev.verifyDownloadSuccessful()
})
And('Click on clear button', () => {
    dev.clickOnClearButton()
})
Then('Verify the search box is cleared', () => {
    dev.searchBoxEmpty()
})
And('Click on NonwarrantyRepairs page', () => {
    nwr.clickOnNonWarrantyRepairs()
})
Then('Verify title of NonWarrantyRepairs Page should be visible', () => {
    nwr.verifyTitle()
})
And('Verify the NonWarranty Form should be visible', () => {
    nwr.formVisible()
})
Then('Verify table and filter should be visible', () => {
    nwr.filtersVisible()
    nwr.tableVisible()
})
Then('Click on the export button', () => {
    dev.clickOnExport()
})
Then('Click on Clear filter', () => {
    dev.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterAssetTag()
})
And('Click More filter select- Repair Box in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairBox()
})
And('Click More filter select- Created By in search box and Verify the Result', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterCreatedBy()
})


