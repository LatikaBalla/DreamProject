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
        cy.wait(6000)
        dash.termsElement().contains('Dismiss').click({ force: true })
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
        cy.window().then(win => {
            // win.open('https://google.com', '_blank');
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/ticket-detail/" + tdata.repairTickets.recordid)
    }
    verifyViewDetails() {
        sf.detailsRoleElement()
    }
    searchFullName() {
        sf.searchboxElement().eq(0).click({ force: true })
        sf.fullNameElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.fullName + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.srcFacilitators.fullName)
    }
    searchEmail() {
        sf.searchboxElement().eq(0).click({ force: true })
        sf.emaildropElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.emaildrop + '{enter}', { force: true })
        cy.get('tr td').eq(2).should('contain', tdata.srcFacilitators.emaildrop)
    }
    searchStatus() {
        sf.searchboxElement().eq(0).click({ force: true })
        sf.statusElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.status + '{enter}', { force: true })
        cy.get('tr td').eq(3).should('contain', tdata.srcFacilitators.status)
    }
    searchPhone() {
        sf.searchboxElement().eq(0).click({ force: true })
        sf.phoneNoElement().click({ force: true })
        sf.searchElement().clear({ force: true }).type(tdata.srcFacilitators.phoneNo1 + '{enter}', { force: true })
        cy.get('tr td').eq(4).should('contain', tdata.srcFacilitators.phoneNo2)
    }
    clickOnExport() {
        sf.exportbtnElement().click({ force: true })
    }
    //fn
    filtercontainFN() {
        cy.wait(3000)
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(0).click({ force: true })
        sf.fieldValueElement().type(tdata.srcFacilitators.fullName)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.fullName)
        sf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(1).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.fullName)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcFacilitators.fullName)
        sf.clearFilterElement().click({ force: true })
    }
    filterEqualsFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(2).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.fullName)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.fullName)
        sf.clearFilterElement().click({ force: true })
    }
    filterNotequalFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.fullName)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcFacilitators.fullName)
        sf.clearFilterElement().click({ force: true })
    }
    filterBeginswithFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(4).click({ force: true })
        sf.fieldValueElement().eq(0).type('Crystal')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Crystal')
        sf.clearFilterElement().click({ force: true })
    }
    filterEndswithFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(5).click({ force: true })
        sf.fieldValueElement().eq(0).type('Smith')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Smith')
        sf.clearFilterElement().click({ force: true })
    }
    filterBlankFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(6).click({ force: true })
        sf.fieldValueElement().eq(0).type(' ', { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        sf.clearFilterElement().click({ force: true })
    }
    filterNotblankFN() {
        sf.addFilterElement().eq(0).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(7).click({ force: true })
        sf.fieldValueElement().eq(1).type(tdata.srcFacilitators.fullName, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.fullName)
        sf.clearFilterElement().click({ force: true })
    }
    //title
    filtercontainT() {
        cy.wait(2000)
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(0).click({ force: true })
        sf.fieldValueElement().type(tdata.srcFacilitators.title)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.title)
        sf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(1).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.title)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcFacilitators.title)
        sf.clearFilterElement().click({ force: true })
    }
    filterEqualsT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(2).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.title)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.title)
        sf.clearFilterElement().click({ force: true })
    }
    filterNotequalT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.title)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcFacilitators.title)
        sf.clearFilterElement().click({ force: true })
    }
    filterBeginswithT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(4).click({ force: true })
        sf.fieldValueElement().eq(0).type('imp')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'imp')
        sf.clearFilterElement().click({ force: true })
    }
    filterEndswithT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(5).click({ force: true })
        sf.fieldValueElement().eq(0).type('tant')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tant')
        sf.clearFilterElement().click({ force: true })
    }
    filterBlankT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(6).click({ force: true })
        sf.fieldValueElement().eq(0).type(' ', { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        sf.clearFilterElement().click({ force: true })
    }
    filterNotblankT() {
        sf.addFilterElement().eq(1).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(7).click({ force: true })
        sf.fieldValueElement().eq(1).type(tdata.srcFacilitators.title, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.title)
        sf.clearFilterElement().click({ force: true })
    }
    //email
    filtercontainE() {
        cy.wait(3000)
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(0).click({ force: true })
        sf.fieldValueElement().type(tdata.srcFacilitators.emailid ,{ force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.emailid)
        sf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(1).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.emailid, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcFacilitators.emailid)
        sf.clearFilterElement().click({ force: true })
    }
    filterEqualsE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(2).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.emailid, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.emailid)
        sf.clearFilterElement().click({ force: true })
    }
    filterNotequalE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.emailid, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcFacilitators.emailid)
        sf.clearFilterElement().click({ force: true })
    }
    filterBeginswithE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(4).click({ force: true })
        sf.fieldValueElement().eq(0).type('sd')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'sd')
        sf.clearFilterElement().click({ force: true })
    }
    filterEndswithE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(5).click({ force: true })
        sf.fieldValueElement().eq(0).type('example.com', { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'example.com')
        sf.clearFilterElement().click({ force: true })
    }
    filterBlankE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(6).click({ force: true })
        sf.fieldValueElement().eq(0).type(' ', { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        sf.clearFilterElement().click({ force: true })
    }
    filterNotblankE() {
        sf.addFilterElement().eq(2).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(7).click({ force: true })
        sf.fieldValueElement().eq(1).type(tdata.srcFacilitators.emailid, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.emailid)
        sf.clearFilterElement().click({ force: true })
    }
    //phone
    filtercontainP() {
        cy.wait(3000)
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(0).click({ force: true })
        sf.fieldValueElement().type(tdata.srcFacilitators.phoneNo1)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.phoneNo2)
        sf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(1).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.phoneNo1)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcFacilitators.phoneNo2)
        sf.clearFilterElement().click({ force: true })
    }
    filterEqualsP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(2).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.phoneNo1)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.phoneNo2)
        sf.clearFilterElement().click({ force: true })
    }
    filterNotequalP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.phoneNo1)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcFacilitators.phoneNo2)
        sf.clearFilterElement().click({ force: true })
    }
    filterBeginswithP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(4).click({ force: true })
        sf.fieldValueElement().eq(0).type('814')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '(814)')
        sf.clearFilterElement().click({ force: true })
    }
    filterEndswithP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(5).click({ force: true })
        sf.fieldValueElement().eq(0).type('463')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '4-63')
        sf.clearFilterElement().click({ force: true })
    }
    filterBlankP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(6).click({ force: true })
        sf.fieldValueElement().eq(0).type(' ', { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        sf.clearFilterElement().click({ force: true })
    }
    filterNotblankP() {
        sf.addFilterElement().eq(4).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(7).click({ force: true })
        sf.fieldValueElement().eq(1).type(tdata.srcFacilitators.phoneNo1, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.phoneNo2)
        sf.clearFilterElement().click({ force: true })
    }
    //us
    filtercontainUS() {
        cy.wait(2000)
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(0).click({ force: true })
        sf.fieldValueElement().type(tdata.srcFacilitators.userStatus)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.userStatus)
        sf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(1).click({ force: true })
        sf.fieldValueElement().eq(0).type('Inactive')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', 'Inactive')
        sf.clearFilterElement().click({ force: true })
    }
    filterEqualsUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(2).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.userStatus)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.userStatus)
        sf.clearFilterElement().click({ force: true })
    }
    filterNotequalUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        sf.fieldValueElement().eq(0).type(tdata.srcFacilitators.userStatus)
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcFacilitators.userStatus)
        sf.clearFilterElement().click({ force: true })
    }
    filterBeginswithUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(4).click({ force: true })
        sf.fieldValueElement().eq(0).type('In')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'In')
        sf.clearFilterElement().click({ force: true })
    }
    filterEndswithUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(5).click({ force: true })
        sf.fieldValueElement().eq(0).type('ive')
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ive')
        sf.clearFilterElement().click({ force: true })
    }
    filterBlankUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(6).click({ force: true })
        sf.fieldValueElement().eq(0).type(' ', { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        sf.clearFilterElement().click({ force: true })
    }
    filterNotblankUS() {
        sf.addFilterElement().eq(3).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(7).click({ force: true })
        sf.fieldValueElement().eq(1).type(tdata.srcFacilitators.userStatus, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.userStatus)
        sf.clearFilterElement().click({ force: true })
    }
    //date
    filterEqualsDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.lastModifiedDate1)
        sf.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcFacilitators.lastModifiedDate1)
        sf.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.lastModifiedDate1)
        sf.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        sf.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        sf.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        sf.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        sf.addFilterElement().eq(5).click({ force: true })
        sf.fieldNameElement().eq(1).click({ force: true })
        sf.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.srcFacilitators.lastModifiedDate, { force: true })
        sf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcFacilitators.lastModifiedDate1)
        sf.clearFilterElement().click({ force: true })
    }
}
export default SrcFacilitatorsActions 