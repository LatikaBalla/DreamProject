/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class FleetValueElements {
    titleElement() {
        return cy.contains(locator.fleetValue.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.fleetValue.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.fleetValue.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.fleetValue.search, {
            timeout: 30000,
        })
    }
    sectionsElement() {
        return cy.get(locator.fleetValue.sections, {
            timeout: 30000,
        })
    }
    exportElement() {
        return cy.get(locator.fleetValue.export, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.fleetValue.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.fleetValue.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.fleetValue.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.fleetValue.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.fleetValue.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement(){
        return cy.get(locator.fleetValue.fieldValue, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.fleetValue.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.fleetValue.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.fleetValue.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.fleetValue.clearSort, {
            timeout: 30000,
        })
    }
    filterHelpElement() {
        return cy.get(locator.fleetValue.filterHelp, {
            timeout: 30000,
        })
    }
}

