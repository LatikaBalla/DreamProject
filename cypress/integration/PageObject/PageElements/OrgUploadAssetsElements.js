/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class OrgUploadAssetsElements {
    titleElement() {
        return cy.contains(locator.orgUploadAssets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.orgUploadAssets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.orgUploadAssets.table, {
            timeout: 30000,
        })
    }
}