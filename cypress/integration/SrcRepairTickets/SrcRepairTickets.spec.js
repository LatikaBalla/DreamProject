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
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    srt.searchRecordId()
})
Then('Enter the Search - Ticket Number in search box and Verify the Result', () => {
    srt.searchTicketNumber()
})
And('Enter the Search - Repair type in search box and Verify the Result', () => {
    srt.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    srt.searchRepairStatus()
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
//RI
And('Click on filter of Record Id Equals and Verify the Result', () => {
    srt.filtercontainRI()
})
And('Click on filter of Record Id Does not equal and Verify the Result', () => {
    srt.filterDoesnotcontainRI()
})
And('Click on filter of Record Id Greater than and Verify the Result', () => {
    srt.filterGreaterthanRI()
})
And('Click on filter of Record Id Greater than or equal to and Verify the Result', () => {
    srt.filterGreaterequalRI()
})
And('Click on filter of Record Id Less than and Verify the Result', () => {
    srt.filterLessthanRI()
})
And('Click on filter of Record Id Less than or equal to and Verify the Result', () => {
    srt.filterLessequalRI()
})
And('Click on filter of Record Id Between and Verify the Result', () => {
    srt.filterBetweenRI()
})
And('Click on filter of Record Id Blank and Verify the Result', () => {
    srt.filterBlankRI()
})
And('Click on filter of Record Id Not blank and Verify the Result', () => {
    srt.filterNotblankRI()
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
//B
And('Click on filter of Building contain and Verify the Result', () => {
    srt.selectFilterBuilding()
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
//Ldate
And('Click on filter of Last Modified Date contain and Verify the Result', () => {
    srt.selectFilteLastModifiedDate()
})
And('Click on filter of Last Modified Date Does not contain and Verify the Result', () => {
    srt.filterDoesnotcontainDate()
})
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