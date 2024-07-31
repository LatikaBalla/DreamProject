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
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterAssetTag()
})
And('Click More filter select- internal Technician in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterStudentTechnician()
})
And('Click More filter select- Created By in search box and Verify the Result', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterCreatedBy()
})
And ('Click More filter select- Last Modified Date in search box and Verify the Result',()=>{
    srt.clickOnMoreFilter()
    srt.selectFilterLastModifiedDate()
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
And('Click on filter of Ticket Number contain in search box and Verify the Result', () => {
    srt.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals in search box and Verify the Result', () => {
    srt.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with in search box and Verify the Result', () => {
    srt.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank in search box and Verify the Result', () => {
    srt.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank in search box and Verify the Result', () => {
    srt.filterNotblankTN()
})
//SN
And('Click on filter of Serial Number contain in search box and Verify the Result', () => {
    srt.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals in search box and Verify the Result', () => {
    srt.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with in search box and Verify the Result', () => {
    srt.filterEndswithSN()
})
And('Click on filter of Serial Number Blank in search box and Verify the Result', () => {
    srt.filterBlankSN()
})
And('Click on filter of Serial Number Not blank in search box and Verify the Result', () => {
    srt.filterNotblankSN()
})
//RT
And('Click on filter of Repair type contain in search box and Verify the Result', () => {
    srt.selectFilterRepairType()
})
And('Click on filter of Repair type Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals in search box and Verify the Result', () => {
    srt.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalRT()
})
And('Click on filter of Repair type Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with in search box and Verify the Result', () => {
    srt.filterEndswithRT()
})
And('Click on filter of Repair type Blank in search box and Verify the Result', () => {
    srt.filterBlankRT()
})
And('Click on filter of Repair type Not blank in search box and Verify the Result', () => {
    srt.filterNotblankRT()
})
//B
And('Click on filter of Building contain in search box and Verify the Result', () => {
    srt.selectFilterBuilding()
})
And('Click on filter of Building Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainB()
})
And('Click on filter of Building Equals in search box and Verify the Result', () => {
    srt.filterEqualsB()
})
And('Click on filter of Building Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalB()
})
And('Click on filter of Building Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithB()
})
And('Click on filter of Building Ends with in search box and Verify the Result', () => {
    srt.filterEndswithB()
})
And('Click on filter of Building Blank in search box and Verify the Result', () => {
    srt.filterBlankB()
})
And('Click on filter of Building Not blank in search box and Verify the Result', () => {
    srt.filterNotblankB()
})
//rd
And('Click on filter of Repair device contain in search box and Verify the Result', () => {
    srt.selectFilterRepairDevice()
})
And('Click on filter of Repair device Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals in search box and Verify the Result', () => {
    srt.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalRD()
})
And('Click on filter of Repair device Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with in search box and Verify the Result', () => {
    srt.filterEndswithRD()
})
And('Click on filter of Repair device Blank in search box and Verify the Result', () => {
    srt.filterBlankRD()
})
And('Click on filter of Repair device Not blank in search box and Verify the Result', () => {
    srt.filterNotblankRD()
})
//RS

//tag
And('Click on filter of Asset tag contain in search box and Verify the Result', () => {
    srt.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals in search box and Verify the Result', () => {
    srt.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal in search box and Verify the Result', () => {
    srt.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with in search box and Verify the Result', () => {
    srt.filterEndswithtag()
})
And('Click on filter of Asset tag Blank in search box and Verify the Result', () => {
    srt.filterBlanktag()
})
And('Click on filter of Asset tag Not blank in search box and Verify the Result', () => {
    srt.filterNotblanktag()
})
//rs
And('Click on filter of Repair status with search and check the option and Verify the Result', () => {
    srt.filterRepairStatus()
})
And('Click on filter of Repair status Intake in search box and Verify the Result', () => {
    srt.filterIntakeRS()
})
And('Click on filter of Repair status Closed in search box and Verify the Result', () => {
    srt.filterClosedRS()
})
And('Click on filter of Repair status Complete in search box and Verify the Result', () => {
    srt.filterCompleteRS()
})
And('Click on filter of Repair status In Transit in search box and Verify the Result', () => {
    srt.filterInTransitRS()
})
And('Click on filter of Repair status Waiting on Repair Approval in search box and Verify the Result', () => {
    srt.filterWaitingApprovalRS()
})
And('Click on filter of Repair status Repair in search box and Verify the Result', () => {
    srt.filterRepairRS()
})
And('Click on filter of Repair status all checked with in search box and Verify the Result', () => {
    srt.filterAlloptionsRS()
})
//ws
And('Click on filter of Warranty status contain in search box and Verify the Result', () => {
    srt.selectFilterWarrantyStatus()
})
And('Click on filter of Warranty status Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainWS()
})
And('Click on filter of Warranty status Equals in search box and Verify the Result', () => {
    srt.filterEqualsWS()
})
And('Click on filter of Warranty status Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalWS()
})
And('Click on filter of Warranty status Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithWS()
})
And('Click on filter of Warranty status Ends with in search box and Verify the Result', () => {
    srt.filterEndswithWS()
})
And('Click on filter of Warranty status Blank in search box and Verify the Result', () => {
    srt.filterBlankWS()
})
And('Click on filter of Warranty status Not blank in search box and Verify the Result', () => {
    srt.filterNotblankWS()
})
//cby
And('Click on filter of Created By contain in search box and Verify the Result', () => {
    srt.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals in search box and Verify the Result', () => {
    srt.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalCBy()
})
And('Click on filter of Created By Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with in search box and Verify the Result', () => {
    srt.filterEndswithCBy()
})
And('Click on filter of Created By Blank in search box and Verify the Result', () => {
    srt.filterBlankCBy()
})
And('Click on filter of Created By Not blank in search box and Verify the Result', () => {
    srt.filterNotblankCBy()
})
//Ldate
And('Click on filter of Last Modified Date contain in search box and Verify the Result', () => {
    srt.selectFilteLastModifiedDate()
})
And('Click on filter of Last Modified Date Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainDate()
})
And('Click on filter of Last Modified Date Equals in search box and Verify the Result', () => {
    srt.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before in search box and Verify the Result', () => {
    srt.filterBeforeDate()
})
And('Click on filter of Last Modified Date After in search box and Verify the Result', () => {
    srt.filterAfterDate()
})
And ('Click on filter of Last Modified Date Between with in search box and Verify the Result',()=>{
    srt.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank in search box and Verify the Result', () => {
    srt.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank in search box and Verify the Result', () => {
    srt.filterNotblankDate()
})
//it
And('Click on filter of Internal Technician contain in search box and Verify the Result', () => {
    srt.selectFilterInternalTechnician()
})
And('Click on filter of Internal Technician Does not contain in search box and Verify the Result', () => {
    srt.filterDoesnotcontainIT()
})
And('Click on filter of Internal Technician Equals in search box and Verify the Result', () => {
    srt.filterEqualsIT()
})
And('Click on filter of Internal Technician Does not equal in search box and Verify the Result', () => {
    srt.filterNotequalIT()
})
And('Click on filter of Internal Technician Begins with in search box and Verify the Result', () => {
    srt.filterBeginswithIT()
})
And('Click on filter of Internal Technician Ends with in search box and Verify the Result', () => {
    srt.filterEndswithIT()
})
And('Click on filter of Internal Technician Blank in search box and Verify the Result', () => {
    srt.filterBlankIT()
})
And('Click on filter of Internal Technician Not blank in search box and Verify the Result', () => {
    srt.filterNotblankIT()
})