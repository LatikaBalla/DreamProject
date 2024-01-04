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
    clickOnAddNewImport() {
        cy.get(':nth-child(2) > .MuiBox-root > .MuiGrid-container > .MuiGrid-root > :nth-child(2)').click()
        // isd.addimportElement().eq(1).scrollIntoView().click({force:true})
    }
    uploadcsvFile() {
        cy.get('#quantityDevices').type("2")
        cy.contains('Attach CSV file').click({ force: true })
        isd.uploadElement().attachFile(tdata.importDevice.uploadfilename, { force: true })
    }
    clickOnSubmitButton() {
        isd.submitElement().click({ force: true })
        cy.wait(5000)
        dash.messageElement().should('contain', 'New import has been submitted')
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

}
export default ImportSerialDevicesActions 