import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoanerManagementActions } from '../PageObject/PageActions/LoanerManagementActions'

const loan = new LoanerManagementActions()
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
    cy.wait(9000)
    loan.closeTermsOfServiceWindow()
})
Then('Click on Manage Devices', () => {
    loan.clickOnManageDevices()
})
And('Click on LoanerManagement Tab', () => {
    loan.clickOnLoanerManagement()
})
And('Table for LoanerManagement should be visible', () => {
    loan.tableVisible()
})
Then('Search the serial no in search box of Available Devices section', () => {
    loan.serachAvailableDevice()
})
And('Verify the search result', () => {
    loan.verifySerachAvailableDevice()
})
Then('Click on the Add to loaner pool', () => {
    loan.clickOnAddtoLoanerPool()
})
Then('Search the serial no in the Available section', () => {
    loan.searchAvailable()
    loan.verifySearchAvailable()
})
And('Click on th add Student button', () => {
    loan.clickOnAddStudent()
})
Then('Enter Fullname, title and email', () => {
    loan.enterFullname()
    loan.enterTitle()
    loan.enterEmail()
})
And('Select status, building and student_id', () => {
    loan.selectStatus()
    loan.selectBuilding()
    loan.selectStudent_id()
})
Then('Click on the submit button of form', () => {
    loan.clickOnsubmitForm()
})
And('Verify the student added successfully', () => {
    loan.verifyStudentAdded()
})
Then('Click on check out button', () => {
    loan.clickOnCheckOut()
})
And('Select the student name', () => {
    loan.selectStudentName()
})
Then('Click on the submit button', () => {
    loan.clickOnSubmitbtn()
})
And('Search the serial no in the check out section', () => {
    loan.serachCheckOut()
    loan.verifySerachCheckOut()
})
Then('Click on the Check in button', () => {
    loan.clickOnCheckIn()
})
And('Enter note and click on submit button', () => {
    loan.enterNote()
    loan.clickOnSubmitNote()
})
Then('Verify the device is added in Available section', () => {
    loan.searchAvailable()
    loan.verifySerachAvailable()
})
And('Click on remove from loaner pool button', () => {
    loan.serachAvailableDevice()
    loan.clickOnRemoveFromPool()
})



