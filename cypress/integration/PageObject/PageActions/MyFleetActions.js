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
      //  dash.arrowElement().click({ force: true })
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
        mf.searchElement().type(tdata.myFleet.search,{force:true})
    }
    verifySearchResult() {
        cy.wait(3000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.myFleet.search,{force:true})
    }
    clickOnMoreFiltersButton() {
        cy.get('[data-testid="CloseIcon"]').eq(0).click({force:true})
        cy.get('[data-testid="ArrowBackIosNewIcon"]').click({ force: true })
        mf.morefiltersbtnElement().scrollIntoView().click({force:true})
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
        mf.applybtnElement().click({ force: true })
    }
    clickOnClearFiltersButton() {
        mf.clearfilterbtnElement().click({force:true})
    }
    verifyResultAfterFilter() {
        cy.wait(3000)
        cy.get('tbody tr td').should('contain', tdata.myFleet.serialno)
    }
    clickOnCExportToCSVButton() {
        mf.exportcsvElement().click({ force: true })
    }
    verifyDownloadSuccessful() {
        cy.verifyDownload("/download/",tdata.myFleet.filename)
    }
    clickOnViewButton() {
        mf.viewElement().scrollIntoView().click({ force: true })
    }
    verifyViewResult() {
        cy.contains(tdata.myFleet.serialno).should('be.visible')
    }
    clickOnAddDevice() {
        mf.addDeviceElement().click({ force: true })
    }
    enterSerialNo() {
        mf.serialNoElement().type(tdata.myFleet.serialNo)
    }
    selectDeviceId() {
        mf.deviceidElement().click()
        cy.get(tdata.myFleet.deviceid).click()
    }
    enterAssetTag() {
        mf.assetTagElement().type(tdata.myFleet.serialno)
    }
    selectStudentid() {
        mf.studentidElement().click()
        cy.get(tdata.myFleet.studentid).click()
    }
    selectLonarStatus() {
        mf.lonarstatusElement().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
       // cy.get(tdata.myFleet.loanarstatus).click()
    }
    selectDeviceStatus() {
        mf.devicestatusElement().click()
      //  cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get(tdata.myFleet.devicestatus).click()
    }
    clickOnsubmitButton() {
        mf.submitbtnElement().click({ force: true })
    }
    verfifyDeviceAdded() {
        dash.messageElement().should('contain', tdata.myFleet.addDevicemsg)
    }

}
export default MyFleetActions 