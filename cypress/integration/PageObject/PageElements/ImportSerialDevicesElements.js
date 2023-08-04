        /// <reference types="cypress" />
        const locator = require("../../../locators.json");
        export default class ImportSerialDevicesElements {
            titleElement() {
                return cy.contains(locator.importSerialDevices.title, {
                    timeout: 30000,
                })
            }
            filtersElement() {
                return cy.get(locator.importSerialDevices.filters, {
                    timeout: 30000,
                })
            } 
            tableElement() {
                return cy.get(locator.importSerialDevices.table, {
                    timeout: 30000,
                })
            }
        }