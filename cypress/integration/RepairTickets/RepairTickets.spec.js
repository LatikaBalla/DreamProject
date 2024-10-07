import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { RepairTicketsActions } from '../PageObject/PageActions/RepairTicketsActions'

const rt = new RepairTicketsActions()
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
    rt.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    rt.clickOnRepair360()
})
And('Verify the Title of RepairTickets Page', () => {
    rt.verifyTitle()
})
Then('Filters of RepairTickets should be visible', () => {
    rt.filtersVisible()
})
And('Table for RepairTickets should be visible', () => {
    rt.tableVisible()
})
Then('I should click on create new ticket', () => {
    rt.clickOnCreateNewTicket()
})
Then('Select failure Type, Return site and Serial Device', () => {
    rt.selectFailureType()
    rt.selectReturnSite()
    rt.selectSerialDevice()
})
And('Select Building and Chromebook issue', () => {
    rt.selectStudent()
    rt.selectChromebookIssue()
    rt.selectBuilding()
})
Then('Enter the Describe Your Issue', () => {
    rt.enterDescritionOfIssue()
})
And('Click on save button', () => {
    rt.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    rt.verifyNewTicket()
})
And('Click on Download import button', () => {
    rt.clickOnExport()
})
Then('Verify the successfully downloaded', () => {
    rt.verifyDownload()
})
And('Click on view the details', () => {
    rt.clickOnViewButton()
})
Then('Verify the Details of Repair Ticket', () => {
    rt.verifyDetails()
})
And('Click on view button', () => {
    rt.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    rt.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    rt.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    rt.editTehnician()
    rt.editRepairStatus()
})
And('Click on Update Button', () => {
    rt.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    rt.verifyUpdate()
})
And('Click on Add Line and Verify', () => {
    rt.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    rt.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    rt.clickOnAddNote()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result', () => {
    rt.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals and Verify the Result', () => {
    rt.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result', () => {
    rt.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with and Verify the Result', () => {
    rt.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with and Verify the Result', () => {
    rt.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank and Verify the Result', () => {
    rt.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank and Verify the Result', () => {
    rt.filterNotblankTN()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result', () => {
    rt.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals and Verify the Result', () => {
    rt.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal and Verify the Result', () => {
    rt.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with and Verify the Result', () => {
    rt.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with and Verify the Result', () => {
    rt.filterEndswithSN()
})
And('Click on filter of Serial Number Blank and Verify the Result', () => {
    rt.filterBlankSN()
})
And('Click on filter of Serial Number Not blank and Verify the Result', () => {
    rt.filterNotblankSN()
})
//RT
And('Click on filter of Repair type contain and Verify the Result', () => {
    rt.selectFilterRepairType()
})
And('Click on filter of Repair type Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals and Verify the Result', () => {
    rt.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal and Verify the Result', () => {
    rt.filterNotequalRT()
})
And('Click on filter of Repair type Begins with and Verify the Result', () => {
    rt.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with and Verify the Result', () => {
    rt.filterEndswithRT()
})
And('Click on filter of Repair type Blank and Verify the Result', () => {
    rt.filterBlankRT()
})
And('Click on filter of Repair type Not blank and Verify the Result', () => {
    rt.filterNotblankRT()
})
//B
And('Click on filter of Building contain and Verify the Result', () => {
    rt.selectFilterBuilding()
})
And('Click on filter of Building Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainB()
})
And('Click on filter of Building Equals and Verify the Result', () => {
    rt.filterEqualsB()
})
And('Click on filter of Building Does not equal and Verify the Result', () => {
    rt.filterNotequalB()
})
And('Click on filter of Building Begins with and Verify the Result', () => {
    rt.filterBeginswithB()
})
And('Click on filter of Building Ends with and Verify the Result', () => {
    rt.filterEndswithB()
})
And('Click on filter of Building Blank and Verify the Result', () => {
    rt.filterBlankB()
})
And('Click on filter of Building Not blank and Verify the Result', () => {
    rt.filterNotblankB()
})
//Rsite
And('Click on filter of Return Site contain and Verify the Result', () => {
    rt.filterContainclickOnRemoveButton
})
And('Click on filter of Return Site Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainRsite()
})
And('Click on filter of Return Site Equals and Verify the Result', () => {
    rt.filterEqualsRsite()
})
And('Click on filter of Return Site Does not equal and Verify the Result', () => {
    rt.filterNotequalRsite()
})
And('Click on filter of Return Site Begins with and Verify the Result', () => {
    rt.filterBeginswithRsite()
})
And('Click on filter of Return Site Ends with and Verify the Result', () => {
    rt.filterEndswithRsite()
})
And('Click on filter of Return Site Blank and Verify the Result', () => {
    rt.filterBlankRsite()
})
And('Click on filter of Return Site Not blank and Verify the Result', () => {
    rt.filterNotblankRsite()
})
//rd
And('Click on filter of Repair device contain and Verify the Result', () => {
    rt.selectFilterRepairDevice()
})
And('Click on filter of Repair device Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals and Verify the Result', () => {
    rt.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal and Verify the Result', () => {
    rt.filterNotequalRD()
})
And('Click on filter of Repair device Begins with and Verify the Result', () => {
    rt.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with and Verify the Result', () => {
    rt.filterEndswithRD()
})
And('Click on filter of Repair device Blank and Verify the Result', () => {
    rt.filterBlankRD()
})
And('Click on filter of Repair device Not blank and Verify the Result', () => {
    rt.filterNotblankRD()
})
//box
And('Click on filter of Repair Box contain and Verify the Result', () => {
    rt.filterContainBox()
})
And('Click on filter of Repair Box Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainBox()
})
And('Click on filter of Repair Box Equals and Verify the Result', () => {
    rt.filterEqualsBox()
})
And('Click on filter of Repair Box Does not equal and Verify the Result', () => {
    rt.filterDoesnotequalBox()
})
And('Click on filter of Repair Box Begins with and Verify the Result', () => {
    rt.filterBeginswithBox()
})
And('Click on filter of Repair Box Ends with and Verify the Result', () => {
    rt.filterEndswithBox()
})
And('Click on filter of Repair Box Blank and Verify the Result', () => {
    rt.filterBlankBox()
})
And('Click on filter of Repair Box Not blank and Verify the Result', () => {
    rt.filterNotblankBox()
})
//tag
And('Click on filter of Asset tag contain and Verify the Result', () => {
    rt.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals and Verify the Result', () => {
    rt.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal and Verify the Result', () => {
    rt.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with and Verify the Result', () => {
    rt.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with and Verify the Result', () => {
    rt.filterEndswithtag()
})
And('Click on filter of Asset tag Blank and Verify the Result', () => {
    rt.filterBlanktag()
})
And('Click on filter of Asset tag Not blank and Verify the Result', () => {
    rt.filterNotblanktag()
})
//si
And('Click on filter of Student Info contain and Verify the Result', () => {
    rt.filtercontainSI() 
})
And('Click on filter of Student Info Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainSI()
})
And('Click on filter of Student Info Equals and Verify the Result', () => {
    rt.filterEqualsSI()
})
And('Click on filter of Student Info Does not equal and Verify the Result', () => {
    rt.filterNotequalSI()
})
And('Click on filter of Student Info Begins with and Verify the Result', () => {
    rt.filterBeginswithSI()
})
And('Click on filter of Student Info Ends with and Verify the Result', () => {
    rt.filterEndswithSI()
})
And('Click on filter of Student Info Blank and Verify the Result', () => {
    rt.filterBlankSI()
})
And('Click on filter of Student Info Not blank and Verify the Result', () => {
    rt.filterNotblankSI()
})
//st
And('Click on filter of Student Technician contain and Verify the Result', () => {
    rt.filtercontainST() 
})
And('Click on filter of Student Technician Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainST()
})
And('Click on filter of Student Technician Equals and Verify the Result', () => {
    rt.filterEqualsST()
})
And('Click on filter of Student Technician Does not equal and Verify the Result', () => {
    rt.filterNotequalST()
})
And('Click on filter of Student Technician Begins with and Verify the Result', () => {
    rt.filterBeginswithST()
})
And('Click on filter of Student Technician Ends with and Verify the Result', () => {
    rt.filterEndswithST()
})
And('Click on filter of Student Technician Blank and Verify the Result', () => {
    rt.filterBlankST()
})
And('Click on filter of Student Technician Not blank and Verify the Result', () => {
    rt.filterNotblankST()
})
//rs
And('Click on filter of Repair status op1 and Verify the Result', () => {
    rt.filterOption1()
})
And('Click on filter of Repair status op2 and Verify the Result', () => {
    rt.filterOption2()
})
And('Click on filter of Repair status op3 and Verify the Result', () => {
    rt.filterOption3()
})
And('Click on filter of Repair status op4 and Verify the Result', () => {
    rt.filterOption4()
})
And('Click on filter of Repair status op5 and Verify the Result', () => {
    rt.filterOption5()
})
And('Click on filter of Repair status op6 and Verify the Result', () => {
    rt.filterOption6()
})
And('Click on filter of Repair status op7 and Verify the Result', () => {
    rt.filterOption7()
})
And('Click on filter of Repair status op8 and Verify the Result', () => {
    rt.filterOption8()
})
And('Click on filter of Repair status op9 and Verify the Result', () => {
    rt.filterOption9()
})
And('Click on filter of Repair status op10 and Verify the Result', () => {
    rt.filterOption10()
})
And('Click on filter of Repair status op11 and Verify the Result', () => {
    rt.filterOption11()
})
//cby
And('Click on filter of Created By contain and Verify the Result', () => {
    rt.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain and Verify the Result', () => {
    rt.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals and Verify the Result', () => {
    rt.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal and Verify the Result', () => {
    rt.filterNotequalCBy()
})
And('Click on filter of Created By Begins with and Verify the Result', () => {
    rt.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with and Verify the Result', () => {
    rt.filterEndswithCBy()
})
And('Click on filter of Created By Blank and Verify the Result', () => {
    rt.filterBlankCBy()
})
And('Click on filter of Created By Not blank and Verify the Result', () => {
    rt.filterNotblankCBy()
})
//cdate
And('Click on filter of Created Date Equals and Verify the Result', () => {
    rt.filterEqualsCDate()
})
And('Click on filter of Created Date Does not equal and Verify the Result', () => {
    rt.filterNotequalCDate()
})
And('Click on filter of Created Date Before and Verify the Result', () => {
    rt.filterBeforeCDate()
})
And('Click on filter of Created Date After and Verify the Result', () => {
    rt.filterAfterCDate()
})
And ('Click on filter of Created Date Between with and Verify the Result',()=>{
    rt.filterBetweenCDate()
})
And('Click on filter of Created Date Blank and Verify the Result', () => {
    rt.filterBlankCDate()
})
And('Click on filter of Created Date Not blank and Verify the Result', () => {
    rt.filterNotblankCDate()
})
//Ldate
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    rt.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    rt.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    rt.filterBeforeDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    rt.filterAfterDate()
})
And ('Click on filter of Last Modified Date Between with and Verify the Result',()=>{
    rt.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    rt.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    rt.filterNotblankDate()
})
And ('Click on Sort Ascending for Ticket Number and Verify the Result',()=>{
    rt.sortAscendingTN()
})
And ('Click on Sort Descending for Ticket Number and Verify the Result',()=>{
    rt.sortDescendingTN()
})
And ('Click on Sort Ascending for Repair Type and Verify the Result',()=>{
    rt.sortAscendingRT()})
And ('Click on Sort Descending for Repair Type and Verify the Result',()=>{ 
    rt.sortDescendingRT()})
And ('Click on Sort Ascending for Serial Number and Verify the Result',()=>{sortAscendingSN()})
And ('Click on Sort Descending for Serial Number and Verify the Result',()=>{ rt.sortDescendingSN()})
And ('Click on Sort Ascending for Building and Verify the Result',()=>{rt.sortAscendingB()})
And ('Click on Sort Descending for Building and Verify the Result',()=>{ rt.sortDescendingB()})

And ('Click on Sort Ascending for Repair Device and Verify the Result',()=>{rt.sortAscendingRD()})
And ('Click on Sort Descending for Repair Device and Verify the Result',()=>{ rt.sortDescendingRD()})
And ('Click on Sort Ascending for Asset Tag and Verify the Result',()=>{rt.sortAscendingTag()})
And ('Click on Sort Descending for Asset Tag and Verify the Result',()=>{ rt.sortDescendingTag()})
And ('Click on Sort Ascending for Student Info and Verify the Result',()=>{rt.sortAscendingInfo()})
And ('Click on Sort Descending for Student Info and Verify the Result',()=>{ rt.sortDescendingInfo()})
And ('Click on Sort Ascending for Student Technician and Verify the Result',()=>{rt.sortAscendingST()})
And ('Click on Sort Descending for Student Technician and Verify the Result',()=>{ rt.sortDescendingST()})

And ('Click on Sort Ascending for Repair Status and Verify the Result',()=>{rt.sortAscendingRS()})
And ('Click on Sort Descending for Repair Status and Verify the Result',()=>{ rt.sortDescendingRS()})
And ('Click on Sort Ascending for Created By and Verify the Result',()=>{rt.sortAscendingCby()})
And ('Click on Sort Descending for Created By and Verify the Result',()=>{ rt.sortDescendingCby()})

And ('Click on Sort Ascending for Repair Box and Verify the Result',()=>{rt.sortAscendingBox()})
And ('Click on Sort Descending for Repair Box and Verify the Result',()=>{ rt.sortDescendingBox()})

And ('Click on Sort Ascending for Created Date and Verify the Result',()=>{rt.sortAscendingCdate()})
And ('Click on Sort Descending for Created Date and Verify the Result',()=>{ rt.sortDescendingCdate()})
And ('Click on Sort Ascending for Last Modified Date and Verify the Result',()=>{rt.sortAscendingLdate()})
And ('Click on Sort Descending for Last Modified Date and Verify the Result',()=>{ rt.sortDescendingLdate()})