/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const MyFleetElements = require("../PageElements/MyFleetElements.js")
const tdata = require("../../../testData.json");

export class MyFleetActions {
    constructor() {
        globalThis.mdev = new ManageDevicesElements();
        globalThis.dash = new DashboardElements();
        globalThis.mf = new MyFleetElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnManageDevices() {
        dash.arrowElement().click({ force: true })
        dash.managedevicesElement().click({ force: true })
    }
    clickOnMyFleet() {
        mdev.myfleetElement().click({ force: true })
    }
    verifyTitle() {
        mf.titleElement().should('be.visible')
    }
    filtersVisible() {
        mf.filtersElement().should('be.visible')
    }
    tableVisible() {
        mf.tableElement().should('be.visible')
    }
    enterSearchValue() {
        mf.searchElement().type(tdata.myFleet.assetTag)
    }
    verifySearchResult() {
        cy.wait(3000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.myFleet.assetTag)
    }
    clickOnMoreFiltersButton() {
        mf.morefiltersbtnElement().click()
    }
    clickOnAddFilterGroup() {
        mf.addfilterGroupElement().click()
    }
    selectFieldName() {
        mf.fieldnameElement().select('Serial Number')
    }
    selectfieldOperation() {
        mf.fieldoperationElement().select("Contains")
    }
    enterFieldValueSearchBox() {
        mf.fieldvalueElement().type(tdata.myFleet.serialno)
    }
    clickOnApplyButton() {
        mf.applybtnElement().click({force:true})
    }
    clickOnClearFiltersButton() {
        mf.clearfilterbtnElement().click()
    }
    verifyResultAfterFilter() {
      //  cy.contains('serial_number').scrollIntoView()
        cy.wait(3000)
        cy.get('tbody tr td').should('contain', tdata.myFleet.serialno)
    }
    clickOnCExportToCSVButton() {
        mf.exportcsvElement().click({force:true})
    }
    verifyDownloadSuccessful() {
        cy.verifyDownload(tdata.myFleet.filename)
    }

}
export default MyFleetActions 