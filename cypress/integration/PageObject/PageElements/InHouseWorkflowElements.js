/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InHouseWorkflowElements {
    titleElement() {
        return cy.contains(locator.inHouseWorkflow.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.inHouseWorkflow.filters, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.inHouseWorkflow.search, {
            timeout: 30000,
        })
    }
    newbtnElement() {
        return cy.get(locator.inHouseWorkflow.newbtn, {
            timeout: 30000,
        })
    }
    exportbtnElement() {
        return cy.contains(locator.inHouseWorkflow.exportbtn, {
            timeout: 30000,
        })
    }
    viewdetailsElement() {
        return cy.contains(locator.inHouseWorkflow.viewdetails, {
            timeout: 30000,
        })
    }
    moverepairebtnElement() {
        return cy.contains(locator.inHouseWorkflow.moverepairebtn, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.inHouseWorkflow.addnote, {
            timeout: 30000,
        })
    }
    savenoteElement() {
        return cy.contains(locator.inHouseWorkflow.savenote, {
            timeout: 30000,
        })
    }
    failuretypeElement() {
        return cy.get(locator.inHouseWorkflow.failuretype, {
            timeout: 30000,
        })
    }
    serialdeviceElement() {
        return cy.get(locator.inHouseWorkflow.serialdevice, {
            timeout: 30000,
        })
    }
    technicianElement() {
        return cy.get(locator.inHouseWorkflow.technician, {
            timeout: 30000,
        })
    }
    chromebookissueElement() {
        return cy.get(locator.inHouseWorkflow.chromebookissue, {
            timeout: 30000,
        })
    }
    savebtnElement() {
        return cy.contains(locator.inHouseWorkflow.savebtn, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.inHouseWorkflow.building, {
            timeout: 30000,
        })
    }
    repairissueElement() {
        return cy.get(locator.inHouseWorkflow.repairissue, {
            timeout: 30000,
        })
    }
    editTicketElement() {
        return cy.contains(locator.inHouseWorkflow.editTicket, {
            timeout: 30000,
        })
    }
    updateElement() {
        return cy.contains(locator.inHouseWorkflow.update, {
            timeout: 30000,
        })
    }
    repairstatusEditElement() {
        return cy.get(locator.inHouseWorkflow.repairstatusEdit, {
            timeout: 30000,
        })
    }
    addlineElement() {
        return cy.contains(locator.inHouseWorkflow.addline, {
            timeout: 30000,
        })
    }
    addimageElement() {
        return cy.contains(locator.inHouseWorkflow.addimage, {
            timeout: 30000,
        })
    }
    addnoteElement() {
        return cy.contains(locator.inHouseWorkflow.addnote, {
            timeout: 30000,
        })
    }
    noteElement() {
        return cy.get(locator.inHouseWorkflow.note, {
            timeout: 30000,
        })
    }
    uploadimageElement() {
        return cy.get(locator.inHouseWorkflow.uploadimage, {
            timeout: 30000,
        })
    }
    imagedescriptionElement() {
        return cy.get(locator.inHouseWorkflow.imagedescription, {
            timeout: 30000,
        })
    }
    notetypeElement() {
        return cy.get(locator.inHouseWorkflow.notetype, {
            timeout: 30000,
        })
    }
    createlineElement() {
        return cy.get(locator.inHouseWorkflow.createline, {
            timeout: 30000,
        })
    }
    updateimageElement() {
        return cy.get(locator.inHouseWorkflow.updateimage, {
            timeout: 30000,
        })
    }
    createnoteElement() {
        return cy.get(locator.inHouseWorkflow.createnote, {
            timeout: 30000,
        })
    }
    custompartElement() {
        return cy.contains(locator.inHouseWorkflow.custompart, {
            timeout: 30000,
        })
    }
    viewElemnet() {
        return cy.contains(locator.inHouseWorkflow.view, {
            timeout: 30000,
        })
    }
    partElement() {
        return cy.get(locator.inHouseWorkflow.part, {
            timeout: 30000,
        })
    }
}