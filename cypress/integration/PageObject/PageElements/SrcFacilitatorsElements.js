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
    detailsRoleElement(){
        return cy.contains(locator.srcFacilitators.detailsRole, {
            timeout: 30000,
        })
    }
    searchElement(){
        return cy.get(locator.srcFacilitators.search, {
            timeout: 30000,
        })
    }
    searchboxElement(){
        return cy.get(locator.srcFacilitators.searchbox, {
            timeout: 30000,
        })
    }
    fullNameElement(){
        return cy.get(locator.srcFacilitators.fullName, {
            timeout: 30000,
        })
    }
    emaildropElement(){
        return cy.get(locator.srcFacilitators.emaildrop, {
            timeout: 30000,
        })
    }
    statusElement(){
        return cy.get(locator.srcFacilitators.status, {
            timeout: 30000,
        })
    }
    phoneNoElement(){
        return cy.get(locator.srcFacilitators.phoneNo, {
            timeout: 30000,
        })
    }

    addFilterElement() {
        return cy.get(locator.srcFacilitators.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.srcFacilitators.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.srcFacilitators.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.srcFacilitators.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.srcFacilitators.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.srcFacilitators.fieldValue, {
            timeout: 30000,
        })
    }
    exportbtnElement() {
        return cy.get(locator.srcFacilitators.exportbtn, {
            timeout: 30000,
        })
    }
}