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
       // dash.arrowElement().click({ force: true })
        dash.usersElement().click({ force: true })
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
        user.submitElement().eq(0).click({ force: true })
    }
    verifyRecordTable() {
        dash.messageElement().should('contain', tdata.users.createStudentmsg)
    }
    enterSearchValue(){
        cy.wait(2000)
        user.searchElement().type(tdata.users.fullname+'{enter}')
    }
    verifySearchResult(){
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain',tdata.users.fullname)
    }
    clickOnEditButton() {
        cy.get('tbody tr').eq(0).find('td').eq(7).contains('Edit').click()
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
        cy.get(tdata.users.editUserRole).click({force:true})
    }
    editInhouseRepaire() {
        user.inhouserepaireElement().click({ force: true })
        cy.get(tdata.users.editInhouseRepaire).click({force:true})
    }
    editUserStatus() {
        user.userstatusElement().click({ force: true })
        cy.get(tdata.users.editUserStatus).click({force:true})
    }
    editBuilding(){
       user.buildingElement().click({force:true})
       cy.get('[role="listbox"]').find('[role="option"]').eq(0).click({force:true}) 
    }
    clickSubmitForUpdate() {
        user.editsubmitElement().eq(0).click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains('User has been updated').should('be.visible')
       // dash.messageElement().should('contain', tdata.users.updateStudentmsg)
    }
    clickDeleteButton() {
        cy.get('tbody tr').eq(0).find('td').eq(8).contains('Delete').click()
      
    }
    clickConfirmDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
    }
    verifyRecordDeleted() {
       cy.wait(100)
        dash.messageElement().should('contain', tdata.users.deleteStudentmsg)
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
        cy.verifyDownload("/download/",tdata.users.filename)
    }
   
}
export default UsersActions 