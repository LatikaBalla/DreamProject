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
        cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
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
    clickOnAddNewImport() {
        isd.addimportElement().click({ force: true })
    }
    uploadcsvFile() {
        cy.get('#quantityDevices').type(tdata.importDevice.quantitydevices)
        cy.contains('Attach CSV file').click({ force: true })
        isd.uploadElement().attachFile(tdata.importDevice.uploadfilename, { force: true })
    }
    clickOnSubmitButton() {
        cy.wait(1000)
        isd.submitElement().click({ force: true })
        cy.wait(1000)
        dash.messageElement().should('contain', 'New Import request has been submitted')
    }
    clickOnDownloadImport() {
        isd.downloadimportElement().click({ force: true })
    }
    verifyDownloaded() {
        cy.verifyDownload("/download/", tdata.importDevice.downloadfilename)
    }
    clickOnDetailsButton() {
        cy.get('[data-testid="VisibilityIcon"]').eq(0).click({ force: true })
    }
    verifyDeviceDetails() {
        isd.devicesDetailsTitleElement().should('be.visible')
    }
    //Date Imported
    filtercontainDate() {
        cy.wait(3000)
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.importDevice.importdate)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.importDevice.importdate1)
        isd.clearFilterElement().click({ force: true })
    }
    filterEqualsDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.importDevice.importdate)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.importDevice.importdate1)
        isd.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.importDevice.importdate)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.importDevice.importdate1)
        isd.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.importDevice.importdate)
        isd.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.importDevice.importdate)
        isd.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.importDevice.importdate)
        isd.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        isd.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.importDevice.importdate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.importDevice.importdate, { force: true })
        isd.applyElement().click({ force: true })
        //  cy.get('[row-index="0"]').should('contain', tdata.importDevice.importdate)
        isd.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.importDevice.importdate, { force: true })
        isd.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.importDevice.importdate1)
        isd.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        isd.addFilterElement().eq(0).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.importDevice.importdate, { force: true })
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.importDevice.importdate1)
        isd.clearFilterElement().click({ force: true })
    }
    //Importer
    filtercontainI() {
        cy.wait(1000)
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(0).click({ force: true })
        isd.fieldValueElement().type(tdata.importDevice.importer)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.importDevice.importer)
        isd.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(1).click({ force: true })
        isd.fieldValueElement().eq(0).type(tdata.importDevice.importer)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.importDevice.importer)
        isd.clearFilterElement().click({ force: true })
    }
    filterEqualsI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(2).click({ force: true })
        isd.fieldValueElement().eq(0).type(tdata.importDevice.importer)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.importDevice.importer)
        isd.clearFilterElement().click({ force: true })
    }
    filterNotequalI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(3).click({ force: true })
        isd.fieldValueElement().eq(0).type(tdata.importDevice.importer)
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.importDevice.importer)
        isd.clearFilterElement().click({ force: true })
    }
    filterBeginswithI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(4).click({ force: true })
        isd.fieldValueElement().eq(0).type('demo')
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        isd.clearFilterElement().click({ force: true })
    }
    filterEndswithI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(5).click({ force: true })
        isd.fieldValueElement().eq(0).type('tech.com')
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tech.com')
        isd.clearFilterElement().click({ force: true })
    }
    filterBlankI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(6).click({ force: true })
        isd.fieldValueElement().eq(0).type(' ', { force: true })
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        isd.clearFilterElement().click({ force: true })
    }
    filterNotblankI() {
        isd.addFilterElement().eq(1).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(7).click({ force: true })
        isd.fieldValueElement().eq(1).type(tdata.importDevice.importer, { force: true })
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.importDevice.importer)
        isd.clearFilterElement().click({ force: true })
    }
    //q
    filtercontainQ() {
        cy.wait(2000)
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(0).click({ force: true })
        isd.fieldValueElement().type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').eq(0).then(($el) => {
            let value = parseInt($el.text());
            expect(value).to.be.equal(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterDoesnotequalQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(1).click({ force: true })
        isd.fieldValueElement().eq(0).clear({ force: true }).type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.not.equal(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterGreaterthanQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(2).click({ force: true })
        isd.fieldValueElement().eq(0).clear({ force: true }).type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.greaterThan(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterGreaterequalQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(3).click({ force: true })
        isd.fieldValueElement().eq(0).clear({ force: true }).type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.gte(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterLessthanQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(4).click({ force: true })
        isd.fieldValueElement().eq(0).clear({ force: true }).type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').eq(1). then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lessThan(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterLessequalQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(5).click({ force: true })
        isd.fieldValueElement().eq(0).clear({ force: true }).type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').eq(0).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lte(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterBetweenQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="From"]').type(tdata.importDevice.quantitydevices1)
        cy.get('[placeholder="To"]').type(tdata.importDevice.quantitydevices)
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').eq(0).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.within(0, 2);
        })
        isd.clearFilterElement().click({ force: true })
    }
    filterBlankQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(7).click({ force: true })
        isd.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        isd.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        isd.clearFilterElement().click({ force: true })
    }
    filterNotblankQ() {
        isd.addFilterElement().eq(2).click({ force: true })
        isd.fieldNameElement().eq(1).click({ force: true })
        isd.fieldOpElement().eq(8).click({ force: true })
        isd.fieldValueElement().eq(1).clear({ force: true }).type(tdata.importDevice.quantitydevices, { force: true })
        isd.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="quantity_devices"]').eq(0).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.equal(2);
        })
        isd.clearFilterElement().click({ force: true })
    }
}
export default ImportSerialDevicesActions 