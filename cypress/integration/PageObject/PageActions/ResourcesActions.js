/// <reference types="cypress" />
const ResourcesElements = require("../PageElements/ResourcesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class ResourcesActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.res = new ResourcesElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    verifyTitleResources() {
        res.titleElement()
    }
    instructionsTabVisible() {
        res.instructionsElement().should('be.visible')
    }
    howToVideosTabVisible() {
        res.howToVideosElement().should('be.visible')
    }
    warrantyInfoTabVisible() {
        res.warrantyInfoElement().should('be.visible')
    }
    clickOnResources() {
       // dash.arrowElement().click({ force: true })
        dash.resourcesElement().click({ force: true })
    }

}

export default ResourcesActions 