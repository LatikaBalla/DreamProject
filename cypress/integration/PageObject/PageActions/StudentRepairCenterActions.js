/// <reference types="cypress" />
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const Repair360Elements = require("../PageElements/Repair360Elements.js")

export class StudentRepairCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.rep = new StudentRepairCenterElements();
        globalThis.rep1 = new Repair360Elements();

    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    verifyTitleStudentRepairCenter() {
        rep.titleElement()
    }
    clickOnStudentRepairCenter() {
        rep1.studentrcElement().click({ force: true })
    }
    srcRepairTicketsTabVisible() {
        rep.srcRepairTicketsElement().should('be.visible')
    }
    srcFacilitatorsTabVisible() {
        rep.srcFacilitatorsElement().should('be.visible')
    }
    studentsTabVisible() {
        rep.srcStudentsElement().should('be.visible')
    }
    clickOnRepair360() {
        dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }

}

export default StudentRepairCenterActions 