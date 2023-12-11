/// <reference types="cypress"/>
const DeviceRepairReportElements = require("../PageElements/DeviceRepairReportElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const tdata = require("../../../testData.json");
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
        dash.reportcenterElement().click({ force: true })
    }
    clickOnDeviceRepairReport() {
        repc.devicerrElement().click({ force: true })
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
    enterTicketNumberSearch() {
        dev.searchElement().type(tdata.deviceRepairReport.ticketno,{force:true})
    }
    verifyTicketDetailsTable() {
        cy.get('tr td').eq(1).should('contain', tdata.deviceRepairReport.ticketno)
    }
    clickOnClearButton() {
        cy.get('[data-testid="KeyboardBackspaceIcon"]').click({force:true})
        dev.clearbtnElement().click({force:true})
    }
    searchBoxEmpty() {
        dev.searchElement().should('be.empty')
    }
    clickOnTicketNumberTable() {
        cy.get('tr td').eq(9).contains('View').click({ force: true })
    }
    verifyRapairTicketPAge() {
        dev.headingElement().should('be.visible')
    }
    verifyTicketDetails() {
        cy.contains(tdata.deviceRepairReport.ticketno).should('be.visible')
    }
    clickOnDownloadButton() {
        dev.downloadticketElement().click({ force: true })
    }
    verifyDownloadSuccessful() {
        cy.verifyDownload("/download/",tdata.deviceRepairReport.filename)
    }
    selectdropdownList(){
        dev.searchdropdownElement().eq(0).click({force:true})
        cy.get('[data-value="ticket_number"]').click()
    }

}
export default DeviceRepairReportActions 