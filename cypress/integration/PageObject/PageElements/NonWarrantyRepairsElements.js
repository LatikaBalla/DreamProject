/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class NonWarrantyRepairsElements {

    titleElement() {
        return cy.contains(locator.nonWarrantyRepairs.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.nonWarrantyRepairs.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.nonWarrantyRepairs.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.nonWarrantyRepairs.search, {
            timeout: 30000,
        })
    }
    formElement() {
        return cy.get(locator.nonWarrantyRepairs.form, {
            timeout: 30000,
        })
    }
    failuretypeElement() {
        return cy.get(locator.nonWarrantyRepairs.failureType, {
            timeout: 30000,
        })
    }
    siteElement() {
        return cy.get(locator.nonWarrantyRepairs.site, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.nonWarrantyRepairs.building, {
            timeout: 30000,
        })
    }
    issueElement() {
        return cy.get(locator.nonWarrantyRepairs.issue, {
            timeout: 30000,
        })
    }
    serialdeviceElement() {
        return cy.get(locator.nonWarrantyRepairs.serialdevice, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.nonWarrantyRepairs.building, {
            timeout: 30000,
        })
    }
    describeElement() {
        return cy.get(locator.nonWarrantyRepairs.describe, {
            timeout: 30000,
        })
    }

    savebtnElement() {
        return cy.get(locator.nonWarrantyRepairs.savebtn, {
            timeout: 30000,
        })
    }
    searchdropdownElement() {
        return cy.get(locator.nonWarrantyRepairs.searchdropdown, {
            timeout: 30000,
        })
    }
    downloadticketElement() {
        return cy.contains(locator.nonWarrantyRepairs.downloadticket, {
            timeout: 30000,
        })
    }
    ticketnumberElement() {
        return cy.get(locator.nonWarrantyRepairs.ticketnumber, {
            timeout: 30000,
        })
    }
    repairtypeElement() {
        return cy.get(locator.nonWarrantyRepairs.repairtype, {
            timeout: 30000,
        })
    }
    recordidElement() {
        return cy.get(locator.nonWarrantyRepairs.recordid, {
            timeout: 30000,
        })
    }
    repairstatusElement() {
        return cy.get(locator.nonWarrantyRepairs.repairstatus, {
            timeout: 30000,
        })
    }
    repairboxElement() {
        return cy.get(locator.nonWarrantyRepairs.repairbox, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.nonWarrantyRepairs.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.nonWarrantyRepairs.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.nonWarrantyRepairs.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.nonWarrantyRepairs.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.nonWarrantyRepairs.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement(){
        return cy.get(locator.nonWarrantyRepairs.fieldValue, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.nonWarrantyRepairs.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.nonWarrantyRepairs.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.nonWarrantyRepairs.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.get(locator.nonWarrantyRepairs.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.nonWarrantyRepairs.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.nonWarrantyRepairs.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.nonWarrantyRepairs.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.nonWarrantyRepairs.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.nonWarrantyRepairs.createnote, {
            timeout: 30000,
        })
    }
    custompartElemnet() {
        return cy.contains(locator.nonWarrantyRepairs.custompart, {
            timeout: 30000,
        })
    }
    partElement() {
        return cy.get(locator.nonWarrantyRepairs.part, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.nonWarrantyRepairs.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.nonWarrantyRepairs.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.nonWarrantyRepairs.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.nonWarrantyRepairs.clearSort, {
            timeout: 30000,
        })
    }
}

