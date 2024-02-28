/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class VivacityAdminElements {
    titleElement() {
        return cy.get(locator.vivacityAdmin.title, {
            timeout: 30000,
        })
    }
    addnewAdminElement(){
        return cy.contains(locator.vivacityAdmin.addnewAdmin, {
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
    section6Element() {
        return cy.contains(locator.vivacityAdmin.section6, {
            timeout: 30000,
        })
    }
    section7Element() {
        return cy.contains(locator.vivacityAdmin.section7, {
            timeout: 30000,
        })
    }
    section8Element() {
        return cy.contains(locator.vivacityAdmin.section8, {
            timeout: 30000,
        })
    }
    section9Element() {
        return cy.contains(locator.vivacityAdmin.section9, {
            timeout: 30000,
        })
    }
    conapproveElement() {
        return cy.get(locator.vivacityAdmin.conapprove, {
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
    searchWarElement(){
        return cy.get(locator.vivacityAdmin.searchWar, {
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
    accSiteElement() {
        return cy.get(locator.vivacityAdmin.accSite, {
            timeout: 30000,
        })
    }
    accManagerElement() {
        return cy.get(locator.vivacityAdmin.accManager, {
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
        return cy.contains(locator.vivacityAdmin.addbtn, {
            timeout: 30000,
        }) 
    }
    availableAccountElement(){
        return cy.get(locator.vivacityAdmin.availableAccount, {
            timeout: 30000,
        }) 
    }
    viewElement(){
        return cy.contains(locator.vivacityAdmin.view, {
            timeout: 30000,
        }) 
    }
    closeElement(){
        return cy.get(locator.vivacityAdmin.close, {
            timeout: 30000,
        }) 
    }
    editbtnElement(){
        return cy.contains(locator.vivacityAdmin.editbtn, {
            timeout: 30000,
        }) 
    }
    repairbtnElement(){
        return cy.get(locator.vivacityAdmin.repairbtn, {
            timeout: 30000,
        }) 
    }
    section10Element(){
        return cy.contains(locator.vivacityAdmin.section10, {
            timeout: 30000,
        }) 
    } 
    AddEmployeeElement(){
        return cy.contains(locator.vivacityAdmin.AddEmployee, {
            timeout: 30000,
        }) 
    }
    nameElement(){
        return cy.get(locator.vivacityAdmin.name, {
            timeout: 30000,
        }) 
    }
    titleEmpElement(){
        return cy.get(locator.vivacityAdmin.titleEmp, {
            timeout: 30000,
        }) 
    }
    statusElement(){
        return cy.get(locator.vivacityAdmin.status, {
            timeout: 30000,
        }) 
    }
 
    addfilterElement(){
        return cy.get(locator.vivacityAdmin.addfilter, {
            timeout: 30000,
        }) 
    }
    searchEmpElement(){
        return cy.get(locator.vivacityAdmin.searchEmp, {
            timeout: 30000,
        }) 
    }
    clearfilterElement() {
        return cy.contains(locator.vivacityAdmin.clearfilter, {
            timeout: 30000,
        })
    }
    exportElement() {
        return cy.contains(locator.vivacityAdmin.export, {
            timeout: 30000,
        })
    }
    searchtxtElement(){
        return cy.get(locator.vivacityAdmin.searchtxt, {
            timeout: 30000,
        }) 
    }
    ticketnumberElement(){
        return cy.get(locator.vivacityAdmin.ticketnumber, {
            timeout: 30000,
        }) 
    }
    repairtypeElement(){
        return cy.get(locator.vivacityAdmin.repairtype, {
            timeout: 30000,
        }) 
    }
    failuretypeElement(){
        return cy.get(locator.vivacityAdmin.failuretype, {
            timeout: 30000,
        }) 
    }
    searchboxElement(){
        return cy.get(locator.vivacityAdmin.searchbox, {
            timeout: 30000,
        }) 
    }
    addFilterElement() {
        return cy.get(locator.vivacityAdmin.addFilter, {
            timeout: 30000,
        })
    }
    clearFilterElement() {
        return cy.contains(locator.vivacityAdmin.clearFilter, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.vivacityAdmin.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.vivacityAdmin.fieldOp, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.vivacityAdmin.apply, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.vivacityAdmin.fieldValue, {
            timeout: 30000,
        })
    }
    section11Element(){
        return cy.contains(locator.vivacityAdmin.section11, {
            timeout: 30000,
        }) 
    } 
    section12Element(){
        return cy.contains(locator.vivacityAdmin.section12, {
            timeout: 30000,
        }) 
    } 
    section13Element(){
        return cy.contains(locator.vivacityAdmin.section13, {
            timeout: 30000,
        }) 
    } 
}
