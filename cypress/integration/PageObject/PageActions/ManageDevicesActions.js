/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")

export class ManageDevicesActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.mdev = new ManageDevicesElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
      dash.termsElement().contains('Dismiss').click({ force: true })
      cy.wait(5000)
      cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    verifyTitle() {
        mdev.titleElement()
    }
    myFleetTabVisible() {
        mdev.myfleetElement().should('be.visible')
    }
    loanerManagementTabVisible() {
        mdev.loanerManagementElement().should('be.visible')
    }
    organizationUploadedAssetsTabVisible() {
        mdev.orgUploadAssestsElement().should('be.visible')
    }
    importSerialDevicesTabVisible() {
        mdev.serialdevicesElement().should('be.visible')
    }
    clickOnManageDevices() {
        dash.managedevicesElement().click({ force: true })
    }
}

export default ManageDevicesActions 