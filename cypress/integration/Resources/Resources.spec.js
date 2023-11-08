import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ResourcesActions } from '../PageObject/PageActions/ResourcesActions.js'
import { HowToVideosActions } from '../PageObject/PageActions/HowToVideosActions.js'
import { WarrantyInfoActions } from '../PageObject/PageActions/WarrantyInfoActions.js'
import { InstructionsActions } from '../PageObject/PageActions/InstructionsActions.js'

const inst = new InstructionsActions()
const war = new WarrantyInfoActions()
const hto = new HowToVideosActions()
const res = new ResourcesActions()
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
    res.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Resources page', () => {
    res.clickOnResources()
})
Then('I should be redirected to the Resources page', () => {
    cy.url().should('include', '/resources')
})
And('Verify the Title of Resources Page', () => {
    res.verifyTitleResources()
})
Then('Verify the Instructions Tab should be visible', () => {
    res.instructionsTabVisible()
})
Then('Click on Instructions tab', () => {
    inst.clickOnInstructions()
})
Then('Verify the provisionDevice Tab should be visible', () => {
    inst.provisionDeviceTabVisible()
})
And('Verify the deprovisionDevice tab should be visible', () => {
    inst.deprovisionDeviceTabVisible()
})
And('Verify the HowToVideos tab should be visible', () => {
    res.howToVideosTabVisible()
})
Then('Click on HowToVideos tab', () => {
    hto.clickOnHowToVideos()
})
Then('Verify the Videos Section should be visible', () => {
    hto.videosVisible()
})
Then('Verify the WarrantyInfo tab should be visible', () => {
    res.warrantyInfoTabVisible()
})
Then('Click on WarrantyInfo tab', () => {
    war.clickOnInWarrantyInfo()
})
And('Verify the Title of WarrantyInfo Page', () => {
    war.verifyTitleWarrantyInfo()
})
