import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { DashboardActions } from '../PageObject/PageActions/DashboardActions.js'
import { ReportCenterActions } from '../PageObject/PageActions/ReportCenterActions.js'
import { ManageDevicesActions } from '../PageObject/PageActions/ManageDevicesActions.js'
import { Repair360Actions } from '../PageObject/PageActions/Repair360Actions.js'
import { ResourcesActions } from '../PageObject/PageActions/ResourcesActions.js'
import { MyProfileActions } from '../PageObject/PageActions/MyProfileActions.js'
import { SupportActions } from '../PageObject/PageActions/SupportActions.js'
import { FeaturesActions } from '../PageObject/PageActions/FeaturesActions.js'
import { NonWarrantyRepairsActions } from '../PageObject/PageActions/NonWarrantyRepairsActions.js'
import { SrcRepairTicketsActions } from '../PageObject/PageActions/SrcRepairTicketsActions.js'
import { PartClosetActions } from '../PageObject/PageActions/PartClosetActions.js'
import { RepairTicketsActions } from '../PageObject/PageActions/RepairTicketsActions.js'
import { RepairBoxesActions } from '../PageObject/PageActions/RepairBoxesActions.js'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions.js'


const dev = new DeviceRepairReportActions()
const build = new BuildingsActions()
const acc = new AccountDetailsActions()
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
    cy.StudentLogin()
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

Then('Click on Clear filter of Nwr', () => {
    nwr.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterAssetTag()
})
And('Click More filter select- Repair Box in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterRepairBox()
})
And('Click More filter select- Created By in search box and Verify the Result of Nwr', () => {
    nwr.clickOnMoreFilter()
    nwr.selectFilterCreatedBy()
})
And('Enter the Search - Record Id in search box and Verify the Result of Nwr', () => {
    nwr.searchRecordId()
})
Then('Enter the Search - Repair type in search box and Verify the Result of Nwr', () => {
    nwr.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result of Nwr', () => {
    nwr.searchRepairStatus()
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
    cy.contains('demo_studentnormal@vivacitytech.com').click({ force: true })
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



Then('Click on Clear filter of acc', () => {
    acc.clickOnClearFiltersButton()
})
And('Click More filter select- Full name in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterFullName()
})
And('Click More filter select- Phone in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterPhone()
})
And('Click More filter select- Title in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterTitle()
})
And('Click More filter select- Eamil in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterEmail()
})
And ('Click More filter select- Record Id in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterRecordId()
})
  And ('Click More filter select- User Role in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterUserRole()
})
  And ('Click More filter select- User Status in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterUserStatus()
})
And('Enter the Search - Record Id in search box and Verify the Result of acc', () => {
    acc.searchRecordId()
})
And('Enter the Search - Full name in search box and Verify the Result of acc', () => {
    acc.searchFullName()
})
Then('Enter the Search - Email in search box and Verify the Result of acc', () => {
    acc.searchEmail()
})
And('Enter the Search - Title in search box and Verify the Result of acc', () => {
    acc.searchTitle()
})
Then('Enter the Search - Phone in search box and Verify the Result of acc', () => {
    acc.searchPhone()
})
And('Click on Export To CSV of acc', () => {
    acc.clickOnExporttoCSV()
})

And('Click on Buildings Tab', () => {
    build.clickOnBuildingTab()
})
Then('Click on Clear filter of build', () => {
    build.clickOnClearFiltersButton()
})
And('Click More filter select- Record Id in search box and Verify the Result of build', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterRecordId()
})
And('Click More filter select- Building Name in search box and Verify the Result of build', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterBuildingName()
})
And('Click More filter select- Default Building in search box and Verify the Result of build', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterDefaultBuilding()
})
And('Click More filter select- Phone in search box and Verify the Result of build', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterPhone()
})
And('Click More filter select- Building Shipping Address in search box and Verify the Result of build', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterShippingAddress()
})
And('Click More filter select- Building Billing Address in search box and Verify the Result of build', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterBillingAddress()
})
And('Enter the Search - Building Name in search box and Verify the Result of build', () => {
    build.searchBuildingName()
})
Then('Enter the Search - Building Shipping Address in search box and Verify the Result of build', () => {
    build.searchShippingAddress()
})
And('Enter the Search - Phone in search box and Verify the Result of build', () => {
    build.searchPhone()
})


Then('Click on DeviceRepairReport page', () => {
    dev.clickOnDeviceRepairReport()
    cy.wait(3000)
})
And('Enter the Search - Record Id in search box and Verify the Result of drr', () => {
    dev.searchRecordId()
})
Then('Enter the Search - Repair type in search box and Verify the Result of drr', () => {
    dev.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result of drr', () => {
    //dev.searchRepairStatus() 
})
And('Enter the Search - Repair Box in search box and Verify the Result of drr', () => {
    dev.searchRepairBox()
})
And('Click More filter select- Record Id in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterAssetTag()
})
And('Click More filter select- Repair Box in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterRepairBox()
})
And('Click More filter select- Created By in search box and Verify the Result of drr', () => {
    dev.clickOnMoreFilter()
    dev.selectFilterCreatedBy()
})
Then('Click on Clear filter of drr', () => {
    dev.clickOnClearFilter()
})

