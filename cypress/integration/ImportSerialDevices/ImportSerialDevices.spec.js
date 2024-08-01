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
Then('I should click on Add New Import', () => {
    isd.clickOnAddNewImport()
})
Then('Upload the CSV import file', () => {
    isd.uploadcsvFile()
})
And('Click on submit button', () => {
    isd.clickOnSubmitButton()
})
And('Click on refresh button', () => {
    isd.clickOnRefreshButton()
})
Then('Verify the record in table', () => {
    isd.verfiyImportTable()
})
And('Click on Download import button', () => {
    isd.clickOnDownloadImport()
})
Then('Verify the successfully downloaded', () => {
    isd.verifyDownloaded()
})
And('Click on Details button', () => {
    isd.clickOnDetailsButton()
})
Then('Verify the Device Details', () => {
    isd.verifyDeviceDetails()
}) 
And ('Click More filter select- Importer in search box and Verify the Result',()=>{
    isd.clickOnMoreFilter()
    isd.selectFilterImporter()
})
And ('Click More filter select- Quantity Devices in search box and Verify the Result',()=>{
    isd.clickOnMoreFilter()
    isd.selectFilterQuantityDevices()
})
Then ('Click on Clear filter',()=>{
    isd.clickOnClearFilter()
})
//date
And('Click on filter of Date Imported Equals in search box and Verify the Result', () => {
    isd.filterEqualsDate()
})
And('Click on filter of Date Imported Does not equal in search box and Verify the Result', () => {
    isd.filterNotequalDate()
})
And('Click on filter of Date Imported Before in search box and Verify the Result', () => {
    isd.filterBeforeDate()
})
And('Click on filter of Date Imported Between with in search box and Verify the Result', () => {
    isd.filterBetweenDate()
})
And('Click on filter of Date Imported After in search box and Verify the Result', () => {
    isd.filterAfterDate()
})
And('Click on filter of Date Imported Blank in search box and Verify the Result', () => {
    isd.filterBlankDate()
})
And('Click on filter of Date Imported Not blank in search box and Verify the Result', () => {
    isd.filterNotblankDate()
})
//Importer
And('Click on filter of Importer contain in search box and Verify the Result', () => {
    isd.filtercontainI()
})
And('Click on filter of Importer Does not contain in search box and Verify the Result', () => {
    isd.filterDoesnotcontainI()
})
And('Click on filter of Importer Equals in search box and Verify the Result', () => {
    isd.filterEqualsI()
})
And('Click on filter of Importer Does not equal in search box and Verify the Result', () => {
    isd.filterNotequalI()
})
And('Click on filter of Importer Begins with in search box and Verify the Result', () => {
    isd.filterBeginswithI()
})
And('Click on filter of Importer Ends with in search box and Verify the Result', () => {
    isd.filterEndswithI()
})
And('Click on filter of Importer Blank in search box and Verify the Result', () => {
    isd.filterBlankI()
})
And('Click on filter of Importer Not blank in search box and Verify the Result', () => {
    isd.filterNotblankI()
})
//Quantity
And('Click on filter of Quantity Devices Equals in search box and Verify the Result', () => {
    isd.filtercontainQ()
})
And('Click on filter of Quantity Devices Does not equal in search box and Verify the Result', () => {
    isd.filterDoesnotequalQ()
})
And('Click on filter of Quantity Devices Greater than in search box and Verify the Result', () => {
    isd.filterGreaterthanQ()
})
And('Click on filter of Quantity Devices Greater than or equal to in search box and Verify the Result', () => {
    isd.filterGreaterequalQ()
})
And('Click on filter of Quantity Devices Less than in search box and Verify the Result', () => {
    isd.filterLessthanQ()
})
And('Click on filter of Quantity Devices Less than or equal to in search box and Verify the Result', () => {
    isd.filterLessequalQ()
})
And('Click on filter of Quantity Devices Between in search box and Verify the Result', () => {
    isd.filterBetweenQ()
})
And('Click on filter of Quantity Devices Blank in search box and Verify the Result', () => {
    isd.filterBlankQ()
})
And('Click on filter of Quantity Devices Not blank in search box and Verify the Result', () => {
    isd.filterNotblankQ()
})