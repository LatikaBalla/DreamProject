import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { RepairBoxesActions } from '../PageObject/PageActions/RepairBoxesActions'

const acc = new RepairBoxesActions()
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
Then('Click on Repair360 page', () => {
    acc.clickOnRepair360()
})
And('Click on RepairBoxes Tab', () => {
    acc.clickOnRepairBoxesTab()
})
And('Verify the Title of RepairBoxes Page', () => {
    acc.verifyTitle()
})
Then('Filters of RepairBoxes should be visible', () => {
    acc.filtersVisible()
})
And('Table for RepairBoxes should be visible', () => {
    acc.tableVisible()
})
Then ('I should click on create new Box',()=>{

})
Then ('Enter weight, height, depth and width',()=>{

})
And ('Select Pick-up site',()=>{

})
Then ('Check the need shipping box',()=>{

}) 
And ('Click on Create box button',()=>{

})
Then ('Select Ticket from dropdownlist',()=>{

}) 
And ('Click on Finish button',()=>{

})
Then ('Verify new box is added in table',()=>{

}) 
And ('Click on new box row ',()=>{
    
})
Then ('Verify the Details new box',()=>{})
