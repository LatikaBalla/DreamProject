/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class ReportCenterElements {
    titleElement() {
        return cy.title().should('contain', locator.reportCenter.title, {
            timeout: 30000,
        })
    }
    vivacityrrElement() {
        return cy.get(locator.reportCenter.vivacityrr, {
            timeout: 30000,
        })
    }
    inhouserrElement() {
        return cy.get(locator.reportCenter.inhouserr, {
            timeout: 30000,
        })
    }
    devicerrElement() {
        return cy.get(locator.reportCenter.devicerr, {
            timeout: 30000,
        })
    }


}