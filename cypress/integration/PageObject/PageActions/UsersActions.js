/// <reference types="cypress" />
const UsersElements = require("../PageElements/UsersElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

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

}
export default UsersActions 