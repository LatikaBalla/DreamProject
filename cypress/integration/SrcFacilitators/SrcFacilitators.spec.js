import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcFacilitatorsActions } from '../PageObject/PageActions/SrcFacilitatorsActions'

const sf = new SrcFacilitatorsActions()
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
    sf.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    sf.clickOnRepair360()
})
And('Click on StudentRepairCenter tab', () => {
    sf.clickOnStudentRepairCenterTab()
})
Then('Click on SrcFacilitators tab', () => {
    sf.clickOnSrcFacilitatorsTab()
})
And('Verify the Title of SrcFacilitators Page', () => {
    sf.verifyTitle()
})
Then('Filters of SrcFacilitators should be visible', () => {
    sf.filtersVisible()
})
And('Table for SrcFacilitators should be visible', () => {
    sf.tableVisible()
})
And ('Click on view button',()=>{
    sf.clickOnViewButton()
}) 
Then ('Veriry the Details of Facilitator',()=>{
sf.verifyViewDetails()
})
And('Enter the Search - Full name in search box and Verify the Result', () => {
    sf.searchFullName()
})
Then('Enter the Search - Email in search box and Verify the Result', () => {
    sf.searchEmail()
})
And('Enter the Search - Status in search box and Verify the Result', () => {
    sf.searchStatus()
})
Then('Enter the Search - Phone in search box and Verify the Result', () => {
    sf.searchPhone()
})
// Then('Click on More filters', () => {
//     sf.clickOnMoreFilter()
// })
// And('Select Field name and Field operation and Enter the Search value', () => {
//     sf.enterFieldName()
//     sf.enterFieldOperation()
//     sf.enterSearchValue()
// })
// Then('Click on Apply Button', () => {
//     sf.clickOnApply()
// })
// And('Verify the Results in the table', () => {
//     sf.verifyResultFilter()
// })
Then('Click on Clear filter', () => {
    sf.clickOnClearFilter()
})
And ('Click More filter select- Full name in search box and Verify the Result',()=>{
    sf.clickOnMoreFilter()
    sf.selectFilterFullname()
})
And ('Click More filter select- Phone in search box and Verify the Result',()=>{
    sf.clickOnMoreFilter()
    sf.selectFilterPhone()
})
And ('Click More filter select- Title in search box and Verify the Result',()=>{
    sf.clickOnMoreFilter()
    sf.selectFilterTitle()
})
And ('Click More filter select- Eamil in search box and Verify the Result',()=>{
    sf.clickOnMoreFilter()
    sf.selectFilterEmail()
})
And ('Click More filter select- User status in search box and Verify the Result',()=>{
    sf.clickOnMoreFilter()
    sf.selectFilterUserStatus()
})