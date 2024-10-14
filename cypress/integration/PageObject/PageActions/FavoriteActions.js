/// <reference types="cypress" />
const FavoriteElements = require("../PageElements/FavoriteElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const MyFleetElements = require("../PageElements/MyFleetElements.js")
const tdata = require("../../../testData.json");
export class FavoriteActions {
    constructor() {
        globalThis.fv = new FavoriteElements();
        globalThis.dash = new DashboardElements();
        globalThis.mf = new MyFleetElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnFavorite() {
        dash.favoriteElement().click({ force: true })
    }
    clickOnManageDevices() { 
        cy.wait(100)
        dash.managedevicesElement().click({ force: true })
     }
    clickOnStarAccDash() {
        fv.starElement().click({ force: true })
    }
    verifyTitle() {
        cy.get('.css-13s257e > .MuiTypography-root').contains('Favorite').should('be.visible')
    }
    clickDeleteIcon() {
        fv.deletebtnElement().click({ force: true })
    }
    verifyFavoriteDeleted() {
        cy.get('.css-186nb0p > .MuiTypography-root').contains('No favorite available').should('be.visible')
    }
    clickOnStarManageDevices() {
        fv.starElement().click({ force: true })
    }
    clickOnDeviceIcon() {
        mf.deviceIconElement().eq(1).click({ force: true })
     }
     clickOnViewButton() {
        cy.wait(100)
        mf.viewElement().click({ force: true });
     }
     clickViewButton1(){
        cy.wait(2000)
        cy.window().then(win => {
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/ticket-detail/" + tdata.repairTickets.recordid)
    }
    clickOnStarRepairTicketDetails() {
        fv.starElement().click({ force: true })
    }
    clickOnStarLoanerManagement(){
        fv.starElement().click({ force: true })
    }
    clickOnStarInhouseTicket(){
        fv.starElement().click({ force: true })
    }
    clickViewButton2() {
        cy.wait(1000)
        cy.window().then(win => {
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/inHouse-detail/" + tdata.inHouseTicket.recordid, { visitTimeout: 30000 })
    }
    clickViewButton3() {
        cy.wait(1000)
        cy.window().then(win => {
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/inHouse-detail/" + tdata.srcRepairTicket.recordid)
    }
    clickOnStarSrcRepairTickets(){
        fv.starElement().click({ force: true })
    }
}
export default FavoriteActions 