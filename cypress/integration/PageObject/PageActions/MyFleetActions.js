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
        mf.searchElement().clear({ force: true }).type(tdata.myFleet.search, { force: true })
    }
    enterSearchValue1() {
        mf.searchElement().clear({ force: true }).type(tdata.myFleet.search1, { force: true })
    }
    verifySearchResult() {
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.search, { force: true })
    }
    verifySearchResult1() {
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.search1, { force: true })
    }
    clickOnMoreFiltersButton() {
        cy.get('[data-testid="FilterListIcon"]').click({ force: true })
        //mf.morefiltersElement().scrollIntoView().click({ force: true })
    }
    clickOnEditButtonGeneral() {
        cy.get('[aria-label="Edit General Device Info"]').click({ force: true })
    }
    clickOnEditButtonAssign() {
        cy.get('[aria-label="Edit Device Assignment"]').click({ force: true })
    }
    editGeneral() {
        mf.assetTagElement().clear({ force: true }).type(tdata.myFleet.serialnoEdit, { force: true })
    }
    editAssignment() {
        mf.studentinfoElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains('Demo Test').click({ force: true })
        // cy.get(tdata.myFleet.studentidEdit).click()
        mf.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    clickOnUpdateButton() {
        mf.updatebtnElement().click({ froce: true })
    }
    verifyGeneralUdate() {
        dash.messageElement().should('contain', 'Device info updated')
    }
    verifyAssignmnetUdate() {
        dash.messageElement().should('contain', 'Device assignment updated')
    }
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
    clickOnDeviceIcon() {
        mf.deviceIconElement().eq(1).click({ force: true })
    }
    clickOnViewButton() {
        cy.wait(5000)
        //cy.get('tbody tr').eq(0).find('td').eq(8).scrollIntoView().contains("View").click({ force: true })
        mf.viewElement().click({ force: true })
    }
    verifyViewResult() {
        //  cy.get('.css-tolxbf').should('be.visible', { force: true })
        cy.contains('General Info').should('be.visible', { force: true })
        // cy.contains(tdata.myFleet.serialno).should('be.visible',{ force: true })
    }
    verifyViewResult1() {
        cy.contains(tdata.myFleet.serialno1).should('be.visible', { force: true })
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
        mf.studentidElement().click({ force: true })
        cy.get(tdata.myFleet.studentid).click({ force: true })
    }
    selectLonarStatus() {
        mf.lonarstatusElement().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        // cy.get(tdata.myFleet.loanarstatus).click()
    }
    selectDeviceStatus() {
        mf.devicestatusElement().click()
        //  cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get(tdata.myFleet.devicestatus).click({ force: true })
    }
    clickOnsubmitButton() {
        mf.submitbtnElement().click({ force: true })
    }
    verfifyDeviceAdded() {
        dash.messageElement().should('contain', tdata.myFleet.addDevicemsg)
    }
    enterSearchGdata() {
        mf.searchElement().clear({ force: true }).type(tdata.myFleet.searchG, { force: true })
    }
    verifyGoogleRecord() {
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.searchG, { force: true })
    }
    clickonGoogleIcon() {
        //cy.get('.MuiButtonBase-root > img').eq(0).click({ force: true })
        cy.get('.MuiTableRow-root > :nth-child(1) > div > .MuiButtonBase-root').dblclick({ force: true })
    }
    verifyGoogleGolocation() {
        cy.contains('Google Data').should('be.visible')
        cy.contains('Current Geolocation').scrollIntoView().should('be.visible')
    }
    clickonEditGoogle() {
        cy.get('[aria-label="Edit Google Data"]').click({ force: true })
    }
    updateGoogleData() {

    }
    verifyGoogleUpdated() {

    }
    converRetired() {
        cy.get('[data-testid="KeyboardBackspaceIcon"]').click({ force: true })
        mf.searchElement().clear({ force: true }).type(tdata.myFleet.search, { force: true })
        mf.deviceIconElement().eq(1).click({ force: true })
        cy.contains('Retire Device').click({ force: true })
        dash.messageElement().should('contain', 'Device Retired')
    }
    verifyRetired() {
        cy.get('[data-testid="tabDeactivate"]').click({ force: true })
        mf.searchElement().clear({ force: true })
        mf.searchElement().type(tdata.myFleet.search, { force: true })
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.search, { force: true })
    }
    convertActive() {
        mf.deviceIconElement().eq(1).click({ force: true })
        cy.contains('Activate Device').click({ force: true })
        dash.messageElement().should('contain', 'Device Activated')
    }
    verifyActive() {
        cy.get('[data-testid="tabActive"]').click({ force: true })
        mf.searchElement().clear({ force: true }).type(tdata.myFleet.search, { force: true })
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.search, { force: true })

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

    selectFilterOrganization() {
        cy.contains('+ Add Filter Group').click({ force: true })
        mf.fieldNameElement().select('organizational_unit', { force: true })
        mf.fieldOpElement().select('does_not_contain', { force: true })
        cy.get('[data-testid="ArrowDropDownIcon"]').click({ force: true })
        mf.fieldValueElement().click({ force: true })
        cy.get('#\:r2e\:-option-1').click({ force: true })
        mf.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', 'Lea')
    }
    clickOnRetiredTab() {
        cy.get('[data-testid="tabDeactivate"]').click({ force: true })
    }
    clickOnCPUStatus() {
        cy.get('[type="button"]').contains('CPU Status').click({ force: true })
    }
    verifyCPUStatus() {
        cy.get('.css-1lmgebw').contains('CPU Information').should('be.visible', { force: true })
    }
    clickOnMemory() {
        cy.get('[type="button"]').contains('Memory Information').click({ force: true })
    }
    verifyMemory() {
        cy.get('.css-1lmgebw').contains('Memory Information').should('be.visible', { force: true })
    }
    clickOnNetwork() {
        cy.get('[type="button"]').contains('Network Information').click({ force: true })
    }
    verifyNetwork() {
        cy.get('.css-1lmgebw').contains('Network Information').should('be.visible', { force: true })
    }
    clickOnOS() {
        cy.get('[type="button"]').contains('OS Information').click({ force: true })
    }
    verifyOS() {
        cy.get('.css-1lmgebw').contains('OS Information').should('be.visible', { force: true })
    }
    clickOnBattery() {
        cy.get('[type="button"]').contains('Battery Information').click({ force: true })
    }
    verifyBattery() {
        cy.get('.css-1lmgebw').contains('Battery Information').should('be.visible', { force: true })
    }
    clickOnStorage() {
        cy.get('[type="button"]').contains('Storage Information').click({ force: true })
    }
    verifyStorage() {
        cy.get('.css-1tqv6h6').contains('Storage Information').should('be.visible', { force: true })
    }
    clickOnBootPerformanceReport() {
        cy.get('[type="button"]').contains('Boot Performance Report').click({ force: true })
    }
    verifyBootPerformanceReport() {
        cy.get('.css-4c2hj7').contains('Boot Performance Report').should('be.visible', { force: true })
    }
    clickOnRecentUser() {
        cy.get('[type="button"]').contains('Recent User').click({ force: true })
    }
    verifyRecentUser() {
        cy.get('.css-1lmgebw').contains('Recent User').should('be.visible', { force: true })
    }
}
export default MyFleetActions 