/// <reference types="cypress"/>
const FleetValueElements = require("../PageElements/FleetValueElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const tdata = require("../../../testData.json");

export class FleetValueActions {
   constructor() {
      globalThis.rep360 = new Repair360Elements();
      globalThis.fle = new FleetValueElements();
      globalThis.dash = new DashboardElements();
   }
   closeTermsOfServiceWindow() {
      cy.wait(2000)
   }
   clickOnRepair360() {
      dash.repair360Element().click({ force: true })
      cy.wait(1000)
   }
   clickOnReportCenter() {
      dash.reportcenterElement().click({ force: true })
   }
   clickOnFleetValue() {
      cy.wait(100)
      rep360.fleetValueElement().click({ force: true })
   }
   verifyTitle() {
      fle.titleElement().should('be.visible')
   }
   filtersVisible() {
      fle.filtersElement().should('be.visible')
   }
   tableVisible() {
      fle.tableElement().should('be.visible')
   }
   allsectionsVisible() {
      fle.sectionsElement().should('be.visible')
   }
   clickOnDownloadButton() {
      fle.exportElement().click({ force: true })
   }
   clickOnHelpIcon(){
      fle.filterHelpElement().click({ force: true })
   }
   verifyfilteringGuide(){
      cy.contains('Dream Data Filtering Guide').should('be.visible')
      cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
   }
   filterContainDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(0).click({ force: true })
      fle.fieldValueElement().type(tdata.fleetValue.deviceName)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.deviceName)
      fle.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(1).click({ force: true })
      fle.fieldValueElement().eq(0).type(tdata.fleetValue.deviceName)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.fleetValue.deviceName)
      fle.clearFilterElement().click({ force: true })
   }
   filterEqualsDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(2).click({ force: true })
      fle.fieldValueElement().eq(0).type(tdata.fleetValue.deviceName)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.deviceName)
      fle.clearFilterElement().click({ force: true })
   }
   filterNotequalDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(3).click({ force: true })
      fle.fieldValueElement().eq(0).type(tdata.fleetValue.deviceName)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.fleetValue.deviceName)
      fle.clearFilterElement().click({ force: true })
   }
   filterBeginswithDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(4).click({ force: true })
      fle.fieldValueElement().eq(0).type('HP Chrome')
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'HP Chrome')
      fle.clearFilterElement().click({ force: true })
   }
   filterEndswithDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(5).click({ force: true })
      fle.fieldValueElement().eq(0).type('Non-Touch')
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Non-Touch')
      fle.clearFilterElement().click({ force: true })
   }
   filterBlankDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(6).click({ force: true })
      fle.fieldValueElement().eq(0).type(' ', { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      fle.clearFilterElement().click({ force: true })
   }
   filterNotblankDName() {
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(7).click({ force: true })
      fle.fieldValueElement().eq(1).type(tdata.fleetValue.deviceName, { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.deviceName)
      fle.clearFilterElement().click({ force: true })
   }
   //Model
   filterContainDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(0).click({ force: true })
      fle.fieldValueElement().type(tdata.fleetValue.deviceModel)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.deviceModel)
      fle.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(1).click({ force: true })
      fle.fieldValueElement().eq(0).type(tdata.fleetValue.deviceModel)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.fleetValue.deviceModel)
      fle.clearFilterElement().click({ force: true })
   }
   filterEqualsDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(2).click({ force: true })
      fle.fieldValueElement().eq(0).type(tdata.fleetValue.deviceModel)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.deviceModel)
      fle.clearFilterElement().click({ force: true })
   }
   filterNotequalDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(3).click({ force: true })
      fle.fieldValueElement().eq(0).type(tdata.fleetValue.deviceModel)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.fleetValue.deviceModel)
      fle.clearFilterElement().click({ force: true })
   }
   filterBeginswithDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(4).click({ force: true })
      fle.fieldValueElement().eq(0).type('CA02')
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'CA02')
      fle.clearFilterElement().click({ force: true })
   }
   filterEndswithDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(5).click({ force: true })
      fle.fieldValueElement().eq(0).type('23NR')
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '23NR')
      fle.clearFilterElement().click({ force: true })
   }
   filterBlankDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(6).click({ force: true })
      fle.fieldValueElement().eq(0).type(' ', { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      fle.clearFilterElement().click({ force: true })
   }
   filterNotblankDModel() {
      fle.addFilterElement().eq(1).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(7).click({ force: true })
      fle.fieldValueElement().eq(1).type(tdata.fleetValue.deviceModel, { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.deviceModel)
      fle.clearFilterElement().click({ force: true })
   }
   //Quantity()
   filtercontainQuantity() {
      cy.wait(2000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(0).click({ force: true })
      fle.fieldValueElement().type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(1).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterGreaterthanQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(2).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterGreaterequalQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(3).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterLessthanQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(4).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterLessequalQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(5).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterBetweenQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.fleetValue.quantity1)
      cy.get('[placeholder="To"]').type(tdata.fleetValue.quantity)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterBlankQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(7).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      fle.clearFilterElement().click({ force: true })
   }
   filterNotblankQuantity() {
      cy.wait(1000)
      fle.addFilterElement().eq(2).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(8).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(tdata.fleetValue.quantity, { force: true })
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   //SKU
   filterContainSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(0).click({ force: true })
      fle.fieldValueElement().clear({ force: true }).type(tdata.fleetValue.sku)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.sku)
      fle.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(1).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.sku)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.fleetValue.sku)
      fle.clearFilterElement().click({ force: true })
   }
   filterEqualsSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(2).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.sku)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.sku)
      fle.clearFilterElement().click({ force: true })
   }
   filterNotequalSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(3).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.sku)
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.fleetValue.sku)
      fle.clearFilterElement().click({ force: true })
   }
   filterBeginswithSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(4).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type('4BS')
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '4BS')
      fle.clearFilterElement().click({ force: true })
   }
   filterEndswithSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(5).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type('UAR')
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'UAR')
      fle.clearFilterElement().click({ force: true })
   }
   filterBlankSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(6).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      fle.clearFilterElement().click({ force: true })
   }
   filterNotblankSKU() {
      fle.addFilterElement().eq(3).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(7).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(tdata.fleetValue.sku, { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.fleetValue.sku)
      fle.clearFilterElement().click({ force: true })
   }
   filtercontainPrice() {
      cy.wait(2000)
      fle.addFilterElement().eq(4).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(0).click({ force: true })
      fle.fieldValueElement().type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(4).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(1).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterGreaterthanPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(4).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(2).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterGreaterequalPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(4).click({ force: true })
      fle.fieldNameElement().eq(1).click({ force: true })
      fle.fieldOpElement().eq(3).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterLessthanPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(4).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterLessequalPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(5).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterBetweenPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.fleetValue.price1)
      cy.get('[placeholder="To"]').type(tdata.fleetValue.price)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterBlankPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(7).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      fle.clearFilterElement().click({ force: true })
   }
   filterNotblankPrice() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(8).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(tdata.fleetValue.price, { force: true })
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }

   filtercontainTotalValue() {
      cy.wait(2000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(0).click({ force: true })
      fle.fieldValueElement().type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(1).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterGreaterthanTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(2).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterGreaterequalTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(3).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterLessthanTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(4).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterLessequalTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(5).click({ force: true })
      fle.fieldValueElement().eq(0).clear({ force: true }).type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterBetweenTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="From"]').type(tdata.fleetValue.total1)
      cy.get('[placeholder="To"]').type(tdata.fleetValue.total)
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   filterBlankTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(7).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
      fle.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      fle.clearFilterElement().click({ force: true })
   }
   filterNotblankTotalValue() {
      cy.wait(1000)
      fle.addFilterElement().eq(0).click({ force: true })
      fle.fieldNameElement().eq(2).click({ force: true })
      fle.fieldOpElement().eq(8).click({ force: true })
      fle.fieldValueElement().eq(1).clear({ force: true }).type(tdata.fleetValue.total, { force: true })
      fle.applyElement().click({ force: true })
      fle.clearFilterElement().click({ force: true })
   }
   sortingDeviceName() {
      cy.wait(1000)
      fle.optionElement().eq(0).scrollIntoView().click({ force: true })
      fle.sortAscendingElement().click({ force: true })
      fle.optionElement().eq(0).scrollIntoView().click({ force: true })
      fle.sortDescendingElement().click({ force: true })
      fle.optionElement().eq(0).scrollIntoView().click({ force: true })
      fle.clearSortElement().click({ force: true })
   }
   sortingDeviceModel() {
      cy.wait(1000)
      fle.optionElement().eq(1).scrollIntoView().click({ force: true })
      fle.sortAscendingElement().click({ force: true })
      fle.optionElement().eq(1).scrollIntoView().click({ force: true })
      fle.sortDescendingElement().click({ force: true })
      fle.optionElement().eq(1).scrollIntoView().click({ force: true })
      fle.clearSortElement().click({ force: true })
   }
   sortingQuantity() {
      cy.wait(1000)
      fle.optionElement().eq(2).scrollIntoView().click({ force: true })
      fle.sortAscendingElement().click({ force: true })
      fle.optionElement().eq(2).scrollIntoView().click({ force: true })
      fle.sortDescendingElement().click({ force: true })
      fle.optionElement().eq(2).scrollIntoView().click({ force: true })
      fle.clearSortElement().click({ force: true })
   }
   sortingSKU() {
      cy.wait(1000)
      fle.optionElement().eq(3).scrollIntoView().click({ force: true })
      fle.sortAscendingElement().click({ force: true })
      fle.optionElement().eq(3).scrollIntoView().click({ force: true })
      fle.sortDescendingElement().click({ force: true })
      fle.optionElement().eq(3).scrollIntoView().click({ force: true })
      fle.clearSortElement().click({ force: true })
   }
   sortingBuybackPrice() {
      cy.wait(1000)
      fle.optionElement().eq(4).scrollIntoView().click({ force: true })
      fle.sortAscendingElement().click({ force: true })
      fle.optionElement().eq(4).scrollIntoView().click({ force: true })
      fle.sortDescendingElement().click({ force: true })
      fle.optionElement().eq(4).scrollIntoView().click({ force: true })
      fle.clearSortElement().click({ force: true })
   }
   sortingTotalValue() {
      cy.wait(1000)
      fle.optionElement().eq(5).scrollIntoView().click({ force: true })
      fle.sortAscendingElement().click({ force: true })
      fle.optionElement().eq(5).scrollIntoView().click({ force: true })
      fle.sortDescendingElement().click({ force: true })
      fle.optionElement().eq(5).scrollIntoView().click({ force: true })
      fle.clearSortElement().click({ force: true })
   }
}
export default FleetValueActions 