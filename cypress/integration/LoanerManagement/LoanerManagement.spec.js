import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoanerManagementActions } from '../PageObject/PageActions/LoanerManagementActions'

const loan = new LoanerManagementActions()
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
    cy.wait(9000)
    loan.closeTermsOfServiceWindow()
})
Then('Click on Manage Devices', () => {
    loan.clickOnManageDevices()
})
And('Click on LoanerManagement Tab', () => {
    loan.clickOnLoanerManagement()
})
And('Verify the Title of LoanerManagement page', () => {
    loan.verifyTitle()
})
And('Click on th add Student button', () => {
    loan.clickOnAddStudent()
})
Then('Enter Fullname, title and email', () => {
    loan.enterFullname()
    loan.enterTitle()
    loan.enterEmail()
})
And('Select status, building and student_id', () => {
    loan.selectStatus()
    loan.selectBuilding()
    loan.selectStudent_id()
})
Then('Click on the submit button of form', () => {
    loan.clickOnsubmitForm()
})
And('Verify the student added successfully', () => {
    loan.verifyStudentAdded()
})
Then('Click on DeviceIcon and Click on Check out button', () => {
    loan.clickOnDeviceIcon()
    loan.clickOnCheckOut()
})
And('Select the student name and Date', () => {
    loan.selectStudentName()
    loan.selectDate()
})
Then('Enter Check-out Description and click on submit button', () => {
    loan.enterCheckoutText()
    loan.clickOnSubmitbtn()
})
And('Click on the Check-Out tab', () => {
    loan.clickOnCheckOutTab()
})
Then('Click on DeviceIcon and Click on Check In button', () => {
    loan.clickOnDeviceIcon()
    loan.clickOnCheckIn()
})
Then('Enter Note and Check-in Description', () => {
    loan.enterNote()
    loan.enterCheckIndes()
    loan.clickOnSubmitNote()
})
And('Verify the Serial no in the Available section', () => {
    loan.verifySerachAvailable()
})
Then('Click on DeviceIcon and Click on View Details button', () => {
    loan.clickOnDeviceIconViewT()
    loan.clickOnViewDetails()
})
Then('Verify the Device Details', () => {
    loan.verifyViewDetails()
})
Then('Click on DeviceIcon and Click on View History button', () => {
    loan.clickOnDeviceIconViewHistory()
    loan.clickOnViewHistory()
})
Then('Click on DeviceIcon and Click on View History button for checkout', () => {
    loan.clickOnDeviceIconViewHistory1()
    loan.clickOnViewHistory()
})
Then('Verify the Device History', () => {
    loan.verifyViewHistory()
})
And('Click on help icon for Filtering Guide', () => {
    loan.clickOnHelpIcon()
})
Then('Verify the Dream Data Filtering Guide', () => {
    loan.verifyfilteringGuide()
})
And ('Click on Save Table view icon and Verify',()=>{
    loan.clickOnSaveTableIcon()
    loan.verifySaveMessage()
})
And('Click on filter of Product Description contain and Verify the Result for Available', () => {
    loan.filtercontainPD_A()
})
And('Click on filter of Product Description Does not contain and Verify the Result for Available', () => {
    loan.filterDoesnotcontainPD_A()
})
And('Click on filter of Product Description Equals and Verify the Result for Available', () => {
    loan.filterEqualsPD_A()
})
And('Click on filter of Product Description Does not equal and Verify the Result for Available', () => {
    loan.filterNotequalPD_A()
})
And('Click on filter of Product Description Begins with and Verify the Result for Available', () => {
    loan.filterBeginswithPD_A()
})
And('Click on filter of Product Description Ends with and Verify the Result for Available', () => {
    loan.filterEndswithPD_A()
})
And('Click on filter of Product Description Blank and Verify the Result for Available', () => {
    loan.filterBlankPD_A()
})
And('Click on filter of Product Description Not blank and Verify the Result for Available', () => {
    loan.filterNotblankPD_A()
})
And('Click on filter of SKU contain and Verify the Result for Available', () => {
    loan.filtercontainSKU_A()
})
And('Click on filter of SKU Does not contain and Verify the Result for Available', () => {
    loan.filterDoesnotcontainSKU_A()
})
And('Click on filter of SKU Equals and Verify the Result for Available', () => {
    loan.filterEqualsSKU_A()
})
And('Click on filter of SKU Does not equal and Verify the Result for Available', () => {
    loan.filterNotequalSKU_A()
})
And('Click on filter of SKU Begins with and Verify the Result for Available', () => {
    loan.filterBeginswithSKU_A()
})
And('Click on filter of SKU Ends with and Verify the Result for Available', () => {
    loan.filterEndswithSKU_A()
})
And('Click on filter of SKU Blank and Verify the Result for Available', () => {
    loan.filterBlankSKU_A()
})
And('Click on filter of SKU Not blank and Verify the Result for Available', () => {
    loan.filterNotblankSKU_A()
})
And('Click on filter of Warranty contain and Verify the Result for Available', () => {
    loan.filtercontainW_A()
})
And('Click on filter of Warranty Does not contain and Verify the Result for Available', () => {
    loan.filterDoesnotcontainW_A()
})
And('Click on filter of Warranty Equals and Verify the Result for Available', () => {
    loan.filterEqualsW_A()
})
And('Click on filter of Warranty Does not equal and Verify the Result for Available', () => {
    loan.filterNotequalW_A()
})
And('Click on filter of Warranty Begins with and Verify the Result for Available', () => {
    loan.filterBeginswithW_A()
})
And('Click on filter of Warranty Ends with and Verify the Result for Available', () => {
    loan.filterEndswithW_A()
})
And('Click on filter of Warranty Blank and Verify the Result for Available', () => {
    loan.filterBlankW_A()
})
And('Click on filter of Warranty Not blank and Verify the Result for Available', () => {
    loan.filterNotblankW_A()
})
And('Click on filter of Serial contain and Verify the Result for Available', () => {
    loan.filtercontainS_A()
})
And('Click on filter of Serial Does not contain and Verify the Result for Available', () => {
    loan.filterDoesnotcontainS_A()
})
And('Click on filter of Serial Equals and Verify the Result for Available', () => {
    loan.filterEqualsS_A()
})
And('Click on filter of Serial Does not equal and Verify the Result for Available', () => {
    loan.filterNotequalS_A()
})
And('Click on filter of Serial Begins with and Verify the Result for Available', () => {
    loan.filterBeginswithS_A()
})
And('Click on filter of Serial Ends with and Verify the Result for Available', () => {
    loan.filterEndswithS_A()
})
And('Click on filter of Serial Blank and Verify the Result for Available', () => {
    loan.filterBlankS_A()
})
And('Click on filter of Serial Not blank and Verify the Result for Available', () => {
    loan.filterNotblankS_A()
})
And('Click on filter of Asset Tag contain and Verify the Result for Available', () => {
    loan.filtercontainTag_A()
})
And('Click on filter of Asset Tag Does not contain and Verify the Result for Available', () => {
    loan.filterDoesnotcontainTag_A()
})
And('Click on filter of Asset Tag Equals and Verify the Result for Available', () => {
    loan.filterEqualsTag_A()
})
And('Click on filter of Asset Tag Does not equal and Verify the Result for Available', () => {
    loan.filterNotequalTag_A()
})
And('Click on filter of Asset Tag Begins with and Verify the Result for Available', () => {
    loan.filterBeginswithTag_A()
})
And('Click on filter of Asset Tag Ends with and Verify the Result for Available', () => {
    loan.filterEndswithTag_A()
})
And('Click on filter of Asset Tag Blank and Verify the Result for Available', () => {
    loan.filterBlankTag_A()
})
And('Click on filter of Asset Tag Not blank and Verify the Result for Available', () => {
    loan.filterNotblankTag_A()
})

And('Click on filter of Product Description contain and Verify the Result for Checked Out', () => {
    loan.filtercontainPD_C()
})
And('Click on filter of Product Description Does not contain and Verify the Result for Checked Out', () => {
    loan.filterDoesnotcontainPD_C()
})
And('Click on filter of Product Description Equals and Verify the Result for Checked Out', () => {
    loan.filterEqualsPD_C()
})
And('Click on filter of Product Description Does not equal and Verify the Result for Checked Out', () => {
    loan.filterNotequalPD_C()
})
And('Click on filter of Product Description Begins with and Verify the Result for Checked Out', () => {
    loan.filterBeginswithPD_C()
})
And('Click on filter of Product Description Ends with and Verify the Result for Checked Out', () => {
    loan.filterEndswithPD_C()
})
And('Click on filter of Product Description Blank and Verify the Result for Checked Out', () => {
    loan.filterBlankPD_C()
})
And('Click on filter of Product Description Not blank and Verify the Result for Checked Out', () => {
    loan.filterNotblankPD_C()
})
And('Click on filter of SKU contain and Verify the Result for Checked Out', () => {
    loan.filtercontainSKU_C()
})
And('Click on filter of SKU Does not contain and Verify the Result for Checked Out', () => {
    loan.filterDoesnotcontainSKU_C()
})
And('Click on filter of SKU Equals and Verify the Result for Checked Out', () => {
    loan.filterEqualsSKU_C()
})
And('Click on filter of SKU Does not equal and Verify the Result for Checked Out', () => {
    loan.filterNotequalSKU_C()
})
And('Click on filter of SKU Begins with and Verify the Result for Checked Out', () => {
    loan.filterBeginswithSKU_C()
})
And('Click on filter of SKU Ends with and Verify the Result for Checked Out', () => {
    loan.filterEndswithSKU_C()
})
And('Click on filter of SKU Blank and Verify the Result for Checked Out', () => {
    loan.filterBlankSKU_C()
})
And('Click on filter of SKU Not blank and Verify the Result for Checked Out', () => {
    loan.filterNotblankSKU_C()
})
And('Click on filter of Warranty contain and Verify the Result for Checked Out', () => {
    loan.filtercontainW_C()
})
And('Click on filter of Warranty Does not contain and Verify the Result for Checked Out', () => {
    loan.filterDoesnotcontainW_C()
})
And('Click on filter of Warranty Equals and Verify the Result for Checked Out', () => {
    loan.filterEqualsW_C()
})
And('Click on filter of Warranty Does not equal and Verify the Result for Checked Out', () => {
    loan.filterNotequalW_C()
})
And('Click on filter of Warranty Begins with and Verify the Result for Checked Out', () => {
    loan.filterBeginswithW_C()
})
And('Click on filter of Warranty Ends with and Verify the Result for Checked Out', () => {
    loan.filterEndswithW_C()
})
And('Click on filter of Warranty Blank and Verify the Result for Checked Out', () => {
    loan.filterBlankW_C()
})
And('Click on filter of Warranty Not blank and Verify the Result for Checked Out', () => {
    loan.filterNotblankW_C()
})
And('Click on filter of Serial contain and Verify the Result for Checked Out', () => {
    loan.filtercontainS_C()
})
And('Click on filter of Serial Does not contain and Verify the Result for Checked Out', () => {
    loan.filterDoesnotcontainS_C()
})
And('Click on filter of Serial Equals and Verify the Result for Checked Out', () => {
    loan.filterEqualsS_C()
})
And('Click on filter of Serial Does not equal and Verify the Result for Checked Out', () => {
    loan.filterNotequalS_C()
})
And('Click on filter of Serial Begins with and Verify the Result for Checked Out', () => {
    loan.filterBeginswithS_C()
})
And('Click on filter of Serial Ends with and Verify the Result for Checked Out', () => {
    loan.filterEndswithS_C()
})
And('Click on filter of Serial Blank and Verify the Result for Checked Out', () => {
    loan.filterBlankS_C()
})
And('Click on filter of Serial Not blank and Verify the Result for Checked Out', () => {
    loan.filterNotblankS_C()
})
And('Click on filter of Asset Tag Does not contain and Verify the Result for Checked Out', () => {
    loan.filtercontainTag_C()
})
And('Click on filter of Asset Tag Equals and Verify the Result for Checked Out', () => {
    loan.filterEqualsTag_C()
})
And('Click on filter of Asset Tag Does not equal and Verify the Result for Checked Out', () => {
    loan.filterNotequalTag_C()
})
And('Click on filter of Asset Tag Begins with and Verify the Result for Checked Out', () => {
    loan.filterBeginswithTag_C()
})
And('Click on filter of Asset Tag Ends with and Verify the Result for Checked Out', () => {
    loan.filterEndswithTag_C()
})
And('Click on filter of Asset Tag Blank and Verify the Result for Checked Out', () => {
    loan.filterBlankTag_C()
})
And('Click on filter of Asset Tag Not blank and Verify the Result for Checked Out', () => {
    loan.filterNotblankTag_C()
})
//sorting
And('Click on Sort Ascending and Descending for Product Description and Verify the Result', () => {
    loan.sortingProductDescription()
})
And('Click on Sort Ascending and Descending for SKU and Verify the Result', () => {
    loan.sortingSKU()
})
And('Click on Sort Ascending and Descending for Warranty and Verify the Result', () => {
    loan.sortingWarranty()
})
And('Click on Sort Ascending and Descending for Serial Number and Verify the Result', () => {
    loan.sortingSerialNumber()
})
And('Click on Sort Ascending and Descending for Asset Tag and Verify the Result', () => {
    loan.sortingAssetTag()
})
And('Click on Sort Ascending and Descending for Product Description and Verify the Result for Checked Out', () => {
    loan.sortingProductDescription1()
})
And('Click on Sort Ascending and Descending for SKU and Verify the Result for Checked Out', () => {
    loan.sortingSKU1()
})
And('Click on Sort Ascending and Descending for Warranty and Verify the Result for Checked Out', () => {
    loan.sortingWarranty1()
})
And('Click on Sort Ascending and Descending for Serial Number and Verify the Result for Checked Out', () => {
    loan.sortingSerialNumber1()
})
And('Click on Sort Ascending and Descending for Asset Tag and Verify the Result for Checked Out', () => {
    loan.sortingAssetTag1()
})
