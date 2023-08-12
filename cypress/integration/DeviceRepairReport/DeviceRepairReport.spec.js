import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions'

const inh = new DeviceRepairReportActions()
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
    inh.closeTermsOfServiceWindow()
})
And('Click on Report center page', () => {
    inh.clickOnReportCenter()
})
Then('Click on DeviceRepairReport page', () => {
    inh.clickOnDeviceRepairReport()
})
And('Verify title of DeviceRepairReport Page should be visible', () => {
    inh.verifyTitle()
})
Then('Verify the filters should be visible', () => {
    inh.filtersVisible()
})
Then('Verify history table should be visible', () => {
    inh.tableVisible()
})

And ('Enter the Ticket Number in search box',()=>{
    inh.enterTicketNumberSearch()
})
Then ('Verify the Ticket details in table',()=>{
    inh.verifyTicketDetailsTable()
}) 
And ('Click on clear button',()=>{
    inh.clickOnClearButton()
}) 
Then ('Verify the search box is cleared',()=>{
    inh.searchBoxEmpty()
}) 
And ('Enter the Ticket Number in search box',()=>{
    inh.enterTicketNumberSearch()
}) 
And  ('Click on the Ticket Number',()=>{
    inh.clickOnTicketNumberTable()
})
Then ('Verify the Repair Ticket page will open',()=>{
inh.verifyRapairTicketPAge()
})
And ('Verfiy the details of Ticket',()=>{
    inh.verifyTicketDetails()
}) 
Then ('Click on the download Ticket Estimation button',()=>{
inh.clickOnDownloadButton()
}) 
And ('Verify downloaded ticket successfully',()=>{
    inh.verifyDownloadSuccessful()
})



