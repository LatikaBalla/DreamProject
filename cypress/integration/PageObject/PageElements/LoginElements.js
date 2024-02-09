/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class LoginElements {
    usernameElement() {
        return cy.get(locator.login.username, {
            timeout: 30000,
        });
    }
    passwordElement() {
        return cy.get(locator.login.password, {
            timeout: 30000,
        });
    }
    continueElement() {
        return cy.get(locator.login.continue, {
            timeout: 30000,
        });
    }
    forgotpassElement() {
        return cy.get(locator.login.forgotpass, {
            timeout: 30000,
        });
    }
    signupElement() {
        return cy.get(locator.login.signup, {
            timeout: 30000,
        });
    }
    googlesigninElement() {
        return cy.get(locator.login.googlesignin, {
            timeout: 30000,
        });
    }
    errormessageElement(){
        return cy.get(locator.login. errormessage, {
            timeout: 30000,
        });
    }
}