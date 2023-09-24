/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class FeaturesElements { 
    submitbtnElement() {
        return cy.get(locator.features.submitbtn, {
            timeout: 30000,
        });
    }
    submitrequestElement() {
        return cy.get(locator.features.submitrequest, {
            timeout: 30000,
        });
    }
    titleElement() {
        return cy.get(locator.features.title, {
            timeout: 30000,
        });
    }
    descriptionElement() {
        return cy.get(locator.features.description, {
            timeout: 30000,
        });
    }
    uconsiderationElement() {
        return cy.get(locator.features.uconsideration, {
            timeout: 30000,
        });
    }
    uconstructionElement(){
        return cy.get(locator.features.uconstruction, {
            timeout: 30000,
        }); 
    }
    launchedElement(){
        return cy.get(locator.features.launched, {
            timeout: 30000,
        }); 
    }
}