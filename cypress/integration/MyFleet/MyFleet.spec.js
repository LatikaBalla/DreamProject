import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { MyFleetActions } from '../PageObject/PageActions/MyFleetActions'

const mf = new MyFleetActions()
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
    mf.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Manage Devices', () => {
    mf.clickOnManageDevices()
})
And('Click on MyFleet Tab', () => {
    mf.clickOnMyFleet()
})
And('Verify the Title of MyFleet Page', () => {
    mf.verifyTitle()
})
Then('Filters of MyFleet should be visible', () => {
    mf.filtersVisible()
})
And('Table for MyFleet should be visible', () => {
    mf.tableVisible()
})
Then('Click on the add device', () => {
    mf.clickOnAddDevice()
})
And('Enter Serial no and select device id', () => {
    mf.enterSerialNo()
    mf.selectDeviceId()
})
Then('Enter Asset Tag and Select student id', () => {
    mf.enterAssetTag()
    mf.selectStudentid()
})
And('Select lonar status and Device status', () => {
    mf.selectLonarStatus()
    mf.selectDeviceStatus()
})
Then('Click on the Submit Button', () => {
    mf.clickOnsubmitButton()
})
And('Verify the device added successfully', () => {
    mf.verfifyDeviceAdded()
})
Then('Click on Edit button of General info', () => {
    mf.clickOnEditButtonGeneral()
})
And('Update Asset tag and Click on save button', () => {
    mf.editGeneral()
    mf.clickOnUpdateButton()
})
Then('Verfiy General info Record updated successfully', () => {
    mf.verifyGeneralUdate()
})
Then('Click on Edit button of Assignment', () => {
    mf.clickOnEditButtonAssign()
})
And('Update student, building, loner status and Click on save button', () => {
    mf.editAssignment()
    mf.clickOnUpdateButton()
})
Then('Verfiy Assignment Record updated successfully', () => {
    mf.verifyAssignmnetUdate()
})
Then('Click on Clear filter', () => {
    mf.clickOnClearFiltersButton()
})
And('Enter the table fields in search box', () => {
    mf.enterSearchValue()
})
And('Verify the record in searching history', () => {
    mf.verifySearchResult()
})
And('Enter the table fields in search box1', () => {
    mf.enterSearchValue1()
})
And('Verify the record in searching history1', () => {
    mf.verifySearchResult1()
})
Then('Click on deviceIcon and click on view Button', () => {
    mf.clickOnDeviceIcon()
    mf.clickOnViewButton()
})
And('Verify the General Device Information', () => {
    mf.verifyViewResult()
})
And('Verify the Warranty Description1', () => {
    mf.verifyViewResult1()
})
Then('Click on Export To CSV', () => {
    mf.clickOnCExportToCSVButton()
})
And('Verify Downloaded successfully', () => {
    mf.verifyDownloadSuccessful()
})
Then('Click on Retired Tab', () => {
    mf.clickOnRetiredTab()
})
Then('Click on CPU Status and verify CPU Information', () => {
    mf.clickOnCPUStatus()
    mf.verifyCPUStatus()
})
And('Click on Memory Information and verify Memory Information', () => {
    mf.clickOnMemory()
    mf.verifyMemory()
})
Then('Click on Network Information and verify Network Information', () => {
    mf.clickOnNetwork()
    mf.verifyNetwork()
})
And('Click on OS Information and verify OS Information', () => {
    mf.clickOnOS()
    mf.verifyOS()
})
Then('Click on Battery Information and verify Battery Information', () => {
    mf.clickOnBattery()
    mf.verifyBattery()
})
And('Click on Storage Information and verify Storage Information', () => {
    mf.clickOnStorage()
    mf.verifyStorage()
})
Then('Click on Boot Performance Report and Boot Performance Report', () => {
    mf.clickOnBootPerformanceReport()
    mf.verifyBootPerformanceReport()
})
And ('Click on Recent Users Information and verify Recent Users Information',()=>{
    mf.clickOnRecentUser()
    mf.verifyRecentUser()
})
And('Convert Active to Retired device', () => {
    mf.converRetired()
})
Then('Verify the Device Retired successfully', () => {
    mf.verifyRetired()
})
Then('Verify the Device Active successfully', () => {
    mf.verifyActive()
})
And('Convert Retired to Active device', () => {
    mf.convertActive()
})
And('Click on the Google Icon and click on view Button', () => {
    mf.clickonGoogleIcon()
    mf.clickOnViewButton()
})
Then('Verify the google data and GoLocation section', () => {
    mf.verifyGoogleGolocation()
})
And('Click on the edit of google data section', () => {
    mf.clickonEditGoogle()
})
Then('Update the note', () => {
    mf.updateGoogleData()
})
And('Verfiy Google data Record updated successfully', () => {
    mf.verifyGoogleUpdated()
})
//sn
And('Click on filter of Serial Number contain in search box and Verify the Result', () => {
    mf.selectFilterSerialNumber()
})
And('Click on filter of Serial Number Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainSN()
})
And('Click on filter of Serial Number Equals in search box and Verify the Result', () => {
    mf.filterEqualsSN()
})
And('Click on filter of Serial Number Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalSN()
})
And('Click on filter of Serial Number Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithSN()
})
And('Click on filter of Serial Number Ends with in search box and Verify the Result', () => {
    mf.filterEndswithSN()
})
And('Click on filter of Serial Number Blank in search box and Verify the Result', () => {
    mf.filterBlankSN()
})
And('Click on filter of Serial Number Not blank in search box and Verify the Result', () => {
    mf.filterNotblankSN()
})
//tag
And('Click on filter of Asset tag contain in search box and Verify the Result', () => {
    mf.selectFilterAssetTag()
})
And('Click on filter of Asset tag Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontaintag()
})
And('Click on filter of Asset tag Equals in search box and Verify the Result', () => {
    mf.filterEqualstag()
})
And('Click on filter of Asset tag Does not equal in search box and Verify the Result', () => {
    mf.filterNotequaltag()
})
And('Click on filter of Asset tag Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithtag()
})
And('Click on filter of Asset tag Ends with in search box and Verify the Result', () => {
    mf.filterEndswithtag()
})
And('Click on filter of Asset tag Blank in search box and Verify the Result', () => {
    mf.filterBlanktag()
})
And('Click on filter of Asset tag Not blank in search box and Verify the Result', () => {
    mf.filterNotblanktag()
})
//model
And('Click on filter of Model contain in search box and Verify the Result', () => {
    mf.filtercontainM()
})
And('Click on filter of Model Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainM()
})
And('Click on filter of Model Equals in search box and Verify the Result', () => {
    mf.filterEqualsM()
})
And('Click on filter of Model Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalM()
})
And('Click on filter of Model Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithM()
})
And('Click on filter of Model Ends with in search box and Verify the Result', () => {
    mf.filterEndswithM()
})
And('Click on filter of Model Blank in search box and Verify the Result', () => {
    mf.filterBlankM()
})
And('Click on filter of Model Not blank in search box and Verify the Result', () => {
    mf.filterNotblankM()
})
//sku
And('Click on filter of SKU contain in search box and Verify the Result', () => {
    mf.filtercontainSKU()
})
And('Click on filter of SKU Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainSKU()
})
And('Click on filter of SKU Equals in search box and Verify the Result', () => {
    mf.filterEqualsSKU()
})
And('Click on filter of SKU Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalSKU()
})
And('Click on filter of SKU Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithSKU()
})
And('Click on filter of SKU Ends with in search box and Verify the Result', () => {
    mf.filterEndswithSKU()
})
And('Click on filter of SKU Blank in search box and Verify the Result', () => {
    mf.filterBlankSKU()
})
And('Click on filter of SKU Not blank in search box and Verify the Result', () => {
    mf.filterNotblankSKU()
})
//b
And('Click on filter of Building contain in search box and Verify the Result', () => {
    mf.selectFilterBuilding()
})
And('Click on filter of Building Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainB()
})
And('Click on filter of Building Equals in search box and Verify the Result', () => {
    mf.filterEqualsB()
})
And('Click on filter of Building Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalB()
})
And('Click on filter of Building Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithB()
})
And('Click on filter of Building Ends with in search box and Verify the Result', () => {
    mf.filterEndswithB()
})
And('Click on filter of Building Blank in search box and Verify the Result', () => {
    mf.filterBlankB()
})
And('Click on filter of Building Not blank in search box and Verify the Result', () => {
    mf.filterNotblankB()
})
//user
And('Click on filter of User contain in search box and Verify the Result', () => {
    mf.filtercontainU()
})
And('Click on filter of User Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainU()
})
And('Click on filter of User Equals in search box and Verify the Result', () => {
    mf.filterEqualsU()
})
And('Click on filter of User Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalU()
})
And('Click on filter of User Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithU()
})
And('Click on filter of User Ends with in search box and Verify the Result', () => {
    mf.filterEndswithU()
})
And('Click on filter of User Blank in search box and Verify the Result', () => {
    mf.filterBlankU()
})
And('Click on filter of User Not blank in search box and Verify the Result', () => {
    mf.filterNotblankU()
})
//Warranty
And('Click on filter of Warranty contain in search box and Verify the Result', () => {
    mf.filtercontainW()
})
And('Click on filter of Warranty Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainW()
})
And('Click on filter of Warranty Equals in search box and Verify the Result', () => {
    mf.filterEqualsW()
})
And('Click on filter of Warranty Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalW()
})
And('Click on filter of Warranty Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithW()
})
And('Click on filter of Warranty Ends with in search box and Verify the Result', () => {
    mf.filterEndswithW()
})
And('Click on filter of Warranty Blank in search box and Verify the Result', () => {
    mf.filterBlankW()
})
And('Click on filter of Warranty Not blank in search box and Verify the Result', () => {
    mf.filterNotblankW()
})
//Organizational Unit
And('Click on filter of Organizational Unit contain in search box and Verify the Result', () => {
    mf.filtercontainOU()
})
And('Click on filter of Organizational Unit Does not contain in search box and Verify the Result', () => {
    mf.filterDoesnotcontainOU()
})
And('Click on filter of Organizational Unit Equals in search box and Verify the Result', () => {
    mf.filterEqualsOU()
})
And('Click on filter of Organizational Unit Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalOU()
})
And('Click on filter of Organizational Unit Begins with in search box and Verify the Result', () => {
    mf.filterBeginswithOU()
})
And('Click on filter of Organizational Unit Ends with in search box and Verify the Result', () => {
    mf.filterEndswithOU()
})
And('Click on filter of Organizational Unit Blank in search box and Verify the Result', () => {
    mf.filterBlankOU()
})
And('Click on filter of Organizational Unit Not blank in search box and Verify the Result', () => {
    mf.filterNotblankOU()
})
//Warranty End Date
And('Click on filter of Warranty End Date Equals in search box and Verify the Result', () => {
    mf.filterEqualsDate()
})
And('Click on filter of Warranty End Date Does not equal in search box and Verify the Result', () => {
    mf.filterNotequalDate()
})
And('Click on filter of Warranty End Date Before in search box and Verify the Result', () => {
    mf.filterBeforeDate()
})
And('Click on filter of Warranty End Date Between in search box and Verify the Result', () => {
    mf.filterBetweenDate()
})
And('Click on filter of Warranty End Date After in search box and Verify the Result', () => {
    mf.filterAfterDate()
})
And('Click on filter of Warranty End Date Blank in search box and Verify the Result', () => {
    mf.filterBlankDate()
})
And('Click on filter of Warranty End Date Not blank in search box and Verify the Result', () => {
    mf.filterNotblankDate()
})
//Retire--------------------------------------------------------
//sn
And('Click on filter of Serial Number contain in search box and Verify the Result in Retired', () => {
    mf.selectFilterSerialNumber1()
})
And('Click on filter of Serial Number Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontainSN1()
})
And('Click on filter of Serial Number Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsSN1()
})
And('Click on filter of Serial Number Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalSN1()
})
And('Click on filter of Serial Number Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithSN1()
})
And('Click on filter of Serial Number Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithSN1()
})
And('Click on filter of Serial Number Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankSN1()
})
And('Click on filter of Serial Number Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankSN1()
})
//tag
And('Click on filter of Asset tag contain in search box and Verify the Result in Retired', () => {
    mf.selectFilterAssetTag1()
})
And('Click on filter of Asset tag Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontaintag1()
})
And('Click on filter of Asset tag Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualstag1()
})
And('Click on filter of Asset tag Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequaltag1()
})
And('Click on filter of Asset tag Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithtag1()
})
And('Click on filter of Asset tag Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithtag1()
})
And('Click on filter of Asset tag Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlanktag1()
})
And('Click on filter of Asset tag Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblanktag1()
})
//model
And('Click on filter of Model contain in search box and Verify the Result in Retired', () => {
    mf.filtercontainM1()
})
And('Click on filter of Model Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontainM1()
})
And('Click on filter of Model Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsM1()
})
And('Click on filter of Model Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalM1()
})
And('Click on filter of Model Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithM1()
})
And('Click on filter of Model Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithM1()
})
And('Click on filter of Model Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankM1()
})
And('Click on filter of Model Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankM1()
})
//sku
And('Click on filter of SKU contain in search box and Verify the Result in Retired', () => {
    mf.filtercontainSKU1()
})
And('Click on filter of SKU Does not contain in search box and Verify the Result in Retired' , () => {
    mf.filterDoesnotcontainSKU1()
})
And('Click on filter of SKU Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsSKU1()
})
And('Click on filter of SKU Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalSKU1()
})
And('Click on filter of SKU Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithSKU1()
})
And('Click on filter of SKU Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithSKU1()
})
And('Click on filter of SKU Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankSKU1()
})
And('Click on filter of SKU Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankSKU1()
})
//b
And('Click on filter of Building contain in search box and Verify the Result in Retired', () => {
    mf.selectFilterBuilding1()
})
And('Click on filter of Building Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontainB1()
})
And('Click on filter of Building Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsB1()
})
And('Click on filter of Building Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalB1()
})
And('Click on filter of Building Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithB1()
})
And('Click on filter of Building Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithB1()
})
And('Click on filter of Building Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankB1()
})
And('Click on filter of Building Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankB1()
})
//user
And('Click on filter of User contain in search box and Verify the Result in Retired', () => {
    mf.filtercontainU1()
})
And('Click on filter of User Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontainU1()
})
And('Click on filter of User Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsU1()
})
And('Click on filter of User Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalU1()
})
And('Click on filter of User Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithU1()
})
And('Click on filter of User Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithU1()
})
And('Click on filter of User Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankU1()
})
And('Click on filter of User Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankU1()
})
//Warranty
And('Click on filter of Warranty contain in search box and Verify the Result in Retired', () => {
    mf.filtercontainW1()
})
And('Click on filter of Warranty Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontainW1()
})
And('Click on filter of Warranty Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsW1()
})
And('Click on filter of Warranty Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalW1()
})
And('Click on filter of Warranty Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithW1()
})
And('Click on filter of Warranty Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithW1()
})
And('Click on filter of Warranty Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankW1()
})
And('Click on filter of Warranty Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankW1()
})
//Organizational Unit
And('Click on filter of Organizational Unit contain in search box and Verify the Result in Retired', () => {
    mf.filtercontainOU1()
})
And('Click on filter of Organizational Unit Does not contain in search box and Verify the Result in Retired', () => {
    mf.filterDoesnotcontainOU1()
})
And('Click on filter of Organizational Unit Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsOU1()
})
And('Click on filter of Organizational Unit Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalOU1()
})
And('Click on filter of Organizational Unit Begins with in search box and Verify the Result in Retired', () => {
    mf.filterBeginswithOU1()
})
And('Click on filter of Organizational Unit Ends with in search box and Verify the Result in Retired', () => {
    mf.filterEndswithOU1()
})
And('Click on filter of Organizational Unit Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankOU1()
})
And('Click on filter of Organizational Unit Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankOU1()
})
//Warranty End Date
And('Click on filter of Warranty End Date Equals in search box and Verify the Result in Retired', () => {
    mf.filterEqualsDate1()
})
And('Click on filter of Warranty End Date Does not equal in search box and Verify the Result in Retired', () => {
    mf.filterNotequalDate1()
})
And('Click on filter of Warranty End Date Before in search box and Verify the Result in Retired', () => {
    mf.filterBeforeDate1()
})
And('Click on filter of Warranty End Date Between in search box and Verify the Result in Retired', () => {
    mf.filterBetweenDate1()
})
And('Click on filter of Warranty End Date After in search box and Verify the Result in Retired', () => {
    mf.filterAfterDate1()
})
And('Click on filter of Warranty End Date Blank in search box and Verify the Result in Retired', () => {
    mf.filterBlankDate1()
})
And('Click on filter of Warranty End Date Not blank in search box and Verify the Result in Retired', () => {
    mf.filterNotblankDate1()
})