import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { DashboardActions } from '../PageObject/PageActions/DashboardActions'
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
const dash = new DashboardActions()
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
    cy.wait(9000)
    dash.closeTermsOfServiceWindow()
})
Then('I should be redirected to the dashboard page', () => {
    cy.url().should('include', '/')
})
And('Verify the Title of dashborad Page', () => {
    cy.title().should('eq', 'Account Dashboard')
})
Then('My Account Detail tab should be visible', () => {
    dash.myAccountDetailsTabVisible()
})
And('Building tab should be visible', () => {
    dash.buildingTabVisible()
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


And('Click on ManageDevices page', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click({force:true})
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
Then ('Verify the WarrantyInfo tab should be visible',()=>{
    res.warrantyInfoTabVisible()
})


And('Click on My profile page', () => {
    cy.wait(1000)
    cy.contains('demo_repairtech@vivacitytech.com').click({force:true})
    mp.clickOnMyProfile()
})
Then('Verify the Title of My Profile Page', () => {
    cy.title().should('eq', 'My Profile')
})

And('Click on Support page', () => {
    cy.wait(1000)
   // cy.contains('demo_repairtech@vivacitytech.com').click({force:true})
    su.clickOnSupport()
})
Then('Verify the Title of Support Page', () => {
    cy.title().should('eq', 'Support')
})


And ('Click on features page',()=>{
    cy.wait(1000)
  //  cy.contains('demo_repairtech@vivacitytech.com').click({force:true})
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
Then('Select failure Type, Return site and Serial Device of Nwr', () => {
    nwr.selectFailureType()
    nwr.selectSite()
    nwr.selectSerialDevice()
})
And('Select Building and Chromebook issue of Nwr', () => {
    //     iht.selectBilding()
    //   nwr.selectRepaireIssue()
})
Then('Enter the Describe Your Issue of Nwr', () => {
    nwr.enterChromebookIssue()
})
And('Click on save button of Nwr', () => {
    nwr.clickOnSaveButton()
})
Then('Verify New Ticket is added of Nwr' , () => {
    nwr.verifyNewTicket()
})




And('Click on PartCloset Tab', () => {
    pc.clickOnPartClosetTab()
})
Then ('I should click on Add New custome part',()=>{
pc.clickOnNewCustomePart()
})
Then ('Enter part name, manufacture and parent device of pc',()=>{
pc.enterPartname()
pc.enterManufacture()
pc.enterParentDevice()
})
And ('Enter part sku and quantity of pc',()=>{
pc.enterPartSKU()
pc.enterQuantity()
pc.selectBuilding()
})
Then ('Click on submit button of pc',()=>{
pc.clickOnSubmitButton()
})
And ('Verify new custome part is added of pc',()=>{
pc.verifyNewPartAdded()
})
And ('Enter the Search value in search box of pc',()=>{
pc.enterPartSKUSearch()
})
Then ('Verify the Results in the table of pc',()=>{
pc.verifySearchResult()
})
And ('Click on delete button of pc',()=>{
pc.clickOnDeleteButton()
})
Then ('Verify the recode is deleted of pc',()=>{
pc.verifyDeleted()
})
And ('I should click on Add New VT part of pc',()=>{
    pc.clickOnNewVTPart()
})
Then ('Select device and part name of pc',()=>{
pc.selectDevice()
pc.selectPartName()
})
And ('Enter quantity and select building of pc',()=>{
pc.enterQuantityVT()
pc.selectBuilding()
})
Then ('Click on submit button of pc',()=>{
pc.clickOnSubmitVTButton()
})
And ('Verify new VT part is added of pc',()=>{
    pc.verifyNewVTPartAdded()
})


And('Click on StudentRepairCenter tab', () => {
    srt.clickOnStudentRepairCenterTab()
})
Then('Click on SrcRepairTickets tab', () => {
    srt.clickOnSrcRepairTicketsTab()
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
Then('Enter the Chromebook issue', () => {
    srt.enterChromebookIssue()
})
And('Click on save button', () => {
    srt.clickOnSaveButton()
})
Then('Verify New Ticket is added', () => {
    srt.verifyNewTicket()
})



Then('I should click on create new ticket of rt', () => {
    rt.clickOnCreateNewTicket()
})
Then('Select failure Type, Return site and Serial Device of rt', () => {
    rt.selectFailureType()
    rt.selectReturnSite()
    rt.selectSerialDevice()
})
And('Select Building and Chromebook issue of rt', () => {
    rt.selectBuilding()
    rt.selectChromebookIssue()
})
Then('Enter the Describe Your Issue of rt', () => {
    rt.enterDescritionOfIssue()
})
And('Click on save button of rt', () => {
    rt.clickOnSaveButton()
})
Then('Verify New Ticket is added of rt', () => {
    rt.verifyNewTicket()
})


And('Click on RepairBoxes Tab', () => {
    rb.clickOnRepairBoxesTab()
})
Then('I should click on create new Box of rb', () => {
    rb.clickOnAddnewBox()
})
Then('Enter weight, height, depth and width of rb', () => {
    rb.enterWeight()
    rb.enterHeight()
    rb.enterDepth()
    rb.enterwidth()
})
And('Select Pick-up site of rb', () => {
    rb.selectPickupSite()
})
Then('Check the need shipping box of rb', () => {
    rb.checkNeedShippingBox()
})
And('Click on Create box button of rb', () => {
    rb.clickOnCreateBoxButton()
})
Then('Select Ticket from dropdownlist of rb', () => {
    rb.selectTickets()
})
And('Click on Finish button of rb', () => {
    rb.clickOnFinishButton()
})
Then('Verify new box is added in table of rb', () => {
    rb.verifyNewBoxAdd()
})

And('Click on My profile page', () => {
    cy.wait(1000)
    cy.contains('demo_repairtech@vivacitytech.com').click({ force: true })
    mp.clickOnMyProfile()
})

And('Click on upload image icon of mp', () => {
    mp.clickOnImageIcone()
})
Then('Enter tilte and phone no of mp', () => {
    mp.enterTitle()
    mp.enterPhone()
})
And('Eelect Email preference of mp', () => {
    mp.selectEmailPreference()
})
Then('click on update button of mp', () => {
    mp.clickOnUpdateButton()
})
And('Verify the updated successfully of mp', () => {
    mp.verifyUpdate()
})

