/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InHouseRepairCenterElements {
    titleElement() {
        return cy.contains(locator.inhouseRepairCenter.title, {
            timeout: 30000,
        })
    }
    inhouseworkflowElement() {
        return cy.get(locator.inhouseRepairCenter.inhouseworkflow, {
            timeout: 30000,
        })
    }
    inhouseTicketsElement() {
        return cy.get(locator.inhouseRepairCenter.inhouseTickets, {
            timeout: 30000,
        })
    }
}