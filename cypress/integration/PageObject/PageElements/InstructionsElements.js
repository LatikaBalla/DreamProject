/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InstructionsElements {
    provisionDeviceElement() {
        return cy.get(locator.instructions.provisionDevice, {
            timeout: 30000,
        })
    }
    deprovisionDeviceElement() {
        return cy.get(locator.instructions.deprovisionDevice, {
            timeout: 30000,
        })
    }
}