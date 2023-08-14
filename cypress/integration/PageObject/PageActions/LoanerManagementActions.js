/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const LoanerManagementElements = require("../PageElements/LoanerManagementElements.js")

export class LoanerManagementActions {
    constructor() {
        globalThis.mdev = new ManageDevicesElements();
        globalThis.dash = new DashboardElements();
        globalThis.mf = new LoanerManagementElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnManageDevices() {
        dash.arrowElement().click({ force: true })
        dash.managedevicesElement().click({ force: true })
    }
    clickOnLoanerManagement() {
        mdev.loanerManagementElement().click({ force: true })
    }
    tableVisible() {
        mf.tableElement().should('be.visible')
    }
}
export default LoanerManagementActions 