/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const InHouseWorkflowElements = require("../PageElements/InHouseWorkflowElements.js")

export class InHouseWorkflowActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.mf = new InHouseWorkflowElements();
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
        cy.get('.MuiToolbar-root > .MuiButton-root').click({ force: true })
    }
    verifyTitle() {
        mf.titleElement().should('be.visible')
    }
    filtersVisible() {
        mf.filtersElement().should('be.visible')
    }
}
export default InHouseWorkflowActions 