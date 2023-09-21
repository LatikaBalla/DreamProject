/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class ImportSerialDevicesElements {
    titleElement() {
        return cy.contains(locator.importSerialDevices.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.importSerialDevices.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.importSerialDevices.table, {
            timeout: 30000,
        })
    }
    instructionsElement() {
        return cy.contains(locator.importSerialDevices.instructions, {
            timeout: 30000,
        })
    }
    addimportElement() {
        return cy.contains(locator.importSerialDevices.addimport, {
            timeout: 30000,
        })
    }
    refreshbtnElement(){
        return cy.get(locator.importSerialDevices.refreshbtn, {
            timeout: 30000,
        })
    }
    downloadimportElement() {
        return cy.contains(locator.importSerialDevices.downloadimport, {
            timeout: 30000,
        })
    }
    devicesDetailsTitleElement()
        {
        return cy.contains(locator.importSerialDevices.devicesDetailsTitle, {
            timeout: 30000,
        }) 
    }

    detailsElement() {
        return cy.contains(locator.importSerialDevices.details, {
            timeout: 30000,
        })
    }
    submitElement() {
        return cy.get(locator.importSerialDevices.submit, {
            timeout: 30000,
        })
    }
    uploadElement() {
        return cy.get(locator.importSerialDevices.upload, {
            timeout: 30000,
        })
    }
}