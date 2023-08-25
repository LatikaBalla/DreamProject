/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SrcFacilitatorsElements {
    titleElement() {
        return cy.contains(locator.srcFacilitators.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.srcFacilitators.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.srcFacilitators.table, {
            timeout: 30000,
        })
    }
    refreshbtnElement() {
        return cy.get(locator.srcFacilitators.refreshbtn, {
            timeout: 30000,
        })
    }
    viewElement() {
        return cy.contains(locator.srcFacilitators.view, {
            timeout: 30000,
        })
    }
}