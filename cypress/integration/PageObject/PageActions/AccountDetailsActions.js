/// <reference types="cypress" />
const AccountDetailsElements = require("../PageElements/AccountDetailsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");

export class AccountDetailsActions {
    constructor() {
        globalThis.acc= new AccountDetailsElements();
        globalThis.dash1 = new DashboardElements()
    }
    closeTermsOfServiceWindow() {
        dash1.termsElement().click({ force: true })
    }
    verifyTitleAccountDetails() {
        acc.titleAccountElement().should('be.visible')
    }
    verifyFiltersVisible() {
        acc.filtersElement().should('be.visible')
    }
    verifyMyaccountDeatilsVisbile() {
        acc.accountnameElement().should('be.visible')
        acc.accountnoElement().should('be.visible')
        acc.accountcreditElement().should('be.visible')
       acc.billingaddressElement().should('be.visible')
        acc.shippingaddressElement().should('be.visible')
        acc.accountmanagerElement().should('be.visible')
    }
    tableAccountVisible() {
        acc.tableAccountElement().should('be.visible')
    }
    clickOnAddNewbutton() {
        acc.addnewbtnElement().click({ force: true })
    }
    enterTitle() {
        acc.titleElement().type(tdata.newaccount.title, { force: true })
    }
    enterFullname() {
        acc.fullnameElement().type(tdata.newaccount.fullname, { force: true })
    }
    enterFullnameDelete() {
        acc.fullnameElement().type(tdata.delete.fullname, { force: true })
    }
    enterFullnameSearch() {
        acc.fullnameElement().type(tdata.search.fullname, { force: true })
    }
    enterEmail() {
        const uniqueSeed = Date.now();
        acc.emailElement().type(uniqueSeed + tdata.newaccount.email, { force: true })
    }
    enterPhone() {
        acc.phoneElement().type(tdata.newaccount.phone, { force: true })
    }
    enterCellNumber() {
        acc.cellnumberElement().type(tdata.newaccount.cellnumber, { force: true })
    }
    selectUserRole() {
        acc.userroleElement().click({ force: true })
        cy.get(tdata.newaccount.userrole).click({ force: true })
    }
    clickOnASaveButton() {
        acc.savebtnElement().should('contain', "Save").click({ force: true })
    }
    verifyNewContactTitle() {
        acc.newContactTitleElement().should('be.visible')
    }
    verifyRecordTable() {
        cy.reload()
        cy.wait(8000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.newaccount.email)
    }
    clickOnEditIcon() {
        acc.editIconElement().eq(0).click()
    }
    editTitle() {
        acc.editTitleElement().clear().type(tdata.edit.title)
    }
    editFullname() {
        acc.editFullnameElement().clear().type(tdata.edit.fullname)
    }
    editCellNumber() {
        acc.editCellnumberElement().clear().type(tdata.edit.cellnumber)
    }
    editPhone() {
        acc.editPhoneElement().clear().type(tdata.edit.phone)
    }
    editUserRole() {
        acc.editUserroleElement().click({ force: true })
        cy.get(tdata.edit.userrole).click()
    }
    editUserStatus() {
        acc.editUserStatusElement().click({ force: true })
        cy.get(tdata.edit.userstatus).click()
    }
    clickSubmitForUpdate() {
        acc.editSubmitbtnElement().eq(0).click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains(tdata.edit.updatemsg).should('be.visible')
    }
    clickDeleteIcon() {
        acc.deleteIconElement().eq(0).click({ force: true })
    }
    clickConfirmDeleteButton() {
        acc.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        dash1.messageElement().should('contain',tdata.delete.deletemsg)
    }
    enterSearchValue() {
        acc.searchElement().type(tdata.search.fullname,{force:true})
    }
    verifySearchResult() {
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.search.fullname)
    }
    clickOnMoreFiltersButton() {
        acc.morefiltersbtnElement().click({force:true})
    }
    clickOnAddFilterGroup() {
        acc.addfilterGroupElement().click({force:true})
    }
    selectFieldName() {
        acc.fieldnameElement().select('email')
    }
    selectfieldOperation() {
        acc.fieldoperationElement().select("does_not_contain")
    }
    enterFieldValueSearchBox() {
        acc.fieldvalueElement().type('@gmail.com')
    }
    clickOnApplyButton() {
        acc.applybtnElement().click({force:true})
    }
    clickOnClearFiltersButton() {
        acc.clearfilterbtnElement().click({force:true})
    }
    verifyResultAfterFilter() {
        cy.wait(2000)
        cy.get('tbody tr td').should('not.contain', "@gmail.com")
    }
}

export default AccountDetailsActions 