/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class MyFleetElements {
    titleElement() {
        return cy.contains(locator.myFleet.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.myFleet.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.myFleet.table, {
            timeout: 30000,
        })
    }
}