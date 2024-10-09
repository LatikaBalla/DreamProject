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
        cy.wait(5000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairTicketsTab() {
        mdev.repairTicketsElement().click({ force: true })
    }
    verifyTitle() {
        rt.titleElement().should('be.visible', { force: true })
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
        cy.get('#outbound_address-option-5').click({ force: true })
    }
    selectSerialDevice() {
        cy.get('.css-1uvydh2').eq(1).click({ force: true })
        cy.get('ul[role="listbox"]').find('li').contains(tdata.repairTickets.serialdevice).click({ force: true })
    }
    selectStudent() {
        cy.get('#student_id').click({ force: true })
        cy.get('#student_id-option-5').click({ force: true })
    }
    selectBuilding() {
        cy.wait(1000)
        rt.buildingElement().click({ force: true })
        cy.get('#building-option-5').click({ force: true })
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
        dash.messageElement().should('contain', tdata.repairTickets.createTicketmsg)
    }
    clickOnExport() {
        rt.exportElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.repairTickets.filename)
    }
    clickOnViewButton() {
        cy.wait(3000)
        cy.window().then(win => {
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/ticket-detail/" + tdata.repairTickets.recordid)
    }
    verifyDetails() {
        cy.wait(3000)
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnAddLine() {
        cy.wait(100)
        rt.addlineElement().click({ force: true })
        rt.custompartElemnet().click({ force: true })
        rt.partElement().click({ force: true })
        cy.get('[role="listbox"]').contains('demo unit').click({ force: true })
        rt.noteElement().type('Testing line', { force: true })
        rt.createlineElement().contains('Create Line Item').click({ force: true })
        dash.messageElement().should('contain', 'Line Item Created')
    }
    clickOnAddRepairImage() {
        rt.addimageElement().click({ force: true })
        cy.get('.MuiGrid-root > .MuiBox-root > :nth-child(2)').click({ force: true })
        cy.get('[id="image"]').attachFile('image1.jpeg', { force: true })
        cy.wait(100)
        rt.imagedescriptionElement().type('Testing Image')
        rt.updateimageElement().contains('Upload Image').click({ force: true })
        // dash.messageElement().should('contain', 'Image Created')
    }
    clickOnAddNote() {
        cy.wait(100)
        rt.addnoteElement().click({ force: true })
        rt.notetypeElement().click({ force: true })
        cy.get('[data-value="Part Received"]').click({ force: true })
        rt.noteElement().type('Testing Note', { force: true })
        rt.createnoteElement().contains('Create').click({ force: true })
        // dash.messageElement().should('contain', 'Ticket updated')
    }
    clickViewButton() {
        cy.window().then(win => {
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/ticket-detail/" + tdata.repairTickets.recordid)
    }
    verifySrcRepairTicket() {
        cy.wait(3000)
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
    //tn
    selectFilterTicketNumber() {
        cy.wait(3000)
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.repairTickets.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.repairTickets.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.repairTickets.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).type('V0070')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V0070')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).type('022')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '022')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankTN() {
        rt.addFilterElement().eq(0).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).type(tdata.repairTickets.ticketnumber, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    //RT
    selectFilterRepairType() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.repairTickets.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Viva')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('city')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'city')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.repairtype, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    //sn
    selectFilterSerialNumber() {
        cy.wait(2000)
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
        cy.wait(1000)
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.repairTickets.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.repairTickets.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.repairTickets.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).type('VIVATEST')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VIVATEST')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).type('12Test')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '12Test')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankSN() {
        cy.wait(1000)
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).type(tdata.repairTickets.serialnumber, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    //B
    selectFilterBuilding() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('not.contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('not.contain.value', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Build')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('contain', 'Build')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('One')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('contain', 'One')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="building"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
     //B
     filterContainRsite() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRsite() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('not.contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsRsite() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalRsite() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('not.contain.value', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRsite(){
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Build')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('contain', 'Build')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithRsite() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('One')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('contain', 'One')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankRsite(){
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankRsite() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]>[col-id="return_site"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    //RD
    selectFilterRepairDevice() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRD() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsRD() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalRD() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRD() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Dell Chromebook 11 3100')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dell Chromebook 11 3100')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithRD() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' Non-Touch')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' Non-Touch')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankRD() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankRD() {
        cy.wait(1000)
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.repairdevice, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    //tag
    selectFilterAssetTag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontaintag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualstag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequaltag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithtag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('56')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '56')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithtag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('78')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '78')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlanktag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblanktag() {
        rt.addFilterElement().eq(6).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.assettag, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    //SI
    filtercontainSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.studentInfo)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.studentInfo)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.studentInfo)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.studentInfo)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.studentInfo)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.studentInfo)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.studentInfo)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.studentInfo)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Soh')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Soh')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('ini')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ini')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankSI() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.studentInfo, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.studentInfo)
        rt.clearFilterElement().click({ force: true })
    }
    //ST
    filtercontainST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.studentTechnician)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.studentTechnician)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.studentTechnician)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.studentTechnician)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.studentTechnician)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.studentTechnician)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.studentTechnician)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.studentTechnician)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Nat')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Nat')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('rch')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'rch')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankST() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.studentTechnician, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.studentTechnician)
        rt.clearFilterElement().click({ force: true })
    }
    //Rs
    filterOption1() {
        cy.wait(1000)
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Pending_Repair_Box"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Pending Repair Box')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption2() {
        cy.wait(1000)
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Box_Created"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Box Created')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption3() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Intake"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Intake')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption4() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Estimate_Approved"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Estimate Approved')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption5() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Intake_Queue"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Intake Queue')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption6() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Shipping_to_Vivacity"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Shipping to Vivacity')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption7() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Estimate_Denied"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Estimate Denied')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption8() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="On_Hold"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'On Hold')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption9() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Part_Ordered"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Part Ordered')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption10() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Part_Queue"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Part Queue')
        cy.get('.reset-button').click({ force: true })
    }
    filterOption11() {
        rt.addFilterElement().eq(9).click({ force: true })
        cy.get('[value="Claim_Overage"]').click({ force: true })
        cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Claim Overage')
        cy.get('.reset-button').click({ force: true })
    }
    //cby
    selectFilterCreatedBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdby)
    }
    filterDoesnotcontainCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('demo')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankCBy() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.createdby, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    //box
    filterContainBox() {
        cy.wait(3000)
        rt.addFilterElement().eq(11).scrollIntoView().click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairbox)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainBox() {
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.repairbox)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsBox() {
        cy.wait(1000)
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairbox)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotequalBox() {
        cy.wait(1000)
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.repairbox)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithBox() {
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('81')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '81')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithBox() {
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('56')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '56')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankBox() {
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankBox() {
        rt.addFilterElement().eq(11).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.repairbox, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairbox)
        rt.clearFilterElement().click({ force: true })
    }
    //Cdate
    filterEqualsCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="created_date"]').should('contain', tdata.repairTickets.createdDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.createdDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeforeCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        rt.applyElement().click({ force: true })
        const dateString = '09-11-2023 09:54:00';
        const reformattedDateString = dateString.split('-').reverse().join('-');
        const dateObj = new Date(reformattedDateString);
        const timestamp = dateObj.getTime();
        cy.get('.ag-row-first > [col-id="created_date"]').should(($el) => {
            const value = $el.text();
            const reformattedDate = value.split('-').reverse().join('-');
            const dateObj1 = new Date(reformattedDate);
            const timestamp1 = dateObj1.getTime();
            expect(timestamp1).to.be.lessThan(timestamp)
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterAfterCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        rt.applyElement().click({ force: true })
        const dateString = '09-11-2023 09:54:00';
        const reformattedDateString = dateString.split('-').reverse().join('-');
        const dateObj = new Date(reformattedDateString);
        const timestamp = dateObj.getTime();
        cy.get('.ag-row-first > [col-id="created_date"]').should(($el) => {
            const value = $el.text();
            const reformattedDate = value.split('-').reverse().join('-');
            const dateObj1 = new Date(reformattedDate);
            const timestamp1 = dateObj1.getTime();
            expect(timestamp1).to.be.greaterThan(timestamp)
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterBetweenCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.createdDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        rt.applyElement().click({ force: true })
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.createdDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankCDate() {
        rt.addFilterElement().eq(12).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.repairTickets.createdDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdDate1)
        rt.clearFilterElement().click({ force: true })
    }
    //Ldate
    filterEqualsDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        const dateString = '08-24-2023 17:50:48';
        const reformattedDateString = dateString.split('-').reverse().join('-');
        const dateObj = new Date(reformattedDateString);
        const timestamp = dateObj.getTime();
        cy.get('.ag-row-first > [col-id="last_modified_date"]').should(($el) => {
            const value = $el.text();
            const reformattedDate = value.split('-').reverse().join('-');
            const dateObj1 = new Date(reformattedDate);
            const timestamp1 = dateObj1.getTime();
            expect(timestamp1).to.be.lessThan(timestamp)
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        const dateString = '08-24-2023 17:50:48';
        const reformattedDateString = dateString.split('-').reverse().join('-');
        const dateObj = new Date(reformattedDateString);
        const timestamp = dateObj.getTime();
        cy.get('.ag-row-first > [col-id="last_modified_date"]').should(($el) => {
            const value = $el.text();
            const reformattedDate = value.split('-').reverse().join('-');
            const dateObj1 = new Date(reformattedDate);
            const timestamp1 = dateObj1.getTime();
            expect(timestamp1).to.be.greaterThan(timestamp)
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate2, { force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        rt.addFilterElement().eq(13).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.repairTickets.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    sortingTN(){
        cy.wait(1000)
        rt.optionElement().eq(1).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(1).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(1).click({ force: true })
        cy.contains('Clear Sort').click({ force: true })
    }
    sortingRT(){
        cy.wait(1000)
        rt.optionElement().eq(2).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(2).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(2).click({ force: true })
        cy.contains('Clear Sort').click({ force: true })
    }
    sortingSN(){
        cy.wait(1000)
        rt.optionElement().eq(3).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(3).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(3).click({ force: true })
        cy.contains('Clear Sort').click({ force: true })
    }
    sortingB(){
        cy.wait(1000)
        rt.optionElement().eq(4).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(4).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(4).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingRSite(){
        cy.wait(1000)
        rt.optionElement().eq(5).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(5).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(5).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingRD(){
        cy.wait(1000)
        rt.optionElement().eq(6).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(6).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(6).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingTag(){
        cy.wait(1000)
        rt.optionElement().eq(7).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(7).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(7).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingInfo(){
        cy.wait(1000)
        rt.optionElement().eq(8).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(8).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(8).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingST(){
        cy.wait(1000)
        rt.optionElement().eq(9).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(9).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(9).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingRS(){
        cy.wait(1000)
        rt.optionElement().eq(10).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(10).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(10).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingCby(){
        cy.wait(1000)
        rt.optionElement().eq(11).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(11).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(11).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingBox(){
        cy.wait(1000)
        rt.optionElement().eq(12).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(12).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(12).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingCdate(){
        cy.wait(1000)
        rt.optionElement().eq(13).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(13).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(13).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
    sortingLdate(){
        cy.wait(1000)
        rt.optionElement().eq(14).click({ force: true })
        rt.sortAscendingElement().click({ force: true })
        rt.optionElement().eq(14).click({ force: true })
        rt.sortDescendingElement().click({ force: true })
        rt.optionElement().eq(14).click({ force: true })
        rt.clearSortElement().click({ force: true })
    }
}
export default RepairTicketsActions 