/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class VivacityAdminElements {
    titleElement() {
        return cy.get(locator.vivacityAdmin.title, {
            timeout: 30000,
        })
    }
    addnewUserbtnElement() {
        return cy.contains(locator.vivacityAdmin.addnewUserbtn, {
            timeout: 30000,
        })
    }
    titleUserElement() {
        return cy.get(locator.vivacityAdmin.titleUser, {
            timeout: 30000,
        })
    }
    fullnameElement() {
        return cy.get(locator.vivacityAdmin.fullname, {
            timeout: 30000,
        })
    }
    emailElement() {
        return cy.get(locator.vivacityAdmin.email, {
            timeout: 30000,
        })
    }
    phoneElement() {
        return cy.get(locator.vivacityAdmin.phone, {
            timeout: 30000,
        })
    }
    cellnumberElement() {
        return cy.get(locator.vivacityAdmin.cellnumber, {
            timeout: 30000,
        })
    }
    submitbtnElement() {
        return cy.contains(locator.vivacityAdmin.submitbtn, {
            timeout: 30000,
        })
    }
    submitElement() {
        return cy.get(locator.vivacityAdmin.submit, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.vivacityAdmin.search, {
            timeout: 30000,
        })
    }
    userroleElement() {
        return cy.get(locator.vivacityAdmin.userrole, {
            timeout: 30000,
        })
    }
    editsubmitElement() {
        return cy.get(locator.vivacityAdmin.editsubmit, {
            timeout: 30000,
        })
    }
    deletebtnElement() {
        return cy.contains(locator.vivacityAdmin.deletebtn, {
            timeout: 30000,
        })
    }
    conDeletebtnElement() {
        return cy.contains(locator.vivacityAdmin.conDeletebtn, {
            timeout: 30000,
        })
    }
    section1Element() {
        return cy.contains(locator.vivacityAdmin.section1, {
            timeout: 30000,
        })
    }
    section2Element() {
        return cy.contains(locator.vivacityAdmin.section2, {
            timeout: 30000,
        })
    }
    section3Element() {
        return cy.contains(locator.vivacityAdmin.section3, {
            timeout: 30000,
        })
    }
    section4Element() {
        return cy.contains(locator.vivacityAdmin.section4, {
            timeout: 30000,
        })
    }
    section5Element() {
        return cy.contains(locator.vivacityAdmin.section5, {
            timeout: 30000,
        })
    }
    approveElement() {
        return cy.contains(locator.vivacityAdmin.approve, {
            timeout: 30000,
        })
    }
    denyElement() {
        return cy.contains(locator.vivacityAdmin.deny, {
            timeout: 30000,
        })
    }
    addWarrantyElement() {
        return cy.contains(locator.vivacityAdmin.addWarranty, {
            timeout: 30000,
        })
    }
    bulkWarrantyElement() {
        return cy.contains(locator.vivacityAdmin.bulkWarranty, {
            timeout: 30000,
        })
    }
    uploadElement() {
        return cy.contains(locator.vivacityAdmin.upload, {
            timeout: 30000,
        })
    }
    warrantyNameElement() {
        return cy.get(locator.vivacityAdmin.warrantyName, {
            timeout: 30000,
        })
    }
    skuElement() {
        return cy.get(locator.vivacityAdmin.sku, {
            timeout: 30000,
        })
    }
    warrantyTypeElement() {
        return cy.get(locator.vivacityAdmin.warrantyType, {
            timeout: 30000,
        })
    }
    protectionElement() {
        return cy.get(locator.vivacityAdmin.protection, {
            timeout: 30000,
        })
    }
    priceElement() {
        return cy.get(locator.vivacityAdmin.price, {
            timeout: 30000,
        })
    }
    yearsElement() {
        return cy.get(locator.vivacityAdmin.years, {
            timeout: 30000,
        })
    }
    monthsElement() {
        return cy.get(locator.vivacityAdmin.months, {
            timeout: 30000,
        })
    }
    byearElement() {
        return cy.get(locator.vivacityAdmin.byear, {
            timeout: 30000,
        })
    }
    bmonthElement() {
        return cy.get(locator.vivacityAdmin.bmonth, {
            timeout: 30000,
        })
    }
    providerElement() {
        return cy.get(locator.vivacityAdmin.provider, {
            timeout: 30000,
        })
    }
    wdescriptionElement() {
        return cy.get(locator.vivacityAdmin.wdescription, {
            timeout: 30000,
        })
    }
    addAccountElement() {
        return cy.contains(locator.vivacityAdmin.addAccount, {
            timeout: 30000,
        })
    }
    accountNameElement() {
        return cy.get(locator.vivacityAdmin.accountName, {
            timeout: 30000,
        })
    }
    phoneNoElement() {
        return cy.get(locator.vivacityAdmin.phoneNo, {
            timeout: 30000,
        })
    }
    domainElement() {
        return cy.get(locator.vivacityAdmin.domain, {
            timeout: 30000,
        })
    }
    creditLimitElement() {
        return cy.get(locator.vivacityAdmin.creditLimit, {
            timeout: 30000,
        })
    } 
    ihrepairsElement() {
        return cy.get(locator.vivacityAdmin.ihrepairs, {
            timeout: 30000,
        })
    } 
    paymentTermsElement() {
        return cy.get(locator.vivacityAdmin.paymentTerms, {
            timeout: 30000,
        })
    }
    subUpdatebtnElement(){
        return cy.get(locator.vivacityAdmin.subUpdatebtn, {
            timeout: 30000,
        }) 
    }
    subcriptionElement(){
        return cy.get(locator.vivacityAdmin.subcription, {
            timeout: 30000,
        }) 
    }
    updateSubcriptionElement(){
        return cy.contains(locator.vivacityAdmin.updateSubcription, {
            timeout: 30000,
        }) 
    } 
    addbtnElement(){
        return cy.get(locator.vivacityAdmin.addbtn, {
            timeout: 30000,
        }) 
    }
    availableAccountElement(){
        return cy.get(locator.vivacityAdmin.availableAccount, {
            timeout: 30000,
        }) 
    }
}
