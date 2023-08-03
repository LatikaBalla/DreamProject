/// <reference types="cypress" />
const DeviceRepairReportElements = require("../PageElements/DeviceRepairReportElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
export class DeviceRepairReportActions {
    constructor() {
        globalThis.dev = new DeviceRepairReportElements();
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ReportCenterElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnReportCenter() {
        dash.arrowElement().click({ force: true })
        dash.reportcenterElement().click({ force: true })
    }
    clickOnDeviceRepairReport() {
        repc.devicerrElement().click({ force: true })
        cy.get('.MuiToolbar-root > .MuiButton-root').click({ force: true })
    }
    verifyTitle() {
        dev.titleElement().should('be.visible')
    }
    filtersVisible() {
        dev.filtersElement().should('be.visible')
    }
    tableVisible() {
        dev.tableElement().should('be.visible')
    }

}
export default DeviceRepairReportActions 