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
Then ('Click on the add device',()=>{
mf.clickOnAddDevice()
})
And ('Enter Serial no and select device id',()=>{
mf.enterSerialNo()
mf.selectDeviceId()
})
Then ('Enter Asset Tag and Select student id',()=>{
mf.enterAssetTag()
mf.selectStudentid()
})
And ('Select lonar status and Device status',()=>{
mf.selectLonarStatus()
mf.selectDeviceStatus()
})
Then ('Click on the Submit Button',()=>{
mf.clickOnsubmitButton()
})
And ('Verify the device added successfully',()=>{
mf.verfifyDeviceAdded()
})

Then('Click on More filters', () => {
    cy.wait(3000)
    mf.clickOnMoreFiltersButton()
})
Then('Select Field name and Field operation', () => {
    mf.selectFieldName()
    mf.selectfieldOperation()
})
And('Enter the Search value in search box', () => {
    mf.enterFieldValueSearchBox()
})
Then('Click on Apply Button', () => {
    mf.clickOnApplyButton()
})
And('Verify the Results in the table', () => {
    mf.verifyResultAfterFilter()
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
Then('Click on view Button', () => {
    mf.clickOnViewButton()
})
And('Verify the Warranty Description', () => {
    mf.verifyViewResult()
})
Then('Click on Export To CSV', () => {
    mf.clickOnCExportToCSVButton()
})
And('Verify Downloaded successfully', () => {
    mf.verifyDownloadSuccessful()
})
