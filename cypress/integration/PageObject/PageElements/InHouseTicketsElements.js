/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InHouseTicketsElements {
    titleElement() {
        return cy.contains(locator.inhouseTickets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.inhouseTickets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.inhouseTickets.table, {
            timeout: 30000,
        })
    }
}