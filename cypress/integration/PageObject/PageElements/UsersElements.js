/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class UsersElements {
    organizationalunitElement() {
        return cy.get(locator.users.organizationalunit, {
            timeout: 30000,
        })
    }
    allusersunitElement() {
        return cy.get(locator.users.allusersunit, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.users.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.users.table, {
            timeout: 30000,
        })
    }
}