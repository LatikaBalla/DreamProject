import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SrcFacilitatorsActions } from '../PageObject/PageActions/SrcFacilitatorsActions'

const sf = new SrcFacilitatorsActions()
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
    sf.closeTermsOfServiceWindow()
    cy.wait(1000)
})
Then('Click on Repair360 page', () => {
    sf.clickOnRepair360()
})
And('Click on StudentRepairCenter tab', () => {
    sf.clickOnStudentRepairCenterTab()
})
Then('Click on SrcFacilitators tab', () => {
    sf.clickOnSrcFacilitatorsTab()
})
And('Verify the Title of SrcFacilitators Page', () => {
    sf.verifyTitle()
})
Then('Filters of SrcFacilitators should be visible', () => {
    sf.filtersVisible()
})
And('Table for SrcFacilitators should be visible', () => {
    sf.tableVisible()
})
And('Click on Download Export button', () => {
    sf.clickOnExport()
})
And('Click on view button', () => {
    sf.clickOnViewButton()
})
Then('Veriry the Details of Facilitator', () => {
    sf.verifyViewDetails()
})
//fn
And('Click on filter of Full name contain and Verify the Result', () => {
    sf.filtercontainFN()
})
And('Click on filter of Full name Does not contain and Verify the Result', () => {
    sf.filterDoesnotcontainFN()
})
And('Click on filter of Full name Equals and Verify the Result', () => {
    sf.filterEqualsFN()
})
And('Click on filter of Full name Does not equal and Verify the Result', () => {
    sf.filterNotequalFN()
})
And('Click on filter of Full name Begins with and Verify the Result', () => {
    sf.filterBeginswithFN()
})
And('Click on filter of Full name Ends with and Verify the Result', () => {
    sf.filterEndswithFN()
})
And('Click on filter of Full name Blank and Verify the Result', () => {
    sf.filterBlankFN()
})
And('Click on filter of Full name Not blank and Verify the Result', () => {
    sf.filterNotblankFN()
})
//title
And('Click on filter of Title contain and Verify the Result', () => {
    sf.filtercontainT()
})
And('Click on filter of Title Does not contain and Verify the Result', () => {
    sf.filterDoesnotcontainT()
})
And('Click on filter of Title Equals and Verify the Result', () => {
    sf.filterEqualsT()
})
And('Click on filter of Title Does not equal and Verify the Result', () => {
    sf.filterNotequalT()
})
And('Click on filter of Title Begins with and Verify the Result', () => {
    sf.filterBeginswithT()
})
And('Click on filter of Title Ends with and Verify the Result', () => {
    sf.filterEndswithT()
})
And('Click on filter of Title Blank and Verify the Result', () => {
    sf.filterBlankT()
})
And('Click on filter of Title Not blank and Verify the Result', () => {
    sf.filterNotblankT()
})
//email
And('Click on filter of Eamil contain and Verify the Result', () => {
    sf.filtercontainE()
})
And('Click on filter of Eamil Does not contain and Verify the Result', () => {
    sf.filterDoesnotcontainE()
})
And('Click on filter of Eamil Equals and Verify the Result', () => {
    sf.filterEqualsE()
})
And('Click on filter of Eamil Does not equal and Verify the Result', () => {
    sf.filterNotequalE()
})
And('Click on filter of Eamil Begins with and Verify the Result', () => {
    sf.filterBeginswithE()
})
And('Click on filter of Eamil Ends with and Verify the Result', () => {
    sf.filterEndswithE()
})
And('Click on filter of Eamil Blank and Verify the Result', () => {
    sf.filterBlankE()
})
And('Click on filter of Eamil Not blank and Verify the Result', () => {
    sf.filterNotblankE()
})
//phone
And('Click on filter of Phone No contain and Verify the Result', () => {
    sf.filtercontainP()
})
And('Click on filter of Phone No Does not contain and Verify the Result', () => {
    sf.filterDoesnotcontainP()
})
And('Click on filter of Phone No Equals and Verify the Result', () => {
    sf.filterEqualsP()
})
And('Click on filter of Phone No Does not equal and Verify the Result', () => {
    sf.filterNotequalP()
})
And('Click on filter of Phone No Begins with and Verify the Result', () => {
    sf.filterBeginswithP()
})
And('Click on filter of Phone No Ends with and Verify the Result', () => {
    sf.filterEndswithP()
})
And('Click on filter of Phone No Blank and Verify the Result', () => {
    sf.filterBlankP()
})
And('Click on filter of Phone No Not blank and Verify the Result', () => {
    sf.filterNotblankP()
})
//us
And('Click on filter of User status contain and Verify the Result', () => {
    sf.filtercontainUS()
})
And('Click on filter of User status Does not contain and Verify the Result', () => {
    sf.filterDoesnotcontainUS()
})
And('Click on filter of User status Equals and Verify the Result', () => {
    sf.filterEqualsUS()
})
And('Click on filter of User status Does not equal and Verify the Result', () => {
    sf.filterNotequalUS()
})
And('Click on filter of User status Begins with and Verify the Result', () => {
    sf.filterBeginswithUS()
})
And('Click on filter of User status Ends with and Verify the Result', () => {
    sf.filterEndswithUS()
})
And('Click on filter of User status Blank and Verify the Result', () => {
    sf.filterBlankUS()
})
And('Click on filter of User status Not blank and Verify the Result', () => {
    sf.filterNotblankUS()
})
And('Click on filter of Last Modified Date Equals and Verify the Result', () => {
    sf.filterEqualsDate()
})
And('Click on filter of Last Modified Date Does not equal and Verify the Result', () => {
    sf.filterNotequalDate()
})
And('Click on filter of Last Modified Date Before and Verify the Result', () => {
    sf.filterBeforeDate()
})
And('Click on filter of Last Modified Date After and Verify the Result', () => {
    sf.filterAfterDate()
})
And('Click on filter of Last Modified Date Between with and Verify the Result', () => {
    sf.filterBetweenDate()
})
And('Click on filter of Last Modified Date Blank and Verify the Result', () => {
    sf.filterBlankDate()
})
And('Click on filter of Last Modified Date Not blank and Verify the Result', () => {
    sf.filterNotblankDate()
})