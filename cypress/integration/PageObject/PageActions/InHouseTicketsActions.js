/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const InHouseTicketsElements = require("../PageElements/InHouseTicketsElements.js")
const InHouseRepairCenterElements = require("../PageElements/InHouseRepairCenterElements.js")

export class InHouseTicketsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.mf = new InHouseTicketsElements();
        globalThis.mf1 = new InHouseRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnInHouseRepairCenterTab() {
        mdev.inhousercElement().click({ force: true })
    }
    clickOnInHouseTicketsTab() {
        mf1.inhouseTicketsElement().click({ force: true })
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
export default InHouseTicketsActions 