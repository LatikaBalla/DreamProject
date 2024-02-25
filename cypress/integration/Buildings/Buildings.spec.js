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
Then('Click on Clear filter', () => {
    build.clickOnClearFiltersButton()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterRecordId()
})
And('Click More filter select- Building Name in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterBuildingName()
})
And('Click More filter select- Default Building in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterDefaultBuilding()
})
And('Click More filter select- Phone in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterPhone()
})
And('Click More filter select- Building Shipping Address in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterShippingAddress()
})
And('Click More filter select- Building Billing Address in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterBillingAddress()
})
And('Enter the Search - Building Name in search box and Verify the Result', () => {
    build.searchBuildingName()
})
Then('Enter the Search - Building Shipping Address in search box and Verify the Result', () => {
    build.searchShippingAddress()
})
And('Enter the Search - Phone in search box and Verify the Result', () => {
    build.searchPhone()
})
And('Click on Export To CSV', () => {
    build.clickOnExport()
})
    Then ('Click on Bulk Upload button',()=>{
    build.clickOnBulkUpload()
    })
    And ('Click on Attach CSV file and Click on submit button',()=>{
    build.attachCsvfile()
    })
    Then ('Verify the Uploaded successfully',()=>{
    build.verifyuploaded()
    })