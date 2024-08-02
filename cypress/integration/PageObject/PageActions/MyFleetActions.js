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
        cy.wait(4000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(2000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnManageDevices() {
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
        cy.get('[role="listbox"]').find('li').contains(tdata.myFleet.buildingname).click({ force: true })
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
        //mf.deviceIconElement().eq(1).click({ force: true })
        cy.get('[src="/static/media/G.62bb109f219295189cc1.png"]').eq(0).dblclick({ force: true })

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
    //SN
    selectFilterSerialNumber() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().type(tdata.myFleet.serialno)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.serialno)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.serialno)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).type('Serial')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Serial')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).type('123')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '123')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankSN() {
       mf.addFilterElement().eq(0).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).type(tdata.myFleet.serialno, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno)
       mf.clearFilterElement().click({ force: true })
    }
    //tag
    selectFilterAssetTag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().type(tdata.myFleet.assettag)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontaintag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.assettag)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualstag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequaltag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.assettag)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithtag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('#12')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '#12')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithtag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('234')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '234')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlanktag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblanktag() {
       mf.addFilterElement().eq(1).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.assettag, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag)
       mf.clearFilterElement().click({ force: true })
    }
    //model
    filtercontainM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.model)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.model)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.model)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualsM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.model)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.model)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('C14')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'C14')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('G1')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'G1')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankM() {
       mf.addFilterElement().eq(2).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.model, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.model)
       mf.clearFilterElement().click({ force: true })
    }
    //SKU
    filtercontainSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.sku)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.sku)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualsSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.sku)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('DEMO')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'DEMO')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('CBK')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'CBK')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankSKU() {
       mf.addFilterElement().eq(3).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.sku, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain',tdata.myFleet.sku)
       mf.clearFilterElement().click({ force: true })
    }
    //b
    selectFilterBuilding() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.buildingname)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.buildingname)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.buildingname)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('South')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'South')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('address')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'address')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
       mf.addFilterElement().eq(4).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.buildingname, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname)
       mf.clearFilterElement().click({ force: true })
    }
    //oU
    filtercontainOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.orgUnit)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.orgUnit)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualsOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.orgUnit)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('South')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'South')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('address')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'address')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankOU() {
       mf.addFilterElement().eq(5).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.orgUnit, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit)
       mf.clearFilterElement().click({ force: true })
    }
     //user
     filtercontainU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(0).click({ force: true })
        mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.user)
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('contain', tdata.myFleet.user)
        mf.clearFilterElement().click({ force: true })
     }
     filterDoesnotcontainU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(1).click({ force: true })
        mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user)
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.user)
        mf.clearFilterElement().click({ force: true })
     }
     filterEqualsU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(2).click({ force: true })
        mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user)
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('contain', tdata.myFleet.user)
        mf.clearFilterElement().click({ force: true })
     }
     filterNotequalU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(3).click({ force: true })
        mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user)
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.user)
        mf.clearFilterElement().click({ force: true })
     }
     filterBeginswithU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(4).click({ force: true })
        mf.fieldValueElement().eq(0).clear({ force: true }).type('Ryke')
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('contain', 'Ryke')
        mf.clearFilterElement().click({ force: true })
     }
     filterEndswithU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(5).click({ force: true })
        mf.fieldValueElement().eq(0).clear({ force: true }).type('son')
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('contain', 'son')
        mf.clearFilterElement().click({ force: true })
     }
     filterBlankU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(6).click({ force: true })
        mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('contain', ' ')
        mf.clearFilterElement().click({ force: true })
     }
     filterNotblankU() {
        mf.addFilterElement().eq(6).click({ force: true })
        mf.fieldNameElement().eq(1).click({ force: true })
        mf.fieldOpElement().eq(7).click({ force: true })
        mf.fieldValueElement().eq(1).clear({ force: true }).type( tdata.myFleet.user, { force: true })
        mf.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('contain',  tdata.myFleet.user)
        mf.clearFilterElement().click({ force: true })
     }
    //warranty
    filtercontainW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
       mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.warranty)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty)
       mf.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.warranty)
       mf.clearFilterElement().click({ force: true })
    }
    filterEqualsW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.warranty)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeginswithW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(4).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('Vivac')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Vivac')
       mf.clearFilterElement().click({ force: true })
    }
    filterEndswithW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type('Warranty')
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Warranty')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
       mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankW() {
       mf.addFilterElement().eq(7).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(7).click({ force: true })
       mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.warranty, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain',tdata.myFleet.warranty )
       mf.clearFilterElement().click({ force: true })
    }
    //date
    filterEqualsDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate1)
       mf.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.warrantyDate1)
       mf.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
       mf.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate)
       mf.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
       mf.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
       mf.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate, { force: true })
       mf.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
       mf.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate ,{ force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
       mf.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
       mf.addFilterElement().eq(8).click({ force: true })
       mf.fieldNameElement().eq(1).click({ force: true })
       mf.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate, { force: true })
       mf.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.warrantyDate1)
       mf.clearFilterElement().click({ force: true })
    }
}
export default MyFleetActions 