/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class FeaturesElements {
    titleElement() {
        return cy.contains(locator.landing.title, {
            timeout: 30000,
        });
    }
    producttabElement() {
        return cy.contains(locator.landing.producttab, {
            timeout: 30000,
        });
    }
    featurestabElement() {
        return cy.contains(locator.landing.featurestab, {
            timeout: 30000,
        });
    }
    FAQtabElement() {
        return cy.contains(locator.landing.FAQtab, {
            timeout: 30000,
        });
    }
    featureFooterElement() {
        return cy.get(locator.landing.featureFooter, {
            timeout: 30000,
        });
    }
    googleAdminSectionElement() {
        return cy.get(locator.landing.googleAdminSection, {
            timeout: 30000,
        });
    }
    streamProcessSectionElement() {
        return cy.get(locator.landing.streamProcessSection, {
            timeout: 30000,
        });
    }
    customizationSectionElement() {
        return cy.get(locator.landing.customizationSection, {
            timeout: 30000,
        });
    }
    customerSupportSectionElement() {
        return cy.get(locator.landing.customerSupportSection, {
            timeout: 30000,
        });
    }
    userUpdatesSectionElement() {
        return cy.get(locator.landing.userUpdatesSection, {
            timeout: 30000,
        });
    }
    resourceLibrarySectionElement() {
        return cy.get(locator.landing.resourceLibrarySection, {
            timeout: 30000,
        });
    }
    reqAQuoteElement() {
        return cy.get(locator.landing.reqAQuote, {
            timeout: 30000,
        });
    }
    productsElement() {
        return cy.get(locator.landing.products, {
            timeout: 30000,
        });
    }
    servicesElement() {
        return cy.get(locator.landing.services, {
            timeout: 30000,
        });
    }
    contactElement() {
        return cy.get(locator.landing.contact, {
            timeout: 30000,
        });
    }
    privacyPolicyElement() {
        return cy.get(locator.landing.privacyPolicy, {
            timeout: 30000,
        });
    }
    termsofServiceElement() {
        return cy.get(locator.landing.termsofService, {
            timeout: 30000,
        });
    }
    googleDisclosureElement() {
        return cy.get(locator.landing.googleDisclosure, {
            timeout: 30000,
        });
    }
    headerElement() {
        return cy.get(locator.landing.header, {
            timeout: 30000,
        });
    }
    footerElement() {
        return cy.get(locator.landing.footer, {
            timeout: 30000,
        });
    }
    logoElement() {
        return cy.get(locator.landing.logo, {
            timeout: 30000,
        });
    }
    FAQSectionElement() {
        return cy.get(locator.landing.FAQSection, {
            timeout: 30000,
        });
    }
    featureSectionElement() {
        return cy.get(locator.landing.featureSection, {
            timeout: 30000,
        });
    }
    productSectionElement() {
        return cy.get(locator.landing.productSection, {
            timeout: 30000,
        });
    }
    loginElement() {
        return cy.get(locator.landing.login, {
            timeout: 30000,
        });
    }
} 