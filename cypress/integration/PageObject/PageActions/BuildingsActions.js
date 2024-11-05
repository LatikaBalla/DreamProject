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
        cy.title().should('eq', 'Account Dashboard');
    }
    clickOnBuildingTab() {
       cy.wait(2000)
        dash.buildingsElement().click({ force: true })
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })  
    }
    addNewButtonTabVisible() {     
       build.addnewbtnElement().should('be.visible')
    }
    filterVisible(){
        build.filtersElement().should('be.visible')
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
    enterBuildingAb(){
        build.buildabbreviationElement().type(tdata.buildings.buildingAbbreviation)
    }
    selectDefaultBuilding() {
        build.defaultbuildingElement().click({ force: true })
        cy.get(tdata.buildings.defaultbuilding).click({ force: true })
    }
    enterBuilingId(){
        cy.get('#building_abbreviation').type('abc')
        const uniqueSeed = Date.now();
        build.buildingIdElement().type(uniqueSeed)
    }
    enterShippingAddress() {
        cy.get('input[role="combobox"]').eq(0).type(tdata.buildings.address, { force: true })
        cy.wait(2000)
        cy.get('input[role="combobox"]').eq(0).type('{downArrow}{enter}', { force: true })
    }
    clickOnCheckbox() {
        cy.wait(3000)
        build.checkElement().click({ force: true })
    }
    clickOnSaveButton() {
        cy.get('button[type="button"]').contains('Save').click({ force: true })   
    }
    verifyNewBuilding() {
        cy.wait(2000)
        dash.messageElement().should('contain', tdata.buildings.addmsg)
    }
    clickOnEditIcon() {
        cy.wait(3000)
        build.addFilterElement().eq(0).click({ force: true })
        build.fieldNameElement().eq(1).click({ force: true })
        build.fieldOpElement().eq(0).click({ force: true })
        build.fieldValueElement().type(tdata.buildings.buildingname)
        build.applyElement().click({ force: true })
        build.buildingIconElement().eq(0).click({ force: true })
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
    }
    edituploadBuildingImage() {
        build.editbuildingimgElement().selectFile('cypress/fixtures/' + tdata.editbuildings.buildingimg, { force: true })
    }
    clickOnUpdateButton() {
        cy.get('button[type="button"]').contains('Update').click({ force: true })   
       // build.updatebtnElement().click({ force: true })
    }
    verifyBuildingUpdated() {
        dash.messageElement().should('contain', tdata.editbuildings.updatemsg)
    }
    clickOnDeleteIcon() {
        cy.wait(4000)
        build.addFilterElement().eq(0).click({ force: true })
        build.fieldNameElement().eq(1).click({ force: true })
        build.fieldOpElement().eq(0).click({ force: true })
        build.fieldValueElement().type(tdata.editbuildings.buildingname)
        build.applyElement().click({ force: true })
        build.buildingIconElement().eq(0).click({ force: true })
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
    clickOnExport() {
        build.exportElement().click({ force: true })
    }
    clickOnBulkUpload() {
        cy.get('[data-testid="UploadFileIcon"]').click({ force: true })
    }
    attachCsvfile() {
        cy.contains('Attach CSV file').click({ force: true })
        build.uploadElement().attachFile(tdata.buildings.uploadfilename, { force: true })
        cy.wait(100)
        cy.contains('Submit').click({ force: true })
    }
    verifyuploaded() { 
         dash.messageElement().should('contain', tdata.buildings.uploadmsg)
    }
   //Bn
   filtercontainBN() {
    cy.wait(3000)
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().type(tdata.buildings.buildingname)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.buildingname)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
    build.clearFilterElement().click({ force: true })
}
filterEqualsBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.buildingname)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
    build.clearFilterElement().click({ force: true })
}
filterNotequalBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.buildingname)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).type('Build')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', 'Build')
    build.clearFilterElement().click({ force: true })
}
filterEndswithBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).type('One')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', 'One')
    build.clearFilterElement().click({ force: true })
}
filterBlankBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankBN() {
    build.addFilterElement().eq(0).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).type(tdata.buildings.buildingname, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
    build.clearFilterElement().click({ force: true })
}
//BI
filtercontainBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().clear({ force: true }).type(tdata.buildings.recordid)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.recordid)
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.recordid)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.recordid)
    build.clearFilterElement().click({ force: true })
}
filterEqualsBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.recordid)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.recordid)
    build.clearFilterElement().click({ force: true })
}
filterNotequalBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.recordid)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.recordid)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('55')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '55')
    build.clearFilterElement().click({ force: true })
}
filterEndswithBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('55')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '55')
    build.clearFilterElement().click({ force: true })
}
filterBlankBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankBI() {
    build.addFilterElement().eq(1).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.recordid, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.recordid)
    build.clearFilterElement().click({ force: true })
}
//Building Shipping Address
filtercontainBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().type(tdata.buildings.shippingaddress, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.shippingaddress)
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.shippingaddress, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.shippingaddress)
    build.clearFilterElement().click({ force: true })
}
filterEqualsBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.shippingaddress, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.shippingaddress)
    build.clearFilterElement().click({ force: true })
}
filterNotequalBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.shippingaddress, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.shippingaddress)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).type('1425', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '1425')
    build.clearFilterElement().click({ force: true })
}
filterEndswithBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).type('98101', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '98101')
    build.clearFilterElement().click({ force: true })
}
filterBlankBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankBSA() {
    build.addFilterElement().eq(2).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).type(tdata.buildings.shippingaddress, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.shippingaddress)
    build.clearFilterElement().click({ force: true })
}
//Building Billing Address
filtercontainBBA() {
    cy.wait(2000)
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().type(tdata.buildings.billingaddress)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.billingaddress)
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.billingaddress)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.billingaddress)
    build.clearFilterElement().click({ force: true })
}
filterEqualsBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.billingaddress)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.billingaddress)
    build.clearFilterElement().click({ force: true })
}
filterNotequalBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.billingaddress)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.billingaddress)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).type('1425')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '1425')
    build.clearFilterElement().click({ force: true })
}
filterEndswithBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).type('98101')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '98101')
    build.clearFilterElement().click({ force: true })
}
filterBlankBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankBBA() {
    build.addFilterElement().eq(3).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).type(tdata.buildings.billingaddress, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain',tdata.buildings.billingaddress)
    build.clearFilterElement().click({ force: true })
}
//Building Abbreviation
filtercontainBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().type(tdata.buildings.buildingAbbreviation)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingAbbreviation, { force: true })
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.buildingAbbreviation, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingAbbreviation)
    build.clearFilterElement().click({ force: true })
}
filterEqualsBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.buildingAbbreviation, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingAbbreviation)
    build.clearFilterElement().click({ force: true })
}
filterNotequalBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).type(tdata.buildings.buildingAbbreviation, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingAbbreviation)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('null')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', 'null')
    build.clearFilterElement().click({ force: true })
}
filterEndswithBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('null')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', 'null')
    build.clearFilterElement().click({ force: true })
}
filterBlankBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankBA() {
    build.addFilterElement().eq(4).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).type(tdata.buildings.buildingAbbreviation, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain',tdata.buildings.buildingAbbreviation )
    build.clearFilterElement().click({ force: true })
}
//DB
filtertrueDB(){
    build.addFilterElement().eq(5).click({ force: true })
    cy.get('[value="Yes"]').click({ force: true })
    // build.fieldNameElement().eq(1).click({ force: true })
    // cy.contains('True').click({ force: true })
    //build.applyElement().click({ force: true })
    cy.get('[aria-label="checked"]').should('be.checked')
    cy.get('.reset-button').click({ force: true })
}
filterfalseDB(){
    build.addFilterElement().eq(5).click({ force: true })
    cy.get('[value="No"]').click({ force: true })
    // build.fieldNameElement().eq(1).click({ force: true })
    // cy.contains('False').click({ force: true })
   // build.applyElement().click({ force: true })
    cy.get('[aria-label="checked"]').should('be.checked')
    cy.get('.reset-button').click({ force: true })
}
//Extension
filtercontainE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().type(tdata.buildings.extension)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.extension)
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.extension)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.extension)
    build.clearFilterElement().click({ force: true })
}
filterEqualsE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.extension)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.extension)
    build.clearFilterElement().click({ force: true })
}
filterNotequalE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.extension)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.extension)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('77')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '77')
    build.clearFilterElement().click({ force: true })
}
filterEndswithE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('77')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '77')
    build.clearFilterElement().click({ force: true })
}
filterBlankE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankE() {
    build.addFilterElement().eq(6).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.extension, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.extension)
    build.clearFilterElement().click({ force: true })
}
//Phone
filtercontainP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(0).click({ force: true })
    build.fieldValueElement().type(tdata.buildings.phoneNo)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.phoneNo1)
    build.clearFilterElement().click({ force: true })
}
filterDoesnotcontainP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(1).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.phoneNo)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain', tdata.buildings.phoneNo1)
    build.clearFilterElement().click({ force: true })
}
filterEqualsP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(2).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.phoneNo)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.phoneNo1)
    build.clearFilterElement().click({ force: true })
}
filterNotequalP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(3).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.phoneNo)
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.phoneNo1)
    build.clearFilterElement().click({ force: true })
}
filterBeginswithP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(4).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('888')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '(888)')
    build.clearFilterElement().click({ force: true })
}
filterEndswithP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(5).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type('88')
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', '88')
    build.clearFilterElement().click({ force: true })
}
filterBlankP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(6).click({ force: true })
    build.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', ' ')
    build.clearFilterElement().click({ force: true })
}
filterNotblankP() {
    build.addFilterElement().eq(7).click({ force: true })
    build.fieldNameElement().eq(1).click({ force: true })
    build.fieldOpElement().eq(7).click({ force: true })
    build.fieldValueElement().eq(1).clear({ force: true }).type(tdata.buildings.phoneNo, { force: true })
    build.applyElement().click({ force: true })
    cy.get('[row-index="0"]').should('contain', tdata.buildings.phoneNo1)
    build.clearFilterElement().click({ force: true })
}
}
export default BuildingsActions 