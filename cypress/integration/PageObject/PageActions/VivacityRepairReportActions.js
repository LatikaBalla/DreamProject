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
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnReportCenter() {
        dash.reportcenterElement().click({ force: true })
    }
    clickOnVivacityRepairReport() {
        repc.vivacityrrElement().click({ force: true })
    }
    AllSectionsVisible() {
        viva.section1Element().should('be.visible')
        viva.section2Element().should('be.visible')
        viva.section3Element().should('be.visible')
        viva.section4Element().should('be.visible')
    }
    repairStatusGraphVisible() {
        viva.repairstatusElement().eq(2).scrollIntoView().should('be.visible')
    }
    warrantyClaimGraphvisible() {
        viva.warrantyElement().eq(1).scrollIntoView().should('be.visible')
    }
    cavasOfRepairTicketByStatusVisible() {
        viva.canvasElement().eq(0).scrollIntoView().should('be.visible')
    }
    selectbuilding() {
        viva.buildingdropElement().click({ force: true })    
        cy.get('[data-value="2336"]').contains('Thompson High School').click({ force: true })
        cy.get('[data-testid="CheckBoxOutlineBlankIcon"]').eq(1).click({ force: true })
    }
    clickonClearFilter() {
        viva.clearFilterElement().click({ force: true })
    }
}
export default VivacityRepairReportActions 