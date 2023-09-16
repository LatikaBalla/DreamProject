/// <reference types="cypress" />
const UsersElements = require("../PageElements/UsersElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
const uniqueSeed = Date.now();
export class UsersActions {
    constructor() {
        globalThis.user = new UsersElements();
        globalThis.dash = new DashboardElements();

    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnUsers() {
        dash.arrowElement().click({ force: true })
        dash.usersElement().click({ force: true })
    }
    AllOrganizationalUnitVisible() {
        user.organizationalunitElement().should('be.visible')
    }
    AllUserUnitVisible() {
        user.allusersunitElement().should('be.visible')
    }
    filtersVisible() {
        user.filtersElement().should('be.visible')
    }
    tableVisible() {
        user.tableElement().should('be.visible')
    }
    clickOnCreateNewStudent() {
        user.addnewUserbtnElement().click({ force: true })
    }
    enterTitle() {
        user.titleElement().type(tdata.users.title)
    }
    enterFullname() {
        user.fullnameElement().type(tdata.users.fullname)
    }
    enterEmail() {

        user.emailElement().type(uniqueSeed + tdata.users.email)
    }
    enterPhone() {
        user.phoneElement().type(tdata.users.phone)
    }
    enterCellNumber() {
        user.cellnumberElement().type(tdata.users.cellnumber)
    }
    clickOnASubmitButton() {
        user.submitElement().click({ force: true })
    }
    verifyRecordTable() {
        dash.messageElement().should('contain', tdata.users.createStudentmsg)
    }
    enterSearchValue(){
        cy.wait(2000)
        user.searchElement().type(tdata.users.email+'{enter}')
    }
    verifySearchResult(){
        cy.get('tbody tr').eq(0).find('td').eq(1).should('contain',tdata.users.email)
    }
    clickOnEditButton() {
        cy.get('tbody tr').eq(0).find('td').eq(6).contains('Edit').click()
    }
    editTitle() {
        user.titleElement().clear().type(tdata.users.editTitle)
    }
    editFullname() {
        user.fullnameElement().clear().type(tdata.users.editFullname)
    }
    editCellNumber() {
        user.cellnumberElement().clear().type(tdata.users.editCellnumber)
    }
    editPhone() {
        user.phoneElement().clear().type(tdata.users.editPhone)
    }
    editUserRole() {
        user.userroleElement().click({ force: true })
        cy.get(tdata.users.editUserRole).click()
    }
    editInhouseRepaire() {
        user.inhouserepaireElement().click({ force: true })
        cy.get(tdata.users.editInhouseRepaire).click()
    }
    editUserStatus() {
        user.userstatusElement().click({ force: true })
        cy.get(tdata.users.editUserStatus).click()
    }
    clickSubmitForUpdate() {
        user.editsubmitElement().click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains('User has been updated').should('be.visible')
       // dash.messageElement().should('contain', tdata.users.updateStudentmsg)
    }
    clickDeleteButton() {
        user.deletebtnElement().eq(0).click({ force: true })
    }
    clickConfirmDeleteButton() {
        user.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
       // cy.get('tbody tr').eq(0).find('td').eq(0).should('not.contain', tdata.delete.fullname)
    }
    clickOnAddFilterButton() {
        user.addfilterbtnElement().click({force:true})
    }
    selectFieldName() {
        user.fieldnameElement().select('role_name')
    }
    selectfieldOperation() {
        user.fieldoperationElement().select("does_not_contain")
    }
    enterFieldValueSearchBox() {
        user.fieldvalueElement().type('Student')
    }
    clickOnApplyButton() {
        user.applybtnElement().click({force:true})
    }
    clickOnClearFiltersButton() {
        user.clearfilterbtnElement().click({force:true})
    }
    verifyResultAfterFilter() {
        cy.wait(2000)
        //cy.get('tbody tr td').should('not.contain', "Student")
    }
    clickOnDownload(){
     user.downloadbtnElement().click({force:true})
    }
    verifyDowanload(){
        cy.verifyDownload(tdata.users.filename)
    }
   
}
export default UsersActions 