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
        //  cy.wait(3000)
        dash.termsElement().contains('Dismiss').click({ force: true })
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
        user.submitElement().contains('Submit').click({ force: true })
    }
    verifyRecordTable() {
        dash.messageElement().should('contain', tdata.users.createStudentmsg)
    }
    clickOnviewButton() {
        user.viewElement().eq(0).click({ force: true })
        cy.get('[data-testid="VisibilityIcon"]').click({ force: true })
    }
    clickOnEditButtonInside() {
        cy.get('[aria-label="Edit User Details"]').click({ force: true })
    }
    clickOnEditButton() {
        cy.wait(2000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.fullName)
        cy.wait(100)
        user.viewElement().eq(0).click({ force: true })
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
        cy.get('#mui-component-select-user_status').click({ force: true })
        cy.get('[ data-value="Inactive"]').click({ force: true })
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
       // cy.get('[data-testid="FilterAltIcon"]').click({ force: true })
    }
    clickDeleteButton() {
        cy.wait(100)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().type(tdata.users.editFullname)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.editFullname)
        cy.wait(100)
        user.viewElement().eq(0).click({ force: true })
        user.deletebtnElement().click({ force: true })
    }
    clickConfirmDeleteButton() {
        cy.get('.css-1877pye').click({ force: true })
    }
    verifyRecordDeleted() {
        cy.wait(2000)
        dash.messageElement().should('contain', tdata.users.deleteStudentmsg)
    }
    clickOnDownload() {
        user.downloadbtnElement().click({ force: true })
    }
    searchOrgUnitDevices() {
        cy.wait(1000)
        user.expandElement().click({ force: true })
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
        user.checkbox1Element().click({ force: true })
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
    }
    verifysearchResult1() {
        cy.get('[row-index="0"]').should('contain', "/Devices")
        user.checkbox1Element().click({ force: true })
    }
    searchOrgUnitGoogleBU() {
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
        user.checkbox2Element().click({ force: true })
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
    }
    verifysearchResult2() {
        cy.get('[row-index="0"]').should('contain', "/Google Bootcamp Users")
        user.checkbox2Element().click({ force: true })
    }
    searchOrgUnitTestOU() {
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
        user.checkbox3Element().click({ force: true })
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
    }
    verifysearchResult3() {
        // cy.get('[row-index="0"]').should('contain', "/")
        user.checkbox3Element().click({ force: true })
    }
    searchOrgUnitVTEmployee() {
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
        user.checkbox4Element().click({ force: true })
        cy.get('[aria-label="Vivacity Tech"]').click({ force: true })
    }
    verifysearchResult4() {
        cy.get('[row-index="0"]').should('contain', "/VT Employees")
        user.checkbox4Element().click({ force: true })
    }
    clickOnExport() {
        user.exportElement().click({ force: true })
    }
    clickOnBulkUpload() {
        user.bulkupdatebtnElement().click({ force: true })
    }
    attachCsvfile() {
        //  cy.contains('Attach CSV file').click({ force: true })
        cy.get('.css-0 > .MuiButtonBase-root').scrollIntoView().click({ force: true })
        user.uploadElement().attachFile(tdata.users.uploadfilename, { force: true })
        cy.wait(100)
        cy.contains('Upload').click({ force: true })
    }
    verifyuploaded() {
        dash.messageElement().should('contain', tdata.user.uploadmsg)
    }
    //fn
    filtercontainFN() {
        cy.wait(4000)
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainFN() {
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsFN() {
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalFN() {
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.fullName)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.fullName)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithFN() {
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('Dream')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dream')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithFN() {
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('Admin')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Admin')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankFN() {
        user.addFilterElement().eq(0).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankFN() {
        user.addFilterElement().eq(0).click({ force: true })
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
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.emailid)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('admin')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'admin')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('tech.com')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tech.com')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankE() {
        user.addFilterElement().eq(1).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).type(tdata.users.emailid, { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.emailid)
        user.clearFilterElement().click({ force: true })
    }
    //phone
    filtercontainP() {
        cy.wait(2000)
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.phoneNo1)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.phoneNo2)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.phoneNo1)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.users.phoneNo2)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.phoneNo1)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.phoneNo2)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.phoneNo1)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.phoneNo2)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('999')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '(999)')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('999')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '999')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankP() {
        user.addFilterElement().eq(2).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).type(tdata.users.phoneNo1, { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.phoneNo2)
        user.clearFilterElement().click({ force: true })
    }
    //us
    filterURop1() {
        cy.wait(4000)
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Building Admin"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Building Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop2() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Facilitator"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Facilitator')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop3() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Loaner Manager"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Loaner Manager')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop4() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Practice Student"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Practice Student')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop5() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Repair Tech"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Repair Tech')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop6() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="School District Admin"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'School District Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop6() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Student"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Student')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop7() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Student Repair Technician"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Student Repair Technician')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop8() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Super Admin"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Super Admin')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop9() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Super Student"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Super Student')
        cy.get('.reset-button').click({ force: true })
    }
    filterURop10() {
        user.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Vivacity Admin"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_role"]').should('contain', 'Vivacity Admin')
        cy.get('.reset-button').click({ force: true })
    }
    //OU
    filtercontainOU() {
        cy.wait(4000)
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(0).click({ force: true })
        user.fieldValueElement().type(tdata.users.orgUnit)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.orgUnit)
        user.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(1).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.orgUnit)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.users.orgUnit)
        user.clearFilterElement().click({ force: true })
    }
    filterEqualsOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(2).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.orgUnit)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.orgUnit)
        user.clearFilterElement().click({ force: true })
    }
    filterNotequalOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(3).click({ force: true })
        user.fieldValueElement().eq(0).type(tdata.users.orgUnit)
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.users.orgUnit)
        user.clearFilterElement().click({ force: true })
    }
    filterBeginswithOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(4).click({ force: true })
        user.fieldValueElement().eq(0).type('/')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '/')
        user.clearFilterElement().click({ force: true })
    }
    filterEndswithOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(5).click({ force: true })
        user.fieldValueElement().eq(0).type('/')
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '/')
        user.clearFilterElement().click({ force: true })
    }
    filterBlankOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(6).click({ force: true })
        user.fieldValueElement().eq(0).type(' ', { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        user.clearFilterElement().click({ force: true })
    }
    filterNotblankOU() {
        user.addFilterElement().eq(4).click({ force: true })
        user.fieldNameElement().eq(1).click({ force: true })
        user.fieldOpElement().eq(7).click({ force: true })
        user.fieldValueElement().eq(1).type(tdata.users.orgUnit, { force: true })
        user.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.users.orgUnit)
        user.clearFilterElement().click({ force: true })
    }
    //US
    filterUSOption1() {
        cy.wait(4000)
        user.addFilterElement().scrollIntoView().eq(5).click({ force: true })
        cy.get('[value="Active"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_status"]').should('contain', 'Active')
        cy.get('.reset-button').click({ force: true })
    }
    filterUSOption2() {
        user.addFilterElement().scrollIntoView().eq(5).click({ force: true })
        cy.get('[value="Inactive"]').click({ force: true })
        cy.get('.ag-row-first > [col-id="user_status"]').should('contain', tdata.users.userStatus)
        cy.get('.reset-button').click({ force: true })
    }
    //sorting
    sortingFullName() {
        cy.wait(1000)
        user.optionElement().eq(1).click({ force: true })
        user.sortAscendingElement().click({ force: true })
        user.optionElement().eq(1).click({ force: true })
        user.sortDescendingElement().click({ force: true })
        user.optionElement().eq(1).click({ force: true })
        user.clearSortElement().click({ force: true })
    }
    sortingEmail() {
        cy.wait(1000)
        user.optionElement().eq(2).click({ force: true })
        user.sortAscendingElement().click({ force: true })
        user.optionElement().eq(2).click({ force: true })
        user.sortDescendingElement().click({ force: true })
        user.optionElement().eq(2).click({ force: true })
        user.clearSortElement().click({ force: true })
    }
    sortingPhone() {
        cy.wait(1000)
        user.optionElement().eq(3).click({ force: true })
        user.sortAscendingElement().click({ force: true })
        user.optionElement().eq(3).click({ force: true })
        user.sortDescendingElement().click({ force: true })
        user.optionElement().eq(3).click({ force: true })
        user.clearSortElement().click({ force: true })
    }
    sortingUserRole() {
        cy.wait(1000)
        user.optionElement().eq(4).click({ force: true })
        user.sortAscendingElement().click({ force: true })
        user.optionElement().eq(4).click({ force: true })
        user.sortDescendingElement().click({ force: true })
        user.optionElement().eq(4).click({ force: true })
        user.clearSortElement().click({ force: true })
    }
    sortingOrganizationalUnit() {
        cy.wait(1000)
        user.optionElement().eq(5).scrollIntoView().click({ force: true })
        user.sortAscendingElement().click({ force: true })
        user.optionElement().eq(5).scrollIntoView().click({ force: true })
        user.sortDescendingElement().click({ force: true })
        user.optionElement().eq(5).scrollIntoView().click({ force: true })
        user.clearSortElement().click({ force: true })
    }
    sortingUserStatus() {
        cy.wait(1000)
        user.optionElement().eq(6).scrollIntoView().click({ force: true })
        user.sortAscendingElement().click({ force: true })
        user.optionElement().eq(6).scrollIntoView().click({ force: true })
        user.sortDescendingElement().click({ force: true })
        user.optionElement().eq(6).scrollIntoView().click({ force: true })
        user.clearSortElement().click({ force: true })
    }
}
export default UsersActions 