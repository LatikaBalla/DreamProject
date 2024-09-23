/// <reference types="cypress" />
const FeaturesElements = require("../PageElements/FeaturesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class FeaturesActions {
    constructor() {
        globalThis.ft = new FeaturesElements();
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnFeatures() {
        dash.featuresElement().click({ force: true })
    }
    underConsiderationTabVisible() {
        ft.uconsiderationElement().should('be.visible')
    }
    underConstructionTabVisible() {
        ft.uconstructionElement().should('be.visible')
    }
    launchedTabVisible() {
        ft.launchedElement().should('be.visible')
    }
    roadmapVisible(){
        ft.roadmapElement().should('be.visible')
    }
    scheduledVisible(){
        ft.schecduleElement().should('be.visible')
    }
    clickOnSubmitfeatureButton() {
        ft.submitrequestElement().click({ force: true })
    }
    enterTitle() {
        ft.titleElement().type(tdata.features.title)
    }
    enterDescription() {
        ft.descriptionElement().type(tdata.features.description)
    }
    clickOnSubmitButton() {
        ft.submitbtnElement().click({ force: true })
    }
    verifySubmitedFeatureRequest() {
        dash.messageElement().should('contain', tdata.features.requestmsg)
    }
    verifyFeatureUnderconsideration() {
       cy.get('[placeholder="Search for feature"]').type('Testing{enter}')
        cy.contains('Testing').should('be.visible')
    }
}
export default FeaturesActions 