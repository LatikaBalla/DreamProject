import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { FleetValueActions } from '../PageObject/PageActions/FleetValueActions.js'

const fle = new FleetValueActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
And('Click on Repair360 page', () => {
    fle.clickOnRepair360()
})
And('Click on FleetValue page', () => {
    fle.clickOnFleetValue()
})
Then('Click on the Export button', () => {
    fle.clickOnDownloadButton()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    fle.closeTermsOfServiceWindow()
})
And ('Click on help icon for Filtering Guide',()=>{
    fle.clickOnHelpIcon()
})
Then ('Verify the Dream Data Filtering Guide',()=>{
    fle.verifyfilteringGuide()
})

//Device Name
And('Click on filter of Device Name contain and Verify the Result', () => {
    fle.filterContainDName()
})
And('Click on filter of Device Name Does not contain and Verify the Result', () => {
    fle.filterDoesnotcontainDName()
})
And('Click on filter of Device Name Equals and Verify the Result', () => {
    fle.filterEqualsDName()
})
And('Click on filter of Device Name Does not equal and Verify the Result', () => {
    fle.filterNotequalDName()
})
And('Click on filter of Device Name Begins with and Verify the Result', () => {
    fle.filterBeginswithDName()
})
And('Click on filter of Device Name Ends with and Verify the Result', () => {
    fle.filterEndswithDName()
})
And('Click on filter of Device Name Blank and Verify the Result', () => {
    fle.filterBlankDName()
})
And('Click on filter of Device Name Not blank and Verify the Result', () => {
    fle.filterNotblankDName()
})
// Device Model
And('Click on filter of Device Model contain and Verify the Result', () => {
    fle.filterContainDModel()
})
And('Click on filter of Device Model Does not contain and Verify the Result', () => {
    fle.filterDoesnotcontainDModel()
})
And('Click on filter of Device Model Equals and Verify the Result', () => {
    fle.filterEqualsDModel()
})
And('Click on filter of Device Model Does not equal and Verify the Result', () => {
    fle.filterNotequalDModel()
})
And('Click on filter of Device Model Begins with and Verify the Result', () => {
    fle.filterBeginswithDModel()
})
And('Click on filter of Device Model Ends with and Verify the Result', () => {
    fle.filterEndswithDModel()
})
And('Click on filter of Device Model Blank and Verify the Result', () => {
    fle.filterBlankDModel()
})
And('Click on filter of Device Model Not blank and Verify the Result', () => {
    fle.filterNotblankDModel()
})
//Quantity
And('Click on filter of Quantity in Fleet Equals and Verify the Result', () => {
    fle.filtercontainQuantity()
})
And('Click on filter of Quantity in Fleet Does not equal and Verify the Result', () => {
    fle.filterDoesnotcontainQuantity()
})
And('Click on filter of Quantity in Fleet Greater than and Verify the Result', () => {
    fle.filterGreaterthanQuantity()
})
And('Click on filter of Quantity in Fleet Greater than or equal to and Verify the Result', () => {
    fle.filterGreaterequalQuantity()
})
And('Click on filter of Quantity in Fleet Less than and Verify the Result', () => {
    fle.filterLessthanQuantity()
})
And('Click on filter of Quantity in Fleet Less than or equal to and Verify the Result', () => {
    fle.filterLessequalQuantity()
})
And('Click on filter of Quantity in Fleet Between and Verify the Result', () => {
    fle.filterBetweenQuantity()
})
And('Click on filter of Quantity in Fleet Blank and Verify the Result', () => {
    fle.filterBlankQuantity()
})
And('Click on filter of Quantity in Fleet Not blank and Verify the Result', () => {
    fle.filterNotblankQuantity()
})
//SKU
And('Click on filter of SKU contain and Verify the Result', () => {
    fle.filterContainSKU()
})
And('Click on filter of SKU Does not contain and Verify the Result', () => {
    fle.filterDoesnotcontainSKU()
})
And('Click on filter of SKU Equals and Verify the Result', () => {
    fle.filterEqualsSKU()
})
And('Click on filter of SKU Does not equal and Verify the Result', () => {
    fle.filterNotequalSKU()
})
And('Click on filter of SKU Begins with and Verify the Result', () => {
    fle.filterBeginswithSKU()
})
And('Click on filter of SKU Ends with and Verify the Result', () => {
    fle.filterEndswithSKU()
})
And('Click on filter of SKU Blank and Verify the Result', () => {
    fle.filterBlankSKU()
})
And('Click on filter of SKU Not blank and Verify the Result', () => {
    fle.filterNotblankSKU()
})
And('Click on filter of Buyback Price Equals and Verify the Result', () => {
    fle.filtercontainPrice()
})
And('Click on filter of Buyback Price Does not equal and Verify the Result', () => {
    fle.filterDoesnotcontainPrice()
})
And('Click on filter of Buyback Price Greater than and Verify the Result', () => {
    fle.filterGreaterthanPrice()
})
And('Click on filter of Buyback Price Greater than or equal to and Verify the Result', () => {
    fle.filterGreaterequalPrice()
})
And('Click on filter of Buyback Pricel Less than and Verify the Result', () => {
    fle.filterLessthanPrice()
})
And('Click on filter of Buyback Price Less than or equal to and Verify the Result', () => {
    fle.filterLessequalPrice()
})
And('Click on filter of Buyback Price Between and Verify the Result', () => {
    fle.filterBetweenPrice()
})
And('Click on filter of Buyback Price Blank and Verify the Result', () => {
    fle.filterBlankPrice()
})
And('Click on filter of Buyback Price Not blank and Verify the Result', () => {
    fle.filterNotblankPrice()
})
And('Click on filter of Total Value Equals and Verify the Result', () => {
    fle.filtercontainTotalValue()
})
And('Click on filter of Total Value Does not equal and Verify the Result', () => {
    fle.filterDoesnotcontainTotalValue()
})
And('Click on filter of Total Greater than and Verify the Result', () => {
    fle.filterGreaterthanTotalValue()
})
And('Click on filter of Total Value Greater than or equal to and Verify the Result', () => {
    fle.filterGreaterequalTotalValue()
})
And('Click on filter of Total Value Less than and Verify the Result', () => {
    fle.filterLessthanTotalValue()
})
And('Click on filter of Total Value Less than or equal to and Verify the Result', () => {
    fle.filterLessequalTotalValue()
})
And('Click on filter of Total Value Between and Verify the Result', () => {
    fle.filterBetweenTotalValue()
})
And('Click on filter of Total Value Blank and Verify the Result', () => {
    fle.filterBlankTotalValue()
})
And('Click on filter of Total Value Not blank and Verify the Result', () => {
    fle.filterNotblankTotalValue()
})
And ('Click on Sort Ascending and Descending for Device Name and Verify the Result',()=>{
    fle.sortingDeviceName()
})
And ('Click on Sort Ascending and Descending for Device Model and Verify the Result',()=>{
    fle.sortingDeviceModel()
})
And ('Click on Sort Ascending and Descending for Quantity and Verify the Result',()=>{
    fle.sortingQuantity()
})
And ('Click on Sort Ascending and Descending for SKU and Verify the Result',()=>{
    fle.sortingSKU()
})
And ('Click on Sort Ascending and Descending for Buyback Price and Verify the Result',()=>{
    fle.sortingBuybackPrice()
})
And ('Click on Sort Ascending and Descending for Total Value and Verify the Result',()=>{
    fle.sortingTotalValue()
})