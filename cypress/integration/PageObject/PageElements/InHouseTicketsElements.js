/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InHouseTicketsElements {
    titleElement() {
        return cy.contains(locator.inhouseTickets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.inhouseTickets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.inhouseTickets.table, {
            timeout: 30000,
        })
    }
    failuretypeElement() {
        return cy.get(locator.inhouseTickets.failuretype, {
            timeout: 30000,
        })
    }
    serialdeviceElement() {
        return cy.get(locator.inhouseTickets.serialdevice, {
            timeout: 30000,
        })
    }
    technicianElement() {
        return cy.get(locator.inhouseTickets.technician, {
            timeout: 30000,
        })
    }
    chromebookissueElement() {
        return cy.get(locator.inhouseTickets.chromebookissue, {
            timeout: 30000,
        })
    }
    savebtnElement() {
        return cy.contains(locator.inhouseTickets.savebtn, {
            timeout: 30000,
        })
    }
    createTicketElement() {
        return cy.contains(locator.inhouseTickets.createTicket, {
            timeout: 30000,
        })
    }
    exportbtnElement() {
        return cy.contains(locator.inhouseTickets.exportbtn, {
            timeout: 30000,
        })
    }
    buildingElement(){
        return cy.get(locator.inhouseTickets.building, {
            timeout: 30000,
        })
    }
    repairissueElement(){
        return cy.get(locator.inhouseTickets.repairissue, {
            timeout: 30000,
        })
    }
}