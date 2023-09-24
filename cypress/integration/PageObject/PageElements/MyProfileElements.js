/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class MyProfileElements {
    titleElement() {
        return cy.contains(locator.myprofile.title, {
            timeout: 30000,
        })
    }
    titleprofileElement() {
        return cy.get(locator.myprofile.titleprofile, {
            timeout: 30000,
        })
    }
    fullnameElement() {
        return cy.get(locator.myprofile.fullname, {
            timeout: 30000,
        });
    }
    emailElement() {
        return cy.get(locator.myprofile.email, {
            timeout: 30000,
        });
    }
    phoneElement() {
        return cy.get(locator.myprofile.phone, {
            timeout: 30000,
        });
    }
    reportcenterElement() {
        return cy.get(locator.myprofile.reportcenter, {
            timeout: 30000,
        });
    }
    usersElement() {
        return cy.get(locator.myprofile.users, {
            timeout: 30000,
        });
    }
    preferencesElement() {
        return cy.get(locator.myprofile.preferences, {
            timeout: 30000,
        });
    }
    profileupdateElement() {
        return cy.get(locator.myprofile.profileupdate, {
            timeout: 30000,
        });
    }
    accountupdateElement() {
        return cy.get(locator.myprofile.accountupdate, {
            timeout: 30000,
        });
    }
    oldpassElement() {
        return cy.contains(locator.myprofile.oldpass, {
            timeout: 30000,
        });
    }
    passElement() {
        return cy.get(locator.myprofile.pass, {
            timeout: 30000,
        });
    }
    uploadElement(){
        return cy.get(locator.myprofile.upload, {
            timeout: 30000,
        }); 
    }
    photoElement(){
        return cy.get(locator.myprofile.photo, {
            timeout: 30000,
        }); 
    }
    profiledetailsElement(){
        return cy.get(locator.myprofile.profiledetails, {
            timeout: 30000,
        }); 
    }
    accountdetailsElement(){
        return cy.get(locator.myprofile.accountdetails, {
            timeout: 30000,
        }); 
    }
    emailnameElement(){
        return cy.get(locator.myprofile.emailname, {
            timeout: 30000,
        }); 
    }
} 