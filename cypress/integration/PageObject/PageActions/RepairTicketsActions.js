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
        dash.arrowElement().click({ force: true })
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
        rt.createTicketElement().click()

    }
    selectFailureType() {
       rt.failuretypeElement().click({force:true})
        cy.get(tdata.repairTickets.failuretype).click()
    }
    selectReturnSite() {
        rt.returnsiteElement().click({force:true})
        cy.get(tdata.repairTickets.returnsite).click()
    }
    selectSerialDevice() {
        rt.serialdeviceElement().click({force:true})
        cy.get(tdata.repairTickets.serialdevice).click()
    }
    selectBuilding() {
        rt.buildingElement().click({force:true})
        cy.get(tdata.repairTickets.building).click()
    }
    selectChromebookIssue() {
        rt.chromebookissueElement().click({force:true})
     cy.get(tdata.repairTickets.chromebookissue).click({force:true})

    }
    enterDescritionOfIssue() {
        rt.descriptionElement().type(tdata.repairTickets.description,{force:true})
    }
    clickOnSaveButton() {
        rt.savebtnElement().click({force:true})
    }
    verifyNewTicket() {
        cy.wait(1000)
        dash.messageElement().should('contain',tdata.repairTickets.createTicketmsg)
       // cy.get('tbody tr').eq(0).find('td').eq(2).should('contain', tdata.repairTickets.devicename)

    }
    clickOnExport() {
rt.exportElement().click({force:true})
    }
    verifyDownload() {
        cy.verifyDownload(tdata.repairTickets.filename)
    }
    clickOnViewButton(){
        cy.get('tbody tr').eq(0).find('td').eq(8).scrollIntoView().click({force:true})
    }
    verifyDetails(){
      //  cy.wait(1000)
      //cy.contains('Repair Ticket Details').should('be.visible') 
    }

}
export default RepairTicketsActions 