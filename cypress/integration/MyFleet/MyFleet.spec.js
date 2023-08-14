import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MyFleetActions } from '../PageObject/PageActions/MyFleetActions'

const acc = new MyFleetActions()
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
Then('Click on Manage Devices', () => {
    acc.clickOnManageDevices()
})
And('Click on MyFleet Tab', () => {
    acc.clickOnMyFleet()
})
And('Verify the Title of MyFleet Page', () => {
    acc.verifyTitle()
})
Then('Filters of MyFleet should be visible', () => {
    acc.filtersVisible()
})
And('Table for MyFleet should be visible', () => {
    acc.tableVisible()
})
