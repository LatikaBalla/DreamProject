import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { DashboardActions } from '../PageObject/PageActions/DashboardActions'
import { AccountDetailsActions } from '../PageObject/PageActions/AccountDetailsActions'
import { BuildingsActions } from '../PageObject/PageActions/BuildingsActions'

const build = new BuildingsActions()
const acc = new AccountDetailsActions()
const dash = new DashboardActions()
Cypress.on("uncaught:exception", () => {
    return false;
});
Given('I should navigate to application', function () {
    cy.visit("/");
})
When('I should Sign In into the application', () => {
    cy.AdminLogin()
})
Then('Close the terms of service window', () => {
    cy.wait(8000)
    dash.closeTermsOfServiceWindow()
})
Then('I should be redirected to the dashboard page', () => {
    cy.url().should('include', '/')
})
And('Verify the Title of dashborad Page', () => {
    cy.title().should('eq', 'Account Dashboard')
})
Then('Verify the logo should be visible', () => {
    dash.verifyLogoVisible()
})
Then('My Account Detail tab should be visible', () => {
    dash.myAccountDetailsTabVisible()
})
And('Verify the Title of Account Details Page', () => {
    acc.verifyTitleAccountDetails()
})
Then('Filters of account deatils should be visible', () => {
    acc.verifyFiltersVisible()
})
And('Table for account deatils should be visible', () => {
    acc.tableAccountVisible()
})
And('Building tab should be visible', () => {
    dash.buildingTabVisible()
})
And('Click on Buildings Tab', () => {
    build.clickOnBuildingTab()
})
And('Verify the Title of Buildings Page', () => {
    build.verifyTitleBuildingPage()

})
Then('Filters of Buildings should be visible', () => {
    build.addNewButtonTabVisible()
    build.addfilterButtonVisible()
    build.searchBoxVisible()
    build.refreshButtonVisible()
})
And('Table for Buildings should be visible', () => {
    build.tableofBuildingsVisible()
})
Then('Slider Menu should be visible', () => {
    dash.sliderMenuvisible()
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
// And('Click on Edit Icon', () => {
//     build.clickOnEditIcon()
// })
// And('I should edit Building Name,Phone and Extension', () => {
//     build.editBuildingName()
//     build.editPhone()
//     build.editExtension()
// })
// Then('I should edit Select Default building', () => {
//     build.editselectDefaultBuilding()
// })
// Then('Click on update button', () => {
//     build.clickOnUpdateButton()
// })
// And('Verify the Record has been updated Meassage', () => {
//     build.verifyBuildingUpdated()
// })
// And('Click on view Details Button', () => {
//     build.clickOnDetailsButton()
// })
// Then('Verfiy the Details are correct', () => {
//     build.verifyDetails()
// })
And('Click on Delete Icon of building', () => {
    build.clickOnDeleteIcon()
})
Then('Click on Confirm Delete button of building', () => {
    build.clickOnConfirmDeleteButton()
})
And('Verify the record is deleted successfully of building', () => {
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
// Then('Click on Clear filter', () => {
//     build.clickOnClearFiltersButton()
// })
// Then('Enter the building name in search box', () => {
//     build.enterInSearchBox()
// })
// And('Verify the record in searching history', () => {
//     build.verifySearchResult()
// })


And('Click on My Account Details Tab', () => {
    dash.clickOnMyAccountTab()
})

Then('I should click on Add New button', () => {
    acc.clickOnAddNewbutton()
})
And('Verify the tilte of Add New Contact page', () => {
    acc.verifyNewContactTitle()
})
Then('Enter title, full name and valid Email', () => {
    acc.enterTitle()
    acc.enterFullname()
    acc.enterEmail()
})
And('Enter Phone and Cell Number', () => {
    acc.enterPhone()
    acc.enterCellNumber()
})
Then('Select User Role and Building from Dropdown List', () => {
    acc.selectUserRole()
    acc.selectBuilding()
})
And('Click on save button', () => {
    acc.clickOnASaveButton()
})
Then('Verify the account details added in table', () => {
    acc.verifyRecordTable()
})

And('Click on Edit Icon', () => {
    acc.clickOnEditIcon()
    cy.wait(2000)
})
Then('I should edit title, full name', () => {
    acc.editTitle()
    acc.editFullname()
})
And('I should edit Phone and Cell Number and user role', () => {
    acc.editCellNumber()
    acc.editPhone()
    acc.editUserRole()
})
Then('I edit User Status to inactive', () => {
    acc.editUserStatus()
})
Then('Click on Submit button', () => {
    acc.clickSubmitForUpdate()
})
And('Verify the Record has been updated Meassage', () => {
    acc.verfifyDataUpdatedMessage()
})
Then('Enter title, full name and valid Email for Delete', () => {
    acc.enterTitle()
    acc.enterFullnameDelete()
    acc.enterEmail()
})
And('Click on Delete Icon', () => {
    cy.wait(2000)
    acc.clickDeleteIcon()
})
Then('Click on Confirm Delete button', () => {
    acc.clickConfirmDeleteButton()
})
And('Verify the record is deleted successfully', () => {
    acc.verifyRecordDeleted()
})

Then('Enter title, full name and valid Email for Search', () => {
    acc.enterTitle()
    acc.enterFullnameSearch()
    acc.enterEmail()
})
Then('Click on More filters', () => {
    acc.clickOnMoreFiltersButton()
})
And('Click on Add Filters Group', () => {
    acc.clickOnAddFilterGroup()
})
Then('Select Field name and Field operation', () => {
    acc.selectFieldName()
    acc.selectfieldOperation()
})
And('Enter the Search value in search box', () => {
    acc.enterFieldValueSearchBox()
})
Then('Click on Apply Button', () => {
    acc.clickOnApplyButton()
})
And('Verify the Results in the table', () => {
    acc.verifyResultAfterFilter()
})
Then('Click on Clear filter', () => {
    acc.clickOnClearFiltersButton()
})
And('Enter the full name in search box', () => {
    acc.enterSearchValue()
})
And('Verify the record in searching history', () => {
    acc.verifySearchResult()
})







