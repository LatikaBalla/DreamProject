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
    googleSyncElement() {
        return cy.get(locator.landing.googleSync, {
            timeout: 30000,
        });
    }
    roleAccessElement() {
        return cy.get(locator.landing.roleAccess, {
            timeout: 30000,
        });
    }
    deviceManElement() {
        return cy.get(locator.landing.deviceMan, {
            timeout: 30000,
        });
    }
    deviceTelemetryElement() {
        return cy.get(locator.landing.deviceTelemetry, {
            timeout: 30000,
        });
    }
    userAccoElement(){
        return cy.get(locator.landing.userAcco, {
            timeout: 30000,
        }); 
    }
    reportCenterElement(){
        return cy.get(locator.landing.reportCenter, {
            timeout: 30000,
        }); 
    }
    reportCenterElement(){
        return cy.get(locator.landing.reportCenter, {
            timeout: 30000,
        }); 
    }
    repair360Element(){
        return cy.get(locator.landing.repair360, {
            timeout: 30000,
        }); 
    }
    googleSyncSectionElement() {
        return cy.get(locator.landing.googleSyncSection, {
            timeout: 30000,
        });
    }
    roleAccessSectionElement() {
        return cy.get(locator.landing.roleAccessSection, {
            timeout: 30000,
        });
    }
    deviceManSectionElement() {
        return cy.get(locator.landing.deviceManSection, {
            timeout: 30000,
        });
    }
    deviceTelemetrySectionElement() {
        return cy.get(locator.landing.deviceTelemetrySection, {
            timeout: 30000,
        });
    }
    userAccoSectionElement(){
        return cy.get(locator.landing.userAccoSection, {
            timeout: 30000,
        }); 
    }
    reportCenterSectionElement(){
        return cy.get(locator.landing.reportCenterSection, {
            timeout: 30000,
        }); 
    }
    reportCenterSectionElement(){
        return cy.get(locator.landing.reportCenterSection, {
            timeout: 30000,
        }); 
    }
    repair360SectionElement(){
        return cy.get(locator.landing.repair360Section, {
            timeout: 30000,
        }); 
    }
    reqAQuoteElement(){
        return cy.get(locator.landing.reqAQuote, {
            timeout: 30000,
        }); 
    }
    productsElement(){
        return cy.get(locator.landing.products, {
            timeout: 30000,
        }); 
    }
    servicesElement(){
        return cy.get(locator.landing.services, {
            timeout: 30000,
        }); 
    }
    contactElement(){
        return cy.get(locator.landing.contact, {
            timeout: 30000,
        }); 
    }
    privacyPolicyElement(){
        return cy.get(locator.landing.privacyPolicy, {
            timeout: 30000,
        }); 
    }
    termsofServiceElement(){
        return cy.get(locator.landing.termsofService, {
            timeout: 30000,
        }); 
    }
    googleDisclosureElement(){
        return cy.get(locator.landing.googleDisclosure, {
            timeout: 30000,
        }); 
    }
    shippingElement(){
        return cy.get(locator.landing.shipping, {
            timeout: 30000,
        }); 
    }
    headerElement(){
        return cy.get(locator.landing.header, {
            timeout: 30000,
        }); 
    }
    footerElement(){
        return cy.get(locator.landing.footer, {
            timeout: 30000,
        }); 
    }
     logoElement(){
        return cy.get(locator.landing.logo, {
            timeout: 30000,
        }); 
    }
    FAQSectionElement(){
        return cy.get(locator.landing.FAQSection, {
            timeout: 30000,
        }); 
    }
    featureSectionElement(){
        return cy.get(locator.landing.featureSection, {
            timeout: 30000,
        }); 
    }
    productSectionElement(){
        return cy.get(locator.landing.productSection, {
            timeout: 30000,
        }); 
    }
    loginElement(){
        return cy.get(locator.landing.login, {
            timeout: 30000,
        });  
    }
} 