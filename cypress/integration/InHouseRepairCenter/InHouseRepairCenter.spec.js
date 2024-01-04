import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseRepairCenterActions } from '../PageObject/PageActions/InHouseRepairCenterActions.js'

const repc = new InHouseRepairCenterActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    repc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Repair360 page', () => {
    repc.clickOnRepair360()
})
Then('Click on InHouseRepairCenter tab', () => {
    repc.clickOnInHouseRepairCenter()
})
And('Verify the Title of InHouseRepairCenter Page', () => {
    repc.verifyTitleInHouseRepairCenter()
})
Then('Verify the inhouseworkflow Tab should be visible', () => {
    repc.inhouseworkflowTabVisible()
})
And('Verify the inhouseTickets tab should be visible', () => {
    repc.inhouseTicketsTabVisible()
})

