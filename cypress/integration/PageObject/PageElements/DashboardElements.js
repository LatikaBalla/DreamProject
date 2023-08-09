/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class DashboardElements {
    termsElement() {
        return cy.get(locator.dashboard.terms, {
            timeout: 30000,
        })
    }
    logoElement() {
        return cy.get(locator.dashboard.logo, {
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
    sliderMenuElement() {
        return cy.get(locator.dashboard.sliderMenu, {
            timeout: 30000,
        });
    }
    reportcenterElement() {
        return cy.contains(locator.dashboard.reportcenter, {
            timeout: 30000,
        });
    }
    usersElement() {
        return cy.contains(locator.dashboard.users, {
            timeout: 30000,
        });
    }
    repair360Element() {
        return cy.contains(locator.dashboard.repair360, {
            timeout: 30000,
        });
    }
    managedevicesElement() {
        return cy.contains(locator.dashboard.managedevices, {
            timeout: 30000,
        });
    }
    resourcesElement() {
        return cy.contains(locator.dashboard.resources, {
            timeout: 30000,
        });
    }
    shopinventoryElement() {
        return cy.contains(locator.dashboard.shopinventory, {
            timeout: 30000,
        });
    }
    arrowElement() {
        return cy.get(locator.dashboard.arrow, {
            timeout: 30000,
        });
    }
}