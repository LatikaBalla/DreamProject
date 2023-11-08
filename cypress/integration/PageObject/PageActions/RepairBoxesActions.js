/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const RepairBoxesElements = require("../PageElements/RepairBoxesElements.js")
const VivacityRepairCenterElements = require("../PageElements/VivacityRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class RepairBoxesActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.rb = new RepairBoxesElements();
        globalThis.rc = new VivacityRepairCenterElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        //dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairBoxesTab() {
        rc.repairBoxesElement().click({ force: true })
    }
    verifyTitle() {
        rb.titleElement().should('be.visible')
    }
    inboundVisible() {
       // rb.inboundElement().should('be.visible')
    }
    outboundVisible() {
        rb.outboundElement().should('be.visible')
    }
    clickOnAddnewBox() {
        rb.addboxElement().click({ force: true })  
    }
    enterWeight() {
        rb.weightElement().type(tdata.repairBox.weight)
    }
    enterHeight() {
        rb.heightElement().type(tdata.repairBox.height)
    }
    enterDepth() {
        rb.depthElement().type(tdata.repairBox.depth)
    }
    enterwidth() {
        rb.widthElement().type(tdata.repairBox.width)
    }
    selectPickupSite() {
        rb.pickupsiteElement().scrollIntoView().click({ force: true })
        cy.get(tdata.repairBox.pickupsite).click({ force: true })
    }
    checkNeedShippingBox() {
        rb.checkboxElement().click({ force: true })
    }
    clickOnCreateBoxButton() {
        rb.createboxbtnElement().click({ force: true })
    }
    selectTickets() {
        rb.ticketElement().click()
        cy.get('[role="listbox"]').find('[role="option"]').eq(0).click()
    }
    clickOnFinishButton() {
        rb.finishbtnElement().click({ force: true })
    }
    verifyNewBoxAdd() {
        dash.messageElement().should('contain', tdata.repairBox.boxcreatedmsg)
    }
    clickOnViewButton() {
        cy.get('tbody tr').eq(0).find('td').eq(6).click()
    }
    verifyBoxDetails() {
       // cy.contains(tdata.repairBox.pickupsite).should('be.visible')
    }
    clickOnAddTicket() {
        rb.addticketElement().click({ force: true })
    }
    clickOnDownloadLabel() {
        rb.downloadlabelElement().eq(0).click({ force: true })
    }
    verifyDownloadLabel() {
        cy.verifyDownload("/download/", tdata.repairBox.filename)
    }
    clickOnAddTicket_s() {
        rb.addticketbtnElement().click({ force: true })
    }
    verifyTicketAdded() {
        dash.messageElement().should('contain', tdata.repairBox.boxcreatedmsg)
    }
    clickOnViewButtonTicket() {
        //cy.wait(5000)
        cy.get('tbody tr').eq(0).find('td').eq(7).scrollIntoView().click()
    }
    verifyTicketDetails() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnBackButton() {
        dash.backArrowElement().click({ force: true })
    }
    clickOnRemoveButton() {
        cy.get('tbody tr').eq(0).find('td').eq(8).scrollIntoView().click({ force: true })
    }
    verifyTicketDeleted() {
        //   cy.wait(1000)
        // cy.get('tbody tr').eq(0).should('not.be.visible')
    }
}
export default RepairBoxesActions 