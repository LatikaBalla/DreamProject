/// <reference types="cypress" />
const InHouseRepairReportElements = require("../PageElements/InHouseRepairReportElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")

export class InHouseRepairReportActions {
    constructor() {
        globalThis.inh = new InHouseRepairReportElements();
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
    clickOnInHouseRepairReport() {

        repc.inhouserrElement().click({ force: true })
        cy.get('.MuiToolbar-root > .MuiButton-root').click({ force: true })
    }
    AllSectionsVisible() {
        inh.section1Element().should('be.visible')
        inh.section2Element().should('be.visible')
        inh.section3Element().should('be.visible')
        inh.section4Element().should('be.visible')
    }
    ticketDataGraphVisible() {
        inh.ticketdataElement().should('be.visible')
    }

}
export default InHouseRepairReportActions 