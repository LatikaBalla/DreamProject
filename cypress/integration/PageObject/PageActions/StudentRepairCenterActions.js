/// <reference types="cypress" />
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const Repair360Elements = require("../PageElements/Repair360Elements.js")

export class StudentRepairCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.repc = new StudentRepairCenterElements();
        globalThis.rep = new Repair360Elements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        // dash.termsElement().contains('Agree').click({ force: true })
    }
    verifyTitleStudentRepairCenter() {
        repc.titleElement()
    }
    clickOnStudentRepairCenter() {
        rep.studentrcElement().click({ force: true })
    }
    srcRepairTicketsTabVisible() {
        repc.srcRepairTicketsElement().should('be.visible')
    }
    srcFacilitatorsTabVisible() {
        repc.srcFacilitatorsElement().should('be.visible')
    }
    studentsTabVisible() {
        repc.srcStudentsElement().should('be.visible')
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
}
export default StudentRepairCenterActions 