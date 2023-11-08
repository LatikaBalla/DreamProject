import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { OrgUploadAssetsActions } from '../PageObject/PageActions/OrgUploadAssetsActions'

const oua = new OrgUploadAssetsActions()
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
    oua.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Manage Devices', () => {
    oua.clickOnManageDevices()
})
And('Click on OrgUploadAssets Tab', () => {
    oua.clickOnOrgUploadAssets()
})
And('Verify the Title of OrgUploadAssets Page', () => {
    oua.verifyTitle()
})
Then('Filters of OrgUploadAssets should be visible', () => {
    oua.filtersVisible()
})
And('Table for OrgUploadAssets should be visible', () => {
    oua.tableVisible()
})
Then('I should click on Add Asset', () => {
    oua.clickOnAddAssetbutton()
})
Then('Enter title, full name location and tag', () => {
    // oua.enterTitle()
    // oua.enterFullname()
    oua.enterLocation()
    oua.enterTag()
})
And('Enter note, Type and description', () => {
    oua.enterNote()
    oua.enterType()
    oua.enterDescription()
})
Then('Upload the image file', () => {
    oua.selectFileForUpload()
})
And('Click on save button', () => {
    oua.clickOnASaveButton()
})
Then('Verify the asset details added in table', () => {
    oua.verifyRecordTable()
})
And ('Enter the title in search box',()=>{
oua.enterSearchValue()
})
Then ('Click on Search button',()=>{
    oua.clickOnASearchButton()
})
And ('Verify the record in searching history',()=>{
oua.verifySearchResult()
})
And('Click on Edit button', () => {
    oua.clickOnEditIcon()
})
Then('I should edit title, full name location and tag', () => {
    oua.editLocation()
    oua.editTag()
})
And('I should edit note, Type and description', () => {
    oua.editNotes()
    oua.editType()
    oua.editDescription()
})
Then('ReUpload the image file', () => {
    oua.editUpload() 
})
Then('Click on save button', () => {
    oua.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage', () => {
    oua.verfifyDataUpdatedMessage()
})
And('Click on Delete button', () => {
    oua.clickDeleteIcon()
})
Then('Click on Confirm Delete button', () => {
    oua.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully', () => {
    oua.verifyRecordDeleted()
})

