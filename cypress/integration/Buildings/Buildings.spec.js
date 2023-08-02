import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'

const build = new BuildingsActions()
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
    build.closeTermsOfServiceWindow()   
})
And ('Click on Buildings Tab',()=>{
    build.clickOnBuildingTab()
})
And('Verify the Title of Buildings Page',  ()=> {
    build.verifyTitleBuildingPage()
    
})
Then ('Filters of Buildings should be visible',()=>{
    build.addNewButtonTabVisible()
    build.addfilterButtonVisible() 
    build.searchBoxVisible()
    build.refreshButtonVisible()
})
And ('Table for Buildings should be visible',()=>{
    build.tableofBuildingsVisible()
})

Then ('I should click on + Add New button',()=>{
    build.clickOnAddnewButton()
})
And ('I should Enter Building Name,Phone and Extension',()=>{
    build.enterBuildingName()
    build.enterPhone()
    build.enterExtension()
})
Then ('Select Default building',()=>{
    build.selectDefaultBuilding() 
})
And ('Upload the Building image',()=>{  
    build.uploadBuildingImage()
})
Then('Enter Billing Address1, city and zip',()=>{
    build.enterBillingAddress()
    build.enterBillingCity()
    build.enterBillingZipcode()
   
})
And ('Enter Initial for state and Country for billing',()=>{
    build.enterBillingState() 
    build.enterBillingCountry()
})
Then('Enter Shipping Address1, city and zip',()=>{
    build.enterShippingAddress()
    build.enterShippingCity() 
    build.enterShippingZipcode()
})
And ('Enter Initial for state and Country for shipping',()=>{
    build.enterShippingState()
    build.enterShippingCountry() 
})
And ('Click on save button',()=>{
    build.clickOnSaveButton() 
})
Then ('Verify the account details added in table',()=>{

})
And ('Click on Edit Icon',()=>{
    build.clickOnEditIcon()
})
And ('I should edit Building Name,Phone and Extension',()=>{
    build.editBuildingName()
    build.editPhone()
    build.editExtension()
})
Then ('I should edit Select Default building',()=>{
    build.editselectDefaultBuilding()
})
And ('I should edit Upload the Building image',()=>{
    build.edituploadBuildingImage()
})
Then ('Click on update button',()=>{
    build.clickOnUpdateButton()
})
And ('Verify the Record has been updated Meassage',()=>{

})
And ('Click on Delete Icon',()=>{
    build.clickOnDeleteIcon()
})
Then ('Click on Confirm Delete button',()=>{
    build.clickOnConfirmDeleteButton()
})
And ('Verify the record is deleted successfully',()=>{

})
Then ('Enter the building name in search box',()=>{
    build.enterInSearchBox()
})
And ('Verify the record in searching history',()=>{
    build.verifySearchResult()
})