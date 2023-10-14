import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'

const acc = new AccountDetailsActions()
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
})
Then('My account Details should be visible', () => {
    acc.verifyMyaccountDeatilsVisbile()
})

Then('I should click on Add New button', () => {
    acc.clickOnAddNewbutton()
})
And('Verify the tilte of Add New Contact page', () => {
    acc.verifyNewContactTitle()
})
Then('Enter title, full name and valid Email', () => {
    acc.enterTitle()
    acc.enterFullname()
    acc.enterEmail()
})
And('Enter Phone and Cell Number', () => {
    acc.enterPhone()
    acc.enterCellNumber()
})
Then('Select User Role from Dropdown List', () => {
    acc.selectUserRole()
})
And('Click on save button', () => {
    acc.clickOnASaveButton()
})
Then('Verify the account details added in table', () => {
    acc.verifyRecordTable()
})
And('Click on Edit Icon', () => {
    acc.clickOnEditIcon()
    cy.wait(2000)
})
Then('I should edit title, full name', () => {
    acc.editTitle()
    acc.editFullname()
})
And('I should edit Phone and Cell Number and user role', () => {
    acc.editCellNumber()
    acc.editPhone()
    acc.editUserRole()
})
Then('I edit User Status to inactive', () => {
    acc.editUserStatus()
})
Then('Click on Submit button', () => {
    acc.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage', () => {
    acc.verfifyDataUpdatedMessage()
})
Then('Enter title, full name and valid Email for Delete', () => {
    acc.enterTitle()
    acc.enterFullnameDelete()
    acc.enterEmail()
})
And('Click on Delete Icon', () => {
    cy.wait(2000)
    acc.clickDeleteIcon()
})
Then('Click on Confirm Delete button', () => {
    acc.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully', () => {
    acc.verifyRecordDeleted()
})
Then('Enter title, full name and valid Email for Search', () => {
    acc.enterTitle()
    acc.enterFullnameSearch()
    acc.enterEmail()
})
Then('Click on More filters', () => {
    acc.clickOnMoreFiltersButton()
})
And('Click on Add Filters Group', () => {
    acc.clickOnAddFilterGroup()
})
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
And('Enter the full name in search box', () => {
    acc.enterSearchValue()
})
And('Verify the record in searching history', () => {
    acc.verifySearchResult()
})








