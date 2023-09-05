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