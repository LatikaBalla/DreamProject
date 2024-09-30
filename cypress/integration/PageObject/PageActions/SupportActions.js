/// <reference types="cypress" />
const SupportElements = require("../PageElements/SupportElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class SupportActions {
    constructor() {
        globalThis.su = new SupportElements();
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnSupport() {
        dash.supportElement().click({ force: true })
    }
    enterFullname() {
        su.nameElement().clear({ force: true }).type(tdata.support.name,{ force: true })
    }
    selectPriority() {
        su.priorityElement().click({ force: true })
        cy.get(tdata.support.priority).click({ force: true })
    }
    selectTopic() {
        su.topicElement().click({ force: true })
        cy.get(tdata.support.topic).click({ force: true })
    }
    uploadImage() {
        su.uploadElement().attachFile(tdata.support.image,{ force: true })
    }
    enterNotes() {
        su.notesElement().clear({ force: true }).type(tdata.support.notes,{ force: true })
    }
    clickOnSubmit() {
        cy.get('.MuiGrid-grid-md-12 > .MuiButtonBase-root').click({ force: true })
        // su.submitbtnElement().click({ force: true })
    }
    verfiyFeedbackSuccess() {
      //  dash.messageElement().should('contain', tdata.support.submitmsg),{ force: true }
    }
}
export default SupportActions 