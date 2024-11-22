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
And('Click on Quotes page', () => {
    trans.clickOnQuotes()
})
And('Click on Orders page', () => {
    trans.clickOnOrders()
})
And('Click on Invoices page', () => {
    trans.clickOnInvoices()
})
Then('I should be redirected to the transactions page', () => {
    cy.url().should('include', '/transactions')
})
And('Verify the Title of transactions Page', () => {
    trans.titleVisible()
})
Then('Verify the Estimates Tab should be visible', () => {
    trans.estimateTabVisible()
})
And('Verify the Quotes tab should be visible', () => {
    trans.quotesTabVisible()
})
Then('Verify the Orders Tab should be visible', () => {
    trans.orderTabVisible()
})
And('Verify the Invoices tab should be visible', () => {
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
//Quotes
And('Click on filter of Quote Number contain and Verify the Result', () => {
    trans.filtercontainQN()
})
And('Click on filter of Quote Number Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainQN()
})
And('Click on filter of Quote Number Equals and Verify the Result', () => {
    trans.filterEqualsQN()
})
And('Click on filter of Quote Number Does not equal and Verify the Result', () => {
    trans.filterNotequalQN()
})
And('Click on filter of Quote Number Begins with and Verify the Result', () => {
    trans.filterBeginswithQN()
})
And('Click on filter of Quote Number Ends with and Verify the Result', () => {
    trans.filterEndswithQN()
})
And('Click on filter of Quote Number Blank and Verify the Result', () => {
    trans.filterBlankQN()
})
And('Click on filter of Quote Number Not blank and Verify the Result', () => {
    trans.filterNotblankQN()
})

And('Click on filter of Expiration Date Equals and Verify the Result', () => {
    trans.filterEqualsEDateQuotes()
})
And('Click on filter of Expiration Date Does not equal and Verify the Result', () => {
    trans.filterNotequalEDateQuotes()
})
And('Click on filter of Expiration Date Before and Verify the Result', () => {
    trans.filterBeforeEDateQuotes()
})
And('Click on filter of Expiration Date After and Verify the Result', () => {
    trans.filterAfterEDateQuotes()
})
And('Click on filter of Expiration Date Between and Verify the Result', () => {
    trans.filterBetweenEDateQuotes()
})
And('Click on filter of Expiration Date Blank and Verify the Result', () => {
    trans.filterBlankEDateQuotes()
})
And('Click on filter of Expiration Date Not blank and Verify the Result', () => {
    trans.filterNotblankEDateQuotes()
})

And('Click on filter of Created Date Equals and Verify the Result for Quotes', () => {
    trans.filterEqualsCDateQuotes()
})
And('Click on filter of Created Date Does not equal and Verify the Result for Quotes', () => {
    trans.filterNotequalCDateQuotes()
})
And('Click on filter of Created Date Before and Verify the Result for Quotes', () => {
    trans.filterBeforeCDateQuotes()
})
And('Click on filter of Created Date After and Verify the Result for Quotes', () => {
    trans.filterAfterCDateQuotes()
})
And('Click on filter of Created Date Between and Verify the Result for Quotes', () => {
    trans.filterBetweenCDateQuotes()
})
And('Click on filter of Created Date Blank and Verify the Result for Quotes', () => {
    trans.filterBlankCDateQuotes()
})
And('Click on filter of Created Date Not blank and Verify the Result for Quotes', () => {
    trans.filterNotblankCDateQuotes()
})
And('Click on filter of Last Modified Date Equals and Verify the Result for Quotes', () => {
    trans.filterEqualsLDateQuotes()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result for Quotes', () => {
    trans.filterNotequalLDateQuotes()
})
And('Click on filter of Last Modified Date Before and Verify the Result for Quotes', () => {
    trans.filterBeforeLDateQuotes()
})
And('Click on filter of Last Modified Date After and Verify the Result for Quotes', () => {
    trans.filterAfterLDateQuotes()
})
And('Click on filter of Last Modified Date Between and Verify the Result for Quotes', () => {
    trans.filterBetweenLDateQuotes()
})
And('Click on filter of Last Modified Date Blank and Verify the Result for Quotes', () => {
    trans.filterBlankLDateQuotes()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result for Quotes', () => {
    trans.filterNotblankLDateQuotes()
})
And('Click on Sort Ascending and Descending for Quote Number and Verify the Result', () => {
    trans.sortingQuoteNumber()
})
And('Click on Sort Ascending and Descending for Expiration Date and Verify the Result', () => {
    trans.sortingExpirationDate()
})
And('Click on Sort Ascending and Descending for Created Date and Verify the Result for Quotes', () => {
    trans.sortingCDate()
})
And('Click on Sort Ascending and Descending for Last Modified Date and Verify the Result for Quotes', () => {
    trans.sortingLDate()
})
//Orders
And('Click on filter of Order Total contain and Verify the Result', () => {
    trans.filtercontainQT()
})
And('Click on filter of Order Total Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainQT()
})
And('Click on filter of Order Total Equals and Verify the Result', () => {
    trans.filterEqualsQT()
})
And('Click on filter of Order Total Does not equal and Verify the Result', () => {
    trans.filterNotequalQT()
})
And('Click on filter of Order Total Begins with and Verify the Result', () => {
    trans.filterBeginswithQT()
})
And('Click on filter of Order Total Ends with and Verify the Result', () => {
    trans.filterEndswithQT()
})
And('Click on filter of Order Total Blank and Verify the Result', () => {
    trans.filterBlankQT()
})
And('Click on filter of Order Total Not blank and Verify the Result', () => {
    trans.filterNotblankQT()
})
//Location
And('Click on filter of Location contain and Verify the Result', () => {
    trans.filtercontainLocation()
})
And('Click on filter of Location Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainLocation()
})
And('Click on filter of Location Equals and Verify the Result', () => {
    trans.filterEqualsLocation()
})
And('Click on filter of Location Does not equal and Verify the Result', () => {
    trans.filterNotequalLocation()
})
And('Click on filter of Location Begins with and Verify the Result', () => {
    trans.filterBeginswithLocation()
})
And('Click on filter of Location Ends with and Verify the Result', () => {
    trans.filterEndswithLocation()
})
And('Click on filter of Location Blank and Verify the Result', () => {
    trans.filterBlankLocation()
})
And('Click on filter of Location Not blank and Verify the Result', () => {
    trans.filterNotblankLocation()
})

And('Click on filter of Quote ID contain and Verify the Result', () => {
    trans.filtercontainQId()
})
And('Click on filter of Quote ID Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainQId()
})
And('Click on filter of Quote ID Equals and Verify the Result', () => {
    trans.filterEqualsQId()
})
And('Click on filter of Quote ID Does not equal and Verify the Result', () => {
    trans.filterNotequalQId()
})
And('Click on filter of Quote ID Begins with and Verify the Result', () => {
    trans.filterBeginswithQId()
})
And('Click on filter of Quote ID Ends with and Verify the Result', () => {
    trans.filterEndswithQId()
})
And('Click on filter of Quote ID Blank and Verify the Result', () => {
    trans.filterBlankQId()
})
And('Click on filter of Quote ID Not blank and Verify the Result for Quotes', () => {
    trans.filterNotblankQId()
})
And('Click on filter of Customer PO Number contain and Verify the Result', () => {
    trans.filtercontainCPONumber()
})
And('Click on filter of Customer PO Number Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainCPONumber()
})
And('Click on filter of Customer PO Number Equals and Verify the Result', () => {
    trans.filterEqualsCPONumber()
})
And('Click on filter of Customer PO Number Does not equal and Verify the Result', () => {
    trans.filterNotequalCPONumber()
})
And('Click on filter of Customer PO Number Begins with and Verify the Result', () => {
    trans.filterBeginswithCPONumber()
})
And('Click on filter of Customer PO Number Ends with and Verify the Result', () => {
    trans.filterEndswithCPONumber()
})
And('Click on filter of Customer PO Number Blank and Verify the Result', () => {
    trans.filterBlankCPONumber()
})
And('Click on filter of Customer PO Number Not blank and Verify the Result', () => {
    trans.filterNotblankCPONumber()
})
And('Click on filter of Tracking Number contain and Verify the Result', () => {
    trans.filtercontainTNumber()
})
And('Click on filter of Tracking Number Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainTNumber()
})
And('Click on filter of Tracking Number Equals and Verify the Result', () => {
    trans.filterEqualsTNumber()
})
And('Click on filter of Tracking Number Does not equal and Verify the Result', () => {
    trans.filterNotequalTNumber()
})
And('Click on filter of Tracking Number Begins with and Verify the Result', () => {
    trans.filterBeginswithTNumber()
})
And('Click on filter of Tracking Number Ends with and Verify the Result', () => {
    trans.filterEndswithTNumber()
})
And('Click on filter of Tracking Number Blank and Verify the Result', () => {
    trans.filterBlankTNumber()
})
And('Click on filter of Tracking Number Not blank and Verify the Result', () => {
    trans.filterNotblankTNumber()
})

And('Click on filter of Created Date Equals and Verify the Result for Orders', () => {
    trans.filterEqualsCDateOrder()
})
And('Click on filter of Created Date Does not equal and Verify the Result for Orders', () => {
    trans.filterNotequalCDateOrder()
})
And('Click on filter of Created Date Before and Verify the Result for Orders', () => {
    trans.filterBeforeCDateOrder()
})
And('Click on filter of Created Date After and Verify the Result for Orders', () => {
    trans.filterAfterCDateOrder()
})
And('Click on filter of Created Date Between and Verify the Result for Orders', () => {
    trans.filterBetweenCDateOrder()
})
And('Click on filter of Created Date Blank and Verify the Result for Orders', () => {
    trans.filterBlankCDateOrder()
})
And('Click on filter of Created Date Not blank and Verify the Result for Orders', () => {
    trans.filterNotblankCDateOrder()
})
And('Click on filter of Modified Date Equals and Verify the Result', () => {
    trans.filterEqualsModifiedDate()
})
And('Click on filter of Modified Date Does not equal and Verify the Result', () => {
    trans.filterNotequalModifiedDate()
})
And('Click on filter of Modified Date Before and Verify the Result', () => {
    trans.filterBeforeModifiedDate()
})
And('Click on filter of Modified Date After and Verify the Result', () => {
    trans.filterAfterModifiedDate()
})
And('Click on filter of Modified Date Between and Verify the Result', () => {
    trans.filterBetweenModifiedDate()
})
And('Click on filter of Modified Date Blank and Verify the Result', () => {
    trans.filterBlankModifiedDate()
})
And('Click on filter of Modified Date Not blank and Verify the Result', () => {
    trans.filterNotblankModifiedDate()
})
And('Click on Sort Ascending and Descending for Order Total and Verify the Result', () => {
    trans.sortingOrderTotal()
})
And('Click on Sort Ascending and Descending for Quote ID and Verify the Result', () => {
    trans.sortingQuoteID()
})
And('Click on Sort Ascending and Descending for Location and Verify the Result', () => {
    trans.sortingLocation()
})
And('Click on Sort Ascending and Descending for Customer PO Number and Verify the Result', () => {
    trans.sortingCustomerPONumber()
})
And('Click on Sort Ascending and Descending for Created Date and Verify the Result for Orders', () => {
    trans.sortingCreatedDateOrder()
})
And('Click on Sort Ascending and Descending for Tracking Number and Verify the Result', () => {
    trans.sortingTrackingNumber()
})
And('Click on Sort Ascending and Descending for Modified Date and Verify the Result', () => {
    trans.sortingModifiedDate()
})
//Invoices
And('Click on filter of Invoice Id contain and Verify the Result', () => {
    trans.filtercontainInId()
})
And('Click on filter of Invoice Id Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainInId()
})
And('Click on filter of Invoice Id Equals and Verify the Result', () => {
    trans.filterEqualsInId()
})
And('Click on filter of Invoice Id Does not equal and Verify the Result', () => {
    trans.filterNotequalInId()
})
And('Click on filter of Invoice Id Begins with and Verify the Result', () => {
    trans.filterBeginswithInId()
})
And('Click on filter of Invoice Id Ends with and Verify the Result', () => {
    trans.filterEndswithInId()
})
And('Click on filter of Invoice Id Blank and Verify the Result', () => {
    trans.filterBlankInId()
})
And('Click on filter of Invoice Id Not blank and Verify the Result for Quotes', () => {
    trans.filterNotblankInId()
})
And('Click on filter of Order Id contain and Verify the Result', () => {
    trans.filtercontainOId()
})
And('Click on filter of Order Id Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainOId()
})
And('Click on filter of Order Id Equals and Verify the Result', () => {
    trans.filterEqualsOId()
})
And('Click on filter of Order Id Does not equal and Verify the Result', () => {
    trans.filterNotequalOId()
})
And('Click on filter of Order Id Begins with and Verify the Result', () => {
    trans.filterBeginswithOId()
})
And('Click on filter of Order Id Ends with and Verify the Result', () => {
    trans.filterEndswithOId()
})
And('Click on filter of Order Id Blank and Verify the Result', () => {
    trans.filterBlankOId()
})
And('Click on filter of Order Id Not blank and Verify the Result for Quotes', () => {
    trans.filterNotblankOId()
})
And('Click on filter of PO Number contain and Verify the Result', () => {
    trans.filtercontainPONumber()
})
And('Click on filter of PO Number Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainPONumber()
})
And('Click on filter of PO Number Equals and Verify the Result', () => {
    trans.filterEqualsPONumber()
})
And('Click on filter of PO Number Does not equal and Verify the Result', () => {
    trans.filterNotequalPONumber()
})
And('Click on filter of PO Number Begins with and Verify the Result', () => {
    trans.filterBeginswithPONumber()
})
And('Click on filter of PO Number Ends with and Verify the Result', () => {
    trans.filterEndswithPONumber()
})
And('Click on filter of PO Number Blank and Verify the Result', () => {
    trans.filterBlankPONumber()
})
And('Click on filter of PO Number Not blank and Verify the Result', () => {
    trans.filterNotblankPONumber()
})
And('Click on filter of Created Date Equals and Verify the Result for Invoices', () => {
    trans.filterEqualsCDateInvoice()
})
And('Click on filter of Created Date Does not equal and Verify the Result for Invoices', () => {
    trans.filterNotequalCDateInvoice()
})
And('Click on filter of Created Date Before and Verify the Result for Invoices', () => {
    trans.filterBeforeCDateInvoice()
})
And('Click on filter of Created Date After and Verify the Result for Invoices', () => {
    trans.filterAfterCDateInvoice()
})
And('Click on filter of Created Date Between and Verify the Result for Invoices', () => {
    trans.filterBetweenCDateInvoice()
})
And('Click on filter of Created Date Blank and Verify the Result for Invoices', () => {
    trans.filterBlankCDateInvoice()
})
And('Click on filter of Created Date Not blank and Verify the Result for Invoices', () => {
    trans.filterNotblankCDateInvoice()
})
And('Click on filter of Updated Date Equals and Verify the Result', () => {
    trans.filterEqualsUpdatedDate()
})
And('Click on filter of Updated Date Does not equal and Verify the Result', () => {
    trans.filterNotequalUpdatedDate()
})
And('Click on filter of Updated Date Before and Verify the Result', () => {
    trans.filterBeforeUpdatedDate()
})
And('Click on filter of Updated Date After and Verify the Result', () => {
    trans.filterAfterUpdatedDate()
})
And('Click on filter of Updated Date Between and Verify the Result', () => {
    trans.filterBetweenUpdatedDate()
})
And('Click on filter of Updated Date Blank and Verify the Result', () => {
    trans.filterBlankUpdatedDate()
})
And('Click on filter of Updated Date Not blank and Verify the Result', () => {
    trans.filterNotblankUpdatedDate()
})
And('Click on filter of Shipping Address contain and Verify the Result', () => {
    trans.filtercontainSAddress()
})
And('Click on filter of Shipping Address Does not contain and Verify the Result', () => {
    trans.filterDoesnotcontainSAddress()
})
And('Click on filter of Shipping Address Equals and Verify the Result', () => {
    trans.filterEqualsSAddress()
})
And('Click on filter of Shipping Address Does not equal and Verify the Result', () => {
    trans.filterNotequalSAddress()
})
And('Click on filter of Shipping Address Begins with and Verify the Result', () => {
    trans.filterBeginswithSAddress()
})
And('Click on filter of Shipping Address Ends with and Verify the Result', () => {
    trans.filterEndswithSAddress()
})
And('Click on filter of Shipping Address Blank and Verify the Result', () => {
    trans.filterBlankSAddress()
})
And('Click on filter of Shipping Address Not blank and Verify the Result', () => {
    trans.filterNotblankSAddress()
})
And('Click on Sort Ascending and Descending for Invoice Id and Verify the Result', () => {
    trans.sortingOrderTotal()
})
And('Click on Sort Ascending and Descending for Order Id and Verify the Result', () => {
    trans.sortingOrderID()
})
And('Click on Sort Ascending and Descending for PO Number and Verify the Result', () => {
    trans.sortingPONumber()
})
And('Click on Sort Ascending and Descending for Created Date and Verify the Result for Invoice', () => {
    trans.sortingCreatedDateInvoice()
})
And('Click on Sort Ascending and Descending for Updated Date and Verify the Result', () => {
    trans.sortingUpdatedDate()
})
And('Click on Sort Ascending and Descending for Shipping Address and Verify the Result', () => {
    trans.sortingShippingAddress()
})