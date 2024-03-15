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
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnPartClosetTab() {
        rep.partclosetElement().click({ force: true })
    }
    verifyTitle() {
        pc.titleElement().should('be.visible')
    }
    filtersVisible() {
        pc.filtersElement().should('be.visible')
    }
    tableVisible() {
        pc.tableElement().should('be.visible')
    }
    clickOnNewCustomePart() {
        pc.custompartElement().click({ force: true })
    }
    enterPartname() {
        pc.partnameElement().type(tdata.partCloset.partname)
    }
    enterManufacture() {
        pc.manufacturerElement().type(tdata.partCloset.manufacturer)
    }
    enterParentDevice() {
        pc.parentdeviceElement().type(tdata.partCloset.parentdevice)
    }
    enterPartSKU() {
        pc.partskuElement().type(tdata.partCloset.partsku)
    }
    enterQuantity() {
        pc.quantityElement().type(tdata.partCloset.quantity, { force: true })
    }
    clickOnSubmitButton() {
        pc.submitElement().click({ force: true })
    }
    selectBuilding() {
        pc.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('[role="option"]').eq(0).click({ force: true })
    }
    verifyNewPartAdded() {
        dash.messageElement().should('contain', 'Submitting form')
    }
    enterPartSKUSearch() {
        pc.searchElement().type(tdata.partCloset.partname, { force: true })
    }
    verifySearchResult() {
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.partCloset.partname)
    }
    clickOnDeleteButton() {
        cy.get('tbody tr').eq(0).find('td').eq(8).scrollIntoView().contains("Delete").click({ force: true })
        cy.get('.MuiPaper-root > .MuiButtonBase-root').click({ force: true })
    }
    verifyDeleted() {
        cy.get('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.partCloset.partname)
    }
    clickOnNewVTPart() {
        pc.tvpartElement().click({ force: true })
    }
    selectDevice() {
        pc.deviceElement().click({ force: true })
        cy.get(tdata.partCloset.device).click({ force: true })
    }
    selectPartName() {
        pc.partidElement().click({ force: true })
        cy.get('[role="listbox"]').find('[role="option"]').eq(0).click({ force: true })
        //   cy.get(tdata.partCloset.partid).click({force:true})
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
        dash.messageElement().should('contain', 'Submitting form')
        //cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.partCloset.partnameTable)
        //  dash.messageElement().should('contain', tdata.srcStudent.createpartmsg)
    }
    clickOnMoreFilter() {
        pc.addFilterElement().click({ force: true })
    }
    clickOnClearFilter() {
        pc.clearFilterElement().click({ force: true })
    }
    selectFilterBuilding() {
        pc.fieldNameElement().select('building_name', { force: true })
        pc.fieldOpElement().select('does_not_contain', { force: true })
        pc.fieldValueElement().type(tdata.partCloset.building)
        pc.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.partCloset.building)
    }
    selectFilterManufacturer() {
        cy.contains('+ Add Filter Group').click({ force: true })
        pc.fieldNameElement().select('manufacturer', { force: true })
        pc.fieldOpElement().select('does_not_contain', { force: true })
        pc.fieldValueElement().type(tdata.partCloset.manufacturer, { force: true })
        pc.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.partCloset.manufacturer)
    }
    selectFilterParentDevice() {
        cy.contains('+ Add Filter Group').click({ force: true })
        pc.fieldNameElement().select('parent_device', { force: true })
        pc.fieldOpElement().select('does_not_contain', { force: true })
        pc.fieldValueElement().type(tdata.partCloset.parentdevice)
        pc.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.partCloset.parentdevice)
    }
    selectFilterPartName() {
        cy.contains('+ Add Filter Group').click({ force: true })
        pc.fieldNameElement().select('part_name', { force: true })
        pc.fieldOpElement().select('does_not_contain', { force: true })
        pc.fieldValueElement().type(tdata.partCloset.partname)
        pc.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.partCloset.partname)
    }
    selectFilterQuantity() {
        cy.contains('+ Add Filter Group').click({ force: true })
        pc.fieldNameElement().select('quantity', { force: true })
        pc.fieldOpElement().select('does_not_contain', { force: true })
        pc.fieldValueElement().type(tdata.partCloset.quantity)
        pc.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.partCloset.quantity)
    }
    selectFilterSku() {
        cy.contains('+ Add Filter Group').click({ force: true })
        pc.fieldNameElement().select('sku', { force: true })
        pc.fieldOpElement().select('does_not_contain', { force: true })
        pc.fieldValueElement().type(tdata.partCloset.partsku)
        pc.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('not.contain', tdata.partCloset.partsku)
    }
}
export default PartClosetActions 