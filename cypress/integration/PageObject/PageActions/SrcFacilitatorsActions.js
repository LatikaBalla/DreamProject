/// <reference types="cypress" />

const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const SrcFacilitatorsElements = require("../PageElements/SrcFacilitatorsElements.js")
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class SrcFacilitatorsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.sf = new SrcFacilitatorsElements();
        globalThis.mf1 = new StudentRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        // dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        mdev.studentrcElement().click({ force: true })
    }
    clickOnSrcFacilitatorsTab() {
        mf1.srcFacilitatorsElement().click({ force: true })
    }
    verifyTitle() {
        sf.titleElement().should('be.visible')
    }
    filtersVisible() {
        sf.filtersElement().should('be.visible')
    }
    tableVisible() {
        sf.tableElement().should('be.visible')
    }
    clickOnViewButton() {
        cy.wait(2000)
        cy.get('tbody tr').eq(0).find('td').eq(4).contains("View").click({ force: true })
    }
    verifyViewDetails() {
        sf.detailsRoleElement()
    }
    searchFullName(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.fullNameElement().click({ force: true })
        sf.searchElement().clear().type(tdata.srcFacilitators.fullName + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.srcFacilitators.fullName)
    }
    searchEmail(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.emaildropElement().click({ force: true })
        sf.searchElement().clear().type(tdata.srcFacilitators.emaildrop + '{enter}', { force: true })
        cy.get('tr td').eq(2).should('contain', tdata.srcFacilitators.emaildrop)
    }
    searchStatus(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.statusElement().click({ force: true })
        sf.searchElement().clear().type(tdata.srcFacilitators.status + '{enter}', { force: true })
        cy.get('tr td').eq(3).should('contain', tdata.srcFacilitators.status)
    }
    searchPhone(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.phoneNoElement().click({ force: true })
        sf.searchElement().clear().type(tdata.srcFacilitators.phoneNo1 + '{enter}', { force: true })
        cy.get('tr td').eq(4).should('contain', tdata.srcFacilitators.phoneNo2)
    }
}
export default SrcFacilitatorsActions 