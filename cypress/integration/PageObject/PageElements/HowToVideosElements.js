/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class HowToVideosElements {
    videosElement() {
        return cy.get(locator.howToVideos.videos, {
            timeout: 30000,
        })
    }
}