import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MyFleetActions } from '../PageObject/PageActions/MyFleetActions'

const acc = new MyFleetActions()
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
    acc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Manage Devices', () => {
    acc.clickOnManageDevices()
})
And('Click on MyFleet Tab', () => {
    acc.clickOnMyFleet()
})
And('Verify the Title of MyFleet Page', () => {
    acc.verifyTitle()
})
Then('Filters of MyFleet should be visible', () => {
    acc.filtersVisible()
})
And('Table for MyFleet should be visible', () => {
    acc.tableVisible()
})


Then('Click on More filters', () => {
    acc.clickOnMoreFiltersButton()
})
// And('Click on Add Filters Group', () => {
//     acc.clickOnAddFilterGroup()
// })
Then('Select Field name and Field operation', () => {
    acc.selectFieldName()
    acc.selectfieldOperation()
})
And('Enter the Search value in search box', () => {
    acc.enterFieldValueSearchBox()
})
Then('Click on Apply Button', () => {
    acc.clickOnApplyButton()
})
And('Verify the Results in the table', () => {
    acc.verifyResultAfterFilter()
})
Then('Click on Clear filter', () => {
    acc.clickOnClearFiltersButton()
})
And('Enter the table fields in search box', () => {
    acc.enterSearchValue()
})
And('Verify the record in searching history', () => {
    acc.verifySearchResult()
})
Then ('Click on view Button',()=>{

})
And ('Verify the Advanced Warranty Description',()=>{

})
Then ('Click on Export To CSV',()=>{
    acc.clickOnCExportToCSVButton()
})
And ('Verify Downloaded successfully',()=>{
    acc.verifyDownloadSuccessful() 
})