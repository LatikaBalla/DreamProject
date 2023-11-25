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
     //  dash.arrowElement().click({ force: true })
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
       srt.serialdeviceElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.serialdevice).click()        
    }
    selectTechnician(){
        srt.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.srcRepairTicket.technician).click({force:true}) 
    }
    selectIssue(){
        srt.issueElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.issue).click({force:true})
    }
    selectBuilding(){
        srt.buildingElement().click({force:true})
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    enterChromebookIssue() {
        srt.chromebookissueElement().type(tdata.srcRepairTicket.chromebookissue,{force:true})
    }
    clickOnSaveButton() {
        srt.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        dash.messageElement().should('contain', tdata.srcRepairTicket.createTicketmsg)
    }
    enterSearchBox(){
        cy.get('[role="combobox"]').eq(0).click({force:true})
        cy.get('[data-value="ticket_number"]').click({force:true})
        srt.searchElement().type(tdata.srcRepairTicket.ticketno+'{enter}',{force:true})
    }
    verifySearchResult(){
        cy.get('tr td').eq(1).should('contain', tdata.srcRepairTicket.ticketno)
    }
    clickViewButton(){
srt.viewElement().click({force:true})
    }
    verifySrcRepairTicket(){
        cy.contains('Repair Ticket Details').should('be.visible')
    }

}
export default SrcRepairTicketsActions 