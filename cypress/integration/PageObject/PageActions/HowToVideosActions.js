/// <reference types="cypress" />
const HowToVideosElements = require("../PageElements/HowToVideosElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ResourcesElements = require("../PageElements/ResourcesElements.js")

export class HowToVideosActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.rep = new HowToVideosElements();
        globalThis.rep1 = new ResourcesElements()
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnHowToVideos() {
        rep1.howToVideosElement().click({ force: true })
    }
    videosVisible() {
        rep.videosElement().should('be.visible')
    }
    clickOnResources() {
        dash.resourcesElement().click({ force: true })
    }
}
export default HowToVideosActions 