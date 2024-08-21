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
      cy.wait(5000)
      cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
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
     cy.wait(1000)
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
         expect(value).to.equal(41352);
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
         expect(value).to.not.equal(41352);
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
         expect(value).to.be.greaterThan(41352);
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
         expect(value).to.be.gte(41352);
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
         expect(value).to.be.lessThan(41352);
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
      cy.get('.ag-row-first > [col-id="record_id"]').eq(0).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lte(41352);
      })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBetweenRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.nonwarrantyRepairs.recordid)
      cy.get('[placeholder="To"]').type(tdata.nonwarrantyRepairs.recordid1)
      nwr.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.within(41352, 70799);
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
      nwr.fieldValueElement().eq(0).type('237')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '237')
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
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().clear({ force: true }).type(tdata.nonwarrantyRepairs.repairtype)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairtype)
      nwr.clearFilterElement().click({ force: true })
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
      cy.get('[row-index="0"]').should('contain',tdata.nonwarrantyRepairs.serialnumber)
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
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Viva')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithtag() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Test')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Test')
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
   filterOption2() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Closed"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Closed')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption3() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Quality_Assurance"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Quality Assurance')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption4() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Intake"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Intake')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption5() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Pending_Repair_Box"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Pending Repair Box')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption6() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Part_Queue"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Part Queue')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption7() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Repair"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Repair')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption8() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Complete"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Complete')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption9() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="InHouse"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'InHouse')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption10() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Part_Queue"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Part Queue')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption11() {
      nwr.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Claim_Overage"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Claim Overage')
      cy.get('.reset-button').click({ force: true })
   }
   //cby
   selectFilterCreatedBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
   }
   filterDoesnotcontainCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('demo')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'demo')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankCBy() {
      nwr.addFilterElement().eq(8).click({ force: true })
      nwr.fieldNameElement().eq(1).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }

}
export default NonWarrantyRepairsActions 