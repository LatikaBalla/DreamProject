/// <reference types="cypress" />

import { should } from "chai";

const VivacityAdminElements = require("../PageElements/VivacityAdminElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const BuildingsElements = require("../PageElements/BuildingsElements.js")

const tdata = require("../../../testData.json");
const uniqueSeed = Date.now();
export class VivacityAdminActions {
    constructor() {
        globalThis.vadmin = new VivacityAdminElements();
        globalThis.dash = new DashboardElements();
        globalThis.build = new BuildingsElements();
    }
    closeTermsOfServiceWindow() {
      //  dash.termsElement().contains('Agree').click({ force: true })
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
        vadmin.section9Element().should('be.visible')
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
    clickOnIamgeIconMenu() {
        cy.wait(100)
        vadmin.imageIconElement().eq(0).click({ force: true })
    }
    clickOnBuildingMenu() {
        vadmin.optionmenuElement().contains('Buildings').click({ force: true })
    }
    clickOnAddBuilding() {
        cy.contains('Add Building').click({ force: true })
    }
    enterBuildingInformation() {
        build.buildingnameElement().type(tdata.buildings.buildingname, { force: true })
        build.phoneElement().type(tdata.buildings.phone, { force: true })
        build.extensionElement().type(tdata.buildings.extension, { force: true })
        build.defaultbuildingElement().click({ force: true })
        cy.get(tdata.buildings.defaultbuilding).click({ force: true })
        cy.get('input[role="combobox"]').eq(0).type(tdata.buildings.address, { force: true })
        cy.wait(1000)
        cy.get('input[role="combobox"]').eq(0).type('{downArrow}{enter}', { force: true })
        cy.wait(1000)
        cy.get('[data-testid="CheckBoxOutlineBlankIcon"]').scrollIntoView().click({ force: true })
    }
    clickonSaveButton() {
        cy.get(':nth-child(1) > :nth-child(1) > .css-0 > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
        cy.get('.css-k008qs > :nth-child(2)').click({ force: true })
    }
    clickOnUsersMenu() {
        vadmin.optionmenuElement().contains('Users').click({ force: true })
    }
    clickOnAddUsersButton() {
        vadmin.adduserElement().click({ force: true })
    }
    enterUserinformation() {
        vadmin.fullnameElement().clear().should('have.value', '').type(tdata.vivacityAdmin.fullname)
        vadmin.titleUserElement().type(tdata.vivacityAdmin.titleUser)
        vadmin.emailElement().type(uniqueSeed + tdata.vivacityAdmin.email)
        vadmin.phoneElement().type(tdata.vivacityAdmin.phone)
        vadmin.statusElement().click({ force: true })
        cy.get('[data-value="6"]').click({ force: true })
    }
    clickOnAddUserSave() {
        vadmin.submitElement().eq(1).click({ force: true })
    }
    verifyAddedSuccessfully() {
        cy.get('.MuiDialogActions-root > .MuiBox-root > .MuiButtonBase-root').click({ force: true })
    }
    clickOnUpdateSubscriptionMenu() {
        vadmin.optionmenuElement().contains('Update Subscription').click({ force: true })
    }
    selectSubscriptions() {
        cy.get('[title="Open"]').eq(0).click({ force: true })
        cy.contains('Professional').click({ force: true })
    }
    clickOnUpdateSub() {
        cy.get('.css-1tkoiic').click({ force: true })
    }
    verifySubscriptionsUpdated() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.subUpdatemsg)
    }
    clickOnUpdateCreditMenu() {
        vadmin.optionmenuElement().contains('Update Credit').click({ force: true })
    }
    changeCreditno() {
        cy.get('[type="number"]').type('2')
    }
    clickOnUpdatedCredit() {
        cy.get('.css-uhn137').eq(0).click({ force: true })
    }
    verifyCreditUpdated() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.creditmsg)
    }
    clickOnUpdateAccountSiteMenu() {
        vadmin.optionmenuElement().contains('Update Account Site').click({ force: true })
    }
    selectAccountSiteUpdate() {
        cy.get('.MuiSelect-select').click({ force: true })
        cy.get('[data-value="1"]').click({ force: true })
    }
    clickOnUpdateSite() {
        cy.contains('Update Site').click({ force: true })
    }
    verifyAccountSiteUpdated() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.accSitemsg)

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
    filterContainName() {
        cy.wait(5000)
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Viva')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Viva')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ount')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ount')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankName() {
        vadmin.addFilterElement().eq(31).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.accountName, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainCreditL() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('$5000')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '$5000')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankCreditL() {
        vadmin.addFilterElement().eq(32).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.creditLimit, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccCredit() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('$00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '$00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccCredit() {
        vadmin.addFilterElement().eq(33).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.creditLimit, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccBal() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.creditLimit)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('$00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '$00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('00')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '00')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccBal() {
        vadmin.addFilterElement().eq(34).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.creditLimit, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.creditLimit)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainContact() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.phoneNo1)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('877')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '877')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('069')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '069')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankContact() {
        vadmin.addFilterElement().eq(36).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.phoneNo1, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.phoneNo2)
        vadmin.clearFilterElement().click({ force: true })
    }
    //Warranty
    serialNoWarrantySection() {
        vadmin.section4Element().click({ force: true })
    }
    clickOnAddWarranty() {
        vadmin.addWarrantyElement().eq(2).click({ force: true })
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
        cy.wait(5000)
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.warrantyName)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warrantyName)
        cy.get('[row-index="0"]').eq(4).find('[data-testid="EditIcon"]').eq(0).click({ force: true })
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
        cy.contains('Update').click({ force: true })
    }
    verifyWarrantyRecordUpdated() {
        dash.messageElement().should('contain', tdata.vivacityAdmin.updateWarrantymsg)
    }
    clickDeleteIcon() {
        cy.get('[row-index="0"]').eq(4).find('[data-testid="DeleteIcon"]').eq(0).click({ force: true })
    }
    clickConDeleteButton() {
        cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
        // vadmin.conDeletebtnElement().contains('Delete').click({ force: true })
    }
    verifyRecordDeletedWarranty() {
        cy.wait(90)
        dash.messageElement().should('contain', tdata.vivacityAdmin.daleteWarrantymsg)
    }
    filterContainNameWar() {
        cy.wait(5000)
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.warrantyName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warrantyName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.warrantyName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.warrantyName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.warrantyName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warrantyName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.warrantyName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.warrantyName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Test')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Test')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('anty')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'anty')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankNameWar() {
        vadmin.addFilterElement().eq(20).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.warrantyName, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warrantyName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainProvider() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.providerWar)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.providerWar)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.providerWar)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.providerWar)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.providerWar)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.providerWar)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.providerWar)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.providerWar)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Man')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Man')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('urer')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'urer')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankProvider() {
        vadmin.addFilterElement().eq(21).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.providerWar, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.providerWar)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainType() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.warType)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warType)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.warType)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.warType)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.warType)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warType)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.warType)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.warType)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('bas')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'bas')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('se')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'se')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankType() {
        vadmin.addFilterElement().eq(23).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.warType, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.warType)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainSKU() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.sku)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.sku)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.sku)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.sku)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.sku)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.sku)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.sku)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.sku)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('aab')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'aab')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ccc')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ccc')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankSKU() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.sku, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.sku)
        vadmin.clearFilterElement().click({ force: true })
    }
    //ImportSD
    clickOnimportdevice() {
        vadmin.section5Element().click({ force: true })
    }
    filterContainSN() {
        cy.wait(4000)
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.serialno)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').eq(5).should('contain', tdata.vivacityAdmin.serialno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.serialno)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.serialno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.serialno)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.serialno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.serialno)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.serialno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('0F34')
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', '0F34')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('03FB')
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', '03FB')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankSN() {
        vadmin.addFilterElement().eq(24).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.serialno, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.serialno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainBuild() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.builidng)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.builidng)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.builidng)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.builidng)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.builidng)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.builidng)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.builidng)
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.builidng)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Alter')
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', 'Alter')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('rams')
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', 'rams')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankBuild() {
        vadmin.addFilterElement().eq(25).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.builidng, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(100)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.builidng)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsImpNumber() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).clear({ force: true }).type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterGreaterthanImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).clear({ force: true }).type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterGreaterequalImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).clear({ force: true }).type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterLessthanImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).clear({ force: true }).type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterLessequalImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).clear({ force: true }).type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBetweenImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="From"]').type(tdata.vivacityAdmin.importNumber1)
        cy.get('[placeholder="To"]').type(tdata.vivacityAdmin.importNumber)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).clear({ force: true }).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankImpNumber() {
        cy.wait(900)
        vadmin.addFilterElement().eq(26).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(8).click({ force: true })
        vadmin.fieldValueElement().eq(1).clear({ force: true }).type(tdata.vivacityAdmin.importNumber, { force: true })
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainDevice() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.device)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.device)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.device)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.device)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.device)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.device)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.device)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.device)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Apple')
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', 'Apple')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Touch')
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', 'Touch')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankDevice() {
        vadmin.addFilterElement().eq(27).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.device, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.device)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAssetsTag() {
        cy.wait(3000)
        vadmin.addFilterElement().eq(29).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.assetsTag)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.assetsTag)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAssetsTag() {
        vadmin.addFilterElement().eq(29).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.assetsTag)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.assetsTag)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAssetsTag() {
        vadmin.addFilterElement().eq(30).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.assetsTag)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.assetsTag)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAssetsTag() {
        vadmin.addFilterElement().eq(30).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.assetsTag)
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.assetsTag)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAssetsTag() {
        vadmin.addFilterElement().eq(30).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('23-')
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', '23-')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAssetsTag() {
        vadmin.addFilterElement().eq(30).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('084')
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', '084')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAssetsTag() {
        vadmin.addFilterElement().eq(30).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAssetsTag() {
        vadmin.addFilterElement().eq(30).scrollIntoView().click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.assetsTag, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.wait(90)
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.assetsTag)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccount() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.accountno)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountno)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.accountno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountno)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountno)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.accountno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('aab')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'aab')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ccc')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ccc')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccount() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.accountno, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountno)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainCreatedBy() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.createdBy)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.createdBy)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.createdBy)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.createdBy)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.createdBy)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.createdBy)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.createdBy)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.createdBy)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Dre')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Dre')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('eam')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'eam')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankCreatedBy() {
        vadmin.addFilterElement().eq(22).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.createdBy, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.createdBy)
        vadmin.clearFilterElement().click({ force: true })
    }


    filterLoanerStatus1() {
        iht.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Not Set"]').click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Not Set')
        cy.get('.reset-button').click({ force: true })
    }
    filterDeviceStatusOp1() {
        iht.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Active"]').click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Active')
        cy.get('.reset-button').click({ force: true })
    }
    filterDeviceStatusOp2() {
        iht.addFilterElement().eq(3).click({ force: true })
        cy.get('[value="Retired"]').click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Retired')
        cy.get('.reset-button').click({ force: true })
    }
    //Import Serial Device Request
    clickOnimportserialdeviceRequest() {
        vadmin.section11Element().scrollIntoView().click({ Force: true })
    }
    filterContainUserName() {
        cy.wait(4000)
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.userName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.userName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.userName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.userName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.userName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.userName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.userName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.userName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Gadel')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Gadel')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('ator')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'ator')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankUserName() {
        vadmin.addFilterElement().eq(43).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.userName, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.userName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainEmail() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.emailReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.emailReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.emailReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.emailReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('demo')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('com')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'com')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankEmail() {
        vadmin.addFilterElement().eq(44).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.emailReq, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.emailReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccountNumber() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.accNumber)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accNumber)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accNumber)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.accNumber)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accNumber)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accNumber)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accNumber)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.accNumber)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('217')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '217')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('739')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '739')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccountNumber() {
        vadmin.addFilterElement().eq(45).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.accNumber, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accNumber)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainAccountName() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').eq(8).should('not.contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.accountName)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Viva')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Viva')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('count')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'count')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankAccountName() {
        vadmin.addFilterElement().eq(46).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.accountName, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.accountName)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainStatus() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.statusReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.statusReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.statusReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.statusReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.statusReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.statusReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.statusReq)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.statusReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('Rej')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Rej')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('cted')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'cted')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankStatus() {
        vadmin.addFilterElement().eq(48).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.statusReq, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.statusReq)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterContainQuantity() {
        cy.wait(2000)
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        vadmin.fieldValueElement().type(tdata.vivacityAdmin.quantity)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.quantity)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.quantity)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.vivacityAdmin.quantity)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.quantity)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.quantity)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(tdata.vivacityAdmin.quantity)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.quantity)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeginswithQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('159')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '159')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEndswithQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        vadmin.fieldValueElement().eq(0).type('52')
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '52')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        vadmin.fieldValueElement().eq(0).type(' ', { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankQuantity() {
        vadmin.addFilterElement().eq(49).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(7).click({ force: true })
        vadmin.fieldValueElement().eq(1).type(tdata.vivacityAdmin.quantity, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.quantity)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterEqualsRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.requestDate)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.requestDate1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotequalRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.requestDate)
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.vivacityAdmin.requestDate1)
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBeforeRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.requestDate)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterAfterRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.requestDate)
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBetweenRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.vivacityAdmin.requestDate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type('2024-05-19', { force: true })
        vadmin.applyElement().click({ force: true })
        vadmin.clearFilterElement().click({ force: true })
    }
    filterBlankRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.vivacityAdmin.requestDate, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        vadmin.clearFilterElement().click({ force: true })
    }
    filterNotblankRequestDate() {
        vadmin.addFilterElement().eq(47).click({ force: true })
        vadmin.fieldNameElement().eq(9).click({ force: true })
        vadmin.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.vivacityAdmin.requestDate, { force: true })
        vadmin.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.vivacityAdmin.requestDate1)
        vadmin.clearFilterElement().click({ force: true })
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



}
export default VivacityAdminActions 