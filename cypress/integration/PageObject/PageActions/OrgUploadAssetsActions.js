/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const OrgUploadAssetsElements = require("../PageElements/OrgUploadAssetsElements.js")
const tdata = require("../../../testData.json");
export class OrgUploadAssetsActions {
    constructor() {
        globalThis.mdev = new ManageDevicesElements();
        globalThis.dash = new DashboardElements();
        globalThis.oua = new OrgUploadAssetsElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnManageDevices() {
        //dash.arrowElement().click({ force: true })
        dash.managedevicesElement().click({ force: true })
    }
    clickOnOrgUploadAssets() {
        mdev.orgUploadAssestsElement().click({ force: true })
    }
    verifyTitle() {
        oua.titleElement().should('be.visible')
    }
    filtersVisible() {
        oua.filtersElement().should('be.visible')
    }
    tableVisible() {
        oua.tableElement().should('be.visible')
    }
    clickOnAddAssetbutton() {
        oua.addassetElement().click({ force: true })
    }
    enterTitle() {
        oua.titleAssetElement().type(tdata.addasset.title)
    }
    enterFullname() {
        oua.fullnameElement().type(tdata.addasset.fullname)
    }
    enterLocation() {
        oua.locationElement().type(tdata.addasset.location)
    }
    enterTag() {
        oua.tagElement().type(tdata.addasset.tag)
    }
    enterNote() {
        oua.notesElement().type(tdata.addasset.notes)
    }
    enterType() {
        oua.typeElement().type(tdata.addasset.type)
    }
    enterDescription() {
        oua.descriptionElement().type(tdata.addasset.description)
    }
    selectFileForUpload() {
        oua.uploadElement().attachFile(tdata.orgAsset.upload)
    }
    clickOnASaveButton() {
        oua.savebtnElement().click({ force: true })
    }
    verifyRecordTable() {
        dash.messageElement().should('contain', tdata.orgAsset.addassetmsg)
    }
    clickOnEditIcon() {
        oua.editElement().eq(0).scrollIntoView({ force: true }).click({ force: true })
    }
    editTitle() {
        oua.titleAssetElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.title)
    }
    editFullname() {
        oua.fullnameElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.fullname)
    }
    editNotes() {
        oua.notesElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.notes)
    }
    editLocation() {
        oua.locationElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.location)
    }
    editTag() {
        oua.tagElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.tag)
    }
    editType() {
        oua.typeElement().clear({ force: true }).type(tdata.editasset.type + ' ')
    }
    editDescription() {
        oua.descriptionElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.description)
    }
    editUpload() {
        oua.uploadElement().attachFile(tdata.orgAsset.reupload)
    }
    clickSaveForUpdate() {
        oua.savebtnElement().click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        dash.messageElement().should('contain', tdata.orgAsset.updatemsg)
    }
    clickDeleteIcon() {
       // oua.deleteElement().eq(0).scrollIntoView().click({ force: true })
        cy.get('tbody tr').eq(0).find('td').eq(4).contains('DELETE').click({ force: true })
    }
    clickConfirmDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
      //  oua.conDeletebtnElement().click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        cy.get('tbody tr').eq(0).find('td').eq(3).should('not.contain', tdata.editasset.location)
    }
    enterSearchValue() {
        oua.searchboxElement().type(tdata.addasset.location,{ force: true })
        cy.wait(3000)
    }
    clickOnASearchButton() {
        oua.searchbtnElement().click({ force: true })
    }
    verifySearchResult() {
        cy.get('tbody tr').eq(0).find('td').eq(3).should('contain', tdata.addasset.location)
    }
    clickOnMoreFilter() {
        oua.addFilterElement().click({ force: true })
    }
    clickOnClearFilter() {
        oua.clearFilterElement().click({ force: true })
    }
    selectFilterDescription() {
        oua.fieldNameElement().select('description', { force: true })
        oua.fieldOpElement().select('does_not_contain', { force: true })
        oua.fieldValueElement().type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.addasset.description)
    }
    selectFilterAcquireLocation() {
        cy.contains('+ Add Filter Group').click({ force: true })
        oua.fieldNameElement().select('acquire_location', { force: true })
        oua.fieldOpElement().select('does_not_contain', { force: true })
        oua.fieldValueElement().type(tdata.addasset.location)
        oua.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.addasset.location)
    }
}
export default OrgUploadAssetsActions 