import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { InHouseRepairReportActions } from '../PageObject/PageActions/InHouseRepairReportActions'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions'
import { VivacityRepairReportActions } from '../PageObject/PageActions/VivacityRepairReportActions'
import { NonWarrantyRepairsActions } from '../PageObject/PageActions/NonWarrantyRepairsActions'


const viva = new VivacityRepairReportActions()
const dev = new DeviceRepairReportActions()
const inh = new InHouseRepairReportActions()
const repc = new ReportCenterActions()
const nwr=new NonWarrantyRepairsActions()

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
And('Verify the NonwarrantyRepairs tab should be visible',()=>{
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
And('Enter the Ticket Number in search box', () => {
    dev.enterTicketNumberSearch()
})
Then('Verify the Ticket details in table', () => {
    cy.wait(3000)
    dev.verifyTicketDetailsTable()
})
And('Click on clear button', () => {
    dev.clickOnClearButton()
})
Then('Verify the search box is cleared', () => {
    dev.searchBoxEmpty()
})
And('Enter the Ticket Number in search box', () => {
    dev.enterTicketNumberSearch()
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


And ('Click on NonwarrantyRepairs page',()=>{
nwr.clickOnNonWarrantyRepairs()
})
Then ('Verify title of NonWarrantyRepairs Page should be visible',()=>{
nwr.verifyTitle()
})
And ('Verify the NonWarranty Form should be visible',()=>{
nwr.formVisible()
})
Then ('Verify table and filter should be visible',()=>{
nwr.filtersVisible()
nwr.tableVisible()
})


