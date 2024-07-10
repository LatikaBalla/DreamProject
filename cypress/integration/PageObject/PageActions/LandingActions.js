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
        lan.featureSectionElement().eq(0).should('be.visible')
    }
    clickOnProductTab() {
        lan.producttabElement().click({ force: true })
    }
    verifyProductSection() {
        lan.productSectionElement().should('be.visible')
    }
    clickOngoogleSync() {
        lan.featureFooterElement().eq(0).click({ force: true })
    }
    redrectTogoogleSync() {
        lan.googleAdminSectionElement().should('be.visible')
    }
    clickOnroleAccess() {
        lan.featureFooterElement().eq(1).click({ force: true })
    }
    redrectToroleAccess() {
        lan.streamProcessSectionElement().should('be.visible')
    }
    clickOndeviceMan() {
        lan.featureFooterElement().eq(2).click({ force: true })
    }
    redrectTodeviceMan() {
        lan.customizationSectionElement().should('be.visible')
    }
    clickOndeviceTelemetry() {
        lan.featureFooterElement().eq(3).click({ force: true })
    }
    redrectTodeviceTelemetry() {
        lan.customerSupportSectionElement().should('be.visible')
    }
    clickOnuserAcco() {
        lan.featureFooterElement().eq(4).click({ force: true })
    }
    redrectTouserAcco() {
        lan.userUpdatesSectionElement().should('be.visible')
    }
    clickOnreportCenter() {
        lan.featureFooterElement().eq(5).click({ force: true })
    }
    redrectToreportCenter() {
        lan.resourceLibrarySectionElement().should('be.visible')
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