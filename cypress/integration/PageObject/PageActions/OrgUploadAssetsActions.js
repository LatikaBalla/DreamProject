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
        cy.wait(3000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click({ force: true })
        //dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnManageDevices() {
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
    enterSerialNo() {
        oua.serialnoElement().type(tdata.addasset.serialno)
    }
    enterVendor() {
        oua.vendorElement().type(tdata.addasset.vendor)
    }
    enterinvoice() {
        oua.invoiceElement().type(tdata.addasset.invoice)
    }
    enterAssignment() {
        oua.assignmentElement().type(tdata.addasset.assignment)
    }
    enterQuantity() {
        oua.quantityElement().type(tdata.addasset.quantity)
    }
    enterCost() {
        oua.costElement().type(tdata.addasset.cost)
    }
    enterFieldValue1and2() {
        oua.fieldValue1Element().type(tdata.addasset.fieldValue1)
        oua.fieldValue2Element().type(tdata.addasset.fieldValue2)
    }
    enterPO() {
        oua.poElement().type(tdata.addasset.po)
    }
    enterModel() {
        oua.modelElement().type(tdata.addasset.model)
    }
    enterWarrantyinfo(){
        oua.warrantyinfoElement().type(tdata.addasset.warrantyinfo)
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
    }
    clickOnEditIcon() {
        cy.wait(2000)
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        oua.fieldValueElement().type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
        oua.editElement().eq(0).click({ force: true })
    }
    editSerialno() {
        oua.serialnoElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.serialno)
    }
    editModel() {
        oua.modelElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.model)
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
    editQuantity(){
        oua.quantityElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.quantity)
    }
    editPO() {
        oua.poElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.po)
    }
    editAssignment(){
        oua.assignmentElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.assignment)
    }
    editCost() {
        oua.costElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.cost)
    }
    editfieldValue1() {
        oua.fieldValue1Element().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.fieldValue1)
    }
    editfieldValue2() {
        oua.fieldValue2Element().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.fieldValue2)
    }
    editInvoice() {
        oua.invoiceElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.invoice)
    }
    editVendor() {
        oua.vendorElement().clear({ force: true }).should('have.value', '', { timeout: 6000 }).type(tdata.editasset.vendor)
    }
    editUpload() {
        oua.uploadElement().attachFile(tdata.orgAsset.reupload)
    }
    clickSaveForUpdate() {
        oua.savebtnElement().click({ force: true })
    }
    verfifyDataUpdatedMessage() {

    }
    clickDeleteIcon() {
        cy.wait(2000)
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        oua.fieldValueElement().type(tdata.editasset.description)
        oua.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('[col-id="button"]').eq(1).find('[data-testid="DeleteIcon"]').click({ force: true })
    }
    clickConfirmDeleteButton() {
        cy.get('.MuiButton-outlinedError').click({ force: true })
    }
    verifyRecordDeleted() {
        dash.messageElement().should('contain', tdata.orgAsset.deletemsg)
    }
    //descritpion
    filtercontainD() {
        cy.wait(3000)
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        oua.fieldValueElement().type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.description)
        oua.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(1).click({ force: true })
        oua.fieldValueElement().eq(0).type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.addasset.description)
        oua.clearFilterElement().click({ force: true })
    }
    filterEqualsD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(2).click({ force: true })
        oua.fieldValueElement().eq(0).type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.description)
        oua.clearFilterElement().click({ force: true })
    }
    filterNotequalD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(3).click({ force: true })
        oua.fieldValueElement().eq(0).type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.addasset.description)
        oua.clearFilterElement().click({ force: true })
    }
    filterBeginswithD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(4).click({ force: true })
        oua.fieldValueElement().eq(0).type('this')
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'this')
        oua.clearFilterElement().click({ force: true })
    }
    filterEndswithD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(5).click({ force: true })
        oua.fieldValueElement().eq(0).type('tion')
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tion')
        oua.clearFilterElement().click({ force: true })
    }
    filterBlankD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(6).click({ force: true })
        oua.fieldValueElement().eq(0).type(' ', { force: true })
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        oua.clearFilterElement().click({ force: true })
    }
    filterNotblankD() {
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(7).click({ force: true })
        oua.fieldValueElement().eq(1).type(tdata.addasset.description, { force: true })
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.description)
        oua.clearFilterElement().click({ force: true })
    }
    //date 
    filterEqualsDate() {
        cy.wait(2000)
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(currentDate)
        oua.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain',currentDate1)
        oua.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(currentDate)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.addasset.acquireDate1)
        oua.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(currentDate)
        oua.applyElement().click({ force: true })
        oua.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(currentDate)
        oua.applyElement().click({ force: true })
        oua.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(currentDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.addasset.acquireDate, { force: true })
        oua.applyElement().click({ force: true })
        oua.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(currentDate, { force: true })
        oua.applyElement().click({ force: true })
        oua.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(currentDate, { force: true })
        oua.applyElement().click({ force: true })
        oua.clearFilterElement().click({ force: true })
    }
    //Location
    filtercontainL() {
        cy.wait(1000)
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        oua.fieldValueElement().type(tdata.addasset.location)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.location)
        oua.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(1).click({ force: true })
        oua.fieldValueElement().eq(0).type(tdata.addasset.location)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.addasset.location)
        oua.clearFilterElement().click({ force: true })
    }
    filterEqualsL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(2).click({ force: true })
        oua.fieldValueElement().eq(0).type(tdata.addasset.location)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.location)
        oua.clearFilterElement().click({ force: true })
    }
    filterNotequalL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(3).click({ force: true })
        oua.fieldValueElement().eq(0).type(tdata.addasset.location)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.addasset.location)
        oua.clearFilterElement().click({ force: true })
    }
    filterBeginswithL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(4).click({ force: true })
        oua.fieldValueElement().eq(0).type('In')
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'In')
        oua.clearFilterElement().click({ force: true })
    }
    filterEndswithL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(5).click({ force: true })
        oua.fieldValueElement().eq(0).type('dia')
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'dia')
        oua.clearFilterElement().click({ force: true })
    }
    filterBlankL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(6).click({ force: true })
        oua.fieldValueElement().eq(0).type(' ', { force: true })
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        oua.clearFilterElement().click({ force: true })
    }
    filterNotblankL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(7).click({ force: true })
        oua.fieldValueElement().eq(1).type(tdata.addasset.location, { force: true })
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.location)
        oua.clearFilterElement().click({ force: true })
    }
}
export default OrgUploadAssetsActions 