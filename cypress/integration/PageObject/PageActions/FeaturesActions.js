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
        dash.termsElement().click({ force: true })
    }
    clickOnFeatures() {
        // cy.contains('demo_adminsuper@vivacitytech.com').click({force:true})
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
    clickOnClearFilter() {
        ft.clearFilterElement().click({ force: true })
    }
    clickOnMoreFilter() {
        ft.addFilterElement().click({ force: true })
    }
    selectFilterTitle() {
        ft.fieldNameElement().select('title', { force: true })
        ft.fieldOpElement().select('does_not_contain', { force: true })
        ft.fieldValueElement().type(tdata.features.title,{force:true})
        ft.applyElement().click({ force: true })
        cy.get('.css-6unjtn').eq(0).should('not.have.value', tdata.features.title)
    }
    selectFilterDescription() {
        cy.contains('+ Add Filter Group').click({ force: true })
        ft.fieldNameElement().select('description', { force: true })
        ft.fieldOpElement().select('does_not_contain', { force: true })
        ft.fieldValueElement().type(tdata.features.description,{force:true})
        ft.applyElement().click({ force: true })
        cy.get('.css-6unjtn').eq(0).should('not.contain', tdata.features.description)
    }
    selectFilterCreator() {
         cy.contains('+ Add Filter Group').click({ force: true })
        ft.fieldNameElement().select('created_by', { force: true })
        ft.fieldOpElement().select('contains', { force: true })
        ft.fieldValueElement().type(tdata.features.createdby,{force:true})
        ft.applyElement().click({ force: true })
        cy.get('.css-6unjtn').eq(0).should('contain', tdata.features.createdby)
    }

}
export default FeaturesActions 