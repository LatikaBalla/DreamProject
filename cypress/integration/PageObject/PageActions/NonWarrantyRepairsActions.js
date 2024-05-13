/// <reference types="cypress"/>
const NonWarrantyRepairsElements = require("../PageElements/NonWarrantyRepairsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const tdata = require("../../../testData.json");

export class NonWarrantyRepairsActions {
    constructor() {
        globalThis.nwr = new NonWarrantyRepairsElements();
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ReportCenterElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnReportCenter() {
        dash.reportcenterElement().click({ force: true })
    }
    clickOnNonWarrantyRepairs() {
        repc.warrantyrElement().click({ force: true })
    }
    verifyTitle() {
        nwr.titleElement().should('be.visible')
    }
    filtersVisible() {
        nwr.filtersElement().should('be.visible')
    }
    tableVisible() {
        nwr.tableElement().should('be.visible')
    }
    formVisible() {
        nwr.formElement().should('be.visible')
    }
    selectFailureType() {
        nwr.failuretypeElement().click({ force: true })
        cy.get(tdata.nonwarrantyRepairs.failuretype).click({ force: true })
    }
    selectSerialDevice() {
        nwr.serialdeviceElement().click({ force: true })
        cy.get(tdata.nonwarrantyRepairs.serialdevice).eq(0).click({ force: true })
    }
    // selectTechnician() {
    //     iht.technicianElement().click({ force: true })
    //     cy.get('[role="listbox"]').find('li').contains(tdata.nonwarrantyRepairs.technician).click({ force: true })  
    // }
    selectSite() {
        nwr.siteElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectBuilding() {
        nwr.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
        // cy.get(tdata.repairTickets.building).eq(0).click({ force: true })
    }
    selectRepaireIssue() {
        nwr.issueElement().click({ force: true })
        cy.get(tdata.nonwarrantyRepairs.repairissue).click({ force: true })
    }
    enterChromebookIssue() {
        nwr.describeElement().type(tdata.nonwarrantyRepairs.chromebookissue, { force: true })
    }
    clickOnSaveButton() {
        nwr.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        dash.messageElement().should('contain', tdata.nonwarrantyRepairs.createTicketmsg)
    }
    selectdropdownList() {
        nwr.searchdropdownElement().eq(5).click({ force: true })
        nwr.ticketnumberElement().click({ force: true })
    }
    enterTicketNumberSearch() {
        cy.wait(1000)
        nwr.searchElement().clear().type(tdata.nonwarrantyRepairs.ticketno, { force: true })
    }
    verifyTicketDetailsTable() {
        cy.wait(5000)
        cy.get('tr td').eq(1).should('contain', tdata.nonwarrantyRepairs.ticketno)
    }
    verifyRapairTicketPAge() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnClearButton() {
        cy.get('[data-testid="KeyboardBackspaceIcon"]').click({ force: true })
        nwr.clearbtnElement().click({ force: true })
    }
    searchBoxEmpty() {
        nwr.searchElement().should('be.empty')
    }
    clickOnTicketNumberTable() {
        cy.window().then(win => {
            // win.open('https://google.com', '_blank');
           });
           cy.get('body').type('{ctrl}t');
           cy.visit("/repair-center/ticket-detail/"+tdata.nonwarrantyRepairs.recordid)
       // cy.get('tr td').eq(8).scrollIntoView().contains('View').click({ force: true })
    }
    verifyTicketDetails() {
        cy.contains(tdata.nonwarrantyRepairs.ticketno).should('be.visible')
    }
    clickOnDownloadButton() {
        nwr.downloadticketElement().click({ force: true })
    }
    searchRecordId() {
        cy.wait(3000)
        nwr.searchdropdownElement().eq(5).click({ force: true })
        nwr.recordidElement().click({ force: true })
       // cy.wait(1000)
        nwr.searchElement().clear().type(tdata.nonwarrantyRepairs.recordid + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.nonwarrantyRepairs.recordid)
    }
    searchRepairType() {
        nwr.searchdropdownElement().eq(5).click({ force: true })
        nwr.repairtypeElement().click({ force: true })
        nwr.searchElement().clear().type(tdata.nonwarrantyRepairs.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.nonwarrantyRepairs.repairtype)
    }
    searchRepairStatus() {
        nwr.searchdropdownElement().eq(5).click({ force: true })
        nwr.repairstatusElement().click({ force: true })
       // nwr.searchdropdownElement().eq(1).click({ force: true })
        nwr.searchElement().clear().type(tdata.nonwarrantyRepairs.repairstatus + '{enter}', { force: true })
       // nwr.intransitElement().click({ force: true })
       cy.wait(1000)
        cy.get('tr td').eq(5).should('contain', tdata.nonwarrantyRepairs.repairstatus, { force: true })
    }
    searchRepairBox() {
        nwr.searchdropdownElement().eq(5).click({ force: true })
        nwr.repairboxElement().click({ force: true })
        nwr.searchElement().clear().type(tdata.nonwarrantyRepairs.repairbox + '{enter}', { force: true })
        cy.get('tr td').eq(6).should('contain', tdata.nonwarrantyRepairs.repairbox, { force: true })
    }
    clickOnMoreFilter() {
        nwr.addFilterElement().click({ force: true })
    }
    enterFieldName() {
        nwr.fieldNameElement().select('Ticket Number')
    }
    enterFieldOperation() {
        nwr.fieldOpElement().select('Does Not Contain')
    }
    enterSearchValue() {
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.ticketno)
    }
    clickOnApply() {
        nwr.applyElement().click({ force: true })
    }
    verifyResultFilter() {
        cy.get('tr td').eq(1).should('not.contain', tdata.nonwarrantyRepairs.ticketno)
    }
    clickOnClearFilter() {
        nwr.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId() {
        nwr.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        nwr.fieldOpElement().select('Contains', { force: true }).should('have.value', 'Contains')
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.recordid)
        nwr.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('tr td').eq(0).should('contain', tdata.nonwarrantyRepairs.recordid)
    }
    selectFilterTicketNumber() {
        nwr.fieldNameElement().select(1).invoke("val").should("eq", "ticket_number")
        nwr.fieldOpElement().select('Does Not Contain', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.ticketno)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.nonwarrantyRepairs.ticketno)
    }
    selectFilterRepairType() {
        nwr.fieldNameElement().select('repair_type', { force: true })
        nwr.fieldOpElement().select('Contains', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.repairtype)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('contain', tdata.nonwarrantyRepairs.repairtype)
    }
    selectFilterSerialNumber() {
        nwr.fieldNameElement().select('serial_number', { force: true })
        nwr.fieldOpElement().select('Does Not Contain', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.serialnumber)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.nonwarrantyRepairs.serialnumber)
    }
    selectFilterRepairStatus() {
        nwr.fieldNameElement().select('repair_status', { force: true })
        nwr.fieldOpElement().select('Contains', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.repairstatus)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('contain', tdata.nonwarrantyRepairs.repairstatus)
    }
    selectFilterRepairDevice() {
        nwr.fieldNameElement().select('repair_device', { force: true })
        nwr.fieldOpElement().select('Does Not Contain', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.repairdevice)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.nonwarrantyRepairs.repairdevice)
    }
    selectFilterAssetTag() {
        nwr.fieldNameElement().select('asset_tag', { force: true })
        nwr.fieldOpElement().select('Does Not Contain', { force: true })
        nwr.fieldValueElement().type('Lea')
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', 'Lea')
    }
    selectFilterRepairBox() {
        nwr.fieldNameElement().select('repair_box', { force: true })
        nwr.fieldOpElement().select('Does Not Contain', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.repairbox)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('not.contain', tdata.nonwarrantyRepairs.repairbox)
    }
    selectFilterCreatedBy() {
        nwr.fieldNameElement().select('created_by', { force: true })
        nwr.fieldOpElement().select('Does Not Contain', { force: true })
        nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.createdby)
        nwr.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.nonwarrantyRepairs.createdby)
    }
    clickOnExport() {
        cy.contains('Export').click({ force: true })
    }
}
export default NonWarrantyRepairsActions 