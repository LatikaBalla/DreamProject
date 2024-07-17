/// <reference types="cypress" />
const VivacityRepairCenterElements = require("../PageElements/VivacityRepairCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class VivacityRepairCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.rep = new VivacityRepairCenterElements();
    }
    closeTermsOfServiceWindow() {
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true })
        //dash.termsElement().click({ force: true })
    }
    verifyTitleVivacityRepairCenter() {
        rep.titleElement()
    }
    vivaRepairTicketsTabVisible() {
        rep.vivaRepairTicketsElement().should('be.visible')
    }
    repairBoxesTabVisible() {
        rep.repairBoxesElement().should('be.visible')
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
}
export default VivacityRepairCenterActions 