/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SrcStudentsElements {
    titleElement() {
        return cy.contains(locator.srcStudents.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.srcStudents.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.srcStudents.table, {
            timeout: 30000,
        })
    }
    addstudentElement(){
        return cy.get(locator.srcStudents.addstudent, {
            timeout: 30000,
        })
    }
    titlestudentElement() {
        return cy.get(locator.srcStudents.titlestudent, {
            timeout: 30000,
        })
    }
    fullnameElement() {
        return cy.get(locator.srcStudents.fullname, {
            timeout: 30000,
        })
    }
    emailElement() {
        return cy.get(locator.srcStudents.email, {
            timeout: 30000,
        })
    }
    phoneElement() {
        return cy.get(locator.srcStudents.phone, {
            timeout: 30000,
        })
    }
    cellnumberElement() {
        return cy.get(locator.srcStudents.cellnumber, {
            timeout: 30000,
        })
    }
    userstatusElement() {
        return cy.get(locator.srcStudents.userstatus, {
            timeout: 30000,
        })
    }
    vivanewsElement() {
        return cy.get(locator.srcStudents.vivanews, {
            timeout: 30000,
        })
    }
    productupdateElement() {
        return cy.get(locator.srcStudents.productupdate, {
            timeout: 30000,
        })
    }
    vivaweeklyElement() {
        return cy.get(locator.srcStudents.vivaweekly, {
            timeout: 30000,
        })
    }
    betatesterElement() {
        return cy.get(locator.srcStudents.betatester, {
            timeout: 30000,
        })
    }
    usernotificationElement() {
        return cy.get(locator.srcStudents.usernotification, {
            timeout: 30000,
        })
    }
    inhouserepairElement() {
        return cy.get(locator.srcStudents.inhouserepair, {
            timeout: 30000,
        })
    }
    submitElement() {
        return cy.get(locator.srcStudents.submit, {
            timeout: 30000,
        })
    }
    cancelElement() {
        return cy.contains(locator.srcStudents.cancel, {
            timeout: 30000,
        })
    }
    viewElement() {
        return cy.contains(locator.srcStudents.view, {
            timeout: 30000,
        })
    }
    searchElement(){
        return cy.get(locator.srcStudents.search, {
            timeout: 30000,
        })
    }
    searchboxElement(){
        return cy.get(locator.srcStudents.searchbox, {
            timeout: 30000,
        })
    }
    fullNameElement(){
        return cy.get(locator.srcStudents.fullName, {
            timeout: 30000,
        })
    }
    emaildropElement(){
        return cy.get(locator.srcStudents.emaildrop, {
            timeout: 30000,
        })
    }
    statusElement(){
        return cy.get(locator.srcStudents.status, {
            timeout: 30000,
        })
    }
    phoneNoElement(){
        return cy.get(locator.srcStudents.phoneNo, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.srcStudents.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.srcStudents.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.srcStudents.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.srcStudents.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.srcStudents.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.srcStudents.fieldValue, {
            timeout: 30000,
        })
    }
    exportbtnElement() {
        return cy.get(locator.srcStudents.exportbtn, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.srcStudents.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.srcStudents.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.srcStudents.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.srcStudents.clearSort, {
            timeout: 30000,
        })
    }
}
