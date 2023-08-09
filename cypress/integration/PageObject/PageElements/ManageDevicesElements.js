/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class ManageDevicesElements {
    titleElement() {
        return cy.title().should('contain', locator.manageDevices.title, {
            timeout: 30000,
        })
    }
    myfleetElement() {
        return cy.contains(locator.manageDevices.myfleet, {
            timeout: 30000,
        })
    }
    loanerManagementElement() {
        return cy.contains(locator.manageDevices.loanerManagement, {
            timeout: 30000,
        })
    }
    serialdevicesElement() {
        return cy.contains(locator.manageDevices.serialdevices, {
            timeout: 30000,
        })
    }
    orgUploadAssestsElement() {
        return cy.contains(locator.manageDevices.orgUpload, {
            timeout: 30000,
        })
    }


}