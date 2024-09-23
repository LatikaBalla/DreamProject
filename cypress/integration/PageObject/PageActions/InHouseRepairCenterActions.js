/// <reference types="cypress" />
const InHouseRepairCenterElements = require("../PageElements/InHouseRepairCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const Repair360Elements = require("../PageElements/Repair360Elements.js")

export class InHouseRepairCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.rep = new InHouseRepairCenterElements();
        globalThis.rep1 = new Repair360Elements()
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    verifyTitleInHouseRepairCenter() {
        rep.titleElement()
    }
    clickOnInHouseRepairCenter() {
        rep1.inhousercElement().click({ force: true })
    }
    inhouseworkflowTabVisible() {
        rep.inhouseworkflowElement().should('be.visible')
    }
    inhouseTicketsTabVisible() {
        rep.inhouseTicketsElement().should('be.visible')
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }

}

export default InHouseRepairCenterActions 