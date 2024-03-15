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
        cy.get('.css-mz6knu > :nth-child(1) > :nth-child(1) > .MuiBox-root > :nth-child(1)').click({ force: true })
        //user.addnewUserbtnElement().click({ force: true })
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
        cy.get('[data-testid="CachedIcon"]').click({force:true})
        cy.wait(1000)
    }
    enterSearchValue(){
        cy.wait(2000)
        user.searchElement().type(tdata.users.fullname+'{enter}')
    }
    verifySearchResult(){
        cy.get('tbody tr').eq(0).find('td').eq(0).should('contain',tdata.users.fullname)
    }
    clickOnEditButton() {
        cy.get('tr td').eq(8).find('[data-testid="ModeEditOutlinedIcon"]').click()
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
       cy.get('[role="listbox"]').contains(tdata.buildings.buildingname).click({force:true}) 
    }
    clickSubmitForUpdate() {
        user.editsubmitElement().eq(0).click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        cy.contains('User has been updated').should('be.visible')
       // dash.messageElement().should('contain', tdata.users.updateStudentmsg)
    }
    clickDeleteButton() {
        cy.get('tr td').eq(8).find('[data-testid="DeleteOutlineOutlinedIcon"]').click()
      
    }
    clickConfirmDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
    }
    verifyRecordDeleted() {
       cy.wait(4000)
        dash.messageElement().should('contain', tdata.users.deleteStudentmsg)
    }
    clickOnMoreFilter(){
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
    clickOnClearFilter(){
        user.clearfilterbtnElement().click({force:true})
    }
    verifyResultAfterFilter() {
        cy.wait(2000)
        //cy.get('tbody tr td').should('not.contain', "Student")
    }
    clickOnDownload(){
     user.downloadbtnElement().click({force:true})
    }
    searchRecordId() {
        user.searchboxElement().eq(0).click({ force: true })
        user.recordidElement().click({ force: true })
        user.searchElement().clear({force:true}).type(tdata.users.recordid + '{enter}', { force: true })
        
        cy.get('tr td').eq(0).should('contain', tdata.users.recordid)
    }
    searchFullName() {
        user.searchboxElement().eq(0).click({ force: true })
        user.fullnamedropElement().click({ force: true })
        user.searchElement().clear({force:true}).type(tdata.users.fullname + '{enter}', { force: true })
     //   cy.wait(3000)
        cy.get('tr td').eq(1).should('contain', tdata.users.fullname)
    }
    searchEmail() {
        user.searchboxElement().eq(0).click({ force: true })
        user.emaildropElement().click({ force: true })
        user.searchElement().clear({force:true}).type(tdata.users.email + '{enter}', { force: true })
       // cy.wait(1000)
        cy.get('tr td').eq(2).should('contain', tdata.users.email)
    }
    searchPhone() {
        user.searchboxElement().eq(0).click({ force: true })
        user.phonedropElement().click({ force: true })
        user.searchElement().clear({force:true}).type(tdata.users.phone + '{enter}', { force: true })
      //  cy.wait(1000)
        cy.get('tr td').eq(3).should('contain', tdata.users.phoneNo)
    }
    searchCellNumber() {
        user.searchboxElement().eq(0).click({ force: true })
        user.cellnumberdropElement().click({ force: true })
        user.searchElement().clear({force:true}).type(tdata.users.cellnumber + '{enter}', { force: true })
        //cy.wait(1000)
        cy.get('tr td').eq(4).should('contain', tdata.users.cellnumber)
    }
    searchUserRole() {
        user.searchboxElement().eq(0).click({ force: true })
        user.userroledropElement().click({ force: true })
        user.searchElement().clear({force:true}).type(tdata.users.rolename + '{enter}', { force: true })
       // cy.wait(1000)
        cy.get('tr td').eq(5).should('contain', tdata.users.rolename, { force: true })
        user.searchElement().clear({force:true})
    }

    selectFilterRecordId(){
        user.fieldNameElement().select(0).invoke("val").should("eq", 'record_id',{force:true})
        user.fieldOpElement().select('Does Not Contain',{force:true}).should('have.value', 'Does Not Contain')
        user.fieldValueElement().type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.users.recordid)
    }
    selectFilterFullname(){
        user.fieldNameElement().select(1).invoke("val").should("eq", 'full_name',{force:true})
        user.fieldOpElement().select('Does Not Contain',{force:true}).should('have.value', 'Does Not Contain')
        user.fieldValueElement().type(tdata.users.fullname)
        user.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.users.fullname)
    }
    selectFilterEmail(){     
        user.fieldNameElement().select(2).invoke("val").should("eq", "email")
        user.fieldOpElement().select('Does Not Contain',{force:true})
        user.fieldValueElement().type(tdata.users.emaildrop)
        user.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', tdata.users.emaildrop)
    }

    selectFilterCellNumber(){
        user.fieldNameElement().select('cell_number',{force:true})
        user.fieldOpElement().select('Does Not Contain',{force:true})
        user.fieldValueElement().type(tdata.users.cellnumber)
        user.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('not.contain', tdata.users.cellnumber)
    }
    selectFilterRoleName(){
        user.fieldNameElement().select('user_role',{force:true})
        user.fieldOpElement().select('Does Not Contain',{force:true})
        user.fieldValueElement().type(tdata.users.userrole)
        user.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('not.contain', tdata.users.userrole)
    }
    selectFilterUserStatus(){
        user.fieldNameElement().select('user_status',{force:true})
        user.fieldOpElement().select('Does Not Contain',{force:true})
        user.fieldValueElement().type(tdata.users.userstatus)
        user.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('not.contain', tdata.users.userstatus)
    } 
}
export default UsersActions 