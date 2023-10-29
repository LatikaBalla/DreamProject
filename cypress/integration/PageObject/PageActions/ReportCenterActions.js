/// <reference types="cypress" />
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class ReportCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ReportCenterElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    verifyTitleReportCenter() {
        repc.titleElement()
    }
    vivacityRepairReportTabVisible() {
        repc.vivacityrrElement().should('be.visible')
    }
    inhouseRepairReportTabVisible() {
        repc.inhouserrElement().should('be.visible')
    }
    deviceRepairReportTabVisible() {
        repc.devicerrElement().should('be.visible')
    }
    clickOnReportCenter() {
       // dash.arrowElement().click({ force: true })
        dash.reportcenterElement().click({ force: true })
    }

}

export default ReportCenterActions 