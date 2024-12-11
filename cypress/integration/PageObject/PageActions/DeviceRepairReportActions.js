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
      cy.wait(5000)
     // dash.termsElement().contains('Agree').click({ force: true })
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
   clickOnviewButton() {
      cy.window().then(win => {
      });
      cy.get('body').type('{ctrl}t');
      cy.visit("/repair-360/ticket-detail/" + tdata.deviceRepairReport.recordid, { visitTimeout: 30000 })
   }
   verifyRapairTicketPAge() {
      cy.wait(1000)
      dev.headingElement().should('be.visible', { force: true })
   }
   verifyTicketDetails() {
      cy.contains(tdata.deviceRepairReport.ticketnumber).should('be.visible')
   }
   clickOnDownloadButton() {
      dev.downloadticketElement().click({ force: true })
   }
   verifyDownloadSuccessful() {
      cy.verifyDownload("/download/", tdata.deviceRepairReport.filename)
   }
   clickOndownload() {
      dev.downloadbtnElement().click({ force: true })
   }
   selectdropdownList() {
      dev.searchdropdownElement().eq(0).click({ force: true })
      dev.ticketnumberElement().click({ force: true })
   }
   clickOnAddRepairImage() {
      dev.addimageElement().click({ force: true })
      dev.uploadimageElement().attachFile('image1.jpeg', { force: true })
      dev.imagedescriptionElement().type('Testing Image')
      dev.updateimageElement().contains('Upload Image').click({ force: true })
      // dash.messageElement().should('contain', 'Image Created')
   }
   clickOnAddNote() {
      dev.addnoteElement().click({ force: true })
      dev.notetypeElement().click({ force: true })
      cy.get('[data-value="Quality Assurance"]').click({ force: true })
      dev.noteElement().scrollIntoView().type('Testing Note', { force: true })
      dev.createnoteElement().contains('Create').click({ force: true })
      //dash.messageElement().should('contain', 'Ticket updated')
   }
   //RI
   filtercontainRI() {
      cy.wait(2000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.equal(56677);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.not.equal(56677);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterGreaterthanRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.greaterThan(56677);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterGreaterequalRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.gte(56677);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterLessthanRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lessThan(56677);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterLessequalRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.recordid)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.lte(56677);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterBetweenRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.deviceRepairReport.recordid)
      cy.get('[placeholder="To"]').type(tdata.deviceRepairReport.recordid1)
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.be.within(56677, 70664);
      })
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankRI() {
      cy.wait(1000)
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(8).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.recordid1, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
         const value = parseInt($el.text());
         expect(value).to.equal(70664)
      })
      dev.clearFilterElement().click({ force: true })
   }
   //tn
   selectFilterTicketNumber() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.ticketnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).type('V00')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'V00')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).type('677')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '677')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankTN() {
      dev.addFilterElement().eq(0).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).type(tdata.deviceRepairReport.ticketnumber, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.ticketnumber)
      dev.clearFilterElement().click({ force: true })
   }
   //sn
   selectFilterSerialNumber() {
      cy.wait(1000)
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).type(tdata.deviceRepairReport.serialnumber)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).type('VIVATEST')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VIVATEST')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).type('12Test')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '12Test')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankSN() {
      dev.addFilterElement().eq(3).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).type(tdata.deviceRepairReport.serialnumber, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.serialnumber)
      dev.clearFilterElement().click({ force: true })
   }
   //RS
   filterOption1() {
      cy.wait(1000)
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Pending_Repair_Box"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Pending Repair Box')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption2() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Box_Created"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Box Created')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption3() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Intake"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Intake')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption4() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Estimate_Approved"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Estimate Approved')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption5() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Intake_Queue"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Intake Queue')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption6() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Shipping_to_Vivacity"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Shipping to Vivacity')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption7() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Estimate_Denied"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Estimate Denied')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption8() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="On_Hold"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'On Hold')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption9() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Part_Ordered"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Part Ordered')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption10() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Part_Queue"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Part Queue')
      cy.get('.reset-button').click({ force: true })
   }
   filterOption11() {
      dev.addFilterElement().eq(6).click({ force: true })
      cy.get('[value="Claim_Overage"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repair_status"]').should('contain', 'Claim Overage')
      cy.get('.reset-button').click({ force: true })
   }
   //B
   selectFilterBuilding() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Build')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Build')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('One')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'One')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankB() {
      dev.addFilterElement().eq(1).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
      dev.clearFilterElement().click({ force: true })
   }
   //RT
   selectFilterRepairType() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairtype)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Viva')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('city')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'city')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankRT() {
      dev.addFilterElement().eq(2).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.repairtype, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairtype)
      dev.clearFilterElement().click({ force: true })
   }
   //RD
   selectFilterRepairDevice() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Viva')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Viva')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Touch')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Touch')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankRD() {
      dev.addFilterElement().eq(4).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.repairdevice, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.repairdevice)
      dev.clearFilterElement().click({ force: true })
   }
   //tag
   selectFilterAssetTag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontaintag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualstag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequaltag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.assettag)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithtag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('H4r')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'H4r')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithtag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('&Lo')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '&Lo')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlanktag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblanktag() {
      dev.addFilterElement().eq(5).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.assettag, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.assettag)
      dev.clearFilterElement().click({ force: true })
   }
   //StdN
   filterContainStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(0).click({ force: true })
      dev.fieldValueElement().type(tdata.deviceRepairReport.studentName)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.studentName)
   }
   filterDoesnotcontainStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(1).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.studentName)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.deviceRepairReport.studentName)
      dev.clearFilterElement().click({ force: true })
   }
   filterEqualsStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(2).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.studentName)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.studentName)
      dev.clearFilterElement().click({ force: true })
   }
   filterNotequalStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(3).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(tdata.deviceRepairReport.studentName)
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.deviceRepairReport.studentName)
      dev.clearFilterElement().click({ force: true })
   }
   filterBeginswithStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(4).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('Soh')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Soh')
      dev.clearFilterElement().click({ force: true })
   }
   filterEndswithStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(5).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type('ini')
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'ini')
      dev.clearFilterElement().click({ force: true })
   }
   filterBlankStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(6).click({ force: true })
      dev.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      dev.clearFilterElement().click({ force: true })
   }
   filterNotblankStdN() {
      dev.addFilterElement().eq(7).click({ force: true })
      dev.fieldNameElement().eq(1).click({ force: true })
      dev.fieldOpElement().eq(7).click({ force: true })
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.studentName, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.studentName)
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
      dev.fieldValueElement().eq(1).clear({ force: true }).type(tdata.deviceRepairReport.createdby, { force: true })
      dev.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.deviceRepairReport.createdby)
      dev.clearFilterElement().click({ force: true })
   }
   sortingRecordID() {
      cy.wait(1000)
      dev.optionElement().eq(1).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(1).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(1).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingTicketNumber() {
      cy.wait(1000)
      dev.optionElement().eq(1).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(1).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(1).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingBuilding() {
      cy.wait(1000)
      dev.optionElement().eq(2).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(2).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(2).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingReturnType() {
      cy.wait(1000)
      dev.optionElement().eq(3).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(3).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(3).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingSerialNumber() {
      cy.wait(1000)
      dev.optionElement().eq(4).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(4).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(4).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingRepairDevice() {
      cy.wait(1000)
      dev.optionElement().eq(5).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(5).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(5).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingAssetTag() {
      cy.wait(1000)
      dev.optionElement().eq(6).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(6).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(6).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingRepairStatus() {
      cy.wait(1000)
      dev.optionElement().eq(7).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(7).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(7).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingStudentName() {
      cy.wait(1000)
      dev.optionElement().eq(8).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(8).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(8).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
   sortingCreatedBy() {
      cy.wait(1000)
      dev.optionElement().eq(9).scrollIntoView().click({ force: true })
      dev.sortAscendingElement().click({ force: true })
      dev.optionElement().eq(9).scrollIntoView().click({ force: true })
      dev.sortDescendingElement().click({ force: true })
      dev.optionElement().eq(9).scrollIntoView().click({ force: true })
      dev.clearSortElement().click({ force: true })
   }
}
export default DeviceRepairReportActions 