import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { RepairBoxesActions } from '../PageObject/PageActions/RepairBoxesActions'

const rb = new RepairBoxesActions()
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
    rb.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    rb.clickOnRepair360()
})
And('Click on RepairBoxes Tab', () => {
    rb.clickOnRepairBoxesTab()
})
And('Verify the Title of RepairBoxes Page', () => {
    rb.verifyTitle()
})
Then('Filters of RepairBoxes should be visible', () => {
    rb.filtersVisible()
})
And('Table for RepairBoxes should be visible', () => {
    rb.tableVisible()
})
Then('I should click on create new Box', () => {
    rb.clickOnAddnewBox()
})
Then('Enter weight, height, depth and width', () => {
    rb.enterWeight()
    rb.enterHeight()
    rb.enterDepth()
    rb.enterwidth()
})
And('Select Pick-up site', () => {
    rb.selectPickupSite()
})
Then('Check the need shipping box', () => {
    rb.checkNeedShippingBox()
})
And('Click on Create box button', () => {
    rb.clickOnCreateBoxButton()
})
Then('Select Ticket from dropdownlist', () => {
    rb.selectTickets()
})
And('Click on Finish button', () => {
    rb.clickOnFinishButton()
})
Then('Verify new box is added in table', () => {
    rb.verifyNewBoxAdd()
})
And('Click on new box row', () => {
    rb.clickOnTableRow()
})
Then('Verify the Details new box', () => {
    rb.verifyBoxDetails()
})
