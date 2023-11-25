/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class RepairBoxesElements {
    titleElement() {
        return cy.contains(locator.repairBoxes.title, {
            timeout: 30000,
        })
    }
   
    tableElement() {
        return cy.get(locator.repairBoxes.table, {
            timeout: 30000,
        })
    }
    seachboxElement() {
        return cy.get(locator.repairBoxes.seachbox, {
            timeout: 30000,
        })
    }
    addboxElement() {
        return cy.contains(locator.repairBoxes.addbox, {
            timeout: 30000,
        })
    }
    weightElement() {
        return cy.get(locator.repairBoxes.weight, {
            timeout: 30000,
        })
    }
    heightElement() {
        return cy.get(locator.repairBoxes.height, {
            timeout: 30000,
        })
    }
    depthElement() {
        return cy.get(locator.repairBoxes.depth, {
            timeout: 30000,
        })
    }
    widthElement() {
        return cy.get(locator.repairBoxes.width, {
            timeout: 30000,
        })
    }
    pickupsiteElement() {
        return cy.get(locator.repairBoxes.pickupsite, {
            timeout: 30000,
        })
    }
    checkboxElement() {
        return cy.get(locator.repairBoxes.checkbox, {
            timeout: 30000,
        })
    }
    createboxbtnElement() {
        return cy.contains(locator.repairBoxes.createboxbtn, {
            timeout: 30000,
        })
    }
 
    ticketElement() {
        return cy.get(locator.repairBoxes.ticket, {
            timeout: 30000,
        })
    }
    finishbtnElement() {
        return cy.contains(locator.repairBoxes.finishbtn, {
            timeout: 30000,
        })
    }
    downloadlabelElement() {
        return cy.contains(locator.repairBoxes.downloadlabel, {
            timeout: 30000,
        })
    }
    downloadmanifestElement() {
        return cy.contains(locator.repairBoxes.downloadmanifest, {
            timeout: 30000,
        })
    }
    addticketbtnElement() {
        return cy.contains(locator.repairBoxes.addticketbtn, {
            timeout: 30000,
        })
    }
    addticketElement() {
        return cy.contains(locator.repairBoxes.addticket, {
            timeout: 30000,
        })
    }
    tickettitleElement() {
        return cy.contains(locator.repairBoxes.tickettitle, {
            timeout: 30000,
        })
    }
    inboundElement() {
        return cy.contains(locator.repairBoxes.inbound, {
            timeout: 30000,
        })
    }
    outboundElement() {
        return cy.contains(locator.repairBoxes.outbound, {
            timeout: 30000,
        })
    }
}