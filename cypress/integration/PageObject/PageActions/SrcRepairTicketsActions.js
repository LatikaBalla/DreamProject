/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const SrcRepairTicketsElements = require("../PageElements/SrcRepairTicketsElements.js")
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class SrcRepairTicketsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.srt = new SrcRepairTicketsElements();
        globalThis.mf1 = new StudentRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        mdev.studentrcElement().click({ force: true })
    }
    clickOnSrcRepairTicketsTab() {
        mf1.srcRepairTicketsElement().click({ force: true })
    }
    verifyTitle() {
        srt.titleElement().should('be.visible')
    }
    filtersVisible() {
        srt.filtersElement().should('be.visible')
    }
    tableVisible() {
        srt.tableElement().should('be.visible')
    }
    clickOnCreateTicketButton(){
        srt.createTicketElement().click({force:true})
    }
    selectFailureType() {
        srt.failuretypeElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.failuretype).click()
    }
    selectSerialDevice() {
      //  srt.serialdeviceElement().click({ force: true })
        //cy.get(tdata.srcRepairTicket.serialdevice).click()
        cy.get('[data-testid="ArrowDropDownIcon"]').eq(3).click({ force: true })
         cy.get('#device').type('{downArrow}{enter}')
    }
    selectTechnician(){
        srt.technicianElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.technician).click({force:true})
    }
    selectIssue(){
        srt.issueElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.issue).click({force:true})
    }
    enterChromebookIssue() {
        srt.chromebookissueElement().type(tdata.srcRepairTicket.chromebookissue,{force:true})
    }
    clickOnSaveButton() {
        srt.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(1000)
        dash.messageElement().should('contain', tdata.srcRepairTicket.createTicketmsg)
    }
    enterSearchBox(){
        srt.searchElement().type(tdata.srcRepairTicket.serialno+'{enter}')
    }
    verifySearchResult(){
        cy.get('tbody tr').eq(0).find('td').eq(3).should('contain', tdata.srcRepairTicket.serialno)
    }

}
export default SrcRepairTicketsActions 