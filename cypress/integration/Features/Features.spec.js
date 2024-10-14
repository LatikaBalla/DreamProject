import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { FeaturesActions } from '../PageObject/PageActions/FeaturesActions'

const ft = new FeaturesActions()
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
    cy.wait(8000)
    ft.closeTermsOfServiceWindow()
})
And('Click on features page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
    ft.clickOnFeatures()
})
Then('I should be redirected to the Features page', () => {
    cy.url().should('include', '/features')
})
And('Verify the Title of Features Page', () => {
    cy.title().should('eq', 'Features')
})
Then('Verify the Under Consideration Tab should be visible', () => {
    ft.underConsiderationTabVisible()
})
And('Verify the Under Construction tab should be visible', () => {
    ft.underConstructionTabVisible()
})
Then('Verify the Launched tab should be visible', () => {
    ft.launchedTabVisible()
})
Then('Verify the Roadmap tab should be visible', () => {
    ft.roadmapVisible()
})
And('Verify the Scheduled tab should be visible', () => {
    ft.scheduledVisible()
})
And('Search for feature title for Under Consideration', () => {
    ft.enterSearch1()
})
Then('Verify the serach history for Under Consideration', () => {
    ft.verifySearchHistory1()
})
Then('Click on Scheduled tab', () => {
    ft.clickOnScheduledTab()
})
And('Search for feature title for Scheduled', () => {
    ft.enterSearch2()
})
Then('Verify the serach history for Scheduled', () => {
    ft.verifySearchHistory2()
})
Then('Click on Under Consideration tab', () => {
    ft.clickOnUnderConsiderationTab()
})
And('Search for feature title for Under Construction', () => {
    ft.enterSearch3()
})
Then('Verify the serach history for Under Construction', () => {
    ft.verifySearchHistory3()
})
Then('Click on Launched tab', () => {
    ft.clickOnLaunchedTab()
})
And('Search for feature title for Launched', () => {
    ft.enterSearch4()
})
Then('Verify the serach history for Launched', () => {
    ft.verifySearchHistory4()
})
