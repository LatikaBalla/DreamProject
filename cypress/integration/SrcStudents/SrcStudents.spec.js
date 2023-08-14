import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcStudentsActions } from '../PageObject/PageActions/SrcStudentsActions'

const acc = new SrcStudentsActions()
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
Then('Click on SrcStudents tab', () => {
    acc.clickOnSrcStudentsTab()
})
And('Verify the Title of SrcStudents Page', () => {
    acc.verifyTitle()
})
Then('Filters of SrcStudents should be visible', () => {
    acc.filtersVisible()
})
And('Table for SrcStudents should be visible', () => {
    acc.tableVisible()
})
