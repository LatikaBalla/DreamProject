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
        dash.termsElement().click({ force: true })
    }
    clickOnSupport() {
        cy.contains('demo_adminsuper@vivacitytech.com').click({force:true})
        dash.supportElement().click({ force: true })
    }
    enterFullname() {
        su.nameElement().clear().type(tdata.support.name)
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
        su.uploadElement().attachFile(tdata.support.image)
    }
    enterNotes() {
        su.notesElement().clear().type(tdata.support.notes)
    }
    clickOnSubmit() {
        cy.get('.MuiGrid-container > .MuiButtonBase-root').click({ force: true })
       // su.submitbtnElement().click({ force: true })
    }
    verfiyFeedbackSuccess() {
        dash.messageElement().should('contain', tdata.support.submitmsg)
    }
}

export default SupportActions 