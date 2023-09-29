/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const InHouseTicketsElements = require("../PageElements/InHouseTicketsElements.js")
const InHouseRepairCenterElements = require("../PageElements/InHouseRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class InHouseTicketsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.iht = new InHouseTicketsElements();
        globalThis.mf1 = new InHouseRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnInHouseRepairCenterTab() {
        mdev.inhousercElement().click({ force: true })
    }
    clickOnInHouseTicketsTab() {
        mf1.inhouseTicketsElement().click({ force: true })
    }
    verifyTitle() {
        iht.titleElement().should('be.visible')
    }
    filtersVisible() {
        iht.filtersElement().should('be.visible')
    }
    tableVisible() {
        iht.tableElement().should('be.visible')
    }
    clickOnCreateTicketButton(){
        iht.createTicketElement().click({force:true})
    }
    selectFailureType() {
        iht.failuretypeElement().click({ force: true })
       cy.get(tdata.inHouseTicket.failuretype).click()
    }
    selectSerialDevice() {
       // iht.serialdeviceElement().click({ force: true })
        cy.get('[data-testid="ArrowDropDownIcon"]').eq(3).click({ force: true })
        cy.get('#device').type('{downArrow}{enter}')
      // cy.get(tdata.inHouseTicket.serialdevice).click()
    }
    selectTechnician(){
        iht.technicianElement().click({ force: true })
        cy.get(tdata.inHouseTicket.technician).click()
    }
    enterChromebookIssue() {
        iht.chromebookissueElement().type(tdata.inHouseTicket.chromebookissue)
    }
    clickOnSaveButton() {
        iht.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(1000)
        dash.messageElement().should('contain', tdata.inHouseTicket.createTicketmsg)
        // cy.get('tbody tr').eq(0).find('td').eq(2).should('contain', tdata.repairTickets.devicename)
    }
    clickOnExport() {
        iht.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload(tdata.inHouseTicket.filename)
    }
}
export default InHouseTicketsActions 