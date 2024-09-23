/// <reference types="cypress" />
const AccountDetailsElements = require("../PageElements/AccountDetailsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");

export class AccountDetailsActions {
    constructor() {
        globalThis.acc = new AccountDetailsElements();
        globalThis.dash = new DashboardElements()
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickonAccountDash(){
        dash.myAccountElement().click({force:true})
    }
    verifyTitleAccountDetails() {
        acc.titleAccountElement().should('be.visible')
    }
    AccountDetailsVisible() {
        dash.myAccountElement().click({force:true})
        acc.accountnameElement().should('be.visible')
        acc.accountnoElement().should('be.visible')
    }
    sectionManaddressVisible() {
        acc.accountmanagerElement().should('be.visible')
       // acc.billingaddressElement().should('be.visible')
        //acc.shippingaddressElement().should('be.visible')
    }    
    vivaTechVisible(){
       acc.vivaTechElement().should('be.visible')
    }

}

export default AccountDetailsActions 