/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class DashboardElements {
    termsElement() {
        return cy.get(locator.dashboard.terms, {
            timeout: 30000,
        })
    }
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
    sliderMenuElement() {
        return cy.get(locator.dashboard.sliderMenu, {
            timeout: 30000,
        });
    }
    titleElement() {
        return cy.get(locator.newaccount.title, {
            timeout: 30000,
        });
    }
    fullnameElement() {
        return cy.get(locator.newaccount.fullname, {
            timeout: 30000,
        });
    }
    emailElement() {
        return cy.get(locator.newaccount.email, {
            timeout: 30000,
        });
    }
    phoneElement() {
        return cy.get(locator.newaccount.phone, {
            timeout: 30000,
        });
    }
    cellnumberElement() {
        return cy.get(locator.newaccount.cellnumber, {
            timeout: 30000,
        });
    }
    userroleElement() {
        return cy.get(locator.newaccount.userrole, {
            timeout: 30000,
        });
    }
    editTitleElement() {
        return cy.get(locator.edit.title, {
            timeout: 30000,
        });
    }
    editFullnameElement() {
        return cy.get(locator.edit.fullname, {
            timeout: 30000,
        });
    }
    editEmailElement() {
        return cy.get(locator.edit.email, {
            timeout: 30000,
        });
    }
    editPhoneElement() {
        return cy.get(locator.edit.phone, {
            timeout: 30000,
        });
    }
    editCellnumberElement() {
        return cy.get(locator.edit.cellnumber, {
            timeout: 30000,
        });
    }
    editUserroleElement() {
        return cy.get(locator.edit.userrole, {
            timeout: 30000,
        });
    }
    editUserStatusElement() {
        return cy.get(locator.edit.userstatus, {
            timeout: 30000,
        });
    }
    addnewbtnElement() {
        return cy.get(locator.dashboard.addnewbtn, {
            timeout: 30000,
        });
    }
    newContactTitleElement() {
        return cy.contains(locator.dashboard.newContactTitle, {
            timeout: 30000,
        });
    }
    savebtnElement() {
        return cy.get(locator.newaccount.savebtn, {
            timeout: 30000,
        });
    }
    editIconElement() {
        return cy.get(locator.dashboard.editIcon, {
            timeout: 30000,
        });
    }
    deleteIconElement() {
        return cy.get(locator.dashboard.deleteIcon, {
            timeout: 30000,
        });
    }
    editSubmitbtnElement() {
        return cy.get(locator.edit.editsubmit, {
            timeout: 30000,
        });
    }
    conDeletebtnElement() {
        return cy.get(locator.dashboard.conDeletebtn, {
            timeout: 30000,
        });
    }
    searchElement(){
        return cy.get(locator.dashboard.search, {
            timeout: 30000,
        });
    }
}