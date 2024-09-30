import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions.js'
const dev = new DeviceRepairReportActions()
const repc = new ReportCenterActions()

Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    Cypress.on("uncaught:exception", () => {
        return false;
    });
    cy.visit("/")
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
Then('I should be redirected to the Report center page', () => {
    cy.url().should('include', '/report-center')
})
And('Verify the Title of Report center Page', () => {
    repc.verifyTitleReportCenter()
})
Then('Verify the VivacityRepairReport Tab should be visible', () => {
    repc.vivacityRepairReportTabVisible()
})
And('Verify the InHouseRepairReport tab should be visible', () => {
    repc.inhouseRepairReportTabVisible()
})
Then('Verify the DeviceRepairReport tab should be visible', () => {
    repc.deviceRepairReportTabVisible()
})
And('Verify the NonwarrantyRepairs tab should be visible', () => {
    repc.nonwarrantyRepairsTabVisible()
})
Then('Click on VivacityRepairReport page', () => {
    viva.clickOnVivacityRepairReport()
})
And('Verify all sections of VivacityRepairReport Page should be visible', () => {
    viva.AllSectionsVisible()
})
Then('Verify repair status graph should be visible', () => {
    viva.repairStatusGraphVisible()
})
Then('Verify warranty claim graph should be visible', () => {
    viva.warrantyClaimGraphvisible()
})
And('Verify cavas of Repair ticket by status should be visible', () => {
    viva.cavasOfRepairTicketByStatusVisible()
})
Then('Click on InHouseRepairReport page', () => {
    inh.clickOnInHouseRepairReport()
})
And('Verify all sections of InHouseRepairReport Page should be visible', () => {
    inh.AllSectionsVisible()
})
Then('Verify ticketdata graph should be visible', () => {
    inh.ticketDataGraphVisible()
})
Then('Click on DeviceRepairReport page', () => {
    dev.clickOnDeviceRepairReport()
    cy.wait(3000)
})
And('Verify title of DeviceRepairReport Page should be visible', () => {
    dev.verifyTitle()
})
Then('Verify the filters should be visible', () => {
    dev.filtersVisible()
})
Then('Verify history table should be visible', () => {
    dev.tableVisible()
})
And('Enter the Search - Record Id and Verify the Result', () => {
    dev.searchRecordId()
})
Then('Enter the Search - Repair type and Verify the Result', () => {
    dev.searchRepairType()
})
Then('Enter the Search - Repair status and Verify the Result', () => {
    dev.searchRepairStatus()
})
And('Enter the Search - Repair Box and Verify the Result', () => {
    dev.searchRepairBox()
})
And('Enter the Ticket Number in search box', () => {
    dev.selectdropdownList()
    dev.enterTicketNumberSearch()
})
Then('Verify the Ticket details in table', () => {
    dev.verifyTicketDetailsTable()
})
And('Click on the View button', () => {
    dev.clickOnviewButton()
})
Then('Verify the Repair Ticket page will open', () => {
    dev.verifyRapairTicketPAge()
})
And('Verfiy the details of Ticket', () => {
    dev.verifyTicketDetails()
})
Then('Click on the download Ticket Estimation button', () => {
    dev.clickOnDownloadButton()
})
And('Verify downloaded ticket successfully', () => {
    dev.verifyDownloadSuccessful()
})
And('Click on clear button', () => {
    dev.clickOnClearButton()
})
Then('Verify the search box is cleared', () => {
    dev.searchBoxEmpty()
})
And('Click on NonwarrantyRepairs page', () => {
    nwr.clickOnNonWarrantyRepairs()
})
Then('Verify title of NonWarrantyRepairs Page should be visible', () => {
    nwr.verifyTitle()
})
And('Verify the NonWarranty Form should be visible', () => {
    nwr.formVisible()
})
Then('Verify table and filter should be visible', () => {
    nwr.filtersVisible()
    nwr.tableVisible()
})
Then('Click on the download button', () => {
    dev.clickOndownload()
})
Then('Click on Add Repair Image and Verify', () => {
    dev.clickOnAddRepairImage()
})
And('Click on Add Note and Verify', () => {
    dev.clickOnAddNote()
})
//RI
And('Click on filter of Repair Id Equals and Verify the Result', () => {
    dev.filtercontainRI()
})
And('Click on filter of Repair Id Does not equal and Verify the Result', () => {
    dev.filterDoesnotcontainRI()
})
And('Click on filter of Repair Id Greater than and Verify the Result', () => {
    dev.filterGreaterthanRI()
})
And('Click on filter of Repair Id Greater than or equal to and Verify the Result', () => {
    dev.filterGreaterequalRI()
})
And('Click on filter of Repair Id Less than and Verify the Result', () => {
    dev.filterLessthanRI()
})
And('Click on filter of Repair Id Less than or equal to and Verify the Result', () => {
    dev.filterLessequalRI()
})
And('Click on filter of Repair Id Between and Verify the Result', () => {
    dev.filterBetweenRI()
})
And('Click on filter of Repair Id Blank and Verify the Result', () => {
    dev.filterBlankRI()
})
And('Click on filter of Repair Id Not blank and Verify the Result', () => {
    dev.filterNotblankRI()
})
//TN
And('Click on filter of Ticket Number contain and Verify the Result', () => {
    dev.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals and Verify the Result', () => {
    dev.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal and Verify the Result', () => {
    dev.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with and Verify the Result', () => {
    dev.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with and Verify the Result', () => {
    dev.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank and Verify the Result', () => {
    dev.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank and Verify the Result', () => {
    dev.filterNotblankTN()
})
//RT
And('Click on filter of Repair type contain and Verify the Result', () => {
    dev.selectFilterRepairType()
})
And('Click on filter of Repair type Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals and Verify the Result', () => {
    dev.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal and Verify the Result', () => {
    dev.filterNotequalRT()
})
And('Click on filter of Repair type Begins with and Verify the Result', () => {
    dev.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with and Verify the Result', () => {
    dev.filterEndswithRT()
})
And('Click on filter of Repair type Blank and Verify the Result', () => {
    dev.filterBlankRT()
})
And('Click on filter of Repair type Not blank and Verify the Result', () => {
    dev.filterNotblankRT()
})
//SN
And('Click on filter of Serial Number contain and Verify the Result', () => {
    dev.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals and Verify the Result', () => {
    dev.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal and Verify the Result', () => {
    dev.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with and Verify the Result', () => {
    dev.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with and Verify the Result', () => {
    dev.filterEndswithSN()
})
And('Click on filter of Serial Number Blank and Verify the Result', () => {
    dev.filterBlankSN()
})
And('Click on filter of Serial Number Not blank and Verify the Result', () => {
    dev.filterNotblankSN()
})
//ds
And('Click on filter of Repair status op1 and Verify the Result', () => {
    dev.filterOption1()
})
And('Click on filter of Repair status op2 and Verify the Result', () => {
    dev.filterOption2()
})
And('Click on filter of Repair status op3 and Verify the Result', () => {
    dev.filterOption3()
})
And('Click on filter of Repair status op4 and Verify the Result', () => {
    dev.filterOption4()
})
And('Click on filter of Repair status op5 and Verify the Result', () => {
    dev.filterOption5()
})
And('Click on filter of Repair status op6 and Verify the Result', () => {
    dev.filterOption6()
})
And('Click on filter of Repair status op7 and Verify the Result', () => {
    dev.filterOption7()
})
And('Click on filter of Repair status op8 and Verify the Result', () => {
    dev.filterOption8()
})
And('Click on filter of Repair status op9 and Verify the Result', () => {
    dev.filterOption9()
})
And('Click on filter of Repair status op10 and Verify the Result', () => {
    dev.filterOption10()
})
And('Click on filter of Repair status op11 and Verify the Result', () => {
    dev.filterOption11()
})
//B
And('Click on filter of Building contain and Verify the Result', () => {
    dev.selectFilterBuilding()
})
And('Click on filter of Building Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainB()
})
And('Click on filter of Building Equals and Verify the Result', () => {
    dev.filterEqualsB()
})
And('Click on filter of Building Does not equal and Verify the Result', () => {
    dev.filterNotequalB()
})
And('Click on filter of Building Begins with and Verify the Result', () => {
    dev.filterBeginswithB()
})
And('Click on filter of Building Ends with and Verify the Result', () => {
    dev.filterEndswithB()
})
And('Click on filter of Building Blank and Verify the Result', () => {
    dev.filterBlankB()
})
And('Click on filter of Building Not blank and Verify the Result', () => {
    dev.filterNotblankB()
})
//rd
And('Click on filter of Repair device contain and Verify the Result', () => {
    dev.selectFilterRepairDevice()
})
And('Click on filter of Repair device Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals and Verify the Result', () => {
    dev.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal and Verify the Result', () => {
    dev.filterNotequalRD()
})
And('Click on filter of Repair device Begins with and Verify the Result', () => {
    dev.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with and Verify the Result', () => {
    dev.filterEndswithRD()
})
And('Click on filter of Repair device Blank and Verify the Result', () => {
    dev.filterBlankRD()
})
And('Click on filter of Repair device Not blank and Verify the Result', () => {
    dev.filterNotblankRD()
})
//tag
And('Click on filter of Asset tag contain and Verify the Result', () => {
    dev.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals and Verify the Result', () => {
    dev.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal and Verify the Result', () => {
    dev.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with and Verify the Result', () => {
    dev.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with and Verify the Result', () => {
    dev.filterEndswithtag()
})
And('Click on filter of Asset tag Blank and Verify the Result', () => {
    dev.filterBlanktag()
})
And('Click on filter of Asset tag Not blank and Verify the Result', () => {
    dev.filterNotblanktag()
})
//StdN
And('Click on filter of Student Name contain and Verify the Result', () => {
    dev.filterContainStdN()
})
And('Click on filter of Student Name Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainStdN()
})
And('Click on filter of Student Name Equals and Verify the Result', () => {
    dev.filterEqualsStdN()
})
And('Click on filter of Student Name Does not equal and Verify the Result', () => {
    dev.filterNotequalStdN()
})
And('Click on filter of Student Name Begins with and Verify the Result', () => {
    dev.filterBeginswithStdN()
})
And('Click on filter of Student Name Ends with and Verify the Result', () => {
    dev.filterEndswithStdN()
})
And('Click on filter of Student Name Blank and Verify the Result', () => {
    dev.filterBlankStdN()
})
And('Click on filter of Student Name Not blank and Verify the Result', () => {
    dev.filterNotblankStdN()
})
//cby
And('Click on filter of Created By contain and Verify the Result', () => {
    dev.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain and Verify the Result', () => {
    dev.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals and Verify the Result', () => {
    dev.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal and Verify the Result', () => {
    dev.filterNotequalCBy()
})
And('Click on filter of Created By Begins with and Verify the Result', () => {
    dev.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with and Verify the Result', () => {
    dev.filterEndswithCBy()
})
And('Click on filter of Created By Blank and Verify the Result', () => {
    dev.filterBlankCBy()
})
And('Click on filter of Created By Not blank and Verify the Result', () => {
    dev.filterNotblankCBy()
})