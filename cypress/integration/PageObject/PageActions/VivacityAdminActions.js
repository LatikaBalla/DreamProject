/// <reference types="cypress" />
const VivacityAdminElements = require("../PageElements/VivacityAdminElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
const uniqueSeed = Date.now();
export class VivacityAdminActions {
    constructor() {
        globalThis.vadmin = new VivacityAdminElements();
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnVivacityAdmin() {
        dash.arrowElement().click({ force: true })
        dash.vivaAdminElement().click({ force: true })
    }
    allPaidSubcription() {
        vadmin.section1Element().should('be.visible')
    }
    adminUser() {
        vadmin.section2Element().should('be.visible')
    }
    serialNoWarrantyVisible() {
        vadmin.section3Element().should('be.visible')
    }
    accManagement() {
        vadmin.section4Element().should('be.visible')
    }
    requestUser() {
        vadmin.section5Element().should('be.visible')
    }
    clickOnallPaidSubcription() {
        vadmin.section1Element().click()
    }
    clickOnAdminUser() {
        vadmin.section2Element().click()
    }
    clickOnCreateNewStudent() {
        vadmin.addnewUserbtnElement().click({ force: true })
    }
    enterTitle() {
        vadmin.titleUserElement().type(tdata.vivacityAdmin.titleUser)
    }
    enterFullname() {
        vadmin.fullnameElement().type(tdata.vivacityAdmin.fullname)
    }
    enterEmail() {
        vadmin.emailElement().type(uniqueSeed + tdata.vivacityAdmin.email)
    }
    enterPhone() {
        vadmin.phoneElement().type(tdata.vivacityAdmin.phone)
    }
    enterCellNumber() {
        vadmin.cellnumberElement().type(tdata.vivacityAdmin.cellnumber)
    }

    clickOnASubmitButton() {
        vadmin.submitbtnElement().eq(0).click({ force: true })
    }
    verifyRecordTable() {
        cy.wait(1000)
        // vadmin.messageElement().should('contain', tdata.uvivacityAdmin.createStudentmsg)
    }
    enterSearchValue() {
        vadmin.section2Element().click()
        cy.wait(2000)
        vadmin.searchElement().type(tdata.vivacityAdmin.fullname + '{enter}',{force:true})
    }
    verifySearchResult() {
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.vivacityAdmin.fullname)
    }
    clickOnEditButton() {
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(6).scrollIntoView().find("[data-testid='EditOutlinedIcon']").click({force:true})
    }
    editTitle() {
        vadmin.titleUserElement().clear().type(tdata.vivacityAdmin.editTitle)
    }
    editFullname() {
        vadmin.fullnameElement().clear().type(tdata.vivacityAdmin.editFullname)
    }
    editCellNumber() {
        vadmin.cellnumberElement().clear().type(tdata.vivacityAdmin.editCellnumber)
    }
    editPhone() {
        vadmin.phoneElement().clear().type(tdata.vivacityAdmin.editPhone)
    }
    editUserRole() {
        vadmin.userroleElement().click({ force: true })
        cy.get(tdata.users.editUserRole).click()
    }
    clickSubmitForUpdate() {
        vadmin.editsubmitElement().eq(0).click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains('User has been updated').should('be.visible')
    }
    clickDeleteButton() {
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(6).scrollIntoView().find("[data-testid='DeleteOutlineOutlinedIcon']").click({force:true})
    }
    clickConfirmDeleteButton() {
        vadmin.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.vivacityAdmin.editFullname)
    }
    serialNoWarrantySection() {
        vadmin.section3Element().click()
    }
    clickOnAddWarranty() {
        vadmin.addWarrantyElement().click()
    }
    enterName() {
        vadmin.warrantyNameElement().type(tdata.vivacityAdmin.warrantyName)
    }
    enterSKU() {
        vadmin.skuElement().type(tdata.vivacityAdmin.sku)
    }
    selectType() {
        vadmin.warrantyTypeElement().click()
        cy.get(tdata.vivacityAdmin.warrantyType).click()
    }
    selectDamgeProtection() {
        vadmin.protectionElement().click()
        cy.get(tdata.vivacityAdmin.protection).click()
    }
    enterDevicePrice() {
        vadmin.priceElement().type(tdata.vivacityAdmin.price)
    }
    enterYear() {
        vadmin.yearsElement().type(tdata.vivacityAdmin.years)
    }
    enterMonth() {
        vadmin.monthsElement().type(tdata.vivacityAdmin.months)
    }
    enterBatteryYear() {
        vadmin.byearElement().type(tdata.vivacityAdmin.byear)
    }
    enterBatteryMonth() {
        vadmin.bmonthElement().type(tdata.vivacityAdmin.bmonth)
    }
    selectProvider() {
        vadmin.providerElement().click()
        cy.get(tdata.vivacityAdmin.provider).click()
    }
    enterWDescription() {
        vadmin.wdescriptionElement().type(tdata.vivacityAdmin.wdescription)
    }
    clickOnSubmitButton() {
        vadmin.submitElement().click()
    }
    verifyWarrantyRecordAdded() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.warrantymsg)
    }
    clickOnWEditIcon() {
        cy.wait(2000)
        cy.get('.css-1owb465').eq(2).find('tbody tr').eq(0).find('td').eq(4).find("[data-testid='EditOutlinedIcon']").click()
    }
    editName() {
        vadmin.warrantyNameElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editwName)
    }
    editSKU() {
        vadmin.skuElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editsku)
    }
    editType() {
        vadmin.warrantyTypeElement().click()
        cy.get(tdata.vivacityAdmin.editwarrantyType).click()
    }
    editDamgeProtection() {
        vadmin.protectionElement().click()
        cy.get(tdata.vivacityAdmin.editprotection).click()
    }
    editDevicePrice() {
        vadmin.priceElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editprice)
    }
    editYear() {
        vadmin.yearsElement().clear().should('have.value', '').type(tdata.vivacityAdmin.edityears)
    }
    editMonth() {
        vadmin.monthsElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editmonths)
    }
    editBatteryYear() {
        vadmin.byearElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editbyear)
    }
    editBatteryMonth() {
        vadmin.bmonthElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editbmonth)
    }
    editProvider() {
        vadmin.providerElement().click()
        cy.get(tdata.vivacityAdmin.editprovider).click()
    }
    editWDescription() {
        vadmin.wdescriptionElement().clear().should('have.value', '').type(tdata.vivacityAdmin.editwdescription)
    }
    clickOnUpdateButton() {
        cy.get('.css-0 > .MuiBox-root > .MuiButtonBase-root').click()
    }
    verifyWarrantyRecordUpdated() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.updateWarrantymsg)
    }
    clickDeleteIcon() {
        cy.get('.css-1owb465').eq(2).find('tbody tr').eq(0).find('td').eq(4).find("[data-testid='DeleteOutlineOutlinedIcon']").click()
    }
    clickConDeleteButton() {
        vadmin.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeletedWarranty() {
        cy.wait(2000)
        dash.messageElement().should('contain', tdata.vivacityAdmin.daleteWarrantymsg)
    }
    clickOnAccountMangment() {
        vadmin.section4Element().click()
    }
    clickOnAddAccount() {
        vadmin.addAccountElement().click()
    }
    enterAccName() {
        vadmin.accountNameElement().type(tdata.vivacityAdmin.accountName)
    }
    enterPhoneNo() {
        vadmin.phoneNoElement().type(tdata.vivacityAdmin.phoneNo)
    }
    enterDomain() {
        vadmin.domainElement().type(tdata.vivacityAdmin.domain)
    }
    enterCreditLimit() {
        vadmin.creditLimitElement().type(tdata.vivacityAdmin.creditLimit)
    }
    selectIhRepaire() {
        vadmin.ihrepairsElement().click()
        cy.get(tdata.vivacityAdmin.ihrepairs).click()
    }
    selectPaymentTerms() {
        vadmin.paymentTermsElement().click()
        cy.get(tdata.vivacityAdmin.paymentTerms).click()
    }
    clickOnSubmitButtonAcc() {
        vadmin.submitbtnElement().click()
    }
    verifyRecordAccountAdded() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.addAccountymsg)
    }
    clickOnUpdateSubcription() {
        vadmin.updateSubcriptionElement().click()
    }
    selectSubscription() {
        vadmin.subcriptionElement().click()
        cy.get(tdata.vivacityAdmin.subcription).click()
    }
    clickOnUpdateSub() {
        vadmin.subUpdatebtnElement().click()
    }
    verifyUpadtedSub() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.subUpdatemsg)
    }
    requestUserSection(){
  vadmin.section5Element().click({force:true})
    }
    clickOnAddAccountUser(){
        cy.wait(2000)
        cy.get('.css-1owb465').eq(3).find('tbody tr').eq(0).find('td').eq(5).contains('Add Account').click({force:true})
    }
    selectAvailableAccount(){
 vadmin.availableAccountElement().click()
cy.get('.MuiList-root > [tabindex="0"]').click()
    }
    clickOnAddAccountsubmit(){
vadmin.addbtnElement().click()
    }
    verifyAddAccUser(){
        //dash.messageElement().should('contain', tdata.vivacityAdmin.addAccUsermsg)
    }

}
export default VivacityAdminActions 