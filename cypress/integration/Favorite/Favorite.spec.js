import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { FavoriteActions } from '../PageObject/PageActions/FavoriteActions'

const fv = new FavoriteActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/", { failOnStatusCode: false });
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(9000)
    fv.closeTermsOfServiceWindow()
})
And('Click on Favorite page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
    fv.clickOnFavorite()
})
And('Verify the Title of Favorite Page', () => {
    fv.verifyTitle()
})
Then('Delete the Favorite item and verify no favorite items', () => {
    fv.clickDeleteIcon()
    fv.verifyFavoriteDeleted()
})
Then('Click on the Star button of Account Dashboard', () => {
    fv.clickOnStarAccDash()
})
Then('Click on the Star button of Report Center', () => {
    fv.clickOnStarReportCenter()
})
Then('Click on the Star button of Manage Devices', () => {
    fv.clickOnStarManageDevices()
})
Then('Click on the Star button of Repair 360', () => {
    fv.clickOnStarRepair360()
})
Then('Click on the Star button of Resources', () => {
    fv.clickOnStarResources()
})
Then('Click on the Star button of Repair Ticket Details', () => {
    fv.clickOnStarRepairTicketDetails()
})
Then('Click on the Star button of Dream Support', () => {
    fv.clickOnStarSupport()
})
Then('Click on the Star button of Features', () => {
    fv.clickonStarFeatures()
})


