/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class UsersElements {
    filtersElement() {
        return cy.get(locator.users.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.users.table, {
            timeout: 30000,
        })
    }
    addnewUserbtnElement() {
        return cy.contains(locator.users.addnewUserbtn, {
            timeout: 30000,
        })
    }
    titleElement() {
        return cy.get(locator.users.title, {
            timeout: 30000,
        })
    }
    fullnameElement() {
        return cy.get(locator.users.fullname, {
            timeout: 30000,
        })
    }
    emailElement() {
        return cy.get(locator.users.email, {
            timeout: 30000,
        })
    }
    phoneElement() {
        return cy.get(locator.users.phone, {
            timeout: 30000,
        })
    }
    cellnumberElement() {
        return cy.get(locator.users.cellnumber, {
            timeout: 30000,
        })
    }
    submitElement() {
        return cy.get(locator.users.submit, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.users.search, {
            timeout: 30000,
        })
    }
    userroleElement() {
        return cy.get(locator.users.userrole, {
            timeout: 30000,
        })
    } 
    userstatusElement() {
        return cy.get(locator.users.userstatus, {
            timeout: 30000,
        })
    }
    inhouserepaireElement() {
        return cy.get(locator.users.inhouserepaire, {
            timeout: 30000,
        })
    }
    editsubmitElement() {
        return cy.get(locator.users.editsubmit, {
            timeout: 30000,
        })
    }
    editbtnElement() {
        return cy.contains(locator.users.editbtn, {
            timeout: 30000,
        })
    }
    deletebtnElement() {
        return cy.contains(locator.users.deletebtn, {
            timeout: 30000,
        })
    }
    conDeletebtnElement() {
        return cy.contains(locator.users.conDeletebtn, {
            timeout: 30000,
        })
    }
    downloadbtnElement() {
        return cy.contains(locator.users.downloadbtn, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.users.fieldName, {
            timeout: 30000,
        });
    }
    fieldValueElement() {
        return cy.get(locator.users.fieldValue, {
            timeout: 30000,
        });
    }
    fieldOpElement() {
        return cy.get(locator.users.fieldOp, {
            timeout: 30000,
        });
    }
    applyElement() {
        return cy.get(locator.users.apply, {
            timeout: 30000,
        });
    }
   buildingElement() {
        return cy.get(locator.users.building, {
            timeout: 30000,
        });
    }
    addfilterbtnElement() {
        return cy.contains(locator.users.addfilterbtn, {
            timeout: 30000,
        });
    }
    clearfilterbtnElement() {
        return cy.contains(locator.users.clearfilterbtn, {
            timeout: 30000,
        });
    }
  
}