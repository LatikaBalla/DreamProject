import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { DashboardActions } from '../PageObject/PageActions/DashboardActions'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'

const build = new BuildingsActions()
const acc = new AccountDetailsActions()
const dash = new DashboardActions()
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
    dash.closeTermsOfServiceWindow()
})
Then('I should be redirected to the dashboard page', () => {
    cy.url().should('include', '/')
})
And('Verify the Title of dashborad Page', () => {
    cy.title().should('eq', 'Account Dashboard')
})
Then('Verify the logo should be visible', () => {
    dash.verifyLogoVisible()
})
Then('My Account Detail tab should be visible', () => {
    dash.myAccountDetailsTabVisible()
})
And('Verify the Title of Account Details Page', () => {
    acc.verifyTitleAccountDetails()
})
Then('Filters of account deatils should be visible', () => {
    acc.verifyFiltersVisible()
})
And('Table for account deatils should be visible', () => {
    acc.tableAccountVisible()
})
And('Building tab should be visible', () => {
    dash.buildingTabVisible()
})
And('Click on Buildings Tab', () => {
    build.clickOnBuildingTab()
})
And('Verify the Title of Buildings Page', () => {
    build.verifyTitleBuildingPage()

})
Then('Filters of Buildings should be visible', () => {
    build.addNewButtonTabVisible()
    build.addfilterButtonVisible()
    build.searchBoxVisible()
    build.refreshButtonVisible()
})
And('Table for Buildings should be visible', () => {
    build.tableofBuildingsVisible()
})
Then('Slider Menu should be visible', () => {
    dash.sliderMenuvisible()
})