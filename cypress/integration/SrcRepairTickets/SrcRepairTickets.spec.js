import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcRepairTicketsActions } from '../PageObject/PageActions/SrcRepairTicketsActions'

const srt = new SrcRepairTicketsActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('close the terms of service window', () => {
    cy.wait(8000)
    srt.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    srt.clickOnRepair360()
})
And('Click on StudentRepairCenter tab', () => {
    srt.clickOnStudentRepairCenterTab()
})
Then('Click on SrcRepairTickets tab', () => {
    srt.clickOnSrcRepairTicketsTab()
})
And('Verify the Title of SrcRepairTickets Page', () => {
    srt.verifyTitle()
})
Then('Filters of SrcRepairTickets should be visible', () => {
    srt.filtersVisible()
})
And('Table for SrcRepairTickets should be visible', () => {
    srt.tableVisible()
})
Then('I should click on Create Student Repair Ticket button', () => {
    srt.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device and Technician', () => {
    srt.selectFailureType()
    srt.selectSerialDevice()
    srt.selectTechnician()
})
Then('Enter the Chromebook issue', () => {
    srt.enterChromebookIssue()
})
And('Click on save button', () => {
    srt.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    srt.verifyNewTicket()
})
And ('Enter the Search value in search box',()=>{
srt.enterSearchBox()
})
Then ('Verify the Results in the table',()=>{
srt.verifySearchResult()
})
