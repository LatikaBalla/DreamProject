/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class StudentRepairCenterElements {
    titleElement() {
        return cy.contains(locator.studentRepairCenter.title, {
            timeout: 30000,
        })
    }
    srcStudentsElement() {
        return cy.get(locator.studentRepairCenter.srcStudents, {
            timeout: 30000,
        })
    }
    srcRepairTicketsElement() {
        return cy.get(locator.studentRepairCenter.srcRepairTickets, {
            timeout: 30000,
        })
    }
    srcFacilitatorsElement() {
        return cy.get(locator.studentRepairCenter.srcFacilitators, {
            timeout: 30000,
        })
    }
}