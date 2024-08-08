/// <reference types="cypress"/>
const DeviceRepairReportElements = require("../PageElements/DeviceRepairReportElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const tdata = require("../../../testData.json");
export class DeviceRepairReportActions {
   constructor() {
      globalThis.dev = new DeviceRepairReportElements();
      globalThis.dash = new DashboardElements();
      globalThis.repc = new ReportCenterElements();
   }
   closeTermsOfServiceWindow() {
      cy.contains('Remind me Later').click({ force: true })
      dash.termsElement().contains('Dismiss').click({ force: true })
      //   dash.termsElement().click({ force: true })
   }
   clickOnReportCenter() {
      dash.reportcenterElement().click({ force: true })
   }
   clickOnDeviceRepairReport() {
      repc.devicerrElement().click({ force: true })
   }
   verifyTitle() {
      dev.titleElement().should('be.visible')
   }
   filtersVisible() {
      dev.filtersElement().should('be.visible')
   }
   tableVisible() {
      dev.tableElement().should('be.visible')
   }
   enterTicketNumberSearch() {
      dev.searchElement().clear().type(tdata.deviceRepairReport.ticketno, { force: true })
   }
   verifyTicketDetailsTable() {
      // cy.wait(2000)
      cy.get('tr td').eq(1).should('contain', tdata.deviceRepairReport.ticketno)
   }
   clickOnClearButton() {
      cy.get('[data-testid="KeyboardBackspaceIcon"]').click({ force: true })
      dev.clearbtnElement().click({ force: true })
   }
   searchBoxEmpty() {
      dev.searchElement().should('be.empty')
   }
   clickOnTicketNumberTable() {
      cy.get('tr td').eq(9).as('btn').scrollIntoView()
      cy.get('@btn').contains('View').click({ force: true })
      cy.window().then(win => {
         // win.open('https://google.com', '_blank');
      });
      cy.get('body').type('{ctrl}t');
      cy.visit("/repair-360/ticket-detail/" + tdata.deviceRepairReport.recordid1, { visitTimeout: 30000 })
      //   cy.get('tr td').eq(9).scrollIntoView().contains('View').click({ force: true })    
   }
   verifyRapairTicketPAge() {
      cy.wait(1000)
      dev.headingElement().should('be.visible', { force: true })
   }
   verifyTicketDetails() {
      cy.contains(tdata.deviceRepairReport.ticketno).should('be.visible')
   }
   clickOnDownloadButton() {
      dev.downloadticketElement().click({ force: true })
      //  cy.get('body').type('{ctrl}w');
   }
   verifyDownloadSuccessful() {
      cy.verifyDownload("/download/", tdata.deviceRepairReport.filename)
   }
   clickOnExport() {
      cy.contains('Export').click({ force: true })
   }
   selectdropdownList() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.ticketnumberElement().click({ force: true })
   }
   searchRecordId() {
      cy.wait(3000)
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.recordidElement().click({ force: true })
      // cy.wait(1000)
      dev.searchElement().clear().type(tdata.deviceRepairReport.recordid + '{enter}', { force: true })
      cy.get('tr td').eq(0).should('contain', tdata.deviceRepairReport.recordid)
   }
   searchRepairType() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.repairtypeElement().click({ force: true })
      dev.searchElement().clear().type(tdata.deviceRepairReport.repairtype + '{enter}', { force: true })
      cy.wait(1000)
      cy.get('tr td').eq(2).should('contain', tdata.deviceRepairReport.repairtype)
   }
   searchRepairStatus() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.repairstatusElement().click({ force: true })
      dev.searchdropdownElement().eq(1).click({ force: true })
      dev.intransitElement().click({ force: true })
      cy.get('tr td').eq(5).should('contain', tdata.deviceRepairReport.repairstatus, { force: true })
   }
   searchRepairBox() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.repairboxElement().click({ force: true })
      dev.searchElement().clear().type(tdata.deviceRepairReport.repairbox + '{enter}', { force: true })
      cy.get('tr td').eq(6).should('contain', tdata.deviceRepairReport.repairbox, { force: true })
   }
   searchSerialNo() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.serialNoElement().click({ force: true })
      dev.searchElement().clear().type(tdata.deviceRepairReport.serialNo + '{enter}', { force: true })
      cy.get('tr td').eq(3).should('contain', tdata.deviceRepairReport.serialNo, { force: true })
   }
   searchAssetTag() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.assetTagElement().click({ force: true })
      dev.searchElement().clear().type(tdata.deviceRepairReport.assetTag + '{enter}', { force: true })
      cy.get('tr td').eq(4).should('contain', tdata.deviceRepairReport.assetTag, { force: true })
   }
   clickOnMoreFilter() {
      dev.addFilterElement().click({ force: true })
   }
   clickOnClearFilter() {
      dev.clearFilterElement().click({ force: true })
   }
   //RI
   filtercontainRI() {
      cy.wait(2000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.equal(8156);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.not.equal(8156);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterGreaterthanRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.greaterThan(8156);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterGreaterequalRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.gte(8156);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterLessthanRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lessThan(8156);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterLessequalRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lte(8156);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterBetweenRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.deviceRepairReport.recordid)
      cy.get('[placeholder="To"]').type(tdata.deviceRepairReport.recordid1)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.within(8156, 10584);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankRI() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(8).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.recordid1, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.equal(10584)
      })
      dev.clearFilterElement().click({ force: true })
   }
   //tn
   selectFilterTicketNumber() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).type('V0070')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'V0070')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).type('022')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '022')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankTN() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).type('V0070011', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'V0070011')
      dev.clearFilterElement().click({ force: true })
   }
   //sn
   selectFilterSerialNumber() {
      cy.wait(1000)
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).type('VIVATEST')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VIVATEST')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).type('12Test')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '12Test')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankSN() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).type('AAAAATest', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'AAAAATest')
      dev.clearFilterElement().click({ force: true })
   } 
   //RS
   filtercontainRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Viva')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('city')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'city')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankRS() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.repairtype, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   //B
   selectFilterBuilding() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Build')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Build')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('One')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'One')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankB() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type('GVL', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'GVL')
      dev.clearFilterElement().click({ force: true })
   }
    //RT
    selectFilterRepairType() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(0).click({ force: true })
      rt.fieldValueElement().clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      rt.clearFilterElement().click({ force: true })
  }
  filterDoesnotcontainRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(1).click({ force: true })
      rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      rt.clearFilterElement().click({ force: true })
  }
  filterEqualsRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(2).click({ force: true })
      rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      rt.clearFilterElement().click({ force: true })
  }
  filterNotequalRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(3).click({ force: true })
      rt.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.rdeviceRepairReport.repairtype)
      rt.clearFilterElement().click({ force: true })
  }
  filterBeginswithRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(4).click({ force: true })
      rt.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Viva')
      rt.clearFilterElement().click({ force: true })
  }
  filterEndswithRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(5).click({ force: true })
      rt.fieldValueElement().eq(0).clear({ force: true }).type('city')
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'city')
      rt.clearFilterElement().click({ force: true })
  }
  filterBlankRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(6).click({ force: true })
      rt.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      rt.clearFilterElement().click({ force: true })
  }
  filterNotblankRT() {
      rt.addFilterElement().eq(3).click({ force: true })
      rt.fieldNameElement().eq(1).click({ force: true })
      rt.fieldOpElement().eq(7).click({ force: true })
      rt.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.repairtype, { force: true })
      rt.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      rt.clearFilterElement().click({ force: true })
  }
   //RD
   selectFilterRepairDevice() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Dell Chromebook 11 3100')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Dell Chromebook 11 3100')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' Non-Touch')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' Non-Touch')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankRD() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type('VT Chromebook', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VT Chromebook')
      dev.clearFilterElement().click({ force: true })
   }
   //tag
   selectFilterAssetTag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontaintag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualstag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequaltag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithtag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('56')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '56')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithtag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('78')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '78')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlanktag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblanktag() {
      dev.addFilterElement().eq(6).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type('5678', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '5678')
      dev.clearFilterElement().click({ force: true })
   }
   //cby
   selectFilterCreatedBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.createdby)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.createdby)
   }
   filterDoesnotcontainCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.createdby)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.createdby)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.createdby)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.createdby)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.createdby)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.createdby)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('demo')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'demo')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankCBy() {
      dev.addFilterElement().eq(8).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type('Maleja Duque', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Maleja Duque')
      dev.clearFilterElement().click({ force: true })
   }
}
export default DeviceRepairReportActions 