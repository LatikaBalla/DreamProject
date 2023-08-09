/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class RepairBoxesElements {
    titleElement() {
        return cy.contains(locator.repairBoxes.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.repairBoxes.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.repairBoxes.table, {
            timeout: 30000,
        })
    }
}