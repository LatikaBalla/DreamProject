/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class Repair360Actions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.rep = new Repair360Elements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    verifyTitleRepair360() {
        rep.titleElement()
    }
    vivacityRepairCenterTabVisible() {
        rep.vivacityrcElement().should('be.visible')
    }
    inhouseRepairCenterTabVisible() {
        rep.inhousercElement().should('be.visible')
    }
    studentRepairCenterTabVisible() {
        rep.studentrcElement().should('be.visible')
    }
    partclosetTabVisible() {
        rep.partclosetElement().should('be.visible')
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }

}
export default Repair360Actions 