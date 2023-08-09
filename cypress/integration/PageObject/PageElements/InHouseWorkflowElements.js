/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class InHouseWorkflowElements {
    titleElement() {
        return cy.contains(locator.inhouseWorkflow.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.inhouseWorkflow.filters, {
            timeout: 30000,
        })
    }
    // Element(){
    //     return cy.get(locator.inHouseWorkflow., {
    //         timeout: 30000,
    //     })
    // }
}