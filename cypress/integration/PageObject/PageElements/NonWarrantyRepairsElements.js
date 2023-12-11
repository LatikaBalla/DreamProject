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
    failuretypeElement(){
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
    
savebtnElement(){
    return cy.get(locator.nonWarrantyRepairs.savebtn, {
        timeout: 30000,
    })
}
searchdropdownElement(){
    return cy.get(locator.nonWarrantyRepairs.searchdropdown, {
        timeout: 30000,
    })
}
downloadticketElement(){
    return cy.contains(locator.nonWarrantyRepairs.downloadticket, {
        timeout: 30000,
    })
}
} 
