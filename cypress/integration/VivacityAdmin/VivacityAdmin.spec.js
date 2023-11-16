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
Then ('Repair Ticket Creation unit should be visible',()=>{
    vadmin.RepairTicketCreation()
})
And ('Employee management unit should be visible',()=>{
    vadmin.employeeManagment()
})


Then('Click on All Paid Subscription Requests unit', () => {
    vadmin.clickOnallPaidSubcription()
})
And('Table should be visible', () => {

})
Then('If any subscription request is there then approve or deny the request', () => {

})
And('Verify the Request', () => {

})



Then('Click on Admin Users unit', () => {
    vadmin.clickOnAdminUser()
})
Then('I should click on Add New student', () => {
    vadmin.clickOnCreateNewStudent()
})
Then('Enter full name, title and Email', () => {
    vadmin.enterFullname()
    vadmin.enterTitle()
    vadmin.enterEmail()
})
And('Enter Phone,Cell Number and select UserRole', () => {
    vadmin.enterPhone()
    vadmin.enterCellNumber()
})
And('Click on submit button', () => {
    vadmin.clickOnASubmitButton()
})
Then('Verify the student added in table', () => {
    vadmin.verifyRecordTable()
})
And('Enter the Search value in search box', () => {
    vadmin.enterSearchValue()
})
Then('Verify the Results in the table', () => {
    vadmin.verifySearchResult()
})
And('Click on Edit button', () => {
    vadmin.clickOnEditButton()
})
Then('I should edit title, full name', () => {
    vadmin.editTitle()
    vadmin.editFullname()
})
And('I should edit Phone and Cell Number and user role', () => {
    vadmin.editCellNumber()
    vadmin.editPhone()
    vadmin.editUserRole()
})
Then('I edit User Status to inactive', () => {
    vadmin.editUserStatus()
})
And('I edit In-house Repaire to yes', () => {
    vadmin.editInhouseRepaire()
})
Then('Click on Submit button', () => {
    vadmin.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage', () => {
    vadmin.verfifyDataUpdatedMessage()
})
And('Click on Delete button', () => {
    vadmin.clickDeleteButton()
})
Then('Click on Confirm Delete button', () => {
    vadmin.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully', () => {
    vadmin.verifyRecordDeleted()
})

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
Then('Click on submit button', () => {
    vadmin.clickOnSubmitButton()
})
And('Verify the warranty added in table', () => {
    vadmin.verifyWarrantyRecordAdded()
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
    vadmin.clickDeleteIcon()
})
Then('Click on Confirm Delete Icon', () => {
    vadmin.clickConDeleteButton()
})
And('Verify the record is deleted successfully for warranty', () => {
    vadmin.verifyRecordDeletedWarranty()
})


Then('Click on Account Management unit', () => {
    vadmin.clickOnAccountMangment()
})
And('I should click on Add Account', () => {
    vadmin.clickOnAddAccount()
})
Then('Enter Account name, Phone, Email, Domain and credit Limit', () => {
    vadmin.enterAccName()
    vadmin.enterPhoneNo()
    vadmin.enterEmail()
    vadmin.enterDomain()
    vadmin.enterCreditLimit()
})
And('Select In house Repaire and Payment terms', () => {
    vadmin.selectIhRepaire()
    vadmin.selectPaymentTerms()
})
And ('Select account site and account manager',()=>{
    vadmin.selectAccountSite()
    vadmin.selectAccountManager()
})
Then('Click on submit button Account', () => {
    vadmin.clickOnSubmitButtonAcc()
})
And('Verify the Account added in table', () => {
    vadmin.verifyRecordAccountAdded()
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
Then('I should click on Add New student for allUser', () => {
    vadmin.clickOnCreateNewStudentAllUser()
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
And('Click on Delete button for allUser', () => {
    vadmin.clickDeleteButtonAllUser()
})
And('Verify the record is deleted successfully for allUser', () => {
    vadmin.verifyRecordDeletedAllUser()
})
And('Enter Email for allUser', () => {
    vadmin.enterEmailAllUser()
})



And('Click on features page', () => {
    cy.wait(1000)
    cy.contains('demo_adminvivacity@vivacitytech.com').click({force:true})
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
And ('Click on features page again',()=>{
    vadmin.clickOnFeatures()
})
Then('Verify the feature added in Underconsideration', () => {
    ft.verifyFeatureUnderconsideration()
})
Then('Click on Repair Ticket Creation unit',()=>{
vadmin.clickOnRepairTicketUnit()
})
And ('Click on Repair 360 page button',()=>{
vadmin.clickOnRepair360btn()
})
Then ('Verify the Repair Ticket page redirected',()=>{
    cy.url().should('include', '/repair-360')   
})

Then ('Click on Employee management unit',()=>{
vadmin.clickOnEmployeeManagment()
})
Then ('I should click on Create new Employee',()=>{
vadmin.clickOnCreateNewEmp()
})
Then ('Enter full name, title and Email for Employee',()=>{
vadmin.enterFullnameEmp()
vadmin.enterTitle()
vadmin.enterEmailEmp()
})
And ('Enter Phone and select userStatus',()=>{
vadmin.enterPhone()
vadmin.selectUserStatus()
})
And ('Click on submit button',()=>{
vadmin.clickOnSubmitButton()
})
Then ('Verify the Employee added in table',()=>{
vadmin.verifyEmployeeAdded()
cy.get('[data-testid="btnNewDataSubmit"]').eq(1).click({force:true})
})
 Then ('Select Email from Dropdownlist',()=>{
vadmin.selectEmail()
})
And ('Enter the Search value in search box for employee',()=>{
vadmin.enterSerachEmp()
})
Then ('Verify the Results in the table for employee',()=>{
vadmin.verifyResultEmp()
})
And ('Click on Edit button new Employee',()=>{
    vadmin.clickConEditEmp()
})
Then ('I should edit fullname and title for Employee',()=>{
    vadmin.editTitle()
    vadmin.editFullnameEmp()
}) 
And ('I should edit Phone and user status for Employee',()=>{
    vadmin.editPhone()
    vadmin.editUserStatusEmp()
})
Then ('Click on Submit button',()=>{})
And ('Verify the Record has been updated Meassage',()=>{})
Then ('Click on the Export Button ',()=>{})