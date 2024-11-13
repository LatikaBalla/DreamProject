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
    searchboxElement() {
        return cy.get(locator.repairBoxes.searchbox, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.repairBoxes.search, {
            timeout: 30000,
        })
    }
    addboxElement() {
        return cy.get(locator.repairBoxes.addbox, {
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
        return cy.get(locator.repairBoxes.createboxbtn, {
            timeout: 30000,
        })
    }
    imageIconElement() {
        return cy.get(locator.repairBoxes.imageIcon, {
            timeout: 30000,
        })
    }
    pdfIconElement() {
        return cy.get(locator.repairBoxes.pdfIcon, {
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
    trackingnumberElement(){
        return cy.get(locator.repairBoxes.trackingnumber, {
            timeout: 30000,
        })
    }
    recordidElement(){
        return cy.get(locator.repairBoxes.recordid, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.repairBoxes.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.repairBoxes.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.repairBoxes.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.repairBoxes.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.repairBoxes.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.repairBoxes.fieldValue, {
            timeout: 30000,
        })
    }
    standardSizeElement() {
        return cy.get(locator.repairBoxes.standardSize, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.repairBoxes.building, {
            timeout: 30000,
        })
    }
   createdbyElement() {
        return cy.get(locator.repairBoxes.createdby, {
            timeout: 30000,
        })
    }
    viewElement() {
        return cy.get(locator.repairBoxes.view, {
            timeout: 30000,
        })
    }
    exportElement(){
        return cy.get(locator.repairBoxes.export, {
            timeout: 30000,
        }) 
    }
    addlineElement() {
        return cy.contains(locator.repairBoxes.addline, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.repairBoxes.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.repairBoxes.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.repairBoxes.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.contains(locator.repairBoxes.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.repairBoxes.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.repairBoxes.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.repairBoxes.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.repairBoxes.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.repairBoxes.createnote, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.repairBoxes.sortDescending, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.repairBoxes.sortAscending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.repairBoxes.clearSort, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.repairBoxes.option, {
            timeout: 30000,
        })
    }
    saveIconElement() {
        return cy.get(locator.repairBoxes.saveIcon, {
            timeout: 30000,
        })
    }
    filterHelpElement() {
        return cy.get(locator.repairBoxes.filterHelp, {
            timeout: 30000,
        })
    }
}