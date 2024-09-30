import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { InHouseTicketsActions } from '../PageObject/PageActions/InHouseTicketsActions'

const iht = new InHouseTicketsActions()
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
    iht.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    iht.clickOnRepair360()
})
And('Click on InHouseRepairCenter tab', () => {
    iht.clickOnInHouseRepairCenterTab()
})
Then('Click All InHouseTickets tab', () => {
    iht.clickOnInHouseTicketsTab()
})
And('Verify the Title of InHouseTickets Page', () => {
    iht.verifyTitle()
})
Then('Filters of InHouseTickets should be visible', () => {
    iht.filtersVisible()
})
And('Table for InHouseTickets should be visible', () => {
    iht.tableVisible()
})
Then('I should click on Create new button', () => {
    iht.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician, issue and Building', () => {
    iht.selectFailureType()
    iht.selectTechnician()
    iht.selectSerialDevice()
    iht.selectRepaireIssue()
    iht.selectBuilding()
})
Then('Enter the Chromebook issue', () => {
    iht.enterChromebookIssue()
})
And('Click on save button', () => {
    iht.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    iht.verifyNewTicket()
})
And('Click on Download Export button', () => {
    iht.clickOnExport()
})
Then('Verify the successfully downloaded', () => {
    iht.verifyDownload()
})
And('Enter the Search value in search box', () => {
    iht.enterSearchBox()
})
Then('Verify the Results in the table', () => {
    iht.verifySearchResult()
})
And('Click on view button', () => {
    iht.clickViewButton()
})
Then('Verify the Details of student repair ticket', () => {
    iht.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button', () => {
    iht.clickOnEditButton()
})
Then('Update the Technician and Repair Status', () => {
    iht.editTehnician()
    iht.editRepairStatus()
})
And('Click on Update Button', () => {
    iht.clickOnUpdate()
})
Then('Verify Updated successfully', () => {
    iht.verifyUpdate()
})
And('Click on Add Line and Verify', () => {
    iht.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify', () => {
    iht.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    iht.clickOnAddNote()
})
And ('Click on the Update to student Button', () => {
    iht.clickOnUpdateStudent()
})
Then ('Updated to student successfully', () => {
    iht.verifyUpdateStudent()
})
 And ('Click on the Update to in house Button', () => {
    iht.clickOnUpdateInhouse()
 })
Then ('Updated to in house successfully', () => {
    iht.verifyUpdateInhouse()
})
//RI
And('Click on filter of Record Id contain and Verify the Result', () => {
    iht.filtercontainRI()
})
And('Click on filter of Record Id Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainRI()
})
And('Click on filter of Record Id Equals and Verify the Result', () => {
    iht.filterEqualsRI()
})
And('Click on filter of Record Id Does not equal and Verify the Result', () => {
    iht.filterNotequalRI()
})
And('Click on filter of Record Id Begins with and Verify the Result', () => {
    iht.filterBeginswithRI()
})
And('Click on filter of Record Id Ends with and Verify the Result', () => {
    iht.filterEndswithRI()
})
And('Click on filter of Record Id Blank and Verify the Result', () => {
    iht.filterBlankRI()
})
And('Click on filter of Record Id Not blank and Verify the Result', () => {
    iht.filterNotblankRI()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result', () => {
    iht.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals and Verify the Result', () => {
    iht.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result', () => {
    iht.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with and Verify the Result', () => {
    iht.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with and Verify the Result', () => {
    iht.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank and Verify the Result', () => {
    iht.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank and Verify the Result', () => {
    iht.filterNotblankTN()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result', () => {
    iht.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals and Verify the Result', () => {
    iht.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal and Verify the Result', () => {
    iht.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with and Verify the Result', () => {
    iht.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with and Verify the Result', () => {
    iht.filterEndswithSN()
})
And('Click on filter of Serial Number Blank and Verify the Result', () => {
    iht.filterBlankSN()
})
And('Click on filter of Serial Number Not blank and Verify the Result', () => {
    iht.filterNotblankSN()
})
//RT
And('Click on filter of Repair type contain and Verify the Result', () => {
    iht.selectFilterRepairType()
})
And('Click on filter of Repair type Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals and Verify the Result', () => {
    iht.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal and Verify the Result', () => {
    iht.filterNotequalRT()
})
And('Click on filter of Repair type Begins with and Verify the Result', () => {
    iht.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with and Verify the Result', () => {
    iht.filterEndswithRT()
})
And('Click on filter of Repair type Blank and Verify the Result', () => {
    iht.filterBlankRT()
})
And('Click on filter of Repair type Not blank and Verify the Result', () => {
    iht.filterNotblankRT()
})
//B
And('Click on filter of Building contain and Verify the Result', () => {
    iht.selectFilterBuilding()
})
And('Click on filter of Building Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainB()
})
And('Click on filter of Building Equals and Verify the Result', () => {
    iht.filterEqualsB()
})
And('Click on filter of Building Does not equal and Verify the Result', () => {
    iht.filterNotequalB()
})
And('Click on filter of Building Begins with and Verify the Result', () => {
    iht.filterBeginswithB()
})
And('Click on filter of Building Ends with and Verify the Result', () => {
    iht.filterEndswithB()
})
And('Click on filter of Building Blank and Verify the Result', () => {
    iht.filterBlankB()
})
And('Click on filter of Building Not blank and Verify the Result', () => {
    iht.filterNotblankB()
})
//rd
And('Click on filter of Repair device contain and Verify the Result', () => {
    iht.selectFilterRepairDevice()
})
And('Click on filter of Repair device Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals and Verify the Result', () => {
    iht.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal and Verify the Result', () => {
    iht.filterNotequalRD()
})
And('Click on filter of Repair device Begins with and Verify the Result', () => {
    iht.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with and Verify the Result', () => {
    iht.filterEndswithRD()
})
And('Click on filter of Repair device Blank and Verify the Result', () => {
    iht.filterBlankRD()
})
And('Click on filter of Repair device Not blank and Verify the Result', () => {
    iht.filterNotblankRD()
})
//tag
And('Click on filter of Asset tag contain and Verify the Result', () => {
    iht.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals and Verify the Result', () => {
    iht.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal and Verify the Result', () => {
    iht.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with and Verify the Result', () => {
    iht.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with and Verify the Result', () => {
    iht.filterEndswithtag()
})
And('Click on filter of Asset tag Blank and Verify the Result', () => {
    iht.filterBlanktag()
})
And('Click on filter of Asset tag Not blank and Verify the Result', () => {
    iht.filterNotblanktag()
})
//StdN
And('Click on filter of Student Name contain and Verify the Result', () => {
    iht.filterContainStdN()
})
And('Click on filter of Student Name Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainStdN()
})
And('Click on filter of Student Name Equals and Verify the Result', () => {
    iht.filterEqualsStdN()
})
And('Click on filter of Student Name Does not equal and Verify the Result', () => {
    iht.filterNotequalStdN()
})
And('Click on filter of Student Name Begins with and Verify the Result', () => {
    iht.filterBeginswithStdN()
})
And('Click on filter of Student Name Ends with and Verify the Result', () => {
    iht.filterEndswithStdN()
})
And('Click on filter of Student Name Blank and Verify the Result', () => {
    iht.filterBlankStdN()
})
And('Click on filter of Student Name Not blank and Verify the Result', () => {
    iht.filterNotblankStdN()
})
//rs
And('Click on filter of Repair status op1 and Verify the Result', () => {
    iht.filterOption1()
})
And('Click on filter of Repair status op2 and Verify the Result', () => {
    iht.filterOption2()
})
And('Click on filter of Repair status op3 and Verify the Result', () => {
    iht.filterOption3()
})
And('Click on filter of Repair status op4 and Verify the Result', () => {
    iht.filterOption4()
})
And('Click on filter of Repair status op5 and Verify the Result', () => {
    iht.filterOption5()
})
And('Click on filter of Repair status op6 and Verify the Result', () => {
    iht.filterOption6()
})
And('Click on filter of Repair status op7 and Verify the Result', () => {
    iht.filterOption7()
})
And('Click on filter of Repair status op8 and Verify the Result', () => {
    iht.filterOption8()
})
And('Click on filter of Repair status op9 and Verify the Result', () => {
    iht.filterOption9()
})
And('Click on filter of Repair status op10 and Verify the Result', () => {
    iht.filterOption10()
})
//ws
And('Click on filter of In House status op1 and Verify the Result', () => {
    iht.filterOptionIhs1()
})
And('Click on filter of In House status op2 and Verify the Result', () => {
    iht.filterOptionIhs2()
})
And('Click on filter of In House status op3 and Verify the Result', () => {
    iht.filterOptionIhs3()
})
And('Click on filter of In House status op4 and Verify the Result', () => {
    iht.filterOptionIhs4()
})
And('Click on filter of In House status op5 and Verify the Result', () => {
    iht.filterOptionIhs5()
})
And('Click on filter of Warranty status search and Verify the Result', () => {
    iht.filterOptionWS1()
})
And('Click on filter of Warranty status Non Warranty and Verify the Result', () => {
    iht.filterOptionWS2()
})

//cby
And('Click on filter of Created By contain and Verify the Result', () => {
    iht.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals and Verify the Result', () => {
    iht.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal and Verify the Result', () => {
    iht.filterNotequalCBy()
})
And('Click on filter of Created By Begins with and Verify the Result', () => {
    iht.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with and Verify the Result', () => {
    iht.filterEndswithCBy()
})
And('Click on filter of Created By Blank and Verify the Result', () => {
    iht.filterBlankCBy()
})
And('Click on filter of Created By Not blank and Verify the Result', () => {
    iht.filterNotblankCBy()
})
//Ldate
And('Click on filter of Last Modified Date contain and Verify the Result', () => {
    iht.selectFilteLastModifiedDate()
})
And('Click on filter of Last Modified Date Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainDate()
})
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    iht.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    iht.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    iht.filterBeforeDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    iht.filterAfterDate()
})
And ('Click on filter of Last Modified Date Between with and Verify the Result',()=>{
    iht.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    iht.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    iht.filterNotblankDate()
})
//it
And('Click on filter of Internal Technician contain and Verify the Result', () => {
    iht.selectFilterInternalTechnician()
})
And('Click on filter of Internal Technician Does not contain and Verify the Result', () => {
    iht.filterDoesnotcontainIT()
})
And('Click on filter of Internal Technician Equals and Verify the Result', () => {
    iht.filterEqualsIT()
})
And('Click on filter of Internal Technician Does not equal and Verify the Result', () => {
    iht.filterNotequalIT()
})
And('Click on filter of Internal Technician Begins with and Verify the Result', () => {
    iht.filterBeginswithIT()
})
And('Click on filter of Internal Technician Ends with and Verify the Result', () => {
    iht.filterEndswithIT()
})
And('Click on filter of Internal Technician Blank and Verify the Result', () => {
    iht.filterBlankIT()
})
And('Click on filter of Internal Technician Not blank and Verify the Result', () => {
    iht.filterNotblankIT()
})