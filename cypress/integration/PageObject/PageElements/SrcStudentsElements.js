/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SrcStudentsElements {
    titleElement() {
        return cy.contains(locator.srcStudents.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.srcStudents.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.srcStudents.table, {
            timeout: 30000,
        })
    }
}