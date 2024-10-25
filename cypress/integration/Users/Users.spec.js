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
And('Enter Phone, Cell Number, role and building', () => {
    user.enterPhone()
    // user.enterCellNumber()
    user.selectRole()
    user.selectBuilding()
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
And('Click on view button and click on Edit button', () => {
    user.clickOnEditButton()
})
Then('I should edit title, full name', () => {
    user.editTitle()
   // user.editFullname()
})
And('I should edit Phone and Cell Number and user role', () => {
    // user.editCellNumber()
    user.editPhone()
    user.editUserRole()
})
Then('I edit User Status by clicking on checkbox', () => {
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
And('Click on Delete button', () => {
    user.clickDeleteButton()
})
Then('Click on Confirm Delete button', () => {
    user.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully', () => {
    user.verifyRecordDeleted()
})
Then('Click on Add Filter', () => {
    user.clickOnAddFilterButton()
})
Then('Select Field name and Field operation', () => {
    user.selectFieldName()
    user.selectfieldOperation()
})
And('Enter the Search value of Filter', () => {
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
Then('All Organizational Units Search with Devices checkbox', () => {
    user.searchOrgUnitDevices()
})
And('Verify the result Devices in gird', () => {
    user.verifysearchResult1()
})
Then('All Organizational Units Search with Google Bootcamp Users checkbox', () => {
    user.searchOrgUnitGoogleBU()
})
And('Verify the result Google Bootcamp Users in gird', () => {
    user.verifysearchResult2()
})
Then('All Organizational Units Search with Test OU checkbox', () => {
    user.searchOrgUnitTestOU()
})
And('Verify the result Test OU in gird', () => {
    user.verifysearchResult3()
})
Then('All Organizational Units Search with VT Employees checkbox', () => {
    user.searchOrgUnitVTEmployee()
})
And('Verify the result VT Employees in gird', () => {
    user.verifysearchResult4()
})
And('Click on Export To CSV', () => {
    user.clickOnExport()
})
Then('Click on Bulk Upload button', () => {
    user.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button', () => {
    user.attachCsvfile()
})
Then('Verify the Uploaded successfully', () => {
    user.verifyuploaded()
})
//fn
And('Click on filter of Full name contain and Verify the Result', () => {
    user.filtercontainFN()
})
And('Click on filter of Full name Does not contain and Verify the Result', () => {
    user.filterDoesnotcontainFN()
})
And('Click on filter of Full name Equals and Verify the Result', () => {
    user.filterEqualsFN()
})
And('Click on filter of Full name Does not equal and Verify the Result', () => {
    user.filterNotequalFN()
})
And('Click on filter of Full name Begins with and Verify the Result', () => {
    user.filterBeginswithFN()
})
And('Click on filter of Full name Ends with and Verify the Result', () => {
    user.filterEndswithFN()
})
And('Click on filter of Full name Blank and Verify the Result', () => {
    user.filterBlankFN()
})
And('Click on filter of Full name Not blank and Verify the Result', () => {
    user.filterNotblankFN()
})
//email
And('Click on filter of Eamil contain and Verify the Result', () => {
    user.filtercontainE()
})
And('Click on filter of Eamil Does not contain and Verify the Result', () => {
    user.filterDoesnotcontainE()
})
And('Click on filter of Eamil Equals and Verify the Result', () => {
    user.filterEqualsE()
})
And('Click on filter of Eamil Does not equal and Verify the Result', () => {
    user.filterNotequalE()
})
And('Click on filter of Eamil Begins with and Verify the Result', () => {
    user.filterBeginswithE()
})
And('Click on filter of Eamil Ends with and Verify the Result', () => {
    user.filterEndswithE()
})
And('Click on filter of Eamil Blank and Verify the Result', () => {
    user.filterBlankE()
})
And('Click on filter of Eamil Not blank and Verify the Result', () => {
    user.filterNotblankE()
})
//phone
And('Click on filter of Phone contain and Verify the Result', () => {
    user.filtercontainP()
})
And('Click on filter of Phone Does not contain and Verify the Result', () => {
    user.filterDoesnotcontainP()
})
And('Click on filter of Phone Equals and Verify the Result', () => {
    user.filterEqualsP()
})
And('Click on filter of Phone Does not equal and Verify the Result', () => {
    user.filterNotequalP()
})
And('Click on filter of Phone Begins with and Verify the Result', () => {
    user.filterBeginswithP()
})
And('Click on filter of Phone Ends with and Verify the Result', () => {
    user.filterEndswithP()
})
And('Click on filter of Phone Blank and Verify the Result', () => {
    user.filterBlankP()
})
And('Click on filter of Phone Not blank and Verify the Result', () => {
    user.filterNotblankP()
})
//ou
And('Click on filter of Organizational Unit contain and Verify the Result', () => {
    user.filtercontainOU()
})
And('Click on filter of Organizational Unit Does not contain and Verify the Result', () => {
    user.filterDoesnotcontainOU()
})
And('Click on filter of Organizational Unit Equals and Verify the Result', () => {
    user.filterEqualsOU()
})
And('Click on filter of Organizational Unit Does not equal and Verify the Result', () => {
    user.filterNotequalOU()
})
And('Click on filter of Organizational Unit Begins with and Verify the Result', () => {
    user.filterBeginswithOU()
})
And('Click on filter of Organizational Unit Ends with and Verify the Result', () => {
    user.filterEndswithOU()
})
And('Click on filter of Organizational Unit Blank and Verify the Result', () => {
    user.filterBlankOU()
})
And('Click on filter of Organizational Unit Not blank and Verify the Result', () => {
    user.filterNotblankOU()
})
//us
And('Click on filter of User status Active and Verify the Result', () => {
    user.filterUSOption1()
})
And('Click on filter of User status Inactive and Verify the Result', () => {
    user.filterUSOption2()
})
//ur
And('Click on filter of User Role op1 and Verify the Result', () => {
    user.filterURop1()
})
And('Click on filter of User Role op2 and Verify the Result', () => {
    user.filterURop2()
})
And('Click on filter of User Role op3 and Verify the Result', () => {
    user.filterURop3()
})
And('Click on filter of User Role op4 and Verify the Result', () => {
    user.filterURop4()
})
And('Click on filter of User Role op5 and Verify the Result', () => {
    user.filterURop5()
})
And('Click on filter of User Role op6 and Verify the Result', () => {
    user.filterURop6()
})
And('Click on filter of User Role op7 and Verify the Result', () => {
    user.filterURop7()
})
And('Click on filter of User Role op8 and Verify the Result', () => {
    user.filterURop8()
})
And('Click on filter of User Role op9 and Verify the Result', () => {
    user.filterURop9()
})
And('Click on filter of User Role op10 and Verify the Result', () => {
    user.filterURop10()
})
//sorting
And('Click on Sort Ascending and Descending for Full Name and Verify the Result', () => {
    user.sortingFullName()
})
And('Click on Sort Ascending and Descending for Email and Verify the Result', () => {
    user.sortingEmail()
})
And('Click on Sort Ascending and Descending for Phone and Verify the Result', () => {
    user.sortingPhone()
})
And('Click on Sort Ascending and Descending for User Role and Verify the Result', () => {
    user.sortingUserRole()
})
And('Click on Sort Ascending and Descending for Organizational Unit and Verify the Result', () => {
    user.sortingOrganizationalUnit()
})
And('Click on Sort Ascending and Descending for User Status and Verify the Result', () => {
    user.sortingUserStatus()
})