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
Then ('close the terms of service window',()=>{
    cy.wait(8000)
    dash.closeTermsOfServiceWindow()   
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
Then ('Slider Menu should be visible',()=>{
    dash.sliderMenuvisible()
})




