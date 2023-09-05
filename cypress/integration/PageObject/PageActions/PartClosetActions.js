/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const PartClosetElements = require("../PageElements/PartClosetElements.js")
const tdata = require("../../../testData.json");
export class PartClosetActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.pc = new PartClosetElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnPartClosetTab() {
        mdev.partclosetElement().click({ force: true })
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
        pc.quantityElement().type(tdata.partCloset.quantity)
    }
    clickOnSubmitButton() {
        pc.submitElement().click({force:true})
    }
    verifyNewPartAdded() {
        dash.messageElement().should('contain', tdata.srcStudent.createpartmsg)
    }
    enterPartSKUSearch()
    {
        pc.searchElement().type(tdata.partCloset.search,{force:true})
    }
    verifySearchResult(){
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.partCloset.search)
    }
    clickOnDeleteButton(){

    }
    verifyDeleted(){

    }
    clickOnNewVTPart() {
        pc.tvpartElement().click({ force: true })
    }
    selectDevice() {
        pc.deviceElement().click({ force: true })
        cy.get(tdata.partCloset.device).click({force:true})
    }
    selectPartName() {
        pc.partidElement().click({ force: true })
        cy.get(tdata.partCloset.partid).click({force:true})
    }
    enterQuantityVT() {
        pc.quantityVTElement().type(tdata.partCloset.quantity)
    }
    clickOnSubmitVTButton() {
        pc.submitVTElement().click({ force: true })
    }
    verifyNewVTPartAdded(){
        dash.messageElement().should('contain', tdata.srcStudent.createpartmsg)
    }
 


}
export default PartClosetActions 