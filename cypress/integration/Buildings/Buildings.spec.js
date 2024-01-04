import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'

const build = new BuildingsActions()
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
    build.closeTermsOfServiceWindow()
})
And('Click on Buildings Tab', () => {
    build.clickOnBuildingTab()
})
Then('I should click on + Add New button', () => {
    build.clickOnAddnewButton()
})
And('I should Enter Building Name,Phone and Extension', () => {
    build.enterBuildingName()
    build.enterPhone()
    build.enterExtension()
})
Then('Select Default building', () => {
    build.selectDefaultBuilding()
})
And('Enter Billing Address and select from dropdown', () => {
    build.enterBillingAddress()
})
Then('Click on checkbox Same as Shipping Address', () => {
    build.clickOnCheckbox()
})
And('Click on save button', () => {
    build.clickOnSaveButton()
})
Then('Verify the builing details added in table', () => {
    build.verifyNewBuilding()
})
And('Click on Edit Icon', () => {
    build.clickOnEditIcon()
})
And('I should edit Building Name,Phone and Extension', () => {
    build.editBuildingName()
    build.editPhone()
    build.editExtension()
})
Then('I should edit Select Default building', () => {
    build.editselectDefaultBuilding()
})
Then('Click on update button', () => {
    build.clickOnUpdateButton()
})
And('Verify the Record has been updated Meassage', () => {
    build.verifyBuildingUpdated()
})
And('Click on view Details Button', () => {
    build.clickOnDetailsButton()
})
Then('Verfiy the Details are correct', () => {
    build.verifyDetails()
})
And('Click on Delete Icon', () => {
    build.clickOnDeleteIcon()
})
Then('Click on Confirm Delete button', () => {
    build.clickOnConfirmDeleteButton()
})
And('Verify the record is deleted successfully', () => {
    build.verifyDelete()
})
// Then('Click on More filters', () => {
//     build.clickOnMoreFiltersButton()
// })
// And('Click on Add Filters Group', () => {
//     build.clickOnAddFilterGroup()
// })
// Then('Select Field name and Field operation', () => {
//     build.selectFieldName()
//     build.selectfieldOperation()
// })
// And('Enter the Search value in search box', () => {
//     build.enterFieldValueSearchBox()
// })
// Then('Click on Apply Button', () => {
//     build.clickOnApplyButton()
// })
// And('Verify the Results in the table', () => {
//     build.verifyResultAfterFilter()
// })
Then('Click on Clear filter', () => {
    build.clickOnClearFiltersButton()
})
// Then('Enter the building name in search box', () => {
//     build.enterInSearchBox()
// })
// And('Verify the record in searching history', () => {
//     build.verifySearchResult()
// })
And('Click More filter select- Record Id in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterRecordId()
})
And('Click More filter select- Building Name in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterBuildingName()
})
And('Click More filter select- Default Building in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterDefaultBuilding()
})
And('Click More filter select- Phone in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterPhone()
})
And('Click More filter select- Building Shipping Address in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterShippingAddress()
})
And('Click More filter select- Building Billing Address in search box and Verify the Result', () => {
    build.clickOnMoreFiltersButton()
    build.selectFilterBillingAddress()
})
And('Enter the Search - Building Name in search box and Verify the Result', () => {
    build.searchBuildingName()
})
Then('Enter the Search - Building Shipping Address in search box and Verify the Result', () => {
    build.searchShippingAddress()
})
And('Enter the Search - Phone in search box and Verify the Result', () => {
    build.searchPhone()
})
And('Click on Export To CSV', () => {
    build.clickOnExport()
})

