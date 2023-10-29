/// <reference types="cypress" />
const DashboardElements = require("../PageElements/DashboardElements.js")

export class DashboardActions {
    constructor() {
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    myAccountDetailsTabVisible() {
        dash.accountDetailsElement().should('be.visible')
    }
    buildingTabVisible() {
        dash.buildingsElement().should('be.visible')
    }
    verifyLogoVisible() {
        dash.logoElement().should('be.visible')
    }
}

export default DashboardActions 