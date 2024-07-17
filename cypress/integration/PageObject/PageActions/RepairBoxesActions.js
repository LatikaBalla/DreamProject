/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const RepairBoxesElements = require("../PageElements/RepairBoxesElements.js")
const VivacityRepairCenterElements = require("../PageElements/VivacityRepairCenterElements.js")
const tdata = require("../../../testData.json");
export class RepairBoxesActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.rb = new RepairBoxesElements();
        globalThis.rc = new VivacityRepairCenterElements();
    }
    closeTermsOfServiceWindow() {
        cy.contains('Remind me Later').click({ force: true }) 
        dash.termsElement().contains('Dismiss').click({ force: true })
        //dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        //dash.arrowElement().click({ force: true })
        dash.repair360Element().click({ force: true })
    }
    clickOnRepairBoxesTab() {
        rc.repairBoxesElement().click({ force: true })
    }
    verifyTitle() {
        rb.titleElement().should('be.visible')
    }
    inboundVisible() {
        // rb.inboundElement().should('be.visible')
    }
    outboundVisible() {
        rb.outboundElement().should('be.visible')
    }
    clickOnAddnewBox() {
        rb.createboxbtnElement().click({ force: true })
    }
    enterWeight() {
        rb.weightElement().type(tdata.repairBox.weight)
    }
    selectStandardSize(){
        rb.standardSizeElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains('1 Unit (18Dx12Wx3H)').click({ force: true })
    }
    enterHeight() {
        rb.heightElement().type(tdata.repairBox.height)
    }
    enterDepth() {
        rb.depthElement().type(tdata.repairBox.depth)
    }
    enterwidth() {
        rb.widthElement().type(tdata.repairBox.width)
    }
    selectPickupSite() {
        rb.pickupsiteElement().scrollIntoView().click({ force: true })
        cy.get(tdata.repairBox.pickupsite).click({ force: true })
    }
    checkNeedShippingBox() {
        rb.checkboxElement().click({ force: true })
    }
    clickOnCreateBoxButton() {
        //rb.createboxbtnElement().eq(1).click({ force: true })
        cy.get('.css-8atqhb > .MuiButtonBase-root').click({ force: true })
    }
    selectTickets() {
        rb.ticketElement().click()
        cy.get('[role="listbox"]').find('[role="option"]').eq(1).click()
    }
    clickOnFinishButton() {
        rb.finishbtnElement().click({ force: true })
    }
    verifyNewBoxAdd() {
        dash.messageElement().should('contain', tdata.repairBox.boxcreatedmsg)
    }
    clickOnViewButton() {
        cy.window().then(win => {
            // win.open('https://google.com', '_blank');
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("/repair-360/box-detail/" + tdata.repairBox.recordid)
        //cy.get('tr td').eq(5).contains('View Status').click({ force: true })
    }
    verifyBoxDetails() {
        cy.contains("Box Details").should('be.visible')
    }
    clickOnAddTicket() {
        cy.wait(3000)
        rb.addticketElement().click({ force: true })
    }
    clickOnDownloadLabel() {
       cy.contains('Export').click({ force: true })
    }
    clickOnAddTicket_s() {
        rb.addticketbtnElement().click({ force: true })
    }
    verifyTicketAdded() {
        dash.messageElement().should('contain', tdata.repairBox.boxcreatedmsg)
    }
    clickOnViewButtonTicket() {
        //cy.wait(5000)
        cy.get('tbody tr').eq(0).find('td').eq(7).scrollIntoView().contains('Details').click({ force: true })
    }
    verifyTicketDetails() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnBackButton() {
        dash.backArrowElement().click({ force: true })
    }
    clickOnRemoveButton() {
        cy.get('tbody tr').eq(0).find('td').eq(8).scrollIntoView().contains('Remove').click({ force: true })
    }
    verifyTicketDeleted() {
        //   cy.wait(1000)
        // cy.get('tbody tr').eq(0).should('not.be.visible')
    }
    searchTrackingNumber() {
        rb.searchboxElement().eq(0).click({ force: true })
        rb.trackingnumberElement().click({ force: true })
        rb.searchElement().clear({ force: true }).type(tdata.repairBox.trackingnumber + '{enter}', { force: true })
        cy.get('tr td').eq(1).should('contain', tdata.repairBox.trackingnumber)
    }
    searchRecordId() {
        rb.searchboxElement().eq(0).click({ force: true })
        rb.recordidElement().click({ force: true })
        rb.searchElement().clear({ force: true }).type(tdata.repairBox.recordid + '{enter}', { force: true })
        cy.get('tr td').eq(0).should('contain', tdata.repairBox.recordid)
        rb.searchElement().clear({ force: true })
    }
    searchCreatedby(){
        rb.searchboxElement().eq(0).click({ force: true })
        rb.createdbyElement().click({ force: true })
        rb.searchElement().clear({ force: true }).type(tdata.repairBox.createdby + '{enter}', { force: true })
        cy.get('tr td').eq(7).should('contain', tdata.repairBox.createdby)
    }
    searchBuilding(){
        rb.searchboxElement().eq(0).click({ force: true })
        rb.buildingElement().click({ force: true })
        rb.searchElement().clear({ force: true }).type(tdata.repairBox.building+ '{enter}', { force: true })
        cy.get('tr td').eq(4).should('contain', tdata.repairBox.building)
    }
    clickOnClearFilter() {
        rb.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId() {
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select(0).invoke("val").should("eq", 'record_id', { force: true })
        rb.fieldOpElement().select('Does Not Contain', { force: true }).should('have.value', 'Does Not Contain')
        rb.fieldValueElement().type(tdata.repairTickets.recordid)
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(0).should('not.contain', tdata.repairTickets.recordid)
    }
    selectFilterTrackingNumberFrom() {
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select(1).invoke("val").should("eq", "tracking_number_from")
        rb.fieldOpElement().select('Does Not Contain', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.trackingnumber)
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(1).should('not.contain', tdata.repairBox.trackingnumber)
    }
    selectFilterShippingFromCost() {
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('shipping_from_cost', { force: true })
        rb.fieldOpElement().select('Does Not Contain', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.shippingcost)
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(2).should('not.contain', tdata.repairBox.shippingcost)
    }
    selectFilterShippedFromDate() {
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('shipped_from_date', { force: true })
        rb.fieldOpElement().select('Does Not Contain', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.shippeddate, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(3).should('not.contain', tdata.repairBox.shippeddate)
    }
    selectFilterLabelFrom() {
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('label_from', { force: true })
        rb.fieldOpElement().select('Does Not Contain', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.labelfrom, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('not.contain', tdata.repairBox.labelfrom)
    }
    selectFilterBuilding(){
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('building', { force: true })
        rb.fieldOpElement().select('Contains', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.building, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(4).should('contain', tdata.repairBox.building)
    }
    selectFilterBoxtype(){
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('box_type', { force: true })
        rb.fieldOpElement().select('Contains', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.boxtype, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(5).should('contain', tdata.repairBox.boxtype)
    }
    selectFiltershippingboxstatus(){
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('shipping_box_status', { force: true })
        rb.fieldOpElement().select('Contains', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.shippingboxstatus, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(6).should('contain', tdata.repairBox.shippingboxstatus)
    }
    selectFilterCreatedby(){
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('created_by', { force: true })
        rb.fieldOpElement().select('Contains', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.createdby, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(7).should('contain', tdata.repairBox.createdby)
    }
    selectFilterLastdate (){
        rb.addFilterElement().click({ force: true })
        rb.fieldNameElement().select('last_modified_date', { force: true })
        rb.fieldOpElement().select('Contains', { force: true })
        rb.fieldValueElement().type(tdata.repairBox.lastdate, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('tr td').eq(8).should('contain', tdata.repairBox.lastdate)
    }
}
export default RepairBoxesActions 