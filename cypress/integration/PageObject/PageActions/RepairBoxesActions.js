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
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairBoxesTab() {
        rc.repairBoxesElement().click({ force: true })
    }
    verifyTitle() {
        rb.titleElement().should('be.visible')
    }
    filtersVisible() {
        rb.filtersElement().should('be.visible')
    }
    tableVisible() {
        rb.tableElement().should('be.visible')
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
        cy.get('[role="option"]').eq(0).click()
       // cy.get(tdata.repairBox.ticketcheckbox).click({force:true})
        //cy.get('.css-nwf1t5').click({force:true})
    }
    clickOnFinishButton() {
        rb.finishbtnElement().click({force:true})
    }
    verifyNewBoxAdd() {

    }
    clickOnTableRow() {

    }
    verifyBoxDetails() {

    }
}
export default RepairBoxesActions 