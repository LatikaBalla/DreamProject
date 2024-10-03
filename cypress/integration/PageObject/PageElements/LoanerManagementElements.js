/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class LoanerManagementElements {

    titleElement(){
        return cy.contains(locator.loanerManagement.title, {
            timeout: 30000,
        })
    }
    addstudentElement() {
        return cy.get(locator.loanerManagement.addstudent, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.loanerManagement.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.loanerManagement.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.loanerManagement.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.loanerManagement.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.loanerManagement.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.loanerManagement.fieldValue, {
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
    deviceIconElement() {
        return cy.get(locator.loanerManagement.deviceIcon, {
            timeout: 30000,
        })
    }
    checkoutdesElement() {
        return cy.get(locator.loanerManagement.checkoutdes, {
            timeout: 30000,
        })
    }
    checkindesElement() {
        return cy.get(locator.loanerManagement.checkindes, {
            timeout: 30000,
        })
    }
    checkoutTabElement() {
        return cy.get(locator.loanerManagement.checkoutTab, {
            timeout: 30000,
        })
    }
    checkinTabElement() {
        return cy.get(locator.loanerManagement.checkinTab, {
            timeout: 30000,
        })
    }
    datepickerElement() {
        return cy.get(locator.loanerManagement.datepicker, {
            timeout: 30000,
        })
    }
    deviceNameFilterElement() {
        return cy.get(locator.loanerManagement.deviceNameFilter, {
            timeout: 30000,
        })
    }
    viewDetailsElement() {
        return cy.contains(locator.loanerManagement.viewDetails, {
            timeout: 30000,
        })
    }
    viewHistoryElement() {
        return cy.contains(locator.loanerManagement.viewHistory, {
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
    searchElement() {
        return cy.get(locator.loanerManagement.search, {
            timeout: 30000,
        })
    }
    searchAboveElement() {
        return cy.get(locator.loanerManagement.searchAbove, {
            timeout: 30000,
        })
    }
    submitbtnElement() {
        return cy.get(locator.loanerManagement.submitbtn, {
            timeout: 30000,
        })
    }
    notesElement() {
        return cy.get(locator.loanerManagement.notes, {
            timeout: 30000,
        })
    }

}