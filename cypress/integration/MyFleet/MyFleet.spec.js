import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MyFleetActions } from '../PageObject/PageActions/MyFleetActions'

const mf = new MyFleetActions()
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
    mf.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Manage Devices', () => {
    mf.clickOnManageDevices()
})
And('Click on MyFleet Tab', () => {
    mf.clickOnMyFleet()
})
And('Verify the Title of MyFleet Page', () => {
    mf.verifyTitle()
})
Then('Filters of MyFleet should be visible', () => {
    mf.filtersVisible()
})
And('Table for MyFleet should be visible', () => {
    mf.tableVisible()
})
Then('Click on the add device', () => {
    mf.clickOnAddDevice()
})
And('Enter Serial no and select device id', () => {
    mf.enterSerialNo()
    mf.selectDeviceId()
})
Then('Enter Asset Tag and Select student id', () => {
    mf.enterAssetTag()
    mf.selectStudentid()
})
And('Select lonar status and Device status', () => {
    mf.selectLonarStatus()
    mf.selectDeviceStatus()
})
Then('Click on the Submit Button', () => {
    mf.clickOnsubmitButton()
})
And('Verify the device added successfully', () => {
    mf.verfifyDeviceAdded()
})
Then('Click on Edit button of General info', () => {
    mf.clickOnEditButtonGeneral()
})
And('Update Asset tag and Click on save button', () => {
    mf.editGeneral()
    mf.clickOnUpdateButton()
})
Then('Verfiy General info Record updated successfully', () => {
    mf.verifyGeneralUdate()
})
Then('Click on Edit button of Assignment', () => {
    mf.clickOnEditButtonAssign()
})
And('Update student, building, loner status and Click on save button', () => {
    mf.editAssignment()
    mf.clickOnUpdateButton()
})
Then('Verfiy Assignment Record updated successfully', () => {
    mf.verifyAssignmnetUdate()
})
Then('Click on Clear filter', () => {
    mf.clickOnClearFiltersButton()
})
And('Enter the table fields in search box', () => {
    mf.enterSearchValue()
})
And('Verify the record in searching history', () => {
    mf.verifySearchResult()
})
And('Enter the table fields in search box1', () => {
    mf.enterSearchValue1()
})
And('Verify the record in searching history1', () => {
    mf.verifySearchResult1()
})
Then('Click on deviceIcon and click on view Button', () => {
    mf.clickOnDeviceIcon()
    mf.clickOnViewButton()
})
And('Verify the General Device Information', () => {
    mf.verifyViewResult()
})
And('Verify the Warranty Description1', () => {
    mf.verifyViewResult1()
})
Then('Click on Export To CSV', () => {
    mf.clickOnCExportToCSVButton()
})
And('Verify Downloaded successfully', () => {
    mf.verifyDownloadSuccessful()
})
And('Click More filter select- Serial Number in search box and Verify the Result', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterSerialNumber()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterAssetTag()
})
And('Click More filter select- Device in search box and Verify the Result', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterDevice()
})
And('Click More filter select- Student in search box and Verify the Result', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterStudent()
})
And('Click More filter select- Organization unit in search box and Verify the Result', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterOrganization()
})
Then('Click on Retired Tab', () => {
    mf.clickOnRetiredTab()
})
Then('Click on CPU Status and verify CPU Information', () => {
    mf.clickOnCPUStatus()
    mf.verifyCPUStatus()
})
And('Click on Memory Information and verify Memory Information', () => {
    mf.clickOnMemory()
    mf.verifyMemory()
})
Then('Click on Network Information and verify Network Information', () => {
    mf.clickOnNetwork()
    mf.verifyNetwork()
})
And('Click on OS Information and verify OS Information', () => {
    mf.clickOnOS()
    mf.verifyOS()
})
Then('Click on Battery Information and verify Battery Information', () => {
    mf.clickOnBattery()
    mf.verifyBattery()
})
And('Click on Storage Information and verify Storage Information', () => {
    mf.clickOnStorage()
    mf.verifyStorage()
})
Then('Click on Boot Performance Report and Boot Performance Report', () => {
    mf.clickOnBootPerformanceReport()
    mf.verifyBootPerformanceReport()
})
And ('Click on Recent Users Information and verify Recent Users Information',()=>{
    mf.clickOnRecentUser()
    mf.verifyRecentUser()
})


And('Convert Active to Retired device', () => {
    mf.converRetired()
})
Then('Verify the Device Retired successfully', () => {
    mf.verifyRetired()
})
Then('Verify the Device Active successfully', () => {
    mf.verifyActive()
})
And('Convert Retired to Active device', () => {
    mf.convertActive()
})
And('Enter the table fields in search box for google data record', () => {
    mf.enterSearchGdata()
})
Then('Verify the record in searching history for google data', () => {
    mf.verifyGoogleRecord()
})
And('Click on the Google Icon and click on view Button', () => {
    mf.clickonGoogleIcon()
    mf.clickOnViewButton()
})
Then('Verify the google data and GoLocation section', () => {
    mf.verifyGoogleGolocation()
})
And('Click on the edit of google data section', () => {
    mf.clickonEditGoogle()
})
Then('Update the note', () => {
    mf.updateGoogleData()
})
And('Verfiy Google data Record updated successfully', () => {
    mf.verifyGoogleUpdated()
})
