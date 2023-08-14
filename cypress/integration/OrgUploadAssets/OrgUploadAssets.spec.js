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
