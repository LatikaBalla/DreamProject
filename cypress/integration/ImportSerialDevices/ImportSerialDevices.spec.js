import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ImportSerialDevicesActions } from '../PageObject/PageActions/ImportSerialDevicesActions'

const isd = new ImportSerialDevicesActions()
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
    isd.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Manage Devices', () => {
    isd.clickOnManageDevices()
})
And('Click on ImportSerialDevices Tab', () => {
    isd.clickOnImportSerialDevices()
})
And('Verify the Title of ImportSerialDevices Page', () => {
    isd.verifyTitle()
})
Then('Filters of ImportSerialDevices should be visible', () => {
    isd.filtersVisible()
})
And('Table for ImportSerialDevices should be visible', () => {
    isd.tableVisible()
})
Then ('I should click on Add New Import',()=>{
    isd.clickOnAddNewImport()
})
Then ('Upload the CSV import file',()=>{
    isd.uploadcsvFile()
})
And ('Click on submit button',()=>{
    isd.clickOnSubmitButton()
})
Then('Verify the record in table',()=>{
    isd.verfiyImportTable()
})
 And ('Click on Download import button',()=>{
    isd.clickOnDownloadImport()
 })
Then ('Verify the successfully downloaded',()=>{
    isd.verifyDownloaded()
})
And ('Click on Details button',()=>{
    isd.clickOnDetailsButton()
}) 
Then ('Verify the Device Details',()=>{
    isd.verifyDeviceDetails()
}) 
