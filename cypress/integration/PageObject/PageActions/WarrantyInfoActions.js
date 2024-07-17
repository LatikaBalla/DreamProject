/// <reference types="cypress" />
const WarrantyInfoElements = require("../PageElements/WarrantyInfoElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ResourcesElements = require("../PageElements/ResourcesElements.js")

export class WarrantyInfoActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.war = new WarrantyInfoElements();
        globalThis.rep1 = new ResourcesElements()
    }
    closeTermsOfServiceWindow() {
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true })
       // dash.termsElement().click({ force: true })
    }
    verifyTitleWarrantyInfo() {
        war.titleElement()
    }
    clickOnInWarrantyInfo() {
        rep1.warrantyInfoElement().click({ force: true })
    }
    clickOnResources() {
        dash.resourcesElement().click({ force: true })
    }
}
export default WarrantyInfoActions 