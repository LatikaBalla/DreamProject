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
        build.buildingnameElement().type(tdata.buildings.buildingname)
    }
    enterPhone() {
        build.phoneElement().type(tdata.buildings.phone)
    }
    enterExtension() {
        build.extensionElement().type(tdata.buildings.extension)
    }
    selectDefaultBuilding() {
        build.defaultbuildingElement().click()
        cy.get(tdata.buildings.defaultbuilding).click()
    }
    enterBillingAddress() {
        build.baddressElement().type(tdata.buildings.address)
        cy.wait(1000)
       /build.baddressElement().type(' {downArrow}{enter}')
       // cy.get('#mbx04690449-ResultsList').find('#mbx04690449-ResultsList-0').click({force:true})
    }
    clickOnCheckbox(){
        cy.wait(3000)
        build.checkElement().click({force:true})
        cy.wait(3000)
    }
    enterBillingCity() {
        build.bcityElement().type(tdata.buildings.city)
    }
    enterBillingState() {
        build.bstateElement().type(tdata.buildings.state)
    }
    enterBillingCountry() {
        build.bcountryElement().type(tdata.buildings.country)
    }
    enterBillingZipcode() {
        build.bzipcodeElement().type(tdata.buildings.zipcode)
    }
    enterShippingAddress() {
        build.saddressElement().type(tdata.buildings.address+'{downArrow}{enter}')
    }
    enterShippingCity() {
        build.scityElement().type(tdata.buildings.city)
    }
    enterShippingState() {
        build.sstateElement().type(tdata.buildings.state)
    }
    enterShippingCountry() {
        build.scountryElement().type(tdata.buildings.country)
    }
    enterShippingZipcode() {
        build.szipcodeElement().type(tdata.buildings.zipcode)
    }
    clickOnSaveButton() {
        build.savebtnElement().click({ force: true })
        cy.get('[data-testid="CloseIcon"]').click()
    }
    verifyNewBuilding(){
        cy.wait(3000)
      dash.messageElement().should('contain',tdata.buildings.addmsg)
    }
    clickOnEditIcon() {
        build.editIconElement().eq(0).click({ force: true })
    }
    editBuildingName() {
        build.editbuildingnameElement().clear({ force: true },{timeout:3000}).should('have.value', '',{timeout:6000}).type(tdata.editbuildings.buildingname)
    }
    editPhone() {
        build.editphoneElement().clear({ force: true },{timeout:3000}).should('have.value', '',{timeout:6000}).type(tdata.editbuildings.phone)
    }
    editExtension() {
        build.editextensionElement().clear({ force: true },{timeout:3000}).should('have.value', '',{timeout:6000}).type(tdata.editbuildings.extension)
    }
    editselectDefaultBuilding() {
        build.editdefaultbuildingElement().click()
        cy.get(tdata.editbuildings.defaultbuilding).click()
    }
    edituploadBuildingImage() {
        build.editbuildingimgElement().selectFile('cypress/fixtures/' + tdata.editbuildings.buildingimg)
    }
    clickOnUpdateButton() {
        build.updatebtnElement().click({ force: true })   
    }
    verifyBuildingUpdated(){
      dash.messageElement().should('contain',tdata.editbuildings.updatemsg)
    }
    clickOnDeleteIcon() {
        build.deleteIconElement().eq(0).click({ force: true })
    }
    clickOnConfirmDeleteButton() {
        build.confirmdeleteElement().contains('Delete').click({ force: true })
    }
    enterInSearchBox() {
        build.searchElement().type(tdata.buildings.buildingname + '{enter}')
    }
    verifySearchResult() {
        cy.wait(3000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.buildings.buildingname)
    }
    clickOnMoreFiltersButton() {
        build.morefiltersbtnElement().click()
    }
    clickOnAddFilterGroup() {
        build.addfilterElement().click()
    }
    selectFieldName() {
        build.fieldnameElement().select('building_name')
    }
    selectfieldOperation() {
        build.fieldoperationElement().select("does_not_contain")
    }
    enterFieldValueSearchBox() {
        build.fieldvalueElement().type('.a')
    }
    clickOnApplyButton() {
        build.applybtnElement().click()
    }
    clickOnClearFiltersButton() {
        build.clearfilterbtnElement().click()
    }
    verifyResultAfterFilter() {
        cy.wait(2000)
        cy.get('tbody tr td').should('not.contain', ".a")
    }
    clickOnDetailsButton() {
        cy.wait(1000)
        cy.get('tbody tr').eq(0).find("button").eq(0).click({force:true})
    }
    verifyDetails() {
        build.detailsBuildingnameElement().should('contain',tdata.detailsBuilding.buildingname)
    }
    verifyDelete(){
        cy.wait(1000)
        cy.get('tbody tr').eq(0).should('not.contain', tdata.editbuildings.buildingname)
    }

}
export default BuildingsActions 