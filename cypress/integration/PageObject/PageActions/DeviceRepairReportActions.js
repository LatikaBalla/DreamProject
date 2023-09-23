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
        dash.arrowElement().click({ force: true })
        dash.reportcenterElement().click({ force: true })
    }
    clickOnDeviceRepairReport() {
        repc.devicerrElement().click({ force: true })
        cy.wait(1000)
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
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.deviceRepairReport.ticketno)
    }
    clickOnClearButton() {
        dev.clearbtnElement().click({force:true})
    }
    searchBoxEmpty() {
        dev.searchElement().should('be.empty')
    }
    clickOnTicketNumberTable() {
        cy.get('tbody tr').eq(0).find('td').eq(0).click({ force: true })
    }
    verifyRapairTicketPAge() {
        dev.headingElement()
    }
    verifyTicketDetails() {
    }
    clickOnDownloadButton() {
        dev.downloadticketElement().click({ force: true })
    }
    verifyDownloadSuccessful() {
        cy.verifyDownload('*.pdf')
    }

}
export default DeviceRepairReportActions 