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
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(3000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
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
      //  dash.messageElement().should('contain', tdata.orgAsset.addassetmsg)
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
        //dash.messageElement().should('contain', tdata.orgAsset.updatemsg)
    }
    clickDeleteIcon() {
        cy.wait(2000)
        oua.addFilterElement().eq(0).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        oua.fieldValueElement().type(tdata.addasset.description)
        oua.applyElement().click({ force: true })
       oua.deleteElement().eq(0).click({ force: true })
    }
    clickConfirmDeleteButton() {
       cy.get('.MuiButton-outlinedError').click({ force: true })
    }
    verifyRecordDeleted() {
    
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
    cy.get('[row-index="0"]').should('not.contain',tdata.addasset.description)
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
    filtercontainDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata. addasset.acquireDate)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata. addasset.acquireDate1)
        oua.clearFilterElement().click({ force: true })
    }
    filterEqualsDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata. addasset.acquireDate)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.addasset.acquireDate1)
        oua.clearFilterElement().click({ force: true })
    }
    filterNotequalDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.addasset.acquireDate)
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.addasset.acquireDate1)
        oua.clearFilterElement().click({ force: true })
    }
    filterBeforeDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.addasset.acquireDate)
        oua.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.addasset.acquireDate)
        oua.clearFilterElement().click({ force: true })
    }
    filterAfterDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.addasset.acquireDate)
        oua.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        oua.clearFilterElement().click({ force: true })
    }
    filterBetweenDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.addasset.acquireDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.addasset.acquireDate, { force: true })
        oua.applyElement().click({ force: true })
        //  cy.get('[row-index="0"]').should('contain', tdata.addasset.importdate)
        oua.clearFilterElement().click({ force: true })
    }
    filterBlankDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.addasset.acquireDate, { force: true })
        oua.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.addasset.importdate1)
        oua.clearFilterElement().click({ force: true })
    }
    filterNotblankDate() {
        oua.addFilterElement().eq(1).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.addasset.acquireDate, { force: true })
        oua.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.addasset.acquireDate1)
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
        cy.get('[row-index="0"]').should('contain',tdata.addasset.location)
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
        oua.fieldValueElement().eq(0).type('Fro')
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Fro')
        oua.clearFilterElement().click({ force: true })
    }
    filterEndswithL() {
        oua.addFilterElement().eq(2).click({ force: true })
        oua.fieldNameElement().eq(1).click({ force: true })
        oua.fieldOpElement().eq(5).click({ force: true })
        oua.fieldValueElement().eq(0).type('ice')
        oua.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ice')
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