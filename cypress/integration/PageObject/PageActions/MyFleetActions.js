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
        // cy.get("[placeholder='Search by table field values']").type(tdata.myFleet.search,{force:true})
        mf.searchElement().type(tdata.myFleet.search, { force: true })
    }
    verifySearchResult() {
        cy.wait(3000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.myFleet.search, { force: true })
    }
    clickOnMoreFiltersButton() {
        //  cy.get('[data-testid="CloseIcon"]').eq(0).click({force:true})
        // cy.get('[data-testid="ArrowBackIosNewIcon"]').click({ force: true })
        mf.morefiltersElement().scrollIntoView().click({ force: true })
    }
    // clickOnAddFilterGroup() {

    //     mf.addfilterGroupElement().click()
    // }
    // selectFieldName() {
    //     mf.fieldnameElement().select('Serial Number')
    // }
    // selectfieldOperation() {
    //     mf.fieldoperationElement().select("Contains")
    // }
    // enterFieldValueSearchBox() {
    //     mf.fieldvalueElement().type(tdata.myFleet.serialno)
    // }
    // clickOnApplyButton() {
    //     mf.applybtnElement().click({ force: true })
    // }
    clickOnClearFiltersButton() {
        mf.clearfilterElement().click({ force: true })
    }
    verifyResultAfterFilter() {
        cy.wait(3000)
        cy.get('tbody tr td').should('contain', tdata.myFleet.serialno)
    }
    clickOnCExportToCSVButton() {
        mf.exportcsvElement().click({ force: true })
    }
    verifyDownloadSuccessful() {
        cy.verifyDownload("/download/", tdata.myFleet.filename)
    }
    clickOnViewButton() {
        cy.wait(5000)
        cy.get('tbody tr').eq(0).find('td').eq(7).scrollIntoView().contains("View").click({ force: true })
        // mf.viewElement().scrollIntoView().click({ force: true })
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
    selectFilterSerialNumber() {
        mf.fieldNameElement().select('serial_number', { force: true })
        mf.fieldOpElement().select('does_not_contain', { force: true })
        mf.fieldValueElement().type(tdata.myFleet.serialno)
        mf.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.myFleet.serialno)
    }
    selectFilterStudent() {
        cy.contains('+ Add Filter Group').click({ force: true })
        mf.fieldNameElement().select('student', { force: true })
        mf.fieldOpElement().select('does_not_contain', { force: true })
        mf.fieldValueElement().type(tdata.myFleet.student)
        mf.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.myFleet.student)
    }
    selectFilterDevice() {
        cy.contains('+ Add Filter Group').click({ force: true })
        mf.fieldNameElement().select('device', { force: true })
        mf.fieldOpElement().select('does_not_contain', { force: true })
        mf.fieldValueElement().type(tdata.myFleet.device)
        mf.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.myFleet.device)
    }
    selectFilterAssetTag() {
        cy.contains('+ Add Filter Group').click({ force: true })
        mf.fieldNameElement().select('asset_tag', { force: true })
        mf.fieldOpElement().select('does_not_contain', { force: true })
        mf.fieldValueElement().type('Lea')
        mf.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', 'Lea')
    }
    clickOnRetiredTab() {
        cy.get('[data-testid="tabDeactivate"]').click({ force: true })
    }
}
export default MyFleetActions 