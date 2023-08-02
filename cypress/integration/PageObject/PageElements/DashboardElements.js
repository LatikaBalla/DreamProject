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

    sliderMenuElement() {
        return cy.get(locator.dashboard.sliderMenu, {
            timeout: 30000,
        });
    }
}