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
        //  dash.arrowElement().click({ force: true })
        dash.vivaAdminElement().click({ force: true })
    }
    allPaidSubcription() {
        vadmin.section1Element().should('be.visible')
    }
    roadmapRequest() {
        vadmin.section2Element().should('be.visible')
    }
    adminUser() {
        vadmin.section3Element().should('be.visible')
    }
    Warranty() {
        vadmin.section4Element().should('be.visible')
    }
    iserialDevice() {
        vadmin.section5Element().should('be.visible')
    }
    accManagement() {
        vadmin.section6Element().should('be.visible')
    }
    requestUser() {
        vadmin.section7Element().should('be.visible')
    }
    allUser() {
        vadmin.section8Element().should('be.visible')
    }
    RepairTicketCreation() {
        vadmin.section9Element().should('be.visible')
    }






    clickOnallPaidSubcription() {
        vadmin.section1Element().click({ force: true })
    }
    clickOnAdminUser() {
        vadmin.section3Element().click({ force: true })
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
        dash.messageElement().should('contain', tdata.vivacityAdmin.createStudentmsg)
    }
    enterSearchValue() {
        cy.get('.css-3e7ssz').eq(1).type(tdata.vivacityAdmin.fullname + '{enter}')
    }
    verifySearchResult() {
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.vivacityAdmin.fullname, { force: true })
    }
    clickOnEditButton() {
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(6).scrollIntoView().contains("Edit").click({ force: true })
    }
    editTitle() {
        vadmin.titleUserElement().clear({ force: true }).should('have.value', '').type(tdata.vivacityAdmin.editTitle, { force: true })
    }
    editFullname() {
        vadmin.fullnameElement().clear({ force: true }).should('have.value', '').type(tdata.vivacityAdmin.editFullname, { force: true })
    }
    editCellNumber() {
        vadmin.cellnumberElement().clear({ force: true }).should('have.value', '').type(tdata.vivacityAdmin.editCellnumber, { force: true })
    }
    editPhone() {
        vadmin.phoneElement().clear({ force: true }).should('have.value', '').type(tdata.vivacityAdmin.editPhone, { force: true })
    }
    editUserRole() {
        vadmin.userroleElement().click({ force: true })
        cy.get(tdata.users.editUserRole).click({ force: true })
    }
    clickSubmitForUpdate() {
        vadmin.editsubmitElement().eq(0).click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains('User has been updated').should('be.visible')
        vadmin.editsubmitElement().eq(1).click({ force: true })
    }
    clickDeleteButton() {
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(7).scrollIntoView().contains("Delete").click({ force: true })
    }
    clickConfirmDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        cy.get('.css-1owb465').eq(1).find('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.vivacityAdmin.editFullname)
    }
    serialNoWarrantySection() {
        vadmin.section4Element().click({ force: true })
    }
    clickOnAddWarranty() {
        vadmin.addWarrantyElement().click({ force: true })
    }
    enterName() {
        vadmin.warrantyNameElement().type(tdata.vivacityAdmin.warrantyName, { force: true })
    }
    enterSKU() {
        vadmin.skuElement().type(tdata.vivacityAdmin.sku, { force: true })
    }
    selectType() {
        vadmin.warrantyTypeElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.warrantyType).click({ force: true })
    }
    selectDamgeProtection() {
        vadmin.protectionElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.protection).click({ force: true })
    }
    enterDevicePrice() {
        vadmin.priceElement().type(tdata.vivacityAdmin.price, { force: true })
    }
    enterYear() {
        vadmin.yearsElement().type(tdata.vivacityAdmin.years, { force: true })
    }
    enterMonth() {
        vadmin.monthsElement().type(tdata.vivacityAdmin.months, { force: true })
    }
    enterBatteryYear() {
        vadmin.byearElement().type(tdata.vivacityAdmin.byear, { force: true })
    }
    enterBatteryMonth() {
        vadmin.bmonthElement().type(tdata.vivacityAdmin.bmonth, { force: true })
    }
    selectProvider() {
        vadmin.providerElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.provider).click({ force: true })
    }
    enterWDescription() {
        vadmin.wdescriptionElement().type(tdata.vivacityAdmin.wdescription, { force: true })
    }
    clickOnSubmitButton() {
        vadmin.submitElement().click({ force: true })
    }
    verifyWarrantyRecordAdded() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.warrantymsg)
    }
    clickOnWEditIcon() {
        cy.wait(2000)
        cy.get('.css-1owb465').eq(2).find('tbody tr').eq(0).find('td').eq(4).find("[data-testid='EditOutlinedIcon']").click({ force: true })
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
        cy.get(':nth-child(1) > .css-0 > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
        // cy.get('.css-0 > .MuiBox-root > .MuiButtonBase-root').click()
    }
    verifyWarrantyRecordUpdated() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.updateWarrantymsg)
    }
    clickDeleteIcon() {
        cy.get('.css-1owb465').eq(2).find('tbody tr').eq(0).find('td').eq(4).find("[data-testid='DeleteOutlineOutlinedIcon']").click({ force: true })
    }
    clickConDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
        // vadmin.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeletedWarranty() {
        cy.wait(2000)
        dash.messageElement().should('contain', tdata.vivacityAdmin.daleteWarrantymsg)
    }


    clickOnAccountMangment() {
        vadmin.section6Element().click({ force: true })
    }
    clickOnAddAccount() {
        vadmin.addAccountElement().click({ force: true })
    }
    enterAccName() {
        vadmin.accountNameElement().type(tdata.vivacityAdmin.accountName, { force: true })
    }
    enterPhoneNo() {
        vadmin.phoneNoElement().type(tdata.vivacityAdmin.phoneNo, { force: true })
    }
    enterDomain() {
        vadmin.domainElement().type(tdata.vivacityAdmin.domain, { force: true })
    }
    enterCreditLimit() {
        vadmin.creditLimitElement().type(tdata.vivacityAdmin.creditLimit, { force: true })
    }
    selectIhRepaire() {
        vadmin.ihrepairsElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.ihrepairs).click({ force: true })
    }
    selectPaymentTerms() {
        vadmin.paymentTermsElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.paymentTerms).click({ force: true })
    }
    clickOnSubmitButtonAcc() {
        vadmin.submitbtnElement().click({ force: true })
    }
    verifyRecordAccountAdded() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.addAccountymsg)
    }
    clickOnUpdateSubcription() {
        vadmin.updateSubcriptionElement().click({ force: true })
    }
    selectSubscription() {
        vadmin.subcriptionElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.subcription).click({ force: true })
    }
    clickOnUpdateSub() {
        cy.get('.css-1yuhvjn > :nth-child(2)').click({ force: true })
        //vadmin.subUpdatebtnElement().click({force:true})
    }
    verifyUpadtedSub() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.subUpdatemsg)
    }
    requestUserSection() {
        vadmin.section7Element().click({ force: true })
    }
    clickOnAddAccountUser() {
        cy.wait(2000)
        cy.get('.css-1owb465').eq(3).find('tbody tr').eq(0).find('td').eq(5).contains('Add Account').click({ force: true })
    }
    selectAvailableAccount() {
        vadmin.availableAccountElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.account).click({ force: true })
    }
    clickOnAddAccountsubmit() {
        cy.get('.css-1yuhvjn > :nth-child(2)').click({ force: true })
        // vadmin.addbtnElement().click({force:true})
    }
    verifyAddAccUser() {
        //dash.messageElement().should('contain', tdata.vivacityAdmin.addAccUsermsg)
    }

    clickOnAllUser() {
        vadmin.section8Element().click({ force: true })
    }
    clickOnCreateNewStudentAllUser() {
        cy.get('.MuiAccordionDetails-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true })
        // vadmin.addnewUserbtnElement().eq(1).click({ force: true })
    }
    verifyStudentAddedAllUser() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.addAccUsermsg)
    }
    enterSearchValueAllUser() {
        cy.get('.css-3e7ssz').eq(4).type(tdata.vivacityAdmin.fullname + '{enter}', { force: true })
        // vadmin.searchElement().eq(0).type(tdata.vivacityAdmin.fullname + '{enter}', { force: true })
    }
    verifySearchResultAllUser() {
        cy.get('.css-1owb465').eq(4).find('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.vivacityAdmin.fullname)
    }
    clickOnEditButtonAllUser() {
        cy.get('.css-1owb465').eq(4).find('tbody tr').eq(0).find('td').eq(6).scrollIntoView().contains("Edit").click({ force: true })
    }
    clickDeleteButtonAllUser() {
        cy.get('.css-1owb465').eq(4).find('tbody tr').eq(0).find('td').eq(7).scrollIntoView().contains("Delete").click({ force: true })
    }
    verifyRecordDeletedAllUser() {
        cy.wait(2000)
        cy.get('.css-1owb465').eq(4).find('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.vivacityAdmin.editFullname)
    }
    enterEmailAllUser() {
        vadmin.emailElement().clear().should('have.value', '').type(uniqueSeed + '1' + tdata.vivacityAdmin.email)
    }
    enterusernameAllUser() {
        vadmin.fullnameElement().clear().should('have.value', '').type(tdata.vivacityAdmin.fullname)
    }

    clickOnFeatures() {
        dash.featuresElement().click({ force: true })
    }
    clickOnRoadmap() {
        vadmin.section2Element().click({ force: true })
    }
    clickOnViewButton() {
        vadmin.viewElement().click({ force: true })
    }
    clickOnCloseButton() {
        vadmin.closeElement().click({ force: true })
    }
    clickOnApproveButton() {
        cy.get('.css-11w1fmz').find('tbody tr').eq(0).find('td').eq(4).scrollIntoView().contains("Approve").click({ force: true })
        vadmin.conapproveElement().click({ Force: true })
    }

    clickOnRepairTicketUnit() {
        vadmin.section9Element().click({ force: true })
    }
    clickOnRepair360btn() {
        vadmin.repairbtnElement().contains("Repair 360 page").click({ force: true })
    }
}
export default VivacityAdminActions 