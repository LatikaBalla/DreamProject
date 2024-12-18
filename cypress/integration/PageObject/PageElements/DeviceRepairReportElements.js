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
        return cy.get(locator.deviceRepairReport.clearFilter, {
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
    serialNoElement() {
        return cy.get(locator.deviceRepairReport.serialNo, {
            timeout: 30000,
        })
    }
    assetTagElement() {
        return cy.get(locator.deviceRepairReport.assetTag, {
            timeout: 30000,
        })
    } 
    intransitElement() {
        return cy.get(locator.deviceRepairReport.intransit, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.deviceRepairReport.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.deviceRepairReport.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.deviceRepairReport.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.get(locator.deviceRepairReport.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.deviceRepairReport.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.deviceRepairReport.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.deviceRepairReport.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.deviceRepairReport.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.deviceRepairReport.createnote, {
            timeout: 30000,
        })
    }
    custompartElemnet() {
        return cy.contains(locator.deviceRepairReport.custompart, {
            timeout: 30000,
        })
    }
    partElement() {
        return cy.get(locator.deviceRepairReport.part, {
            timeout: 30000,
        })
    }
    downloadbtnElement() {
        return cy.get(locator.deviceRepairReport.downloadbtn, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.deviceRepairReport.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.deviceRepairReport.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.deviceRepairReport.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.deviceRepairReport.clearSort, {
            timeout: 30000,
        })
    }
}

