/// <reference types="cypress" />
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class ReportCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ReportCenterElements();
    }
    closeTermsOfServiceWindow() {
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true })
       //dash.termsElement().click({ force: true })
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
        repc.devicerrElement().should('be.visible')
    }
    nonwarrantyRepairsTabVisible() {
        cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true })
        repc.warrantyrElement().should('be.visible')
    }
    clickOnReportCenter() {
        dash.reportcenterElement().click({ force: true })
    }
    telemetryDataTabVisible() {
        repc.telemetrydElement().should('be.visible')
    } 
}
export default ReportCenterActions 