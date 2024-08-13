/// <reference types="cypress" />
const FavoriteElements = require("../PageElements/FavoriteElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const tdata = require("../../../testData.json");
export class FavoriteActions {
    constructor() {
        globalThis.fv = new FavoriteElements();
        globalThis.dash = new DashboardElements();
    }
    closeTermsOfServiceWindow() {
        cy.wait(1000)
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnFavorite() {
        dash.favoriteElement().click({ force: true })
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
    clickOnStarReportCenter() {
        cy.wait(1000)
        dash.reportcenterElement().click({ force: true })
        cy.wait(1000)
        fv.starElement().click({ force: true })
    }
    clickOnStarManageDevices() {
        cy.wait(1000)
        dash.managedevicesElement().click({ force: true })
        cy.wait(1000)
        fv.starElement().click({ force: true })
    }
    clickOnStarRepair360() {
        cy.wait(1000)
        dash.repair360Element().click({ force: true })
        cy.wait(1000)
        fv.starElement().click({ force: true })
    }
    clickOnStarResources() {
        cy.wait(1000)
        dash.resourcesElement().click({ force: true })
        cy.wait(1000)
        fv.starElement().click({ force: true })
    }
    clickOnStarSupport() {
        dash.arrowElement().click({ force: true })
        cy.get('.css-7d2o2d').contains('d').click({ force: true })
        cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
        dash.supportElement().click({ force: true })
        cy.wait(1000)
        fv.starElement().click({ force: true })
    }
    clickonStarFeatures() {
        //  dash.arrowElement().click({ force: true })
        //cy.contains('demo_adminsuper@vivacitytech.com').click({force:true})
        dash.featuresElement().click({ force: true })
        cy.wait(1000)
        fv.starElement().click({ force: true })
    }

    clickOnStarRepairTicketDetails() {
        //  dash.favoriteElement().click({ force: true })
        //ft.starElement().click({ force: true })
    }
}
export default FavoriteActions 