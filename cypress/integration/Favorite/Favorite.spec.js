import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { FavoriteActions } from '../PageObject/PageActions/FavoriteActions'

const ft = new FavoriteActions()
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
    ft.closeTermsOfServiceWindow()
})
And('Click on Favorite page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
    ft.clickOnFavorite()
})
And('Verify the Title of Favorite Page', () => {
    ft.verifyTitle()
})
Then('Delete the Favorite item and verify no favorite items', () => {
    ft.clickDeleteIcon()
    ft.verifyFavoriteDeleted()
})
Then('Click on the Star button of Account Dashboard', () => {
    ft.clickOnStarAccDash()
})
Then('Click on the Star button of Report Center', () => {
    ft.clickOnStarReportCenter()
})
Then('Click on the Star button of Manage Devices', () => {
    ft.clickOnStarManageDevices()
})
Then('Click on the Star button of Repair 360', () => {
    ft.clickOnStarRepair360()
})
Then('Click on the Star button of Resources', () => {
    ft.clickOnStarResources()
})
Then('Click on the Star button of Repair Ticket Details', () => {
    ft.clickOnStarRepairTicketDetails()
})
Then('Click on the Star button of Dream Support', () => {
    ft.clickOnStarSupport()
})
Then('Click on the Star button of Features', () => {
    ft.clickonStarFeatures()
})


