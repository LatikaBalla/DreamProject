import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcFacilitatorsActions } from '../PageObject/PageActions/SrcFacilitatorsActions'

const acc = new SrcFacilitatorsActions()
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
    acc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    acc.clickOnRepair360()
})
And('Click on StudentRepairCenter tab', () => {
    acc.clickOnStudentRepairCenterTab()
})
Then('Click on SrcFacilitators tab', () => {
    acc.clickOnSrcFacilitatorsTab()
})
And('Verify the Title of SrcFacilitators Page', () => {
    acc.verifyTitle()
})
Then('Filters of SrcFacilitators should be visible', () => {
    acc.filtersVisible()
})
And('Table for SrcFacilitators should be visible', () => {
    acc.tableVisible()
})
