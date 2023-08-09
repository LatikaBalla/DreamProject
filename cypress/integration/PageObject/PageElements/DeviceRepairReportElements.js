/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class DeviceRepairReportElements {

    titleElement() {
        return cy.contains(locator.deviceRepairReport.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.deviceRepairReport.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.deviceRepairReport.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.deviceRepairReport.search, {
            timeout: 30000,
        })
    }
    clearbtnElement() {
        return cy.contains(locator.deviceRepairReport.clearbtn, {
            timeout: 30000,
        })
    }

}
