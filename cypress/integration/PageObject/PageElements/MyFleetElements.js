/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class MyFleetElements {
    titleElement() {
        return cy.contains(locator.myFleet.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.myFleet.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.myFleet.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.myFleet.search, {
            timeout: 30000,
        });
    }
    fieldnameElement() {
        return cy.get(locator.myFleet.fieldname, {
            timeout: 30000,
        });
    }
    fieldvalueElement() {
        return cy.get(locator.myFleet.fieldvalue, {
            timeout: 30000,
        });
    }
    fieldoperationElement() {
        return cy.get(locator.myFleet.fieldoperation, {
            timeout: 30000,
        });
    }
    applybtnElement() {
        return cy.get(locator.myFleet.applybtn, {
            timeout: 30000,
        });
    }
    morefiltersbtnElement() {
        return cy.contains(locator.myFleet.morefiltersbtn, {
            timeout: 30000,
        });
    }
    clearfilterbtnElement() {
        return cy.contains(locator.myFleet.clearfilterbtn, {
            timeout: 30000,
        });
    }
    addfilterGroupElement() {
        return cy.contains(locator.myFleet.addfilterGroup, {
            timeout: 30000,
        });
    }
    exportcsvElement() {
        return cy.contains(locator.myFleet.exportcsv, {
            timeout: 30000,
        });
    }
    viewElement(){
        return cy.contains(locator.myFleet.view, {
            timeout: 30000,
        });
    }
    serialNoElement() {
        return cy.get(locator.myFleet.serialNo, {
            timeout: 30000,
        });
    }
    deviceidElement() {
        return cy.get(locator.myFleet.deviceid, {
            timeout: 30000,
        });
    }
    assetTagElement() {
        return cy.get(locator.myFleet.assetTag, {
            timeout: 30000,
        });
    }
    studentidElement() {
        return cy.get(locator.myFleet.studentid, {
            timeout: 30000,
        });
    }
    lonarstatusElement() {
        return cy.get(locator.myFleet.lonarstatus, {
            timeout: 30000,
        });
    }
    devicestatusElement() {
        return cy.get(locator.myFleet.devicestatus, {
            timeout: 30000,
        });
    }
    submitbtnElement() {
        return cy.contains(locator.myFleet.submitbtn, {
            timeout: 30000,
        });
    }
    addDeviceElement() {
        return cy.contains(locator.myFleet.addDevice, {
            timeout: 30000,
        });
    }
}
