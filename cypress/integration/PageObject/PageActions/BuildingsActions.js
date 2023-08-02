/// <reference types="cypress" />
const BuildingsElements = require("../PageElements/BuildingsElements.js")
const DashboardElements = require("../PageElements/AccountDetailsElements.js")
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
    uploadBuildingImage() {
        build.buildingimgElement().selectFile('cypress/fixtures/'+tdata.buildings.buildingimg)
    }
    enterBillingAddress() {
        build.baddressElement().type(tdata.buildings.address)
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
        build.saddressElement().type(tdata.buildings.address)
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
        build.savebtnElement().click({force:true})
    }
clickOnEditIcon(){
    build.editIconElement().eq(0).click({force:true})
}

    editBuildingName() {
        build.editbuildingnameElement().clear().type(tdata.editbuildings.buildingname)
    }
    editPhone() {
        build.editphoneElement().clear().type(tdata.editbuildings.phone)
    }
   editExtension() {
        build.editextensionElement().clear().type(tdata.editbuildings.extension)
    }
    editselectDefaultBuilding() {
        build.editdefaultbuildingElement().click()
        cy.get(tdata.editbuildings.defaultbuilding).click()
    }
    edituploadBuildingImage() {
        build.editbuildingimgElement().selectFile('cypress/fixtures/'+tdata.editbuildings.buildingimg)
    }
    clickOnUpdateButton() {
        build.updatebtnElement().click({force:true})
    }
    clickOnDeleteIcon(){
        build.deleteIconElement().eq(0).click({force:true})
    }
    clickOnConfirmDeleteButton(){
        build.confirmdeleteElement().contains('Delete').click({force:true})
    }
    enterInSearchBox(){
    cy.get("[data-testid='CachedIcon']").click()
build.searchElement().type(tdata.buildings.buildingname+'{enter}')

    }
    verifySearchResult(){      
        cy.wait(2000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.buildings.buildingname)
    }

}
export default BuildingsActions 