/// <reference types="cypress" />
const DashboardElements = require("../PageElements/DashboardElements.js")

export class DashboardActions {
    constructor() {
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
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