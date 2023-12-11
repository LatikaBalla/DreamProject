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
        // dash.arrowElement().click({ force: true })
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
        cy.get('[data-value="ticket_number"]').click()
    }
    enterTicketNumberSearch() {
        nwr.searchElement().type(tdata.nonwarrantyRepairs.ticketno, { force: true })
    }
    verifyTicketDetailsTable() {
        cy.get('tr td').eq(1).should('contain', tdata.nonwarrantyRepairs.ticketno)
    }
    verifyRapairTicketPAge(){
        cy.contains('Repair Ticket Details').should('be.visible')
    }

    clickOnClearButton() {
        cy.get('[data-testid="KeyboardBackspaceIcon"]').click({force:true})
        nwr.clearbtnElement().click({force:true})
    }
    searchBoxEmpty() {
        nwr.searchElement().should('be.empty')
    }
    clickOnTicketNumberTable() {
        cy.get('tr td').eq(9).contains('View').click({ force: true })
    }
    verifyTicketDetails() {
        cy.contains(tdata.nonwarrantyRepairs.ticketno).should('be.visible')
    }
    clickOnDownloadButton() {
        nwr.downloadticketElement().click({ force: true })
    }
}
export default NonWarrantyRepairsActions 