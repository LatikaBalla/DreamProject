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
       // dash.termsElement().contains('Agree').click({ force: true })
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
    roadmapVisible() {
        ft.roadmapElement().should('be.visible')
    }
    scheduledVisible() {
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
    enterSearch1() {
        ft.searchElement().type(tdata.features.search1)
    }
    verifySearchHistory1() {
        cy.get('.css-10ofaip').should('contain', tdata.features.search1)
    }
    enterSearch2() {
        ft.searchElement().type(tdata.features.search2)
    }
    verifySearchHistory2() {
        cy.get('.css-10ofaip').should('contain', tdata.features.search2)
    }
    enterSearch3() {
        ft.searchElement().type(tdata.features.search3)
    }
    verifySearchHistory3() {
        cy.get('.css-10ofaip').should('contain', tdata.features.search3)
    }
    enterSearch4() {
        ft.searchElement().type(tdata.features.search4)
    }
    verifySearchHistory4() {
        cy.get('.css-10ofaip').should('contain', tdata.features.search4)
    }
    clickOnScheduledTab(){
        ft.schecduleElement().click({force:true})
    }
    clickOnUnderConsiderationTab(){
        ft.uconsiderationElement().click({force:true})
    }
    clickOnLaunchedTab(){
        ft.launchedElement().click({force:true})
    }
}
export default FeaturesActions 