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
And('Click More filter select- Title in search box and Verify the Result', () => {
    ft.clickOnMoreFilter()
    ft.selectFilterTitle()
})
And('Click More filter select- Description in search box and Verify the Result', () => {
    ft.clickOnMoreFilter()
    ft.selectFilterDescription()
})
And('Click More filter select- Creator in search box and Verify the Result', () => {
    ft.clickOnMoreFilter()
    ft.selectFilterCreator()
})
Then('Click on Clear filter', () => {
    ft.clickOnClearFilter()
})

Then ('Verify the Roadmap tab should be visible', () => {
ft.roadmapVisible()
})
And ('Verify the Scheduled tab should be visible', () => {
ft.scheduledVisible()
})

