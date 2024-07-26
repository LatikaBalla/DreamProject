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
        cy.get('tr td').eq(3).should('contain', tdata.inHouseTicket.repairtype)
    }
    searchRepairStatus() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.repairstatusElement().click({ force: true })
        iht.searchboxElement().eq(1).click({ force: true })
        cy.get('[data-value="Quality Assurance"]').click({ force: true })
        //  iht.searchElement().clear({ force: true }).type(tdata.inHouseTicket.repairstatus + '{enter}', { force: true })
        cy.get('tr td').eq(6).should('contain', tdata.inHouseTicket.repairstatus, { force: true })

    }
    searchbuiling() {
        iht.searchboxElement().eq(0).click({ force: true })
        iht.buildingdropElement().click({ force: true })
        iht.searchElement().clear({ force: true }).type(tdata.inHouseTicket.building + '{enter}', { force: true })
        cy.get('tr td').eq(2).should('contain', tdata.inHouseTicket.building, { force: true })
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
   
 
    selectFilterRepairType() {
        iht.fieldNameElement().select('repair_type', { force: true })
        iht.fieldOpElement().select('Contains', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.repairtype)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('contain', tdata.inHouseTicket.repairtype)
    }
    selectFilterSerialNumber() {
        iht.fieldNameElement().select('serial_number', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.serialnumber)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.inHouseTicket.serialnumber)
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
        cy.get('tr td').eq(5).should('not.contain', tdata.inHouseTicket.repairdevice)
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
    selectFilterBuilding() {
        iht.fieldNameElement().select('building', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.building)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', tdata.inHouseTicket.building)
    }
    selectFilterlastmodifieddate() {
        iht.fieldNameElement().select('last_modified_date', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true })
        iht.fieldValueElement().type(tdata.inHouseTicket.lastmodifieddate)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('not.contain', tdata.inHouseTicket.lastmodifieddate)
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
        cy.get('[data-value="Quality Assurance"]').click({ force: true })
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
        cy.visit("/repair-360/inHouse-detail/" + tdata.inHouseTicket.recordid, { visitTimeout: 30000 })
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
        // cy.get('[role="combobox"]').eq(0).contains(tdata.inHouseTicket.internaltechnician).click({ force: true })
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
       // dash.messageElement().should('contain', tdata.inHouseTicket.updatemsg)
    }
    clickOnUpdateStudent() {
        iht.updateStudentElement().click({ force: true })
    }
    verifyUpdateStudent() {
        dash.messageElement().should('contain', tdata.inHouseTicket.updateRole)
    }
    clickOnUpdateInhouse() {
        iht.updateInhouseElement().click({ force: true })
    }
    verifyUpdateInhouse() {
        dash.messageElement().should('contain', tdata.inHouseTicket.updateRole)
    }
    selectFilterRecordId() {
        iht.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        iht.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        iht.fieldValueElement().type(tdata.inHouseTicket.recordid)
        iht.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.inHouseTicket.recordid)
    }

    //sn
    selectFilterSerialNumber() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.inHouseTicket.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.inHouseTicket.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.inHouseTicket.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.serialnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
        rt.addFilterElement().eq(2).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.inHouseTicket.serialnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.serialnumber)
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
        rt.fieldValueElement().eq(1).type('AAAAATest', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'AAAAATest')
        rt.clearFilterElement().click({ force: true })
    }
    //tn
    selectFilterTicketNumber() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.inHouseTicket.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.inHouseTicket.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.inHouseTicket.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).type(tdata.inHouseTicket.ticketnumber)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.ticketnumber)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).type('V0070')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V0070')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).type('022')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '022')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankTN() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).type('V0070011', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'V0070011')
        rt.clearFilterElement().click({ force: true })
    }
    //RT
    selectFilterRepairType() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalRT() {
        rt.addFilterElement().eq(1).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairtype)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.repairtype)
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
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.inHouseTicket.repairtype, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairtype)
        rt.clearFilterElement().click({ force: true })
    }
    //B
    selectFilterBuilding() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Build')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Build')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('One')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'One')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
        rt.addFilterElement().eq(3).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type('GVL', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'GVL')
        rt.clearFilterElement().click({ force: true })
    }
    //RD
    selectFilterRepairDevice() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('Dell Chromebook 11 3100')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dell Chromebook 11 3100')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' Non-Touch')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' Non-Touch')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type('VT Chromebook', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'VT Chromebook')
        rt.clearFilterElement().click({ force: true })
    }
    //box
    selectFilterRepairBox() {
        cy.wait(2000)
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.inHouseTicket.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.equal(8156);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.not.equal(8156);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterGreaterthanBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.greaterThan(8156);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterGreaterequalBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.gte(8156);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterLessthanBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lessThan(8156);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterLessequalBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.repairbox)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lte(8156);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterBetweenBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="From"]').type(tdata.inHouseTicket.repairbox)
        cy.get('[placeholder="To"]').type(tdata.inHouseTicket.repairbox1)
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.within(8156, 10584);
        })
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankBox() {
        rt.addFilterElement().eq(9).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(8).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.inHouseTicket.repairbox1, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="repair_box"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.equal(10584)
        })
        rt.clearFilterElement().click({ force: true })
    }
    //tag
    selectFilterAssetTag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.inHouseTicket.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontaintag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualstag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequaltag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithtag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('56')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '56')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithtag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('78')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '78')
        rt.clearFilterElement().click({ force: true })
    }

    filterBlanktag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblanktag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type('5678', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '5678')
        rt.clearFilterElement().click({ force: true })
    }
    //cby
    selectFilterCreatedBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.inHouseTicket.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.createdby)
    }
    filterDoesnotcontainCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.inHouseTicket.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeginswithCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(4).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('demo')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        rt.clearFilterElement().click({ force: true })
    }
    filterEndswithCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(7).click({ force: true })
        rt.fieldValueElement().eq(1).clear({ force: true }).type('Maleja Duque', { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Maleja Duque')
        rt.clearFilterElement().click({ force: true })
    }
    //date
    filterEqualsDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.inHouseTicket.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        rt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.inHouseTicket.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        rt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rt.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.inHouseTicket.lastModifiedDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.inHouseTicket.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.inHouseTicket.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.inHouseTicket.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.inHouseTicket.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
}
export default InHouseTicketsActions 