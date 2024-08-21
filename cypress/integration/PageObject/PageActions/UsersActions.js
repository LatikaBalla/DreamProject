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
        cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnUsers() {
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
        user.fullnameElement().type(tdata.users.fullName)
    }
    enterEmail() {
        user.emailElement().type(uniqueSeed + tdata.users.email)
    }
    enterPhone() {
        user.phoneElement().type(tdata.users.phoneNo1)
    }
    enterCellNumber() {
        user.cellnumberElement().type(tdata.users.cellnumber)
    }
    selectRole() {
        user.userstatusElement().click({ force: true })
        cy.get('[data-value="6"]').click({ force: true })
    }
    selectBuilding() {
        user.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains("Dream Building").click({ force: true })
    }
    clickOnASubmitButton() {
        user.submitElement().eq(0).click({ force: true })
    }
    verifyRecordTable() {
        dash.messageElement().should('contain', tdata.users.createStudentmsg)
    }
    clickOnviewButton() {
        user.viewElement().eq(0).click({ force: true })
    }
    clickOnEditButton() {
        user.editbtnElement().click({ force: true })
    }
    editTitle() {
        user.titleElement().clear().type(tdata.users.editTitle)
    }
    editFullname() {
        cy.get('#full_name').clear().type(tdata.users.editFullname)
        cy.get('#mui-component-select-user_status').click({ force: true })
        cy.get('[data-value="Inactive"]').click({ force: true })
    }
    editCellNumber() {
        cy.get('#cell_number').clear().type(tdata.users.editCellnumber)
    }
    editPhone() {
        user.phoneElement().clear().type(tdata.users.editPhone)
    }
    editUserRole() {
        cy.get('#mui-component-select-user_role').click({ force: true })
        cy.get(tdata.users.editUserRole).click({ force: true })
    }
    editInhouseRepaire() {
        user.inhouserepaireElement().click({ force: true })
        cy.get(tdata.users.editInhouseRepaire).click({ force: true })
    }
    editUserStatus() {
        cy.get('[name="product_updates"]').click({ force: true })
    }
    editBuilding() {
        user.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').contains(tdata.buildings.buildingname).click({ force: true })
    }
    clickSubmitForUpdate() {
        user.editsubmitElement().contains('Save').click({ force: true })
    }
    verfifyDataUpdatedMessage() {
        dash.messageElement().should('contain', tdata.users.updateStudentmsg)
    }
    clickDeleteButton() {
        cy.wait(4000)
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().type(tdata.users.editFullname)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.editFullname)
        user.viewElement().eq(0).click({ force: true })
        user.deletebtnElement().click({ force: true })
    }
    clickConfirmDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
    }
    verifyRecordDeleted() {
        dash.messageElement().should('contain', tdata.users.deleteStudentmsg)
    }
    clickOnMoreFilter() {
        user.addfilterbtnElement().click({ force: true })
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
        user.applybtnElement().click({ force: true })
    }
    verifyResultAfterFilter() {
        cy.wait(2000)
        //cy.get('tbody tr td').should('not.contain', "Student")
    }
    clickOnDownload() {
        user.downloadbtnElement().click({ force: true })
    }
    //ri
    filtercontainRI() {
        cy.wait(4000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.equal(24868);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).clear({ force: true }).type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.not.equal(24868);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterGreaterthanRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).clear({ force: true }).type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.greaterThan(24868);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterGreaterequalRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).clear({ force: true }).type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.gte(24868);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterLessthanRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).clear({ force: true }).type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(0).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lessThan(24868);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterLessEqualRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).clear({ force: true }).type(tdata.users.recordid)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(0).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lte(24868);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterBetweenRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="From"]').type(tdata.users.recordid)
        cy.get('[placeholder="To"]').type(tdata.users.recordid1)
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.within(24868, 58332);
        })
        user.clearFilterElement().click({ force: true })
    }
    filterBlankRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankRI() {
        cy.wait(1000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(8).click({ force: true })
        user.fieldValueElement().eq(1).clear({ force: true }).type(tdata.users.recordid1, { force: true })
        user.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.equal(58332)
        })
        user.clearFilterElement().click({ force: true })
    }
    //fn
    filtercontainFN() {
        cy.wait(4000)
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('Dream')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dream')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('Admin')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Admin')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankFN() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).type(tdata.users.fullName, { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    //email
    filtercontainE() {
        cy.wait(2000)
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('admin')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'admin')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('tech.com')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tech.com')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankE() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).type(tdata.users.emailid, { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    //us
    filterURop1() {
        cy.wait(4000)
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="2"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Super Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop2() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="8"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Student Repair Technician')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop3() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="9"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Vivacity Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop4() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="7"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'School District Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop5() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="5"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Facilitator')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop6() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="10"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Loaner Manager')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop6() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="1"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Student')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop7() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="4"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Repair Tech')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop8() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="6"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Super Student')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop9() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="3"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Building Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop10() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="11"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Practice Student')
        cy.get('.reset-button').click({ force: true })
    }
    //UR
    filtercontainUS() {
        cy.wait(4000)
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.userStatus)
        user.applyElement().click({ force: true })
       // cy.get('[row-index="0"]').should('contain', tdata.users.userStatus)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.userStatus)
        user.applyElement().click({ force: true })
         cy.get('[row-index="0"]').should('not.contain', tdata.users.userStatus)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.userStatus)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.userStatus)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.userStatus)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.userStatus)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('Act')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Act')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('ive')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ive')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
       // cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankUS() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).type(tdata.users.userStatus, { force: true })
        user.applyElement().click({ force: true })
       // cy.get('[row-index="0"]').should('contain', tdata.users.userStatus)
        user.clearFilterElement().click({ force: true })
    }
}
export default UsersActions 