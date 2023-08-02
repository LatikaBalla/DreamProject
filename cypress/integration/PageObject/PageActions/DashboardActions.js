/// <reference types="cypress" />
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");

export class DashboardActions {
    constructor() {
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow(){
        dash.termsElement().click({force:true})
    }
    myAccountDetailsTabVisible() {
        dash.accountDetailsElement().should('be.visible')
    }
    buildingTabVisible() {
        dash.buildingsElement().should('be.visible')
    }
    tableAccountVisible() {
        dash.tableAccountElement().should('be.visible')
    }
    sliderMenuvisible(){
        dash.sliderMenuElement().should('be.visible')
    }
    clickOnAddNewbutton() {
        dash.addnewbtnElement().click({ force: true })
    }
    enterTitle() {
        dash.titleElement().type(tdata.newaccount.title, { force: true })
    }
    enterFullname() {
        dash.fullnameElement().type(tdata.newaccount.fullname, { force: true })
    }
    enterFullnameDelete() {
        dash.fullnameElement().type(tdata.delete.fullname, { force: true })
    }
    enterFullnameSearch() {
        dash.fullnameElement().type(tdata.search.fullname, { force: true })
    }
    enterEmail() {
        const uniqueSeed = Date.now();
        dash.emailElement().type(uniqueSeed + tdata.newaccount.email, { force: true })
    }
    enterPhone() {
        dash.phoneElement().type(tdata.newaccount.phone, { force: true })
    }
    enterCellNumber() {
        dash.cellnumberElement().type(tdata.newaccount.cellnumber, { force: true })
    }
    selectUserRole() {
        dash.userroleElement().click({ force: true })
        cy.get(tdata.newaccount.userrole).click({ force: true })
    }
    clickOnASaveButton() {
        dash.savebtnElement().should('contain', "Save").click({ force: true })
    }
    verifyNewContactTitle() {
        dash.newContactTitleElement().should('be.visible')
    }
    verifyRecordTable() {
        cy.reload()
        cy.wait(8000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.newaccount.email)
    }
    clickOnEditIcon() {
        dash.editIconElement().eq(0).click()
    }
    editTitle() {
        dash.editTitleElement().clear().type(tdata.edit.title)
    }
    editFullname() {
        dash.editFullnameElement().clear().type(tdata.edit.fullname)
    }
    editCellNumber() {
        dash.editCellnumberElement().clear().type(tdata.edit.cellnumber)
    }
    editPhone() {
        dash.editPhoneElement().clear().type(tdata.edit.phone)
    }
    editUserRole() {
        dash.editUserroleElement().click({ force: true })
        cy.get(tdata.edit.userrole).click()
    }
    editUserStatus() {
        dash.editUserStatusElement().click({ force: true })
        cy.get(tdata.edit.userstatus).click()
    }
    clickSubmitForUpdate() {
        dash.editSubmitbtnElement().click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains('User has been updated').should('be.visible')
    }
    clickDeleteIcon() {
        dash.deleteIconElement().eq(0).click({ force: true })
    }
    clickConfirmDeleteButton() {
        dash.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        cy.get('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.delete.fullname)
    }
    enterSearchValue(){
        dash.searchElement().type(tdata.search.fullname)
    }
    verifySearchResult(){
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.search.fullname)
    }

}

export default DashboardActions 