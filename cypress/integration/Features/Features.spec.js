import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { FeaturesActions } from '../PageObject/PageActions/FeaturesActions'

const ft = new FeaturesActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/", {failOnStatusCode: false});
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    ft.closeTermsOfServiceWindow()
})
And ('Click on features page',()=>{
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({force:true})
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
And('Verify the Launched tab should be visible', () => {
    ft.launchedTabVisible()
})




