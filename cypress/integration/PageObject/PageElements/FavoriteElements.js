/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class FavoriteElements {

    titleElement() {
        return cy.contains(locator.favorite.title, {
            timeout: 30000,
        });
    }
    starElement() {
        return cy.get(locator.favorite.star, {
            timeout: 30000,
        });
    }
    deletebtnElement() {
        return cy.get(locator.favorite.deletebtn, {
            timeout: 30000,
        });
    }
}
