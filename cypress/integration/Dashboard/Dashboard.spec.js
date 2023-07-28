import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { DashboardActions } from '../PageObject/PageActions/DashboardActions'

const dash = new DashboardActions()
Cypress.on("uncaught:exception", () => {
  return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application',  ()=> {
    cy.AdminLogin()
    
})
Then('I should be redirected to the dashboard page',  ()=> {
    cy.url().should('include', '/')
  
})
And('Verify the Title of dashborad Page',  ()=> {
    cy.title().should('eq', 'Account Dashboard')
})
Then ('My Account Detail tab should be visible',()=>{
    dash.myAccountDetailsTabVisible()  
})
And ('Building tab should be visible',()=>{
    dash.buildingTabVisible() 
})
And ('Table for my account deatils should be visible',()=>{
    dash.tableAccountVisible()
})
Then ('I should click on Add New button',()=>{
    dash.clickOnAddNewbutton()
})
And ('Verify the tilte of Add New Contact page',()=>{
    dash.verifyNewContactTitle()
})
Then ('Enter title, full name and valid Email',()=>{
    dash.enterTitle()
    dash.enterFullname()
    dash.enterEmail()
})
And ('Enter Phone and Cell Number',()=>{
    cy.get('.MuiToolbar-root > .MuiButton-root').click({force:true})
    dash.enterPhone()
    dash.enterCellNumber()
})
Then('Select User Role from Dropdown List',()=>{
    dash.selectUserRole()
})
And ('Click on save button',()=>{
    dash.clickOnASaveButton()
})
Then('Verify the account details added in table',()=>{
    dash.verifyRecordTable()
})
And ('click on Edit Icon',()=>{
    dash.clickOnEditIcon()
    cy.wait(2000)
})



