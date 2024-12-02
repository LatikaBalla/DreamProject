import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { VivacityAdminActions } from '../PageObject/PageActions/VivacityAdminActions'
import { FeaturesActions } from '../PageObject/PageActions/FeaturesActions'

const ft = new FeaturesActions()
const vadmin = new VivacityAdminActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.VivacityAdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    vadmin.closeTermsOfServiceWindow()
    cy.wait(1000)
})
And('Click on Vivacity Admin page', () => {
    vadmin.clickOnVivacityAdmin()
})
Then('I should be redirected to the Users page', () => {
    cy.url().should('include', '/admin')
})
Then('All Paid Subscription Requests unit should be visible', () => {
    vadmin.allPaidSubcription()
})
And('Roadmap Requests unit should be visible', () => {
    vadmin.roadmapRequest()
})
Then('Admin Users unit should be visible', () => {
    vadmin.adminUser()
})
And('Warranties unit should be visible', () => {
    vadmin.Warranty()
})
Then('Import Serial Device unit should be visible', () => {
    vadmin.iserialDevice()
})
And('Account Management unit should be visible', () => {
    vadmin.accManagement()
})
Then('New User Creation Requests unit should be visible', () => {
    vadmin.requestUser()
})
And('All Users unit should be visible', () => {
    vadmin.allUser()
})
Then('Repair Ticket Creation unit should be visible', () => {
    vadmin.RepairTicketCreation()
})
And('Employee management unit should be visible', () => {
    vadmin.employeeManagment()
})
And ('Import serial device Request should be visible',()=>{
    vadmin.importserialdeviceRequest()
})
Then ('Trial Paid Subscriptions should be visible',()=>{
    vadmin.trialPaidSubscriptions()
})
And ('Import Parts Closet should be visible',()=>{
    vadmin.importPartsCloset()
})
//employee management 
Then('Click on Employee management unit', () => {
    vadmin.clickOnEmployeeManagment()
})
Then('I should click on Create new Employee', () => {
    vadmin.clickOnCreateNewEmp()
})
Then('Enter full name, title and Email for Employee', () => {
    vadmin.enterFullnameEmp()
    vadmin.enterTitle()
    vadmin.enterEmailEmp()
})
And('Enter Phone and select userStatus for Employee', () => {
    vadmin.enterPhone()
    vadmin.selectUserStatus()
})
And('Click on submit button for Employee', () => {
    cy.get('form > .MuiButton-containedPrimary').click({ force: true })
    //vadmin.clickOnSubmitButton()
})
Then('Verify the Employee added in table', () => {
    vadmin.verifyEmployeeAdded()
})
Then('Select Email from Dropdownlist', () => {
    vadmin.selectEmail()
})
And('Click on Edit button new Employee', () => {
    vadmin.clickConEditEmp()
})
Then('I should edit fullname and title for Employee', () => {
    vadmin.editTitle()
    vadmin.editFullnameEmp()
})
And('I should edit Phone and user status for Employee', () => {
    vadmin.editPhone()
    vadmin.editUserStatusEmp()
})
Then('Click on edit Submit button for Employee', () => {
    vadmin.clickOneditSubmitButton()
})
And('Verify the Record has been updated Meassage', () => {
    vadmin.verifyEmpUpdated()
})
Then('Click on the Export Button for Employee', () => {
    vadmin.clickOnExportEmp()
})
Then('Click on Import Serial Device unit',()=>{
    vadmin.clickOnimportdevice()
})
//Emp fn
And('Click on filter of Full Name contain and Verify the Result', () => {
    vadmin.filtercontainFN()
})
And('Click on filter of Full Name Does not contain and Verify the Result', () => {
    vadmin.filterDoesnotcontainFN()
})
And('Click on filter of Full Name Equals and Verify the Result', () => {
    vadmin.filterEqualsFN()
})
And('Click on filter of Full Name Does not equal and Verify the Result', () => {
    vadmin.filterNotequalFN()
})
And('Click on filter of Full Name Begins with and Verify the Result', () => {
    vadmin.filterBeginswithFN()
})
And('Click on filter of Full Name Ends with and Verify the Result', () => {
    vadmin.filterEndswithFN()
})
And('Click on filter of Full Name Blank and Verify the Result', () => {
    vadmin.filterBlankFN()
})
And('Click on filter of Full Name Not blank and Verify the Result', () => {
    vadmin.filterNotblankFN()
})
And('Click on filter of Eamil contain and Verify the Result', () => {
    vadmin.filtercontainE()
})
And('Click on filter of Eamil Does not contain and Verify the Result', () => {
    vadmin.filterDoesnotcontainE()
})
And('Click on filter of Eamil Equals and Verify the Result', () => {
    vadmin.filterEqualsE()
})
And('Click on filter of Eamil Does not equal and Verify the Result', () => {
    vadmin.filterNotequalE()
})
And('Click on filter of Eamil Begins with and Verify the Result', () => {
    vadmin.filterBeginswithE()
})
And('Click on filter of Eamil Ends with and Verify the Result', () => {
    vadmin.filterEndswithE()
})
And('Click on filter of Eamil Blank and Verify the Result', () => {
    vadmin.filterBlankE()
})
And('Click on filter of Eamil Not blank and Verify the Result', () => {
    vadmin.filterNotblankE()
})
And('Click on filter of Phone contain and Verify the Result', () => {
    vadmin.filtercontainP()
})
And('Click on filter of Phone Does not contain and Verify the Result', () => {
    vadmin.filterDoesnotcontainP()
})
And('Click on filter of Phone Equals and Verify the Result', () => {
    vadmin.filterEqualsP()
})
And('Click on filter of Phone Does not equal and Verify the Result', () => {
    vadmin.filterNotequalP()
})
And('Click on filter of Phone Begins with and Verify the Result', () => {
    vadmin.filterBeginswithP()
})
And('Click on filter of Phone Ends with and Verify the Result', () => {
    vadmin.filterEndswithP()
})
And('Click on filter of Phone Blank and Verify the Result', () => {
    vadmin.filterBlankP()
})
And('Click on filter of Phone Not blank and Verify the Result', () => {
    vadmin.filterNotblankP()
})
And('Click on filter of Created Date Equals and Verify the Result', () => {
    vadmin.filterEqualsCDate()
})
And('Click on filter of Created Date Does not equal and Verify the Result', () => {
    vadmin.filterNotequalCDate()
})
And('Click on filter of Created Date Before and Verify the Result', () => {
    vadmin.filterBeforeCDate()
})
And('Click on filter of Created Date After and Verify the Result', () => {
    vadmin.filterAfterCDate()
})
And('Click on filter of Created Date Between and Verify the Result', () => {
    vadmin.filterBetweenCDate()
})
And('Click on filter of Created Date Blank and Verify the Result', () => {
    vadmin.filterBlankCDate()
})
And('Click on filter of Created Date Not blank and Verify the Result', () => {
    vadmin.filterNotblankCDate()
})
And('Click on filter of Employee Status contain and Verify the Result', () => {
    vadmin.filtercontainEmpStatus()
})
And('Click on filter of Employee Status Does not contain and Verify the Result', () => {
    vadmin.filterDoesnotcontainEmpStatus()
})
And('Click on filter of Employee Status Equals and Verify the Result', () => {
    vadmin.filterEqualsEmpStatus()
})
And('Click on filter of Employee Status Does not equal and Verify the Result', () => {
    vadmin.filterNotequalEmpStatus()
})
And('Click on filter of Employee Status Begins with and Verify the Result', () => {
    vadmin.filterBeginswithEmpStatus()
})
And('Click on filter of Employee Status Ends with and Verify the Result', () => {
    vadmin.filterEndswithEmpStatus()
})
And('Click on filter of Employee Status Blank and Verify the Result', () => {
    vadmin.filterBlankEmpStatus()
})
And('Click on filter of Employee Status Not blank and Verify the Result', () => {
    vadmin.filterNotblankEmpStatus()
})
And('Click on Sort Ascending and Descending for Full Name and Verify the Result', () => {
    vadmin.sortingFullName()
})
And('Click on Sort Ascending and Descending for Email and Verify the Result', () => {
    vadmin.sortingEmail()
})
And('Click on Sort Ascending and Descending for Phone and Verify the Result', () => {
    vadmin.sortingPhone()
})
And('Click on Sort Ascending and Descending for Employee Status and Verify the Result', () => {
    vadmin.sortingEmployeeStatus()
})
//admin user 
And('Click on filter of Full Name contain and Verify the Result for adminU', () => {
    vadmin.filtercontainFNadmin()
})
And('Click on filter of Full Name Does not contain and Verify the Result for adminU', () => {
    vadmin.filterDoesnotcontainFNadmin()
})
And('Click on filter of Full Name Equals and Verify the Result for adminU', () => {
    vadmin.filterEqualsFNadmin()
})
And('Click on filter of Full Name Does not equal and Verify the Result for adminU', () => {
    vadmin.filterNotequalFNadmin()
})
And('Click on filter of Full Name Begins with and Verify the Result for adminU', () => {
    vadmin.filterBeginswithFNadmin()
})
And('Click on filter of Full Name Ends with and Verify the Result for adminU', () => {
    vadmin.filterEndswithFNadmin()
})
And('Click on filter of Full Name Blank and Verify the Result for adminU', () => {
    vadmin.filterBlankFNadmin()
})
And('Click on filter of Full Name Not blank and Verify the Result for adminU', () => {
    vadmin.filterNotblankFNadmin()
})
And ('Click on filter of User Status contain and Verify the Result',()=>{
    vadmin.filterContainUStatus()
})
And ('Click on filter of User Status Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainUStatus()
})
And ('Click on filter of User Status Equals and Verify the Result',()=>{
    vadmin.filterEqualsUStatus()
})
And ('Click on filter of User Status Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalUStatus()
})
And ('Click on filter of User Status Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithUStatus()
}) 
And ('Click on filter of User Status Ends with and Verify the Result',()=>{
    vadmin.filterEndswithUStatus()
})
And ('Click on filter of User Status Blank and Verify the Result',()=>{
    vadmin.filterBlankUStatus()
})
And ('Click on filter of User Status Not blank and Verify the Result',()=>{
    vadmin.filterNotblankUStatus()
})
And ('Click on filter of User Role contain and Verify the Result',()=>{
    vadmin.filterContainURole()
})
And ('Click on filter of User Role Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainURole()
})
And ('Click on filter of User Role Equals and Verify the Result',()=>{
    vadmin.filterEqualsURole()
})
And ('Click on filter of User Role Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalURole()
})
And ('Click on filter of User Role Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithURole()
}) 
And ('Click on filter of User Role Ends with and Verify the Result',()=>{
    vadmin.filterEndswithURole()
})
And ('Click on filter of User Role Blank and Verify the Result',()=>{
    vadmin.filterBlankURole()
})
And ('Click on filter of User Role Not blank and Verify the Result',()=>{
    vadmin.filterNotblankURole()
})
And('Click on filter of Eamil contain and Verify the Result for adminU', () => {
    vadmin.filtercontainEadmin()
})
And('Click on filter of Eamil Does not contain and Verify the Result for adminU', () => {
    vadmin.filterDoesnotcontainEadmin()
})
And('Click on filter of Eamil Equals and Verify the Result for adminU', () => {
    vadmin.filterEqualsEadmin()
})
And('Click on filter of Eamil Does not equal and Verify the Result for adminU', () => {
    vadmin.filterNotequalEadmin()
})
And('Click on filter of Eamil Begins with and Verify the Result for adminU', () => {
    vadmin.filterBeginswithEadmin()
})
And('Click on filter of Eamil Ends with and Verify the Result for adminU', () => {
    vadmin.filterEndswithEadmin()
})
And('Click on filter of Eamil Blank and Verify the Result for adminU', () => {
    vadmin.filterBlankEadmin()
})
And('Click on filter of Eamil Not blank and Verify the Result for adminU', () => {
    vadmin.filterNotblankEadmin()
})
And('Click on filter of Phone contain and Verify the Result for adminU', () => {
    vadmin.filtercontainPadmin()
})
And('Click on filter of Phone Does not contain and Verify the Result for adminU', () => {
    vadmin.filterDoesnotcontainPadmin()
})
And('Click on filter of Phone Equals and Verify the Result for adminU', () => {
    vadmin.filterEqualsPadmin()
})
And('Click on filter of Phone Does not equal and Verify the Result for adminU', () => {
    vadmin.filterNotequalPadmin()
})
And('Click on filter of Phone Begins with and Verify the Result for adminU', () => {
    vadmin.filterBeginswithPadmin()
})
And('Click on filter of Phone Ends with and Verify the Result for adminU', () => {
    vadmin.filterEndswithPadmin()
})
And('Click on filter of Phone Blank and Verify the Result for adminU', () => {
    vadmin.filterBlankPadmin()
})
And('Click on filter of Phone Not blank and Verify the Result for adminU', () => {
    vadmin.filterNotblankPadmin()
})
And('Click on Sort Ascending and Descending for Full Name and Verify the Result', () => {
    vadmin.sortingFullNameAdmin()
})
And('Click on Sort Ascending and Descending for Email and Verify the Result', () => {
    vadmin.sortingEmailAdmin()
})
And('Click on Sort Ascending and Descending for Phone and Verify the Result', () => {
    vadmin.sortingPhoneAdmin()
})
And('Click on Sort Ascending and Descending for User Status and Verify the Result', () => {
    vadmin.sortingUserStatus()
})
And('Click on Sort Ascending and Descending for User Role and Verify the Result', () => {
    vadmin.sortingUserRole()
})
Then('Click on Admin Users unit', () => {
    vadmin.clickOnAdminUser()
})
Then('I should click on Add New Admin', () => {
    vadmin.clickOnNewAdmin()
})
Then('Enter full name, title and Email of Admin', () => {
    vadmin.enterFullname()
    vadmin.enterTitle()
    vadmin.enterEmail()
})
And('Enter Phone,Cell Number and select UserRole of Admin', () => {
    vadmin.enterPhone()
})
And('Click on submit button of Admin', () => {
    vadmin.clickOnASubmitButton()
})
//aAccount Managemnet 
Then('Click on Account Management unit', () => {
    vadmin.clickOnAccountMangment()
})
And('I should click on Add Account', () => {
    vadmin.clickOnAddAccount()
})
Then('Enter Account name, Phone, Email, Domain and credit Limit', () => {
    vadmin.enterAccName()
    vadmin.enterPhoneNo()
    vadmin.enterEmailAcc()
    vadmin.enterDomain()
    vadmin.enterCreditLimit()
})
And('Select In house Repaire and Payment terms', () => {
    vadmin.selectIhRepaire()
    vadmin.selectPaymentTerms()
})
And('Select account site and account manager', () => {
    vadmin.selectAccountSite()
    vadmin.selectAccountManager()
    vadmin.enterNetsuiteId()
})
Then('Click on submit button Account', () => {
    vadmin.clickOnSubmitButtonAcc()
})
And('Verify the Account added in table', () => {
    vadmin.verifyRecordAccountAdded()
})
And ('Click on filter of Name contain and Verify the Result',()=>{
    vadmin.filterContainName()
})
And ('Click on filter of Name Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainName()
})
And ('Click on filter of Name Equals and Verify the Result',()=>{
    vadmin.filterEqualsName()
})
And ('Click on filter of Name Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalName()
})
And ('Click on filter of Name Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithName()
}) 
And ('Click on filter of Name Ends with and Verify the Result',()=>{
    vadmin.filterEndswithName()
})
And ('Click on filter of Name Blank and Verify the Result',()=>{
    vadmin.filterBlankName()
})
And ('Click on filter of Name Not blank and Verify the Result',()=>{
    vadmin.filterNotblankName()
})
And ('Click on filter of Credit Limit contain and Verify the Result',()=>{
    vadmin.filterContainCreditL()
})
And ('Click on filter of Credit Limit Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainCreditL()
})
And ('Click on filter of Credit Limit Equals and Verify the Result',()=>{
    vadmin.filterEqualsCreditL()
})
And ('Click on filter of Credit Limit Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalCreditL()
})
And ('Click on filter of Credit Limit Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithCreditL()
}) 
And ('Click on filter of Credit Limit Ends with and Verify the Result',()=>{
    vadmin.filterEndswithCreditL()
})
And ('Click on filter of Credit Limit Blank and Verify the Result',()=>{
    vadmin.filterBlankCreditL()
})
And ('Click on filter of Credit Limit Not blank and Verify the Result',()=>{
    vadmin.filterNotblankCreditL()
})
And ('Click on filter of Account Credit contain and Verify the Result',()=>{
    vadmin.filterContainAccCredit()
})
And ('Click on filter of Account Credit Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainAccCredit()
})
And ('Click on filter of Account Credit Equals and Verify the Result',()=>{
    vadmin.filterEqualsAccCredit()
})
And ('Click on filter of Account Credit Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalAccCredit()
})
And ('Click on filter of Account Credit Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithAccCredit()
}) 
And ('Click on filter of Account Credit Ends with and Verify the Result',()=>{
    vadmin.filterEndswithAccCredit()
})
And ('Click on filter of Account Credit Blank and Verify the Result',()=>{
    vadmin.filterBlankAccCredit()
})
And ('Click on filter of Account Credit Not blank and Verify the Result',()=>{
    vadmin.filterNotblankAccCredit()
})
And ('Click on filter of Account Balance contain and Verify the Result',()=>{
    vadmin.filterContainAccBal()
})
And ('Click on filter of Account Balance Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainAccBal()
})
And ('Click on filter of Account Balance Equals and Verify the Result',()=>{
    vadmin.filterEqualsAccBal()
})
And ('Click on filter of Account Balance Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalAccBal()
})
And ('Click on filter of Account Balance Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithAccBal()
}) 
And ('Click on filter of Account Balance Ends with and Verify the Result',()=>{
    vadmin.filterEndswithAccBal()
})
And ('Click on filter of Account Balance Blank and Verify the Result',()=>{
    vadmin.filterBlankAccBal()
})
And ('Click on filter of Account Balance Not blank and Verify the Result',()=>{
    vadmin.filterNotblankAccBal()
})
And ('Click on filter of Contact contain and Verify the Result',()=>{
    vadmin.filterContainContact()
})
And ('Click on filter of Contact Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainContact()
})
And ('Click on filter of Contact Equals and Verify the Result',()=>{
    vadmin.filterEqualsContact()
})
And ('Click on filter of Contact Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalContact()
})
And ('Click on filter of Contact Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithContact()
}) 
And ('Click on filter of Contact Ends with and Verify the Result',()=>{
    vadmin.filterEndswithContact()
})
And ('Click on filter of Contact Blank and Verify the Result',()=>{
    vadmin.filterBlankContact()
})
And ('Click on filter of Contact Not blank and Verify the Result',()=>{
    vadmin.filterNotblankContact()
})
And ('Click on filter of Building contain and Verify the Result',()=>{
    vadmin.filterContainBuilding()
})
And ('Click on filter of Building Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainBuilding()
})
And ('Click on filter of Building Equals and Verify the Result',()=>{
    vadmin.filterEqualsBuilding()
})
And ('Click on filter of Building Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalBuilding()
})
And ('Click on filter of Building Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithBuilding()
}) 
And ('Click on filter of Building Ends with and Verify the Result',()=>{
    vadmin.filterEndswithBuilding()
})
And ('Click on filter of Building Blank and Verify the Result',()=>{
    vadmin.filterBlankBuilding()
})
And ('Click on filter of Building Not blank and Verify the Result',()=>{
    vadmin.filterNotblankBuilding()
})
And ('Click on filter of Users contain and Verify the Result',()=>{
    vadmin.filterContainUesrs()
})
And ('Click on filter of Users Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainUesrs()
})
And ('Click on filter of Users Equals and Verify the Result',()=>{
    vadmin.filterEqualsUesrs()
})
And ('Click on filter of Users Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalUesrs()
})
And ('Click on filter of Users Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithUesrs()
}) 
And ('Click on filter of Users Ends with and Verify the Result',()=>{
    vadmin.filterEndswithUesrs()
})
And ('Click on filter of Users Blank and Verify the Result',()=>{
    vadmin.filterBlankUesrs()
})
And ('Click on filter of Users Not blank and Verify the Result',()=>{
    vadmin.filterNotblankUesrs()
})
And ('Click on filter of Repair Tickets contain and Verify the Result',()=>{
    vadmin.filterContainRTickets()
})
And ('Click on filter of Repair Tickets Does not contain and Verify the Result',()=>{
    vadmin.filterDoesnotcontainRTickets()
})
And ('Click on filter of Repair Tickets Equals and Verify the Result',()=>{
    vadmin.filterEqualsRTickets()
})
And ('Click on filter of Repair Tickets Does not equal and Verify the Result',()=>{
    vadmin.filterNotequalRTickets()
})
And ('Click on filter of Repair Tickets Begins with and Verify the Result',()=>{
    vadmin.filterBeginswithRTickets()
}) 
And ('Click on filter of Repair Tickets Ends with and Verify the Result',()=>{
    vadmin.filterEndswithRTickets()
})
And ('Click on filter of Repair Tickets Blank and Verify the Result',()=>{
    vadmin.filterBlankRTickets()
})
And ('Click on filter of Repair Tickets Not blank and Verify the Result',()=>{
    vadmin.filterNotblankRTickets()
})
And('Click on filter of Fleet Devices Equals and Verify the Result', () => {
    trans.filterEqualsFDevice()
})
And('Click on filter of Fleet Devices Does not equal and Verify the Result', () => {
    trans.filterNotequalFDevice()
})
And('Click on filter of Fleet Devices Before and Verify the Result', () => {
    trans.filterBeforeFDevice()
})
And('Click on filter of Fleet Devices After and Verify the Result', () => {
    trans.filterAfterFDevice()
})
And('Click on filter of Fleet Devices Between and Verify the Result', () => {
    trans.filterBetweenFDevice()
})
And('Click on filter of Fleet Devices Blank and Verify the Result', () => {
    trans.filterBlankFDevice()
})
And('Click on filter of Fleet Devices Not blank and Verify the Result', () => {
    trans.filterNotblankFDevice()
})
And('Click on filter of Last Full Google Sync Equals and Verify the Result', () => {
    trans.filterEqualsLGoogle()
})
And('Click on filter of Last Full Google Sync Does not equal and Verify the Result', () => {
    trans.filterNotequalGoogle()
})
And('Click on filter of Last Full Google Sync Before and Verify the Result', () => {
    trans.filterBeforeLGoogle()
})
And('Click on filter of Last Full Google Sync After and Verify the Result', () => {
    trans.filterAfterLGoogle()
})
And('Click on filter of Last Full Google Sync Between and Verify the Result', () => {
    trans.filterBetweenLGoogle()
})
And('Click on filter of Last Full Google Sync Blank and Verify the Result', () => {
    trans.filterBlankLGoogle()
})
And('Click on filter of Last Full Google Sync Not blank and Verify the Result', () => {
    trans.filterNotblankLGoogle()
})
//warranty
Then('Click on warranty unit', () => {
    vadmin.serialNoWarrantySection()
})
And('I should click on Add warranty', () => {
    vadmin.clickOnAddWarranty()
})
Then('Enter name and SKU', () => {
    vadmin.enterName()
    vadmin.enterSKU()
})
And('Select Type and Damge protection', () => {
    vadmin.selectType()
    vadmin.selectDamgeProtection()
})
Then('Enter Device Price year month and Bettery Year and month', () => {
    vadmin.enterDevicePrice()
    vadmin.enterYear()
    vadmin.enterMonth()
    vadmin.enterBatteryYear()
    vadmin.enterBatteryMonth()
})
And('Select provider and write description', () => {
    vadmin.selectProvider()
    vadmin.enterWDescription()
})
Then('Click on submit button of warranty', () => {
    vadmin.clickOnSubmitWar()
})
And('Verify the warranty added in table', () => {
    vadmin.verifyWarrantyRecordAdded()
})
Then('Enter the value in search warranty', () => {
    vadmin.enterSearchWarranty()
})
And('Verify search result warranty', () => {
    vadmin.verifySearchWarranty()
})
And('Click On Edit icon', () => {
    vadmin.clickOnWEditIcon()
})
Then('I should edit name and SKU', () => {
    vadmin.editName()
    vadmin.editSKU()
})
And('I should edit Type and Damge protection', () => {
    vadmin.editType()
    vadmin.editDamgeProtection()
})
Then('I should edit Device Price year month and Bettery Year and month', () => {
    vadmin.editDevicePrice()
    vadmin.editYear()
    vadmin.editMonth()
    vadmin.editBatteryYear()
    vadmin.editBatteryMonth()
})
And('I should edit provider and write description', () => {
    vadmin.editProvider()
    vadmin.editWDescription()
})
Then('Click on update button', () => {
    vadmin.clickOnUpdateButton()
})
And('Verify the warranty updated Meassage', () => {
    vadmin.verifyWarrantyRecordUpdated()
})
And('Click on Delete Icon', () => {
    cy.wait(1000)
    vadmin.clickDeleteIcon()
})
Then('Click on Confirm Delete Icon', () => {
    vadmin.clickConDeleteButton()
})
And('Verify the record is deleted successfully for warranty for warranty', () => {
    vadmin.verifyRecordDeletedWarranty()
})
And ('Click on filter of Name contain and Verify the Result for warranty',()=>{
    vadmin.filterContainNameWar()
})
And ('Click on filter of Name Does not contain and Verify the Result for warranty',()=>{
    vadmin.filterDoesnotcontainNameWar()
})
And ('Click on filter of Name Equals and Verify the Result for warranty',()=>{
    vadmin.filterEqualsNameWar()
})
And ('Click on filter of Name Does not equal and Verify the Result for warranty',()=>{
    vadmin.filterNotequalNameWar()
})
And ('Click on filter of Name Begins with and Verify the Result for warranty',()=>{
    vadmin.filterBeginswithNameWar()
}) 
And ('Click on filter of Name Ends with and Verify the Result for warranty',()=>{
    vadmin.filterEndswithNameWar()
})
And ('Click on filter of Name Blank and Verify the Result for warranty',()=>{
    vadmin.filterBlankNameWar()
})
And ('Click on filter of Name Not blank and Verify the Result for warranty',()=>{
    vadmin.filterNotblankNameWar()
})
And ('Click on filter of Provider contain and Verify the Result for warranty',()=>{
    vadmin.filterContainProvider()
})
And ('Click on filter of Provider Does not contain and Verify the Result for warranty',()=>{
    vadmin.filterDoesnotcontainProvider()
})
And ('Click on filter of Provider Equals and Verify the Result for warranty',()=>{
    vadmin.filterEqualsProvider()
})
And ('Click on filter of Provider Does not equal and Verify the Result for warranty',()=>{
    vadmin.filterNotequalProvider()
})
And ('Click on filter of Provider Begins with and Verify the Result for warranty',()=>{
    vadmin.filterBeginswithProvider()
}) 
And ('Click on filter of Provider Ends with and Verify the Result for warranty',()=>{
    vadmin.filterEndswithProvider()
})
And ('Click on filter of Provider Blank and Verify the Result for warranty',()=>{
    vadmin.filterBlankProvider()
})
And ('Click on filter of Provider Not blank and Verify the Result for warranty',()=>{
    vadmin.filterNotblankProvider()
})
And ('Click on filter of SKU contain and Verify the Result for warranty',()=>{
    vadmin.filterContainSKU()
})
And ('Click on filter of SKU Does not contain and Verify the Result for warranty',()=>{
    vadmin.filterDoesnotcontainSKU()
})
And ('Click on filter of SKU Equals and Verify the Result for warranty',()=>{
    vadmin.filterEqualsSKU()
})
And ('Click on filter of SKU Does not equal and Verify the Result for warranty',()=>{
    vadmin.filterNotequalSKU()
})
And ('Click on filter of SKU Begins with and Verify the Result for warranty',()=>{
    vadmin.filterBeginswithSKU()
}) 
And ('Click on filter of SKU Ends with and Verify the Result for warranty',()=>{
    vadmin.filterEndswithSKU()
})
And ('Click on filter of SKU Blank and Verify the Result for warranty',()=>{
    vadmin.filterBlankSKU()
})
And ('Click on filter of SKU Not blank and Verify the Result for warranty',()=>{
    vadmin.filterNotblankSKU()
})
And ('Click on filter of Type contain and Verify the Result for warranty',()=>{
    vadmin.filterContainType()
})
And ('Click on filter of Type Does not contain and Verify the Result for warranty',()=>{
    vadmin.filterDoesnotcontainType()
})
And ('Click on filter of Type Equals and Verify the Result for warranty',()=>{
    vadmin.filterEqualsType()
})
And ('Click on filter of Type Does not equal and Verify the Result for warranty',()=>{
    vadmin.filterNotequalType()
})
And ('Click on filter of Type Begins with and Verify the Result for warranty',()=>{
    vadmin.filterBeginswithType()
}) 
And ('Click on filter of Type Ends with and Verify the Result for warranty',()=>{
    vadmin.filterEndswithType()
})
And ('Click on filter of Type Blank and Verify the Result for warranty',()=>{
    vadmin.filterBlankType()
})
And ('Click on filter of Type Not blank and Verify the Result for warranty',()=>{
    vadmin.filterNotblankType()
})





Then('Click on All Paid Subscription Requests unit', () => {
    vadmin.clickOnallPaidSubcription()
})
And('Table should be visible', () => {
vadmin.tableSubscriptionVisible()
})
Then('If any subscription request is there then approve or deny the request', () => {
vadmin.approveDenyRequest()
})
And('Verify the Request', () => {
vadmin.verifyRequest()
})

Then('Verify the student added in table of Admin', () => {
    vadmin.verifyRecordTableAdmin()
})
And('Enter the Search value in search box of Admin', () => {
    vadmin.enterSearchValue()
})
Then('Verify the Results in the table of Admin', () => {
    vadmin.verifySearchResult()
})
And('Click on Edit button of Admin', () => {
    vadmin.clickOnEditButton()
})
Then('I should edit title, full name of Admin', () => {
    vadmin.editTitle()
    vadmin.editFullname()
})
And('I should edit Phone and Cell Number and user role of Admin', () => {
    vadmin.editPhone()
    vadmin.editCellNumber()
    vadmin.editUserRole()
})
Then('I edit User Status to inactive of Admin', () => {
    vadmin.editUserStatus()
})
And('I edit In-house Repaire to yes of Admin', () => {
    vadmin.editInhouseRepaire()
})
Then('Click on Submit button of Admin', () => {
    vadmin.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage of Admin', () => {
    vadmin.verfifyDataUpdatedMessage()
})
And('Click on Delete button of Admin', () => {
    vadmin.clickDeleteButton()
})
Then('Click on Confirm Delete button of Admin', () => {
    vadmin.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully of Admin', () => {
    vadmin.verifyRecordDeleted()
})




Then('Click on update subscription', () => {
    vadmin.clickOnUpdateSubcription()
})
And('Select subscription Type', () => {
    vadmin.selectSubscription()
})
Then('Click on update button for subcription', () => {
    vadmin.clickOnUpdateSub()
})
And('Verify Updated subcription successfully', () => {
    vadmin.verifyUpadtedSub()
})


Then('Click on Request Users unit', () => {
    vadmin.requestUserSection()
})
Then('Click on Add Account of request user', () => {
    vadmin.clickOnAddAccountUser()
})
And('Select available account', () => {
    vadmin.selectAvailableAccount()
})
Then('Click on add account button for request user', () => {
    vadmin.clickOnAddAccountsubmit()
})
And('Verify add account successfully', () => {
    vadmin.verifyAddAccUser()
})


Then('Click on all Users unit', () => {
    vadmin.clickOnAllUser()
})
And('I should click on Add New user for allUser', () => {
    vadmin.clickOnCreateNewStudentAllUser()
})
Then('Enter full name, title and Email for allUser', () => {
    vadmin.enterFullname()
    vadmin.enterTitle()
    vadmin.enterEmailAllUser()
})

And('Enter Phone,Cell Number and select UserRole for allUser', () => {
    vadmin.enterCellNumber()
    vadmin.enterPhone()
})
And('Click on submit button for allUser', () => {
    vadmin.clickOnASubmitButton()
})
Then('Verify the student added in table for allUser', () => {
    vadmin.verifyStudentAddedAllUser()
})
And('Enter the Search value in search box for alluser', () => {
    vadmin.enterSearchValueAllUser()
})
Then('Verify the Results in the table for allUser', () => {
    vadmin.verifySearchResultAllUser()
})
And('Click on Edit button for allUser', () => {
    vadmin.clickOnEditButtonAllUser()
})
Then('I should edit title, full name for allUser', () => {
    vadmin.editTitle()
    vadmin.editFullname()
})
And('I should edit Phone and Cell Number and user role for allUser', () => {
    vadmin.editPhone()
    vadmin.editCellNumber()
    vadmin.editUserRoleUser()
})
Then('Click on Submit update button for allUser', () => {
    vadmin.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage for allUser', () => {
    vadmin.verfifyDataUpdatedMessage()
})
And('Click on Delete button for allUser', () => {
    vadmin.clickDeleteButtonAllUser()
    cy.get('.MuiBox-root > .MuiButton-outlinedError').click({ force: true })
})
And('Verify the record is deleted successfully for allUser', () => {
    vadmin.verifyRecordDeletedAllUser()
})

And('Click on features page', () => {
    cy.wait(1000)
    cy.contains('demo_adminvivacity@vivacitytech.com').click({ force: true })
    vadmin.clickOnFeatures()
})
Then('Click on Submit a feature request button', () => {
    ft.clickOnSubmitfeatureButton()
})
And('Enter Title and Description', () => {
    ft.enterTitle()
    ft.enterDescription()
})
Then('Click on Feature submit button', () => {
    ft.clickOnSubmitButton()
})
Then('Verify Submitting Features request Message', () => {
    ft.verifySubmitedFeatureRequest()
})

Then('Click on Roadmap Requests unit', () => {
    vadmin.clickOnRoadmap()
})
And('Click on view button', () => {
    vadmin.clickOnViewButton()
})
Then('Click on the Close button', () => {
    vadmin.clickOnCloseButton()
})
And('Click on approve button', () => {
    vadmin.clickOnApproveButton()
})
And('Click on features page again', () => {
    vadmin.clickOnFeatures()
})
Then('Verify the feature added in Underconsideration', () => {
    ft.verifyFeatureUnderconsideration()
})
Then('Click on Repair Ticket Creation unit', () => {
    vadmin.clickOnRepairTicketUnit()
})
And('Click on Repair 360 page button', () => {
    vadmin.clickOnRepair360btn()
})
Then('Verify the Repair Ticket page redirected', () => {
    cy.url().should('include', '/repair-360')
})

