/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const SrcRepairTicketsElements = require("../PageElements/SrcRepairTicketsElements.js")
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class SrcRepairTicketsActions {
    constructor() {
        globalThis.rep = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.srt = new SrcRepairTicketsElements();
        globalThis.mf1 = new StudentRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        //  dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        rep.studentrcElement().click({ force: true })
    }
    clickOnSrcRepairTicketsTab() {
        mf1.srcRepairTicketsElement().click({ force: true })
    }
    verifyTitle() {
        srt.titleElement().should('be.visible')
    }
    filtersVisible() {
        srt.filtersElement().should('be.visible')
    }
    tableVisible() {
        srt.tableElement().should('be.visible')
    }
    clickOnCreateTicketButton() {
        srt.createTicketElement().click({ force: true })
    }
    selectFailureType() {
        srt.failuretypeElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.failuretype).click({ force: true })
    }
    selectSerialDevice() {
        srt.serialdeviceElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.serialdevice).click({ force: true })
    }
    selectTechnician() {
        srt.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.srcRepairTicket.technician).click({ force: true })
    }
    selectIssue() {
        srt.issueElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.issue).click({ force: true })
    }
    selectBuilding() {
        srt.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    enterChromebookIssue() {
        srt.chromebookissueElement().type(tdata.srcRepairTicket.chromebookissue, { force: true })
    }
    enterimagedescription() {
        srt.imagedescriptionElement().type('image info', { force: true })
    }
    clickOnSaveButton() {
        srt.savebtnElement().click({ force: true })
        cy.wait(5000)
    }
    verifyNewTicket() {
        dash.messageElement().should('contain', tdata.srcRepairTicket.createTicketmsg)
    }
    enterSearchBox() {
        cy.get('[role="combobox"]').eq(0).click({ force: true })
        cy.get('[data-value="ticket_number"]').click({ force: true })
        srt.searchElement().type(tdata.srcRepairTicket.ticketno + '{enter}', { force: true })
    }
    verifySearchResult() {
        cy.get('tr td').eq(1).should('contain', tdata.srcRepairTicket.ticketno)
    }
    clickViewButton() {
        cy.window().then(win => {
            // win.open('https://google.com', '_blank');
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/inHouse-detail/" + tdata.srcRepairTicket.recordid)
        //   cy.get('tr td').eq(9).scrollIntoView().contains('View').click({ force: true })    
        //  srt.viewElement().click({ force: true })
    }
    verifySrcRepairTicket() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnEditButton() {
        cy.wait(4000)
        srt.editTicketElement().click({ force: true })
    }
    editTehnician() {
        // srt.edittechnicianElement().click({ force: true })
        // cy.get('[role="listbox"]').find('li').contains(tdata.srcRepairTicket.technician).click({ force: true })
    }
    editRepairStatus() {
        srt.repairstatusEditElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.repairstatusEdit).click({ force: true })
    }
    clickOnUpdate() {
        srt.updateElement().click({ force: true })
        //cy.contains('Update').click({force:true})
    }
    verifyUpdate() {
        dash.messageElement().should('contain', tdata.srcRepairTicket.updatemsg)

    }
    searchRecordId() {
        srt.searchboxElement().eq(0).click({ force: true })
        srt.recordidElement().click({ force: true })
        srt.searchElement().clear({ force: true }).type(tdata.srcRepairTicket.recordid + '{enter}', { force: true })
        // cy.wait(4000)
        cy.get('tr td').eq(0).should('contain', tdata.srcRepairTicket.recordid)
    }
    searchTicketNumber() {
        srt.searchboxElement().eq(0).click({ force: true })
        srt.ticketnumberElement().click({ force: true })
        srt.searchElement().clear({ force: true }).type(tdata.srcRepairTicket.ticketnumber + '{enter}', { force: true })
        cy.wait(3000)
        cy.get('tr td').eq(1).should('contain', tdata.srcRepairTicket.ticketnumber)
    }
    searchRepairType() {
        srt.searchboxElement().eq(0).click({ force: true })
        srt.repairtypeElement().click({ force: true })
        srt.searchElement().clear({ force: true }).type(tdata.srcRepairTicket.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.srcRepairTicket.repairtype)
    }
    searchRepairStatus() {
        srt.searchboxElement().eq(0).click({ force: true })
        srt.repairstatusElement().click({ force: true })
        srt.searchElement().clear({ force: true }).type(tdata.srcRepairTicket.repairstatus + '{enter}', { force: true })
        // cy.wait(1000)
        cy.get('tr td').eq(5).should('contain', tdata.srcRepairTicket.repairstatus, { force: true })
        srt.searchElement().clear()
    }
    clickOnMoreFilter() {
        srt.addFilterElement().click({ force: true })
    }
    clickOnClearFilter() {
        srt.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId() {
        srt.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        srt.fieldValueElement().type(tdata.srcRepairTicket.recordid)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.srcRepairTicket.recordid)
    }
    selectFilterTicketNumber() {
        srt.fieldNameElement().select(1).invoke("val").should("eq", "ticket_number")
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.ticketnumber)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.srcRepairTicket.ticketnumber)
    }
    selectFilterRepairType() {
        srt.fieldNameElement().select('repair_type', { force: true })
        srt.fieldOpElement().select('Contains', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.repairtype)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('contain', tdata.srcRepairTicket.repairtype)
    }
    selectFilterSerialNumber() {
        srt.fieldNameElement().select('serial_number', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.serialnumber)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.srcRepairTicket.serialnumber)
    }
    selectFilterRepairStatus() {
        srt.fieldNameElement().select('repair_status', { force: true })
        srt.fieldOpElement().select('Contains', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.repairstatus)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('contain', tdata.srcRepairTicket.repairstatus)
    }
    selectFilterRepairDevice() {
        srt.fieldNameElement().select('repair_device', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.repairdevice)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.srcRepairTicket.repairdevice)
    }
    selectFilterAssetTag() {
        srt.fieldNameElement().select('asset_tag', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type('Lea')
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', 'Lea')
    }
    selectFilterStudentTechnician() {
        srt.fieldNameElement().select('student_technician', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.studenttechnician)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('not.contain', tdata.srcRepairTicket.studenttechnician)
    }
    selectFilterCreatedBy() {
        srt.fieldNameElement().select('created_by', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.createdby)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.srcRepairTicket.createdby)
    }
    selectFilterLastModifiedDate() {
        srt.fieldNameElement().select('last_modified_date', { force: true })
        srt.fieldOpElement().select('Does Not Contain', { force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.lastmodifieddate)
        srt.applyElement().click({ force: true })
        cy.get('tr td').eq(9).should('not.contain', tdata.srcRepairTicket.lastmodifieddate)
    }
    clickOnAddLine() {
        srt.addlineElement().click({ force: true })
        srt.vtverifypartElement().click({ force: true })
        srt.partElement().click({ force: true })
        cy.get('[data-value="2345"]').click({ force: true })
        srt.noteElement().type('Testing line', { force: true })
        srt.createlineElement().contains('Create Line Item').click({ force: true })
        dash.messageElement().should('contain', 'Line Item Created')
        cy.get('[data-testid="CloseIcon"]').click({ force: true })
    }
    clickOnAddRepairImage() {
        srt.addimageElement().click({ force: true })
        srt.uploadimageElement().attachFile('image1.jpeg', { force: true })
        srt.imagedescriptionElement().type('Testing Image')
        srt.updateimageElement().contains('Upload Image').click({ force: true })
        dash.messageElement().should('contain', 'Image Created')
    }
    clickOnAddNote() {
        srt.addnoteElement().click({ force: true })
        srt.notetypeElement().click({ force: true })
        cy.get('[data-value="Quality Assurance"]').click({ force: true })
        srt.noteElement().type('Testing Note', { force: true })
        srt.createnoteElement().contains('Create').click({ force: true })
        dash.messageElement().should('contain', 'Ticket updated')
    }
    clickOnExport() {
        srt.exportbtnElement().click({ force: true })
    }
}
export default SrcRepairTicketsActions 