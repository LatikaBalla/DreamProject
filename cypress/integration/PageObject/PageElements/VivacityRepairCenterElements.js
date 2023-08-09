/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class VivacityRepairCenterElements {
    titleElement() {
        return cy.contains(locator.vivacityRepairCenter.title, {
            timeout: 30000,
        })
    }
    vivaRepairTicketsElement() {
        return cy.get(locator.vivacityRepairCenter.repairTickets, {
            timeout: 30000,
        })
    }
    repairBoxesElement() {
        return cy.get(locator.vivacityRepairCenter.repairBoxes, {
            timeout: 30000,
        })
    }
}