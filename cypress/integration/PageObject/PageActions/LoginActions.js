/// <reference types="cypress" />
const LoginElements = require("../PageElements/LoginElements.js")
const LandingElements = require("../PageElements/LandingElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class LoginActions {
    constructor() {
        globalThis.log = new LoginElements();
        globalThis.lan = new LandingElements();
        globalThis.dash = new DashboardElements();
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
        const uniqueSeed = Date.now();
        log.usernameElement().type(uniqueSeed + tdata.newaccount.email, { force: true })
    }
    enterWrongPassword() {
        log.passwordElement().type(tdata.login.wpassword)
    }
    verifyErrorMessage() {
        cy.contains( tdata.login.errormsg).should('be.visible')
    }
    verifyMailforgetpass() {
        log.errormessageElement().should('contain', tdata.login.forgotpassmsg)
    }
    clickOnForgetPassword() {
        log.forgotpassElement().click({ force: true })
    }
    verifyErrorforgetpass() {
        log.errormessageElement().should('contain', tdata.login.errormsg)
    }
    enterWrongUsernameLock(){
        log.usernameElement().type(tdata.login.wusername)
    }
    verifyLockedacc(){
        log.errormessageElement().should('contain', tdata.login.lockerrormsg)
    }

}
export default LoginActions 