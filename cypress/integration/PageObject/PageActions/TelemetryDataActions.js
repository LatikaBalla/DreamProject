/// <reference types="cypress" />
const TelemetryDataElements = require("../PageElements/TelemetryDataElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const ReportCenterElements = require("../PageElements/ReportCenterElements.js")
const tdata = require("../../../testData.json");
export class TelemetryDataActions {
    constructor() {
        globalThis.td = new TelemetryDataElements();
        globalThis.dash = new DashboardElements();
        globalThis.repc = new ReportCenterElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(3000)
       // dash.termsElement().contains('Agree').click({ force: true })
    }
    clickOnTelemetryData() {
        repc.telemetrydElement().click({ force: true })
    }
    deviceInfoSectionVisible() {
        td.datasectionElement().eq(0).should('be.visible')
    }
    TelemetryDataSectionVisible() {
        td.datasectionElement().eq(0).should('be.visible')
    }
    dataGraphVisible() {
        td.datasectionElement().eq(1).should('be.visible')
    }
    selectBatteryCharge() {
        td.dropdownElement().click({ force: true })
        cy.get('[role="listbox"]').contains(tdata.telemetryData.BatteryCharge).click({ force: true })
    }
    selectOSLastUpdate() {
        td.dropdownElement().click({ force: true })
        cy.get('[role="listbox"]').contains(tdata.telemetryData.OSLastUpdate).click({ force: true })
    }
    selectOSNewPlatform() {
        td.dropdownElement().click({ force: true })
        cy.get('[role="listbox"]').contains(tdata.telemetryData.OSNewPlatform).click({ force: true })
    }
    clickOnRetrievebutton() {
        td.retrievebtnElement().contains('Retrieve Telemetry Data').click({ force: true })
    }
    verifyBatteryChargeData() {
        td.deviceTableElement().eq(0).should('be.visible')
        td.graphDataElement().eq(1).should('be.visible')
    }
    verifyOSLastUpdateData() {
        td.deviceTableElement().eq(0).should('be.visible')
        td.graphDataElement().eq(1).should('be.visible')
    }
    verifyOSNewPlatformData() {
        td.deviceTableElement().eq(0).should('be.visible')
        td.graphDataElement().eq(1).should('be.visible')
    }
}
export default TelemetryDataActions