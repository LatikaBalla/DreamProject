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
    printTicketElement() {
        return cy.contains(locator.deviceRepairReport.printTicket, {
            timeout: 30000,
        })
    }
    downloadticketElement() {
        return cy.contains(locator.deviceRepairReport.downloadticket, {
            timeout: 30000,
        })
    }
    backElement() {
        return cy.get(locator.deviceRepairReport.back, {
            timeout: 30000,
        })
    }
    headingElement() {
        return cy.contains(locator.deviceRepairReport.heading, {
            timeout: 30000,
        })
    }
    searchdropdownElement() {
        return cy.get(locator.deviceRepairReport.searchdropdown, {
            timeout: 30000,
        })
    }

    ticketnumberElement() {
        return cy.get(locator.deviceRepairReport.ticketnumber, {
            timeout: 30000,
        })
    }
    repairtypeElement() {
        return cy.get(locator.deviceRepairReport.repairtype, {
            timeout: 30000,
        })
    }
    recordidElement() {
        return cy.get(locator.deviceRepairReport.recordid, {
            timeout: 30000,
        })
    }
    repairstatusElement() {
        return cy.get(locator.deviceRepairReport.repairstatus, {
            timeout: 30000,
        })
    }
    repairboxElement() {
        return cy.get(locator.deviceRepairReport.repairbox, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.deviceRepairReport.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.contains(locator.deviceRepairReport.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.deviceRepairReport.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.deviceRepairReport.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.deviceRepairReport.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.deviceRepairReport.fieldValue, {
            timeout: 30000,
        })
    }

}
