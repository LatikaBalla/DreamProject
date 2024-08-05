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
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairTicketsTab() {
        mdev.repairTicketsElement().click({ force: true })
    }
    verifyTitle() {
        rt.titleElement().should('be.visible',{force:true })
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
        cy.get('[role="listbox"]').eq(0).find('li').contains(tdata.buildings.buildingname).click({ force: true })

    }
    selectSerialDevice() {
        rt.serialdeviceElement().click({ force: true })
        cy.get(tdata.repairTickets.serialdevice).click({ force: true })
    }
    selectBuilding() {
        cy.wait(1000)
        rt.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains('Building Three').click({ force: true })
        // cy.get(tdata.repairTickets.building).eq(0).click({ force: true })
    }
    selectStudent() {
        // cy.get('#student_id').click({ force: true })
        // cy.get('[role="combobox"]').find(tdata.repairTickets.student).click({ force: true })
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
        //  cy.wait(8000)
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
       // cy.get('tr td').eq(9).contains('View').scrollIntoView().click({ force: true })
    }
    verifyDetails() {
        cy.wait(3000)
        cy.contains('Repair Ticket Details').should('be.visible')
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
    selectFilterRecordId() {
        rt.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        rt.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        rt.fieldValueElement().type(tdata.repairTickets.recordid)
        rt.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.repairTickets.recordid)
    }
    //sn
    selectFilterSerialNumber() {
        cy.wait(1000)
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
        rt.fieldValueElement().clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairdevice)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalRD() {
        rt.addFilterElement().eq(4).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairdevice)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.repairdevice)
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
        rt.fieldValueElement().type(tdata.repairTickets.repairbox)
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
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
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
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
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
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
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
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
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
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.repairbox)
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
        cy.get('[placeholder="From"]').type(tdata.repairTickets.repairbox)
        cy.get('[placeholder="To"]').type(tdata.repairTickets.repairbox1)
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
        rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairTickets.repairbox1, { force: true })
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
        rt.fieldValueElement().type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontaintag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualstag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.assettag)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequaltag() {
        rt.addFilterElement().eq(5).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.assettag)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.assettag)
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
        rt.fieldValueElement().type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdby)
    }
    filterDoesnotcontainCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterEqualsCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.createdby)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalCBy() {
        rt.addFilterElement().eq(8).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairTickets.createdby)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.createdby)
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
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        rt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rt.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairTickets.lastModifiedDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rt.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rt.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        rt.addFilterElement().eq(10).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairTickets.lastModifiedDate, { force: true })
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairTickets.lastModifiedDate1)
        rt.clearFilterElement().click({ force: true })
    }
    //RS
    selectFilterRepairStatus() {
        rt.addFilterElement().eq(7).click({ force: true })
        rt.fieldNameElement().eq(1).click({ force: true })
        rt.fieldOpElement().eq(0).click({ force: true })
        rt.fieldValueElement().type(tdata.repairTickets.repairstatus)
        rt.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairTickets.repairstatus)
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
        cy.wait(100)
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