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
    uconstructionElement() {
        return cy.get(locator.features.uconstruction, {
            timeout: 30000,
        });
    }
    launchedElement() {
        return cy.get(locator.features.launched, {
            timeout: 30000,
        });
    }
    addFilterElement() {
        return cy.contains(locator.features.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.contains(locator.features.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.features.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.features.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.features.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.features.fieldValue, {
            timeout: 30000,
        })
    }
    roadmapElement() {
        return cy.contains(locator.features.Roadmap, {
            timeout: 30000,
        })
    }
    schecduleElement() {
        return cy.get(locator.features.schecdule, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.features.search, {
            timeout: 30000,
        })
    }
}
