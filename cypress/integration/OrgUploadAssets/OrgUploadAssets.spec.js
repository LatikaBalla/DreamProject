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
    oua.enterLocation()
    oua.enterTag()
})
And('Enter note, Type and description', () => {
    oua.enterNote()
    oua.enterType()
})
Then('Upload the image file', () => {
    oua.selectFileForUpload()
    oua.enterDescription()
})
And('Click on save button', () => {
    oua.clickOnASaveButton()
})
Then('Verify the asset details added in table', () => {
    oua.verifyRecordTable()
})
And('Verify the record in searching history', () => {
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
    oua.clickSaveForUpdate()
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
Then('Click on Clear filter', () => {
    oua.clickOnClearFilter()
})
//description
And('Click on filter of Description contain in search box and Verify the Result', () => {
     oua.filtercontainD()
})
And('Click on filter of Description Does not contain in search box and Verify the Result', () => {
     oua.filterDoesnotcontainD()
})
And('Click on filter of Description Equals in search box and Verify the Result', () => {
     oua.filterEqualsD()
})
And('Click on filter of Description Does not equal in search box and Verify the Result', () => {
     oua.filterNotequalD()
})
And('Click on filter of Description Begins with in search box and Verify the Result', () => {
     oua.filterBeginswithD()
})
And('Click on filter of Description Ends with in search box and Verify the Result', () => {
     oua.filterEndswithD()
})
And('Click on filter of Description Blank in search box and Verify the Result', () => {
     oua.filterBlankD()
})
And('Click on filter of Description Not blank in search box and Verify the Result', () => {
     oua.filterNotblankD()
})
//date 
And('Click on filter of Acquire Date Equals in search box and Verify the Result', () => {
    oua.filterEqualsDate()
})
And('Click on filter of Acquire Date Does not equal in search box and Verify the Result', () => {
    oua.filterNotequalDate()
})
And('Click on filter of Acquire Date Before in search box and Verify the Result', () => {
    oua.filterBeforeDate()
})
And('Click on filter of Acquire Date After in search box and Verify the Result', () => {
    oua.filterAfterDate()
})
And ('Click on filter of Acquire Date Between with in search box and Verify the Result',()=>{
    oua.filterBetweenDate()
})
And('Click on filter of Acquire Date Blank in search box and Verify the Result', () => {
    oua.filterBlankDate()
})
And('Click on filter of Acquire Date Not blank in search box and Verify the Result', () => {
    oua.filterNotblankDate()
})
//location
And('Click on filter of Location contain in search box and Verify the Result', () => {
     oua.filtercontainL()
})
And('Click on filter of Location Does not contain in search box and Verify the Result', () => {
     oua.filterDoesnotcontainL()
})
And('Click on filter of Location Equals in search box and Verify the Result', () => {
     oua.filterEqualsL()
})
And('Click on filter of Location Does not equal in search box and Verify the Result', () => {
     oua.filterNotequalL()
})
And('Click on filter of Location Begins with in search box and Verify the Result', () => {
     oua.filterBeginswithL()
})
And('Click on filter of Location Ends with in search box and Verify the Result', () => {
     oua.filterEndswithL()
})
And('Click on filter of Location Blank in search box and Verify the Result', () => {
     oua.filterBlankL()
})
And('Click on filter of Location Not blank in search box and Verify the Result', () => {
     oua.filterNotblankL()
})