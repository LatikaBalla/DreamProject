import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LandingActions } from '../PageObject/PageActions/LandingActions'

const lan = new LandingActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('Verify the Title of Landing Page', () => {
    lan.verifyTitle()
})
Then('The Logo should be visible at top left cornar', () => {
    lan.logoVisible()
})
And('Header section should be visible', () => {
    lan.headerVisible()
})
Then('Footer section should be visible', () => {
    lan.footerVisible()
})
And('Click on FAQ Tab', () => {
    lan.clickOnFAQTab()
})
Then('Redirect to the FQA section and should be visible', () => {
    lan.verifyFAQSection()
})
And('Click on the feature tab', () => {
    lan.clickOnFeatureTab()
})
Then('Redirect to feature section and should be visible', () => {
    lan.verifyFeatureSection()
})
And('Click on the product tab', () => {
    lan.clickOnProductTab()
})
Then('Redirect to Product section and should be visible', () => {
    lan.verifyProductSection()
})
And('Click on Features-Google Admin Console Sync of footer', () => { 
lan.clickOngoogleSync()
})
Then('Redirect to the Features-Google Admin Console Sync section', () => { 
lan.redrectTogoogleSync()
})
And('Click on the Feature-Role-Based Organization Access of footer', () => { 
    lan.clickOnroleAccess()
})
Then('Redirect to Feature-Role-Based Organization Access section', () => {
    lan.redrectToroleAccess()
 })
And('Click on the Feature-Device Management of footer', () => {
    lan.clickOndeviceMan()
 })
Then('Redirect to Feature-Device Management section', () => {
    lan.redrectTodeviceMan()
 })
And('Click on Features-Device Telemetry Reports of footer', () => {
    lan.clickOndeviceTelemetry()
 })
Then('Redirect to the Features-Device Telemetry Reports section', () => {
    lan.redrectTodeviceTelemetry()
 })
And('Click on the Feature-User Accounts of footer', () => { 
    lan.clickOnuserAcco()
})
Then('Redirect to Feature-User Accounts section', () => { 
    lan.redrectTouserAcco()
})
And('Click on the Feature-Report Center of footer', () => { 
    lan.clickOnreportCenter()
})
Then('Redirect t0 Feature-Report Center section', () => {
    lan.redrectToreportCenter()
 })
And('Click on the Feature-Repair 360 of footer', () => { 
    lan.clickOnrepair360()
})
Then('Redirect to Feature-Repair 360 section', () => {
    lan.redrectTorepair360()
 })
 And ('Click on Company->Request A Quote of footer',()=>{
    lan.clickreqAQuote()
 })
 Then ('Redirect to the Company->Request A Quote Page',()=>{
    cy.url().should('include', '/request-a-quote')
    cy.go('back')
 })
 And ('Click on the Company->Products of footer',()=>{
    lan.clickOnproducts()
 })
 Then('Redirect to Company->Products Page',()=>{
    cy.url().should('include', '/products/')
    cy.go('back')
 })
 And ('Click on the Company->Services of footer',()=>{
    lan.clickOnservices()
 })
 Then ('Redirect to Company->Services Page',()=>{
    cy.url().should('include', '/chromebook-deployment')
    cy.go('back')
 })
 And ('Click on Company->Contact of footer',()=>{
    lan.clickOncontact()
 })
 Then ('Redirect to the Company->Contact page',()=>{
    cy.url().should('include', '/contact-us')
    cy.go('back')
 })
 And ('Click on the Information->Privacy Policy of footer',()=>{
    lan.clickOnprivacyPolicy()
 })
 Then ('Redirect to Information->Privacy Policy page',()=>{
    cy.url().should('include', '/privacy-policy')
    cy.go('back')
 })
 And ('Click on the Information->Terms of Service of footer',()=>{
    lan.clickOntermsofService()
 })
 Then ('Redirect t0 Information->Terms of Service page',()=>{
    cy.url().should('include', '/terms-of-service')
    cy.go('back')
 })
 And ('Click on the Information->Google Privacy Disclosure of footer',()=>{
    lan.clickOngoogleDisclosure()
 })
 Then ('Redirect to Information->Google Privacy Disclosure page',()=>{
    cy.url().should('include', '/disclosure-google')
    cy.go('back')
 })
 And ('Click on the Information->Shipping of footer',()=>{
    lan.clickOnshipping()
 })
 Then ('Redirect to Information->Shipping page',()=>{
    cy.url().should('include', '/shipping-policy')
 })





