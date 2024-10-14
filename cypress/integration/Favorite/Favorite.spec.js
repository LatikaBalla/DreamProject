import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { FavoriteActions } from '../PageObject/PageActions/FavoriteActions'
import { LoanerManagementActions } from '../PageObject/PageActions/LoanerManagementActions'
import { InHouseTicketsActions } from '../PageObject/PageActions/InHouseTicketsActions'
import { SrcRepairTicketsActions } from '../PageObject/PageActions/SrcRepairTicketsActions'

const srt = new SrcRepairTicketsActions()
const iht = new InHouseTicketsActions()
const loan = new LoanerManagementActions()
const fv = new FavoriteActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/", { failOnStatusCode: false });
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    fv.closeTermsOfServiceWindow()
})
And('Click on Favorite page', () => {
    cy.wait(1000)
    cy.contains('demo_adminsuper@vivacitytech.com').click({ force: true })
    fv.clickOnFavorite()
})
And('Verify the Title of Favorite Page', () => {
    fv.verifyTitle()
})
Then('Click on Repair360 page', () => {
    fv.clickOnRepair360()
})
And ('Click on view button of repair ticket',()=>{
    fv.clickViewButton1()
})
Then('Click on the Star button of Repair Ticket Details', () => {
    fv.clickOnStarRepairTicketDetails()
})
Then('Click on Manage Devices', () => {
    fv.clickOnManageDevices()
})
Then('Click on deviceIcon and click on view Button', () => {
    fv.clickOnDeviceIcon()
    fv.clickOnViewButton()
})
Then('Click on the Star button of My fleet', () => {
    fv.clickOnStarManageDevices()
})
And('Click on LoanerManagement Tab', () => {
    loan.clickOnLoanerManagement()
})
Then('Delete the Favorite item and verify no favorite items', () => {
    fv.clickDeleteIcon()
    fv.verifyFavoriteDeleted()
})
Then('Click on the Star button of LoanerManagement', () => {
    fv.clickOnStarLoanerManagement()
})
And ('Click on view button of in-house ticket',()=>{
    fv.clickViewButton2()
})
Then('Click on the Star button of in-house ticket', () => {
    fv.clickOnStarInhouseTicket()
})
And ('Click on StudentRepairCenter tab and SrcRepairTickets tab',()=>{
    srt.clickOnStudentRepairCenterTab()
    srt.clickOnSrcRepairTicketsTab()
})
And ('Click on view button ofSrcRepair Tickets',()=>{
    fv.clickViewButton3()
})
Then ('Click on the Star button of SrcRepair Tickets',()=>{
    fv.clickOnStarSrcRepairTickets()
})
And('Click on InHouseRepairCenter tab and All InHouseTickets tab', () => {
    iht.clickOnInHouseRepairCenterTab()
    iht.clickOnInHouseTicketsTab()
})

