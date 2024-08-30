/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class AccountDetailsElements {

    titleElement() {
        return cy.get(locator.accountDetails.title, {
            timeout: 30000,
        });
    }
    titlenewElement() {
        return cy.get(locator.newaccount.titlenew, {
            timeout: 30000,
        });
    }
    titleAccountElement() {
        return cy.contains(locator.accountDetails.titleAccount, {
            timeout: 30000,
        });
    }
    accountnameElement() {
        return cy.contains(locator.accountDetails.accountname, {
            timeout: 30000,
        });
    }
    accountnoElement() {
        return cy.contains(locator.accountDetails.accountno, {
            timeout: 30000,
        });
    }
    accountcreditElement() {
        return cy.contains(locator.accountDetails.credit, {
            timeout: 30000,
        });
    }
    billingaddressElement() {
        return cy.contains(locator.accountDetails.billingaddress, {
            timeout: 30000,
        });
    }
    shippingaddressElement() {
        return cy.contains(locator.accountDetails.shippingaddress, {
            timeout: 30000,
        });
    }
    accountmanagerElement() {
        return cy.contains(locator.accountDetails.accountmanager, {
            timeout: 30000,
        });
    }
    vivaTechElement(){
        return cy.contains(locator.accountDetails.vivaTech, {
            timeout: 30000,
        })
    }
}
