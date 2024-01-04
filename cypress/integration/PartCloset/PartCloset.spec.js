import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { PartClosetActions } from '../PageObject/PageActions/PartClosetActions'

const pc = new PartClosetActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('close the terms of service window', () => {
    cy.wait(8000)
    pc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    pc.clickOnRepair360()
})
And('Click on PartCloset Tab', () => {
    pc.clickOnPartClosetTab()
})
And('Verify the Title of PartCloset Page', () => {
    pc.verifyTitle()
})
Then('Filters of PartCloset should be visible', () => {
    pc.filtersVisible()
})
And('Table for PartCloset should be visible', () => {
    pc.tableVisible()
})
Then ('I should click on Add New custome part',()=>{
pc.clickOnNewCustomePart()
})
Then ('Enter part name, manufacture and parent device',()=>{
pc.enterPartname()
pc.enterManufacture()
pc.enterParentDevice()
})
And ('Enter part sku and quantity',()=>{
pc.enterPartSKU()
pc.enterQuantity()
pc.selectBuilding()
})
Then ('Click on submit button',()=>{
pc.clickOnSubmitButton()
})
And ('Verify new custome part is added',()=>{
pc.verifyNewPartAdded()
})
And ('Enter the Search value in search box',()=>{
pc.enterPartSKUSearch()
})
Then ('Verify the Results in the table',()=>{
pc.verifySearchResult()
})
And ('Click on delete button',()=>{
pc.clickOnDeleteButton()
})
Then ('Verify the recode is deleted',()=>{
pc.verifyDeleted()
})
And ('I should click on Add New VT part',()=>{
    pc.clickOnNewVTPart()
})
Then ('Select device and part name',()=>{
pc.selectDevice()
pc.selectPartName()
})
And ('Enter quantity and select building',()=>{
pc.enterQuantityVT()
pc.selectBuilding()
})
Then ('Click on submit button',()=>{
pc.clickOnSubmitVTButton()
})
And ('Verify new VT part is added',()=>{
    pc.verifyNewVTPartAdded()
})
And ('Click More filter select- Building in search box and Verify the Result',()=>{
    pc.clickOnMoreFilter()
    pc.selectFilterBuilding()
})
And ('Click More filter select- Manufacturer in search box and Verify the Result',()=>{
    pc.clickOnMoreFilter()
    pc.selectFilterManufacturer()
})
And ('Click More filter select- Parent Device in search box and Verify the Result',()=>{
    pc.clickOnMoreFilter()
    pc.selectFilterParentDevice()
})
And ('Click More filter select- Part Name in search box and Verify the Result',()=>{
    pc.clickOnMoreFilter()
    pc.selectFilterPartName()
})
And ('Click More filter select- Quantity in search box and Verify the Result',()=>{
    pc.clickOnMoreFilter()
    pc.selectFilterQuantity()
})
And ('Click More filter select- Sku in search box and Verify the Result',()=>{
    pc.clickOnMoreFilter()
    pc.selectFilterSku()
})
Then ('Click on Clear filter',()=>{
    pc.clickOnClearFilter()
})