/// <reference types="cypress" />

import { should } from "chai";

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
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnVivacityAdmin() {
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
        vadmin.section5Element().scrollIntoView().should('be.visible')
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
    employeeManagment() {
        vadmin.section10Element().should('be.visible')
    }
    clickOnallPaidSubcription() {
        vadmin.section1Element().click({ force: true })
    }
    clickOnAdminUser() {
        vadmin.section3Element().click({ force: true })
    }
    importserialdeviceRequest() {
        vadmin.section11Element().scrollIntoView().should('be.visible')
    }
    trialPaidSubscriptions() {
        vadmin.section12Element().scrollIntoView().should('be.visible')
    }
    importPartsCloset() {
        vadmin.section13Element().scrollIntoView().should('be.visible')
    }
    tableSubscriptionVisible() {
        cy.get('.css-1owb465').should('be.visible')
    }
    //Employee Management 
    clickOnEmployeeManagment() {
        cy.wait(2000)
        vadmin.section10Element().click({ force: true })
    }
    clickOnCreateNewEmp() {
        cy.wait(1000)
        vadmin.AddEmployeeElement().eq(1).click({ force: true })
    }
    enterFullnameEmp() {
        vadmin.fullnameElement().type(tdata.vivacityAdmin.fullname)
    }
    enterEmailEmp() {
        vadmin.emailElement().type(uniqueSeed + '2' + tdata.vivacityAdmin.email)
    }
    selectUserStatus() {
        vadmin.statusElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.status).click({ force: true })
    }
    verifyEmployeeAdded() {
        cy.wait(5000)
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.fullname)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullname)
    }
    clickConEditEmp() {
        cy.get('[col-id="button"]').find('[data-testid="EditIcon"]').eq(0).click({ force: true })
    }
    editUserStatusEmp() {
        vadmin.statusElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.editStatus).click({ force: true })
    }
    editFullnameEmp() {
        vadmin.fullnameElement().clear().should('have.value', '').type(tdata.vivacityAdmin.fullname)
    }
    clickOneditSubmitButton() {
        cy.get('form > .MuiButton-containedPrimary').click({ force: true })
    }
    verifyEmpUpdated() {
        // cy.contains('User has been updated').should('be.visible')
        // cy.get('.MuiButton-containedError').click({ force: true })
    }
    clickOnExportEmp() {
        vadmin.exportElement().eq(2).click({ force: true })
    }
    //fn
    filtercontainFN() {
        cy.wait(4000)
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.fullname)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullname)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.fullname)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.fullname)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.fullname)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullname)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.fullname)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.fullname)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Dream')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dream')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Admin')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Admin')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankFN() {
        vadmin.addFilterElement().eq(15).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.fullname, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullname)
        vadmin.clearFilterElement().click({ force: true })
    }
    //email
    filtercontainE() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('mike')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'mike')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('tech.com')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tech.com')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankE() {
        vadmin.addFilterElement().eq(17).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.emailid, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    //phone
    filtercontainP() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('877')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '877')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('069')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '069')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankP() {
        vadmin.addFilterElement().eq(18).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.phoneNo1, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    //Cdate
    filterEqualsCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.createdDate)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.createdDate1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.createdDate)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.createdDate1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeforeCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.createdDate)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterAfterCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.createdDate)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBetweenCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.createdDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.vivacityAdmin.createdDate, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankCDate() {
        vadmin.addFilterElement().eq(16).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.vivacityAdmin.createdDate, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.createdDate1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filtercontainEmpStatus() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.empStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.empStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.empStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Act')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Act')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ive')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ive')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankEmpStatus() {
        vadmin.addFilterElement().eq(19).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.empStatus, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    sortingFullName() {
        cy.wait(1000)
        vadmin.optionElement().eq(20).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(20).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(20).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingEmail() {
        cy.wait(1000)
        vadmin.optionElement().eq(22).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(22).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(22).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingPhone() {
        cy.wait(1000)
        vadmin.optionElement().eq(23).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(23).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(23).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingEmployeeStatus() {
        cy.wait(1000)
        vadmin.optionElement().eq(21).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(21).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(21).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    //admin user
    filtercontainFNadmin() {
        cy.wait(5000)
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.fullnameAdmin)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullnameAdmin)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.fullnameAdmin)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.fullnameAdmin)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.fullnameAdmin)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullnameAdmin)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.fullnameAdmin)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.fullnameAdmin)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Nol')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Nol')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('cker')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'cker')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankFNadmin() {
        vadmin.addFilterElement().eq(10).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.fullnameAdmin, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.fullnameAdmin)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainUStatus() {
        cy.wait(4000)
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.UserStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.UserStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.UserStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.UserStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.UserStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.UserStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.UserStatus)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.UserStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Act')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Act')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ive')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ive')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankUStatus() {
        vadmin.addFilterElement().eq(12).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.UserStatus, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.UserStatus)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainURole() {
        cy.wait(4000)
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.UserRole)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.UserRole)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.UserRole)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.UserRole)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.UserRole)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.UserRole)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.UserRole)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.UserRole)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Act')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Act')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ive')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ive')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankURole() {
        vadmin.addFilterElement().eq(14).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.UserRole, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.UserRole)
        vadmin.clearFilterElement().click({ force: true })
    }
    filtercontainEadmin() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailid)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('mike')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'mike')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('tech.com')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'tech.com')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankEadmin() {
        vadmin.addFilterElement().eq(11).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.emailid, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailid)
        vadmin.clearFilterElement().click({ force: true })
    }
    //phone
    filtercontainPadmin() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('877')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '877')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('069')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '069')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankPadmin() {
        vadmin.addFilterElement().eq(13).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.phoneNo1, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo1)
        vadmin.clearFilterElement().click({ force: true })
    }
    sortingFullNameAdmin() {
        cy.wait(1000)
        vadmin.optionElement().eq(14).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(14).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(14).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingEmailAdmin() {
        cy.wait(1000)
        vadmin.optionElement().eq(15).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(15).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(15).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingPhoneAdmin() {
        cy.wait(1000)
        vadmin.optionElement().eq(17).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(17).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(17).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingUserStatus() {
        cy.wait(1000)
        vadmin.optionElement().eq(16).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(16).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(16).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    sortingUserRole() {
        cy.wait(1000)
        vadmin.optionElement().eq(18).click({ force: true })
        vadmin.sortAscendingElement().click({ force: true })
        vadmin.optionElement().eq(18).click({ force: true })
        vadmin.sortDescendingElement().click({ force: true })
        vadmin.optionElement().eq(18).click({ force: true })
        vadmin.clearSortElement().click({ force: true })
    }
    clickOnNewAdmin() {
        cy.wait(2000)
        vadmin.addnewAdminElement().eq(0).click({ force: true })
    }
    enterTitle() {
        vadmin.titleUserElement().type(tdata.vivacityAdmin.titleUser)
    }
    enterFullname() {
        vadmin.fullnameElement().type(tdata.vivacityAdmin.fullname)
    }
    enterEmailadmin() {
        cy.wait(200)
        cy.get('[role="combobox"]').eq(10).click({ force: true })
        cy.get('#:r2r:-option-0').click({ force: true })
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
    verifyRecordTableAdmin() {
        //dash.messageElement().should('contain', tdata.vivacityAdmin.createAdminmsg)
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
    editUserRoleUser() {
        cy.get('#mui-component-select-role').click({ force: true })
        cy.get(tdata.users.editUserRole).click({ force: true })
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
    approveDenyRequest() {
        cy.get('.css-1owb465').eq(0).find('tbody tr').eq(0).find('td').eq(5).scrollIntoView().contains("Approve").click({ force: true })
        cy.get('.css-x5rkm6').click({ force: true })
    }
    verifyRequest() {

    }
    // Account Managment
    clickOnAccountMangment() {
        vadmin.section6Element().click({ force: true })
    }
    clickOnAddAccount() {
        vadmin.addAccountElement().eq(3).click({ force: true })
    }
    enterAccName() {
        vadmin.accountNameElement().type(tdata.vivacityAdmin.accountName, { force: true })
    }
    enterPhoneNo() {
        vadmin.phoneNoElement().type(tdata.vivacityAdmin.phoneNo, { force: true })
    }
    enterEmailAcc() {
        vadmin.emailElement().type(uniqueSeed + tdata.vivacityAdmin.email)
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
    selectAccountSite() {
        vadmin.accSiteElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.accSite).click({ force: true })
    }
    enterNetsuiteId() {
        vadmin.netsuiteidElement().type(tdata.vivacityAdmin.netsuiteid)
    }
    selectAccountManager() {
        vadmin.accManagerElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.accManager).click({ force: true })
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
        cy.get('[role="combobox"]').eq(6).click({ force: true })
        cy.get(tdata.vivacityAdmin.subcription).click({ force: true })
    }
    clickOnUpdateSub() {
        cy.get('[type="submit"]').contains('Update Subcription').click({ force: true })
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
        vadmin.addbtnElement().click({ force: true })
    }
    verifyAddAccUser() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.addAccUsermsg)
    }
    filterContainName() {
        cy.wait(5000)
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Viva')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Viva')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ount')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ount')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.accountName, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainCreditL() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('$100')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '$100')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.creditLimit, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccCredit() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('$00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '$00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.creditLimit, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccBal() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('$00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '$00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.creditLimit, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainContact() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('877')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '877')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('069')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '069')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankContact() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(10).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.phoneNo1, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }

    // filtercontainName() {
    //     cy.wait(2000)
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(0).click({ force: true })
    //     vadmin.fieldValueElement().type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterDoesnotcontainName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(1).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterEqualsName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(2).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterNotequalName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(3).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterBeginswithName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(4).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type('Act')
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', 'Act')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterEndswithName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(5).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type('ive')
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', 'ive')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterBlankName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(6).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(' ', { force: true })
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', ' ')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterNotblankName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(7).click({ force: true })
    //     vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.empStatus, { force: true })
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }

    // filtercontainName() {
    //     cy.wait(2000)
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(0).click({ force: true })
    //     vadmin.fieldValueElement().type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterDoesnotcontainName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(1).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterEqualsName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(2).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterNotequalName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(3).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterBeginswithName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(4).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type('Act')
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', 'Act')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterEndswithName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(5).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type('ive')
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', 'ive')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterBlankName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(6).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(' ', { force: true })
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', ' ')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterNotblankName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(7).click({ force: true })
    //     vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.empStatus, { force: true })
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }

    // filtercontainName() {
    //     cy.wait(2000)
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(0).click({ force: true })
    //     vadmin.fieldValueElement().type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterDoesnotcontainName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(1).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterEqualsName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(2).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterNotequalName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(3).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.empStatus)
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterBeginswithName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(4).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type('Act')
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', 'Act')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterEndswithName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(5).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type('ive')
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', 'ive')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterBlankName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(6).click({ force: true })
    //     vadmin.fieldValueElement().eq(0).type(' ', { force: true })
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', ' ')
    //     vadmin.clearFilterElement().click({ force: true })
    // }
    // filterNotblankName() {
    //     vadmin.addFilterElement().eq(19).click({ force: true })
    //     vadmin.fieldNameElement().eq(10).click({ force: true })
    //     vadmin.fieldOpElement().eq(7).click({ force: true })
    //     vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.empStatus, { force: true })
    //     vadmin.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.empStatus)
    //     vadmin.clearFilterElement().click({ force: true })
    // }




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
    clickOnSubmitWar() {
        //  vadmin.submitbtnElement().click({ force: true })
        cy.get('form.MuiBox-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-0 > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
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
        vadmin.providerElement().click({ force: true })
        cy.get(tdata.vivacityAdmin.editprovider).click({ force: true })
    }
    editWDescription() {
        vadmin.wdescriptionElement().clear({ force: true }).should('have.value', '').type(tdata.vivacityAdmin.editwdescription), { force: true }
    }
    clickOnUpdateButton() {
        //  cy.contains('Update').click({ force: true })
        cy.get('form.MuiBox-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-0 > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
        // cy.get(':nth-child(1) > .css-0 > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
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


    clickOnAllUser() {
        vadmin.section8Element().click({ force: true })
    }
    clickOnCreateNewStudentAllUser() {
        cy.get('.MuiAccordionDetails-root > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true })
        // vadmin.addnewUserbtnElement().eq(1).click({ force: true })
    }
    verifyStudentAddedAllUser() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.createStudentmsg)
    }
    enterSearchValueAllUser() {
        cy.get('.css-1kn7lev').eq(4).type(tdata.vivacityAdmin.fullname + '{enter}', { force: true })
        // vadmin.searchElement().eq(0).type(tdata.vivacityAdmin.fullname + '{enter}', { force: true })
    }
    verifySearchResultAllUser() {
        cy.get('.css-1owb465').eq(4).find('tbody tr').eq(0).find('td').eq(0).should('contain', tdata.vivacityAdmin.fullname)
    }
    clickOnEditButtonAllUser() {
        cy.get('.css-1owb465').eq(4).find('tbody tr').eq(0).find('td').eq(6).scrollIntoView().contains("Edit").click({ force: true })
    }
    clickDeleteButtonAllUser() {
        cy.wait(2000)
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
        cy.get('.css-11w1fmz').find('tbody tr').eq(1).find('td').eq(4).scrollIntoView().contains("Approve").click({ force: true })
        cy.get('[type="button"]').contains('Approve').click({ Force: true })
    }

    clickOnRepairTicketUnit() {
        vadmin.section9Element().click({ force: true })
    }
    clickOnRepair360btn() {
        vadmin.repairbtnElement().contains("Repair 360 page").click({ force: true })
    }


    searchTicketNumber() {
        cy.get('[type="checkbox"]').click({ force: true })
        vadmin.searchboxElement().eq(4).click({ force: true })
        vadmin.ticketnumberElement().click({ force: true })
        vadmin.searchtxtElement().eq(2).clear().type(tdata.repairTickets.ticketnumber + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('.css-1dj5rr2').eq(2).find('tr td').eq(1).should('contain', tdata.repairTickets.ticketnumber)
        vadmin.searchtxtElement().eq(2).clear()
        cy.wait(2000)
    }
    searchRepairType() {
        vadmin.searchboxElement().eq(4).click({ force: true })
        vadmin.repairtypeElement().click({ force: true })
        vadmin.searchtxtElement().eq(2).clear().type(tdata.repairTickets.repairtype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('.css-1dj5rr2').eq(2).find('tr td').eq(2).should('contain', tdata.repairTickets.repairtype)
        vadmin.searchtxtElement().eq(2).clear()
        cy.wait(2000)
    }
    searchFailureType() {
        vadmin.searchboxElement().eq(4).click({ force: true })
        vadmin.failuretypeElement().click({ force: true })
        vadmin.searchtxtElement().eq(2).clear().type(tdata.repairTickets.failuretype + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('.css-1dj5rr2').eq(2).find('tr td').eq(3).should('contain', tdata.repairTickets.failuretype)
        vadmin.searchtxtElement().eq(2).clear()
        cy.wait(2000)
    }
    clickOnMoreFilter() {
        vadmin.addFilterElement().eq(2).click({ force: true })
    }
    selectFilterTicketNumber() {
        vadmin.fieldNameElement().select(1).invoke("val").should("eq", "ticket_number")
        vadmin.fieldOpElement().select('Does Not Contain', { force: true })
        vadmin.fieldValueElement().type(tdata.repairTickets.ticketnumber)
        vadmin.applyElement().click({ force: true })
        cy.get('.css-1dj5rr2').eq(2).find('tr td').eq(1).should('not.contain', tdata.repairTickets.ticketnumber)
    }
    clickOnimportdevice() {
        vadmin.section5Element().click({ force: true })
    }
    searchSearialNo() {
        cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
        //  vadmin.searchboxElement().eq(5).click({ force: true })
        vadmin.searialnoElement().click({ force: true })
        vadmin.searchtxtElement().eq(1).clear().type(tdata.vivacityAdmin.searialno + '{enter}', { force: true })
        cy.wait(2000)
        cy.get('.css-1dj5rr2').eq(1).find('tr td').eq(1).should('contain', tdata.vivacityAdmin.searialno)
        // vadmin.searchtxtElement().eq(1).clear()
    }
    searchAccount() {
        vadmin.searchboxElement().eq(4).click({ force: true })
        vadmin.accountnoElement().click({ force: true })
        vadmin.searchtxtElement().eq(1).clear().type(tdata.vivacityAdmin.accountno + '{enter}', { force: true })
        cy.wait(1000)
        cy.get('.css-1dj5rr2').eq(1).find('tr td').eq(16).scrollIntoView().should('contain', tdata.vivacityAdmin.accountno)
        vadmin.searchtxtElement().eq(1).clear()
        cy.wait(2000)
    }
    searchDevice() {
        vadmin.searchboxElement().eq(4).click({ force: true })
        vadmin.deviceElement().click({ force: true })
        vadmin.searchtxtElement().eq(1).clear().type(tdata.vivacityAdmin.device + '{enter}', { force: true })
        cy.get('.css-1dj5rr2').eq(1).find('tr td').eq(4).should('contain', tdata.vivacityAdmin.device)
        vadmin.searchtxtElement().eq(1).clear()
        cy.wait(2000)
    }
    filterSearialNo() {
        cy.get('[data-testid="Filters"]').eq(1).click({ force: true })
        vadmin.fieldNameElement().select(1).invoke("val").should("eq", "serial_number")
        vadmin.fieldOpElement().select('Does Not Contain', { force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.searialno)
        vadmin.applyElement().click({ force: true })
        cy.get('.css-1dj5rr2').eq(1).find('tr td').eq(1).should('not.contain', tdata.vivacityAdmin.searialno)
    }
    filterAccount() {
        cy.get('[data-testid="Filters"]').eq(1).click({ force: true })
        vadmin.fieldNameElement().select(16).invoke("val").should("eq", "account")
        vadmin.fieldOpElement().select('Does Not Contain', { force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.accountno)
        vadmin.applyElement().click({ force: true })
        cy.get('.css-1dj5rr2').eq(1).find('tr td').eq(1).should('not.contain', tdata.vivacityAdmin.accountno)
    }
    filterDevice() {
        cy.get('[data-testid="Filters"]').eq(1).click({ force: true })
        vadmin.fieldNameElement().select(4).invoke("val").should("eq", "device")
        vadmin.fieldOpElement().select('Does Not Contain', { force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.device)
        vadmin.applyElement().click({ force: true })
        cy.get('.css-1dj5rr2').eq(1).find('tr td').eq(1).should('not.contain', tdata.vivacityAdmin.device)
    }
}
export default VivacityAdminActions 