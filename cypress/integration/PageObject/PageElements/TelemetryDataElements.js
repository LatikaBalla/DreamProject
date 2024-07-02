/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class TelemetryDataElements {
    dropdownElement() {
        return cy.get(locator.telemetryData.dropdown, {
            timeout: 30000,
        });
    }
    retrievebtnElement() {
        return cy.get(locator.telemetryData.retrievebtn, {
            timeout: 30000,
        });
    }
    datasectionElement() {
        return cy.get(locator.telemetryData.datasection, {
            timeout: 30000,
        });
    }
    deviceTableElement() {
        return cy.get(locator.telemetryData.deviceTable, {
            timeout: 30000,
        });
    }
    graphDataElement() {
        return cy.get(locator.telemetryData.graphData, {
            timeout: 30000,
        });
    }

}
