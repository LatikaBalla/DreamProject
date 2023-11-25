/// <reference types="cypress" />
const LoginElements = require("../PageElements/LoginElements.js")
const LandingElements = require("../PageElements/LandingElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class LoginActions {
    constructor() {
        globalThis.log = new LoginElements();
        globalThis.lan = new LandingElements();
        globalThis.dash= new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnLoginButton() {
        lan.loginElement().click({ force: true })
    }
    enterUsername() {
        log.usernameElement().type(tdata.login.username)
    }
    enterPassword() {
        log.passwordElement().type(tdata.login.password)
    }
    clickOnContiune() {
       log.continueElement().click({ force: true })
    }
    verifyTitleDashboard() {
        cy.title().should('eq', 'Account Dashboard')
    }
    enterWrongUsername() {
        log.usernameElement().type(tdata.login.wusername)
    }
    enterWrongPassword() {
        log.passwordElement().type(tdata.login.wpassword)
    }
    verifyErrorMessage() {
        cy.contains('Wrong email or password.').should('be.visible')
    }

}

export default LoginActions 