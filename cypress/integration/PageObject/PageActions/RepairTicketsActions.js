/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const RepairTicketsElements = require("../PageElements/RepairTicketsElements.js")
const tdata = require("../../../testData.json");
export class RepairTicketsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.rt = new RepairTicketsElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        // dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairTicketsTab() {
        mdev.repairTicketsElement().click({ force: true })
    }
    verifyTitle() {
        rt.titleElement().should('be.visible')
    }
    filtersVisible() {
        rt.filtersElement().should('be.visible')
    }
    tableVisible() {
        rt.tableElement().should('be.visible')
    }
    clickOnCreateNewTicket() {
        rt.createTicketElement().click({ force: true })
    }
    selectFailureType() {
        rt.failuretypeElement().click({ force: true })
        cy.get(tdata.repairTickets.failuretype).click({ force: true })
    }
    selectReturnSite() {
        rt.returnsiteElement().click({ force: true })
        // cy.get(tdata.repairTickets.returnsite).click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectSerialDevice() {
        rt.serialdeviceElement().click({ force: true })
        cy.get(tdata.repairTickets.serialdevice).click({ force: true })
    }
    selectBuilding() {
        rt.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
        // cy.get(tdata.repairTickets.building).eq(0).click({ force: true })
    }
    selectChromebookIssue() {
        rt.chromebookissueElement().click({ force: true })
        cy.get(tdata.repairTickets.chromebookissue).click({ force: true })
    }
    enterDescritionOfIssue() {
        rt.descriptionElement().type(tdata.repairTickets.description, { force: true })
    }
    clickOnSaveButton() {
        rt.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(6000)
        dash.messageElement().should('contain', tdata.repairTickets.createTicketmsg)
    }
    clickOnExport() {
        rt.exportElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.repairTickets.filename)
    }
    clickOnViewButton() {
        cy.get('tr td').eq(9).contains('View').scrollIntoView().click({ force: true })
    }
    verifyDetails() {
        cy.wait(1000)
        cy.contains('Repair Ticket Details').should('be.visible')
        cy.go('back')
    }
    searchTicketNumber() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.ticketnumberElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.ticketnumber + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(1).should('contain', tdata.repairTickets.ticketnumber)
    }
    searchRepairType() {   
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairtypeElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.repairTickets.repairtype)
    }
    searchSerialNumber() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.serialnumberElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.serialnumber + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(3).should('contain', tdata.repairTickets.serialnumber)
    }
    searchRepairStatus() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairstatusElement().click({ force: true })
        rt.searchboxElement().eq(1).click({ force: true })
       rt.intransitElement().click({ force: true })
       
      //  cy.get('tr td').eq(6).should('contain', tdata.repairTickets.repairstatus,{ force: true })
    }
    searchRepairBox() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairboxElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.repairbox + '{enter}', { force: true })
        cy.get('tr td').eq(6).should('contain', tdata.repairTickets.repairbox,{ force: true })
    }
    searchAssetTag() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.assettagElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.assettag + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(4).should('contain', tdata.repairTickets.assettag)
    }
}
export default RepairTicketsActions 