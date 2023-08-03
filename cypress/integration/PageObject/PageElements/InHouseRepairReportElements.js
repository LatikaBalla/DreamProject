/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InHouseRepairReportElements {
    section1Element() {
        return cy.contains(locator.inhouseRepairReport.section1, {
            timeout: 30000,
        })
    }
    section2Element() {
        return cy.contains(locator.inhouseRepairReport.section2, {
            timeout: 30000,
        })
    }
    section3Element() {
        return cy.contains(locator.inhouseRepairReport.section3, {
            timeout: 30000,
        })
    }
    section4Element() {
        return cy.contains(locator.inhouseRepairReport.section4, {
            timeout: 30000,
        })
    }
    ticketdataElement() {
        return cy.contains(locator.inhouseRepairReport.ticketdata, {
            timeout: 30000,
        })
    }

}
