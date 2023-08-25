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
    gsuiteElement() {
        return cy.contains(locator.warrantyInfo.gsuite, {
            timeout: 30000,
        })
    }
    googleworkspaceElement() {
        return cy.contains(locator.warrantyInfo.googleworkspace, {
            timeout: 30000,
        })
    }
    deviceElement() {
        return cy.contains(locator.warrantyInfo.device, {
            timeout: 30000,
        })
    }
    chromedevicesElement() {
        return cy.contains(locator.warrantyInfo.chromedevices, {
            timeout: 30000,
        })
    }
    DeprovisionElement() {
        return cy.contains(locator.warrantyInfo.Deprovision, {
            timeout: 30000,
        })
    }
}