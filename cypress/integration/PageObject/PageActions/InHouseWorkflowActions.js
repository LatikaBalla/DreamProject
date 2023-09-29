/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const InHouseWorkflowElements = require("../PageElements/InHouseWorkflowElements.js")
const tdata = require("../../../testData.json");
export class InHouseWorkflowActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.ihw = new InHouseWorkflowElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnInHouseRepairCenter() {
        mdev.inhousercElement().click({ force: true })
    }
    verifyTitle() {
        ihw.titleElement().should('be.visible')
    }
    filtersVisible() {
        ihw.filtersElement().should('be.visible')
    }
    clickOnNewButton(){
        ihw.newbtnElement().click({force:true})
    }
    selectFailureType() {
        ihw.failuretypeElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.failuretype).click()
    }
    selectSerialDevice() {
        ihw.serialdeviceElement().click({ force: true })
      cy.get(tdata.inHouseWorkflow.serialdevice).click()
    //     cy.get('[data-testid="ArrowDropDownIcon"]').eq(3).click({ force: true })
    //     cy.get('#device').type('{downArrow}{enter}')
    }
    selectTechnician(){
        ihw.technicianElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.technician).click({ force: true })
      
    }
    enterChromebookIssue() {
        ihw.chromebookissueElement().type(tdata.inHouseWorkflow.chromebookissue)
    }
    clickOnSaveButton() {
        ihw.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(1000)
        dash.messageElement().should('contain', tdata.inHouseWorkflow.createTicketmsg)
        // cy.get('tbody tr').eq(0).find('td').eq(2).should('contain', tdata.repairTickets.devicename)
    }
    clickOnExport() {
        ihw.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload(tdata.inHouseWorkflow.filename)
    }

}
export default InHouseWorkflowActions 