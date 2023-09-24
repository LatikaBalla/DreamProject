/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SupportElements {
    titleElement() {
        return cy.contains(locator.support.title, {
            timeout: 30000,
        })
    }
    nameElement() {
        return cy.get(locator.support.name, {
            timeout: 30000,
        })
    }
    priorityElement() {
        return cy.get(locator.support.priority, {
            timeout: 30000,
        });
    }
    topicElement() {
        return cy.get(locator.support.topic, {
            timeout: 30000,
        });
    }
    uploadElement() {
        return cy.get(locator.support.upload, {
            timeout: 30000,
        });
    }
    notesElement() {
        return cy.get(locator.support.notes, {
            timeout: 30000,
        });
    }
    submitbtnElement() {
        return cy.contains(locator.support.submitbtn, {
            timeout: 30000,
        });
    }
} 
