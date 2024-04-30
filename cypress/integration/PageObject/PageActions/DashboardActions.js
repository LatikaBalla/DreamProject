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
        dash.myAccountElement().click({force:true})
        dash.accountDetailsElement().should('be.visible')
    }
    clickOnMyAccountTab() {
        dash.accountDetailsElement().click({ force: true })
    }
    buildingTabVisible() {
        dash.buildingsElement().should('be.visible')
    }
    verifyLogoVisible() {
        dash.logoElement().should('be.visible')
    }
}

export default DashboardActions 