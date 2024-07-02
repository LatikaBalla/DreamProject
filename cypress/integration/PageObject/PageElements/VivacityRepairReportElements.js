/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class VivacityRepairReportElements {
    section1Element() {
        return cy.contains(locator.vivacityRepairReport.section1, {
            timeout: 30000,
        })
    }
    section2Element() {
        return cy.contains(locator.vivacityRepairReport.section2, {
            timeout: 30000,
        })
    }
    section3Element() {
        return cy.contains(locator.vivacityRepairReport.section3, {
            timeout: 30000,
        })
    }
    section4Element() {
        return cy.contains(locator.vivacityRepairReport.section4, {
            timeout: 30000,
        })
    }
    repairstatusElement() {
        return cy.get(locator.vivacityRepairReport.repairstatus, {
            timeout: 30000,
        })
    }
    warrantyElement() {
        return cy.get(locator.vivacityRepairReport.warranty, {
            timeout: 30000,
        })
    }
    canvasElement() {
        return cy.get(locator.vivacityRepairReport.canvas, {
            timeout: 30000,
        })
    }
    buildingdropElement() {
        return cy.get(locator.vivacityRepairReport.buildingdrop, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.contains(locator.vivacityRepairReport.clearFilter, {
            timeout: 30000,
        })
    }
}
