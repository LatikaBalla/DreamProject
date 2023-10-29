/// <reference types="cypress" />

const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const SrcFacilitatorsElements = require("../PageElements/SrcFacilitatorsElements.js")
const StudentRepairCenterElements = require("../PageElements/StudentRepairCenterElements.js")

export class SrcFacilitatorsActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.sf = new SrcFacilitatorsElements();
        globalThis.mf1 = new StudentRepairCenterElements()
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
       // dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnStudentRepairCenterTab() {
        mdev.studentrcElement().click({ force: true })
    }
    clickOnSrcFacilitatorsTab() {
        mf1.srcFacilitatorsElement().click({ force: true })
    }
    verifyTitle() {
        sf.titleElement().should('be.visible')
    }
    filtersVisible() {
        sf.filtersElement().should('be.visible')
    }
    tableVisible() {
        sf.tableElement().should('be.visible')
    }
    clickOnViewButton(){
        cy.wait(2000)
        cy.get('tbody tr').eq(0).find('td').eq(4).contains("View").click({force:true})
    }
    verifyViewDetails(){
sf.detailsRoleElement()
    }

}
export default SrcFacilitatorsActions 