/// <reference types="cypress" />
const VivacityRepairCenterElements = require("../PageElements/VivacityRepairCenterElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class VivacityRepairCenterActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.viva = new VivacityRepairCenterElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        //dash.termsElement().contains('Agree').click({ force: true })
    }
    verifyTitleVivacityRepairCenter() {
        viva.titleElement()
    }
    HowWorksTabVisible() {
        viva.howWorksElement().should('be.visible')
    }
    NonwarrantyRepairsTabVisible() {
        viva.nonWarrantyRepairsElement().should('be.visible')
    }
    vivaRepairTicketsTabVisible() {
        viva.vivaRepairTicketsElement().should('be.visible')
    }
    repairBoxesTabVisible() {
        viva.repairBoxesElement().should('be.visible')
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
}
export default VivacityRepairCenterActions 