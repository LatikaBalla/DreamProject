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
And('Enter the Search -  Record Id in search box and Verify the Result', () => {
    rt.searchRecordId()
})
And('Click on filter of Re type contain in search box and Verify the Result', () => {
    rt.searchTicketNumber()
})
Then('Click on filter of Re type contain in search box and Verify the Result', () => {
    rt.searchRepairType()
})
And('Enter the Search - Serial Number in search box and Verify the Result', () => {
    rt.searchSerialNumber()
})
Then('Click on filter of Bu contain in search box and Verify the Result', () => {
    rt.searchRepairStatus()
})
And('Enter the Search - Repair Box in search box and Verify the Result', () => {
    rt.searchRepairBox()
})
Then('Enter the Search - Asset tag in search box and Verify the Result', () => {
    rt.searchAssetTag()
})
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRecordId()
})
And('Click on filter of Ticket Number contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterTicketNumber()
})
And('Click on filter of Repair type contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairType()
})
And('Click on filter of Serial Number contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterSerialNumber()
})
And('Click on filter of Building contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterBuilding()
})
And('Click More filter select- Repair status in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairStatus()
})
And('Click on filter of Repair Box contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairBox()
})
And('Click on filter of Asset tag contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterAssetTag()
})
And('Click on filter of Created By contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterCreatedBy()
})
And('Click on filter of Last Modified Date contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilteLastModifiedDate()
})
Then('Click on Clear filter', () => {
    rt.clickOnClearFilter()
})
And('Click on filter of Repair device contain in search box and Verify the Result', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairDevice()
})
And('Enter the Search value in search box', () => {
    rt.enterSearchBox()
})
Then('Verify the Results in the table', () => {
    rt.verifySearchResult()
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
And('Click on filter of Ticket Number Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals in search box and Verify the Result', () => {
    rt.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with in search box and Verify the Result', () => {
    rt.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank in search box and Verify the Result', () => {
    rt.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank in search box and Verify the Result', () => {
    rt.filterNotblankTN()
})

And('Click on filter of Serial Number Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals in search box and Verify the Result', () => {
    rt.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with in search box and Verify the Result', () => {
    rt.filterEndswithSN()
})
And('Click on filter of Serial Number Blank in search box and Verify the Result', () => {
    rt.filterBlankSN()
})
And('Click on filter of Serial Number Not blank in search box and Verify the Result', () => {
    rt.filterNotblankSN()
})

And('Click on filter of Repair type Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals in search box and Verify the Result', () => {
    rt.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalRT()
})
And('Click on filter of Repair type Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with in search box and Verify the Result', () => {
    rt.filterEndswithRT()
})
And('Click on filter of Repair type Blank in search box and Verify the Result', () => {
    rt.filterBlankRT()
})
And('Click on filter of Repair type Not blank in search box and Verify the Result', () => {
    rt.filterNotblankRT()
})

And('Click on filter of Building Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainB()
})
And('Click on filter of Building Equals in search box and Verify the Result', () => {
    rt.filterEqualsB()
})
And('Click on filter of Building Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalB()
})
And('Click on filter of Building Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithB()
})
And('Click on filter of Building Ends with in search box and Verify the Result', () => {
    rt.filterEndswithB()
})
And('Click on filter of Building Blank in search box and Verify the Result', () => {
    rt.filterBlankB()
})
And('Click on filter of Building Not blank in search box and Verify the Result', () => {
    rt.filterNotblankB()
})

And('Click on filter of Repair device Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals in search box and Verify the Result', () => {
    rt.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalRD()
})
And('Click on filter of Repair device Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with in search box and Verify the Result', () => {
    rt.filterEndswithRD()
})
And('Click on filter of Repair device Blank in search box and Verify the Result', () => {
    rt.filterBlankRD()
})
And('Click on filter of Repair device Not blank in search box and Verify the Result', () => {
    rt.filterNotblankRD()
})

And('Click on filter of Repair Box Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainBox()
})
And('Click on filter of Repair Box Greater than in search box and Verify the Result', () => {
    rt.filterGreaterthanBox()
})
And('Click on filter of Repair Box Greater than or equal to in search box and Verify the Result', () => {
    rt.filterGreaterequalBox()
})
And('Click on filter of Repair Box Less than in search box and Verify the Result', () => {
    rt.filterLessthanBox()
})
And('Click on filter of Repair Box Less than or equal to in search box and Verify the Result', () => {
    rt.filterLessequalBox()
})
And('Click on filter of Repair Box Between in search box and Verify the Result', () => {
    rt.filterBetweenBox()
})
And('Click on filter of Repair Box Blank in search box and Verify the Result', () => {
    rt.filterBlankBox()
})
And('Click on filter of Repair Box Not blank in search box and Verify the Result', () => {
    rt.filterNotblankBox()
})

And('Click on filter of Asset tag Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals in search box and Verify the Result', () => {
    rt.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal in search box and Verify the Result', () => {
    rt.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with in search box and Verify the Result', () => {
    rt.filterEndswithtag()
})
And('Click on filter of Asset tag Blank in search box and Verify the Result', () => {
    rt.filterBlanktag()
})
And('Click on filter of Asset tag Not blank in search box and Verify the Result', () => {
    rt.filterNotblanktag()
})

And('Click on filter of Created By Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals in search box and Verify the Result', () => {
    rt.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalCBy()
})
And('Click on filter of Created By Begins with in search box and Verify the Result', () => {
    rt.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with in search box and Verify the Result', () => {
    rt.filterEndswithCBy()
})
And('Click on filter of Created By Blank in search box and Verify the Result', () => {
    rt.filterBlankCBy()
})
And('Click on filter of Created By Not blank in search box and Verify the Result', () => {
    rt.filterNotblankCBy()
})

And('Click on filter of Last Modified Date Does not contain in search box and Verify the Result', () => {
    rt.filterDoesnotcontainDate()
})
And('Click on filter of Last Modified Date Equals in search box and Verify the Result', () => {
    rt.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal in search box and Verify the Result', () => {
    rt.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before in search box and Verify the Result', () => {
    rt.filterBeginswithDate()
})
And('Click on filter of Last Modified Date After in search box and Verify the Result', () => {
    rt.filterEndswithDate()
})
And ('Click on filter of Last Modified Date Between with in search box and Verify the Result',()=>{
    rt.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank in search box and Verify the Result', () => {
    rt.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank in search box and Verify the Result', () => {
    rt.filterNotblankDate()
})