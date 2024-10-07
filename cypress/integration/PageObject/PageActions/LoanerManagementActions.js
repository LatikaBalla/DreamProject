/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const LoanerManagementElements = require("../PageElements/LoanerManagementElements.js")
const tdata = require("../../../testData.json");
const uniqueSeed = Date.now();
export class LoanerManagementActions {
    constructor() {
        globalThis.mdev = new ManageDevicesElements();
        globalThis.dash = new DashboardElements();
        globalThis.loan = new LoanerManagementElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(5000)
   dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(1000)
    }
    clickOnManageDevices() {
        dash.managedevicesElement().click({ force: true })
    }
    clickOnLoanerManagement() {
        mdev.loanerManagementElement().click({ force: true })
    }
    verifyTitle() {
        loan.titleElement().should('be.visible')
    }
    clickOnAddStudent() {
        loan.addstudentElement().click({ force: true })
    }
    enterFullname() {
        loan.studentNameElement().type(tdata.loanerManagement.fullname, { force: true })
    }
    enterTitle() {
        loan.studentTitleElement().type(tdata.loanerManagement.title, { force: true })
    }
    enterEmail() {
        loan.studentEmailElement().type(uniqueSeed + tdata.loanerManagement.email, { force: true })
    }
    selectStatus() {
        loan.studentStatusElement().click({ force: true })
        cy.get(tdata.loanerManagement.status).click({ force: true })
    }
    selectBuilding() {
        loan.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectStudent_id() {
        loan.studentElement().type('abc', { force: true })
    }
    clickOnsubmitForm() {
        loan.submitbtnElement().contains('Submit').click({ force: true })
    }
    verifyStudentAdded() {
        cy.wait(2000)
        dash.messageElement().should('contain', tdata.loanerManagement.stdcreatedmsg)
    }
    ///
    clickOnDeviceIcon() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.serialno)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(1).should('contain', tdata.loanerManagement.serialno)
        cy.wait(1000)
        loan.deviceIconElement().eq(1).click({ force: true })
    }
    clickOnCheckOut() {
        loan.checkoutbtnElement().click({ force: true })
    }
    selectStudentName() {
        loan.studentElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.loanerManagement.studentname).click({ force: true })
    }
    selectDate() {
        loan.datepickerElement().type(tdata.loanerManagement.date)
    }
    enterCheckoutText() {
        loan.checkoutdesElement().type(tdata.loanerManagement.checkoutdes)
    }
    clickOnSubmitbtn() {
        loan.submitbtnElement().contains('Submit').click({ force: true })
        dash.messageElement().should('contain', 'Check-out successful')
    }
    clickOnCheckOutTab() {
        loan.checkoutTabElement().click({ force: true })
        cy.wait(1000)
    }
    clickOnCheckIn() {
        loan.checkinbtnElement().click({ force: true })
    }
    enterNote() {
        loan.notesElement().type("Testing completed", { force: true })
    }
    enterCheckIndes() {
        loan.checkindesElement().type(tdata.loanerManagement.checkindes)
    }
    clickOnSubmitNote() {
        loan.submitbtnElement().contains('Submit').click({ force: true })
        dash.messageElement().should('contain', 'Check-in successful')
    }
    verifySerachAvailable() {
        loan.checkinTabElement().click({ force: true })
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.serialno)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(1).should('contain', tdata.loanerManagement.serialno)
    }
    clickOnDeviceIconViewT() {
        loan.deviceIconElement().eq(1).click({ force: true })
    }
    clickOnViewDetails() {
        loan.viewDetailsElement().click({ force: true })
    }
    verifyViewDetails() {
        cy.contains('General Device Information').should('be.visible')
        cy.go('back')
    }
    clickOnDeviceIconViewHistory() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().clear().type(tdata.loanerManagement.serialno2)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.serialno2)
        loan.deviceIconElement().eq(1).click({ force: true })
    }
    clickOnViewHistory() {
        loan.viewHistoryElement().click({ force: true })
    }
    verifyViewHistory() {
        cy.contains('Device History').should('be.visible')
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    //PD-A
    filtercontainPD_A() {
        cy.wait(2000)
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('not.contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('not.contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('Dell')
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('contain', 'Dell')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('book')
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('contain', 'book')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankPD_A() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.device, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="device"]').eq(0).should('contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    //SKU-A
    filtercontainSKU_A() {
        cy.wait(2000)
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('VT')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'VT')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('ric')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'ric')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankSKU_A() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.sku, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    //warranty-A
    filtercontainW_A() {
        cy.wait(2000)
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('TE')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'TE')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('NTY')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'NTY')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankW_A() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.warranty, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    //s-A
    filtercontainS_A() {
        cy.wait(2000)
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.serialno1)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.serialno1)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno1)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.serialno1)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno1)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.serialno1)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno1)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.serialno1)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('VIV')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'VIV')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('Test')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'Test')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankS_A() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.serialno1, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.serialno1)
        loan.clearFilterElement().click({ force: true })
    }
    //tag-A
    filtercontainTag_A() {
        cy.wait(2000)
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('not.contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('67')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', '67')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('TY')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', 'TY')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankTag_A() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.assettag, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(0).should('contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    //PD-C
    filtercontainPD_C() {
        cy.wait(4000)
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.device)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('HP')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'HP')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('book')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'book')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankPD_C() {
        loan.addFilterElement().eq(0).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.device, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.device)
        loan.clearFilterElement().click({ force: true })
    }
    //SKU-C
    filtercontainSKU_C() {
        cy.wait(2000)
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.sku)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('VT-')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VT-')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('SMB')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'SMB')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankSKU_C() {
        loan.addFilterElement().eq(1).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.sku, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.sku)
        loan.clearFilterElement().click({ force: true })
    }
    //warranty-C
    filtercontainW_C() {
        cy.wait(2000)
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.warranty)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('TEST')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'TEST')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('NTY')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'NTY')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankW_C() {
        loan.addFilterElement().eq(4).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.warranty, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.warranty)
        loan.clearFilterElement().click({ force: true })
    }
    //s-c
    filtercontainS_C() {
        cy.wait(2000)
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.serialno2)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.serialno2)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno2)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.serialno2)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno2)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.serialno2)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno2)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.serialno2)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('VIV')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIV')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('Test')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Test')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankS_C() {
        loan.addFilterElement().eq(2).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.serialno2, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.serialno2)
        loan.clearFilterElement().click({ force: true })
    }
    //tag-c
    filtercontainTag_C() {
        cy.wait(2000)
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(0).click({ force: true })
        loan.fieldValueElement().type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(1).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterEqualsTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(2).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterNotequalTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(3).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.assettag)
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
    filterBeginswithTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(4).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('123')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '123')
        loan.clearFilterElement().click({ force: true })
    }
    filterEndswithTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(5).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type('rick')
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'rick')
        loan.clearFilterElement().click({ force: true })
    }
    filterBlankTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(6).click({ force: true })
        loan.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        loan.clearFilterElement().click({ force: true })
    }
    filterNotblankTag_C() {
        loan.addFilterElement().eq(3).click({ force: true })
        loan.fieldNameElement().eq(1).click({ force: true })
        loan.fieldOpElement().eq(7).click({ force: true })
        loan.fieldValueElement().eq(1).type(tdata.loanerManagement.assettag, { force: true })
        loan.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.loanerManagement.assettag)
        loan.clearFilterElement().click({ force: true })
    }
}
export default LoanerManagementActions 