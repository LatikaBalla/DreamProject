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
    formVisible(){
        nwr.formElement().should('be.visible')  
    }

    // enterTicketNumberSearch() {
    //     dev.searchElement().type(tdata.deviceRepairReport.ticketno,{force:true})
    // }


    // verifyTicketDetailsTable() {
    //     cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.deviceRepairReport.ticketno)
    // }
   
    // searchBoxEmpty() {
    //     dev.searchElement().should('be.empty')
    // }
    // clickOnTicketNumberTable() {
    //     cy.get('tbody tr').eq(0).find('td').eq(0).click({ force: true })
    // }
    // verifyRapairTicketPAge() {
    //     dev.headingElement()
    // }
    // verifyTicketDetails() {
    // }
    // clickOnDownloadButton() {
    //     dev.downloadticketElement().click({ force: true })
    // }
    // verifyDownloadSuccessful() {
    //     cy.verifyDownload("/download/",tdata.NonWarrantyRepairs.filename)
    // }

}
export default NonWarrantyRepairsActions 