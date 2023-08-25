/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class HowToVideosElements {
    videosElement() {
        return cy.get(locator.howToVideos.videos, {
            timeout: 30000,
        })
    }
    productvElement() {
        return cy.contains(locator.warrantyInfo.productv, {
            timeout: 30000,
        })
    }
    HPrepairvElement() {
        return cy.contains(locator.warrantyInfo.HPrepairv, {
            timeout: 30000,
        })
    }
    lenovorepairvElement() {
        return cy.contains(locator.warrantyInfo.lenovorepairv, {
            timeout: 30000,
        })
    }
    dellrepairvElement() {
        return cy.contains(locator.warrantyInfo.dellrepairv, {
            timeout: 30000,
        })
    }
}