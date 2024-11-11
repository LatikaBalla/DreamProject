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
And('Select failure Type, Serial Device, Technician and building', () => {
    srt.selectFailureType()
    srt.selectTechnician()
    srt.selectSerialDevice()
    srt.selectIssue()
    srt.selectBuilding()
})
Then('Enter the Chromebook issue and Image description', () => {
    srt.enterChromebookIssue()
    srt.enterimagedescription()
})
And('Click on save button', () => {
    srt.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    srt.verifyNewTicket()
})
And('Enter the Search value in search box', () => {
    srt.enterSearchBox()
})
Then('Verify the Results in the table', () => {
    srt.verifySearchResult()
})
And('Click on view button', () => {
    srt.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    srt.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    srt.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    srt.editTehnician()
    srt.editRepairStatus()
})
And('Click on Update Button', () => {
    srt.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    srt.verifyUpdate()
})
Then('Click on Clear filter', () => {
    srt.clickOnClearFilter()
})
And('Click on Add Line and Verify', () => {
    srt.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    srt.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    srt.clickOnAddNote()
})
And('Click on Download Export button', () => {
    srt.clickOnExport()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result', () => {
    srt.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals and Verify the Result', () => {
    srt.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result', () => {
    srt.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with and Verify the Result', () => {
    srt.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with and Verify the Result', () => {
    srt.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank and Verify the Result', () => {
    srt.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank and Verify the Result', () => {
    srt.filterNotblankTN()
})
//B
And('Click on filter of Building contain and Verify the Result', () => {
    srt.filterContainBuilding()
})
And('Click on filter of Building Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainB()
})
And('Click on filter of Building Equals and Verify the Result', () => {
    srt.filterEqualsB()
})
And('Click on filter of Building Does not equal and Verify the Result', () => {
    srt.filterNotequalB()
})
And('Click on filter of Building Begins with and Verify the Result', () => {
    srt.filterBeginswithB()
})
And('Click on filter of Building Ends with and Verify the Result', () => {
    srt.filterEndswithB()
})
And('Click on filter of Building Blank and Verify the Result', () => {
    srt.filterBlankB()
})
And('Click on filter of Building Not blank and Verify the Result', () => {
    srt.filterNotblankB()
})
//Returnsite
And('Click on filter of Return Site contain and Verify the Result', () => {
    srt.filterContainRSite()
})
And('Click on filter of Return Site Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainRSite()
})
And('Click on filter of Return Site Equals and Verify the Result', () => {
    srt.filterEqualsRSite()
})
And('Click on filter of Return Site Does not equal and Verify the Result', () => {
    srt.filterNotequalRSite()
})
And('Click on filter of Return Site Begins with and Verify the Result', () => {
    srt.filterBeginswithRSite()
})
And('Click on filter of Return Site Ends with and Verify the Result', () => {
    srt.filterEndswithRSite()
})
And('Click on filter of Return Site Blank and Verify the Result', () => {
    srt.filterBlankRSite()
})
And('Click on filter of Return Site Not blank and Verify the Result', () => {
    srt.filterNotblankRSite()
})
//RT
And('Click on filter of Repair type contain and Verify the Result', () => {
    srt.selectFilterRepairType()
})
And('Click on filter of Repair type Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals and Verify the Result', () => {
    srt.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal and Verify the Result', () => {
    srt.filterNotequalRT()
})
And('Click on filter of Repair type Begins with and Verify the Result', () => {
    srt.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with and Verify the Result', () => {
    srt.filterEndswithRT()
})
And('Click on filter of Repair type Blank and Verify the Result', () => {
    srt.filterBlankRT()
})
And('Click on filter of Repair type Not blank and Verify the Result', () => {
    srt.filterNotblankRT()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result', () => {
    srt.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals and Verify the Result', () => {
    srt.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal and Verify the Result', () => {
    srt.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with and Verify the Result', () => {
    srt.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with and Verify the Result', () => {
    srt.filterEndswithSN()
})
And('Click on filter of Serial Number Blank and Verify the Result', () => {
    srt.filterBlankSN()
})
And('Click on filter of Serial Number Not blank and Verify the Result', () => {
    srt.filterNotblankSN()
})
//rd
And('Click on filter of Repair device contain and Verify the Result', () => {
    srt.selectFilterRepairDevice()
})
And('Click on filter of Repair device Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals and Verify the Result', () => {
    srt.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal and Verify the Result', () => {
    srt.filterNotequalRD()
})
And('Click on filter of Repair device Begins with and Verify the Result', () => {
    srt.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with and Verify the Result', () => {
    srt.filterEndswithRD()
})
And('Click on filter of Repair device Blank and Verify the Result', () => {
    srt.filterBlankRD()
})
And('Click on filter of Repair device Not blank and Verify the Result', () => {
    srt.filterNotblankRD()
})
//tag
And('Click on filter of Asset tag contain and Verify the Result', () => {
    srt.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals and Verify the Result', () => {
    srt.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal and Verify the Result', () => {
    srt.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with and Verify the Result', () => {
    srt.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with and Verify the Result', () => {
    srt.filterEndswithtag()
})
And('Click on filter of Asset tag Blank and Verify the Result', () => {
    srt.filterBlanktag()
})
And('Click on filter of Asset tag Not blank and Verify the Result', () => {
    srt.filterNotblanktag()
})
//it
And('Click on filter of Internal Technician contain and Verify the Result', () => {
    srt.selectFilterInternalTechnician()
})
And('Click on filter of Internal Technician Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainIT()
})
And('Click on filter of Internal Technician Equals and Verify the Result', () => {
    srt.filterEqualsIT()
})
And('Click on filter of Internal Technician Does not equal and Verify the Result', () => {
    srt.filterNotequalIT()
})
And('Click on filter of Internal Technician Begins with and Verify the Result', () => {
    srt.filterBeginswithIT()
})
And('Click on filter of Internal Technician Ends with and Verify the Result', () => {
    srt.filterEndswithIT()
})
And('Click on filter of Internal Technician Blank and Verify the Result', () => {
    srt.filterBlankIT()
})
And('Click on filter of Internal Technician Not blank and Verify the Result', () => {
    srt.filterNotblankIT()
})
//StdN
And('Click on filter of Student Name contain and Verify the Result', () => {
    srt.filterContainStdN()
})
And('Click on filter of Student Name Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainStdN()
})
And('Click on filter of Student Name Equals and Verify the Result', () => {
    srt.filterEqualsStdN()
})
And('Click on filter of Student Name Does not equal and Verify the Result', () => {
    srt.filterNotequalStdN()
})
And('Click on filter of Student Name Begins with and Verify the Result', () => {
    srt.filterBeginswithStdN()
})
And('Click on filter of Student Name Ends with and Verify the Result', () => {
    srt.filterEndswithStdN()
})
And('Click on filter of Student Name Blank and Verify the Result', () => {
    srt.filterBlankStdN()
})
And('Click on filter of Student Name Not blank and Verify the Result', () => {
    srt.filterNotblankStdN()
})
//rs
And('Click on filter of Repair status op1 and Verify the Result', () => {
    srt.filterOption1() 
})
And('Click on filter of Repair status op2 and Verify the Result', () => {
    srt.filterOption2() 
})
And('Click on filter of Repair status op3 and Verify the Result', () => {
    srt.filterOption3() 
})
And('Click on filter of Repair status op4 and Verify the Result', () => {
    srt.filterOption4() 
})
And('Click on filter of Repair status op5 and Verify the Result', () => {
    srt.filterOption5() 
})
And('Click on filter of Repair status op6 and Verify the Result', () => {
    srt.filterOption6() 
})
//InS
And('Click on filter of In House status op1 and Verify the Result', () => {
    srt.filterOptionIhs1()
})
And('Click on filter of In House status op2 and Verify the Result', () => {
    srt.filterOptionIhs2()
})
And('Click on filter of In House status op3 and Verify the Result', () => {
    srt.filterOptionIhs3()
})
And('Click on filter of Warranty status search and Verify the Result', () => {
    srt.filterOptionWS1()
})
And('Click on filter of Warranty status Non Warranty and Verify the Result', () => {
    srt.filterOptionWS2()
})
//cby
And('Click on filter of Created By contain and Verify the Result', () => {
    srt.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals and Verify the Result', () => {
    srt.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal and Verify the Result', () => {
    srt.filterNotequalCBy()
})
And('Click on filter of Created By Begins with and Verify the Result', () => {
    srt.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with and Verify the Result', () => {
    srt.filterEndswithCBy()
})
And('Click on filter of Created By Blank and Verify the Result', () => {
    srt.filterBlankCBy()
})
And('Click on filter of Created By Not blank and Verify the Result', () => {
    srt.filterNotblankCBy()
})
//CDate
And('Click on filter of Created Date Equals and Verify the Result', () => {
    srt.filterEqualsCDate()
})
And('Click on filter of Created Date Does not equal and Verify the Result', () => {
    srt.filterNotequalCDate()
})
And('Click on filter of Created Date Before and Verify the Result', () => {
    srt.filterBeforeCDate()
})
And('Click on filter of Created Date After and Verify the Result', () => {
    srt.filterAfterCDate()
})
And ('Click on filter of Created Date Between with and Verify the Result',()=>{
    srt.filterBetweenCDate()
})
And('Click on filter of Created Date Blank and Verify the Result', () => {
    srt.filterBlankCDate()
})
And('Click on filter of Created Date Not blank and Verify the Result', () => {
    srt.filterNotblankCDate()
})
//Ldate
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    srt.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    srt.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    srt.filterBeforeDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    srt.filterAfterDate()
})
And ('Click on filter of Last Modified Date Between with and Verify the Result',()=>{
    srt.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    srt.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    srt.filterNotblankDate()
})

//sorting 
And ('Click on Sort Ascending and Descending for Ticket Number and Verify the Result',()=>{
    srt.sortingTN()
})
And ('Click on Sort Ascending and Descending for Repair Type and Verify the Result',()=>{
    srt.sortingRtype()
})
And ('Click on Sort Ascending and Descending for Building and Verify the Result',()=>{
    srt.sortingBuilding()
})
And ('Click on Sort Ascending and Descending for Return Site and Verify the Result',()=>{
    srt.sortingRSite()
})
And ('Click on Sort Ascending and Descending for Serial Number and Verify the Result',()=>{
    srt.sortingSN()
})
And ('Click on Sort Ascending and Descending for Repair Device and Verify the Result',()=>{
    srt.sortingRDev()
})
And ('Click on Sort Ascending and Descending for Asset Tag and Verify the Result',()=>{
    srt.sortingATag()
})
And ('Click on Sort Ascending and Descending for Student Technician Name and Verify the Result',()=>{
    srt.sortingIT()
})
And ('Click on Sort Ascending and Descending for Student Name and Verify the Result',()=>{
    srt.sortingStdN()
})
And ('Click on Sort Ascending and Descending for Repair Status and Verify the Result',()=>{
    srt.sortingRStatus()
})
And ('Click on Sort Ascending and Descending for In House Status and Verify the Result',()=>{
    srt.sortingInHouseStatus()
})
And ('Click on Sort Ascending and Descending for Warranty Status and Verify the Result',()=>{
    srt.sortingWarrantyStatus()
})
And ('Click on Sort Ascending and Descending for Created By and Verify the Result',()=>{
    srt.sortingCBy()
})
And ('Click on Sort Ascending and Descending for Created Date and Verify the Result',()=>{
    srt.sortingCDate()
})
And ('Click on Sort Ascending and Descending for Last Modified Date and Verify the Result',()=>{
    srt.sortingLdate()
})