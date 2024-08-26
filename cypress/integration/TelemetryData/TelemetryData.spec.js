import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { TelemetryDataActions } from '../PageObject/PageActions/TelemetryDataActions'

const td = new TelemetryDataActions()
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
    td.closeTermsOfServiceWindow()
})
And('Click on TelemetryData page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
    td.clickOnTelemetryData()
})
Then('I should be redirected to the TelemetryData page', () => {
    cy.url().should('include', '/report-center')
})
And('Select Battery Charge Capacity', () => {
    td.selectBatteryCharge()
})
Then('Verify the Battery Charge Capacity device and Graph', () => {
    td.verifyBatteryChargeData()
})
And('Select OS Last Update', () => {
    td.selectOSLastUpdate()
})
Then('Verify the OS Last Update device and Graph', () => {
    td.verifyOSLastUpdateData()
})
And('Select OS New Platform Version', () => {
    td.selectOSNewPlatform()
})
Then('Verify the OS New Platform Version device and Graph', () => {
    td.verifyOSNewPlatformData()
})



