/// <reference types="cypress" />
const AccountDetailsElements = require("../PageElements/AccountDetailsElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");

export class AccountDetailsActions {
    constructor() {
        globalThis.acc = new AccountDetailsElements();
        globalThis.dash1 = new DashboardElements()
    }
    closeTermsOfServiceWindow() {
        dash1.termsElement().click({ force: true })  
    }
    verifyTitleAccountDetails() {
        dash1.myAccountElement().click({force:true})
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
        //  cy.get('.css-zosbzo > .MuiPaper-root > :nth-child(1) > :nth-child(1) > .MuiBox-root > :nth-child(1)').click({ force: true })
        acc.addnewbtnElement().contains('Create New').click({ force: true })
        cy.wait(1000)
    }
    enterTitle() {
        acc.titlenewElement().type(tdata.newaccount.title, { force: true })
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
    selectBuilding() {
        acc.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').eq(1).find('li').contains(tdata.buildings.buildingname).click({ force: true })
    }
    clickOnASaveButton() {
        acc.savebtnElement().should('contain', "Save").click({ force: true })
    }
    verifyNewContactTitle() {
        acc.newContactTitleElement().should('be.visible')
    }
    verifyRecordTable() {
        cy.wait(3000)
        dash1.messageElement().should('contain', tdata.newaccount.addmsg)
    }
    clickOnEditIcon() {
        acc.editIconElement().eq(0).click()
    }
    editTitle() {
        acc.editTitleElement().clear({ force: true }).type(tdata.edit.title)
    }
    editFullname() {
        acc.editFullnameElement().clear({ force: true }).type(tdata.edit.fullname)
    }
    editCellNumber() {
        acc.editCellnumberElement().clear({ force: true }).type(tdata.edit.cellnumber)
    }
    editPhone() {
        acc.editPhoneElement().clear({ force: true }).type(tdata.edit.phone)
    }
    editUserRole() {
        acc.editUserroleElement().click({ force: true })
        cy.get(tdata.edit.userrole).click({ force: true })
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
        dash1.messageElement().should('contain', tdata.delete.deletemsg)
    }
    enterSearchValue() {
        acc.searchElement().type(tdata.search.fullname, { force: true })
    }
    verifySearchResult() {
        cy.get('tr td').eq(1).should('contain', tdata.search.fullname)
    }
    clickOnMoreFilter() {
        acc.morefiltersbtnElement().click({ force: true })
    }
    clickOnAddFilterGroup() {
        acc.addfilterGroupElement().click({ force: true })
    }
    selectFieldName() {
        acc.fieldnameElement().select('email')
    }
    selectfieldOperation() {
        acc.fieldoperationElement().select("Does Not Contain")
    }
    enterFieldValueSearchBox() {
        acc.fieldvalueElement().type('@gmail.com')
    }
    clickOnApplyButton() {
        acc.applybtnElement().click({ force: true })
    }
    clickOnClearFiltersButton() {
        acc.clearfilterbtnElement().click({ force: true })
    }
    verifyResultAfterFilter() {
        cy.wait(2000)
        cy.get('tbody tr td').should('not.contain', "@gmail.com")
    }
    selectFilterFullName() {
        acc.fieldNameElement().select(1).invoke("val").should("eq", 'full_name', { force: true })
        acc.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        acc.fieldValueElement().type(tdata.newaccount.fullname)
        acc.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.newaccount.fullname)
    }
    selectFilterEmail() {
        acc.fieldNameElement().select(3).invoke("val").should("eq", "email")
        acc.fieldOpElement().select('Does Not Contain', { force: true })
        acc.fieldValueElement().type(tdata.newaccount.emaildrop)
        acc.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('tr td').eq(3).should('not.contain', tdata.newaccount.emaildrop)
    }
    selectFilterPhone() {
        acc.fieldNameElement().select('cell_number', { force: true })
        acc.fieldOpElement().select('Does Not Contain', { force: true })
        acc.fieldValueElement().type(tdata.srcStudent.phoneNo2)
        acc.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('tr td').eq(5).should('not.contain', tdata.srcStudent.phoneNo2)
    }
    selectFilterTitle() {
        acc.fieldNameElement().select('title', { force: true })
        acc.fieldOpElement().select('Does Not Contain', { force: true })
        acc.fieldValueElement().type(tdata.newaccount.title)
        acc.applyElement().click({ force: true })
       // cy.wait(1000)
        cy.get('tr td').eq(2).should('not.contain', tdata.newaccount.title)
    }
    selectFilterRecordId() {
        acc.fieldNameElement().select('record_id', { force: true })
        acc.fieldOpElement().select('Does Not Contain', { force: true })
        acc.fieldValueElement().type(tdata.newaccount.recordid)
        acc.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('tr td').eq(0).should('not.contain', tdata.newaccount.recordid)
    }
    selectFilterUserRole() {
        acc.fieldNameElement().select('user_role', { force: true })
        acc.fieldOpElement().select('Does Not Contain', { force: true })
        acc.fieldValueElement().type(tdata.newaccount.userrole1)
        acc.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('tr td').eq(4).should('not.contain', tdata.newaccount.userrole1)
    }
    selectFilterUserStatus() {
        cy.wait(2000)
        acc.fieldNameElement().select('user_status', { force: true })
        acc.fieldOpElement().select('Does Not Contain', { force: true })
        acc.fieldValueElement().type(tdata.newaccount.userstatus)
        acc.applyElement().click({ force: true })
        cy.wait(1000)
        cy.get('tr td').eq(7).should('not.contain', tdata.newaccount.userstatus)
    }

    searchRecordId() {
        acc.searchboxElement().eq(0).click({ force: true })
        acc.recordidElement().click({ force: true })
        acc.searchElement().clear({ force: true }).type(tdata.newaccount.recordid + '{enter}', { force: true })
        // cy.wait(1000)
        cy.get('tr td').eq(0).should('contain', tdata.newaccount.recordid)
    }
    searchFullName() {
        acc.searchboxElement().eq(0).click({ force: true })
        acc.fullNameElement().click({ force: true })
        acc.searchElement().clear({ force: true }).type(tdata.newaccount.fullName + '{enter}', { force: true })
        cy.get('tr td').eq(1).should('contain', tdata.newaccount.fullName)
    }
    searchEmail() {
        acc.searchboxElement().eq(0).click({ force: true })
        acc.emaildropElement().click({ force: true })
        acc.searchElement().clear({ force: true }).type(tdata.newaccount.emaildrop + '{enter}', { force: true })
        cy.get('tr td').eq(3).should('contain', tdata.newaccount.emaildrop)
    }
    searchTitle() {
        acc.searchElement().clear({ force: true })
        acc.searchboxElement().eq(0).click({ force: true })
        acc.titleElement().click({ force: true })
        acc.searchElement().clear({ force: true }).type(tdata.newaccount.title + '{enter}', { force: true })
        // cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.newaccount.title)
    }
    searchPhone() {
        acc.searchboxElement().eq(0).click({ force: true })
        acc.phoneNoElement().click({ force: true })
        acc.searchElement().clear({ force: true }).type(tdata.newaccount.cellnumber + '{enter}', { force: true })
        cy.get('tr td').eq(6).should('contain', tdata.newaccount.cellnumber)
    }
    AccountDetailsVisible() {
        dash1.myAccountElement().click({force:true})
        acc.accountnameElement().should('be.visible')
        acc.accountnoElement().should('be.visible')
    }
    sectionManaddressVisible() {
        acc.accountmanagerElement().should('be.visible')
        acc.billingaddressElement().should('be.visible')
        acc.shippingaddressElement().should('be.visible')
    }
    clickOnExporttoCSV() {
        cy.contains('Export').click({ force: true })
    }
    clickOnBulkUpload() {
        cy.contains('Bulk Upload').click({ force: true })
    }
    attachCsvfile() {
        cy.contains('Attach CSV file').click({ force: true })
        acc.uploadElement().attachFile(tdata.newaccount.uploadfilename, { force: true })
        cy.contains('Submit').click({ force: true })
    }
    verifyuploaded() {

    }
}

export default AccountDetailsActions 