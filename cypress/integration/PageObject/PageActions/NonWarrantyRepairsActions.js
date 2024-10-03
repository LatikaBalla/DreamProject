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
      cy.wait(5000)
      dash.termsElement().contains('Dismiss').click({ force: true })
   }
   clickOnReportCenter() {
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
   formVisible() {
      nwr.formElement().should('be.visible')
   }
   selectFailureType() {
      nwr.failuretypeElement().click({ force: true })
      cy.get(tdata.nonwarrantyRepairs.failuretype).click({ force: true })
   }
   selectSerialDevice() {
      nwr.serialdeviceElement().click({ force: true })
      cy.get(tdata.nonwarrantyRepairs.serialdevice).eq(0).click({ force: true })
   }
   selectSite() {
      nwr.siteElement().click({ force: true })
      cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
   }
   selectBuilding() {
      nwr.buildingElement().click({ force: true })
      cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
   }
   selectRepaireIssue() {
      nwr.issueElement().click({ force: true })
      cy.get(tdata.nonwarrantyRepairs.repairissue).click({ force: true })
   }
   enterChromebookIssue() {
      nwr.describeElement().type(tdata.nonwarrantyRepairs.chromebookissue, { force: true })
   }
   clickOnSaveButton() {
      nwr.savebtnElement().click({ force: true })
   }
   verifyNewTicket() {
      dash.messageElement().should('contain', tdata.nonwarrantyRepairs.createTicketmsg)
   }
   selectdropdownList() {
      nwr.searchdropdownElement().eq(0).click({ force: true })
      nwr.ticketnumberElement().click({ force: true })
   }
   enterTicketNumberSearch() {
      cy.wait(1000)
      nwr.searchElement().clear().type(tdata.nonwarrantyRepairs.ticketnumber, { force: true })
   }
   verifyTicketDetailsTable() {
      //  cy.wait(5000)
      cy.get('tr td').eq(1).should('contain', tdata.nonwarrantyRepairs.ticketno)
   }
   verifyRapairTicketPAge() {
      cy.wait(3000)
      cy.contains('Repair Ticket Details').should('be.visible')
   }
   clickOnClearButton() {
      cy.get('[data-testid="KeyboardBackspaceIcon"]').click({ force: true })
      nwr.clearbtnElement().click({ force: true })
   }
   searchBoxEmpty() {
      nwr.searchElement().should('be.empty')
   }
   clickOnTicketNumberTable() {
      cy.window().then(win => {

      });
      cy.get('body').type('{ctrl}t');
      cy.visit("/repair-360/ticket-detail/" + tdata.nonwarrantyRepairs.recordid)
   }
   verifyTicketDetails() {
      cy.contains(tdata.nonwarrantyRepairs.ticketnumber).should('be.visible')
   }
   clickOnDownloadButton() {
      nwr.downloadticketElement().click({ force: true })
   }
   clickOnExport() {
      cy.contains('Export').click({ force: true })
   }
   clickOnAddRepairImage() {
      nwr.addimageElement().click({ force: true })
      nwr.uploadimageElement().attachFile('image1.jpeg', { force: true })
      nwr.imagedescriptionElement().type('Testing Image')
      nwr.updateimageElement().contains('Upload Image').click({ force: true })
      // dash.messageElement().should('contain', 'Image Created')
   }
   clickOnAddNote() {
      nwr.addnoteElement().click({ force: true })
      nwr.notetypeElement().click({ force: true })
      cy.get('[data-value="Quality Assurance"]').click({ force: true })
      nwr.noteElement().scrollIntoView().type('Testing Note', { force: true })
      nwr.createnoteElement().contains('Create').click({ force: true })
      //dash.messageElement().should('contain', 'Ticket updated')
   }
   //RI
   filtercontainRI() {
      cy.wait(2000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.equal(71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.not.equal(71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterGreaterthanRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.greaterThan(71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterGreaterequalRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.gte(71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterLessthanRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lessThan(71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterLessequalRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.wait(100)
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lte(71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBetweenRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.nonwarrantyRepairs.recordid1)
      cy.get('[placeholder="To"]').type(tdata.nonwarrantyRepairs.recordid)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(0).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.within(70799, 71690);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(8).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.recordid1, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.equal(70799)
      })
      nwr.clearFilterElement().click({ force: true })
   }
   //tn
   selectFilterTicketNumber() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).type('V00')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'V00')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).type('690')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '690')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankTN() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).type(tdata.nonwarrantyRepairs.ticketnumber, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   //RT
   selectFilterRepairType() {
      nwr.addFilterElement().eq(2).click({ force: true })
      cy.get('[value="In_House"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairtype)
      cy.get('[class="reset-button"]').click({ force: true })
   }
   filterDoesnotcontainRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairtype)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairtype)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairtype)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairtype)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.repairtype)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('In')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'In')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('use')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'use')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankRT() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairtype, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairtype)
      nwr.clearFilterElement().click({ force: true })
   }
   //sn
   selectFilterSerialNumber() {
      cy.wait(1000)
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).type('VIVA')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VIVA')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).type('Test')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Test')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankSN() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).type(tdata.nonwarrantyRepairs.serialnumber, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   //RD
   selectFilterRepairnwrice() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Dell')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Dell')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Touch')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Touch')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankRD() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   //tag
   selectFilterAssetTag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontaintag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualstag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequaltag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithtag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('67')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '67')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithtag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('TY')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'TY')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlanktag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblanktag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   //RS
   filterOption1() {
      cy.wait(1000)
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Waiting_on_Repair_Approval"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Waiting on Repair Approval')
      cy.get('.reset-button').click({ force: true })
   }
   //StdN()
   filterContainStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Ryk')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Ryk')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('sen')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'sen')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankStdN() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   //IT()
   filterContainIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Con')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Con')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('lady')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'lady')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankIT() {
      nwr.addFilterElement().eq(7).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   //Box()
   filterContainBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.repairBox)
     nwr.applyElement().click({ force: true })
     // cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairBox)
   }
   filterDoesnotcontainBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
    //  cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
    //  cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
     // cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('demo')
      nwr.applyElement().click({ force: true })
    //  cy.get('[row-index="0"]').should('contain', 'demo')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
      nwr.applyElement().click({ force: true })
     // cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
     // cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankBox() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox, { force: true })
      nwr.applyElement().click({ force: true })
      //cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   //cby
   selectFilterCreatedBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
   }
   filterDoesnotcontainCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('demo')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'demo')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankCBy() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   //Ldate
   filterEqualsDate(){
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.lastdate1)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalDate() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.lastdate1)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeforeDate() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      nwr.clearFilterElement().click({ force: true })
   }
   filterAfterDate() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBetweenDate() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.nonwarrantyRepairs.lastdate, { force: true })
      nwr.applyElement().click({ force: true })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankDate() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.nonwarrantyRepairs.lastdate, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankDate() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.nonwarrantyRepairs.lastdate, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.lastdate1)
      nwr.clearFilterElement().click({ force: true })
   }
}
export default NonWarrantyRepairsActions 