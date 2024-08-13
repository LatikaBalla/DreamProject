import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { PartClosetActions } from '../PageObject/PageActions/PartClosetActions'

const pc = new PartClosetActions()
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
    pc.closeTermsOfServiceWindow()
})
Then('Click on Repair360 page', () => {
    pc.clickOnRepair360()
})
And('Click on PartCloset Tab', () => {
    pc.clickOnPartClosetTab()
})
And('Verify the Title of PartCloset Page', () => {
    pc.verifyTitle()
})
Then('Filters of PartCloset should be visible', () => {
    pc.filtersVisible()
})
And('Table for PartCloset should be visible', () => {
    pc.tableVisible()
})
Then('I should click on Add New custome part', () => {
    pc.clickOnNewCustomePart()
})
Then('Enter part name, manufacture and parent device', () => {
    pc.enterPartname()
    pc.enterManufacture()
    pc.enterParentDevice()
})
And('Enter part sku and quantity', () => {
    pc.enterPartSKU()
    pc.enterQuantity()
    pc.selectBuilding()
})
Then('Click on submit button', () => {
    pc.clickOnSubmitButton()
})
And('Verify new custome part is added', () => {
    pc.verifyNewPartAdded()
})
And('Enter the Search value in search box', () => {
    pc.enterPartSKUSearch()
})
Then('Verify the Results in the table', () => {
    pc.verifySearchResult()
})
And('Click on delete button', () => {
    pc.clickOnDeleteButton()
})
Then('Verify the recode is deleted', () => {
    pc.verifyDeleted()
})
And('I should click on Add New VT part', () => {
    pc.clickOnNewVTPart()
})
Then('Select device and building', () => {
    pc.selectDevice()
    pc.selectBuilding()
})
And('Select part name and quantity', () => {
    pc.selectPartName()
    pc.enterQuantityVT()
})
Then('Click on submit button', () => {
    pc.clickOnSubmitVTButton()
})
And('Verify new VT part is added', () => {
    pc.verifyNewVTPartAdded()
})
Then ('Click on the order more quantity', () => {
    pc.clickOnOrderMore()
})
And ('Enter the quantity value', () => {
    pc.enterQuantityMore()
})
Then ('Verify the request of quantity', () => {
    pc.verifyRequestQuantity()
}) 
//pn
And('Click on filter of Part Name contain in search box and Verify the Result', () => {
    pc.selectFilterPartName()
})
And('Click on filter of Part Name Does not contain in search box and Verify the Result', () => {
    pc.filterDoesnotcontainPN()
})
And('Click on filter of Part Name Equals in search box and Verify the Result', () => {
    pc.filterEqualsPN()
})
And('Click on filter of Part Name Does not equal in search box and Verify the Result', () => {
    pc.filterNotequalPN()
})
And('Click on filter of Part Name Begins with in search box and Verify the Result', () => {
    pc.filterBeginswithPN()
})
And('Click on filter of Part Name Ends with in search box and Verify the Result', () => {
    pc.filterEndswithPN()
})
And('Click on filter of Part Name Blank in search box and Verify the Result', () => {
    pc.filterBlankPN()
})
And('Click on filter of Part Name Not blank in search box and Verify the Result', () => {
    pc.filterNotblankPN()
})
//SKU
And('Click on filter of SKU contain in search box and Verify the Result', () => {
    pc.selectFilterSku()
})
And('Click on filter of SKU Does not contain in search box and Verify the Result', () => {
    pc.filterDoesnotcontainSKU()
})
And('Click on filter of SKU Equals in search box and Verify the Result', () => {
    pc.filterEqualsSKU()
})
And('Click on filter of SKU Does not equal in search box and Verify the Result', () => {
    pc.filterNotequalSKU()
})
And('Click on filter of SKU Begins with in search box and Verify the Result', () => {
    pc.filterBeginswithSKU()
})
And('Click on filter of SKU Ends with in search box and Verify the Result', () => {
    pc.filterEndswithSKU()
})
And('Click on filter of SKU Blank in search box and Verify the Result', () => {
    pc.filterBlankSKU()
})
And('Click on filter of SKU Not blank in search box and Verify the Result', () => {
    pc.filterNotblankSKU()
})

//Parent Device
And('Click on filter of Parent Device contain in search box and Verify the Result', () => {
    pc.selectFilterParentDevice()
})
And('Click on filter of Parent Device Does not contain in search box and Verify the Result', () => {
    pc.filterDoesnotcontainPD()
})
And('Click on filter of Parent Device Equals in search box and Verify the Result', () => {
    pc.filterEqualsPD()
})
And('Click on filter of Parent device Does not equal in search box and Verify the Result', () => {
    pc.filterNotequalPD()
})
And('Click on filter of Parent device Begins with in search box and Verify the Result', () => {
    pc.filterBeginswithPD()
})
And('Click on filter of Parent device Ends with in search box and Verify the Result', () => {
    pc.filterEndswithPD()
})
And('Click on filter of Parent device Blank in search box and Verify the Result', () => {
    pc.filterBlankPD()
})
And('Click on filter of Parent device Not blank in search box and Verify the Result', () => {
    pc.filterNotblankPD()
})
//Building
And('Click on filter of Building contain in search box and Verify the Result', () => {
    pc.selectFilterBuilding()
})
And('Click on filter of Building Does not contain in search box and Verify the Result', () => {
    pc.filterDoesnotcontainB()
})
And('Click on filter of Building Equals in search box and Verify the Result', () => {
    pc.filterEqualsB()
})
And('Click on filter of Building Does not equal in search box and Verify the Result', () => {
    pc.filterNotequalB()
})
And('Click on filter of Building Begins with in search box and Verify the Result', () => {
    pc.filterBeginswithB()
})
And('Click on filter of Building Ends with in search box and Verify the Result', () => {
    pc.filterEndswithB()
})
And('Click on filter of Building Blank in search box and Verify the Result', () => {
    pc.filterBlankB()
})
And('Click on filter of Building Not blank in search box and Verify the Result', () => {
    pc.filterNotblankB()
})
//Manufacturer
And('Click on filter of Manufacturer contain in search box and Verify the Result', () => {
    pc.selectFilterManufacturer()
})
And('Click on filter of Manufacturer Does not contain in search box and Verify the Result', () => {
    pc.filterDoesnotcontainM()
})
And('Click on filter of Manufacturer Equals in search box and Verify the Result', () => {
    pc.filterEqualsM()
})
And('Click on filter of Manufacturer Does not equal in search box and Verify the Result', () => {
    pc.filterNotequalM()
})
And('Click on filter of Manufacturer Begins with in search box and Verify the Result', () => {
    pc.filterBeginswithM()
})
And('Click on filter of Manufacturer Ends with in search box and Verify the Result', () => {
    pc.filterEndswithM()
})
And('Click on filter of Manufacturer Blank in search box and Verify the Result', () => {
    pc.filterBlankM()
})
And('Click on filter of Manufacturer Not blank in search box and Verify the Result', () => {
    pc.filterNotblankM()
})
//Part Category
And('Click on filter of Part Category contain in search box and Verify the Result', () => {
    pc.selectFilterPartCategory() 
})
And('Click on filter of Part Category Does not contain in search box and Verify the Result', () => {
    pc.filterDoesnotcontainPC()
})
And('Click on filter of Part Category Equals in search box and Verify the Result', () => {
    pc.filterEqualsPC()
})
And('Click on filter of Part Category Does not equal in search box and Verify the Result', () => {
    pc.filterNotequalPC()
})
And('Click on filter of Part Category Begins with in search box and Verify the Result', () => {
    pc.filterBeginswithPC()
})
And('Click on filter of Part Category Ends with in search box and Verify the Result', () => {
    pc.filterEndswithPC()
})
And('Click on filter of Part Category Blank in search box and Verify the Result', () => {
    pc.filterBlankPC()
})
And('Click on filter of Part Category Not blank in search box and Verify the Result', () => {
    pc.filterNotblankPC()
})
//Quantity 
And('Click on filter of Quantity Equals in search box and Verify the Result', () => {
    pc.selectFilterQuantity()
})
And('Click on filter of Quantity Does not equal in search box and Verify the Result', () => {
    pc.filterDoesnotcontainQ()
})
And('Click on filter of Quantity Greater than in search box and Verify the Result', () => {
    pc.filterGreaterthanQ()
})
And('Click on filter of Quantity Greater than or equal to in search box and Verify the Result', () => {
    pc.filterGreaterequalQ()
})
And('Click on filter of Quantity Less than in search box and Verify the Result', () => {
    pc.filterLessthanQ()
})
And('Click on filter of Quantity Less than or equal to in search box and Verify the Result', () => {
    pc.filterLessequalQ()
})
And('Click on filter of Quantity Between in search box and Verify the Result', () => {
    pc.filterBetweenQ()
})
And('Click on filter of Quantity Blank in search box and Verify the Result', () => {
    pc.filterBlankQ()
})
And('Click on filter of Quantity Not blank in search box and Verify the Result', () => {
    pc.filterNotblankQ()
})
