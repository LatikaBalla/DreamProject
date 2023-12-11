/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class RepairTicketsElements {
    titleElement() {
        return cy.contains(locator.repairTickets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.repairTickets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.repairTickets.table, {
            timeout: 30000,
        })
    }
    viewElement() {
        return cy.contains(locator.repairTickets.view, {
            timeout: 30000,
        })
    }
    createTicketElement() {
        return cy.contains(locator.repairTickets.createTicket, {
            timeout: 30000,
        })
    }
    exportElement() {
        return cy.contains(locator.repairTickets.export, {
            timeout: 30000,
        })
    }
    searchboxElement() {
        return cy.get(locator.repairTickets.searchbox, {
            timeout: 30000,
        })
    }
    refreshbtnElement() {
        return cy.get(locator.repairTickets.refreshbtn, {
            timeout: 30000,
        })
    }
    failuretypeElement() {
        return cy.get(locator.repairTickets.failuretype, {
            timeout: 30000,
        })
    }
    returnsiteElement() {
        return cy.get(locator.repairTickets.returnsite, {
            timeout: 30000,
        })
    }
    serialdeviceElement() {
        return cy.get(locator.repairTickets.serialdevice, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.repairTickets.building, {
            timeout: 30000,
        })
    }
    chromebookissueElement() {
        return cy.get(locator.repairTickets.chromebookissue, {
            timeout: 30000,
        })
    }
    descriptionElement() {
        return cy.get(locator.repairTickets.description, {
            timeout: 30000,
        })
    }
    savebtnElement() {
        return cy.contains(locator.repairTickets.savebtn, {
            timeout: 30000,
        })
    }
    ticketnumberElement() {
        return cy.get(locator.repairTickets.ticketnumber, {
            timeout: 30000,
        })
    }
    repairtypeElement() {
        return cy.get(locator.repairTickets.repairtype, {
            timeout: 30000,
        })
    }
    serialnumberElement() {
        return cy.get(locator.repairTickets.serialnumber, {
            timeout: 30000,
        })
    }
    repairstatusElement() {
        return cy.get(locator.repairTickets.repairstatus, {
            timeout: 30000,
        })
    }
    repairboxElement() {
        return cy.get(locator.repairTickets.repairbox, {
            timeout: 30000,
        })
    }
    assettagElement() {
        return cy.get(locator.repairTickets.assettag, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.repairTickets.search, {
            timeout: 30000,
        })
    }
    intransitElement() {
        return cy.get(locator.repairTickets.intransit, {
            timeout: 30000,
        })
    }
   
}
