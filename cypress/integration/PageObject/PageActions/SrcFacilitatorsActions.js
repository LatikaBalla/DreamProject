/// <reference types="cypress" />

const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const SrcFacilitatorsElements = require("../PageElements/SrcFacilitatorsElements.js")
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class SrcFacilitatorsActions {
    constructor() {
        globalThis.rep = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.sf = new SrcFacilitatorsElements();
        globalThis.mf1 = new StudentRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true })
      //  dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        rep.studentrcElement().click({ force: true })
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
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.fullName + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.srcFacilitators.fullName)
    }
    searchEmail(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.emaildropElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.emaildrop + '{enter}', { force: true })
        cy.get('tr td').eq(2).should('contain', tdata.srcFacilitators.emaildrop)
    }
    searchStatus(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.statusElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.status + '{enter}', { force: true })
        cy.get('tr td').eq(3).should('contain', tdata.srcFacilitators.status)
    }
    searchPhone(){
        sf.searchboxElement().eq(0).click({ force: true })
        sf.phoneNoElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.phoneNo1 + '{enter}', { force: true })
        cy.get('tr td').eq(4).should('contain', tdata.srcFacilitators.phoneNo2)
    }
    clickOnMoreFilter() {
        sf.addFilterElement().click({ force: true })
    }
    clickOnClearFilter() {
        sf.clearFilterElement().click({ force: true })
    }
    selectFilterFullname(){
        sf.fieldNameElement().select(0).invoke("val").should("eq", 'full_name',{force:true})
        sf.fieldOpElement().select('Does Not Contain',{force:true}).should('have.value', 'Does Not Contain')
        sf.fieldValueElement().type(tdata.srcFacilitators.fullName)
        sf.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.srcFacilitators.fullName)
    }
    selectFilterEmail(){
        sf.fieldNameElement().select(2).invoke("val").should("eq", "email")
        sf.fieldOpElement().select('Does Not Contain',{force:true})
        sf.fieldValueElement().type(tdata.srcFacilitators.emaildrop)
        sf.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', tdata.srcFacilitators.emaildrop)
    }
    selectFilterPhone(){
        sf.fieldNameElement().select('phone',{force:true})
        sf.fieldOpElement().select('Does Not Contain',{force:true})
        sf.fieldValueElement().type(tdata.srcFacilitators.phoneNo2)
        sf.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.srcFacilitators.phoneNo2)
    }
    selectFilterTitle(){
        sf.fieldNameElement().select('title',{force:true})
        sf.fieldOpElement().select('Does Not Contain',{force:true})
        sf.fieldValueElement().type(tdata.srcFacilitators.title)
        sf.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.srcFacilitators.title)
    }
    selectFilterUserStatus(){
        sf.fieldNameElement().select('user_status',{force:true})
        sf.fieldOpElement().select('Does Not Contain',{force:true})
        sf.fieldValueElement().type(tdata.srcFacilitators.status)
        sf.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.srcFacilitators.status)
    }
    selectFilterLastModifiedDate(){
        sf.fieldNameElement().select('last_modified_date',{force:true})
        sf.fieldOpElement().select('Contains',{force:true})
        sf.fieldValueElement().type(tdata.srcFacilitators.lastmodifieddate)
        sf.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('contain', tdata.srcFacilitators.lastmodifieddate)
    }
    clickOnExport() {
       sf.exportbtnElement().click({ force: true })
    }
}
export default SrcFacilitatorsActions 