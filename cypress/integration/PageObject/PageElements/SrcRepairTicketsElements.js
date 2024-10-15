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
    issueElement() {
        return cy.get(locator.srcRepairTickets.issue, {
            timeout: 30000,
        })
    }
    createTicketElement() {
        return cy.get(locator.srcRepairTickets.createTicket, {
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
    buildingElement() {
        return cy.get(locator.srcRepairTickets.building, {
            timeout: 30000,
        })
    }
    searchboxElement() {
        return cy.get(locator.srcRepairTickets.searchbox, {
            timeout: 30000,
        })
    }
    ticketnumberElement() {
        return cy.get(locator.srcRepairTickets.ticketnumber, {
            timeout: 30000,
        })
    }
    repairtypeElement() {
        return cy.get(locator.srcRepairTickets.repairtype, {
            timeout: 30000,
        })
    }
    recordidElement() {
        return cy.get(locator.srcRepairTickets.recordid, {
            timeout: 30000,
        })
    }
    repairstatusElement() {
        return cy.get(locator.srcRepairTickets.repairstatus, {
            timeout: 30000,
        })
    }

    addFilterElement() {
        return cy.get(locator.srcRepairTickets.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.srcRepairTickets.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.srcRepairTickets.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.srcRepairTickets.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.srcRepairTickets.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.srcRepairTickets.fieldValue, {
            timeout: 30000,
        })
    }
    editTicketElement() {
        return cy.contains(locator.srcRepairTickets.editTicket, {
            timeout: 30000,
        })
    }
    updateElement() {
        return cy.contains(locator.srcRepairTickets.update, {
            timeout: 30000,
        })
    }
    repairstatusEditElement() {
        return cy.get(locator.srcRepairTickets.repairstatusEdit, {
            timeout: 30000,
        })
    }
    addlineElement() {
        return cy.contains(locator.srcRepairTickets.addline, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.srcRepairTickets.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.srcRepairTickets.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.srcRepairTickets.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.get(locator.srcRepairTickets.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.srcRepairTickets.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.srcRepairTickets.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.srcRepairTickets.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.srcRepairTickets.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.srcRepairTickets.createnote, {
            timeout: 30000,
        })
    }
    custompartElemnet() {
        return cy.contains(locator.srcRepairTickets.custompart, {
            timeout: 30000,
        })
    }
    editnoteElement() {
        return cy.get(locator.srcRepairTickets.editnote, {
            timeout: 30000,
        })
    }
    exportbtnElement() {
        return cy.get(locator.srcRepairTickets.exportbtn, {
            timeout: 30000,
        })
    }
    imagedescriptionElement(){
        return cy.get(locator.srcRepairTickets.imagedescription, {
            timeout: 30000,
        })
    }
    edittechnicianElement(){
        return cy.get(locator.srcRepairTickets.edittechnician, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.srcRepairTickets.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.srcRepairTickets.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.srcRepairTickets.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.srcRepairTickets.clearSort, {
            timeout: 30000,
        })
    }
}
