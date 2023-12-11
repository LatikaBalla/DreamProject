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
        dash.termsElement().click({ force: true })
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
        ss.submitElement().click({ force: true })
        cy.get('[type="button"]').contains('Cancel').click({ force: true })
    }
    verifyRecordTable() {
        // cy.get('[data-testid="CachedIcon"]').click()
        cy.wait(3000)
        dash.messageElement().should('contain', tdata.srcStudent.createStudentmsg)
        //cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.srcStudent.fullname)
    }
    clickViewButtton() {
        cy.get('tbody tr').eq(0).find('td').eq(4).contains('View').click({ force: true })
    }
    verifyStudentDetails() {
        cy.contains(tdata.srcStudent.fullname).should('be.visible')
    }
    searchFullName(){
        ss.searchboxElement().eq(0).click({ force: true })
        ss.fullNameElement().click({ force: true })
        ss.searchElement().clear().type(tdata.srcStudent.fullName + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.srcStudent.fullName)
    }
    searchEmail(){
        ss.searchboxElement().eq(0).click({ force: true })
        ss.emaildropElement().click({ force: true })
        ss.searchElement().clear().type(tdata.srcStudent.emaildrop + '{enter}', { force: true })
        cy.get('tr td').eq(2).should('contain', tdata.srcStudent.emaildrop)
    }
    searchStatus(){
        ss.searchboxElement().eq(0).click({ force: true })
        ss.statusElement().click({ force: true })
        ss.searchElement().clear().type(tdata.srcStudent.status + '{enter}', { force: true })
        cy.get('tr td').eq(3).should('contain', tdata.srcStudent.status)
    }
    searchPhone(){
        ss.searchboxElement().eq(0).click({ force: true })
        ss.phoneNoElement().click({ force: true })
        ss.searchElement().clear().type(tdata.srcStudent.phoneNo1 + '{enter}', { force: true })
        cy.get('tr td').eq(4).should('contain', tdata.srcStudent.phoneNo2)
    }

}
export default SrcStudentsActions 