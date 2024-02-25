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
        dev.searchElement().clear().type(tdata.deviceRepairReport.ticketno, { force: true })
    }
    verifyTicketDetailsTable() {
        cy.wait(2000)
        cy.get('tr td').eq(1).should('contain', tdata.deviceRepairReport.ticketno)
    }
    clickOnClearButton() {
        cy.get('[data-testid="KeyboardBackspaceIcon"]').click({ force: true })
        dev.clearbtnElement().click({ force: true })
    }
    searchBoxEmpty() {
        dev.searchElement().should('be.empty')
    }
    clickOnTicketNumberTable() {
        cy.window().then(win => {
           // win.open('https://google.com', '_blank');
          });
          cy.get('body').type('{ctrl}t');
          cy.visit("https://dream-frontend-stage.onrender.com/repair-center/ticket-detail/"+tdata.deviceRepairReport.recordid1 , {visitTimeout: 30000})
       //   cy.get('tr td').eq(9).scrollIntoView().contains('View').click({ force: true })    
    }
    verifyRapairTicketPAge() {
        dev.headingElement().should('be.visible')
    }
    verifyTicketDetails() {
        cy.contains(tdata.deviceRepairReport.ticketno).should('be.visible')
    }
    clickOnDownloadButton() {
        dev.downloadticketElement().click({ force: true })
      //  cy.get('body').type('{ctrl}w');
    }
    verifyDownloadSuccessful() {
        cy.verifyDownload("/download/", tdata.deviceRepairReport.filename)
    }
    clickOnExport() {
        cy.contains('Export').click({ force: true })
    }
    selectdropdownList() {
        dev.searchdropdownElement().eq(0).click({ force: true })
        dev.ticketnumberElement().click({ force: true })
    }
    searchRecordId() {
        cy.wait(3000)
        dev.searchdropdownElement().eq(0).click({ force: true })
        dev.recordidElement().click({ force: true })
        cy.wait(1000)
        dev.searchElement().clear().type(tdata.deviceRepairReport.recordid + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.deviceRepairReport.recordid)
    }
    searchRepairType() {
        dev.searchdropdownElement().eq(0).click({ force: true })
        dev.repairtypeElement().click({ force: true })
        dev.searchElement().clear().type(tdata.deviceRepairReport.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.deviceRepairReport.repairtype)
    }
    searchRepairStatus() {
        dev.searchdropdownElement().eq(0).click({ force: true })
        dev.repairstatusElement().click({ force: true })
        dev.searchdropdownElement().eq(1).click({ force: true })
        dev.intransitElement().click({ force: true })
        cy.get('tr td').eq(6).should('contain', tdata.repairTickets.repairstatus, { force: true })
    }
    searchRepairBox() {
        dev.searchdropdownElement().eq(0).click({ force: true })
        dev.repairboxElement().click({ force: true })
        dev.searchElement().clear().type(tdata.deviceRepairReport.repairbox + '{enter}', { force: true })
       // cy.wait(4000)
        cy.get('tr td').eq(6).should('contain', tdata.deviceRepairReport.repairbox, { force: true })
    }
    clickOnMoreFilter() {
        dev.addFilterElement().click({ force: true })
    }
    clickOnClearFilter() {
        dev.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId() {
        dev.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        dev.fieldValueElement().type(tdata.deviceRepairReport.recordid)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.deviceRepairReport.recordid)
    }
    selectFilterTicketNumber() {
        dev.fieldNameElement().select(1).invoke("val").should("eq", "ticket_number")
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.ticketnumber)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.deviceRepairReport.ticketnumber)
    }
    selectFilterRepairType() {
        dev.fieldNameElement().select('repair_type', { force: true })
        dev.fieldOpElement().select('Contains', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.repairtype)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('contain', tdata.deviceRepairReport.repairtype)
    }
    selectFilterSerialNumber() {
        dev.fieldNameElement().select('serial_number', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.serialnumber)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.deviceRepairReport.serialnumber)
    }
    selectFilterRepairStatus() {
        dev.fieldNameElement().select('repair_status', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.repairstatus)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('not.contain', tdata.deviceRepairReport.repairstatus)
    }
    selectFilterRepairDevice() {
        dev.fieldNameElement().select('repair_device', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.repairdevice)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.deviceRepairReport.repairdevice)
    }
    selectFilterAssetTag() {
        dev.fieldNameElement().select('asset_tag', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type('Lea')
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', 'Lea')
    }
    selectFilterRepairBox() {
        dev.fieldNameElement().select('repair_box', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.repairbox)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('not.contain', tdata.deviceRepairReport.repairbox)
    }
    selectFilterCreatedBy() {
        dev.fieldNameElement().select('created_by', { force: true })
        dev.fieldOpElement().select('Does Not Contain', { force: true })
        dev.fieldValueElement().type(tdata.deviceRepairReport.createdby)
        dev.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.deviceRepairReport.createdby)
    }
}
export default DeviceRepairReportActions 