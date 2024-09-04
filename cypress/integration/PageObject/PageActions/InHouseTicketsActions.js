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
        cy.wait(5000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
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
        cy.get('#outbound_address').click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    selectBuilding() {
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
        cy.wait(3000)
        dash.messageElement().should('contain', tdata.inHouseTicket.createTicketmsg, { force: true })
    }
    clickOnExport() {
        iht.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.inHouseTicket.filename)
    }
    clickOnAddLine() {
        iht.addlineElement().click({ force: true })
        iht.custompartElemnet().click({ force: true })
        iht.partElement().click({ force: true })
        cy.get('[role="listbox"]').contains("System Board").click({ force: true })
        iht.noteElement().type('Testing line', { force: true })
        iht.createlineElement().contains('Create Line Item').click({ force: true })
        // dash.messageElement().should('contain', 'Line Item Created')       
    }
    clickOnAddRepairImage() {
        iht.addimageElement().click({ force: true })
        iht.uploadimageElement().attachFile('image1.jpeg', { force: true })
        iht.imagedescriptionElement().type('Testing Image')
        iht.updateimageElement().contains('Upload Image').click({ force: true })
        // dash.messageElement().should('contain', 'Image Created')
    }
    clickOnAddNote() {
        iht.addnoteElement().click({ force: true })
        iht.notetypeElement().click({ force: true })
        cy.get('[data-value="Quality Assurance"]').click({ force: true })
        iht.noteElement().scrollIntoView().type('Testing Note', { force: true })
        iht.createnoteElement().contains('Create').click({ force: true })
        //dash.messageElement().should('contain', 'Ticket updated')
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
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/inHouse-detail/" + tdata.inHouseTicket.recordid, { visitTimeout: 30000 })
    }
    verifySrcRepairTicket() {
        cy.wait(2000)
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnEditButton() {
        cy.wait(4000)
        iht.editTicketElement().click({ force: true })
    }
    editTehnician() {
        // iht.technicianElement().click({ force: true })
        // cy.get('[role="combobox"]').eq(0).contains(tdata.inHouseTicket.internaltechnician).click({ force: true })
    }
    editRepairStatus() {
        iht.repairstatusEditElement().click({ force: true })
        cy.get(tdata.inHouseTicket.repairstatusEdit).click({ force: true })
        cy.get('#repair_note').type('testing')
    }
    clickOnUpdate() {
        //  iht.updateElement().click({ force: true })
        cy.get('.MuiGrid-container > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
    }
    verifyUpdate() {
        // dash.messageElement().should('contain', tdata.inHouseTicket.updatemsg)
    }
    clickOnUpdateStudent() {
        iht.updateStudentElement().click({ force: true })
    }
    verifyUpdateStudent() {
       // dash.messageElement().should('contain', tdata.inHouseTicket.updateRole)
    }
    clickOnUpdateInhouse() {
        iht.updateInhouseElement().click({ force: true })
    }
    verifyUpdateInhouse() {
       // dash.messageElement().should('contain', tdata.inHouseTicket.updateRole)
    }
    filtercontainRI() {
        cy.wait(4000)
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.recordid)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.recordid)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.recordid)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.recordid)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.recordid)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.recordid)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.recordid)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.recordid)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('70')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '70')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('74')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '74')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankRI() {
        iht.addFilterElement().eq(0).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).type(tdata.inHouseTicket.recordid, { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.recordid)
        iht.clearFilterElement().click({ force: true })
    }
    //tn
    selectFilterTicketNumber() {
        cy.wait(2000)
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.ticketnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.ticketnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).type(tdata.inHouseTicket.ticketnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.ticketnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).type(tdata.inHouseTicket.ticketnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.ticketnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).type(tdata.inHouseTicket.ticketnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.ticketnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).type('V00')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V00')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).type('186')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '186')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankTN() {
        iht.addFilterElement().eq(1).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).type('V0070186', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V0070186')
        iht.clearFilterElement().click({ force: true })
    }
    //B
    selectFilterBuilding() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().clear({ force: true }).type(tdata.inHouseTicket.building)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.building)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.building)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.building)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.building)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.building)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.building)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.building)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('GV')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'GV')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('L2')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'L2')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
        iht.addFilterElement().eq(2).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type(tdata.inHouseTicket.building, { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.building)
        iht.clearFilterElement().click({ force: true })
    }
    //rt
    selectFilterRepairType() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairtype)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairtype)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.repairtype)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('In')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'In')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('use')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'use')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankRT() {
        iht.addFilterElement().eq(3).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type(tdata.inHouseTicket.repairtype, { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairtype)
        iht.clearFilterElement().click({ force: true })
    }
    //sn
    selectFilterSerialNumber() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.serialnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.serialnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).type(tdata.inHouseTicket.serialnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.serialnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).type(tdata.inHouseTicket.serialnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.serialnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).type(tdata.inHouseTicket.serialnumber)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.serialnumber)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).type('VIVATEST')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVATEST')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).type('12Test')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '12Test')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankSN() {
        iht.addFilterElement().eq(4).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).type('VIVATEST61Test', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVATEST61Test')
        iht.clearFilterElement().click({ force: true })
    }
    //RD
    selectFilterRepairDevice() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairdevice)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.repairdevice)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairdevice)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.repairdevice)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('Dell Chromebook 11 3100')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dell Chromebook 11 3100')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' Non-Touch')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' Non-Touch')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankRD() {
        iht.addFilterElement().eq(5).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type('VT Chromebook', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VT Chromebook')
        iht.clearFilterElement().click({ force: true })
    }
    //tag
    selectFilterAssetTag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.assettag)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.assettag)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontaintag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.assettag)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.assettag)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualstag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.assettag)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.assettag)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequaltag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.assettag)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.assettag)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithtag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('56')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '56')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithtag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('78')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '78')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlanktag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblanktag() {
        iht.addFilterElement().eq(6).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type('4813932', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '4813932')
        iht.clearFilterElement().click({ force: true })
    }
    //RS
    filterOption1() {
        cy.wait(2000)
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Waiting_on_Repair_Approval"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Waiting on Repair Approval')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption2() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Intake"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Intake')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption3() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="InHouse"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'InHouse')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption4() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Repair"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Repair')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption5() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Complete"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Complete')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption6() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Part_Queue"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Part Queue')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption7() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Pending_Repair_Box"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Pending Repair Box')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption8() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Closed"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Closed')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption9() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="Quality_Assurance"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'Quality Assurance')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption10() {
        iht.addFilterElement().eq(7).click({ force: true })
        cy.get('[value="In_Transit"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="repairStatus"]').should('contain', 'In Transit')
        cy.get('.reset-button').click({ force: true })
    }
    //ws
    filterOptionIhs1() {
        iht.addFilterElement().eq(8).click({ force: true })
        cy.get('[value="Intake"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="inHouseStatus"]').should('contain', 'Intake')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionIhs2() {
        iht.addFilterElement().eq(8).click({ force: true })
        cy.get('[value="Complete"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="inHouseStatus"]').should('contain', 'Complete')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionIhs3() {
        iht.addFilterElement().eq(8).click({ force: true })
        cy.get('[value="Part_Queue"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="inHouseStatus"]').should('contain', 'Part Queue')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionIhs4() {
        iht.addFilterElement().eq(8).click({ force: true })
        cy.get('[value="Repair"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="inHouseStatus"]').should('contain', 'Repair')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionIhs5() {
        iht.addFilterElement().eq(8).click({ force: true })
        cy.get('[value="Quality_Assurance"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="inHouseStatus"]').should('contain', 'Quality Assurance')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionWS1(){
        iht.addFilterElement().eq(9).click({ force: true })
        iht.searchElement().type('Warranty')
        cy.get('[value="Non_Warranty"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="warrantyStatus"]').should('contain', 'Warranty')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionWS2(){
        iht.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Non_Warranty"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="warrantyStatus"]').should('contain',tdata.inHouseTicket.warrantystatus)
        cy.get('.reset-button').click({ force: true })
    }
    //date
    filterEqualsDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.lastModifiedDate1)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.lastModifiedDate1)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        iht.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.lastModifiedDate1)
        iht.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        iht.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        iht.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.inHouseTicket.lastModifiedDate, { force: true })
        iht.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.inHouseTicket.lastModifiedDate, { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        iht.addFilterElement().eq(10).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.inHouseTicket.lastModifiedDate, { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.lastModifiedDate1)
        iht.clearFilterElement().click({ force: true })
    }
    //IT
    selectFilterInternalTechnician() {
        cy.wait(2000)
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.internaltechnician)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.internaltechnician)
        iht.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.internaltechnician)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.internaltechnician)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.internaltechnician)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.internaltechnician)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.internaltechnician)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.internaltechnician)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('Nancy')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Nancy')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('Stewart')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Stewart')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankIT() {
        iht.addFilterElement().eq(11).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type(tdata.inHouseTicket.internaltechnician, { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.internaltechnician)
        iht.clearFilterElement().click({ force: true })
    }
    //cby
    selectFilterCreatedBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(0).click({ force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.createdby)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.createdby)
    }
    filterDoesnotcontainCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(1).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.createdby)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.createdby)
        iht.clearFilterElement().click({ force: true })
    }
    filterEqualsCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(2).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.createdby)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.createdby)
        iht.clearFilterElement().click({ force: true })
    }
    filterNotequalCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(3).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.createdby)
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.createdby)
        iht.clearFilterElement().click({ force: true })
    }
    filterBeginswithCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(4).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('demo')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        iht.clearFilterElement().click({ force: true })
    }
    filterEndswithCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(5).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
        iht.clearFilterElement().click({ force: true })
    }
    filterBlankCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(6).click({ force: true })
        iht.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        iht.clearFilterElement().click({ force: true })
    }
    filterNotblankCBy() {
        iht.addFilterElement().eq(12).click({ force: true })
        iht.fieldNameElement().eq(1).click({ force: true })
        iht.fieldOpElement().eq(7).click({ force: true })
        iht.fieldValueElement().eq(1).clear({ force: true }).type('Maleja Duque', { force: true })
        iht.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Maleja Duque')
        iht.clearFilterElement().click({ force: true })
    }
}
export default InHouseTicketsActions 