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
        cy.wait(6000)
      //  dash.termsElement().contains('Agree').click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        rep.studentrcElement().click({ force: true })
    }
    clickOnSrcRepairTicketsTab() {
        cy.wait(2000)
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
        cy.wait(2000)
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
        cy.get('#outbound_address').click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
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
        cy.wait(1000)
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
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/inHouse-detail/" + tdata.srcRepairTicket.recordid)
    }
    verifySrcRepairTicket() {
        cy.wait(4000)
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnEditButton() {
        cy.wait(4000)
        srt.editTicketElement().click({ force: true })
    }
    editTehnician() {
        cy.get('[data-testid="ArrowDropDownIcon"]').eq(0).click({ force: true })
        srt.edittechnicianElement().click({ force: true })
        //  cy.get(tdata.srcRepairTicket.edittechnician).click({ force: true })
    }
    editRepairStatus() {
        srt.repairstatusEditElement().click({ force: true })
        cy.get(tdata.srcRepairTicket.repairstatusEdit).click({ force: true })
        srt.editnoteElement().type(tdata.srcRepairTicket.editnote)
    }
    clickOnUpdate() {
        srt.updateElement().click({ force: true })
    }
    verifyUpdate() {
        // dash.messageElement().should('contain', tdata.srcRepairTicket.updatemsg)
    }
    clickOnAddLine() {
        srt.addlineElement().click({ force: true })
        cy.contains('Custom Part').click({ force: true })
        srt.partElement().click({ force: true })
        cy.get('[data-value="104"]').click({ force: true })
        srt.noteElement().type('Testing line', { force: true })
        srt.createlineElement().contains('Create Line Item').click({ force: true })
        // dash.messageElement().should('contain', 'Line Item Created')
    }
    clickOnAddRepairImage() {
        srt.addimageElement().click({ force: true })
        srt.uploadimageElement().attachFile('image1.jpeg', { force: true })
        srt.imagedescriptionElement().type('Testing Image')
        srt.updateimageElement().contains('Upload Image').click({ force: true })
        // dash.messageElement().should('contain', 'Image Created')
    }
    clickOnAddNote() {
        srt.addnoteElement().click({ force: true })
        srt.notetypeElement().click({ force: true })
        cy.get('[data-value="Quality Assurance"]').click({ force: true })
        srt.noteElement().type('Testing Note', { force: true })
        srt.createnoteElement().contains('Create').click({ force: true })
        // dash.messageElement().should('contain', 'Ticket updated')
    }
    clickOnExport() {
        srt.exportbtnElement().click({ force: true })
    }
    //tn
    selectFilterTicketNumber() {
        cy.wait(3000)
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.ticketnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.ticketnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.ticketnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.ticketnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.ticketnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.ticketnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.ticketnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.ticketnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).type('V00')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V00')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).type('229')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '229')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankTN() {
        srt.addFilterElement().eq(0).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).type(tdata.srcRepairTicket.ticketnumber, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.ticketnumber)
        srt.clearFilterElement().click({ force: true })
    }
    //B
    filterContainBuilding() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('Build')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Build')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('One')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'One')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
        srt.addFilterElement().eq(1).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    //Return Site
    filterContainRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('Build')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Build')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('One')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'One')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankRSite() {
        srt.addFilterElement().eq(2).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        srt.clearFilterElement().click({ force: true })
    }
    //RT
    selectFilterRepairType() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.repairtype, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.repairtype)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.repairtype, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.repairtype, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.repairtype)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.repairtype, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.repairtype)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).type('Stu', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Stu')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).type('ent', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ent')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankRT() {
        srt.addFilterElement().eq(3).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).type(tdata.srcRepairTicket.repairtype, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.repairtype)
        srt.clearFilterElement().click({ force: true })
    }
     //sn
     selectFilterSerialNumber() {
        cy.wait(2000)
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.serialnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.serialnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.serialnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.serialnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.serialnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.serialnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.serialnumber)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.serialnumber)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).type('VIVATEST')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVATEST')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).type('Test')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Test')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankSN() {
        srt.addFilterElement().eq(4).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).type(tdata.srcRepairTicket.serialnumber, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.serialnumber)
        srt.clearFilterElement().click({ force: true })
    }
    //RD
    selectFilterRepairDevice() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.repairdevice)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.repairdevice, { force: true })
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.repairdevice, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.repairdevice)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.repairdevice, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.repairdevice)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).type(tdata.srcRepairTicket.repairdevice, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.repairdevice)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('Dell Chromebook 11 3100')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dell Chromebook 11 3100')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(' Non-Touch')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' Non-Touch')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankRD() {
        srt.addFilterElement().eq(5).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).type(tdata.srcRepairTicket.repairdevice, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.repairdevice)
        srt.clearFilterElement().click({ force: true })
    }
    //tag
    selectFilterAssetTag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.assettag)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.assettag)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontaintag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.assettag)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.assettag)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualstag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.assettag)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.assettag)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequaltag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.assettag)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.assettag)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithtag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Viva')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithtag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('TY')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'TY')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlanktag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblanktag() {
        srt.addFilterElement().eq(6).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).clear({ force: true }).type('12333', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '12333')
        srt.clearFilterElement().click({ force: true })
    }
    //IT
    selectFilterInternalTechnician() {
        cy.wait(3000)
        srt.addFilterElement().eq(7).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.internaltechnician)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.internaltechnician)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainIT() {
        srt.addFilterElement().eq(7).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.internaltechnician)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.internaltechnician)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsIT() {
        srt.addFilterElement().eq(7).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.internaltechnician)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.internaltechnician)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalIT() {
        srt.addFilterElement().eq(7).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.internaltechnician)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.internaltechnician)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithIT() {
        srt.addFilterElement().eq(7).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('John')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'John')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithIT() {
        srt.addFilterElement().eq(7).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('min')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'min')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankIT() {
        srt.addFilterElement().eq(7).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankIT() {
        srt.addFilterElement().eq(7).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.srcRepairTicket.internaltechnician, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.internaltechnician)
        srt.clearFilterElement().click({ force: true })
    }
    //StdN
    filterContainStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.studentName)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.studentName)
        srt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.studentName)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.studentName)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.studentName)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.studentName)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.studentName)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.studentName)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().type('Vivi')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain','Vivi')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().type('rcia')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'rcia')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(1).type(' ')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankStdN(){
        srt.addFilterElement().eq(8).scrollIntoView().click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1.).type(tdata.srcRepairTicket.studentName)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.studentName)
        srt.clearFilterElement().click({ force: true })
    }
    //RS
    filterOption1() {
        srt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Intake"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', tdata.srcRepairTicket.repairstatus1)
        cy.get('.reset-button').click({ force: true })
    }
    filterOption2() {
        srt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Waiting_on_Repair_Approval"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', tdata.srcRepairTicket.repairstatus2)
        cy.get('.reset-button').click({ force: true })
    }
    filterOption4() {
        srt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="In_Transit"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', tdata.srcRepairTicket.repairstatus4)
        cy.get('.reset-button').click({ force: true })
    }
    filterOption5() {
        srt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Repair"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', tdata.srcRepairTicket.repairstatus5)
        cy.get('.reset-button').click({ force: true })
    }
    //ws
    filterOptionIhs1() {
        srt.addFilterElement().eq(10).click({ force: true })
        cy.get('[value="Intake"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="in_house_status"]').should('contain', 'Intake')
        cy.get('.reset-button').click({ force: true })
    }
    // filterOptionIhs2() {
    //     srt.addFilterElement().eq(10).click({ force: true })
    //     cy.get('[value="Part_Received"]').click({ force: true })
    //     cy.get('.ag-row-first > [col-id="in_house_status"]').should('contain', 'Part Received')
    //     cy.get('.reset-button').click({ force: true })
    // }
    filterOptionIhs2() {
        srt.addFilterElement().eq(10).click({ force: true })
        cy.get('[value="Part_Queue"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="in_house_status"]').should('contain', 'Part Queue')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionIhs3() {
        srt.addFilterElement().eq(10).click({ force: true })
        cy.get('[value="Repair"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="in_house_status"]').should('contain', 'Repair')
        cy.get('.reset-button').click({ force: true })
    }
    // filterOptionIhs5() {
    //     srt.addFilterElement().eq(10).click({ force: true })
    //     cy.get('[value="Quality_Assurance"]').click({ force: true })
    //     cy.get('.ag-row-first > [col-id="in_house_status"]').should('contain', 'Quality Assurance')
    //     cy.get('.reset-button').click({ force: true })
    // }
    filterOptionWS1() {
        srt.addFilterElement().eq(11).click({ force: true })
        srt.searchElement().type('Warranty')
        cy.get('[value="Non_Warranty"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="warranty_status"]').should('contain', 'Warranty')
        cy.get('.reset-button').click({ force: true })
    }
    filterOptionWS2() {
        srt.addFilterElement().eq(11).click({ force: true })
        cy.get('[value="Non_Warranty"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="warranty_status"]').should('contain', tdata.inHouseTicket.warrantystatus)
        cy.get('.reset-button').click({ force: true })
    }
   
    //Cdate
    filterEqualsCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeforeCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    filterAfterCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        srt.clearFilterElement().click({ force: true })
    }
    filterBetweenCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankCDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    //cby
    selectFilterCreatedBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        srt.fieldValueElement().type(tdata.srcRepairTicket.createdby)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.createdby)
    }
    filterDoesnotcontainCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.createdby)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.srcRepairTicket.createdby)
        srt.clearFilterElement().click({ force: true })
    }
    filterEqualsCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.createdby)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.createdby)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.srcRepairTicket.createdby)
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.createdby)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeginswithCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(4).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('demo')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        srt.clearFilterElement().click({ force: true })
    }
    filterEndswithCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        srt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankCBy() {
        srt.addFilterElement().eq(12).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(7).click({ force: true })
        srt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.srcRepairTicket.createdby, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.createdby)
        srt.clearFilterElement().click({ force: true })
    }
    //date
    filterEqualsDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        srt.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        srt.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        srt.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        srt.addFilterElement().eq(14).click({ force: true })
        srt.fieldNameElement().eq(1).click({ force: true })
        srt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.srcRepairTicket.lastModifiedDate, { force: true })
        srt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.srcRepairTicket.lastModifiedDate1)
        srt.clearFilterElement().click({ force: true })
    }
    //Sorting
    sortingTN() {
        cy.wait(1000)
        srt.optionElement().eq(1).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(1).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(1).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingRtype() {
        cy.wait(1000)
        srt.optionElement().eq(2).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(2).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(2).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingBuilding() {
        cy.wait(1000)
        srt.optionElement().eq(3).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(3).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(3).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingRSite() {
        cy.wait(1000)
        srt.optionElement().eq(4).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(4).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(4).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingSN() {
        cy.wait(1000)
        srt.optionElement().eq(5).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(5).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(5).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingRDev() {
        cy.wait(1000)
        srt.optionElement().eq(6).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(6).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(6).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingATag() {
        cy.wait(1000)
        srt.optionElement().eq(7).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(7).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(7).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingIT() {
        cy.wait(1000)
        srt.optionElement().eq(8).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(8).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(8).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingStdN() {
        cy.wait(1000)
        srt.optionElement().eq(9).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(9).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(9).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingRStatus(){
        cy.wait(1000)
        srt.optionElement().eq(10).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(10).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(10).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingInHouseStatus() {
        cy.wait(1000)
        srt.optionElement().eq(11).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(11).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(11).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingWarrantyStatus() {
        cy.wait(1000)
        srt.optionElement().eq(12).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(12).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(12).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingCBy() {
        cy.wait(1000)
        srt.optionElement().eq(13).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(13).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(13).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingCDate(){
        cy.wait(1000)
        srt.optionElement().eq(14).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(14).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(14).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
    sortingLdate() {
        cy.wait(1000)
        srt.optionElement().eq(15).click({ force: true })
        srt.sortAscendingElement().click({ force: true })
        srt.optionElement().eq(15).click({ force: true })
        srt.sortDescendingElement().click({ force: true })
        srt.optionElement().eq(15).click({ force: true })
        srt.clearSortElement().click({ force: true })
    }
}
export default SrcRepairTicketsActions 