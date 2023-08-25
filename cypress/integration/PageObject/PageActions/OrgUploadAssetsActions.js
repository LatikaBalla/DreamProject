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
        dash.arrowElement().click({ force: true })
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
        oua.savebtnElement().should('contain', "Save").click({ force: true })
    }
    verifyRecordTable() {
        dash.messageElement().should('contain',tdata.orgAsset.addassetmsg)
        // cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.newaccount.email)
    }
    clickOnEditIcon() {
        oua.editElement().eq(0).scrollIntoView().click()
    }
    editTitle() {
        oua.titleAssetElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.title)
    }
    editFullname() {
        oua.fullnameElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.fullname)
    }
    editNotes() {
        oua.notesElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.notes)
    }
    editLocation() {
        oua.locationElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.location)
    }
    editTag() {
        oua.tagElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.tag)
    }
    editType() {
        oua.typeElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.type)
    }
    editDescription() {
        oua.descriptionElement().clear({ force: true }).should('have.value', '',{timeout:6000}).type(tdata.editasset.description)
    }
    editUpload() {
        oua.uploadElement().attachFile(tdata.orgAsset.reupload)
    }
    clickSaveForUpdate() {
        oua.savebtnElement().click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        dash.messageElement().should('contain',tdata.orgAsset.updatemsg)
    }
    clickDeleteIcon() {
        oua.deleteElement().eq(0).click({ force: true })
    }
    clickConfirmDeleteButton() {
        oua.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        // cy.get('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.delete.fullname)
    }
    enterSearchValue() {
        //  oua.searchboxElement().type(tdata.search.title)
    }
    clickOnASearchButton() {
        //oua.searchbtnElement().click({force:true})
    }
    verifySearchResult() {
        // cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.search.fullname)
    }

}
export default OrgUploadAssetsActions 