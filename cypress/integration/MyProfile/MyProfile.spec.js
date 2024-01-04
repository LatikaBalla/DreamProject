import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MyProfileActions } from '../PageObject/PageActions/MyProfileActions'

const mp = new MyProfileActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    mp.closeTermsOfServiceWindow()
})
And('Click on My profile page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
    mp.clickOnMyProfile()
})
Then('Verify the Title of My Profile Page', () => {
    cy.title().should('eq', 'My Profile')
})
And('User and User photo of MyProfile should be visible', () => {
    mp.userNameVisible()
    mp.userPhotoVisible()
})
Then('Profile and Account deatils section of MyProfile should be visible', () => {
    mp.profileDetailsVisible()
    mp.accountDetailsVisible()
})
And('Click on upload image icon', () => {
    mp.clickOnImageIcone()
})
Then('Enter tilte and phone no', () => {
    mp.enterTitle()
    mp.enterPhone()
})
And('Eelect Email preference', () => {
    mp.selectEmailPreference()
})
Then('click on update button', () => {
    mp.clickOnUpdateButton()
})
And('Verify the updated successfully', () => {
    mp.verifyUpdate()
})


