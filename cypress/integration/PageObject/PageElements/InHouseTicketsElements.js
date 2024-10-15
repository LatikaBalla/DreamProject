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
        return cy.get(locator.inhouseTickets.createTicket, {
            timeout: 30000,
        })
    }
    exportbtnElement() {
        return cy.get(locator.inhouseTickets.exportbtn, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.inhouseTickets.building, {
            timeout: 30000,
        })
    }
    buildingdropElement() {
        return cy.get(locator.inhouseTickets.buildingdrop, {
            timeout: 30000,
        })
    }
    repairissueElement() {
        return cy.get(locator.inhouseTickets.repairissue, {
            timeout: 30000,
        })
    }
    searchboxElement() {
        return cy.get(locator.inhouseTickets.searchbox, {
            timeout: 30000,
        })
    }
    ticketnumberElement() {
        return cy.get(locator.inhouseTickets.ticketnumber, {
            timeout: 30000,
        })
    }
    repairtypeElement() {
        return cy.get(locator.inhouseTickets.repairtype, {
            timeout: 30000,
        })
    }
    recordidElement() {
        return cy.get(locator.inhouseTickets.recordid, {
            timeout: 30000,
        })
    }
    repairstatusElement() {
        return cy.get(locator.inhouseTickets.repairstatus, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.inhouseTickets.search, {
            timeout: 30000,
        })
    }

    addFilterElement() {
        return cy.get(locator.inhouseTickets.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.inhouseTickets.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.inhouseTickets.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.inhouseTickets.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.inhouseTickets.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.inhouseTickets.fieldValue, {
            timeout: 30000,
        })
    }
    editTicketElement() {
        return cy.contains(locator.inhouseTickets.editTicket, {
            timeout: 30000,
        })
    }
    updateElement() {
        return cy.contains(locator.inhouseTickets.update, {
            timeout: 30000,
        })
    }
    repairstatusEditElement() {
        return cy.get(locator.inhouseTickets.repairstatusEdit, {
            timeout: 30000,
        })
    }
    addlineElement() {
        return cy.contains(locator.inhouseTickets.addline, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.inhouseTickets.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.inhouseTickets.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.inhouseTickets.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.get(locator.inhouseTickets.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.inhouseTickets.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.inhouseTickets.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.inhouseTickets.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.inhouseTickets.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.inhouseTickets.createnote, {
            timeout: 30000,
        })
    }
    custompartElemnet() {
        return cy.contains(locator.inhouseTickets.custompart, {
            timeout: 30000,
        })
    }
    viewElemnet() {
        return cy.contains(locator.inhouseTickets.view, {
            timeout: 30000,
        })
    }
    partElement() {
        return cy.get(locator.inhouseTickets.part, {
            timeout: 30000,
        })
    }
    updateInhouseElement() {
        return cy.contains(locator.inhouseTickets.updateInhouse, {
            timeout: 30000,
        })
    }
    updateStudentElement() {
        return cy.contains(locator.inhouseTickets.updateStudent, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.inhouseTickets.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.inhouseTickets.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.inhouseTickets.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.inhouseTickets.clearSort, {
            timeout: 30000,
        })
    }
}
