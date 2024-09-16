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
And('Click on filter of Repair type Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals and Verify the Result', () => {
    nwr.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal and Verify the Result', () => {
    nwr.filterNotequalRT()
})
And('Click on filter of Repair type Begins with and Verify the Result', () => {
    nwr.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with and Verify the Result', () => {
    nwr.filterEndswithRT()
})
And('Click on filter of Repair type Blank and Verify the Result', () => {
    nwr.filterBlankRT()
})
And('Click on filter of Repair type Not blank and Verify the Result', () => {
    nwr.filterNotblankRT()
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
And('Click on filter of Repair status op2 and Verify the Result', () => {
    nwr.filterOption2()
})
And('Click on filter of Repair status op3 and Verify the Result', () => {
    nwr.filterOption3()
})
And('Click on filter of Repair status op4 and Verify the Result', () => {
    nwr.filterOption4()
})
And('Click on filter of Repair status op5 and Verify the Result', () => {
    nwr.filterOption5()
})
And('Click on filter of Repair status op6 and Verify the Result', () => {
    nwr.filterOption6()
})
And('Click on filter of Repair status op7 and Verify the Result', () => {
    nwr.filterOption7()
})
And('Click on filter of Repair status op8 and Verify the Result', () => {
    nwr.filterOption8()
})
And('Click on filter of Repair status op9 and Verify the Result', () => {
    nwr.filterOption9()
})
And('Click on filter of Repair status op10 and Verify the Result', () => {
    nwr.filterOption10()
})
And('Click on filter of Repair status op11 and Verify the Result', () => {
    nwr.filterOption11()
})
//B
And('Click on filter of Building contain and Verify the Result', () => {
    nwr.selectFilterBuilding()
})
And('Click on filter of Building Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainB()
})
And('Click on filter of Building Equals and Verify the Result', () => {
    nwr.filterEqualsB()
})
And('Click on filter of Building Does not equal and Verify the Result', () => {
    nwr.filterNotequalB()
})
And('Click on filter of Building Begins with and Verify the Result', () => {
    nwr.filterBeginswithB()
})
And('Click on filter of Building Ends with and Verify the Result', () => {
    nwr.filterEndswithB()
})
And('Click on filter of Building Blank and Verify the Result', () => {
    nwr.filterBlankB()
})
And('Click on filter of Building Not blank and Verify the Result', () => {
    nwr.filterNotblankB()
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