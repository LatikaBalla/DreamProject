/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const PartClosetElements = require("../PageElements/PartClosetElements.js")
const tdata = require("../../../testData.json");
export class PartClosetActions {
    constructor() {
        globalThis.rep = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.pc = new PartClosetElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnPartClosetTab() {
        rep.partclosetElement().click({ force: true })
    }
    verifyTitle() {
        pc.titleElement().should('be.visible', { force: true })
    }
    filtersVisible() {
        pc.filtersElement().should('be.visible', { force: true })
    }
    tableVisible() {
        pc.tableElement().should('be.visible', { force: true })
    }
    clickOnAddNew() {
        pc.addNewElement().click({ force: true })
    }
    clickOnNewCustomePart() {
        pc.custompartElement().click({ force: true })
    }
    enterPartname() {
        pc.partnameElement().type(tdata.partCloset.partname, { force: true })
    }
    enterManufacture() {
        pc.manufacturerElement().type(tdata.partCloset.manufacturer, { force: true })
    }
    enterParentDevice() {
        pc.parentdeviceElement().type(tdata.partCloset.parentdevice, { force: true })
    }
    enterPartSKU() {
        pc.partskuElement().type(tdata.partCloset.partsku, { force: true })
    }
    enterQuantity() {
        pc.quantityElement().type(tdata.partCloset.quantity, { force: true })
    }
    clickOnSubmitButton() {
        pc.submitElement().click({ force: true })
    }
    verifyNewPartAdded() {
        // dash.messageElement().should('contain', 'Part Closet Item created',{ force: true })
    }
    enterPartSKUSearch() {
        pc.searchElement().type(tdata.partCloset.partname, { force: true })
    }
    verifySearchResult() {
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.partCloset.partname, { force: true })
    }
    clickOnDeleteButton() {
        cy.wait(1000)
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partname)
        pc.deleteElement().eq(0).click({ force: true })
    }
    verifyDeleted() {
        cy.get(':nth-child(8) > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > .MuiButtonBase-root').click({ force: true })
    }
    clickOnNewVTPart() {
        pc.tvpartElement().click({ force: true })
    }
    selectDevice() {
        pc.deviceElement().click({ force: true })
        cy.get(tdata.partCloset.device).click({ force: true })
    }
    selectPartName() {
        cy.wait(1000)
        pc.partidElement().click({ force: true })
        cy.get('[role="listbox"]').find('[role="option"]').eq(0).click({ force: true })
    }
    enterQuantityVT() {
        pc.quantityVTElement().type(tdata.partCloset.quantity, { force: true })
    }
    selectBuilding() {
        pc.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('[role="option"]').contains(tdata.buildings.buildingname).click({ force: true })
    }
    clickOnSubmitVTButton() {
        pc.submitVTElement().click({ force: true })
    }
    verifyNewVTPartAdded() {
        dash.messageElement().should('contain', 'Part Closet Item created', { force: true })
    }
    clickOnOrderMore() {
        cy.get('[type="button"]').contains('Order More').eq(0).click({ force: true })
    }
    enterQuantityMore() {
        cy.get('[placeholder="Quantity"]').type('10', { force: true })
        cy.contains('Submit Request').click({ force: true })
    }
    verifyRequestQuantity() {
        //dash.messageElement().should('contain', 'Request for more parts sent')
    }
    //PN
    selectFilterPartName() {
        cy.wait(4000)
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partname)
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.partCloset.partname)
        pc.clearFilterElement().click({ force: true })
    }
    filterEqualsPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partname)
        pc.clearFilterElement().click({ force: true })
    }
    filterNotequalPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.partCloset.partname)
        pc.clearFilterElement().click({ force: true })
    }
    filterBeginswithPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).type('Speaker', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Speaker')
        pc.clearFilterElement().click({ force: true })
    }
    filterEndswithPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).type('Set', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Set')
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        pc.fieldValueElement().eq(0).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankPN() {
        pc.addFilterElement().eq(0).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).type(tdata.partCloset.partname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partname)
        pc.clearFilterElement().click({ force: true })
    }
    // SKU
    selectFilterSku() {
        cy.wait(3000)
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partsku, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partsku)
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partsku, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.partCloset.partsku)
        pc.clearFilterElement().click({ force: true })
    }
    filterEqualsSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partsku, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partsku)
        pc.clearFilterElement().click({ force: true })
    }
    filterNotequalSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partsku, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.partCloset.partsku)
        pc.clearFilterElement().click({ force: true })
    }
    filterBeginswithSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).type('ULD', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ULD')
        pc.clearFilterElement().click({ force: true })
    }
    filterEndswithSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).type('5', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '5')
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        pc.fieldValueElement().eq(0).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankSKU() {
        pc.addFilterElement().eq(1).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).type(tdata.partCloset.partsku, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partsku)
        pc.clearFilterElement().click({ force: true })
    }
    //PD
    selectFilterParentDevice() {
        cy.wait(2000)
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.parentdevice, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.parentdevice)
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.parentdevice, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.partCloset.parentdevice)
        pc.clearFilterElement().click({ force: true })
    }
    filterEqualsPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.parentdevice, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.parentdevice)
        pc.clearFilterElement().click({ force: true })
    }
    filterNotequalPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.parentdevice, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.partCloset.parentdevice)
        pc.clearFilterElement().click({ force: true })
    }
    filterBeginswithPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).type('Asus Chromebook', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Asus Chromebook')
        pc.clearFilterElement().click({ force: true })
    }
    filterEndswithPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).type('Touch/2in1', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Touch/2in1')
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        pc.fieldValueElement().eq(0).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankPD() {
        pc.addFilterElement().eq(2).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).type(tdata.partCloset.parentdevice, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.parentdevice)
        pc.clearFilterElement().click({ force: true })
    }
    //b 
    selectFilterBuilding() {
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname, { force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
        pc.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        pc.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
        cy.wait(1000)
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname,{ force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname,{ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type('Build', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Build')
        pc.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type('One', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'One')
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
        cy.wait(1000)
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
        cy.wait(1000)
        pc.addFilterElement().eq(3).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.buildingname, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        pc.clearFilterElement().click({ force: true })
    }
    //manufacture
    selectFilterManufacturer() {
        cy.wait(2000)
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.manufacturer, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.manufacturer)
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.manufacturer, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="manufacturer_name"]').should('not.contain', tdata.partCloset.manufacturer)
        pc.clearFilterElement().click({ force: true })
    }
    filterEqualsM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.manufacturer, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.manufacturer)
        pc.clearFilterElement().click({ force: true })
    }
    filterNotequalM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.manufacturer, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.partCloset.manufacturer)
        pc.clearFilterElement().click({ force: true })
    }
    filterBeginswithM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).type('HP', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'HP')
        pc.clearFilterElement().click({ force: true })
    }
    filterEndswithM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).type('Inc.', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Inc.')
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        pc.fieldValueElement().eq(0).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankM() {
        pc.addFilterElement().eq(4).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).type('Dell', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dell')
        pc.clearFilterElement().click({ force: true })
    }
    //part category
    selectFilterPartCategory() {
        cy.wait(2000)
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partCategory, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partCategory)
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partCategory, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.partCloset.partCategory)
        pc.clearFilterElement().click({ force: true })
    }
    filterEqualsPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partCategory, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partCategory)
        pc.clearFilterElement().click({ force: true })
    }
    filterNotequalPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.partCategory, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.partCloset.partCategory)
        pc.clearFilterElement().click({ force: true })
    }
    filterBeginswithPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).type('Bot', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Bot')
        pc.clearFilterElement().click({ force: true })
    }
    filterEndswithPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).type('ver', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ver')
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        pc.fieldValueElement().eq(0).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankPC() {
        pc.addFilterElement().eq(5).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).type(tdata.partCloset.partCategory, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.partCloset.partCategory)
        pc.clearFilterElement().click({ force: true })
    }
    //quatity
    selectFilterQuantity() {
        cy.wait(4000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(0).click({ force: true })
        pc.fieldValueElement().type(tdata.partCloset.quantity, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(1).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.quantity, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterGreaterthanQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(2).click({ force: true })
        pc.fieldValueElement().eq(0).clear({ force: true }).type(tdata.partCloset.quantity, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterGreaterequalQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(3).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.quantity, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterLessthanQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(4).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.quantity, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterLessequalQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(5).click({ force: true })
        pc.fieldValueElement().eq(0).type(tdata.partCloset.quantity, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterBetweenQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="From"]').type(tdata.partCloset.quantity, { force: true })
        cy.get('[placeholder="To"]').type(tdata.partCloset.quantity1, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
    filterBlankQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(7).click({ force: true })
        pc.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        pc.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        pc.clearFilterElement().click({ force: true })
    }
    filterNotblankQ() {
        cy.wait(1000)
        pc.addFilterElement().eq(6).click({ force: true })
        pc.fieldNameElement().eq(1).click({ force: true })
        pc.fieldOpElement().eq(8).click({ force: true })
        pc.fieldValueElement().eq(1).clear({ force: true }).type(tdata.partCloset.quantity1, { force: true })
        pc.applyElement().click({ force: true })
        pc.clearFilterElement().click({ force: true })
    }
}
export default PartClosetActions 