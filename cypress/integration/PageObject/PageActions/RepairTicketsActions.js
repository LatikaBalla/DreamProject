/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const RepairTicketsElements = require("../PageElements/RepairTicketsElements.js")

export class RepairTicketsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.mf = new RepairTicketsElements();
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
        cy.get('.MuiToolbar-root > .MuiButton-root').click({ force: true })
    }
    verifyTitle() {
        mf.titleElement().should('be.visible')
    }
    filtersVisible() {
        mf.filtersElement().should('be.visible')
    }
    tableVisible() {
        mf.tableElement().should('be.visible')
    }

}
export default RepairTicketsActions 