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
Then('I should click on create new Box', () => {
    rb.clickOnAddnewBox()
})
Then('Enter weight and Standard Box Size', () => {
    rb.enterWeight()
    rb.selectStandardSize()
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
})
Then('Click on Add Repair Image and Verify', () => {
    rb.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    rb.clickOnAddNote()
})
Then('Click on Remove button for deleting ticket', () => {
    rb.clickOnRemoveButton()
})
And('Verify the ticket removed', () => {
    rb.verifyRemoveTicket()
})
Then('Click on label form of image and Verify', () => {
    rb.ClickOnImagelabel()
})
Then('Click on label form of Pdf and Verify', () => {
    rb.ClickOnPdflabel()
})
//RB
And('Click on filter of Repair Box Equals and Verify the Result', () => {
    rb.selectFilterRepairBox()
})
And('Click on filter of Repair Box Does not equal and Verify the Result', () => {
    rb.filterDoesnotequalBox()
})
And('Click on filter of Repair Box Greater than and Verify the Result', () => {
    rb.filterGreaterthanBox()
})
And('Click on filter of Repair Box Greater than or equal to and Verify the Result', () => {
    rb.filterGreaterequalBox()
})
And('Click on filter of Repair Box Less than and Verify the Result', () => {
    rb.filterLessthanBox()
})
And('Click on filter of Repair Box Less than or equal to and Verify the Result', () => {
    rb.filterLessequalBox()
})
And('Click on filter of Repair Box Between and Verify the Result', () => {
    rb.filterBetweenBox()
})
And('Click on filter of Repair Box Blank and Verify the Result', () => {
    rb.filterBlankBox()
})
And('Click on filter of Repair Box Not blank and Verify the Result', () => {
    rb.filterNotblankBox()
})
//TN
And('Click on filter of Tracking Number contain and Verify the Result', () => {
    rb.selectFiltertrackingNumberFrom()
})
And('Click on filter of Tracking Number Does not contain and Verify the Result', () => {
    rb.filterDoesnotcontain()
})
And('Click on filter of Tracking Number Equals and Verify the Result', () => {
    rb.filterEquals()
})
And('Click on filter of Tracking Number Does not equal and Verify the Result', () => {
    rb.filterNotequal()
})
And('Click on filter of Tracking Number Begins with and Verify the Result', () => {
    rb.filterBeginswith()
})
And('Click on filter of Tracking Number Ends with and Verify the Result', () => {
    rb.filterEndswith()
})
And('Click on filter of Tracking Number Blank and Verify the Result', () => {
    rb.filterBlank()
})
And('Click on filter of Tracking Number Not blank and Verify the Result', () => {
    rb.filterNotblank()
})
//SDate
And('Click on filter of Shipped From Date Equals and Verify the Result', () => {
    rb.filterEqualsSDate()
})
And('Click on filter of Shipped From Date Does not equal and Verify the Result', () => {
    rb.filterNotequalSDate()
})
And('Click on filter of Shipped From Date Before and Verify the Result', () => {
    rb.filterBeforeSDate()
})
And('Click on filter of Shipped From Date After and Verify the Result', () => {
    rb.filterAfterSDate()
})
And('Click on filter of Shipped From Date Between with and Verify the Result', () => {
    rb.filterBetweenSDate()
})
And('Click on filter of Shipped From Date Blank and Verify the Result', () => {
    rb.filterBlankSDate()
})
And('Click on filter of Shipped From Date Not blank and Verify the Result', () => {
    rb.filterNotblankSDate()
})
//B
And('Click on filter of Building contain and Verify the Result', () => {
    rb.selectFilterBuilding()
})
And('Click on filter of Building Does not contain and Verify the Result', () => {
    rb.filterDoesnotcontainB()
})
And('Click on filter of Building Equals and Verify the Result', () => {
    rb.filterEqualsB()
})
And('Click on filter of Building Does not equal and Verify the Result', () => {
    rb.filterNotequalB()
})
And('Click on filter of Building Begins with and Verify the Result', () => {
    rb.filterBeginswithB()
})
And('Click on filter of Building Ends with and Verify the Result', () => {
    rb.filterEndswithB()
})
And('Click on filter of Building Blank and Verify the Result', () => {
    rb.filterBlankB()
})
And('Click on filter of Building Not blank and Verify the Result', () => {
    rb.filterNotblankB()
})
//BT
And('Click on filter of Box_type contain and Verify the Result', () => {
    rb.selectFilterBoxtype()
})
And('Click on filter of Box_type Does not contain and Verify the Result', () => {
    rb.filterDoesnotcontainBT()
})
And('Click on filter of Box_type Equals and Verify the Result', () => {
    rb.filterEqualsBT()
})
And('Click on filter of Box_type Does not equal and Verify the Result', () => {
    rb.filterNotequalBT()
})
And('Click on filter of Box_type Begins with and Verify the Result', () => {
    rb.filterBeginswithBT()
})
And('Click on filter of Box_type Ends with and Verify the Result', () => {
    rb.filterEndswithBT()
})
And('Click on filter of Box_type Blank and Verify the Result', () => {
    rb.filterBlankBT()
})
And('Click on filter of Box_type Not blank and Verify the Result', () => {
    rb.filterNotblankBT()
})
//Ss
And('Click on filter of shipping_box_status with search and check the option and Verify the Result', () => {
    rb.filterSearchCheck()
})
And('Click on filter of shipping_box_status Not Shipped and Verify the Result', () => {
    rb.filterCheck1()
})
And('Click on filter of shipping_box_status Recieved By Vivacity and Verify the Result', () => {
    rb.filterCheck2()
})
And('Click on filter of shipping_box_status Shipping From District with and Verify the Result', () => {
    rb.filterCheck3()
})
And('Click on filter of shipping_box_status all checked with and Verify the Result', () => {
    rb.filterCheckAll()
})
//CBY
And('Click on filter of Created By contain and Verify the Result', () => {
    rb.selectFilterCreatedby()
})
And('Click on filter of Created By Does not contain and Verify the Result', () => {
    rb.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals and Verify the Result', () => {
    rb.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal and Verify the Result', () => {
    rb.filterNotequalCBy()
})
And('Click on filter of Created By Begins with and Verify the Result', () => {
    rb.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with and Verify the Result', () => {
    rb.filterEndswithCBy()
})
And('Click on filter of Created By Blank and Verify the Result', () => {
    rb.filterBlankCBy()
})
And('Click on filter of Created By Not blank and Verify the Result', () => {
    rb.filterNotblankCBy()
})
//CDate
And('Click on filter of Created Date Equals and Verify the Result', () => {
    rb.filterEqualsCDate()
})
And('Click on filter of Created Date Does not equal and Verify the Result', () => {
    rb.filterNotequalCDate()
})
And('Click on filter of Created Date Before and Verify the Result', () => {
    rb.filterBeforeCDate()
})
And('Click on filter of Created Date Between and Verify the Result', () => {
    rb.filterBetweenCDate()
})
And('Click on filter of Created Date After and Verify the Result', () => {
    rb.filterAfterCDate()
})
And('Click on filter of Created Date Blank and Verify the Result', () => {
    rb.filterBlankCDate()
})
And('Click on filter of Created Date Not blank and Verify the Result', () => {
    rb.filterNotblankCDate()
})
//LDate
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    rb.filterEqualsLDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    rb.filterNotequalLDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    rb.filterBeforeLDate()
})
And('Click on filter of Last Modified Date Between and Verify the Result', () => {
    rb.filterBetweenLDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    rb.filterAfterLDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    rb.filterBlankLDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    rb.filterNotblankLDate()
})




