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
    searchElement(){
        return cy.get(locator.inHouseWorkflow.search, {
            timeout: 30000,
        })
    }
    newbtnElement(){
        return cy.contains(locator.inHouseWorkflow.newbtn, {
            timeout: 30000,
        })
    }
    exportbtnElement(){
        return cy.contains(locator.inHouseWorkflow.exportbtn, {
            timeout: 30000,
        })
    }
    viewdetailsElement(){
        return cy.contains(locator.inHouseWorkflow.viewdetails, {
            timeout: 30000,
        })
    }
    moverepairebtnElement(){
        return cy.contains(locator.inHouseWorkflow.moverepairebtn, {
            timeout: 30000,
        })
    }
    addnoteElement(){
        return cy.contains(locator.inHouseWorkflow.addnote, {
            timeout: 30000,
        })
    }
    savenoteElement(){
        return cy.contains(locator.inHouseWorkflow.savenote, {
            timeout: 30000,
        })
    }
    failuretypeElement(){
        return cy.get(locator.inHouseWorkflow.failuretype, {
            timeout: 30000,
        })
    }
    serialdeviceElement(){
        return cy.get(locator.inHouseWorkflow.serialdevice, {
            timeout: 30000,
        })
    }
    technicianElement(){
        return cy.get(locator.inHouseWorkflow.technician, {
            timeout: 30000,
        })
    }
    chromebookissueElement(){
        return cy.get(locator.inHouseWorkflow.chromebookissue, {
            timeout: 30000,
        })
    }
    savebtnElement(){
        return cy.contains(locator.inHouseWorkflow.savebtn, {
            timeout: 30000,
        })
    }
}