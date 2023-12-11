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
    clickOnCreateTicketButton() {
        iht.createTicketElement().click({ force: true })
    }
    selectFailureType() {
        iht.failuretypeElement().click({ force: true })
        cy.get(tdata.inHouseTicket.failuretype).click()
    }
    selectSerialDevice() {
        iht.serialdeviceElement().click({ force: true })
        cy.get(tdata.inHouseTicket.serialdevice).click()
    }
    selectTechnician() {
        iht.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.inHouseTicket.technician).click({ force: true })
    }
    selectBilding() {
        iht.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectRepaireIssue() {
        iht.repairissueElement().click({ force: true })
        cy.get(tdata.inHouseTicket.repairissue).click({ force: true })
    }
    enterChromebookIssue() {
        iht.chromebookissueElement().type(tdata.inHouseTicket.chromebookissue, { force: true })
    }
    clickOnSaveButton() {
        iht.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        // cy.wait(6000)
        dash.messageElement().should('contain', tdata.inHouseTicket.createTicketmsg)
    }
    clickOnExport() {
        iht.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.inHouseTicket.filename)
    }
    searchRecordId() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.recordidElement().click({ force: true })
        iht.searchElement().clear().type(tdata.inHouseTicket.recordid + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.inHouseTicket.recordid)
    }
    searchTicketNumber() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.ticketnumberElement().click({ force: true })
        iht.searchElement().clear().type(tdata.inHouseTicket.ticketnumber + '{enter}', { force: true })
       
        cy.get('tr td').eq(1).should('contain', tdata.inHouseTicket.ticketnumber)
    }
    searchRepairType() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.repairtypeElement().click({ force: true })
        iht.searchElement().clear().type(tdata.inHouseTicket.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.inHouseTicket.repairtype)
    }
    searchRepairStatus() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.repairstatusElement().click({ force: true })
        iht.searchElement().clear().type(tdata.inHouseTicket.repairstatus + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(5).should('contain', tdata.inHouseTicket.repairstatus,{ force: true })
    }
}
export default InHouseTicketsActions 