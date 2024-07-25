/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class PartClosetElements {
    titleElement() {
        return cy.contains(locator.partCloset.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.partCloset.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.partCloset.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.partCloset.search, {
            timeout: 30000,
        })
    }
    custompartElement() {
        return cy.contains(locator.partCloset.custompart, {
            timeout: 30000,
        })
    }
    tvpartElement() {
        return cy.contains(locator.partCloset.tvpart, {
            timeout: 30000,
        })
    }
    editqualityElement() {
        return cy.get(locator.partCloset.editquality, {
            timeout: 30000,
        })
    }
    yesElement() {
        return cy.get(locator.partCloset.yes, {
            timeout: 30000,
        })
    }
    noElement() {
        return cy.get(locator.partCloset.no, {
            timeout: 30000,
        })
    }
    deleteElement() {
        return cy.contains(locator.partCloset.delete, {
            timeout: 30000,
        })
    }
    ordermoreElement() {
        return cy.contains(locator.partCloset.ordermore, {
            timeout: 30000,
        })
    }
    partnameElement() {
        return cy.get(locator.partCloset.partname, {
            timeout: 30000,
        })
    }
    manufacturerElement() {
        return cy.get(locator.partCloset.manufacturer, {
            timeout: 30000,
        })
    }
    parentdeviceElement() {
        return cy.get(locator.partCloset.parentdevice, {
            timeout: 30000,
        })
    }
    partskuElement() {
        return cy.get(locator.partCloset.partsku, {
            timeout: 30000,
        })
    }
    quantityElement() {
        return cy.get(locator.partCloset.quantity, {
            timeout: 30000,
        })
    }
    submitElement() {
        return cy.contains(locator.partCloset.submit, {
            timeout: 30000,
        })
    }
    cancelElement() {
        return cy.contains(locator.partCloset.cancel, {
            timeout: 30000,
        })
    }
    deviceElement() {
        return cy.get(locator.partCloset.device, {
            timeout: 30000,
        })
    }
    partidElement() {
        return cy.get(locator.partCloset.partid, {
            timeout: 30000,
        })
    }
    quantityVTElement() {
        return cy.get(locator.partCloset.quantityVT, {
            timeout: 30000,
        })
    }
    submitVTElement() {
        return cy.contains(locator.partCloset.submitVT, {
            timeout: 30000,
        })
    }
    submitVTElement() {
        return cy.contains(locator.partCloset.cancelVT, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.partCloset.building, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.partCloset.clearFilter, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.partCloset.addFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.partCloset.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.partCloset.fieldOp, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.partCloset.fieldValue, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.partCloset.apply, {
            timeout: 30000,
        })
    }

}
