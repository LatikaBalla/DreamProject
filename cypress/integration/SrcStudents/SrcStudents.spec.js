import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcStudentsActions } from '../PageObject/PageActions/SrcStudentsActions'

const ss = new SrcStudentsActions()
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
    ss.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    ss.clickOnRepair360()
})
And('Click on StudentRepairCenter tab', () => {
    ss.clickOnStudentRepairCenterTab()
})
Then('Click on SrcStudents tab', () => {
    ss.clickOnSrcStudentsTab()
})
And('Verify the Title of SrcStudents Page', () => {
    ss.verifyTitle()
})
Then('Filters of SrcStudents should be visible', () => {
    ss.filtersVisible()
})
And('Table for SrcStudents should be visible', () => {
    ss.tableVisible()
})
Then('I should click on Add New student', () => {
    ss.clickOnCreateNewStudent()
})
Then('Enter title, full name and Email', () => {
    ss.enterTitle()
    ss.enterFullname()
    ss.enterEmail()
})
And('Enter Phone and Cell Number', () => {
    ss.enterPhone()
    ss.enterCellNumber()
})
Then('Select User Status', () => {
    ss.selectUserStatus()
    // ss.selectVivaNews()
    // ss.selectProductUpdate()
})
Then('Select Vivacity weekly and Beta tester', () => {
    ss.selectViivaWeekly()
    ss.selectBetaTester()
})
Then('Select User notification and in house repair', () => {
    ss.selectUserNotification()
    ss.selectInHouseRepair()
})
And('Click on submit button', () => {
    ss.clickOnASubmitButton()
})
Then('Verify the student added in table', () => {
    ss.verifyRecordTable()
})

And('Click on view button', () => {
    ss.clickViewButtton()
})
Then('Veriry the Details of Student', () => {
    ss.verifyStudentDetails()
})

And('Enter the Search - Full name in search box and Verify the Result', () => {
    ss.searchFullName()
})
Then('Enter the Search - Email in search box and Verify the Result', () => {
    ss.searchEmail()
})
And('Enter the Search - Status in search box and Verify the Result', () => {
    ss.searchStatus()
})
Then('Enter the Search - Phone in search box and Verify the Result', () => {
    ss.searchPhone()
})

And('Click on Download Export button', () => {
    ss.clickOnExport()
})
//fn
And('Click on filter of Full name contain in search box and Verify the Result', () => {
    ss.filtercontainFN()
})
And('Click on filter of Full name Does not contain in search box and Verify the Result', () => {
    ss.filterDoesnotcontainFN()
})
And('Click on filter of Full name Equals in search box and Verify the Result', () => {
    ss.filterEqualsFN()
})
And('Click on filter of Full name Does not equal in search box and Verify the Result', () => {
    ss.filterNotequalFN()
})
And('Click on filter of Full name Begins with in search box and Verify the Result', () => {
    ss.filterBeginswithFN()
})
And('Click on filter of Full name Ends with in search box and Verify the Result', () => {
    ss.filterEndswithFN()
})
And('Click on filter of Full name Blank in search box and Verify the Result', () => {
    ss.filterBlankFN()
})
And('Click on filter of Full name Not blank in search box and Verify the Result', () => {
    ss.filterNotblankFN()
})
//title
And('Click on filter of Title contain in search box and Verify the Result', () => {
    ss.filtercontainT()
})
And('Click on filter of Title Does not contain in search box and Verify the Result', () => {
    ss.filterDoesnotcontainT()
})
And('Click on filter of Title Equals in search box and Verify the Result', () => {
    ss.filterEqualsT()
})
And('Click on filter of Title Does not equal in search box and Verify the Result', () => {
    ss.filterNotequalT()
})
And('Click on filter of Title Begins with in search box and Verify the Result', () => {
    ss.filterBeginswithT()
})
And('Click on filter of Title Ends with in search box and Verify the Result', () => {
    ss.filterEndswithT()
})
And('Click on filter of Title Blank in search box and Verify the Result', () => {
    ss.filterBlankT()
})
And('Click on filter of Title Not blank in search box and Verify the Result', () => {
    ss.filterNotblankT()
})
//email
And('Click on filter of Eamil contain in search box and Verify the Result', () => {
    ss.filtercontainE()
})
And('Click on filter of Eamil Does not contain in search box and Verify the Result', () => {
    ss.filterDoesnotcontainE()
})
And('Click on filter of Eamil Equals in search box and Verify the Result', () => {
    ss.filterEqualsE()
})
And('Click on filter of Eamil Does not equal in search box and Verify the Result', () => {
    ss.filterNotequalE()
})
And('Click on filter of Eamil Begins with in search box and Verify the Result', () => {
    ss.filterBeginswithE()
})
And('Click on filter of Eamil Ends with in search box and Verify the Result', () => {
    ss.filterEndswithE()
})
And('Click on filter of Eamil Blank in search box and Verify the Result', () => {
    ss.filterBlankE()
})
And('Click on filter of Eamil Not blank in search box and Verify the Result', () => {
    ss.filterNotblankE()
})
//phone
And('Click on filter of Phone No contain in search box and Verify the Result', () => {
    ss.filtercontainP()
})
And('Click on filter of Phone No Does not contain in search box and Verify the Result', () => {
    ss.filterDoesnotcontainP()
})
And('Click on filter of Phone No Equals in search box and Verify the Result', () => {
    ss.filterEqualsP()
})
And('Click on filter of Phone No Does not equal in search box and Verify the Result', () => {
    ss.filterNotequalP()
})
And('Click on filter of Phone No Begins with in search box and Verify the Result', () => {
    ss.filterBeginswithP()
})
And('Click on filter of Phone No Ends with in search box and Verify the Result', () => {
    ss.filterEndswithP()
})
And('Click on filter of Phone No Blank in search box and Verify the Result', () => {
    ss.filterBlankP()
})
And('Click on filter of Phone No Not blank in search box and Verify the Result', () => {
    ss.filterNotblankP()
})
//us
And('Click on filter of User status contain in search box and Verify the Result', () => {
    ss.filtercontainUS()
})
And('Click on filter of User status Does not contain in search box and Verify the Result', () => {
    ss.filterDoesnotcontainUS()
})
And('Click on filter of User status Equals in search box and Verify the Result', () => {
    ss.filterEqualsUS()
})
And('Click on filter of User status Does not equal in search box and Verify the Result', () => {
    ss.filterNotequalUS()
})
And('Click on filter of User status Begins with in search box and Verify the Result', () => {
    ss.filterBeginswithUS()
})
And('Click on filter of User status Ends with in search box and Verify the Result', () => {
    ss.filterEndswithUS()
})
And('Click on filter of User status Blank in search box and Verify the Result', () => {
    ss.filterBlankUS()
})
And('Click on filter of User status Not blank in search box and Verify the Result', () => {
    ss.filterNotblankUS()
})
//ur
And('Click on filter of User Role contain in search box and Verify the Result', () => {
    ss.filtercontainUR()
})
And('Click on filter of User Role Does not contain in search box and Verify the Result', () => {
    ss.filterDoesnotcontainUR()
})
And('Click on filter of User Role Equals in search box and Verify the Result', () => {
    ss.filterEqualsUR()
})
And('Click on filter of User Role Does not equal in search box and Verify the Result', () => {
    ss.filterNotequalUR()
})
And('Click on filter of User Role Begins with in search box and Verify the Result', () => {
    ss.filterBeginswithUR()
})
And('Click on filter of User Role Ends with in search box and Verify the Result', () => {
    ss.filterEndswithUR()
})
And('Click on filter of User Role Blank in search box and Verify the Result', () => {
    ss.filterBlankUR()
})
And('Click on filter of User Role Not blank in search box and Verify the Result', () => {
    ss.filterNotblankUR()
})