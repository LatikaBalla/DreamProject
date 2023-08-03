/// <reference types="cypress" />
const VivacityRepairReportElements = require("../PageElements/VivacityRepairReportElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
export class VivacityRepairReportActions {
    constructor() {
        globalThis.viva = new VivacityRepairReportElements();
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
    clickOnVivacityRepairReport() {
        cy.get('.MuiToolbar-root > .MuiButton-root').click({ force: true })
        repc.vivacityrrElement().click({ force: true })
    }
    AllSectionsVisible() {
        viva.section1Element().should('be.visible')
        viva.section2Element().should('be.visible')
        viva.section3Element().should('be.visible')
        viva.section4Element().should('be.visible')
    }
    repairStatusGraphVisible() {
        viva.repairstatusElement().should('be.visible')
    }
    warrantyClaimGraphvisible() {
        viva.warrantyElement().should('be.visible')
    }
    cavasOfRepairTicketByStatusVisible() {
        viva.canvasElement().should('be.visible')
    }
}
export default VivacityRepairReportActions 