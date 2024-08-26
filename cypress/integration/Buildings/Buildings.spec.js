import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'

const build = new BuildingsActions()
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
    build.closeTermsOfServiceWindow()
})
And('Click on Buildings Tab', () => {
    build.clickOnBuildingTab()
})
And('Click on Export To CSV', () => {
    build.clickOnExport()
})
Then('Click on Bulk Upload button', () => {
    build.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button', () => {
    build.attachCsvfile()
})
Then('Verify the Uploaded successfully', () => {
    build.verifyuploaded()
})
//bn
And('Click on filter of Building Name contain and Verify the Result', () => {
    build.filtercontainBN()
})
And('Click on filter of Building Name Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainBN()
})
And('Click on filter of Building Name Equals and Verify the Result', () => {
    build.filterEqualsBN()
})
And('Click on filter of Building Name Does not equal and Verify the Result', () => {
    build.filterNotequalBN()
})
And('Click on filter of Building Name Begins with and Verify the Result', () => {
    build.filterBeginswithBN()
})
And('Click on filter of Building Name Ends with and Verify the Result', () => {
    build.filterEndswithBN()
})
And('Click on filter of Building Name Blank and Verify the Result', () => {
    build.filterBlankBN()
})
And('Click on filter of Building Name Not blank and Verify the Result', () => {
    build.filterNotblankBN()
})
//SN
And('Click on filter of Building ID contain and Verify the Result', () => {
    build.filtercontainBI()
})
And('Click on filter of Building ID Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainBI()
})
And('Click on filter of Building ID Equals and Verify the Result', () => {
    build.filterEqualsBI()
})
And('Click on filter of Building ID Does not equal and Verify the Result', () => {
    build.filterNotequalBI()
})
And('Click on filter of Building ID Begins with and Verify the Result', () => {
    build.filterBeginswithBI()
})
And('Click on filter of Building ID Ends with and Verify the Result', () => {
    build.filterEndswithBI()
})
And('Click on filter of Building ID Blank and Verify the Result', () => {
    build.filterBlankBI()
})
And('Click on filter of Building ID Not blank and Verify the Result', () => {
    build.filterNotblankBI()
})
//RT
And('Click on filter of Building Shipping Address contain and Verify the Result', () => {
    build.filtercontainBSA()
})
And('Click on filter of Building Shipping Address Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainBSA()
})
And('Click on filter of Building Shipping Address Equals and Verify the Result', () => {
    build.filterEqualsBSA()
})
And('Click on filter of Building Shipping Address Does not equal and Verify the Result', () => {
    build.filterNotequalBSA()
})
And('Click on filter of Building Shipping Address Begins with and Verify the Result', () => {
    build.filterBeginswithBSA()
})
And('Click on filter of Building Shipping Address Ends with and Verify the Result', () => {
    build.filterEndswithBSA()
})
And('Click on filter of Building Shipping Address Blank and Verify the Result', () => {
    build.filterBlankBSA()
})
And('Click on filter of Building Shipping Address Not blank and Verify the Result', () => {
    build.filterNotblankBSA()
})
//B
And('Click on filter of Building Billing Address contain and Verify the Result', () => {
    build.filtercontainBBA()
})
And('Click on filter of Building Billing Address Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainBBA()
})
And('Click on filter of Building Billing Address Equals and Verify the Result', () => {
    build.filterEqualsBBA()
})
And('Click on filter of Building Billing Address Does not equal and Verify the Result', () => {
    build.filterNotequalBBA()
})
And('Click on filter of Building Billing Address Begins with and Verify the Result', () => {
    build.filterBeginswithBBA()
})
And('Click on filter of Building Billing Address Ends with and Verify the Result', () => {
    build.filterEndswithBBA()
})
And('Click on filter of Building Billing Address Blank and Verify the Result', () => {
    build.filterBlankBBA()
})
And('Click on filter of Building Billing Address Not blank and Verify the Result', () => {
    build.filterNotblankBBA()
})
//BA
And('Click on filter of Building Abbreviation contain and Verify the Result', () => {
    build.filtercontainBA()
})
And('Click on filter of Building Abbreviation Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainBA()
})
And('Click on filter of Building Abbreviation Equals and Verify the Result', () => {
    build.filterEqualsBA()
})
And('Click on filter of Building Abbreviation Does not equal and Verify the Result', () => {
    build.filterNotequalBA()
})
And('Click on filter of Building Abbreviation Begins with and Verify the Result', () => {
    build.filterBeginswithBA()
})
And('Click on filter of Building Abbreviation Ends with and Verify the Result', () => {
    build.filterEndswithBA()
})
And('Click on filter of Building Abbreviation Blank and Verify the Result', () => {
    build.filterBlankBA()
})
And('Click on filter of Building Abbreviation Not blank and Verify the Result', () => {
    build.filterNotblankBA()
})
//DB
And('Click on filter of Default Building true and Verify the Result', () => {
    build.filtertrueDB()
})
And('Click on filter of Default Building false and Verify the Result', () => {
    build.filterfalseDB()
})
//Extension
And('Click on filter of Extension contain and Verify the Result', () => {
    build.filtercontainE()
})
And('Click on filter of Extension Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainE()
})
And('Click on filter of Extension Equals and Verify the Result', () => {
    build.filterEqualsE()
})
And('Click on filter of Extension Does not equal and Verify the Result', () => {
    build.filterNotequalE()
})
And('Click on filter of Extension Begins with and Verify the Result', () => {
    build.filterBeginswithE()
})
And('Click on filter of Extension Ends with and Verify the Result', () => {
    build.filterEndswithE()
})
And('Click on filter of Extension Blank and Verify the Result', () => {
    build.filterBlankE()
})
And('Click on filter of Extension Not blank and Verify the Result', () => {
    build.filterNotblankE()
})
//Phone
And('Click on filter of Phone contain and Verify the Result', () => {
    build.filtercontainP()
})
And('Click on filter of Phone Does not contain and Verify the Result', () => {
    build.filterDoesnotcontainP()
})
And('Click on filter of Phone Equals and Verify the Result', () => {
    build.filterEqualsP()
})
And('Click on filter of Phone Does not equal and Verify the Result', () => {
    build.filterNotequalP()
})
And('Click on filter of Phone Begins with and Verify the Result', () => {
    build.filterBeginswithP()
})
And('Click on filter of Phone Ends with and Verify the Result', () => {
    build.filterEndswithP()
})
And('Click on filter of Phone Blank and Verify the Result', () => {
    build.filterBlankP()
})
And('Click on filter of Phone Not blank and Verify the Result', () => {
    build.filterNotblankP()
})