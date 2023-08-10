/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class ResourcesElements {
    titleElement() {
        return cy.title().should('contain', locator.resources.title, {
            timeout: 30000,
        })
    }
    instructionsElement() {
        return cy.get(locator.resources.instructions, {
            timeout: 30000,
        })
    }
    howToVideosElement() {
        return cy.get(locator.resources.howToVideos, {
            timeout: 30000,
        })
    }
    warrantyInfoElement() {
        return cy.get(locator.resources.warrantyInfo, {
            timeout: 30000,
        })
    }
}