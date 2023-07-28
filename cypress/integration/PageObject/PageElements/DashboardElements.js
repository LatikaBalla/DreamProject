/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class DashboardElements {
    accountDetailsElement() {
        return cy.get(locator.dashboard.accountdetials, {
            timeout: 30000,
        });
    }
    buildingsElement() {
        return cy.get(locator.dashboard.buildings, {
            timeout: 30000,
        });
    }
    tableAccountElement() {
        return cy.get(locator.dashboard.tableaccount, {
            timeout: 30000,
        });
    }
    titleElement() {
        return cy.get(locator.dashboard.title, {
            timeout: 30000,
        });
    }
    fullnameElement() {
        return cy.get(locator.dashboard.fullname, {
            timeout: 30000,
        });
    }
    emailElement() {
        return cy.get(locator.dashboard.email, {
            timeout: 30000,
        });
    }
    phoneElement() {
        return cy.get(locator.dashboard.phone, {
            timeout: 30000,
        });
    }
    addnewbtnElement() {
        return cy.get(locator.dashboard.addnewbtn, {
            timeout: 30000,
        });
    }
    cellnumberElement() {
        return cy.get(locator.dashboard.cellnumber, {
            timeout: 30000,
        });
    }
    userroleElement() {
        return cy.get(locator.dashboard.userrole, {
            timeout: 30000,
        });
    }
    newContactTitleElement(){
    return cy.contains(locator.dashboard.newContactTitle, {
        timeout: 30000,
    });
}
   savebtnElement() {
        return cy.get(locator.dashboard.savebtn, {
            timeout: 30000,
        });
    }
}