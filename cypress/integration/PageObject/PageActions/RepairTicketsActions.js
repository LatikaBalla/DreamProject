/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const RepairTicketsElements = require("../PageElements/RepairTicketsElements.js")
const tdata = require("../../../testData.json");
export class RepairTicketsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.rt = new RepairTicketsElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        // dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairTicketsTab() {
        mdev.repairTicketsElement().click({ force: true })
    }
    verifyTitle() {
        rt.titleElement().should('be.visible')
    }
    filtersVisible() {
        rt.filtersElement().should('be.visible')
    }
    tableVisible() {
        rt.tableElement().should('be.visible')
    }
    clickOnCreateNewTicket() {
        rt.createTicketElement().click({ force: true })
    }
    selectFailureType() {
        rt.failuretypeElement().click({ force: true })
        cy.get(tdata.repairTickets.failuretype).click({ force: true })
    }
    selectReturnSite() {
        rt.returnsiteElement().click({ force: true })
        // cy.get(tdata.repairTickets.returnsite).click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectSerialDevice() {
        rt.serialdeviceElement().click({ force: true })
        cy.get(tdata.repairTickets.serialdevice).click({ force: true })
    }
    selectBuilding() {
        rt.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
        // cy.get(tdata.repairTickets.building).eq(0).click({ force: true })
    }
    selectChromebookIssue() {
        rt.chromebookissueElement().click({ force: true })
        cy.get(tdata.repairTickets.chromebookissue).click({ force: true })
    }
    enterDescritionOfIssue() {
        rt.descriptionElement().type(tdata.repairTickets.description, { force: true })
    }
    clickOnSaveButton() {
        rt.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(6000)
        dash.messageElement().should('contain', tdata.repairTickets.createTicketmsg)
    }
    clickOnExport() {
        rt.exportElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.repairTickets.filename)
    }
    clickOnViewButton() {
        cy.get('tr td').eq(9).contains('View').scrollIntoView().click({ force: true })
    }
    verifyDetails() {
        cy.wait(1000)
        cy.contains('Repair Ticket Details').should('be.visible')
        cy.go('back')
    }
    searchTicketNumber() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.ticketnumberElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.ticketnumber + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(1).should('contain', tdata.repairTickets.ticketnumber)
    }
    searchRepairType() {   
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairtypeElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.repairTickets.repairtype)
    }
    searchSerialNumber() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.serialnumberElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.serialnumber + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(3).should('contain', tdata.repairTickets.serialnumber)
    }
    searchRepairStatus() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairstatusElement().click({ force: true })
        rt.searchboxElement().eq(1).click({ force: true })
       rt.intransitElement().click({ force: true })
       
      //  cy.get('tr td').eq(6).should('contain', tdata.repairTickets.repairstatus,{ force: true })
    }
    searchRepairBox() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairboxElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.repairbox + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(6).should('contain', tdata.repairTickets.repairbox,{ force: true })
    }
    searchAssetTag() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.assettagElement().click({ force: true })
        rt.searchElement().clear().type(tdata.repairTickets.assettag + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(4).should('contain', tdata.repairTickets.assettag)
    }
    clickOnMoreFilter() {
        rt.addFilterElement().click({ force: true })
    }
    // enterFieldName() {
    //     rt.fieldNameElement().select('Ticket Number')
    // }
    // enterFieldOperation() {
    //     rt.fieldOpElement().select('Does Not Contain')
    // }
    // enterSearchValue() {
    //     rt.fieldValueElement().type(tdata.repairTickets.ticketnumber)
    // }
    // clickOnApply() {
    //     rt.applyElement().click({ force: true })
    // }
    // verifyResultFilter() {
    //     cy.get('tr td').eq(1).should('not.contain', tdata.repairTickets.ticketnumber)
    // }
    clickOnClearFilter() {
        rt.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId(){
        rt.fieldNameElement().select(0).invoke("val").should("eq", 'record_id',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true}).should('have.value', 'Does Not Contain')
        rt.fieldValueElement().type(tdata.repairTickets.recordid)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.repairTickets.recordid)
    }
    selectFilterTicketNumber(){
        rt.fieldNameElement().select(1).invoke("val").should("eq", "ticket_number")
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.repairTickets.ticketnumber)
    }
    selectFilterRepairType(){
        rt.fieldNameElement().select('repair_type',{force:true})
        rt.fieldOpElement().select('Contains',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('contain', tdata.repairTickets.repairtype)
    }
    selectFilterSerialNumber(){
        rt.fieldNameElement().select('serial_number',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.repairTickets.serialnumber)
    }
    selectFilterRepairStatus(){
        rt.fieldNameElement().select('repair_status',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.repairstatus)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('not.contain', tdata.repairTickets.repairstatus)
    }
    selectFilterRepairBox(){
        rt.fieldNameElement().select('repair_box',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('not.contain', tdata.repairTickets.repairbox)
    }
    selectFilterAssetTag(){
        rt.fieldNameElement().select('asset_tag',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type('Lea')
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', 'Lea')
    }
    selectFilterCreatedBy(){
        rt.fieldNameElement().select('created_by',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.repairTickets.createdby)
    }
    selectFilterRepairDevice(){
        rt.fieldNameElement().select('repair_device',{force:true})
        rt.fieldOpElement().select('Does Not Contain',{force:true})
        rt.fieldValueElement().type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.repairTickets.repairdevice)
    }
}
export default RepairTicketsActions 