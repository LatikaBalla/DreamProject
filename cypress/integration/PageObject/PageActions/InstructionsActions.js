/// <reference types="cypress" />
const InstructionsElements = require("../PageElements/InstructionsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ResourcesElements = require("../PageElements/ResourcesElements.js")

export class InstructionsActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.inst = new InstructionsElements();
        globalThis.rep1 = new ResourcesElements()
    }
    closeTermsOfServiceWindow() {
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true })
       // dash.termsElement().click({ force: true })
    }
    clickOnInstructions() {
        rep1.instructionsElement().click({ force: true })
    }
    provisionDeviceTabVisible() {
        inst.provisionDeviceElement().should('be.visible')
    }
    deprovisionDeviceTabVisible() {
        inst.deprovisionDeviceElement().should('be.visible')
    }
    clickOnResources() {
        dash.resourcesElement().click({ force: true })
    }
}

export default InstructionsActions 