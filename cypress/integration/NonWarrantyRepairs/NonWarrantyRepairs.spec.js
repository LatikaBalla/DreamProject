import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { NonWarrantyRepairsActions } from '../PageObject/PageActions/NonWarrantyRepairsActions.js'

const repc = new ReportCenterActions()
const nwr = new NonWarrantyRepairsActions()
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
    repc.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Report center page', () => {
    repc.clickOnReportCenter()
})
And('Click on NonwarrantyRepairs page', () => {
    nwr.clickOnNonWarrantyRepairs()
})
Then('Select failure Type, Return site and Serial device', () => {
    nwr.selectFailureType()
    nwr.selectSite()
    nwr.selectSerialdevice()
})
And('Select Building and Chromebook issue', () => {
    nwr.selectBuilding()
    nwr.selectRepaireIssue()
})
Then('Enter the Describe Your Issue', () => {
    nwr.enterChromebookIssue()
})
And('Click on save button', () => {
    nwr.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    nwr.verifyNewTicket()
})
And('Click on the view button', () => {
    nwr.clickOnTicketNumberTable()
})
Then('Verify the Repair Ticket page will open', () => {
    nwr.verifyRapairTicketPAge()
})
And('Verfiy the details of Ticket', () => {
    nwr.verifyTicketDetails()
})
Then('Click on the download Ticket Estimation button', () => {
    nwr.clickOnDownloadButton()
   // cy.go('back')
})
And('Click on the download Ticket Estimation button', () => {
    nwr.verifyDownloadSuccessful()
})
Then('Click on the export button', () => {
    nwr.clickOnExport()
})
Then('Click on Add Repair Image and Verify', () => {
    nwr.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    nwr.clickOnAddNote()
})
//RI
And('Click on filter of Repair Id Equals and Verify the Result', () => {
    nwr.filtercontainRI()
})
And('Click on filter of Repair Id Does not equal and Verify the Result', () => {
    nwr.filterDoesnotcontainRI()
})
And('Click on filter of Repair Id Greater than and Verify the Result', () => {
    nwr.filterGreaterthanRI()
})
And('Click on filter of Repair Id Greater than or equal to and Verify the Result', () => {
    nwr.filterGreaterequalRI()
})
And('Click on filter of Repair Id Less than and Verify the Result', () => {
    nwr.filterLessthanRI()
})
And('Click on filter of Repair Id Less than or equal to and Verify the Result', () => {
    nwr.filterLessequalRI()
})
And('Click on filter of Repair Id Between and Verify the Result', () => {
    nwr.filterBetweenRI()
})
And('Click on filter of Repair Id Blank and Verify the Result', () => {
    nwr.filterBlankRI()
})
And('Click on filter of Repair Id Not blank and Verify the Result', () => {
    nwr.filterNotblankRI()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result', () => {
    nwr.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals and Verify the Result', () => {
    nwr.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result', () => {
    nwr.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with and Verify the Result', () => {
    nwr.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with and Verify the Result', () => {
    nwr.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank and Verify the Result', () => {
    nwr.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank and Verify the Result', () => {
    nwr.filterNotblankTN()
})
//RT
And('Click on filter of Repair type contain and Verify the Result', () => {
    nwr.selectFilterRepairType()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result', () => {
    nwr.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals and Verify the Result', () => {
    nwr.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal and Verify the Result', () => {
    nwr.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with and Verify the Result', () => {
    nwr.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with and Verify the Result', () => {
    nwr.filterEndswithSN()
})
And('Click on filter of Serial Number Blank and Verify the Result', () => {
    nwr.filterBlankSN()
})
And('Click on filter of Serial Number Not blank and Verify the Result', () => {
    nwr.filterNotblankSN()
})
//ds
And('Click on filter of Repair status op1 and Verify the Result', () => {
    nwr.filterOption1()
})
//RBox
And('Click on filter of Repair Box contain and Verify the Result', () => {
    nwr.filterContainBox()
})
And('Click on filter of Repair Box Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainBox()
})
And('Click on filter of Repair Box Equals and Verify the Result', () => {
    nwr.filterEqualsBox()
})
And('Click on filter of Repair Box Does not equal and Verify the Result', () => {
    nwr.filterNotequalBox()
})
And('Click on filter of Repair Box Begins with and Verify the Result', () => {
    nwr.filterBeginswithBox()
})
And('Click on filter of Repair Box Ends with and Verify the Result', () => {
    nwr.filterEndswithBox()
})
And('Click on filter of Repair Box Blank and Verify the Result', () => {
    nwr.filterBlankBox()
})
And('Click on filter of Repair Box Not blank and Verify the Result', () => {
    nwr.filterNotblankBox()
})
//rd
And('Click on filter of Repair device contain and Verify the Result', () => {
    nwr.selectFilterRepairnwrice()
})
And('Click on filter of Repair device Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals and Verify the Result', () => {
    nwr.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal and Verify the Result', () => {
    nwr.filterNotequalRD()
})
And('Click on filter of Repair device Begins with and Verify the Result', () => {
    nwr.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with and Verify the Result', () => {
    nwr.filterEndswithRD()
})
And('Click on filter of Repair device Blank and Verify the Result', () => {
    nwr.filterBlankRD()
})
And('Click on filter of Repair device Not blank and Verify the Result', () => {
    nwr.filterNotblankRD()
})
//tag
And('Click on filter of Asset tag contain and Verify the Result', () => {
    nwr.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals and Verify the Result', () => {
    nwr.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal and Verify the Result', () => {
    nwr.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with and Verify the Result', () => {
    nwr.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with and Verify the Result', () => {
    nwr.filterEndswithtag()
})
And('Click on filter of Asset tag Blank and Verify the Result', () => {
    nwr.filterBlanktag()
})
And('Click on filter of Asset tag Not blank and Verify the Result', () => {
    nwr.filterNotblanktag()
})
//Student Name
And('Click on filter of Student Name contain and Verify the Result', () => {
    nwr.filterContainStdN()
})
And('Click on filter of Student Name Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainStdN()
})
And('Click on filter of Student Name Equals and Verify the Result', () => {
    nwr.filterEqualsStdN()
})
And('Click on filter of Student Name Does not equal and Verify the Result', () => {
    nwr.filterNotequalStdN()
})
And('Click on filter of Student Name Begins with and Verify the Result', () => {
    nwr.filterBeginswithStdN()
})
And('Click on filter of Student Name Ends with and Verify the Result', () => {
    nwr.filterEndswithStdN()
})
And('Click on filter of Student Name Blank and Verify the Result', () => {
    nwr.filterBlankStdN()
})
And('Click on filter of Student Name Not blank and Verify the Result', () => {
    nwr.filterNotblankStdN()
})
//IT
And('Click on filter of Internal Technician Name contain and Verify the Result', () => {
    nwr.filterContainIT()
})
And('Click on filter of Internal Technician Name Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainIT()
})
And('Click on filter of Internal Technician Name Equals and Verify the Result', () => {
    nwr.filterEqualsIT()
})
And('Click on filter of Internal Technician Name Does not equal and Verify the Result', () => {
    nwr.filterNotequalIT()
})
And('Click on filter of Internal Technician Name Begins with and Verify the Result', () => {
    nwr.filterBeginswithIT()
})
And('Click on filter of Internal Technician Name Ends with and Verify the Result', () => {
    nwr.filterEndswithIT()
})
And('Click on filter of Internal Technician Name Blank and Verify the Result', () => {
    nwr.filterBlankIT()
})
And('Click on filter of Internal Technician Name Not blank and Verify the Result', () => {
    nwr.filterNotblankIT()
})
//cby
And('Click on filter of Created By contain and Verify the Result', () => {
    nwr.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals and Verify the Result', () => {
    nwr.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal and Verify the Result', () => {
    nwr.filterNotequalCBy()
})
And('Click on filter of Created By Begins with and Verify the Result', () => {
    nwr.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with and Verify the Result', () => {
    nwr.filterEndswithCBy()
})
And('Click on filter of Created By Blank and Verify the Result', () => {
    nwr.filterBlankCBy()
})
And('Click on filter of Created By Not blank and Verify the Result', () => {
    nwr.filterNotblankCBy()
})
//Ldate
And('Click on filter of Last Modified Date contain and Verify the Result', () => {
    nwr.selectFilteLastModifiedDate()
})
And('Click on filter of Last Modified Date Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainDate()
})
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    nwr.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    nwr.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    nwr.filterBeforeDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    nwr.filterAfterDate()
})
And ('Click on filter of Last Modified Date Between with and Verify the Result',()=>{
    nwr.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    nwr.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    nwr.filterNotblankDate()
})