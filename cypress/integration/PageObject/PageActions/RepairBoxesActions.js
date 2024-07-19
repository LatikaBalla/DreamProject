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
    selectStandardSize() {
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
    searchCreatedby() {
        rb.searchboxElement().eq(0).click({ force: true })
        rb.createdbyElement().click({ force: true })
        rb.searchElement().clear({ force: true }).type(tdata.repairBox.createdby + '{enter}', { force: true })
        cy.get('tr td').eq(7).should('contain', tdata.repairBox.createdby)
    }
    searchBuilding() {
        rb.searchboxElement().eq(0).click({ force: true })
        rb.buildingElement().click({ force: true })
        rb.searchElement().clear({ force: true }).type(tdata.repairBox.building + '{enter}', { force: true })
        cy.get('tr td').eq(4).should('contain', tdata.repairBox.building)
    }
    clickOnClearFilter() {
        rb.clearFilterElement().click({ force: true })
    }
    selectFilterRecordId() {
        cy.wait(2000)
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.recordid)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.recordid)
    }
    selectFilterTrackingNumberFrom() {
        cy.wait(1000)
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.trackingnumber)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.trackingnumber)
        rb.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontain() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        rb.fieldValueElement().eq(0).type(tdata.repairBox.trackingnumber)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairBox.trackingnumber)
        rb.clearFilterElement().click({ force: true })
    }
    filterEquals() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        rb.fieldValueElement().eq(0).type(tdata.repairBox.trackingnumber)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.trackingnumber)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotequal() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        rb.fieldValueElement().eq(0).type(tdata.repairBox.trackingnumber)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairBox.trackingnumber)
        rb.clearFilterElement().click({ force: true })
    }
    filterBeginswith() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(4).click({ force: true })
        rb.fieldValueElement().eq(0).type('1Z6X344')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '1Z6X344')
        rb.clearFilterElement().click({ force: true })
    }
    Endswith() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        rb.fieldValueElement().eq(0).type('70312545702')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '70312545702')
        rb.clearFilterElement().click({ force: true })
    }
    filterBlank() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        rb.fieldValueElement().eq(0).type(' ', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblank() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(7).click({ force: true })
        rb.fieldValueElement().eq(1).type('1Z6X34470325012129', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '1Z6X34470325012129')
        rb.clearFilterElement().click({ force: true })
    }
    // selectFilterShippingFromCost() {
    //     rb.addFilterElement().eq(2).click({ force: true })
    //     rb.fieldNameElement().eq(1).click({ force: true })
    //     rb.fieldOpElement().eq(0).click({ force: true })
    //     rb.fieldValueElement().type(tdata.repairBox.shippingcost)
    //     rb.applyElement().click({ force: true })
    //     cy.get('[row-index="0"]').should('contain',tdata.repairBox.shippingcost)
    // }
    selectFilterShippedFromDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippeddate1)
    }
    selectFilterBuilding() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.building)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.building)
    }
    selectFilterBoxtype() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.boxtype)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.boxtype)
    }
    selectFiltershippingboxstatus() {
        rb.addFilterElement().eq(5).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.shippingboxstatus)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippingboxstatus)
    }
    selectFilterCreatedby() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.createdby)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.createdby)
    }
    selectFilterLastdate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.lastdate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.lastdate1)
    }
}
export default RepairBoxesActions 