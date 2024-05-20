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
Then('Click on Edit button', () => {
    mf.clickOnEditButton()
})
And('Update Asset tag, student info and building information and Click on update button', () => {
    mf.editInformation()
    mf.clickOnUpdateButton()
})
Then('Verfiy Record updated successfully', () => {
    mf.verifyUdated()
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
Then('Click on view Button', () => {
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
    mf.verifBootPerformanceReport()
})