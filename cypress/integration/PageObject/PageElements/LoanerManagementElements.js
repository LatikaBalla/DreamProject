        /// <reference types="cypress" />
        const locator = require("../../../locators.json");
        export default class  LoanerManagementElements {
 
            tableElement() {
                return cy.get(locator.loanerManagement.table, {
                    timeout: 30000,
                })
            }
        }