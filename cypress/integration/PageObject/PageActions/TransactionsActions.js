/// <reference types="cypress" />
const TransactionsElements = require("../PageElements/TransactionsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
const uniqueSeed = Date.now();
export class TransactionsActions {
    constructor() {
        globalThis.trans = new TransactionsElements();
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(2000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(2000)
    }
    clickOnTransactions() {
        dash.transactionsElement().click({ force: true })
    }
    clickOnQuotes() {
        trans.quotesElement().click({ force: true })
    }
    clickOnOrders() {
        trans.ordersElement().click({ force: true })
    }
    clickOnInvoices() {
        trans.invoicesElement().click({ force: true })
    }
    titleVisible() {
        trans.titleElement().should('be.visible')
    }
    estimateTabVisible() {
        trans.estimatesElement().should('be.visible')
    }
    quotesTabVisible() {
        trans.quotesElement().should('be.visible')
    }
    orderTabVisible() {
        trans.ordersElement().should('be.visible')
    }
    invoicesTabVisible() {
        trans.invoicesElement().should('be.visible')
    }
    filtercontainTN() {
        cy.wait(2000)
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.ticketnumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.ticketnumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.ticketnumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.ticketnumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.ticketnumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.ticketnumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.ticketnumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.ticketnumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('V00')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V00')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('459')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '459')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankTN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.ticketnumber, { force: true })
        trans.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.transactions.ticketnumber)
        trans.clearFilterElement().click({ force: true })
    }
    //RT
    filtercontainSN() {
        cy.wait(2000)
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.serialNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.serialNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.serialNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.serialNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.serialNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.serialNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.serialNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.serialNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('VIVA')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVA')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('Test')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Test')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankSN() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.serialNumber, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.serialNumber)
        trans.clearFilterElement().click({ force: true })
    }
    //RT
    filterRepairTypeOp1() {
        cy.wait(1000)
        trans.addFilterElement().eq(1).click({ force: true })
        cy.get('[value="In House"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_type"]').should('contain', 'In House')
        cy.get('.reset-button').click({ force: true })
    }
    filterRepairTypeOp2() {
        cy.wait(1000)
        trans.addFilterElement().eq(1).click({ force: true })
        cy.get('[value="Student"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_type"]').should('contain', 'Student')
        cy.get('.reset-button').click({ force: true })
    }
    filterRepairTypeOp3() {
        cy.wait(1000)
        trans.addFilterElement().eq(1).click({ force: true })
        cy.get('[value="Vivacity"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_type"]').should('contain', 'Vivacity')
        cy.get('.reset-button').click({ force: true })
    }
    //us
    filterURop1() {
        cy.wait(1000)
        trans.addFilterElement().eq(2).click({ force: true })
        cy.get('[value="Pending Repair Box"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_status"]').should('contain', 'Pending Repair Box')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop2() {
        trans.addFilterElement().eq(2).click({ force: true })
        cy.get('[value="Intake"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_status"]').should('contain', 'Intake')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop3() {
        trans.addFilterElement().eq(2).click({ force: true })
        cy.get('[value="Box Created"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_status"]').should('contain', 'Box Created')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop4() {
        trans.addFilterElement().eq(2).click({ force: true })
        cy.get('[value="Quality Assurance"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_status"]').should('contain', 'Quality Assurance')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop5() {
        trans.addFilterElement().eq(2).click({ force: true })
        cy.get('[value="Waiting on Repair Approval"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_status"]').should('contain', 'Waiting on Repair Approval')
        cy.get('.reset-button').click({ force: true })
    }
    //Cdate
    filterEqualsCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="created_date"]').should('contain', tdata.transactions.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.createdDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    //Ldate
    filterEqualsLDate() {
        cy.wait(1000)
        trans.addFilterElement().eq(4).scrollIntoView().click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.lastModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.lastModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDate2, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.lastModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.lastModifiedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.lastModifiedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.lastModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    //sotransing
    sortingTicketNumber() {
        cy.wait(1000)
        trans.optionElement().eq(1).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingSerialNumber() {
        cy.wait(1000)
        trans.optionElement().eq(2).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingRepairType() {
        cy.wait(1000)
        trans.optionElement().eq(2).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingRepairStatus() {
        cy.wait(1000)
        trans.optionElement().eq(3).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingCreatedDate() {
        cy.wait(1000)
        trans.optionElement().eq(4).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingLastModifiedDate() {
        cy.wait(1000)
        trans.optionElement().eq(5).scrollIntoView().click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(5).scrollIntoView().click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(5).scrollIntoView().click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    // Quotes
    filtercontainQN() {
        cy.wait(2000)
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.quoteNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.quoteNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.quoteNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('2')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '2')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('0')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '0')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankQN() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.quoteNumber, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="created_date"]').should('contain', tdata.transactions.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateeQuotes)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDateeQuotes, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankEDateQuotes() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.createdDateQuotes, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateQuotes)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateQuotes)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.createdDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateQuotes)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateQuotes)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateQuotes)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDateQuotes, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankCDateQuotes() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.createdDateQuotes, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsLDateQuotes() {
        cy.wait(1000)
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDateQuotes)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.lastModifiedDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalLDateQuotes() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDateQuotes)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.lastModifiedDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeLDateQuotes() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDateQuotes)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterLDateQuotes() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDateQuotes)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenLDateQuotes() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.lastModifiedDateQuotes, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.lastModifiedDateQuotes)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankLDateQuotes() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.lastModifiedDateQuotes, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankLDateQuotes() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.lastModifiedDateQuotes, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.lastModifiedDate1Quotes)
        trans.clearFilterElement().click({ force: true })
    }
    sortingQuoteNumber() {
        cy.wait(1000)
        trans.optionElement().eq(1).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingExpirationDate() {
        cy.wait(1000)
        trans.optionElement().eq(2).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingCDate() {
        cy.wait(1000)
        trans.optionElement().eq(3).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingLDate() {
        cy.wait(1000)
        trans.optionElement().eq(4).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    //Orders
    filtercontainQT() {
        cy.wait(2000)
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.quoteTotal)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteTotal)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteTotal)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.quoteTotal)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteTotal)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteTotal)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteTotal)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.quoteTotal)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('16')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '16')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('83')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '83')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankQT() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.quoteTotal, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteTotal)
        trans.clearFilterElement().click({ force: true })
    }
    //Location
    filtercontainLocation() {
        cy.wait(2000)
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.location)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.location)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.location)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.location)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteTotal)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteTotal)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.location)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.location)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('New')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'New')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('ork')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ork')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankLocation() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.location, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.location)
        trans.clearFilterElement().click({ force: true })
    }
    //QId
    filtercontainQId() {
        cy.wait(2000)
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.quoteId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteId)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.quoteId)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteId)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.quoteId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.quoteId)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('1')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '1')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('0')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '0')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankQId() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.quoteId, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.quoteId)
        trans.clearFilterElement().click({ force: true })
    }
    //Customer PO Number
    filtercontainCPONumber() {
        cy.wait(2000)
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.CPONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.CPONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.CPONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.CPONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.CPONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.CPONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.CPONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.CPONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('PO')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'PO')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('911')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '911')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankCPONumber() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.CPONumber, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.CPONumber)
        trans.clearFilterElement().click({ force: true })
    }
    //Ticket Number
    filtercontainTNumber() {
        cy.wait(2000)
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.trackingNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.trackingNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.trackingNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.trackingNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.trackingNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.trackingNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.trackingNumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.trackingNumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('TN')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'TN')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('891')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '891')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankTNumber() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.trackingNumber, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.trackingNumber)
        trans.clearFilterElement().click({ force: true })
    }
    //Created Date
    filterEqualsCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Order)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.createdDate1Order)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDateOrder, { force: true })
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDateOrder, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankCDateOrder() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.createdDateOrder, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Order)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsModifiedDate() {
        cy.wait(1000)
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.ModifiedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.ModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalModifiedDate() {
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.ModifiedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.ModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeModifiedDate() {
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.ModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterModifiedDate() {
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.ModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenModifiedDate() {
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.ModifiedDate, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.ModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankModifiedDate() {
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.ModifiedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankModifiedDate() {
        trans.addFilterElement().eq(6).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.ModifiedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.ModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    sortingOrderTotal() {
        cy.wait(1000)
        trans.optionElement().eq(1).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingLocation() {
        cy.wait(1000)
        trans.optionElement().eq(2).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingQuoteID() {
        cy.wait(1000)
        trans.optionElement().eq(3).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingCustomerPONumber() {
        cy.wait(1000)
        trans.optionElement().eq(4).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingTrackingNumber() {
        cy.wait(1000)
        trans.optionElement().eq(5).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(5).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(5).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingCreatedDateOrder() {
        cy.wait(1000)
        trans.optionElement().eq(6).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(6).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(6).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingModifiedDate() {
        cy.wait(1000)
        trans.optionElement().eq(7).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(7).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(7).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    //Invoice
    filtercontainInId() {
        cy.wait(2000)
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.invoiceId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.invoiceId)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.invoiceId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.invoiceId)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.invoiceId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.invoiceId)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.invoiceId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.invoiceId)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('VIVA')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVA')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('456')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '456')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankInId() {
        trans.addFilterElement().eq(0).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.invoiceId, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.invoiceId)
        trans.clearFilterElement().click({ force: true })
    }
    filtercontainOId() {
        cy.wait(2000)
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.orderId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.orderId)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.orderId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.orderId)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.orderId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.orderId)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.orderId)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.orderId)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('VIVA')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVA')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('456')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '456')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankOId() {
        trans.addFilterElement().eq(1).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.orderId, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.orderId)
        trans.clearFilterElement().click({ force: true })
    }
    filtercontainPONumber() {
        cy.wait(2000)
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.PONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.PONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.PONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.PONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.PONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.PONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.PONumber)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.PONumber)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('PO')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'PO')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('910')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '910')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankPONumber() {
        trans.addFilterElement().eq(2).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.PONumber, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.PONumber)
        trans.clearFilterElement().click({ force: true })
    }
    //Created Date
    filterEqualsCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Order)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.createdDate1Order)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.createdDateOrder)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDateOrder, { force: true })
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.createdDateOrder, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankCDateInvoice() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.createdDateOrder, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.createdDate1Order)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsUpdatedDate() {
        cy.wait(1000)
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.UpdatedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.UpdatedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalUpdatedDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.UpdatedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.UpdatedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeUpdatedDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.UpdatedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterUpdatedDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.UpdatedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenUpdatedDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.transactions.UpdatedDate, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.UpdatedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankUpdatedDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.transactions.UpdatedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankUpdatedDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.transactions.UpdatedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.UpdatedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filtercontainSAddress() {
        cy.wait(2000)
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        trans.fieldValueElement().type(tdata.transactions.SAddress)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.SAddress)
        trans.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.SAddress)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.transactions.SAddress)
        trans.clearFilterElement().click({ force: true })
    }
    filterEqualsSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.SAddress)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.SAddress)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        trans.fieldValueElement().eq(0).type(tdata.transactions.SAddress)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.transactions.SAddress)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeginswithSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        trans.fieldValueElement().eq(0).type('123')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '123')
        trans.clearFilterElement().click({ force: true })
    }
    filterEndswithSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        trans.fieldValueElement().eq(0).type('NY')
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'NY')
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        trans.fieldValueElement().eq(0).type(' ', { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankSAddress() {
        trans.addFilterElement().eq(5).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(7).click({ force: true })
        trans.fieldValueElement().eq(1).type(tdata.transactions.SAddress, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.transactions.SAddress)
        trans.clearFilterElement().click({ force: true })
    }
    sortingOrderTotal() {
        cy.wait(1000)
        trans.optionElement().eq(1).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(1).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingOrderID() {
        cy.wait(1000)
        trans.optionElement().eq(2).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(2).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingPONumber() {
        cy.wait(1000)
        trans.optionElement().eq(3).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(3).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingCreatedDateInvoice() {
        cy.wait(1000)
        trans.optionElement().eq(4).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(4).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingUpdatedDate() {
        cy.wait(1000)
        trans.optionElement().eq(5).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(5).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(5).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
    sortingShippingAddress() {
        cy.wait(1000)
        trans.optionElement().eq(6).click({ force: true })
        trans.sortAscendingElement().click({ force: true })
        trans.optionElement().eq(6).click({ force: true })
        trans.sortDescendingElement().click({ force: true })
        trans.optionElement().eq(6).click({ force: true })
        trans.clearSortElement().click({ force: true })
    }
}
export default TransactionsActions