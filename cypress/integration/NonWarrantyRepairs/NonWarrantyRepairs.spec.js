import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { NonWarrantyRepairsActions } from '../PageObject/PageActions/NonWarrantyRepairsActions.js'

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
    nwr.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And ('Click on Repair360 page',()=>{
nwr.clickOnRepair360()
})
And('Click on NonwarrantyRepairs page', () => {
    nwr.clickOnNonWarrantyRepairs()
})
And ('Click in Estimate Approved page',()=>{
    nwr.clickOnEstimateApproved()
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
And('Click on the Action button and Click on the view button', () => {
    nwr.clickOnActionButton()
    nwr.clickOnViewdetails()
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
And('Click on filter of Total Equals and Verify the Result', () => {
    nwr.filtercontainRI()
})
And('Click on filter of Total Does not equal and Verify the Result', () => {
    nwr.filterDoesnotcontainRI()
})
And('Click on filter of Total Greater than and Verify the Result', () => {
    nwr.filterGreaterthanRI()
})
And('Click on filter of Total Greater than or equal to and Verify the Result', () => {
    nwr.filterGreaterequalRI()
})
And('Click on filter of Total Less than and Verify the Result', () => {
    nwr.filterLessthanRI()
})
And('Click on filter of Total Less than or equal to and Verify the Result', () => {
    nwr.filterLessequalRI()
})
And('Click on filter of Total Between and Verify the Result', () => {
    nwr.filterBetweenRI()
})
And('Click on filter of Total Blank and Verify the Result', () => {
    nwr.filterBlankRI()
})
And('Click on filter of Total Not blank and Verify the Result', () => {
    nwr.filterNotblankRI()
})
//issuetype
And('Click on filter of Issue Type contain and Verify the Result', () => {
    nwr.filterContainIType()
})
And('Click on filter of Issue Type Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainIType()
})
And('Click on filter of Issue Type Equals and Verify the Result', () => {
    nwr.filterEqualsIType()
})
And('Click on filter of Issue Type Does not equal and Verify the Result', () => {
    nwr.filterNotequalIType()
})
And('Click on filter of Issue Type Begins with and Verify the Result', () => {
    nwr.filterBeginswithIType()
})
And('Click on filter of Issue Type Ends with and Verify the Result', () => {
    nwr.filterEndswithIType()
})
And('Click on filter of Issue Type Blank and Verify the Result', () => {
    nwr.filterBlankIType()
})
And('Click on filter of Issue Type Not blank and Verify the Result', () => {
    nwr.filterNotblankIType()
})
//issue
And('Click on filter of Issue contain and Verify the Result', () => {
    nwr.filterContainIssue()
})
And('Click on filter of Issue Does not contain and Verify the Result', () => {
    nwr.filterDoesnotcontainIssue()
})
And('Click on filter of Issue Equals and Verify the Result', () => {
    nwr.filterEqualsIssue()
})
And('Click on filter of Issue Does not equal and Verify the Result', () => {
    nwr.filterNotequalIssue()
})
And('Click on filter of Issue Begins with and Verify the Result', () => {
    nwr.filterBeginswithIssue()
})
And('Click on filter of Issue Ends with and Verify the Result', () => {
    nwr.filterEndswithIssue()
})
And('Click on filter of Issue Blank and Verify the Result', () => {
    nwr.filterBlankIssue()
})
And('Click on filter of Issue Not blank and Verify the Result', () => {
    nwr.filterNotblankIssue()
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
And('Click on filter of Repair type op1 and Verify the Result', () => {
    nwr.selectFilterRepairType1()
})
And ('Click on filter of Repair type op2 and Verify the Result',()=>{
    nwr.selectFilterRepairType2()
})
And ('Click on filter of Repair type op3 and Verify the Result',()=>{
    nwr.selectFilterRepairType3()
})
//ds
And('Click on filter of Repair status op1 and Verify the Result', () => {
    nwr.filterOption1()
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
//sorting
And('Click on Sort Ascending and Descending for Total and Verify the Result', () => {
    nwr.sortingTotal()
})
And('Click on Sort Ascending and Descending for Issue Type and Verify the Result', () => {
    nwr.sortingIssueType()
})
And('Click on Sort Ascending and Descending for Issue and Verify the Result', () => {
    nwr.sortingIssue()
})
And('Click on Sort Ascending and Descending for Ticket Number and Verify the Result', () => {
    nwr.sortingTicketNumber()
})
And('Click on Sort Ascending and Descending for Return Type and Verify the Result', () => {
    nwr.sortingReturnType()
})
And('Click on Sort Ascending and Descending for Serial Number and Verify the Result', () => {
    nwr.sortingSerialNumber()
})
And('Click on Sort Ascending and Descending for Repair Device and Verify the Result', () => {
    nwr.sortingRepairDevice()
})
And('Click on Sort Ascending and Descending for Asset Tag and Verify the Result', () => {
    nwr.sortingAssetTag()
})
And('Click on Sort Ascending and Descending for Repair Status and Verify the Result', () => {
    nwr.sortingRepairStatus()
})
And('Click on Sort Ascending and Descending for Student Name and Verify the Result', () => {
    nwr.sortingStudentName()
})
And('Click on Sort Ascending and Descending for Created By and Verify the Result', () => {
    nwr.sortingCreatedBy()
})
And('Click on Sort Ascending and Descending for Last Modified Date and Verify the Result', () => {
    nwr.sortingLastModifiedDate()
})
And('Click on Sort Ascending and Descending for Repair Box and Verify the Result', () => {
    nwr.sortingRepairBox()
})
And('Click on Sort Ascending and Descending for Internal Technician Name and Verify the Result', () => {
    nwr.sortingInternalTechnicianName()
})
//eA
And('Click on filter of Internal Technician Name contain and Verify the Result for Estimate Approved', () => {
    nwr.filterContainIT1()
})
And('Click on filter of Internal Technician Name Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainIT1()
})
And('Click on filter of Internal Technician Name Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsIT1()
})
And('Click on filter of Internal Technician Name Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalIT1()
})
And('Click on filter of Internal Technician Name Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithIT1()
})
And('Click on filter of Internal Technician Name Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithIT1()
})
And('Click on filter of Internal Technician Name Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankIT1()
})
And('Click on filter of Internal Technician Name Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankIT1()
})
//Student Name
And('Click on filter of Student Name contain and Verify the Result for Estimate Approved', () => {
    nwr.filterContainStdN1()
})
And('Click on filter of Student Name Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainStdN1()
})
And('Click on filter of Student Name Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsStdN1()
})
And('Click on filter of Student Name Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalStdN1()
})
And('Click on filter of Student Name Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithStdN1()
})
And('Click on filter of Student Name Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithStdN1()
})
And('Click on filter of Student Name Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankStdN1()
})
And('Click on filter of Student Name Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankStdN1()
})
//RBox
And('Click on filter of Repair Box contain and Verify the Result for Estimate Approved', () => {
    nwr.filterContainBox1()
})
And('Click on filter of Repair Box Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainBox1()
})
And('Click on filter of Repair Box Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsBox1()
})
And('Click on filter of Repair Box Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalBox1()
})
And('Click on filter of Repair Box Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithBox1()
})
And('Click on filter of Repair Box Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithBox1()
})
And('Click on filter of Repair Box Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankBox1()
})
And('Click on filter of Repair Box Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankBox1()
})
//issue
And('Click on filter of Issue contain and Verify the Result for Estimate Approved', () => {
    nwr.filterContainIssue1()
})
And('Click on filter of Issue Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainIssue1()
})
And('Click on filter of Issue Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsIssue1()
})
And('Click on filter of Issue Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalIssue1()
})
And('Click on filter of Issue Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithIssue1()
})
And('Click on filter of Issue Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithIssue1()
})
And('Click on filter of Issue Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankIssue1()
})
And('Click on filter of Issue Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankIssue1()
})
//rd
And('Click on filter of Repair device contain and Verify the Result for Estimate Approved', () => {
    nwr.selectFilterRepairnwrice1()
})
And('Click on filter of Repair device Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainRD1()
})
And('Click on filter of Repair device Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsRD1()
})
And('Click on filter of Repair device Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalRD1()
})
And('Click on filter of Repair device Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithRD1()
})
And('Click on filter of Repair device Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithRD1()
})
And('Click on filter of Repair device Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankRD1()
})
And('Click on filter of Repair device Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankRD1()
})
//tag
And('Click on filter of Asset tag contain and Verify the Result for Estimate Approved', () => {
    nwr.selectFilterAssetTag1()
})
And('Click on filter of Asset tag Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontaintag1()
})
And('Click on filter of Asset tag Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualstag1()
})
And('Click on filter of Asset tag Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequaltag1()
})
And('Click on filter of Asset tag Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithtag1()
})
And('Click on filter of Asset tag Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithtag1()
})
And('Click on filter of Asset tag Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlanktag1()
})
And('Click on filter of Asset tag Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblanktag1()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result for Estimate Approved', () => {
    nwr.selectFilterSerialNumber1()
})
And('Click on filter of Serial Number Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainSN1()
})
And('Click on filter of Serial Number Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsSN1()
})
And('Click on filter of Serial Number Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalSN1()
})
And('Click on filter of Serial Number Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithSN1()
})
And('Click on filter of Serial Number Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithSN1()
})
And('Click on filter of Serial Number Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankSN1()
})
And('Click on filter of Serial Number Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankSN1()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result for Estimate Approved', () => {
    nwr.selectFilterTicketNumber1()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result for Estimate Approved', () => {
    nwr.filterDoesnotcontainTN1()
})
And('Click on filter of Ticket Number Equals and Verify the Result for Estimate Approved', () => {
    nwr.filterEqualsTN1()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result for Estimate Approved', () => {
    nwr.filterNotequalTN1()
})
And('Click on filter of Ticket Number Begins with and Verify the Result for Estimate Approved', () => {
    nwr.filterBeginswithTN1()
})
And('Click on filter of Ticket Number Ends with and Verify the Result for Estimate Approved', () => {
    nwr.filterEndswithTN1()
})
And('Click on filter of Ticket Number Blank and Verify the Result for Estimate Approved', () => {
    nwr.filterBlankTN1()
})
And('Click on filter of Ticket Number Not blank and Verify the Result for Estimate Approved', () => {
    nwr.filterNotblankTN1()
})
//ds
And('Click on filter of Repair status op1 and Verify the Result for Estimate Approved', () => {
    nwr.filterOption1EA()
})