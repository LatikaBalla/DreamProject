/// <reference types="cypress" />
const LandingElements = require("../PageElements/LandingElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class LandingActions {
    constructor() {
        globalThis.lan = new LandingElements();
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    verifyTitle() {
        lan.titleElement().should('be.visible')
    }
    logoVisible() {
        lan.logoElement().should('be.visible')
    }
    headerVisible() {
        lan.headerElement().should('be.visible')
    }
    footerVisible() {
        lan.footerElement().should('be.visible')
    }
    clickOnFAQTab() {
        lan.FAQtabElement().click({ force: true })
    }
    verifyFAQSection() {
        lan.FAQSectionElement().should('be.visible')
    }
    clickOnFeatureTab() {
        lan.featurestabElement().click({ force: true })
    }
    verifyFeatureSection() {
        lan.featureSectionElement().should('be.visible')
    }
    clickOnProductTab() {
        lan.producttabElement().click({ force: true })
    }
    verifyProductSection() {
        lan.productSectionElement().should('be.visible')
    }
    clickOngoogleSync() {
        lan.googleSyncElement().click({ force: true })
    }
    redrectTogoogleSync() {
        lan.googleSyncSectionElement().should('be.visible')
    }
    clickOnroleAccess() {
        lan.roleAccessElement().click({ force: true })
    }
    redrectToroleAccess() {
        lan.roleAccessSectionElement().should('be.visible')
    }
    clickOndeviceMan() {
        lan.deviceManElement().click({ force: true })
    }
    redrectTodeviceMan() {
        lan.deviceManSectionElement().should('be.visible')
    }
    clickOndeviceTelemetry() {
        lan.deviceTelemetryElement().click({ force: true })
    }
    redrectTodeviceTelemetry() {
        lan.deviceTelemetrySectionElement().should('be.visible')
    }
    clickOnuserAcco() {
        lan.userAccoElement().click({ force: true })
    }
    redrectTouserAcco() {
        lan.userAccoSectionElement().should('be.visible')
    }
    clickOnreportCenter() {
        lan.reportCenterElement().click({ force: true })
    }
    redrectToreportCenter() {
        lan.reportCenterSectionElement().should('be.visible')
    }
    clickOnrepair360() {
        lan.repair360Element().click({ force: true })
    }
    redrectTorepair360() {
        lan.repair360SectionElement().should('be.visible')
    }
    clickreqAQuote() {
        lan.reqAQuoteElement().click({ force: true })
    }
    clickOncontact() {
        lan.contactElement().click({ force: true })
    }
    clickOnproducts() {
        lan.productsElement().click({ force: true })
    }
    clickOnservices() {
        lan.servicesElement().click({ force: true })
    }
    clickOncontact() {
        lan.contactElement().click({ force: true })
    }
    clickOnprivacyPolicy() {
        lan.privacyPolicyElement().click({ force: true })
    }
    clickOntermsofService() {
        lan.termsofServiceElement().click({ force: true })
    }
    clickOngoogleDisclosure() {
        lan.googleDisclosureElement().click({ force: true })
    }
    clickOnshipping() {
        lan.shippingElement().click({ force: true })
    }
}
export default LandingActions