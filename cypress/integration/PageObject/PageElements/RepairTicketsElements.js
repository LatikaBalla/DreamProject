/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class RepairTicketsElements {
    titleElement() {
        return cy.contains(locator.repairTickets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.repairTickets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.repairTickets.table, {
            timeout: 30000,
        })
    }
}