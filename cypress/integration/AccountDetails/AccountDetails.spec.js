import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'

const acc = new AccountDetailsActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('close the terms of service window', () => {
    cy.wait(8000)
    acc.closeTermsOfServiceWindow()
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })  
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
Then('Select User Role and Building from Dropdown List', () => {
    acc.selectUserRole()
    acc.selectBuilding()
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
Then('Click on Clear filter', () => {
    acc.clickOnClearFiltersButton()
})
And('Enter the full name in search box', () => {
    acc.enterSearchValue()
})
And('Verify the record in searching history', () => {
    acc.verifySearchResult()
})
And('Click More filter select- Full name in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterFullName()
})
And('Click More filter select- Phone in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterPhone()
})
And('Click More filter select- Title in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterTitle()
})
And('Click More filter select- Eamil in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterEmail()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterRecordId()
})
And('Click More filter select- User Role in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterUserRole()
})
And('Click More filter select- User Status in search box and Verify the Result', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterUserStatus()
})
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    acc.searchRecordId()
})
And('Enter the Search - Full name in search box and Verify the Result', () => {
    acc.searchFullName()
})
Then('Enter the Search - Email in search box and Verify the Result', () => {
    acc.searchEmail()
})
And('Enter the Search - Title in search box and Verify the Result', () => {
    acc.searchTitle()
})
Then('Enter the Search - Phone in search box and Verify the Result', () => {
    acc.searchPhone()
})
Then('Account Details -Aaccount Name and no should be visible', () => {
    acc.AccountDetailsVisible()
})
And('Account Manager,Billing Address and Shipping Address should be visible', () => {
    acc.sectionManaddressVisible()
})
And('Click on Export To CSV', () => {
    acc.clickOnExporttoCSV()
})
Then('Click on Bulk Upload button', () => {
    acc.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button', () => {
    acc.attachCsvfile()
})
Then('Verify the Uploaded successfully', () => {
    acc.verifyuploaded()
})





