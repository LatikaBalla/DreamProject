/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SrcRepairTicketsElements {
    titleElement() {
        return cy.contains(locator.srcRepairTickets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.srcRepairTickets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.srcRepairTickets.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.srcRepairTickets.search, {
            timeout: 30000,
        })
    }
    createTicketElement() {
        return cy.contains(locator.srcRepairTickets.createTicket, {
            timeout: 30000,
        })
    }
    refreshbtnElement() {
        return cy.get(locator.srcRepairTickets.refreshbtn, {
            timeout: 30000,
        })
    }
    failuretypeElement() {
        return cy.get(locator.srcRepairTickets.failuretype, {
            timeout: 30000,
        })
    }
    technicianElement() {
        return cy.get(locator.srcRepairTickets.technician, {
            timeout: 30000,
        })
    }
    serialdeviceElement() {
        return cy.get(locator.srcRepairTickets.serialdevice, {
            timeout: 30000,
        })
    }
   chromebookissueElement() {
        return cy.get(locator.srcRepairTickets.chromebookissue, {
            timeout: 30000,
        })
    }
    savebtnElement() {
        return cy.contains(locator.srcRepairTickets.savebtn, {
            timeout: 30000,
        })
    }
    viewElement() {
        return cy.contains(locator.srcRepairTickets.view, {
            timeout: 30000,
        })
    }
    editticketElement() {
        return cy.contains(locator.srcRepairTickets.editticket, {
            timeout: 30000,
        })
    }
    printTicketElement() {
        return cy.contains(locator.srcRepairTickets.printTicket, {
            timeout: 30000,
        })
    }
    downloadticketElement() {
        return cy.contains(locator.srcRepairTickets.downloadticket, {
            timeout: 30000,
        })
    }
    lineitemElement() {
        return cy.contains(locator.srcRepairTickets.lineitem, {
            timeout: 30000,
        })
    }
    vtverifypartElement() {
        return cy.contains(locator.srcRepairTickets.vtverifypart, {
            timeout: 30000,
        })
    }
    custompartElement() {
        return cy.contains(locator.srcRepairTickets.custompart, {
            timeout: 30000,
        })
    }
   partElement() {
        return cy.get(locator.srcRepairTickets.part, {
            timeout: 30000,
        })
    }
    createLineitemElement() {
        return cy.contains(locator.srcRepairTickets.createLineitem, {
            timeout: 30000,
        })
    }
}
