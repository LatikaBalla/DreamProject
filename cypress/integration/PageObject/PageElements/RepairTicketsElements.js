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
        return cy.get(locator.repairTickets.view, {
            timeout: 30000,
        })
    }
    createTicketElement() {
        return cy.get(locator.repairTickets.createTicket, {
            timeout: 30000,
        })
    }
    exportElement() {
        return cy.get(locator.repairTickets.export, {
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
    addFilterElement() {
        return cy.get(locator.repairTickets.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.repairTickets.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.repairTickets.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.repairTickets.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.repairTickets.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.repairTickets.fieldValue, {
            timeout: 30000,
        })
    }
    editTicketElement() {
        return cy.contains(locator.repairTickets.editTicket, {
            timeout: 30000,
        })
    }
    updateElement() {
        return cy.contains(locator.repairTickets.update, {
            timeout: 30000,
        })
    }
    repairstatusEditElement() {
        return cy.get(locator.repairTickets.repairstatusEdit, {
            timeout: 30000,
        })
    }
    addlineElement() {
        return cy.contains(locator.repairTickets.addline, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.repairTickets.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.repairTickets.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.repairTickets.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.contains(locator.repairTickets.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.repairTickets.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.repairTickets.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.repairTickets.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.repairTickets.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.repairTickets.createnote, {
            timeout: 30000,
        })
    }
    custompartElemnet() {
        return cy.contains(locator.repairTickets.custompart, {
            timeout: 30000,
        })
    }
    viewElemnet() {
        return cy.contains(locator.repairTickets.view, {
            timeout: 30000,
        })
    }
    partElement() {
        return cy.get(locator.repairTickets.part, {
            timeout: 30000,
        })
    }
    recordIdElement() {
        return cy.get(locator.repairTickets.recordid, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.repairTickets.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.repairTickets.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.repairTickets.sortDescending, {
            timeout: 30000,
        })
    }
}
