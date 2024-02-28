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
import { DeviceRepairReportActions } from '../PageObject/PageActions/DeviceRepairReportActions.js'
import { SrcStudentsActions } from '../PageObject/PageActions/SrcStudentsActions.js'
import { SrcFacilitatorsActions } from '../PageObject/PageActions/SrcFacilitatorsActions.js'
import { InHouseTicketsActions } from '../PageObject/PageActions/InHouseTicketsActions.js'
import { InHouseWorkflowActions } from '../PageObject/PageActions/InHouseWorkflowActions.js'
import { LoanerManagementActions } from '../PageObject/PageActions/LoanerManagementActions.js'

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
const dash = new DashboardActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.SchoolAdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(5000)
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
    cy.get('[data-testid="ChevronRightIcon"]').click({ force: true })
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


And('Click on My profile page', () => {
    cy.wait(1000)
    cy.contains('demo_adminSchoolDistrict@vivacitytech.com').click({ force: true })
    mp.clickOnMyProfile()
})
Then('Verify the Title of My Profile Page', () => {
    cy.title().should('eq', 'My Profile')
})

And('Click on Support page', () => {
    cy.wait(1000)
    // cy.contains('demo_adminSchoolDistrict@vivacitytech.com').click({force:true})
    su.clickOnSupport()
})
Then('Verify the Title of Support Page', () => {
    cy.title().should('eq', 'Support')
})


And('Click on features page', () => {
    cy.wait(1000)
    //  cy.contains('demo_adminSchoolDistrict@vivacitytech.com').click({force:true})
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
Then('Verify New Ticket is added of Nwr', () => {
    nwr.verifyNewTicket()
})


And('Click on PartCloset Tab', () => {
    pc.clickOnPartClosetTab()
})
Then('I should click on Add New custome part', () => {
    pc.clickOnNewCustomePart()
})
Then('Enter part name, manufacture and parent device of pc', () => {
    pc.enterPartname()
    pc.enterManufacture()
    pc.enterParentDevice()
})
And('Enter part sku and quantity of pc', () => {
    pc.enterPartSKU()
    pc.enterQuantity()
    pc.selectBuilding()
})
Then('Click on submit button of pc', () => {
    pc.clickOnSubmitButton()
})
And('Verify new custome part is added of pc', () => {
    pc.verifyNewPartAdded()
})
And('Enter the Search value in search box of pc', () => {
    pc.enterPartSKUSearch()
})
Then('Verify the Results in the table of pc', () => {
    pc.verifySearchResult()
})
And('Click on delete button of pc', () => {
    pc.clickOnDeleteButton()
})
Then('Verify the recode is deleted of pc', () => {
    pc.verifyDeleted()
})
And('I should click on Add New VT part of pc', () => {
    pc.clickOnNewVTPart()
})
Then('Select device and part name of pc', () => {
    pc.selectDevice()
    pc.selectPartName()
})
And('Enter quantity and select building of pc', () => {
    pc.enterQuantityVT()
    pc.selectBuilding()
})
Then('Click on submit button of pc', () => {
    pc.clickOnSubmitVTButton()
})
And('Verify new VT part is added of pc', () => {
    pc.verifyNewVTPartAdded()
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
And('Enter the Search - Ticket Number in search box and Verify the Result of rt', () => {
    rt.searchTicketNumber()
})
Then('Enter the Search - Repair type in search box and Verify the Result of rt', () => {
    rt.searchRepairType()
})
And('Enter the Search - Serial Number in search box and Verify the Result of rt', () => {
    rt.searchSerialNumber()
})
Then('Enter the Search - Repair status in search box and Verify the Result of rt', () => {
    rt.searchRepairStatus()
})
And('Enter the Search - Repair Box in search box and Verify the Result of rt', () => {
    rt.searchRepairBox()
})
Then('Enter the Search - Asset tag in search box and Verify the Result of rt', () => {
    rt.searchAssetTag()
})
And('Click More filter select- Record Id in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairStatus()
})
And('Click More filter select- Repair Box in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairBox()
})
And('Click More filter select- Asset tag in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterAssetTag()
})
And('Click More filter select- Created By in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterCreatedBy()
})
Then('Click on Clear filter of rt', () => {
    rt.clickOnClearFilter()
})
And('Click More filter select- Repair device in search box and Verify the Result of rt', () => {
    rt.clickOnMoreFilter()
    rt.selectFilterRepairDevice()
})



And('Click on RepairBoxes Tab', () => {
    cy.get('.MuiPaper-rounded > .MuiPaper-root > .MuiToolbar-root > .MuiIconButton-root').click({ force: true })
    rb.clickOnRepairBoxesTab()
    Cypress.on("uncaught:exception", () => {
        return false;
    });
})
Then('I should click on create new Box of rb', () => {
    rb.clickOnAddnewBox()
    Cypress.on("uncaught:exception", () => {
        return false;
    });
})
Then('Enter weight, height, depth and width of rb', () => {
    rb.enterWeight()
})
And('Select Pick-up site of rb', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
    });
    rb.selectPickupSite()
})
Then('Check the need shipping box of rb', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
    });
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
And('Enter the Search - Tracking Number in search box and Verify the Result of rb', () => {
    rb.searchTrackingNumber()
})
Then('Enter the Search - Record Id in search box and Verify the Result of rb', () => {
    rb.searchRecordId()
})



And('Click on My profile page', () => {
    cy.wait(1000)
    cy.contains('demo_adminSchoolDistrict@vivacitytech.com').click({ force: true })
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

Then('I should click on Add New student of srcs', () => {
    ss.clickOnCreateNewStudent()
})
Then('Enter title, full name and Email of srcs', () => {
    ss.enterTitle()
    ss.enterFullname()
    ss.enterEmail()
})
And('Enter Phone and Cell Number of srcs', () => {
    ss.enterPhone()
    ss.enterCellNumber()
})
Then('Select User Status of srcs', () => {
    ss.selectUserStatus()
    // ss.selectVivaNews()
    // ss.selectProductUpdate()
})
Then('Select Vivacity weekly and Beta tester of srcs', () => {
    ss.selectViivaWeekly()
    ss.selectBetaTester()
})
Then('Select User notification and in house repair of srcs', () => {
    ss.selectUserNotification()
    ss.selectInHouseRepair()
})
And('Click on submit button of srcs', () => {
    ss.clickOnASubmitButton()
})
Then('Verify the student added in table of srcs', () => {
    ss.verifyRecordTable()
})

Then('Click on SrcStudents tab', () => {
    ss.clickOnSrcStudentsTab()
})
And('Enter the Search - Full name in search box and Verify the Result of srcs', () => {
    ss.searchFullName()
})
Then('Enter the Search - Email in search box and Verify the Result of srcs', () => {
    ss.searchEmail()
})
And('Enter the Search - Status in search box and Verify the Result of srcs', () => {
    ss.searchStatus()
})
Then('Enter the Search - Phone in search box and Verify the Result of srcs', () => {
    ss.searchPhone()
})
Then('Click on Clear filter of srcs', () => {
    ss.clickOnClearFilter()
})
And('Click More filter select- Full name in search box and Verify the Result of srcs', () => {
    ss.clickOnMoreFilter()
    ss.selectFilterFullName()
})
And('Click More filter select- Phone in search box and Verify the Result of srcs', () => {
    ss.clickOnMoreFilter()
    ss.selectFilterPhone()
})
And('Click More filter select- Title in search box and Verify the Result of srcs', () => {
    ss.clickOnMoreFilter()
    ss.selectFilterTitle()
})
And('Click More filter select- Eamil in search box and Verify the Result of srcs', () => {
    ss.clickOnMoreFilter()
    ss.selectFilterEmail()
})
And('Click More filter select- User status in search box and Verify the Result of srcs', () => {
    ss.clickOnMoreFilter()
    ss.selectFilterUserStatus()
})

//srcRepairTicket
Then('Click on SrcRepairTickets tab', () => {
    srt.clickOnSrcRepairTicketsTab()
})
Then('I should click on Create Student Repair Ticket button of srcRt', () => {
    srt.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician and building of srcRt', () => {
    srt.selectFailureType()
    srt.selectTechnician()
    srt.selectSerialDevice()
    srt.selectIssue()
    srt.selectBuilding()
})
Then('Enter the Chromebook issue of srcRt', () => {
    srt.enterChromebookIssue()
})
And('Click on save button of srcRt', () => {
    srt.clickOnSaveButton()
})
Then('Verify New Ticket is added of srcRt', () => {
    srt.verifyNewTicket()
})
And('Enter the Search - Record Id in search box and Verify the Result of srcRt', () => {
    srt.searchRecordId()
})
Then('Enter the Search - Ticket Number in search box and Verify the Result of srcRt', () => {
    srt.searchTicketNumber()
})
And('Enter the Search - Repair type in search box and Verify the Result of srcRt', () => {
    srt.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result of srcRt', () => {
    srt.searchRepairStatus()
})
Then('Click on Clear filter of srcRt', () => {
    srt.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterAssetTag()
})
And('Click More filter select- internal Technician in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterStudentTechnician()
})
And('Click More filter select- Created By in search box and Verify the Result of srcRt', () => {
    srt.clickOnMoreFilter()
    srt.selectFilterCreatedBy()
})


//srcFaci
Then('Click on SrcFacilitators tab', () => {
    sf.clickOnSrcFacilitatorsTab()
})
And('Enter the Search - Full name in search box and Verify the Result of srcF', () => {
    sf.searchFullName()
})
Then('Enter the Search - Email in search box and Verify the Result of srcF', () => {
    sf.searchEmail()
})
And('Enter the Search - Status in search box and Verify the Result of srcF', () => {
    sf.searchStatus()
})
Then('Enter the Search - Phone in search box and Verify the Result of srcF', () => {
    sf.searchPhone()
})
Then('Click on Clear filter of srcF', () => {
    sf.clickOnClearFilter()
})
And('Click More filter select- Full name in search box and Verify the Result of srcF', () => {
    sf.clickOnMoreFilter()
    sf.selectFilterFullname()
})
And('Click More filter select- Phone in search box and Verify the Result of srcF', () => {
    sf.clickOnMoreFilter()
    sf.selectFilterPhone()
})
And('Click More filter select- Title in search box and Verify the Result of srcF', () => {
    sf.clickOnMoreFilter()
    sf.selectFilterTitle()
})
And('Click More filter select- Eamil in search box and Verify the Result of srcF', () => {
    sf.clickOnMoreFilter()
    sf.selectFilterEmail()
})
And('Click More filter select- User status in search box and Verify the Result of srcF', () => {
    sf.clickOnMoreFilter()
    sf.selectFilterUserStatus()
})

//inhouse -ticket
And('Click on InHouseRepairCenter tab', () => {
    iht.clickOnInHouseRepairCenterTab()
})
Then('Click All InHouseTickets tab', () => {
    iht.clickOnInHouseTicketsTab()
})
Then('I should click on Create new button of Inrt', () => {
    iht.clickOnCreateTicketButton()
})
And('Select failure Type, Serial Device, Technician, issue and Building of Inrt', () => {
    iht.selectFailureType()
    iht.selectTechnician()
    iht.selectSerialDevice()
    iht.selectRepaireIssue()
    iht.selectBilding()
})
Then('Enter the Chromebook issue of Inrt', () => {
    iht.enterChromebookIssue()
})
And('Click on save button of Inrt', () => {
    iht.clickOnSaveButton()
})
Then('Verify New Ticket is added of Inrt', () => {
    iht.verifyNewTicket()
})
And('Click on Download Export button of Inrt', () => {
    iht.clickOnExport()
})
Then('Verify the successfully downloaded of Inrt', () => {
    iht.verifyDownload()
})
And('Enter the Search - Record Id in search box and Verify the Result of Inrt', () => {
    iht.searchRecordId()
})
Then('Enter the Search - Ticket Number in search box and Verify the Result of Inrt', () => {
    iht.searchTicketNumber()
})
And('Enter the Search - Repair type in search box and Verify the Result of Inrt', () => {
    iht.searchRepairType()
})
Then('Enter the Search - Repair status in search box and Verify the Result of Inrt', () => {
    iht.searchRepairStatus()
})
Then('Click on Clear filter of Inrt', () => {
    iht.clickOnClearFilter()
})

And('Click More filter select- Record Id in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRecordId()
})
And('Click More filter select- Ticket Number in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterTicketNumber()
})
And('Click More filter select- Repair type in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRepairType()
})
And('Click More filter select- Serial Number in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterSerialNumber()
})
And('Click More filter select- Repair status in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRepairStatus()
})
And('Click More filter select- Repair device in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterRepairDevice()
})
And('Click More filter select- Asset tag in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterAssetTag()
})
And('Click More filter select- internal Technician in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterInternalTechnician()
})
And('Click More filter select- Created By in search box and Verify the Result of Inrt', () => {
    iht.clickOnMoreFilter()
    iht.selectFilterCreatedBy()
})

//inhouse workflow
And('Click on InHouseRepairCenter tab', () => {
    ihw.clickOnInHouseRepairCenter()
})
Then('I should click on new button of inw', () => {
    ihw.clickOnNewButton()
})
And('Select failure Type, Serial Device, Technician and repair issue of inw', () => {
    ihw.selectFailureType()
    ihw.selectTechnician()
    ihw.selectSerialDevice()
    ihw.selectRepairissue()
})
Then('Select building and Enter the Chromebook issue of inw', () => {
    ihw.selectBuilding()
    ihw.enterChromebookIssue()
})
And('Click on save button of inw', () => {
    ihw.clickOnSaveButton()
})
Then('Verify New Ticket is added of inw', () => {
    ihw.verifyNewTicket()
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
And('Click More filter select- Record Id in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterRecordId()
})
And('Click More filter select- User Role in search box and Verify the Result of acc', () => {
    acc.clickOnMoreFilter()
    acc.selectFilterUserRole()
})
And('Click More filter select- User Status in search box and Verify the Result of acc', () => {
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
Then('Click on Bulk Upload button of acc', () => {
    acc.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button of acc', () => {
    acc.attachCsvfile()
})
Then('Verify the Uploaded successfully of acc', () => {
    acc.verifyuploaded()
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
And('Click on Export To CSV of build', () => {
    build.clickOnExport()
})
Then('Click on Bulk Upload button of build', () => {
    build.clickOnBulkUpload()
})
And('Click on Attach CSV file and Click on submit button of build', () => {
    build.attachCsvfile()
})
Then('Verify the Uploaded successfully of build', () => {
    build.verifyuploaded()
})

Then('I should click on new button of ihw', () => {
    ihw.clickOnNewButton()
})
And('Select failure Type, Serial Device, Technician and repair issue of ihw', () => {
    ihw.selectFailureType()
    ihw.selectTechnician()
    ihw.selectSerialDevice()
    ihw.selectRepairissue()
})
Then('Select building and Enter the Chromebook issue of ihw', () => {
    ihw.selectBuilding()
    ihw.enterChromebookIssue()
})
And('Click on save button of ihw', () => {
    ihw.clickOnSaveButton()
})
Then('Verify New Ticket is added of ihw', () => {
    ihw.verifyNewTicket()
})
And('Click on Download Export button of ihw', () => {
    ihw.clickOnExport()
})
Then('Verify the successfully downloaded of ihw', () => {
    ihw.verifyDownload()
})
And('Enter Search ticket no in search box of ihw', () => {
    ihw.searchTicketNo()
})
Then('Verify search result below of ihw', () => {
    ihw.verfiySearchResult()
})
And('Click on view button of ihw', () => {
    ihw.clickViewButton()
})
Then('Verify the Details of student repair ticket of ihw', () => {
    ihw.verifySrcRepairTicket()
})
And('Click on the Edit Ticket Button of ihw', () => {
    ihw.clickOnEditButton()
})
Then('Update the Technician and Repair Status of ihw', () => {
    ihw.editTehnician()
    ihw.editRepairStatus()
})
And('Click on Update Button of ihw', () => {
    ihw.clickOnUpdate()
})
Then('Verify Updated successfully of ihw', () => {
    ihw.verifyUpdate()
})
And('Click on Add Line and Verify of ihw', () => {
    ihw.clickOnAddLine()
})
Then('Click on Add Repair Image and Verify of ihw', () => {
    ihw.clickOnAddRepairImage()
})
And('Click on Add Note and Verify of ihw', () => {
    ihw.clickOnAddNote()
})

And('Click on ImportSerialDevices Tab', () => {
    isd.clickOnImportSerialDevices()
})
Then('I should click on Add New Import of isd', () => {
    isd.clickOnAddNewImport()
})
Then('Upload the CSV import file of isd' , () => {
    isd.uploadcsvFile()
})
And('Click on submit button of isd', () => {
    isd.clickOnSubmitButton()
})
And('Click on refresh button of isd', () => {
    isd.clickOnRefreshButton()
})
Then('Verify the record in table of isd', () => {
    isd.verfiyImportTable()
})
And('Click on Download import button of isd', () => {
    isd.clickOnDownloadImport()
})
And('Click on Details button of isd', () => {
    isd.clickOnDetailsButton()
})
Then('Verify the Device Details of isd', () => {
    isd.verifyDeviceDetails()
}) 
And ('Click More filter select- Importer in search box and Verify the Result of isd',()=>{
    isd.clickOnMoreFilter()
    isd.selectFilterImporter()
})
And ('Click More filter select- Quantity Devices in search box and Verify the Result of isd',()=>{
    isd.clickOnMoreFilter()
    isd.selectFilterQuantityDevices()
})
Then ('Click on Clear filter of isd',()=>{
    isd.clickOnClearFilter()
})


And('Click on MyFleet Tab', () => {
    mf.clickOnMyFleet()
})
Then('Click on the add device of MyF', () => {
    mf.clickOnAddDevice()
})
And('Enter Serial no and select device id of MyF', () => {
    mf.enterSerialNo()
    mf.selectDeviceId()
})
Then('Enter Asset Tag and Select student id of MyF', () => {
    mf.enterAssetTag()
    mf.selectStudentid()
})
And('Select lonar status and Device status of MyF', () => {
    mf.selectLonarStatus()
    mf.selectDeviceStatus()
})
Then('Click on the Submit Button of MyF', () => {
    mf.clickOnsubmitButton()
})
And('Verify the device added successfully of MyF', () => {
    mf.verfifyDeviceAdded()
})
Then('Click on Edit button of MyF', () => {
    mf.clickOnEditButton()
})
And('Update Asset tag, student info and building information and Click on update button of MyF', () => {
    mf.editInformation()
    mf.clickOnUpdateButton()
})
Then('Verfiy Record updated successfully of MyF', () => {
mf.verifyUdated()
})
Then('Click on Clear filter of MyF', () => {
    mf.clickOnClearFiltersButton()
})
And('Enter the table fields in search box of MyF', () => {
    mf.enterSearchValue()
})
And('Verify the record in searching history of MyF', () => {
    mf.verifySearchResult()
})
Then('Click on view Button of MyF', () => {
    mf.clickOnViewButton()
})
And('Verify the Warranty Description of MyF', () => {
    mf.verifyViewResult()
})
Then('Click on Export To CSV of MyF', () => {
    mf.clickOnCExportToCSVButton()
})
And('Verify Downloaded successfully of MyF', () => {
    mf.verifyDownloadSuccessful()
})
And('Click More filter select- Serial Number in search box and Verify the Result of MyF', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterSerialNumber()
})
And('Click More filter select- Asset tag in search box and Verify the Result of MyF', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterAssetTag()
})
And('Click More filter select- Device in search box and Verify the Result of MyF', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterDevice()
})
And('Click More filter select- Student in search box and Verify the Result of MyF', () => {
    mf.clickOnMoreFiltersButton()
    mf.selectFilterStudent()
})
Then('Click on Retired Tab', () => {
    mf.clickOnRetiredTab()
})

And('Click on LoanerManagement Tab', () => {
    loan.clickOnLoanerManagement()
})
Then('Search the serial no in search box of Available Devices section of lm', () => {
    loan.serachAvailableDevice()
})
And('Verify the search result of lm', () => {
    loan.verifySerachAvailableDevice()
})
Then('Click on the Add to loaner pool of lm', () => {
    loan.clickOnAddtoLoanerPool()
})
Then('Search the serial no in the Available section of lm', () => {
    loan.searchAvailable()
    loan.verifySearchAvailable()
})
And('Click on th add Student button of lm', () => {
    loan.clickOnAddStudent()
})
Then('Enter Fullname, title and email of lm', () => {
    loan.enterFullname()
    loan.enterTitle()
    loan.enterEmail()
})
And('Select status, building and student_id of lm', () => {
    loan.selectStatus()
    loan.selectBuilding()
    loan.selectStudent_id()
})
Then('Click on the submit button of form of lm', () => {
    loan.clickOnsubmitForm()
})
And('Verify the student added successfully of lm', () => {
    loan.verifyStudentAdded()
})
Then('Click on check out button of lm', () => {
    loan.clickOnCheckOut()
})
And('Select the student name of lm', () => {
    loan.selectStudentName()
})
Then('Click on the submit button of lm', () => {
    loan.clickOnSubmitbtn()
})
And('Search the serial no in the check out section of lm', () => {
    loan.serachCheckOut()
    loan.verifySerachCheckOut()
})
Then('Click on the Check in button of lm', () => {
    loan.clickOnCheckIn()
})
And('Enter note and click on submit button of lm', () => {
    loan.enterNote()
    loan.clickOnSubmitNote()
})
Then('Verify the device is added in Available section of lm', () => {
    loan.searchAvailable()
    loan.verifySerachAvailable()
})
And('Click on remove from loaner pool button of lm', () => {
    loan.serachAvailableDevice()
    loan.clickOnRemoveFromPool()
})

And('Click on OrgUploadAssets Tab', () => {
    oua.clickOnOrgUploadAssets()
})
Then('I should click on Add Asset of oua', () => {
    oua.clickOnAddAssetbutton()
})
Then('Enter title, full name location and tag of oua', () => {
    // oua.enterTitle()
    // oua.enterFullname()
    oua.enterLocation()
    oua.enterTag()
})
And('Enter note, Type and description of oua', () => {
    oua.enterNote()
    oua.enterType()
    //  oua.enterDescription()
})
Then('Upload the image file of oua', () => {
    oua.selectFileForUpload()
    oua.enterDescription()
})
And('Click on save button of oua', () => {
    oua.clickOnASaveButton()
})
Then('Verify the asset details added in table of oua', () => {
    oua.verifyRecordTable()
})
And('Enter the title in search box of oua', () => {
    oua.enterSearchValue()
})
Then('Click on Search button of oua', () => {
    oua.clickOnASearchButton()
})
And('Verify the record in searching history of oua', () => {
    oua.verifySearchResult()
})
And('Click on Edit button of oua', () => {
    oua.clickOnEditIcon()
})
Then('I should edit title, full name location and tag of oua', () => {
    oua.editLocation()
    oua.editTag()
})
And('I should edit note, Type and description of oua', () => {
    oua.editNotes()
    oua.editType()
    oua.editDescription()
})
Then('ReUpload the image file of oua', () => {
    oua.editUpload()
})
Then('Click on save button of oua', () => {
    oua.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage of oua', () => {
    oua.verfifyDataUpdatedMessage()
})
And('Click on Delete button of oua', () => {
    oua.clickDeleteIcon()
})
Then('Click on Confirm Delete button of oua', () => {
    oua.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully of oua', () => {
    oua.verifyRecordDeleted()
})
Then('Click on Clear filter of oua', () => {
    oua.clickOnClearFilter()
})
And('Click More filter select- Description in search box and Verify the Result of oua', () => {
    oua.clickOnMoreFilter()
    oua.selectFilterDescription()
    cy.wait(100)
})
And('Click More filter select- Acquire Location in search box and Verify the Result of oua', () => {
    oua.clickOnMoreFilter()
    oua.selectFilterAcquireLocation()
})

And('Click More filter select- Title in search box and Verify the Result of ft', () => {
    ft.clickOnMoreFilter()
    ft.selectFilterTitle()
})
And('Click More filter select- Description in search box and Verify the Result of ft', () => {
    ft.clickOnMoreFilter()
    ft.selectFilterDescription()
})
And('Click More filter select- Creator in search box and Verify the Result of ft', () => {
    ft.clickOnMoreFilter()
    ft.selectFilterCreator()
})
Then('Click on Clear filter of ft', () => {
    ft.clickOnClearFilter()
})

And('Enter Full name of sup', () => {
    su.enterFullname()
})
Then('Select task Priority and Topic of sup', () => {
    su.selectPriority()
    su.selectTopic()
})
And('Upload the image and enter Notes of sup', () => {
    su.uploadImage()
    su.enterNotes()
})
Then('Click on submit button of sup', () => {
  su.clickOnSubmit()
})
And('Verify the Send Feedback successfully of sup', () => {
    su.verfiyFeedbackSuccess()
})

Then('I should click on Add New student of user', () => {
    user.clickOnCreateNewStudent()
})
Then('Enter full name, title and Email of user', () => {
    user.enterFullname()
    user.enterTitle()
    user.enterEmail()
})
And('Enter Phone and Cell Number of user', () => {
    user.enterPhone()
    user.enterCellNumber()
})
And('Click on submit button of user', () => {
    user.clickOnASubmitButton()
})
Then('Verify the student added in table of user', () => {
    user.verifyRecordTable()
})
And('Enter the Search value in search box of user', () => {
    user.enterSearchValue()
})
Then('Verify the Results in the table of user', () => {
    user.verifySearchResult()
})
And('Click on Edit button of user', () => {
    user.clickOnEditButton()
})
Then('I should edit title, full name of user', () => {
    user.editTitle()
    user.editFullname()
})
And('I should edit Phone and Cell Number and user role of user', () => {
    user.editCellNumber()
    user.editPhone()
    user.editUserRole()
})
Then('I edit User Status to inactive of user', () => {
    user.editUserStatus()
})
And('I edit Building of user', () => {
    user.editBuilding()
})
Then('Click on Submit button of user', () => {
    user.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage of user', () => {
    user.verfifyDataUpdatedMessage()
})
And ('Click on Delete button of user',()=>{
    user.clickDeleteButton() 
})
Then ('Click on Confirm Delete button of user',()=>{
    user.clickConfirmDeleteButton() 
})
And ('Verify the record is deleted successfully of user',()=>{
    user.verifyRecordDeleted()
})
Then ('Click on Add Filter of user',()=>{
    user.clickOnAddFilterButton()
})
Then('Select Field name and Field operation of user', () => {
    user.selectFieldName()
    user.selectfieldOperation()
})
And('Enter the Search value in search box of Filter of user', () => {
    user.enterFieldValueSearchBox()
})
Then('Click on Apply Button of user', () => {
    user.clickOnApplyButton()
})
And('Verify the Filter Results in the table of user', () => {
    user.verifyResultAfterFilter()
})
Then('Click on Download button of user', () => {
    user.clickOnDownload()
})
And('Enter the Search - Record Id in search box and Verify the Result of user', () => {
    user.searchRecordId()
})
Then('Enter the Search - Full Name in search box and Verify the Result of user', () => {
    user.searchFullName()
})
And('Enter the Search - Email in search box and Verify the Result of user', () => {
    user.searchEmail()
})
Then('Enter the Search - Phone in search box and Verify the Result of user', () => {
    user.searchPhone()
})
And('Enter the Search - CellNumber in search box and Verify the Result of user', () => {
    user.searchCellNumber()
})
Then('Enter the Search - User Role in search box and Verify the Result of user', () => {
    user.searchUserRole()
})
Then('Click on Clear filter of user', () => {
    user.clickOnClearFilter()
})
And('Click More filter select- Record Id in search box and Verify the Result of user', () => {
    user.clickOnMoreFilter()
    user.selectFilterRecordId()
})
And ('Click More filter select- Full name in search box and Verify the Result of user',()=>{
    user.clickOnMoreFilter()
    user.selectFilterFullname()
})
And ('Click More filter select- Cell Number in search box and Verify the Result of user',()=>{
    user.clickOnMoreFilter()
    user.selectFilterCellNumber()
})
And ('Click More filter select- Eamil in search box and Verify the Result of user',()=>{
    user.clickOnMoreFilter()
    user.selectFilterEmail()
})
And ('Click More filter select- Role Name in search box and Verify the Result of user',()=>{
    user.clickOnMoreFilter()
    user.selectFilterRoleName()
})
And ('Click More filter select- User status in search box and Verify the Result of user',()=>{
    user.clickOnMoreFilter()
    user.selectFilterUserStatus()
})

