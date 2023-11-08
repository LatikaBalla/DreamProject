/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class LoanerManagementElements {

    tableElement() {
        return cy.get(locator.loanerManagement.table, {
            timeout: 30000,
        })
    }
    addstudentElement() {
        return cy.get(locator.loanerManagement.addstudent, {
            timeout: 30000,
        })
    }
    addfilterElement() {
        return cy.get(locator.loanerManagement.addfilter, {
            timeout: 30000,
        })
    }
    refreshbtnElement() {
        return cy.get(locator.loanerManagement.refreshbtn, {
            timeout: 30000,
        })
    }
    addfilterDevicesElement() {
        return cy.get(locator.loanerManagement.addfilterDevices, {
            timeout: 30000,
        })
    }
    serialFilterElement() {
        return cy.get(locator.loanerManagement.serialFilter, {
            timeout: 30000,
        })
    }
    assetTagFilterElement() {
        return cy.get(locator.loanerManagement.assetTagFilter, {
            timeout: 30000,
        })
    }
    SKUFilterElement() {
        return cy.get(locator.loanerManagement.SKUFilter, {
            timeout: 30000,
        })
    }
    deviceNameFilterElement() {
        return cy.get(locator.loanerManagement.deviceNameFilter, {
            timeout: 30000,
        })
    }
    addloanerPoolElement() {
        return cy.contains(locator.loanerManagement.addloanerPool, {
            timeout: 30000,
        })
    }
    removeloanerPoolElement() {
        return cy.contains(locator.loanerManagement.removeloanerPool, {
            timeout: 30000,
        })
    }
    checkoutbtnElement() {
        return cy.contains(locator.loanerManagement.checkoutbtn, {
            timeout: 30000,
        })
    }
    checkinbtnElement() {
        return cy.contains(locator.loanerManagement.checkinbtn, {
            timeout: 30000,
        })
    }
    studentNameElement() {
        return cy.get(locator.loanerManagement.studentName, {
            timeout: 30000,
        })
    }
    studentElement() {
        return cy.get(locator.loanerManagement.student, {
            timeout: 30000,
        })
    }
    buildingElement() {
        return cy.get(locator.loanerManagement.building, {
            timeout: 30000,
        })
    }
    studentTitleElement() {
        return cy.get(locator.loanerManagement.studentTitle, {
            timeout: 30000,
        })
    }

    studentEmailElement() {
        return cy.get(locator.loanerManagement.studentEmail, {
            timeout: 30000,
        })
    }
    studentStatusElement() {
        return cy.get(locator.loanerManagement.studentStatus, {
            timeout: 30000,
        })
    }
    searchElement(){
        return cy.get(locator.loanerManagement.search, {
            timeout: 30000,
        })
    }
    submitbtnElement(){
        return cy.get(locator.loanerManagement.submitbtn, {
            timeout: 30000,
        }) 
    }
    notesElement(){
        return cy.get(locator.loanerManagement.notes, {
            timeout: 30000,
        }) 
    }
}