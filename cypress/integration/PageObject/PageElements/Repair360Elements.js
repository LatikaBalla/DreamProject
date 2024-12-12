/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class Repair360Elements {
    titleElement() {
        return cy.title().should('contain', locator.repair360.title, {
            timeout: 30000,
        })
    }
    vivacityrcElement() {
        return cy.get(locator.repair360.vivacityrc, {
            timeout: 30000,
        })
    }
    inhousercElement() {
        return cy.get(locator.repair360.inhouserc, {
            timeout: 30000,
        })
    }
    studentrcElement() {
        return cy.get(locator.repair360.studentrc, {
            timeout: 30000,
        })
    }
    partclosetElement() {
        return cy.get(locator.repair360.partcloset, {
            timeout: 30000,
        })
    }
    fleetValueElement(){
        return cy.get(locator.repair360.fleetValue, {
            timeout: 30000,
        })
    }

}