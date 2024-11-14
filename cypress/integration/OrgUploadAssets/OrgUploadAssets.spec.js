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
And('Click on Add field button', () => {
    oua.clickOnAddField()
})
Then('Enter fieldkey and fieldValue', () => {
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
Then('Click on Bulk Upload button', () => {
    oua.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button', () => {
    oua.attachCsvfile()
})
Then('Verify the Uploaded successfully', () => {
    oua.verifyuploaded()
})
And('Click on help icon for Filtering Guide', () => {
    oua.clickOnHelpIcon()
})
Then('Verify the Dream Data Filtering Guide', () => {
    oua.verifyfilteringGuide()
})
And ('Click on Save Table view icon and Verify',()=>{
    oua.clickOnSaveTableIcon()
    oua.verifySaveMessage()
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
And('Click on Sort Ascending and Descending for Description and Verify the Result', () => {
    oua.sortingDescription()
})
And('Click on Sort Ascending and Descending for Acquire Date and Verify the Result', () => {
    oua.sortingAcquireDate()
})
And('Click on Sort Ascending and Descending for Location and Verify the Result', () => {
    oua.sortingLocation()
})
And('Click on Sort Ascending and Descending for Serial Number and Verify the Result', () => {
    oua.sortingSerialNumber()
})
And('Click on Sort Ascending and Descending for Model and Verify the Result', () => {
    oua.sortingModel()
})
And('Click on Sort Ascending and Descending for Assignment and Verify the Result', () => {
    oua.sortingAssignment()
})
And('Click on Sort Ascending and Descending for Warranty Info and Verify the Result', () => {
    oua.sortingWarrantyInfo()
})
And('Click on Sort Ascending and Descending for Fund Source and Verify the Result', () => {
    oua.sortingFundSource()
})
And('Click on Sort Ascending and Descending for PO and Verify the Result', () => {
    oua.sortingPO()
})
And('Click on Sort Ascending and Descending for Invoice and Verify the Result', () => {
    oua.sortingInvoice()
})
And ('Click on Sort Ascending and Descending for Vendor and Verify the Result',()=>{
    oua.sortingVendor()
})
And('Click on Sort Ascending and Descending for Cost and Verify the Result', () => {
    oua.sortingCost()
})
And('Click on Sort Ascending and Descending for Quantity and Verify the Result', () => {
    oua.sortingQuantity()
})
And('Click on Sort Ascending and Descending for F1 and Verify the Result', () => {
    oua.sortingF1()
})
And('Click on Sort Ascending and Descending for F2 and Verify the Result', () => {
    oua.sortingF2()
})
And('Click on Sort Ascending and Descending for F1F1 and Verify the Result', () => {
    oua.sortingF1F1()
})
And('Click on Sort Ascending and Descending for F2f2 and Verify the Result', () => {
    oua.sortingF2F2()
})
