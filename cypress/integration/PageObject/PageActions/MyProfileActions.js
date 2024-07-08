/// <reference types="cypress" />
const MyProfileElements = require("../PageElements/MyProfileElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class MyProfileActions {
    constructor() {
        globalThis.dash = new DashboardElements();
        globalThis.mp = new MyProfileElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnMyProfile() {
        dash.myprofileElement().click({ force: true })
    }
    accountDetailsVisible() {
        mp.accountdetailsElement().scrollIntoView().should('be.visible')
    }
    profileDetailsVisible() {
        mp.profiledetailsElement().should('be.visible')
    }
    userNameVisible() {
        mp.emailnameElement().should('contain', tdata.myprofile.emailname,{ force: true })
    }
    userPhotoVisible() {
        mp.photoElement().should('be.visible')
    }
    enterTitle() {
        mp.titleprofileElement().clear({ force: true }).type(tdata.myprofile.title,{ force: true } )
    }
    enterPhone() {
        mp.phoneElement().clear({ force: true }).type(tdata.myprofile.phone,{ force: true })
    }
    selectEmailPreference() {
        mp.preferencesElement().click({ force: true })
        cy.get(tdata.myprofile.option).click({ force: true })
    }
    clickOnUpdateButton() {
        mp.profileupdateElement().click({ force: true })
    }
    verifyUpdate() {
        dash.messageElement().should('contain', tdata.myprofile.profileupdatemsg,{ force: true })
    }
    clickOnImageIcone() {
        mp.uploadElement().attachFile(tdata.myprofile.image,{ force: true })
    }
}
export default MyProfileActions 