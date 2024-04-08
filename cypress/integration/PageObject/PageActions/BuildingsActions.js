/// <reference types="cypress" />
const BuildingsElements = require("../PageElements/BuildingsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");

export class BuildingsActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.build = new BuildingsElements();
    }
    verifyTitleBuildingPage() {
        build.titleElement().should('be.visible')
    }
    clickOnBuildingTab() {
        dash.buildingsElement().click({ force: true })
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    addNewButtonTabVisible() {
        build.addnewbtnElement().should('be.visible')
    }
    addfilterButtonVisible() {
        build.addfilterbtnElement().should('be.visible')
    }
    tableofBuildingsVisible() {
        build.tablebuildingElement().should('be.visible')
    }
    refreshButtonVisible() {
        build.refreshbtnElement().should('be.visible')
    }
    searchBoxVisible() {
        build.searchElement().should('be.visible')
    }
    clickOnAddnewButton() {
        build.addnewbtnElement().click({ force: true })
    }
    enterBuildingName() {
        cy.get('[data-testid="ChevronLeftIcon"]').click()
        build.buildingnameElement().type(tdata.buildings.buildingname, { force: true })
    }
    enterPhone() {
        build.phoneElement().type(tdata.buildings.phone, { force: true })
    }
    enterExtension() {
        build.extensionElement().type(tdata.buildings.extension, { force: true })
    }
    selectDefaultBuilding() {
        build.defaultbuildingElement().click({ force: true })
       cy.get(tdata.buildings.defaultbuilding).click({ force: true })
    }
    enterBillingAddress() {
        build.baddressElement().type(tdata.buildings.address, { force: true })
        cy.wait(2000)
        build.baddressElement().type(' {downArrow}{enter}', { force: true })
    }
    clickOnCheckbox() {
        cy.wait(3000)
        build.checkElement().click({ force: true })
        cy.wait(3000)
    }
    clickOnSaveButton() {
        build.savebtnElement().click({ force: true })

    }
    verifyNewBuilding() {
        cy.wait(5000)
        cy.get('[data-testid="CachedIcon"]').click({ force: true })
        cy.wait(5000)
        cy.get('tr td').eq(1).should('contain', tdata.buildings.buildingname)
    }
    clickOnEditIcon() {
        build.editIconElement().eq(0).click({ force: true })
    }
    editBuildingName() {
        build.editbuildingnameElement().clear({ force: true }, { timeout: 3000 }).should('have.value', '', { timeout: 6000 }).type(tdata.editbuildings.buildingname)
    }
    editPhone() {
        build.editphoneElement().clear({ force: true }, { timeout: 3000 }).should('have.value', '', { timeout: 6000 }).type(tdata.editbuildings.phone)
    }
    editExtension() {
        build.editextensionElement().clear({ force: true }, { timeout: 3000 }).should('have.value', '', { timeout: 6000 }).type(tdata.editbuildings.extension)
    }
    editselectDefaultBuilding() {
        build.editdefaultbuildingElement().click({ force: true })
       // cy.get(tdata.editbuildings.defaultbuilding).click({ force: true })
    }
    edituploadBuildingImage() {
        build.editbuildingimgElement().selectFile('cypress/fixtures/' + tdata.editbuildings.buildingimg, { force: true })
    }
    clickOnUpdateButton() {
        build.updatebtnElement().click({ force: true })
    }
    verifyBuildingUpdated() {
        dash.messageElement().should('contain', tdata.editbuildings.updatemsg)
    }
    clickOnDeleteIcon() {
        build.deleteIconElement().eq(0).click({ force: true })
    }
    clickOnConfirmDeleteButton() {
        build.confirmdeleteElement().contains('Delete').click({ force: true })
    }
    clickOnMoreFiltersButton() {
        build.morefiltersbtnElement().click({ force: true })
    }
    clickOnClearFiltersButton() {
        build.clearfilterbtnElement().click({ force: true })
    }
    clickOnDetailsButton() {
        cy.wait(1000)
        cy.get('tbody tr').eq(0).find("button").eq(0).click({ force: true })
    }
    verifyDetails() {
        build.detailsBuildingnameElement().should('contain', tdata.detailsBuilding.buildingname)
    }
    verifyDelete() {
        dash.messageElement().should('contain', tdata.buildings.deletemsg)
    }
    selectFilterRecordId() {
        build.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        build.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        build.fieldValueElement().type(tdata.buildings.recordid)
        build.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.buildings.recordid)
    }
    selectFilterBuildingName() {
        build.fieldNameElement().select(1).invoke("val").should("eq", "building_name")
        build.fieldOpElement().select('Does Not Contain', { force: true })
        build.fieldValueElement().type(tdata.buildings.buildingname)
        build.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.buildings.buildingname)
    }
    selectFilterPhone() {
        build.fieldNameElement().select('phone', { force: true })
        build.fieldOpElement().select('Does Not Contain', { force: true })
        build.fieldValueElement().type(tdata.buildings.phoneNo)
        build.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', tdata.buildings.phoneNo1)
    }
    selectFilterDefaultBuilding() {
        build.fieldNameElement().select('default_building', { force: true })
        build.fieldOpElement().select('Does Not Contain', { force: true })
        build.fieldValueElement().type(tdata.buildings.defaultbuilding)
        build.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.buildings.defaultbuilding)
    }
    selectFilterShippingAddress() {
        build.fieldNameElement().select('building_shipping_address', { force: true })
        build.fieldOpElement().select('Does Not Contain', { force: true })
        build.fieldValueElement().type(tdata.buildings.shippingaddress)
        build.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.buildings.shippingaddress)
    }
    selectFilterBillingAddress() {
        build.fieldNameElement().select('building_billing_address', { force: true })
        build.fieldOpElement().select('Does Not Contain', { force: true })
        build.fieldValueElement().type(tdata.buildings.billingaddress)
        build.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', tdata.buildings.billingaddress)
    }
    searchBuildingName() {
        build.searchboxElement().eq(0).click({ force: true })
        build.buildingnamedropElement().click({ force: true })
        build.searchElement().type(tdata.buildings.buildingname + '{enter}', { force: true })
        cy.get('tr td').eq(1).should('contain', tdata.buildings.buildingname)
    }
    searchShippingAddress() {
        build.searchboxElement().eq(0).click({ force: true })
        build.shippingaddressElement().click({ force: true })
        build.searchElement().clear().type(tdata.buildings.shippingaddress + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(4).should('contain', tdata.buildings.shippingaddress)
    }
    searchPhone() {
        build.searchboxElement().eq(0).click({ force: true })
        build.phonedropElement().click({ force: true })
        build.searchElement().clear({ force: true }).type(tdata.buildings.phoneNo + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.buildings.phoneNo1)
        build.searchElement().clear({ force: true })
    }
    clickOnExport() {
        build.exportElement().click({ force: true })
    }
    clickOnBulkUpload() {
        cy.contains('Bulk Upload').click({ force: true })
    }
    attachCsvfile() {
        cy.contains('Attach CSV file').click({ force: true })
        build.uploadElement().attachFile(tdata.buildings.uploadfilename, { force: true })
        cy.contains('Submit').click({ force: true })
    }
    verifyuploaded() {

    }
}
export default BuildingsActions 