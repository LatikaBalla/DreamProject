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
Then('Enter location, tag, notes, category, serialno and model', () => {
    oua.enterLocation()
    oua.enterTag()
    oua.enterNote()
    oua.enterType()
    oua.enterSerialNo()
    oua.enterModel()
})
And('Enter assignment, po, invoice, vendor and description', () => {
    oua.enterAssignment()
    oua.enterPO()
    oua.enterinvoice()
    oua.enterVendor()
    oua.enterWarrantyinfo()
    oua.enterDescription()
})
Then('Enter cost and quantity', () => {
    oua.enterCost()
    oua.enterQuantity()
})
Then('Upload the image file', () => {
    oua.selectFileForUpload()
})
And('Enter fieldValue1 and fieldValue2', () => {
    oua.enterFieldValue1and2()
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
Then('I should edit location, tag, notes, category, serialno and model', () => {
    oua.editLocation()
    oua.editTag()
    oua.editNotes()
    oua.editType()
    oua.editSerialno()
    oua.editModel()
})
And('I should edit assignment, po, invoice, vendor and description', () => {
    oua.editAssignment()
    oua.editPO()
    oua.editInvoice()
    oua.editVendor()
    oua.editDescription()
})
Then('I should edit cost and quantity', () => {
    oua.editCost()
    oua.editQuantity()
})
Then('ReUpload the image file', () => {
    oua.editUpload()
})
And('I should edit fieldValue1 and fieldValue2', () => {
    oua.editfieldValue1()
    oua.editfieldValue2()
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
And('Click on filter of Description contain and Verify the Result', () => {
    oua.filtercontainD()
})
And('Click on filter of Description Does not contain and Verify the Result', () => {
    oua.filterDoesnotcontainD()
})
And('Click on filter of Description Equals and Verify the Result', () => {
    oua.filterEqualsD()
})
And('Click on filter of Description Does not equal and Verify the Result', () => {
    oua.filterNotequalD()
})
And('Click on filter of Description Begins with and Verify the Result', () => {
    oua.filterBeginswithD()
})
And('Click on filter of Description Ends with and Verify the Result', () => {
    oua.filterEndswithD()
})
And('Click on filter of Description Blank and Verify the Result', () => {
    oua.filterBlankD()
})
And('Click on filter of Description Not blank and Verify the Result', () => {
    oua.filterNotblankD()
})
//date 
And('Click on filter of Acquire Date Equals and Verify the Result', () => {
    oua.filterEqualsDate()
})
And('Click on filter of Acquire Date Does not equal and Verify the Result', () => {
    oua.filterNotequalDate()
})
And('Click on filter of Acquire Date Before and Verify the Result', () => {
    oua.filterBeforeDate()
})
And('Click on filter of Acquire Date After and Verify the Result', () => {
    oua.filterAfterDate()
})
And('Click on filter of Acquire Date Between with and Verify the Result', () => {
    oua.filterBetweenDate()
})
And('Click on filter of Acquire Date Blank and Verify the Result', () => {
    oua.filterBlankDate()
})
And('Click on filter of Acquire Date Not blank and Verify the Result', () => {
    oua.filterNotblankDate()
})
//location
And('Click on filter of Location contain and Verify the Result', () => {
    oua.filtercontainL()
})
And('Click on filter of Location Does not contain and Verify the Result', () => {
    oua.filterDoesnotcontainL()
})
And('Click on filter of Location Equals and Verify the Result', () => {
    oua.filterEqualsL()
})
And('Click on filter of Location Does not equal and Verify the Result', () => {
    oua.filterNotequalL()
})
And('Click on filter of Location Begins with and Verify the Result', () => {
    oua.filterBeginswithL()
})
And('Click on filter of Location Ends with and Verify the Result', () => {
    oua.filterEndswithL()
})
And('Click on filter of Location Blank and Verify the Result', () => {
    oua.filterBlankL()
})
And('Click on filter of Location Not blank and Verify the Result', () => {
    oua.filterNotblankL()
})