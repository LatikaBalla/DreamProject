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
And('Enter the Search - Record Id in search box and Verify the Result', () => {
    dev.searchRecordId()
})
Then('Enter the Search - Repair type in search box and Verify the Result', () => {
    dev.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result', () => {
    dev.searchRepairStatus() 
})
And('Enter the Search - Repair Box in search box and Verify the Result', () => {
    dev.searchRepairBox()
})
And('Enter the Ticket Number in search box', () => {
    dev.selectdropdownList()
    dev.enterTicketNumberSearch()
})
Then('Verify the Ticket details in table', () => {
    dev.verifyTicketDetailsTable()
})
And('Click on the Ticket Number', () => {
    dev.clickOnTicketNumberTable()
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
Then('Click on the export button', () => {
    dev.clickOnExport()
})
Then('Click on Clear filter', () => {
    dev.clickOnClearFilter()
})
//RI
And('Click on filter of Repair Id Equals in search box and Verify the Result', () => {
    dev.filtercontainRI()
})
And('Click on filter of Repair Id Does not equal in search box and Verify the Result', () => {
    dev.filterDoesnotcontainRI()
})
And('Click on filter of Repair Id Greater than in search box and Verify the Result', () => {
    dev.filterGreaterthanRI()
})
And('Click on filter of Repair Id Greater than or equal to in search box and Verify the Result', () => {
    dev.filterGreaterequalRI()
})
And('Click on filter of Repair Id Less than in search box and Verify the Result', () => {
    dev.filterLessthanRI()
})
And('Click on filter of Repair Id Less than or equal to in search box and Verify the Result', () => {
    dev.filterLessequalRI()
})
And('Click on filter of Repair Id Between in search box and Verify the Result', () => {
    dev.filterBetweenRI()
})
And('Click on filter of Repair Id Blank in search box and Verify the Result', () => {
    dev.filterBlankRI()
})
And('Click on filter of Repair Id Not blank in search box and Verify the Result', () => {
    dev.filterNotblankRI()
})
//TN
And('Click on filter of Ticket Number contain in search box and Verify the Result', () => {
    dev.selectFilterTicketNumber()
})
And('Click on filter of Ticket Number Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainTN()
})
And('Click on filter of Ticket Number Equals in search box and Verify the Result', () => {
    dev.filterEqualsTN()
})
And('Click on filter of Ticket Number Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalTN()
})
And('Click on filter of Ticket Number Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithTN()
})
And('Click on filter of Ticket Number Ends with in search box and Verify the Result', () => {
    dev.filterEndswithTN()
})
And('Click on filter of Ticket Number Blank in search box and Verify the Result', () => {
    dev.filterBlankTN()
})
And('Click on filter of Ticket Number Not blank in search box and Verify the Result', () => {
    dev.filterNotblankTN()
})
//RT
And('Click on filter of Repair type contain in search box and Verify the Result', () => {
    dev.selectFilterRepairType()
})
And('Click on filter of Repair type Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainRT()
})
And('Click on filter of Repair type Equals in search box and Verify the Result', () => {
    dev.filterEqualsRT()
})
And('Click on filter of Repair type Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalRT()
})
And('Click on filter of Repair type Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithRT()
})
And('Click on filter of Repair type Ends with in search box and Verify the Result', () => {
    dev.filterEndswithRT()
})
And('Click on filter of Repair type Blank in search box and Verify the Result', () => {
    dev.filterBlankRT()
})
And('Click on filter of Repair type Not blank in search box and Verify the Result', () => {
    dev.filterNotblankRT()
})
//SN
And('Click on filter of Serial Number contain in search box and Verify the Result', () => {
    dev.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals in search box and Verify the Result', () => {
    dev.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with in search box and Verify the Result', () => {
    dev.filterEndswithSN()
})
And('Click on filter of Serial Number Blank in search box and Verify the Result', () => {
    dev.filterBlankSN()
})
And('Click on filter of Serial Number Not blank in search box and Verify the Result', () => {
    dev.filterNotblankSN()
})
//dev
And('Click on filter of Repair status contain in search box and Verify the Result', () => {
    dev.filtercontainRS()
})
And('Click on filter of Repair status Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainRS()
})
And('Click on filter of Repair status Equals in search box and Verify the Result', () => {
    dev.filterEqualsRS()
})
And('Click on filter of Repair status Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalRS()
})
And('Click on filter of Repair status Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithRS()
})
And('Click on filter of Repair status Ends with in search box and Verify the Result', () => {
    dev.filterEndswithRS()
})
And('Click on filter of Repair status Blank in search box and Verify the Result', () => {
    dev.filterBlankRS()
})
And('Click on filter of Repair status Not blank in search box and Verify the Result', () => {
    dev.filterNotblankRS()
})
//B
And('Click on filter of Building contain in search box and Verify the Result', () => {
    dev.selectFilterBuilding()
})
And('Click on filter of Building Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainB()
})
And('Click on filter of Building Equals in search box and Verify the Result', () => {
    dev.filterEqualsB()
})
And('Click on filter of Building Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalB()
})
And('Click on filter of Building Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithB()
})
And('Click on filter of Building Ends with in search box and Verify the Result', () => {
    dev.filterEndswithB()
})
And('Click on filter of Building Blank in search box and Verify the Result', () => {
    dev.filterBlankB()
})
And('Click on filter of Building Not blank in search box and Verify the Result', () => {
    dev.filterNotblankB()
})
//rd
And('Click on filter of Repair device contain in search box and Verify the Result', () => {
    dev.selectFilterRepairDevice()
})
And('Click on filter of Repair device Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainRD()
})
And('Click on filter of Repair device Equals in search box and Verify the Result', () => {
    dev.filterEqualsRD()
})
And('Click on filter of Repair device Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalRD()
})
And('Click on filter of Repair device Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithRD()
})
And('Click on filter of Repair device Ends with in search box and Verify the Result', () => {
    dev.filterEndswithRD()
})
And('Click on filter of Repair device Blank in search box and Verify the Result', () => {
    dev.filterBlankRD()
})
And('Click on filter of Repair device Not blank in search box and Verify the Result', () => {
    dev.filterNotblankRD()
})
//tag
And('Click on filter of Asset tag contain in search box and Verify the Result', () => {
    dev.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals in search box and Verify the Result', () => {
    dev.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal in search box and Verify the Result', () => {
    dev.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with in search box and Verify the Result', () => {
    dev.filterEndswithtag()
})
And('Click on filter of Asset tag Blank in search box and Verify the Result', () => {
    dev.filterBlanktag()
})
And('Click on filter of Asset tag Not blank in search box and Verify the Result', () => {
    dev.filterNotblanktag()
})
//cby
And('Click on filter of Created By contain in search box and Verify the Result', () => {
    dev.selectFilterCreatedBy()
})
And('Click on filter of Created By Does not contain in search box and Verify the Result', () => {
    dev.filterDoesnotcontainCBy()
})
And('Click on filter of Created By Equals in search box and Verify the Result', () => {
    dev.filterEqualsCBy()
})
And('Click on filter of Created By Does not equal in search box and Verify the Result', () => {
    dev.filterNotequalCBy()
})
And('Click on filter of Created By Begins with in search box and Verify the Result', () => {
    dev.filterBeginswithCBy()
})
And('Click on filter of Created By Ends with in search box and Verify the Result', () => {
    dev.filterEndswithCBy()
})
And('Click on filter of Created By Blank in search box and Verify the Result', () => {
    dev.filterBlankCBy()
})
And('Click on filter of Created By Not blank in search box and Verify the Result', () => {
    dev.filterNotblankCBy()
})