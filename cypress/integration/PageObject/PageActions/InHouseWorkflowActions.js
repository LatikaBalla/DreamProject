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
    clickOnNewButton() {
        ihw.newbtnElement().click({ force: true })
    }
    selectFailureType() {
        ihw.failuretypeElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.failuretype).click()
    }
    selectSerialDevice() {
        ihw.serialdeviceElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.serialdevice).click()
    }
    selectTechnician() {
        ihw.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.inHouseWorkflow.technician).click({ force: true })
    }
    selectBuilding() {
        ihw.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectRepairissue() {
        ihw.repairissueElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.repairissue).click({ force: true })
    }
    enterChromebookIssue() {
        ihw.chromebookissueElement().type(tdata.inHouseWorkflow.chromebookissue, { force: true })
    }
    clickOnSaveButton() {
        ihw.savebtnElement().click({ force: true })

    }
    verifyNewTicket() {
        cy.wait(8000)
        dash.messageElement().should('contain', tdata.inHouseWorkflow.createTicketmsg)
    }
    clickOnExport() {
        ihw.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.inHouseWorkflow.filename)
    }
    searchTicketNo() {
        ihw.searchElement().type(tdata.inHouseWorkflow.ticketno + '{enter}', { force: true })
    }
    verfiySearchResult() {
        cy.wait(5000)
        cy.get('.css-ax8uhp').eq(0).contains(tdata.inHouseWorkflow.ticketno).should('be.visible')
    }

}
export default InHouseWorkflowActions 