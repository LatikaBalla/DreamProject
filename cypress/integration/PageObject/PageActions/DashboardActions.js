/// <reference types="cypress" />
const DashboardElements = require("../PageElements/DashboardElements.js")


export class DashboardActions {
    constructor() {
        globalThis.dash = new DashboardElements();
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
    clickOnAddNewbutton() {
        dash.addnewbtnElement().click()
    }
    enterTitle() {
        dash.titleElement().type('Mr', { force: true })
    }
    enterFullname() {
        dash.fullnameElement().type('Demo Test1', { force: true })
    }
    enterEmail() {
        const uniqueSeed = Date.now();
        dash.emailElement().type(uniqueSeed+'@gmail.com', { force: true })
    }
    enterPhone() {
        dash.phoneElement().type('1231231231', { force: true })
    }
    enterCellNumber() {
        dash.cellnumberElement().type('1231234121', { force: true })
    }
    selectUserRole() {
        dash.userroleElement().click({ force: true })
        cy.get('[data-value="1"]').click({ force: true })

    }
    clickOnASaveButton() {
        dash.savebtnElement().should('contain', "Save").click({ force: true })
    }
    verifyNewContactTitle() {
        dash.newContactTitleElement().should('be.visible')
    }
    verifyRecordTable(){
        cy.reload()
        cy.wait(5000)
  cy.get('tbody tr').eq(0).find('td').eq(0).should('contain','@gmail.com')

    }
    clickOnEditIcon(){
        cy.get('[data-testid="EditOutlinedIcon"]').eq(0).click()
    }
}

export default DashboardActions 