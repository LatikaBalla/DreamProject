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
        cy.contains('Remind me Later').click({ force: true })
        dash.termsElement().contains('Dismiss').click({ force: true })
        // dash.termsElement().click({ force: true })
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
        cy.get('[role="listbox"]').eq(0).find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectSerialDevice() {
        rt.serialdeviceElement().click({ force: true })
        cy.get(tdata.repairTickets.serialdevice).click({ force: true })
    }
    selectBuilding() {
        rt.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains('Building Two').click({ force: true })
        // cy.get(tdata.repairTickets.building).eq(0).click({ force: true })
    }
    selectStudent() {
        // cy.get('#student_id').click({ force: true })
        // cy.get('[role="combobox"]')
        // find(tdata.repairTickets.student).click({ force: true })
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
        cy.wait(8000)
        dash.messageElement().should('contain', tdata.repairTickets.createTicketmsg)
    }
    clickOnExport() {
        rt.exportElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.repairTickets.filename)
    }
    clickOnViewButton() {
        cy.window().then(win => {
            // win.open('https://google.com', '_blank');
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/ticket-detail/" + tdata.repairTickets.recordid)
        cy.get('tr td').eq(9).contains('View').scrollIntoView().click({ force: true })
    }
    verifyDetails() {
        cy.wait(1000)
        cy.contains('Repair Ticket Details').should('be.visible')
        cy.go('back')
    }
    searchRecordId() {
        cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        // rt.searchboxElement().eq(0).click({ force: true })
        rt.recordIdElement().click({ force: true })
        rt.searchElement().clear({ force: true }).type(tdata.repairTickets.recordid + '{enter}', { force: true })
        // cy.wait(1000)
        cy.get('tr td').eq(1).should('contain', tdata.repairTickets.recordid)
    }
    searchTicketNumber() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.ticketnumberElement().click({ force: true })
        rt.searchElement().clear({ force: true }).type(tdata.repairTickets.ticketnumber + '{enter}', { force: true })
        // cy.wait(1000)
        cy.get('tr td').eq(1).should('contain', tdata.repairTickets.ticketnumber)
    }
    searchRepairType() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairtypeElement().click({ force: true })
        rt.searchElement().clear({ force: true }).type(tdata.repairTickets.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.repairTickets.repairtype)
    }
    searchSerialNumber() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.serialnumberElement().click({ force: true })
        rt.searchElement().clear({ force: true }).type(tdata.repairTickets.serialnumber + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(3).should('contain', tdata.repairTickets.serialnumber)
    }
    searchRepairStatus() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairstatusElement().click({ force: true })
        rt.searchboxElement().eq(1).click({ force: true })
        rt.intransitElement().click({ force: true })
        cy.get('tr td').eq(6).should('contain', tdata.repairTickets.repairstatus, { force: true })
    }
    searchRepairBox() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.repairboxElement().click({ force: true })
        rt.searchElement().clear({ force: true }).type(tdata.repairTickets.repairbox + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(7).should('contain', tdata.repairTickets.repairbox, { force: true })
    }
    searchAssetTag() {
        rt.searchboxElement().eq(0).click({ force: true })
        rt.assettagElement().click({ force: true })
        rt.searchElement().clear({ force: true }).type(tdata.repairTickets.assettag + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(4).should('contain', tdata.repairTickets.assettag)
        rt.searchElement().clear({ force: true })
    }
    clickOnMoreFilter() {
        // rt.addFilterElement().click({ force: true })
        cy.wait(2000)
    }
    clickOnClearFilter() {

        // rt.clearFilterElement().click({ force: true })
        cy.get('button[ref="resetFilterButton"]').click({ force: true })
    }
    selectFilterRecordId() {
        rt.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        rt.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        rt.fieldValueElement().type(tdata.repairTickets.recordid)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.repairTickets.recordid)
    }
    selectFilterTicketNumber() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.ticketnumber)
    }
    selectFilterRepairType() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairtype)
    }
    selectFilterSerialNumber() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.serialnumber)
    }
    selectFilterBuilding() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
    }
    selectFilterRepairStatus() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.repairstatus)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairstatus)
    }
    selectFilterRepairBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairbox)
    }
    selectFilterAssetTag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.assettag)
    }
    selectFilterCreatedBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdby)
    }
    selectFilterRepairDevice() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairdevice)
    }
    selectFilteLastModifiedDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
       cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
    }
    clickOnAddLine() {
        rt.addlineElement().click({ force: true })
        rt.custompartElemnet().click({ force: true })
        rt.partElement().click({ force: true })
        cy.get('[role="listbox"]').contains('demo unit').click({ force: true })
        rt.noteElement().type('Testing line', { force: true })
        rt.createlineElement().contains('Create Line Item').click({ force: true })
        dash.messageElement().should('contain', 'Line Item Created')
        // cy.get('[data-testid="CloseIcon"]').click({ force: true })
    }
    clickOnAddRepairImage() {
        rt.addimageElement().click({ force: true })
        cy.get('.MuiGrid-root > .MuiBox-root > :nth-child(2)').click({ force: true })
        cy.get('[id="image"]').attachFile('image1.jpeg', { force: true })
        //rt.uploadimageElement().contains('Upload From Gallery').click({ force: true })
       // cy.get('[alt="Profile"]').attachFile('image1.jpeg', { force: true })
         rt.imagedescriptionElement().type('Testing Image')
       rt.updateimageElement().contains('Upload Image').click({ force: true })
       // dash.messageElement().should('contain', 'Image Created')
        //cy.get('[data-testid="CloseIcon"]').click({force:true})
    }
    clickOnAddNote() {
        rt.addnoteElement().click({ force: true })
        rt.notetypeElement().click({ force: true })
        cy.get('[data-value="Part Received"]').click({ force: true })
        rt.noteElement().type('Testing Note', { force: true })
        rt.createnoteElement().contains('Create').click({ force: true })
       // dash.messageElement().should('contain', 'Ticket updated')
    }
    enterSearchBox() {
        cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        //  cy.get('[role="combobox"]').eq(0).click({ force: true })
        cy.get('[data-value="ticket_number"]').click({ force: true })
        rt.searchElement().type(tdata.repairTickets.ticketnumber + '{enter}', { force: true })
    }
    verifySearchResult() {
        cy.get('tr td').eq(1).should('contain', tdata.repairTickets.ticketnumber)
    }
    clickViewButton() {
        cy.window().then(win => {
            // win.open('https://google.com', '_blank');
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/ticket-detail/" + tdata.repairTickets.recordid)
        //  cy.get('tr td').eq(9).contains('View').scrollIntoView().click({ force: true })
        //cy.get('tr td').eq(10).scrollIntoView().contains('View').click({ force: true })
       // rt.viewElement().eq(0).click({ force: true })
    }
    verifySrcRepairTicket() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnEditButton() {
        cy.wait(4000)
        rt.editTicketElement().click({ force: true })
    }
    editTehnician() {
        rt.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.repairTickets.technician).click({ force: true })
    }
    editRepairStatus() {
        rt.repairstatusEditElement().click({ force: true })
        cy.get(tdata.repairTickets.repairstatusEdit).click({ force: true })
    }
    clickOnUpdate() {
        rt.updateElement().click({ force: true })
    }
    verifyUpdate() {
        //cy.get('tr td').eq(1).should('contain', tdata.inHouseTicket.recordid)
    }
}
export default RepairTicketsActions 