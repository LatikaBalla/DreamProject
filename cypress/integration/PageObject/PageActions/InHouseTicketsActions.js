/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const InHouseTicketsElements = require("../PageElements/InHouseTicketsElements.js")
const InHouseRepairCenterElements = require("../PageElements/InHouseRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class InHouseTicketsActions {
    constructor() {
        globalThis.rep = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.iht = new InHouseTicketsElements();
        globalThis.ihrc = new InHouseRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnInHouseRepairCenterTab() {
       rep.inhousercElement().click({ force: true })
    }
    clickOnInHouseTicketsTab() {
        ihrc.inhouseTicketsElement().click({ force: true })
    }
    verifyTitle() {
        iht.titleElement().should('be.visible')
    }
    filtersVisible() {
        iht.filtersElement().should('be.visible')
    }
    tableVisible() {
        iht.tableElement().should('be.visible')
    }
    clickOnCreateTicketButton() {
        iht.createTicketElement().click({ force: true })
    }
    selectFailureType() {
        iht.failuretypeElement().click({ force: true })
        cy.get(tdata.inHouseTicket.failuretype).click()
    }
    selectSerialDevice() {
        iht.serialdeviceElement().click({ force: true })
     
       // cy.get('[role="listbox"]').find('li').contains(tdata.inHouseTicket.serialdevice).click({ force: true })
       // cy.get(tdata.inHouseTicket.serialdevice).click()
        cy.get('#device-option-0').click()
    }
    selectTechnician() {
        iht.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.inHouseTicket.technician).click({ force: true })
    }

    selectBilding() {
        iht.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectRepaireIssue() {
        iht.repairissueElement().click({ force: true })
        cy.get(tdata.inHouseTicket.repairissue).click({ force: true })
    }
    enterChromebookIssue() {
        iht.chromebookissueElement().type(tdata.inHouseTicket.chromebookissue, { force: true })
    }
    clickOnSaveButton() {
        iht.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(8000)
        dash.messageElement().should('contain', tdata.inHouseTicket.createTicketmsg, { force: true })
    }
    clickOnExport() {
        iht.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.inHouseTicket.filename)
    }
    searchRecordId() {
        cy.wait(1000)
        iht.searchboxElement().eq(0).click({ force: true })
        iht.recordidElement().click({ force: true })
        iht.searchElement().clear({ force: true }).type(tdata.inHouseTicket.recordid + '{enter}', { force: true })
      //cy.wait(1000)
        cy.get('tr td').eq(0).should('contain', tdata.inHouseTicket.recordid)
    }
    searchTicketNumber() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.ticketnumberElement().click({ force: true })
        iht.searchElement().clear({ force: true }).type(tdata.inHouseTicket.ticketnumber + '{enter}', { force: true })
        cy.get('tr td').eq(1).should('contain', tdata.inHouseTicket.ticketnumber)
    }
    searchRepairType() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.repairtypeElement().click({ force: true })
        iht.searchElement().clear({ force: true }).type(tdata.inHouseTicket.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.inHouseTicket.repairtype)
    }
    searchRepairStatus() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.repairstatusElement().click({ force: true })
        iht.searchElement().clear({ force: true }).type(tdata.inHouseTicket.repairstatus + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(5).should('contain', tdata.inHouseTicket.repairstatus, { force: true })
        iht.searchElement().clear({ force: true })
    }
    clickOnMoreFilter() {
        iht.addFilterElement().click({ force: true })
    }
    enterFieldName() {
        iht.fieldNameElement().select('Ticket Number')
    }
    enterFieldOperation() {
        iht.fieldOpElement().select('Does Not Contain')
    }
    enterSearchValue() {
        iht.fieldValueElement().type(tdata.inHouseTicket.ticketnumber, { force: true })
    }
    clickOnApply() {
        iht.applyElement().click({ force: true })
    }
    verifyResultFilter() {
        cy.get('tr td').eq(1).should('not.contain', tdata.inHouseTicket.ticketnumber, { force: true })
    }
    clickOnClearFilter() {
        iht.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId() {
        iht.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        iht.fieldValueElement().type(tdata.inHouseTicket.recordid)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.inHouseTicket.recordid)
    }
    selectFilterTicketNumber() {
        iht.fieldNameElement().select(1).invoke("val").should("eq", "ticket_number")
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.ticketnumber)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.inHouseTicket.ticketnumber)
    }
    selectFilterRepairType() {
        iht.fieldNameElement().select('repair_type', { force: true })
        iht.fieldOpElement().select('Contains', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.repairtype)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('contain', tdata.inHouseTicket.repairtype)
    }
    selectFilterSerialNumber() {
        iht.fieldNameElement().select('serial_number', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.serialnumber)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.inHouseTicket.serialnumber)
    }
    selectFilterRepairStatus() {
        iht.fieldNameElement().select('repair_status', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.repairstatus)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('not.contain', tdata.inHouseTicket.repairstatus)
    }
    selectFilterRepairDevice() {
        iht.fieldNameElement().select('repair_device', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.repairdevice)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.inHouseTicket.repairdevice)
    }
    selectFilterAssetTag() {
        iht.fieldNameElement().select('asset_tag', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type('Lea')
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', 'Lea')
    }
    selectFilterInternalTechnician() {
        iht.fieldNameElement().select('internal_technician', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.internaltechnician)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('not.contain', tdata.inHouseTicket.internaltechnician)
    }
    selectFilterCreatedBy() {
        iht.fieldNameElement().select('created_by', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.createdby)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.inHouseTicket.createdby)
    }
    clickOnAddLine() {
        iht.addlineElement().click({ force: true })
        iht.custompartElemnet().click({ force: true })
        iht.partElement().click({ force: true })
        cy.get('[role="listbox"]').contains('demo unit').click({ force: true })
        iht.noteElement().type('Testing line', { force: true })
        iht.createlineElement().contains('Create Line Item').click({ force: true })
        dash.messageElement().should('contain', 'Line Item Created')
        // cy.get('[data-testid="CloseIcon"]').click({ force: true })
    }
    clickOnAddRepairImage() {
        iht.addimageElement().click({ force: true })
        iht.uploadimageElement().attachFile('image1.jpeg', { force: true })
        iht.imagedescriptionElement().type('Testing Image')
        iht.updateimageElement().contains('Upload Image').click({ force: true })
        dash.messageElement().should('contain', 'Image Created')
        //cy.get('[data-testid="CloseIcon"]').click({force:true})
    }
    clickOnAddNote() {
        iht.addnoteElement().click({ force: true })
        iht.notetypeElement().click({ force: true })
        cy.get('[data-value="QA"]').click({ force: true })
        iht.noteElement().type('Testing Note', { force: true })
        iht.createnoteElement().contains('Create').click({ force: true })
        dash.messageElement().should('contain', 'Ticket updated')
    }
    enterSearchBox() {
        cy.get('[role="combobox"]').eq(0).click({ force: true })
        cy.get('[data-value="ticket_number"]').click({ force: true })
        iht.searchElement().type(tdata.inHouseTicket.ticketnumber + '{enter}', { force: true })
    }
    verifySearchResult() {
        cy.get('tr td').eq(1).should('contain', tdata.inHouseTicket.ticketnumber, { force: true })
    }
    clickViewButton() {
        cy.window().then(win => {
            // win.open('https://google.com', '_blank')
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair/inHouse-detail/" + tdata.inHouseTicket.recordid, { visitTimeout: 30000 })
        //  cy.get('tr td').eq(9).scrollIntoView().contains('View').click({ force: true })

    }
    verifySrcRepairTicket() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnEditButton() {
        cy.wait(4000)
        iht.editTicketElement().click({ force: true })
    }
    editTehnician() {
        // iht.technicianElement().click({ force: true })
        // cy.get('[role="combobox"]').eq(0).contains(tdata.inHouseTicket.technician).click({ force: true })
    }
    editRepairStatus() {
        iht.repairstatusEditElement().click({ force: true })
        cy.get(tdata.inHouseTicket.repairstatusEdit).click({ force: true })
    }
    clickOnUpdate() {
      //  iht.updateElement().click({ force: true })
        cy.get('.MuiGrid-container > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
    }
    verifyUpdate() {
        //cy.get('tr td').eq(1).should('contain', tdata.inHouseTicket.recordid)
    }
}
export default InHouseTicketsActions 