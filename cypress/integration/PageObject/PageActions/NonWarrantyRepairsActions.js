/// <reference types="cypress"/>
const NonWarrantyRepairsElements = require("../PageElements/NonWarrantyRepairsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const tdata = require("../../../testData.json");

export class NonWarrantyRepairsActions {
   constructor() {
      globalThis.rep360 = new Repair360Elements();
      globalThis.nwr = new NonWarrantyRepairsElements();
      globalThis.dash = new DashboardElements();
   }
   closeTermsOfServiceWindow() {
      cy.wait(5000)
      dash.termsElement().contains('Dismiss').click({ force: true })
   }
   clickOnRepair360() {
      dash.repair360Element().click({ force: true })
      cy.wait(2000)
   }
   clickOnReportCenter() {
      dash.reportcenterElement().click({ force: true })
   }
   clickOnNonWarrantyRepairs() {
      cy.wait(100)
      cy.get(':nth-child(2) > .MuiCard-root > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .css-sgter1 > .css-1qocved > .MuiBox-root > .MuiTypography-root').click({ force: true })
      // rep360.nonwarrantyrElement().click({ force: true })
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
   clickOnActionButton() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.wait(2000)
      cy.get('[data-testid="ReceiptIcon"]').eq(0).click({ force: true })
   }
   clickOnViewdetails() {
      cy.contains('View Details').click({ force: true })
      // cy.window().then(win => {

      // });
      // cy.get('body').type('{ctrl}t');
      // cy.visit("/repair-360/ticket-detail/" + tdata.nonwarrantyRepairs.recordid)
   }
   verifyRapairTicketPAge() {
      cy.wait(2000)
      cy.contains('Repair Ticket Details').should('be.visible')
   }
   clickOnClearButton() {
      cy.get('[data-testid="KeyboardBackspaceIcon"]').click({ force: true })
      nwr.clearbtnElement().click({ force: true })
   }
   searchBoxEmpty() {
      nwr.searchElement().should('be.empty')
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
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="repairCost"]').eq(1).then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.equal(71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="repairCost"]').then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.not.equal(71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterGreaterthanRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="repairCost"]').then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.be.greaterThan(71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterGreaterequalRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="repairCost"]').then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.be.gte(71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterLessthanRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="repairCost"]').eq(1).then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.be.lessThan(71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterLessequalRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.wait(100)
      // cy.get('.ag-row-first > [col-id="repairCost"]').eq(1).then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.be.lte(71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBetweenRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.nonwarrantyRepairs.total1)
      cy.get('[placeholder="To"]').type(tdata.nonwarrantyRepairs.total)
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="rrepairCost"]').eq(0).then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.be.within(70799, 71690);
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankRI() {
      cy.wait(1000)
      nwr.addFilterElement().eq(0).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(8).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.total, { force: true })
      nwr.applyElement().click({ force: true })
      // cy.get('.ag-row-first > [col-id="repairCost"]').eq(1).then(($el) => {
      //    const value = parseInt($el.text());
      //    expect(value).to.equal(70799)
      // })
      nwr.clearFilterElement().click({ force: true })
   }
   //issueType
   filterContainIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.issueType)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.issueType)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.issueType)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.issueType)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.issueType)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.issueType)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.issueType)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.issueType)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).type('Acci')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Acci')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).type('tal')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'tal')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankIType() {
      nwr.addFilterElement().eq(1).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).type(tdata.nonwarrantyRepairs.issueType, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.issueType)
      nwr.clearFilterElement().click({ force: true })
   }
   //tn
   filterContainIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.chromebookissue)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.chromebookissue)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.chromebookissue)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.chromebookissue)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.chromebookissue)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.chromebookissue)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.chromebookissue)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.chromebookissue)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).type('There')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'There')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).type('fault')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'fault')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankIssue() {
      nwr.addFilterElement().eq(2).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).type(tdata.nonwarrantyRepairs.chromebookissue, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.chromebookissue)
      nwr.clearFilterElement().click({ force: true })
   }
   //RD
   selectFilterRepairnwrice() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Dell')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Dell')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Touch')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Touch')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankRD() {
      nwr.addFilterElement().eq(3).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairdevice, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairdevice)
      nwr.clearFilterElement().click({ force: true })
   }
   //tag
   selectFilterAssetTag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontaintag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualstag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequaltag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithtag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('67')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '67')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithtag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('TY')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'TY')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlanktag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblanktag() {
      nwr.addFilterElement().eq(4).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.assettag, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.assettag)
      nwr.clearFilterElement().click({ force: true })
   }
   //sn
   selectFilterSerialNumber() {
      cy.wait(1000)
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.serialnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).type('VIVA')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VIVA')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).type('Test')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Test')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankSN() {
      nwr.addFilterElement().eq(5).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).type(tdata.nonwarrantyRepairs.serialnumber, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.serialnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   //tn
   selectFilterTicketNumber() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).type(tdata.nonwarrantyRepairs.ticketnumber)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).type('V00')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'V00')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).type('690')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '690')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankTN() {
      nwr.addFilterElement().eq(6).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).type(tdata.nonwarrantyRepairs.ticketnumber, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.ticketnumber)
      nwr.clearFilterElement().click({ force: true })
   }
   //RT
   selectFilterRepairType1() {
      nwr.addFilterElement().eq(7).click({ force: true })
      cy.get('[value="In House"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairtype)
      cy.get('[class="reset-button"]').click({ force: true })
   }
   selectFilterRepairType2() {
      nwr.addFilterElement().eq(7).click({ force: true })
      cy.get('[value="Student"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Student')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   //RS
   filterOption1() {
      cy.wait(1000)
      nwr.addFilterElement().eq(8).click({ force: true })
      cy.get('[value="Waiting on Repair Approval"]').click({ force: true })
      cy.get('[row-index="0"]>[col-id="repairStatus"]').should('contain', 'Waiting on Repair Approval')
      cy.get('.reset-button').click({ force: true })
   }
   //IT()
   filterContainIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Con')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Con')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('lady')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'lady')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankIT() {
      nwr.addFilterElement().eq(9).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.technician, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.technician)
      nwr.clearFilterElement().click({ force: true })
   }
   //StdN()
   filterContainStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('Viv')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Viv')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('cia')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'cia')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankStdN() {
      nwr.addFilterElement().eq(10).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.stdName, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.stdName)
      nwr.clearFilterElement().click({ force: true })
   }
   //Box()
   filterContainBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairBox)
   }
   filterDoesnotcontainBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
      //  cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
      //  cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox)
      nwr.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('demo')
      nwr.applyElement().click({ force: true })
      //  cy.get('[row-index="0"]').should('contain', 'demo')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
      nwr.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankBox() {
      nwr.addFilterElement().eq(11).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.repairBox, { force: true })
      nwr.applyElement().click({ force: true })
      //cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.repairBox)
      nwr.clearFilterElement().click({ force: true })
   }
   //cby
   selectFilterCreatedBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      nwr.fieldValueElement().type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
   }
   filterDoesnotcontainCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterEqualsCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeginswithCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(4).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('demo')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'demo')
      nwr.clearFilterElement().click({ force: true })
   }
   filterEndswithCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      nwr.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankCBy() {
      nwr.addFilterElement().eq(12).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(7).click({ force: true })
      nwr.fieldValueElement().eq(1).clear({ force: true }).type(tdata.nonwarrantyRepairs.createdby, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.createdby)
      nwr.clearFilterElement().click({ force: true })
   }
   //Ldate
   filterEqualsDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(0).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.nonwarrantyRepairs.lastdate1)
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotequalDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(1).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.nonwarrantyRepairs.lastdate1)
      nwr.clearFilterElement().click({ force: true })
   }
   filterBeforeDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(2).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      nwr.clearFilterElement().click({ force: true })
   }
   filterAfterDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      nwr.applyElement().click({ force: true })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBetweenDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.nonwarrantyRepairs.lastdate)
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.nonwarrantyRepairs.lastdate, { force: true })
      nwr.applyElement().click({ force: true })
      nwr.clearFilterElement().click({ force: true })
   }
   filterBlankDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(5).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.nonwarrantyRepairs.lastdate, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      nwr.clearFilterElement().click({ force: true })
   }
   filterNotblankDate() {
      nwr.addFilterElement().eq(13).click({ force: true })
      nwr.fieldNameElement().eq(2).click({ force: true })
      nwr.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.nonwarrantyRepairs.lastdate, { force: true })
      nwr.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.nonwarrantyRepairs.lastdate1)
      nwr.clearFilterElement().click({ force: true })
   }
   sortingTotal() {
      cy.wait(1000)
      nwr.optionElement().eq(0).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(0).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(0).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingIssueType() {
      cy.wait(1000)
      nwr.optionElement().eq(1).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(1).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(1).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingIssue() {
      cy.wait(1000)
      nwr.optionElement().eq(2).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(2).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(2).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingRepairDevice() {
      cy.wait(1000)
      nwr.optionElement().eq(3).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(3).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(3).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingAssetTag() {
      cy.wait(1000)
      nwr.optionElement().eq(4).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(4).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(4).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingSerialNumber() {
      cy.wait(1000)
      nwr.optionElement().eq(5).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(5).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(5).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingTicketNumber() {
      cy.wait(1000)
      nwr.optionElement().eq(6).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(6).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(6).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingReturnType() {
      cy.wait(1000)
      nwr.optionElement().eq(7).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(7).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(7).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingRepairStatus() {
      cy.wait(1000)
      nwr.optionElement().eq(8).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(8).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(8).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingInternalTechnicianName() {
      cy.wait(1000)
      nwr.optionElement().eq(9).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(9).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(9).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingStudentName() {
      cy.wait(1000)
      nwr.optionElement().eq(10).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(10).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(10).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingRepairBox() {
      cy.wait(1000)
      nwr.optionElement().eq(11).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(11).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(11).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingCreatedBy() {
      cy.wait(1000)
      nwr.optionElement().eq(12).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(12).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(12).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
   sortingLastModifiedDate() {
      cy.wait(1000)
      nwr.optionElement().eq(13).scrollIntoView().click({ force: true })
      nwr.sortAscendingElement().click({ force: true })
      nwr.optionElement().eq(13).scrollIntoView().click({ force: true })
      nwr.sortDescendingElement().click({ force: true })
      nwr.optionElement().eq(13).scrollIntoView().click({ force: true })
      nwr.clearSortElement().click({ force: true })
   }
}
export default NonWarrantyRepairsActions 