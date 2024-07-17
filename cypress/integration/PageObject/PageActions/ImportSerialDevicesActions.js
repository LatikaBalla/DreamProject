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
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true }) 
       // dash.termsElement().click({ force: true })
    }
    clickOnManageDevices() {
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
        isd.tableElement().scrollIntoView().should('be.visible')
    }
    clickOnAddNewImport() {
        cy.get(':nth-child(2) > .MuiBox-root > .MuiGrid-container > .MuiGrid-root > :nth-child(2)').click({ force: true })
        // isd.addimportElement().eq(1).scrollIntoView().click({force:true})
    }
    uploadcsvFile() {
        cy.get('#quantityDevices').type(tdata.importDevice.quantitydevices)
        cy.contains('Attach CSV file').click({ force: true })
        isd.uploadElement().attachFile(tdata.importDevice.uploadfilename, { force: true })
    }
    clickOnSubmitButton() {
        isd.submitElement().click({ force: true })
       // cy.wait(5000)
      //  dash.messageElement().should('contain', 'New import has been submitted')
    }
    clickOnRefreshButton() {
        isd.refreshbtnElement().click({ force: true })
    }
    verfiyImportTable() {
        //cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', 'demo_adminsuper@vivacitytech.com',{force:true})
    }
    clickOnDownloadImport() {
        isd.downloadimportElement().click({ force: true })
    }
    verifyDownloaded() {
        cy.verifyDownload("/download/", tdata.importDevice.downloadfilename)
    }
    clickOnDetailsButton() {
        cy.get('tbody tr').eq(0).find('td').eq(4).contains("Details").click({ force: true })
    }
    verifyDeviceDetails() {
        isd.devicesDetailsTitleElement().should('be.visible')
    }
    clickOnMoreFilter() {
        isd.addFilterElement().click({ force: true })
    }
    clickOnClearFilter() {
        isd.clearFilterElement().click({ force: true })
    }
    selectFilterImporter() {
        isd.fieldNameElement().select(1).invoke("val").should("eq", 'importer', { force: true })
        isd.fieldOpElement().select('does_not_contain', { force: true }).should('have.value', 'does_not_contain')
        isd.fieldValueElement().type(tdata.importDevice.importer)
        isd.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.importDevice.importer)
    }
    selectFilterQuantityDevices() {
        cy.contains('+ Add Filter Group').click({ force: true })
        isd.fieldNameElement().select(2).invoke("val").should("eq", "quantity_devices")
        isd.fieldOpElement().select('does_not_contain', { force: true })
        isd.fieldValueElement().type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', tdata.importDevice.quantitydevices)
    }

}
export default ImportSerialDevicesActions 