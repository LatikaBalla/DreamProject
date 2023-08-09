/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class PartClosetElements {
    titleElement() {
        return cy.contains(locator.partCloset.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.partCloset.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.partCloset.table, {
            timeout: 30000,
        })
    }
}