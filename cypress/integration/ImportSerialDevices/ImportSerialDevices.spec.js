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
And('Click on the download import button', () => {
    isd.clickOnDownloadImport()
})
Then('Verfiy the downloaded successfully', () => {
    isd.verifyDownloaded()
})
And('Click on Details button', () => {
    isd.clickOnDetailsButton()
})
Then('Verify the Device Details', () => {
    isd.verifyDeviceDetails()
})
And('Click on help icon for Filtering Guide', () => {
    isd.clickOnHelpIcon()
})
Then('Verify the Dream Data Filtering Guide', () => {
    isd.verifyfilteringGuide()
})
//date
And('Click on filter of Date Imported Equals and Verify the Result', () => {
    isd.filterEqualsDate()
})
And('Click on filter of Date Imported Does not equal and Verify the Result', () => {
    isd.filterNotequalDate()
})
And('Click on filter of Date Imported Before and Verify the Result', () => {
    isd.filterBeforeDate()
})
And('Click on filter of Date Imported Between with and Verify the Result', () => {
    isd.filterBetweenDate()
})
And('Click on filter of Date Imported After and Verify the Result', () => {
    isd.filterAfterDate()
})
And('Click on filter of Date Imported Blank and Verify the Result', () => {
    isd.filterBlankDate()
})
And('Click on filter of Date Imported Not blank and Verify the Result', () => {
    isd.filterNotblankDate()
})
//Importer
And('Click on filter of Importer contain and Verify the Result', () => {
    isd.filtercontainI()
})
And('Click on filter of Importer Does not contain and Verify the Result', () => {
    isd.filterDoesnotcontainI()
})
And('Click on filter of Importer Equals and Verify the Result', () => {
    isd.filterEqualsI()
})
And('Click on filter of Importer Does not equal and Verify the Result', () => {
    isd.filterNotequalI()
})
And('Click on filter of Importer Begins with and Verify the Result', () => {
    isd.filterBeginswithI()
})
And('Click on filter of Importer Ends with and Verify the Result', () => {
    isd.filterEndswithI()
})
And('Click on filter of Importer Blank and Verify the Result', () => {
    isd.filterBlankI()
})
And('Click on filter of Importer Not blank and Verify the Result', () => {
    isd.filterNotblankI()
})
//Quantity
And('Click on filter of Quantity Devices Equals and Verify the Result', () => {
    isd.filtercontainQ()
})
And('Click on filter of Quantity Devices Does not equal and Verify the Result', () => {
    isd.filterDoesnotequalQ()
})
And('Click on filter of Quantity Devices Greater than and Verify the Result', () => {
    isd.filterGreaterthanQ()
})
And('Click on filter of Quantity Devices Greater than or equal to and Verify the Result', () => {
    isd.filterGreaterequalQ()
})
And('Click on filter of Quantity Devices Less than and Verify the Result', () => {
    isd.filterLessthanQ()
})
And('Click on filter of Quantity Devices Less than or equal to and Verify the Result', () => {
    isd.filterLessequalQ()
})
And('Click on filter of Quantity Devices Between and Verify the Result', () => {
    isd.filterBetweenQ()
})
And('Click on filter of Quantity Devices Blank and Verify the Result', () => {
    isd.filterBlankQ()
})
And('Click on filter of Quantity Devices Not blank and Verify the Result', () => {
    isd.filterNotblankQ()
})
And('Click on Sort Ascending and Descending for Date Imported and Verify the Result', () => {
    isd.sortingDateImported()
})
And('Click on Sort Ascending and Descending for Importer and Verify the Result', () => {
    isd.sortingImporter()
})
And('Click on Sort Ascending and Descending for Quantity Devices and Verify the Result', () => {
    isd.sortingQuantityDevices()
})