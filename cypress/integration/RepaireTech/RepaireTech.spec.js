import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { ManageDevicesActions } from '../PageObject/PageActions/ManageDevicesActions.js'
import { Repair360Actions } from '../PageObject/PageActions/Repair360Actions.js'
import { ResourcesActions } from '../PageObject/PageActions/ResourcesActions.js'
import { MyProfileActions } from '../PageObject/PageActions/MyProfileActions'
import { SupportActions } from '../PageObject/PageActions/SupportActions'
import { FeaturesActions } from '../PageObject/PageActions/FeaturesActions'
import { NonWarrantyRepairsActions } from '../PageObject/PageActions/NonWarrantyRepairsActions.js'
import { SrcRepairTicketsActions } from '../PageObject/PageActions/SrcRepairTicketsActions'
import { PartClosetActions } from '../PageObject/PageActions/PartClosetActions'
import { RepairTicketsActions } from '../PageObject/PageActions/RepairTicketsActions'
import { RepairBoxesActions } from '../PageObject/PageActions/RepairBoxesActions'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions.js'
import { SrcStudentsActions } from '../PageObject/PageActions/SrcStudentsActions'
import { SrcFacilitatorsActions } from '../PageObject/PageActions/SrcFacilitatorsActions'
import { InHouseTicketsActions } from '../PageObject/PageActions/InHouseTicketsActions'
import { InHouseWorkflowActions } from '../PageObject/PageActions/InHouseWorkflowActions.js'
import { LoanerManagementActions } from '../PageObject/PageActions/LoanerManagementActions'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'
import { MyFleetActions } from '../PageObject/PageActions/MyFleetActions'
import { StudentRepairCenterActions } from '../PageObject/PageActions/StudentRepairCenterActions.js'
import { ImportSerialDevicesActions } from '../PageObject/PageActions/ImportSerialDevicesActions'
import { OrgUploadAssetsActions } from '../PageObject/PageActions/OrgUploadAssetsActions'

const oua = new OrgUploadAssetsActions()
const isd = new ImportSerialDevicesActions()
const srepc = new StudentRepairCenterActions()
const mf = new MyFleetActions()
const build = new BuildingsActions()
const acc = new AccountDetailsActions()
const loan = new LoanerManagementActions()
const ihw = new InHouseWorkflowActions()
const iht = new InHouseTicketsActions()
const sf = new SrcFacilitatorsActions()
const ss = new SrcStudentsActions()
const dev = new DeviceRepairReportActions()
const rb = new RepairBoxesActions()
const rt = new RepairTicketsActions()
const srt = new SrcRepairTicketsActions()
const pc = new PartClosetActions()
const nwr = new NonWarrantyRepairsActions()
const ft = new FeaturesActions()
const su = new SupportActions()
const mp = new MyProfileActions()
const res = new ResourcesActions()
const rep = new Repair360Actions()
const mdev = new ManageDevicesActions()
const repc = new ReportCenterActions()

Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.RepaireTechLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    cy.contains('demo_repairtech@vivacitytech.com').click({ force: true })
    acc.closeTermsOfServiceWindow()
})
Then('I should be redirected to the dashboard page', () => {

    cy.contains('My Account').click({ force: true })
    cy.url().should('include', '/')
})
And('Verify the Title of dashborad Page', () => {
    cy.title().should('eq', 'Account Dashboard')
})
Then('My Account Detail tab should be visible', () => {
    acc.AccountDetailsVisible()
})
And('Building tab should be visible', () => {
    cy.get('.MuiDialogActions-root > [tabindex="0"]').click({ force: true })
    build.clickOnBuildingTab()
    build.verifyTitleBuildingPage()
    //dash.buildingTabVisible()
})
And('Click on Report center page', () => {
    cy.wait(5000)
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
Then('Click on StudentRepairCenter tab', () => {
    srepc.clickOnStudentRepairCenter()
})
And('Click on ManageDevices page', () => {
    mdev.clickOnManageDevices()
})
Then('I should be redirected to theManageDevices page', () => {
    cy.url().should('include', '/devices')
})
And('Verify the Title of ManageDevices Page', () => {
    mdev.verifyTitle()
})
Then('Verify the My Fleet Tab should be visible', () => {
    mdev.myFleetTabVisible()
})
And('Verify the Loaner Management tab should be visible', () => {
    mdev.loanerManagementTabVisible()
})
Then('Verify the Import Serial Devices tab should be visible', () => {
    mdev.importSerialDevicesTabVisible()
})
And('Verify the Organization Uploaded Assets tab should be visible', () => {
    mdev.organizationUploadedAssetsTabVisible()
})
And('Click on Repair360 page', () => {
    rep.clickOnRepair360()
})
Then('I should be redirected to the Repair360 page', () => {
    cy.url().should('include', '/repair-360')
})
And('Verify the Title of Repair360 Page', () => {
    rep.verifyTitleRepair360()
})
Then('Verify the VivacityRepairCenter Tab should be visible', () => {
    rep.vivacityRepairCenterTabVisible()
})
And('Verify the InHouseRepairCenter tab should be visible', () => {
    rep.inhouseRepairCenterTabVisible()
})
Then('Verify the StudentRepairCenter tab should be visible', () => {
    rep.studentRepairCenterTabVisible()
})
And('Verify the PartCloset tab should be visible', () => {
    rep.partclosetTabVisible()
})
And('Click on Resources page', () => {
    res.clickOnResources()
})
Then('I should be redirected to the Resources page', () => {
    cy.url().should('include', '/resources')
})
And('Verify the Title of Resources Page', () => {
    res.verifyTitleResources()
})
Then('Verify the Instructions Tab should be visible', () => {
    res.instructionsTabVisible()
})
And('Verify the HowToVideos tab should be visible', () => {
    res.howToVideosTabVisible()
})
Then('Verify the WarrantyInfo tab should be visible', () => {
    res.warrantyInfoTabVisible()
})
And('Click on My profile page visible', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click({ force: true })
    cy.wait(1000)
    cy.contains('demo_repairtech@vivacitytech.com').click({ force: true })
    mp.clickOnMyProfile()
})
And('Click on My profile page', () => {
    cy.contains('demo_repairtech@vivacitytech.com').click({ force: true })
    cy.get('.css-1finol5').click({ force: true })
    mp.clickOnMyProfile()
})
Then('Verify the Title of My Profile Page', () => {
    cy.title().should('eq', 'My Profile')
})
And('Click on Support page', () => {
    cy.wait(1000)
    su.clickOnSupport()
})
Then('Verify the Title of Support Page', () => {
    cy.title().should('eq', 'Support')
})
And('Click on features page', () => {
    cy.wait(1000)
    ft.clickOnFeatures()
})
Then('I should be redirected to the Features page', () => {
    cy.url().should('include', '/features')
})
And('Verify the Title of Features Page', () => {
    cy.title().should('eq', 'Features')
})
Then('Verify the Under Consideration Tab should be visible', () => {
    ft.underConsiderationTabVisible()
})
And('Verify the Under Construction tab should be visible', () => {
    ft.underConstructionTabVisible()
})
And('Verify the Launched tab should be visible', () => {
    ft.launchedTabVisible()
})
And('Click on NonwarrantyRepairs page', () => {
    nwr.clickOnNonWarrantyRepairs()
})
Then('Select failure Type, Return site and Serial Device of NonwarrantyRepairs', () => {
    nwr.selectFailureType()
    nwr.selectSite()
    nwr.selectSerialDevice()
})
And('Select Building and Chromebook issue of NonwarrantyRepairs', () => {
    //     iht.selectBilding()
    //   nwr.selectRepaireIssue()
})
Then('Enter the Describe Your Issue of NonwarrantyRepairs', () => {
    nwr.enterChromebookIssue()
})
And('Click on save button of NonwarrantyRepairs', () => {
    nwr.clickOnSaveButton()
})
Then('Verify New Ticket is added of NonwarrantyRepairs', () => {
    nwr.verifyNewTicket()
})
And('Click on PartCloset Tab', () => {
    pc.clickOnPartClosetTab()
})
Then('I should click on Add New custome part', () => {
    pc.clickOnNewCustomePart()
})
Then('Enter part name, manufacture and parent device of PartCloset', () => {
    pc.enterPartname()
    pc.enterManufacture()
    pc.enterParentDevice()
})
And('Enter part sku and quantity of PartCloset', () => {
    pc.enterPartSKU()
    pc.enterQuantity()
    pc.selectBuilding()
})
Then('Click on submit button of PartCloset', () => {
    pc.clickOnSubmitButton()
})
And('Verify new custome part is added of PartCloset', () => {
    pc.verifyNewPartAdded()
})
And('Enter the Search value in search box of PartCloset', () => {
    pc.enterPartSKUSearch()
})
Then('Verify the Results in the table of PartCloset', () => {
    pc.verifySearchResult()
})
And('Click on delete button of PartCloset', () => {
    pc.clickOnDeleteButton()
})
Then('Verify the recode is deleted of PartCloset', () => {
    pc.verifyDeleted()
})
And('I should click on Add New VT part of PartCloset', () => {
    pc.clickOnNewVTPart()
})
Then('Select device and part name of PartCloset', () => {
    pc.selectDevice()
    pc.selectPartName()
})
And('Enter quantity and select building of PartCloset', () => {
    pc.enterQuantityVT()
    pc.selectBuilding()
})
Then('Click on submit button of PartCloset', () => {
    pc.clickOnSubmitVTButton()
})
And('Verify new VT part is added of PartCloset', () => {
    pc.verifyNewVTPartAdded()
})
Then('I should click on create new ticket of RepairTickets', () => {
    cy.wait(1000)
    rt.clickOnCreateNewTicket()
})
Then('Select failure Type, Return site and Serial Device of RepairTickets', () => {
    rt.selectFailureType()
    rt.selectReturnSite()
    rt.selectSerialDevice()
})
And('Select Building and Chromebook issue of RepairTickets', () => {
    rt.selectBuilding()
    rt.selectChromebookIssue()
})
Then('Enter the Describe Your Issue of RepairTickets', () => {
    rt.enterDescritionOfIssue()
})
And('Click on save button of RepairTickets', () => {
    rt.clickOnSaveButton()
})
Then('Verify New Ticket is added of RepairTickets', () => {
    rt.verifyNewTicket()
})
And('Click on Download import button of RepairTickets', () => {
    rt.clickOnExport()
})
And('Click on view button of RepairTickets', () => {
    rt.clickViewButton()
})
Then('Verify the Details of student repair ticket of RepairTickets', () => {
    rt.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button of RepairTickets', () => {
    rt.clickOnEditButton()
})
Then('Update the Technician and Repair Status of RepairTickets', () => {
    rt.editTehnician()
    rt.editRepairStatus()
})
And('Click on Update Button of RepairTickets', () => {
    rt.clickOnUpdate()
})
Then('Verify Updated successfully of RepairTickets', () => {
    rt.verifyUpdate()
})
And('Click on Add Line and Verify of RepairTickets', () => {
    rt.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify of RepairTickets', () => {
    rt.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of RepairTickets', () => {
    rt.clickOnAddNote()
})
And('Click on RepairBoxes Tab', () => {
    cy.wait(1000)
    rb.clickOnRepairBoxesTab()
})
Then('I should click on create new Box of RepairBoxes', () => {
    rb.clickOnAddnewBox()
})
Then('Enter weight and Standard Box Size of RepairBoxes', () => {
    rb.enterWeight()
    rb.selectStandardSize()
})
And('Select Pick-up site of RepairBoxes', () => {
    rb.selectPickupSite()
})
Then('Check the need shipping box of RepairBoxes', () => {
    rb.checkNeedShippingBox()
})
And('Click on Create box button of RepairBoxes', () => {
    rb.clickOnCreateBoxButton()
})
Then('Select Ticket from dropdownlist of RepairBoxes', () => {
    rb.selectTickets()
})
And('Click on Finish button of RepairBoxes', () => {
    rb.clickOnFinishButton()
})
Then('Verify new box is added in table of RepairBoxes', () => {
    rb.verifyNewBoxAdd()
})
And('Click on Export Button of RepairBoxes', () => {
    rb.clickOnDownloadLabel()
})
And('Click on view button of RepairBoxes', () => {
    rb.clickOnViewButton()
})
Then('Verify the Details new box of RepairBoxes', () => {
    rb.verifyBoxDetails()
})
And('Add another ticket in the same box of RepairBoxes', () => {
    rb.clickOnAddTicket()
})
And('Click on Add ticket of RepairBoxes', () => {
    rb.clickOnAddTicket_s()
})
Then('Verify the ticket is added in table of RepairBoxes', () => {
    rb.verifyTicketAdded()
})
And('Click on view the ticket Details of RepairBoxes', () => {
    rb.clickOnViewButtonTicket()
})
Then('Verfiy the ticket Details of RepairBoxes', () => {
    rb.verifyTicketDetails()
})
And('Click on Back button of RepairBoxes', () => {
    rb.clickOnBackButton()
})
And('Remove the ticket from box of RepairBoxes', () => {
    rb.clickOnRemoveButton()
})
Then('Verify the ticket is delete from the table of RepairBoxes', () => {
    rb.verifyTicketDeleted()
})
Then('Click on Add Repair Image and Verify of RepairBoxes', () => {
    rb.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of RepairBoxes', () => {
    rb.clickOnAddNote()
})
Then('Click on Remove button for deleting ticket of RepairBoxes', () => {
    rb.clickOnRemoveButton()
})
And('Verify the ticket removed of RepairBoxes', () => {
    rb.verifyRemoveTicket()
})
Then('Click on label form of image and Verify of RepairBoxes', () => {
    rb.ClickOnImagelabel()
})
Then('Click on label form of Pdf and Verify of RepairBoxes', () => {
    rb.ClickOnPdflabel()
})

And('Click on My profile page', () => {
    cy.wait(1000)
    cy.contains('demo_repairtech@vivacitytech.com').click({ force: true })
    mp.clickOnMyProfile()
})
And('Click on upload image icon of Myprofile', () => {
    mp.clickOnImageIcone()
})
Then('Enter tilte and phone no of Myprofile', () => {
    mp.enterTitle()
    mp.enterPhone()
})
And('Eelect Email preference of Myprofile', () => {
    mp.selectEmailPreference()
})
Then('click on update button of Myprofile', () => {
    mp.clickOnUpdateButton()
})
And('Verify the updated successfully of Myprofile', () => {
    mp.verifyUpdate()
})
And('Click on the view button of NonwarrantyRepairs', () => {
    nwr.clickOnTicketNumberTable()
})
Then('Verify the Repair Ticket page will open of NonwarrantyRepairs', () => {
    nwr.verifyRapairTicketPAge()
})
And('Verfiy the details of Ticket of NonwarrantyRepairs', () => {
    nwr.verifyTicketDetails()
})
Then('Click on the download Ticket Estimation button of NonwarrantyRepairs', () => {
    nwr.clickOnDownloadButton()
    cy.go('back')
})
And('Click on the download Ticket Estimation button of NonwarrantyRepairs', () => {
    nwr.verifyDownloadSuccessful()
})
Then('Click on Add Repair Image and Verify of NonwarrantyRepairs', () => {
    nwr.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of NonwarrantyRepairs', () => {
    nwr.clickOnAddNote()
})
Then('Click on DeviceRepairReport page', () => {
    dev.clickOnDeviceRepairReport()
    cy.wait(3000)
})
And('Click on the View button of DeviceRepairReport', () => {
    dev.clickOnviewButton()
})
Then('Verify the Repair Ticket page will open of DeviceRepairReport', () => {
    dev.verifyRapairTicketPAge()
})
And('Verfiy the details of Ticket of DeviceRepairReport', () => {
    dev.verifyTicketDetails()
})
Then('Click on the download Ticket Estimation button of DeviceRepairReport', () => {
    dev.clickOnDownloadButton()
})
And('Verify downloaded ticket successfully of DeviceRepairReport', () => {
    dev.verifyDownloadSuccessful()
})
Then('Click on Add Repair Image and Verify of DeviceRepairReport', () => {
    dev.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of DeviceRepairReport', () => {
    dev.clickOnAddNote()
})
Then('I should click on Add New student of SrcStudents', () => {
    ss.clickOnCreateNewStudent()
})
Then('Enter title, full name and Email of SrcStudents', () => {
    ss.enterTitle()
    ss.enterFullname()
    ss.enterEmail()
})
And('Enter Phone and Cell Number of SrcStudents', () => {
    ss.enterPhone()
    ss.enterCellNumber()
})
Then('Select User Status of SrcStudents', () => {
    ss.selectUserStatus()
})
Then('Select Vivacity weekly and Beta tester of SrcStudents', () => {
    ss.selectViivaWeekly()
    ss.selectBetaTester()
})
Then('Select User notification and in house repair of SrcStudents', () => {
    ss.selectUserNotification()
    ss.selectInHouseRepair()
})
And('Click on submit button of SrcStudents', () => {
    ss.clickOnASubmitButton()
})
Then('Verify the student added in table of SrcStudents', () => {
    ss.verifyRecordTable()
})
Then('Click on SrcStudents tab', () => {
    ss.clickOnSrcStudentsTab()
})
//srcRepairTicket
Then('Click on SrcRepairTickets tab', () => {
    srt.clickOnSrcRepairTicketsTab()
})
Then('I should click on Create Student Repair Ticket button of SrcRepairTickets', () => {
    srt.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician and building of SrcRepairTickets', () => {
    srt.selectFailureType()
    srt.selectTechnician()
    srt.selectSerialDevice()
    srt.selectIssue()
    srt.selectBuilding()
})
Then('Enter the Chromebook issue of SrcRepairTickets', () => {
    srt.enterChromebookIssue()
})
And('Click on save button of SrcRepairTickets', () => {
    srt.clickOnSaveButton()
})
Then('Verify New Ticket is added of SrcRepairTickets', () => {
    srt.verifyNewTicket()
})
And('Click on view button of SrcRepairTickets', () => {
    srt.clickViewButton()
})
Then('Verify the Details of student repair ticket of SrcRepairTickets', () => {
    srt.verifySrcRepairTicket()
})
Then('Click on Add Repair Image and Verify of SrcRepairTickets', () => {
    srt.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of SrcRepairTickets', () => {
    srt.clickOnAddNote()
})
//srcFaci
Then('Click on SrcFacilitators tab', () => {
    sf.clickOnSrcFacilitatorsTab()
})
And('Click on Download Export button of SrcFacilitators', () => {
    sf.clickOnExport()
})
//inhouse -ticket
And('Click on InHouseRepairCenter tab', () => {
    iht.clickOnInHouseRepairCenterTab()
})
Then('Click All InHouseTickets tab', () => {
    iht.clickOnInHouseTicketsTab()
})
Then('I should click on Create new button of InHouseTickets', () => {
    iht.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician, issue and Building of InHouseTickets', () => {
    iht.selectFailureType()
    iht.selectTechnician()
    iht.selectSerialDevice()
    iht.selectRepaireIssue()
    iht.selectBuilding()
})
Then('Enter the Chromebook issue of InHouseTickets', () => {
    iht.enterChromebookIssue()
})
And('Click on save button of InHouseTickets', () => {
    iht.clickOnSaveButton()
})
Then('Verify New Ticket is added of InHouseTickets', () => {
    iht.verifyNewTicket()
})
And('Click on Download Export button of InHouseTickets', () => {
    iht.clickOnExport()
})
Then('Verify the successfully downloaded of InHouseTickets', () => {
    iht.verifyDownload()
})
And('Enter the Search value in search box of InHouseTickets', () => {
    iht.enterSearchBox()
})
Then('Verify the Results in the table of InHouseTickets', () => {
    iht.verifySearchResult()
})
And('Click on view button of InHouseTickets', () => {
    iht.clickViewButton()
})
Then('Verify the Details of student repair ticket of InHouseTickets', () => {
    iht.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button of InHouseTickets', () => {
    iht.clickOnEditButton()
})
Then('Update the Technician and Repair Status of InHouseTickets', () => {
    iht.editTehnician()
    iht.editRepairStatus()
})
And('Click on Update Button of InHouseTickets', () => {
    iht.clickOnUpdate()
})
Then('Verify Updated successfully of InHouseTickets', () => {
    iht.verifyUpdate()
})
And('Click on Add Line and Verify of InHouseTickets', () => {
    iht.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify of InHouseTickets', () => {
    iht.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of InHouseTickets', () => {
    iht.clickOnAddNote()
})
And('Click on the Update to student Button of InHouseTickets', () => {
    iht.clickOnUpdateStudent()
})
Then('Updated to student successfully of InHouseTickets', () => {
    iht.verifyUpdateStudent()
})
And('Click on the Update to in house Button of InHouseTickets', () => {
    iht.clickOnUpdateInhouse()
})
Then('Updated to in house successfully of InHouseTickets', () => {
    iht.verifyUpdateInhouse()
})
Then('Account Details -Aaccount Name and no should be visible of Account', () => {
    acc.AccountDetailsVisible()
})
And('Account Manager,Billing Address and Shipping Address should be visible of Account', () => {
    acc.sectionManaddressVisible()
})
And('Click on Buildings Tab', () => {
    build.clickOnBuildingTab()
})
And('Click on Export To CSV of building', () => {
    build.clickOnExport()
})
Then('Click on Bulk Upload button of building', () => {
    build.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button of building', () => {
    build.attachCsvfile()
})
Then('Verify the Uploaded successfully of building', () => {
    build.verifyuploaded()
})
Then('I should click on new button of InHouseWork', () => {
    ihw.clickOnNewButton()
})
And('Select failure Type, Serial Device, Technician and repair issue of InHouseWork', () => {
    ihw.selectFailureType()
    ihw.selectTechnician()
    ihw.selectRepairissue()
    ihw.selectSerialDevice()
    ihw.selectReturnsite()
    ihw.selectStudent()
})
Then('Select building and Enter the Chromebook issue of InHouseWork', () => {
    cy.wait(100)
    ihw.selectBuilding()
    ihw.enterChromebookIssue()
})
And('Click on save button of InHouseWork', () => {
    ihw.clickOnSaveButton()
})
Then('Verify New Ticket is added of InHouseWork', () => {
    ihw.verifyNewTicket()
})
And('Click on Download Export button of InHouseWork', () => {
    ihw.clickOnExport()
})
Then('Verify the successfully downloaded of InHouseWork', () => {
    ihw.verifyDownload()
})
And('Enter Search ticket no in search box of InHouseWork', () => {
    ihw.searchTicketNo()
})
Then('Verify search result below of InHouseWork', () => {
    ihw.verfiySearchResult()
})
And('Click on view button of InHouseWork', () => {
    ihw.clickViewButton()
})
Then('Verify the Details of student repair ticket of InHouseWork', () => {
    ihw.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button of InHouseWork', () => {
    ihw.clickOnEditButton()
})
Then('Update the Technician and Repair Status of InHouseWork', () => {
    ihw.editTehnician()
    ihw.editRepairStatus()
})
And('Click on Update Button of InHouseWork', () => {
    ihw.clickOnUpdate()
})
Then('Verify Updated successfully of InHouseWork', () => {
    ihw.verifyUpdate()
})
And('Click on Add Line and Verify of InHouseWork', () => {
    ihw.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify of InHouseWork', () => {
    ihw.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of InHouseWork', () => {
    ihw.clickOnAddNote()
})
And('Click on ImportSerialDevices Tab', () => {
    isd.clickOnImportSerialDevices()
    cy.get('.MuiDialogActions-root > :nth-child(2)').click({ force: true })
})
Then('I should click on Add New Import of ImportSerialDevices', () => {
    isd.clickOnAddNewImport()
})
Then('Upload the CSV import file of ImportSerialDevices', () => {
    isd.uploadcsvFile()
})
And('Click on submit button of ImportSerialDevices', () => {
    isd.clickOnSubmitButton()
})
And('Click on refresh button of ImportSerialDevices', () => {
    isd.clickOnRefreshButton()
})
Then('Verify the record in table of ImportSerialDevices', () => {
    isd.verfiyImportTable()
})
And('Click on Download import button of ImportSerialDevices', () => {
    isd.clickOnDownloadImport()
})
And('Click on Details button of ImportSerialDevices', () => {
    isd.clickOnDetailsButton()
})
Then('Verify the Device Details of ImportSerialDevices', () => {
    isd.verifyDeviceDetails()
})
And('Click on MyFleet Tab', () => {
    mf.clickOnMyFleet()
    // cy.get('.MuiDialogActions-root > :nth-child(2)').click({ force: true })
})
And('Convert Active to Retired device of MyFleet', () => {
    mf.converRetired()
})
Then('Verify the Device Retired successfully of MyFleet', () => {
    mf.verifyRetired()
})
Then('Verify the Device Active successfully of MyFleet', () => {
    mf.verifyActive()
})
And('Convert Retired to Active device of MyFleet', () => {
    mf.convertActive()
})
Then('Click on the add device of MyFleet', () => {
    mf.clickOnAddDevice()
})
And('Enter Serial no and select device id of MyFleet', () => {
    mf.enterSerialNo()
    mf.selectDeviceId()
})
Then('Enter Asset Tag and Select student id of MyFleet', () => {
    mf.enterAssetTag()
    mf.selectStudentid()
})
And('Select lonar status and Device status of MyFleet', () => {
    mf.selectLonarStatus()
    mf.selectDeviceStatus()
})
Then('Click on the Submit Button of MyFleet', () => {
    mf.clickOnsubmitButton()
})
And('Verify the device added successfully of MyFleet', () => {
    mf.verfifyDeviceAdded()
})
Then('Click on Edit button of MyFleet', () => {
    mf.clickOnEditButton()
})
And('Update Asset tag, student info and building information and Click on update button of MyFleet', () => {
    mf.editInformation()
    mf.clickOnUpdateButton()
})
Then('Verfiy Record updated successfully of MyFleet', () => {
    mf.verifyUdated()
})
Then('Click on Clear filter of MyFleet', () => {
    mf.clickOnClearFiltersButton()
})
And('Enter the table fields in search box of MyFleet', () => {
    mf.enterSearchValue()
})
And('Verify the record in searching history of MyFleet', () => {
    mf.verifySearchResult()
})
Then('Click on view Button of MyFleet', () => {
    mf.clickOnViewButton()
})
And('Verify the General Device Information of MyFleet', () => {
    mf.verifyViewResult()
})
Then('Click on deviceIcon and click on view Button of MyFleet', () => {
    mf.clickOnDeviceIcon()
    mf.clickOnViewButton()
})
And('Verify the General Device Information of MyFleet', () => {
    mf.verifyViewResult()
})
And('Verify the Warranty Description1 of MyFleet', () => {
    mf.verifyViewResult1()
})
Then('Click on Edit button of General info of MyFleet', () => {
    mf.clickOnEditButtonGeneral()
})
And('Update Asset tag and Click on save button of MyFleet', () => {
    mf.editGeneral()
    mf.clickOnUpdateButton()
})
Then('Verfiy General info Record updated successfully of MyFleet', () => {
    mf.verifyGeneralUdate()
})
Then('Click on Edit button of Assignment of MyFleet', () => {
    mf.clickOnEditButtonAssign()
})
And('Update student, building, loner status and Click on save button of MyFleet', () => {
    mf.editAssignment()
    mf.clickOnUpdateButton()
})
Then('Verfiy Assignment Record updated successfully of MyFleet', () => {
    mf.verifyAssignmnetUdate()
    cy.get('.MuiButtonBase-root > .MuiTypography-root').click({ force: true })
})
Then('Click on Export To CSV of MyFleet', () => {
    mf.clickOnCExportToCSVButton()
})
And('Verify Downloaded successfully of MyFleet', () => {
    mf.verifyDownloadSuccessful()
})
And('Click More filter select- Serial Number in search box and Verify the Result of MyFleet', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterSerialNumber()
})
And('Click More filter select- Asset tag in search box and Verify the Result of MyFleet', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterAssetTag()
})
And('Click More filter select- Device in search box and Verify the Result of MyFleet', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterDevice()
})
And('Click More filter select- Student in search box and Verify the Result of MyFleet', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterStudent()
})
Then('Click on Retired Tab', () => {
    mf.clickOnRetiredTab()
})

And('Click on LoanerManagement Tab', () => {

    loan.clickOnLoanerManagement()
})
Then('Search the serial no in search box of Available Devices section of LoanerManagement', () => {
    loan.serachAvailableDevice()
})
And('Verify the search result of LoanerManagement', () => {
    loan.verifySerachAvailableDevice()
})
Then('Click on the Add to loaner pool of LoanerManagement', () => {
    loan.clickOnAddtoLoanerPool()
})
Then('Search the serial no in the Available section of LoanerManagement', () => {
    loan.searchAvailable()
    loan.verifySearchAvailable()
})
And('Click on th add Student button of LoanerManagement', () => {
    loan.clickOnAddStudent()
})
Then('Enter Fullname, title and email of LoanerManagement', () => {
    loan.enterFullname()
    loan.enterTitle()
    loan.enterEmail()
})
And('Select status, building and student_id of LoanerManagement', () => {
    loan.selectStatus()
    loan.selectBuilding()
    loan.selectStudent_id()
})
Then('Click on the submit button of form of LoanerManagement', () => {
    loan.clickOnsubmitForm()
})
And('Verify the student added successfully of LoanerManagement', () => {
    loan.verifyStudentAdded()
})
Then('Click on check out button of LoanerManagement', () => {
    loan.clickOnCheckOut()
})
And('Select the student name of LoanerManagement', () => {
    loan.selectStudentName()
})
Then('Click on the submit button of LoanerManagement', () => {
    loan.clickOnSubmitbtn()
})
And('Search the serial no in the check out section of LoanerManagement', () => {
    loan.serachCheckOut()
    loan.verifySerachCheckOut()
})
Then('Click on the Check in button of LoanerManagement', () => {
    loan.clickOnCheckIn()
})
And('Enter note and click on submit button of LoanerManagement', () => {
    loan.enterNote()
    loan.clickOnSubmitNote()
})
Then('Verify the device is added in Available section of LoanerManagement', () => {
    loan.searchAvailable()
    loan.verifySerachAvailable()
})
And('Click on remove from loaner pool button of LoanerManagement', () => {
    loan.serachAvailableDevice()
    loan.clickOnRemoveFromPool()
})
And('Click on OrgUploadAssets Tab', () => {
    oua.clickOnOrgUploadAssets()
})
Then('I should click on Add Asset of OrgUploadAssets', () => {
    oua.clickOnAddAssetbutton()
})
Then('Enter title, full name location and tag of OrgUploadAssets', () => {
    oua.enterLocation()
    oua.enterTag()
})
And('Enter note, Type and description of OrgUploadAssets', () => {
    oua.enterNote()
    oua.enterType()
})
Then('Upload the image file of OrgUploadAssets', () => {
    oua.selectFileForUpload()
    oua.enterDescription()
})
And('Click on save button of OrgUploadAssets', () => {
    oua.clickOnASaveButton()
})
Then('Verify the asset details added in table of OrgUploadAssets', () => {
    oua.verifyRecordTable()
})
And('Enter the title in search box of OrgUploadAssets', () => {
    oua.enterSearchValue()
})
Then('Click on Search button of OrgUploadAssets', () => {
    oua.clickOnASearchButton()
})
And('Verify the record in searching history of OrgUploadAssets', () => {
    oua.verifySearchResult()
})
And('Click on Edit button of OrgUploadAssets', () => {
    oua.clickOnEditIcon()
})
Then('I should edit title, full name location and tag of OrgUploadAssets', () => {
    oua.editLocation()
    oua.editTag()
})
And('I should edit note, Type and description of OrgUploadAssets', () => {
    oua.editNotes()
    oua.editType()
    oua.editDescription()
})
Then('ReUpload the image file of OrgUploadAssets', () => {
    oua.editUpload()
})
Then('Click on save button of OrgUploadAssets', () => {
    oua.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage of OrgUploadAssets', () => {
    oua.verfifyDataUpdatedMessage()
})
And('Click on Delete button of OrgUploadAssets', () => {
    oua.clickDeleteIcon()
})
Then('Click on Confirm Delete button of OrgUploadAssets', () => {
    oua.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully of OrgUploadAssets', () => {
    oua.verifyRecordDeleted()
})
And('Enter Full name of Support', () => {
    su.enterFullname()
})
Then('Select task Priority and Topic of Support', () => {
    su.selectPriority()
    su.selectTopic()
})
And('Upload the image and enter Notes of Support', () => {
    su.uploadImage()
    su.enterNotes()
})
Then('Click on submit button of Support', () => {
    su.clickOnSubmit()
})
And('Verify the Send Feedback successfully of Support', () => {
    su.verfiyFeedbackSuccess()
})



