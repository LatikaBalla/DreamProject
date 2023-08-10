/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class WarrantyInfoElements {
    titleElement() {
        return cy.contains(locator.warrantyInfo.title, {
            timeout: 30000,
        })
    }
}