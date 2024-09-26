/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class OrgUploadAssetsElements {
    titleElement() {
        return cy.contains(locator.orgUploadAssets.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.orgUploadAssets.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.orgUploadAssets.table, {
            timeout: 30000,
        })
    }
    deleteElement() {
        return cy.get(locator.orgUploadAssets.delete, {
            timeout: 30000,
        })
    }
    conDeletebtnElement() {
        return cy.contains(locator.orgUploadAssets.conDeletebtn, {
            timeout: 30000,
        })
    }
    editElement() {
        return cy.get(locator.orgUploadAssets.edit, {
            timeout: 30000,
        })
    }
    addassetElement() {
        return cy.get(locator.orgUploadAssets.addasset, {
            timeout: 30000,
        })
    }
    searchbtnElement() {
        return cy.contains(locator.orgUploadAssets.searchbtn, {
            timeout: 30000,
        })
    }
    searchboxElement() {
        return cy.get(locator.orgUploadAssets.searchbox, {
            timeout: 30000,
        })
    }
    titleAssetElement() {
        return cy.get(locator.orgUploadAssets.titleAsset, {
            timeout: 30000,
        })
    }
    fullnameElement() {
        return cy.get(locator.orgUploadAssets.fullname, {
            timeout: 30000,
        })
    }
    locationElement() {
        return cy.get(locator.orgUploadAssets.location, {
            timeout: 30000,
        })
    }
    tagElement() {
        return cy.get(locator.orgUploadAssets.tag, {
            timeout: 30000,
        })
    }
    notesElement() {
        return cy.get(locator.orgUploadAssets.notes, {
            timeout: 30000,
        })
    }
    typeElement() {
        return cy.get(locator.orgUploadAssets.type, {
            timeout: 30000,
        })
    }
    descriptionElement() {
        return cy.get(locator.orgUploadAssets.description, {
            timeout: 30000,
        })
    }
    uploadElement() {
        return cy.get(locator.orgUploadAssets.upload, {
            timeout: 30000,
        })
    }
    savebtnElement() {
        return cy.contains(locator.orgUploadAssets.savebtn, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.orgUploadAssets.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.get(locator.orgUploadAssets.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.orgUploadAssets.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.orgUploadAssets.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.orgUploadAssets.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.orgUploadAssets.fieldValue, {
            timeout: 30000,
        })
    }
}