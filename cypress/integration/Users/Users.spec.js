import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { UsersActions } from '../PageObject/PageActions/UsersActions'

const user = new UsersActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    user.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Users page', () => {
    user.clickOnUsers()
})
Then('I should be redirected to the Users page', () => {
    cy.url().should('include', '/users')
})
Then('Filters of Users unit should be visible', () => {
    user.filtersVisible()
})
And('Table for Users unit should be visible', () => {
    user.tableVisible()
})
Then('I should click on Add New student', () => {
    user.clickOnCreateNewStudent()
})
Then('Enter full name, title and Email', () => {
    user.enterFullname()
    user.enterTitle()
    user.enterEmail()
})
And('Enter Phone and Cell Number', () => {
    user.enterPhone()
    user.enterCellNumber()
})
And('Click on submit button', () => {
    user.clickOnASubmitButton()
})
Then('Verify the student added in table', () => {
    user.verifyRecordTable()
})
And('Enter the Search value in search box', () => {
    user.enterSearchValue()
})
Then('Verify the Results in the table', () => {
    user.verifySearchResult()
})
And('Click on Edit button', () => {
    user.clickOnEditButton()
})
Then('I should edit title, full name', () => {
    user.editTitle()
    user.editFullname()
})
And('I should edit Phone and Cell Number and user role', () => {
    user.editCellNumber()
    user.editPhone()
    user.editUserRole()
})
Then('I edit User Status to inactive', () => {
    user.editUserStatus()
})
And('I edit Building', () => {
    user.editBuilding()
})
Then('Click on Submit button', () => {
    user.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage', () => {
    user.verfifyDataUpdatedMessage()
})
And ('Click on Delete button',()=>{
    user.clickDeleteButton() 
})
Then ('Click on Confirm Delete button',()=>{
    user.clickConfirmDeleteButton() 
})
And ('Verify the record is deleted successfully',()=>{
    user.verifyRecordDeleted()
})

Then ('Click on Add Filter',()=>{
    user.clickOnAddFilterButton()
})
Then('Select Field name and Field operation', () => {
    user.selectFieldName()
    user.selectfieldOperation()
})
And('Enter the Search value in search box of Filter', () => {
    user.enterFieldValueSearchBox()
})
Then('Click on Apply Button', () => {
    user.clickOnApplyButton()
})
And('Verify the Filter Results in the table', () => {
    user.verifyResultAfterFilter()
})
Then('Click on Download button', () => {
    user.clickOnDownload()
})
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    user.searchRecordId()
})
Then('Enter the Search - Full Name in search box and Verify the Result', () => {
    user.searchFullName()
})
And('Enter the Search - Email in search box and Verify the Result', () => {
    user.searchEmail()
})
Then('Enter the Search - Phone in search box and Verify the Result', () => {
    user.searchPhone()
})
And('Enter the Search - CellNumber in search box and Verify the Result', () => {
    user.searchCellNumber()
})
Then('Enter the Search - User Role in search box and Verify the Result', () => {
    user.searchUserRole()
})
Then('Click on Clear filter', () => {
    user.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    user.clickOnMoreFilter()
    user.selectFilterRecordId()
})
And ('Click More filter select- Full name in search box and Verify the Result',()=>{
    user.clickOnMoreFilter()
    user.selectFilterFullname()
})

And ('Click More filter select- Cell Number in search box and Verify the Result',()=>{
    user.clickOnMoreFilter()
    user.selectFilterCellNumber()
})
And ('Click More filter select- Eamil in search box and Verify the Result',()=>{
    user.clickOnMoreFilter()
    user.selectFilterEmail()
})
And ('Click More filter select- Role Name in search box and Verify the Result',()=>{
    user.clickOnMoreFilter()
    user.selectFilterRoleName()
})
And ('Click More filter select- User status in search box and Verify the Result',()=>{
    user.clickOnMoreFilter()
    user.selectFilterUserStatus()
})
