import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { InHouseRepairReportActions } from '../PageObject/PageActions/InHouseRepairReportActions'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions'
import { VivacityRepairReportActions } from '../PageObject/PageActions/VivacityRepairReportActions'
import { FleetValueActions } from '../PageObject/PageActions/FleetValueActions.js'
import { TelemetryDataActions } from '../PageObject/PageActions/TelemetryDataActions.js'
const viva = new VivacityRepairReportActions()
const dev = new DeviceRepairReportActions()
const inh = new InHouseRepairReportActions()
const repc = new ReportCenterActions()
const fle = new FleetValueActions()
const td = new TelemetryDataActions()

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
And('Verify the FleetValue tab should be visible', () => {
    repc.fleetValueTabVisible()
})
And('Verify the TelemetryData tab should be visible', () => {
    repc.telemetryDataTabVisible()
})
Then('Click on VivacityRepairReport page', () => {
    viva.clickOnVivacityRepairReport()
})
And('Verify all sections of VivacityRepairReport Page should be visible', () => {
    viva.AllSectionsVisible()
})
Then('Verify Repair Tickets Failure Type graph should be visible', () => {
    viva.cavasOfRepairTicketByStatusVisible()
})
Then('Verify Manufacturers in Fleet graph should be visible', () => {
    viva.warrantyClaimGraphvisible()
})
And('Verify Repair ticket by status should be visible', () => {
    viva.repairStatusGraphVisible()
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
And('Click on FleetValue page', () => {
    fle.clickOnFleetValue()
})
Then('Verify title of FleetValue Page should be visible', () => {
    fle.verifyTitle()
})
Then('Verify table and filter should be visible', () => {
    fle.filtersVisible()
    fle.tableVisible()
})
And('Verify all sections of FleetValue Page should be visible', () => {
    fle.allsectionsVisible()
})
And('Click on TelemetryData page', () => {
    td.clickOnTelemetryData()
})
And('Verify the Title of TelemetryData Page', () => {
    cy.title().should('eq', 'Report Center')
})
Then('Verify the TelemetryData Tab should be visible', () => {
    td.TelemetryDataSectionVisible()
})
And('Verify the Device information tab should be visible', () => {
    td.deviceInfoSectionVisible()
})
And('Verify the Data graph should be visible', () => {
    td.dataGraphVisible()
})
Then('Select the building from dropdownlist', () => {
    viva.selectbuilding()
})
Then('Click on clear filter', () => {
    viva.clickonClearFilter()
}) 
