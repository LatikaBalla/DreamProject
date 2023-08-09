/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SrcRepairTicketsElements {
    titleElement() {
        return cy.contains(locator.srcRepairTickets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.srcRepairTickets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.srcRepairTickets.table, {
            timeout: 30000,
        })
    }
}