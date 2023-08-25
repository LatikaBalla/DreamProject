/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ImportSerialDevicesElements = require("../PageElements/ImportSerialDevicesElements.js")
const tdata = require("../../../testData.json");
export class ImportSerialDevicesActions {
    constructor() {
        globalThis.mdev = new ManageDevicesElements();
        globalThis.dash = new DashboardElements();
        globalThis.isd = new ImportSerialDevicesElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnManageDevices() {
        dash.arrowElement().click({ force: true })
        dash.managedevicesElement().click({ force: true })
    }
    clickOnImportSerialDevices() {
        mdev.serialdevicesElement().click({ force: true })
    }
    verifyTitle() {
        isd.titleElement().should('be.visible')
    }
    filtersVisible() {
        isd.filtersElement().should('be.visible')
    }
    tableVisible() {
        isd.tableElement().should('be.visible')
    }
    clickOnAddNewImport(){
        cy.get(':nth-child(2) > .MuiBox-root > .MuiGrid-container > .MuiGrid-root > :nth-child(2)').click()
       // isd.addimportElement().eq(1).scrollIntoView().click({force:true})
    }
    uploadcsvFile(){
        isd.uploadElement().attachFile(tdata.importDevice.uploadfilename)
    }
    clickOnSubmitButton(){
        isd.submitElement().click({force:true})
    }
    verfiyImportTable(){
        
    }
    clickOnDownloadImport(){
        isd.downloadimportElement()
    }
    verifyDownloaded(){
        cy.verifyDownload(tdata.importDevice.downloadfilename)
    }
    clickOnDetailsButton(){
        isd.detailsElement()
    }
    verifyDeviceDetails(){

    }

}
export default ImportSerialDevicesActions 