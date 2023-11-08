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
        dash.termsElement().click({ force: true })
    }
    clickOnManageDevices() {
        // dash.arrowElement().click({ force: true })
        dash.managedevicesElement().click({ force: true })
    }
    clickOnLoanerManagement() {
        dash.termsElement().click({ force: true })
        mdev.loanerManagementElement().click({ force: true })
    }
    tableVisible() {
        loan.tableElement().should('be.visible')
    }
    serachAvailableDevice() {
        cy.wait(3000)
        loan.searchElement().eq(2).clear({ force: true }).type(tdata.loanerManagement.serialno + '{enter}')
    }
    verifySerachAvailableDevice() {
        loan.tableElement().eq(2).find('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.loanerManagement.serialno)
    }
    clickOnAddtoLoanerPool() {
        loan.addloanerPoolElement().click({ force: true })
    }
    searchAvailable() {
        cy.wait(3000)
        loan.searchElement().eq(0).clear({ force: true }).type(tdata.loanerManagement.serialno + '{enter}')
    }
    verifySearchAvailable() {
        loan.tableElement().eq(0).find('tbody tr').eq(0).find('td').eq(2).should('contain', tdata.loanerManagement.serialno)
    }
    clickOnAddStudent() {
        loan.addstudentElement().contains("Add Student").click({ force: true })
    }
    enterFullname() {
        loan.studentNameElement().type(tdata.loanerManagement.fullname)
    }
    enterTitle() {
        loan.studentTitleElement().type(tdata.loanerManagement.title)
    }
    enterEmail() {
        loan.studentEmailElement().type(uniqueSeed + tdata.loanerManagement.email)
    }
    selectStatus() {
        loan.studentStatusElement().click({ force: true })
        cy.get(tdata.loanerManagement.status).click({ force: true })
    }
    selectBuilding() {
        loan.buildingElement().click({ force: true })
        cy.get(tdata.loanerManagement.building).click({ force: true })
    }
    selectStudent_id() {
        loan.studentElement().click({ force: true })

        //cy.get(tdata.loanerManagement.student_id).click({force:true})
        cy.get('.MuiList-root > [tabindex="0"]').eq(1).click('topRight', { force: true })

    }
    clickOnsubmitForm() {
        loan.submitbtnElement().click({ force: true })
    }
    verifyStudentAdded() {
        cy.wait(2000)
        dash.messageElement().should('contain', tdata.loanerManagement.stdcreatedmsg)
    }
    clickOnCheckOut() {
        cy.wait(2000)
        //  loan.tableElement().eq(0).find('tbody tr').eq(0).find('td').eq(4).contains("Check Out").click({force:true})
        loan.checkoutbtnElement().click({ force: true })
    }
    selectStudentName() {
        loan.studentElement().click({ force: true })
        cy.get(tdata.loanerManagement.studentname).click({ force: true })
    }
    clickOnSubmitbtn() {
        loan.submitbtnElement().click({ force: true })
    }
    serachCheckOut() {
        cy.wait(1000)
        loan.searchElement().eq(1).type(tdata.loanerManagement.serialno + '{enter}')
    }
    verifySerachCheckOut() {
        loan.tableElement().eq(1).find('tbody tr').eq(0).find('td').eq(2).should('contain', tdata.loanerManagement.serialno)
    }
    clickOnCheckIn() {
        //  loan.tableElement().eq(1).find('tbody tr').eq(0).find('td').eq(4).contains("Check In").click({force:true})
        loan.checkinbtnElement().click({ force: true })
    }
    enterNote() {
        loan.notesElement().type("Testing completed", { force: true })
    }
    clickOnSubmitNote() {
        loan.submitbtnElement().click({ force: true })
    }
    verifySerachAvailable() {
        loan.tableElement().eq(0).find('tbody tr').eq(0).find('td').eq(2).should('contain', tdata.loanerManagement.serialno)
    }
    clickOnRemoveFromPool() {
        loan.removeloanerPoolElement().click({ force: true })
    }

}
export default LoanerManagementActions 