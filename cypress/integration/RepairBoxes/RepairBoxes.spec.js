import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { RepairBoxesActions } from '../PageObject/PageActions/RepairBoxesActions'

const rb = new RepairBoxesActions()
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
    rb.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    rb.clickOnRepair360()
})
And('Click on RepairBoxes Tab', () => {
    rb.clickOnRepairBoxesTab()
})
And('Verify the Title of RepairBoxes Page', () => {
    rb.verifyTitle()
})

And('Outbound and Inbound Shipments for RepairBoxes should be visible', () => {
    rb.outboundVisible()
    rb.inboundVisible()
})
Then('I should click on create new Box', () => {
    rb.clickOnAddnewBox()
})
Then('Enter weight and Standard Box Size', () => {
    rb.enterWeight()
    rb.selectStandardSize()
    // rb.enterHeight()
    //rb.enterDepth()
    //rb.enterwidth()
})
And('Select Pick-up site', () => {
    rb.selectPickupSite()
})
Then('Check the need shipping box', () => {
    rb.checkNeedShippingBox()
})
And('Click on Create box button', () => {
    rb.clickOnCreateBoxButton()
})
Then('Select Ticket from dropdownlist', () => {
    rb.selectTickets()
})
And('Click on Finish button', () => {
    rb.clickOnFinishButton()
})
Then('Verify new box is added in table', () => {
    rb.verifyNewBoxAdd()
})
And('Click on Export Button', () => {
    rb.clickOnDownloadLabel()
})
And('Click on view button', () => {
    rb.clickOnViewButton()
})
Then('Verify the Details new box', () => {
    rb.verifyBoxDetails()
})

And('Add another ticket in the same box', () => {
    rb.clickOnAddTicket()
})
And('Click on Add ticket', () => {
    rb.clickOnAddTicket_s()
})
Then('Verify the ticket is added in table', () => {
    rb.verifyTicketAdded()
})
And('Click on view the ticket Details', () => {
    rb.clickOnViewButtonTicket()
})
Then('Verfiy the ticket Details', () => {
    rb.verifyTicketDetails()
})
And('Click on Back button', () => {
    rb.clickOnBackButton()
})
And('Remove the ticket from box', () => {
    rb.clickOnRemoveButton()
})
Then('Verify the ticket is delete from the table', () => {
    rb.verifyTicketDeleted()
    //cy.go('back')
})
And('Enter the Search - Tracking Number in search box and Verify the Result', () => {
    rb.searchTrackingNumber()
})
Then('Enter the Search - Record Id in search box and Verify the Result', () => {
    rb.searchRecordId()
})
And('Enter the Search - Building in search box and Verify the Result', () => {
    rb.searchBuilding()
})
Then('Enter the Search - Created_by in search box and Verify the Result', () => {
    rb.searchCreatedby()
})
Then('Click on More filters', () => {
    rb.clickOnMoreFilter()
})
And('Select Field name and Field operation and Enter the Search value', () => {
    rb.enterFieldName()
    rb.enterFieldOperation()
    rb.enterSearchValue()
})
Then('Click on Apply Button', () => {
    rb.clickOnApply()
})
And('Verify the Results in the table', () => {
    rb.verifyResultFilter()
})
Then('Click on Clear filter', () => {
    rb.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    rb.selectFilterRecordId()
})
And('Click More filter select- Tracking Number From in search box and Verify the Result', () => {
    rb.selectFilterTrackingNumberFrom()
})
Then('Click More filter select- Shipping From Cost in search box and Verify the Result', () => {
    rb.selectFilterShippingFromCost()
})
And('Click More filter select- Shipped From Date in search box and Verify the Result', () => {
    rb.selectFilterShippedFromDate()
})
Then('Click More filter select- Label From in search box and Verify the Result', () => {
    rb.selectFilterLabelFrom()
})
And('Click More filter select- Building in search box and Verify the Result', () => {
    rb.selectFilterBuilding()
})
And('Click More filter select- Box_type in search box and Verify the Result', () => {
    rb.selectFilterBoxtype()
})
And('Click More filter select- shipping_box_status in search box and Verify the Result', () => {
    rb.selectFiltershippingboxstatus()
})
And('Click More filter select- Created_by in search box and Verify the Result', () => {
    rb.selectFilterCreatedby()
})
And('Click More filter select- Last_modified_date in search box and Verify the Result', () => {
    rb.selectFilterLastdate ()
})
