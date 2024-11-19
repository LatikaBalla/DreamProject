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
    titleVisible(){
        trans.titleElement()
    }
    estimateTabVisible(){
        trans.estimatesElement().should('be.visible')
    }
    quotesTabVisible(){
        trans.quotesElement().should('be.visible')
    }
    orderTabVisible(){
        trans.ordersElement().should('be.visible')
    }
    invoicesTabVisible(){
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
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        trans.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="created_date"]').should('contain', tdata.repairTickets.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.createdDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankCDate() {
        trans.addFilterElement().eq(3).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.repairTickets.createdDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdDate1)
        trans.clearFilterElement().click({ force: true })
    }
    //Ldate
    filterEqualsLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterNotequalLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.lastModifiedDate1)
        trans.clearFilterElement().click({ force: true })
    }
    filterBeforeLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterAfterLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBetweenLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate2, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate)
        trans.applyElement().click({ force: true })
        trans.clearFilterElement().click({ force: true })
    }
    filterBlankLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        trans.clearFilterElement().click({ force: true })
    }
    filterNotblankLDate() {
        trans.addFilterElement().eq(4).click({ force: true })
        trans.fieldNameElement().eq(1).click({ force: true })
        trans.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.repairTickets.lastModifiedDate, { force: true })
        trans.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
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
}
export default TransactionsActions