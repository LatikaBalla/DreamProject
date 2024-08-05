/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const SrcStudentsElements = require("../PageElements/SrcStudentsElements.js")
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class SrcStudentsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.ss = new SrcStudentsElements();
        globalThis.mf1 = new StudentRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(3000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        mdev.studentrcElement().click({ force: true })
    }
    clickOnSrcStudentsTab() {
        mf1.srcStudentsElement().click({ force: true })
    }
    verifyTitle() {
        ss.titleElement().should('be.visible')
    }
    filtersVisible() {
        ss.filtersElement().should('be.visible')
    }
    tableVisible() {
        ss.tableElement().should('be.visible')
    }
    clickOnCreateNewStudent() {
        ss.addstudentElement().click({ force: true })
    }
    enterTitle() {
        ss.titlestudentElement().type(tdata.srcStudent.title)
    }
    enterFullname() {
        ss.fullnameElement().type(tdata.srcStudent.fullname)
    }
    enterEmail() {
        const uniqueSeed = Date.now();
        ss.emailElement().type(uniqueSeed + tdata.srcStudent.email)
    }
    enterPhone() {
        ss.phoneElement().type(tdata.srcStudent.phone)
    }
    enterCellNumber() {
        ss.cellnumberElement().type(tdata.srcStudent.cellnumber)
    }
    selectUserStatus() {
        ss.userstatusElement().click({ force: true })
        cy.get(tdata.srcStudent.userstatus).click({ force: true })
    }
    selectVivaNews() {
        ss.vivanewsElement().click({ force: true })
        cy.get(tdata.srcStudent.vivanews).click({ force: true })
    }
    selectProductUpdate() {
        ss.productupdateElement().click({ force: true })
        cy.get(tdata.srcStudent.productupdate).eq(1).click({ force: true })
    }
    selectViivaWeekly() {
        ss.vivaweeklyElement().click({ force: true })
        cy.get(tdata.srcStudent.vivaweekly).eq(1).click({ force: true })
    }
    selectBetaTester() {
        ss.betatesterElement().click({ force: true })
        cy.get(tdata.srcStudent.betatester).eq(1).click({ force: true })
    }
    selectUserNotification() {
        ss.usernotificationElement().click({ force: true })
        cy.get(tdata.srcStudent.usernotification).eq(1).click({ force: true })
    }
    selectInHouseRepair() {
        ss.inhouserepairElement().click({ force: true })
        cy.get(tdata.srcStudent.inhouserepair).eq(1).click({ force: true })
    }
    clickOnASubmitButton() {
        //  ss.submitElement().click({ force: true })
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click({ force: true })
    }
    verifyRecordTable() {
        cy.wait(1000)
        dash.messageElement().should('contain', tdata.srcStudent.createStudentmsg)
    }
    clickViewButtton() {

    }
    verifyStudentDetails() {
        cy.contains(tdata.srcStudent.fullname).should('be.visible')
    }
    clickOnExport() {
        ss.exportbtnElement().click({ force: true })
    }
    //fn
    filtercontainFN() {
        cy.wait(4000)
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(0).click({ force: true })
        ss.fieldValueElement().type(tdata.srcStudent.fullName)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.fullName)
        ss.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(1).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.fullName)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcStudent.fullName)
        ss.clearFilterElement().click({ force: true })
    }
    filterEqualsFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(2).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.fullName)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.fullName)
        ss.clearFilterElement().click({ force: true })
    }
    filterNotequalFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(3).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.fullName)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcStudent.fullName)
        ss.clearFilterElement().click({ force: true })
    }
    filterBeginswithFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(4).click({ force: true })
        ss.fieldValueElement().eq(0).type('Demo')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Demo')
        ss.clearFilterElement().click({ force: true })
    }
    filterEndswithFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(5).click({ force: true })
        ss.fieldValueElement().eq(0).type('Test')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Test')
        ss.clearFilterElement().click({ force: true })
    }
    filterBlankFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(6).click({ force: true })
        ss.fieldValueElement().eq(0).type(' ', { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        ss.clearFilterElement().click({ force: true })
    }
    filterNotblankFN() {
        ss.addFilterElement().eq(0).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(7).click({ force: true })
        ss.fieldValueElement().eq(1).type(tdata.srcStudent.fullName, { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.fullName)
        ss.clearFilterElement().click({ force: true })
    }
    //title
    filtercontainT() {
        cy.wait(2000)
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(0).click({ force: true })
        ss.fieldValueElement().type(tdata.srcStudent.title)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.title)
        ss.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(1).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.title)
        ss.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="title"]').should('not.contain', tdata.srcStudent.title)
        ss.clearFilterElement().click({ force: true })
    }
    filterEqualsT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(2).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.title)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.title)
        ss.clearFilterElement().click({ force: true })
    }
    filterNotequalT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(3).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.title)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcStudent.title)
        ss.clearFilterElement().click({ force: true })
    }
    filterBeginswithT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(4).click({ force: true })
        ss.fieldValueElement().eq(0).type('tea')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tea')
        ss.clearFilterElement().click({ force: true })
    }
    filterEndswithT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(5).click({ force: true })
        ss.fieldValueElement().eq(0).type('cher')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'cher')
        ss.clearFilterElement().click({ force: true })
    }
    filterBlankT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(6).click({ force: true })
        ss.fieldValueElement().eq(0).type(' ', { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        ss.clearFilterElement().click({ force: true })
    }
    filterNotblankT() {
        ss.addFilterElement().eq(1).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(7).click({ force: true })
        ss.fieldValueElement().eq(1).type(tdata.srcStudent.title, { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.title)
        ss.clearFilterElement().click({ force: true })
    }
    //email
    filtercontainE() {
        cy.wait(2000)
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(0).click({ force: true })
        ss.fieldValueElement().type(tdata.srcStudent.emailid)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.emailid)
        ss.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(1).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.emailid)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcStudent.emailid)
        ss.clearFilterElement().click({ force: true })
    }
    filterEqualsE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(2).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.emailid)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.emailid)
        ss.clearFilterElement().click({ force: true })
    }
    filterNotequalE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(3).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.emailid)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcStudent.emailid)
        ss.clearFilterElement().click({ force: true })
    }
    filterBeginswithE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(4).click({ force: true })
        ss.fieldValueElement().eq(0).type('admin')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'admin')
        ss.clearFilterElement().click({ force: true })
    }
    filterEndswithE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(5).click({ force: true })
        ss.fieldValueElement().eq(0).type('vivacitytech.com')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
        ss.clearFilterElement().click({ force: true })
    }
    filterBlankE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(6).click({ force: true })
        ss.fieldValueElement().eq(0).type(' ', { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        ss.clearFilterElement().click({ force: true })
    }
    filterNotblankE() {
        ss.addFilterElement().eq(2).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(7).click({ force: true })
        ss.fieldValueElement().eq(1).type(tdata.srcStudent.emailid, { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.emailid)
        ss.clearFilterElement().click({ force: true })
    }
    //phone
    filtercontainP() {
        cy.wait(2000)
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(0).click({ force: true })
        ss.fieldValueElement().type(tdata.srcStudent.phoneNo1)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.phoneNo2)
        ss.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(1).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.phoneNo1)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcStudent.phoneNo2)
        ss.clearFilterElement().click({ force: true })
    }
    filterEqualsP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(2).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.phoneNo1)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.phoneNo2)
        ss.clearFilterElement().click({ force: true })
    }
    filterNotequalP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(3).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.phoneNo1)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcStudent.phoneNo2)
        ss.clearFilterElement().click({ force: true })
    }
    filterBeginswithP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(4).click({ force: true })
        ss.fieldValueElement().eq(0).type('9999')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '(999)')
        ss.clearFilterElement().click({ force: true })
    }
    filterEndswithP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(5).click({ force: true })
        ss.fieldValueElement().eq(0).type('999')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '999')
        ss.clearFilterElement().click({ force: true })
    }
    filterBlankP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(6).click({ force: true })
        ss.fieldValueElement().eq(0).type(' ', { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        ss.clearFilterElement().click({ force: true })
    }
    filterNotblankP() {
        ss.addFilterElement().eq(4).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(7).click({ force: true })
        ss.fieldValueElement().eq(1).type(tdata.srcStudent.phoneNo1, { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.phoneNo2)
        ss.clearFilterElement().click({ force: true })
    }
    //us
    filtercontainUS() {
        cy.wait(2000)
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(0).click({ force: true })
        ss.fieldValueElement().type(tdata.srcStudent.userStatus)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.userStatus)
        ss.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(1).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.userStatus)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcStudent.userStatus)
        ss.clearFilterElement().click({ force: true })
    }
    filterEqualsUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(2).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.userStatus)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.userStatus)
        ss.clearFilterElement().click({ force: true })
    }
    filterNotequalUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(3).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.userStatus)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcStudent.userStatus)
        ss.clearFilterElement().click({ force: true })
    }
    filterBeginswithUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(4).click({ force: true })
        ss.fieldValueElement().eq(0).type('Ina')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Ina')
        ss.clearFilterElement().click({ force: true })
    }
    filterEndswithUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(5).click({ force: true })
        ss.fieldValueElement().eq(0).type('tive')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tive')
        ss.clearFilterElement().click({ force: true })
    }
    filterBlankUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(6).click({ force: true })
        ss.fieldValueElement().eq(0).type(' ', { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        ss.clearFilterElement().click({ force: true })
    }
    filterNotblankUS() {
        ss.addFilterElement().eq(3).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(7).click({ force: true })
        ss.fieldValueElement().eq(1).type(tdata.srcStudent.userStatus, { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.userStatus)
        ss.clearFilterElement().click({ force: true })
    }
    //UR
    filtercontainUR() {
        cy.wait(4000)
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(0).click({ force: true })
        ss.fieldValueElement().type(tdata.srcStudent.userRole)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.userRole)
        ss.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(1).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.userRole)
        ss.applyElement().click({ force: true })
        //    cy.get('[row-index="0"]').should('not.contain', tdata.srcStudent.userRole)
        ss.clearFilterElement().click({ force: true })
    }
    filterEqualsUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(2).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.userRole)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.userRole)
        ss.clearFilterElement().click({ force: true })
    }
    filterNotequalUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(3).click({ force: true })
        ss.fieldValueElement().eq(0).type(tdata.srcStudent.userRole)
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcStudent.userRole)
        ss.clearFilterElement().click({ force: true })
    }
    filterBeginswithUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(4).click({ force: true })
        ss.fieldValueElement().eq(0).type('Super')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Super')
        ss.clearFilterElement().click({ force: true })
    }
    filterEndswithUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(5).click({ force: true })
        ss.fieldValueElement().eq(0).type('dent')
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'dent')
        ss.clearFilterElement().click({ force: true })
    }
    filterBlankUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(6).click({ force: true })
        ss.fieldValueElement().eq(0).type(' ', { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        ss.clearFilterElement().click({ force: true })
    }
    filterNotblankUR() {
        ss.addFilterElement().eq(5).click({ force: true })
        ss.fieldNameElement().eq(1).click({ force: true })
        ss.fieldOpElement().eq(7).click({ force: true })
        ss.fieldValueElement().eq(1).type(tdata.srcStudent.userRole, { force: true })
        ss.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcStudent.userRole)
        ss.clearFilterElement().click({ force: true })
    }
}
export default SrcStudentsActions 