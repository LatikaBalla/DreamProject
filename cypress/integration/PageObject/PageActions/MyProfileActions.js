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
        cy.contains('demo_adminsuper@vivacitytech.com').click({force:true})
        dash.myprofileElement().click({ force: true })
    }
    accountDetailsVisible() {
        mp.accountdetailsElement().should('be.visible')
    }
    profileDetailsVisible() {
        mp.profiledetailsElement().should('be.visible')
    }
    userNameVisible() {
        mp.emailnameElement().should('contain', tdata.myprofile.emailname)
    }
    userPhotoVisible() {
        mp.photoElement().should('be.visible')
    }
    enterTitle() {
        mp.titleprofileElement().clear().type(tdata.myprofile.title)
    }
    enterPhone() {
        mp.phoneElement().clear().type(tdata.myprofile.phone)
    }
    selectEmailPreference() {
        mp.preferencesElement().click({ force: true })
        cy.get(tdata.myprofile.option).click({ force: true })
    }
    clickOnUpdateButton() {
        mp.profileupdateElement().click({ force: true })
    }
    verifyUpdate() {
        dash.messageElement().should('contain', tdata.myprofile.profileupdatemsg)
    }
    clickOnImageIcone(){
        mp.uploadElement().attachFile(tdata.myprofile.image)
    }

}

export default MyProfileActions 