/// <reference types="cypress" />
const ResourcesElements = require("../PageElements/ResourcesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class ResourcesActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ResourcesElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    verifyTitleResources() {
        repc.titleElement()
    }
    instructionsTabVisible() {
        repc.instructionsElement().should('be.visible')
    }
    howToVideosTabVisible() {
        repc.howToVideosElement().should('be.visible')
    }
    warrantyInfoTabVisible() {
        repc.warrantyInfoElement().should('be.visible')
    }
    clickOnResources() {
        dash.arrowElement().click({ force: true })
        dash.resourcesElement().click({ force: true })
    }

}

export default ResourcesActions 