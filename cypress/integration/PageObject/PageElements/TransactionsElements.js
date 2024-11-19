/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class TransactionsElements {

    titleElement() {
        return cy.contains(locator.transactions.title, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.transactions.fieldName, {
            timeout: 30000,
        });
    }
    fieldValueElement() {
        return cy.get(locator.transactions.fieldValue, {
            timeout: 30000,
        });
    }
    fieldOpElement() {
        return cy.get(locator.transactions.fieldOp, {
            timeout: 30000,
        });
    }
    applyElement() {
        return cy.get(locator.transactions.apply, {
            timeout: 30000,
        });
    }

    addFilterElement() {
        return cy.get(locator.transactions.addFilter, {
            timeout: 30000,
        });
    }
    clearFilterElement() {
        return cy.get(locator.transactions.clearFilter, {
            timeout: 30000,
        });
    }
    viewElement() {
        return cy.get(locator.transactions.view, {
            timeout: 30000,
        });
    }
    exportElement() {
        return cy.get(locator.transactions.export, {
            timeout: 30000,
        });
    }
    uploadElement() {
        return cy.get(locator.transactions.upload, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.transactions.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.transactions.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.transactions.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.transactions.clearSort, {
            timeout: 30000,
        })
    }
    helpIconElement() {
        return cy.get(locator.transactions.helpIcon, {
            timeout: 30000,
        })
    }
    printbtnElement() {
        return cy.contains(locator.transactions.printbtn, {
            timeout: 30000,
        })
    }
    downloadbtnElement() {
        return cy.contains(locator.transactions.downloadbtn, {
            timeout: 30000,
        })
    }
    estimatesElement() {
        return cy.get(locator.transactions.estimates, {
            timeout: 30000,
        })
    }
    quotesElement() {
        return cy.get(locator.transactions.quotes, {
            timeout: 30000,
        })
    }
    ordersElement() {
        return cy.get(locator.transactions.orders, {
            timeout: 30000,
        })
    }
    invoicesElement() {
        return cy.get(locator.transactions.invoices, {
            timeout: 30000,
        })
    }
}
