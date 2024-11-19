import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { TransactionsActions } from '../PageObject/PageActions/TransactionsActions'

const trans = new TransactionsActions()
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
    trans.closeTermsOfServiceWindow()
})
And('Click on transactions page', () => {
    trans.clickOnTransactions()
})
Then('I should be redirected to the transactions page', () => {
    cy.url().should('include', '/transactions')
})
And ('Verify the Title of transactions Page',()=>{
    trans.titleVisible()
})
Then ('Verify the Estimates Tab should be visible',()=>{
    trans.estimateTabVisible()
})
And ('Verify the Quotes tab should be visible',()=>{
    trans.quotesTabVisible()
})
Then ('Verify the Orders Tab should be visible',()=>{
    trans.orderTabVisible()
})
And ('Verify the Invoices tab should be visible',()=>{
    trans.invoicesTabVisible()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result', () => {
    trans.filtercontainTN()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals and Verify the Result', () => {
    trans.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result', () => {
    trans.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with and Verify the Result', () => {
    trans.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with and Verify the Result', () => {
    trans.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank and Verify the Result', () => {
    trans.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank and Verify the Result', () => {
    trans.filterNotblankTN()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result', () => {
    trans.filtercontainSN()
})
And('Click on filter of Serial Number Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals and Verify the Result', () => {
    trans.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal and Verify the Result', () => {
    trans.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with and Verify the Result', () => {
    trans.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with and Verify the Result', () => {
    trans.filterEndswithSN()
})
And('Click on filter of Serial Number Blank and Verify the Result', () => {
    trans.filterBlankSN()
})
And('Click on filter of Serial Number Not blank and Verify the Result', () => {
    trans.filterNotblankSN()
})
//
And('Click on filter of Repair Type op1 and Verify the Result', () => {
    trans.filterRepairTypeOp1()
})
And('Click on filter of Repair Type op2 and Verify the Result', () => {
    trans.filterRepairTypeOp2()
})
And('Click on filter of Repair Type op3 and Verify the Result', () => {
    trans.filterRepairTypeOp3()
})

//phone
And('Click on filter of Created Date Equals and Verify the Result', () => {
    trans.filterEqualsCDate()
})
And('Click on filter of Created Date Does not equal and Verify the Result', () => {
    trans.filterNotequalCDate()
})
And('Click on filter of Created Date Before and Verify the Result', () => {
    trans.filterBeforeCDate()
})
And('Click on filter of Created Date After and Verify the Result', () => {
    trans.filterAfterCDate()
})
And('Click on filter of Created Date Between and Verify the Result', () => {
    trans.filterBetweenCDate()
})
And('Click on filter of Created Date Blank and Verify the Result', () => {
    trans.filterBlankCDate()
})
And('Click on filter of Created Date Not blank and Verify the Result', () => {
    trans.filterNotblankCDate()
})
//ou
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    trans.filterEqualsLDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    trans.filterNotequalLDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    trans.filterBeforeLDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    trans.filterAfterLDate()
})
And('Click on filter of Last Modified Date Between and Verify the Result', () => {
    trans.filterBetweenLDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    trans.filterBlankLDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    trans.filterNotblankLDate()
})
//Repair Status
And('Click on filter of Repair Status op1 and Verify the Result', () => {
    trans.filterURop1()
})
And('Click on filter of Repair Status op2 and Verify the Result', () => {
    trans.filterURop2()
})
And('Click on filter of Repair Status op3 and Verify the Result', () => {
    trans.filterURop3()
})
And('Click on filter of Repair Status op4 and Verify the Result', () => {
    trans.filterURop4()
})
And('Click on filter of Repair Status op5 and Verify the Result', () => {
    trans.filterURop5()
})
//sorting
And('Click on Sort Ascending and Descending for Ticket Number and Verify the Result', () => {
    trans.sortingTicketNumber()
})
And('Click on Sort Ascending and Descending for Serial Number and Verify the Result', () => {
    trans.sortingSerialNumber()
})
And('Click on Sort Ascending and Descending for Repair Type and Verify the Result', () => {
    trans.sortingRepairType()
})
And('Click on Sort Ascending and Descending for Repair Status and Verify the Result', () => {
    trans.sortingRepairStatus()
})
And('Click on Sort Ascending and Descending for Created Date and Verify the Result', () => {
    trans.sortingCreatedDate()
})
And('Click on Sort Ascending and Descending for Last Modified Date and Verify the Result', () => {
    trans.sortingLastModifiedDate()
})
