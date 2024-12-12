/// <reference types="cypress" />
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class ReportCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ReportCenterElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
    }
    verifyTitleReportCenter() {
        repc.titleElement()
    }
    vivacityRepairReportTabVisible() {
        repc.vivacityrrElement().should('be.visible')
    }
    inhouseRepairReportTabVisible() {
        repc.inhouserrElement().scrollIntoView().should('be.visible')
    }
    deviceRepairReportTabVisible() {
        repc.devicerrElement().scrollIntoView().should('be.visible')
    }
    fleetValueTabVisible() {
      //  cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true })
        repc.fleetValueElement().should('be.visible')
    }
    clickOnReportCenter() {
        dash.reportcenterElement().click({ force: true })
    }
    telemetryDataTabVisible() {
        repc.telemetrydElement().should('be.visible')
    } 
}
export default ReportCenterActions 