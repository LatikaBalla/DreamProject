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
        //  cy.get('[data-testid="CloseIcon"]').click({force})
    }
    verifyNewBuilding() {
        cy.wait(3000)
        dash.messageElement().should('contain', tdata.buildings.addmsg)
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
        cy.get(tdata.editbuildings.defaultbuilding).click({ force: true })
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
    enterInSearchBox() {
        build.searchElement().type(tdata.buildings.buildingname + '{enter}', { force: true })
    }
    verifySearchResult() {
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.buildings.buildingname)
    }
    clickOnMoreFiltersButton() {
        build.morefiltersbtnElement().click({ force: true })
    }
    clickOnAddFilterGroup() {
        build.addfilterElement().click({ force: true })
    }
    selectFieldName() {
        build.fieldnameElement().select('building_name')
    }
    selectfieldOperation() {
        build.fieldoperationElement().select("does_not_contain")
    }
    enterFieldValueSearchBox() {
        build.fieldvalueElement().type(tdata.buildings.buildingname, { force: true })
    }
    clickOnApplyButton() {
        build.applybtnElement().click({ force: true })
    }
    clickOnClearFiltersButton() {
        build.clearfilterbtnElement().click({ force: true })
    }
    verifyResultAfterFilter() {
        cy.wait(1000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.buildings.buildingname)
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

}
export default BuildingsActions 