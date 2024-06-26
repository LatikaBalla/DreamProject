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
Then('Click on Clear filter', () => {
    ss.clickOnClearFilter()
})
And ('Click More filter select- Full name in search box and Verify the Result',()=>{
    ss.clickOnMoreFilter()
    ss.selectFilterFullName()
})
And ('Click More filter select- Phone in search box and Verify the Result',()=>{
    ss.clickOnMoreFilter()
    ss.selectFilterPhone()
})
And ('Click More filter select- Title in search box and Verify the Result',()=>{
    ss.clickOnMoreFilter()
    ss.selectFilterTitle()
})
And ('Click More filter select- Eamil in search box and Verify the Result',()=>{
    ss.clickOnMoreFilter()
    ss.selectFilterEmail()
})
And ('Click More filter select- User status in search box and Verify the Result',()=>{
    ss.clickOnMoreFilter()
    ss.selectFilterUserStatus()
})
And('Click on Download Export button', () => {
    ss.clickOnExport()
})