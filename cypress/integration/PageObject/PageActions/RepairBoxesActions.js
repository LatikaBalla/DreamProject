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
        dash.termsElement().contains('Dismiss').click({ force: true })
        cy.wait(5000)
        cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
    }
    clickOnRepair360() {
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
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click({ force: true })
        // cy.get('.css-8atqhb > .MuiButtonBase-root').click({ force: true })
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
        cy.wait(100)
        cy.contains("Box Details").should('be.visible')
    }
    clickOnAddTicket() {
        cy.wait(3000)
        rb.addticketElement().click({ force: true })
    }
    clickOnDownloadLabel() {
        cy.contains('Exporb').click({ force: true })
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
        cy.wait(2000)
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
    //RB
    selectFilterRepairBox() {
        cy.wait(2000)
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            let value = parseInt($el.text());
            expect(value).to.be.equal(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterDoesnotequalBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.not.equal(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterGreaterthanBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.greaterThan(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterGreaterequalBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.gte(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterLessthanBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(4).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lessThan(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterLessequalBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.lte(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterBetweenBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="From"]').type(tdata.repairBox.repairbox1)
        cy.get('[placeholder="To"]').type(tdata.repairBox.repairbox)
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(0).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.within(9941, 10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    filterBlankBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(7).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblankBox() {
        rb.addFilterElement().eq(0).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(8).click({ force: true })
        rb.fieldValueElement().eq(1).clear({ force: true }).type('10584', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('.ag-row-first > [col-id="record_id"]').eq(1).then(($el) => {
            const value = parseInt($el.text());
            expect(value).to.be.equal(10584);
        })
        rb.clearFilterElement().click({ force: true })
    }
    //TN
    selectFiltertrackingNumberFrom() {
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
    filterEndswith() {
        rb.addFilterElement().eq(1).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        rb.fieldValueElement().eq(0).type('70312350878')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '70312350878')
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
        rb.fieldValueElement().eq(1).type('1Z6X34470331639405', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', '1Z6X34470331639405')
        rb.clearFilterElement().click({ force: true })
    }
    //SDate
    selectFilterShippedFromDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippeddate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterEqualsSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippeddate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotequalSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairBox.shippeddate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterBeforeSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippeddate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterAfterSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rb.clearFilterElement().click({ force: true })
    }
    filterBetweenSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(4).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.shippeddate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairBox.shippeddate, { force: true })
        rb.applyElement().click({ force: true })
        //  cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippeddate)
        rb.clearFilterElement().click({ force: true })
    }
    filterBlankSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairBox.shippeddate, { force: true })
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippeddate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblankSDate() {
        rb.addFilterElement().eq(2).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairBox.shippeddate, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairBox.shippeddate1)
        rb.clearFilterElement().click({ force: true })
    }
    //B
    selectFilterBuilding() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.building)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.building)
        rb.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.buildings.buildingname)
        rb.clearFilterElement().click({ force: true })
    }
    filterEqualsB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.buildings.buildingname)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotequalB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.buildings.buildingname)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.buildings.buildingname)
        rb.clearFilterElement().click({ force: true })
    }
    filterBeginswithB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(4).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type('Build')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Build')
        rb.clearFilterElement().click({ force: true })
    }
    filterEndswithB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type('One')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'One')
        rb.clearFilterElement().click({ force: true })
    }
    filterBlankB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblankB() {
        rb.addFilterElement().eq(3).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(7).click({ force: true })
        rb.fieldValueElement().eq(1).clear({ force: true }).type('GVL', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'GVL')
        rb.clearFilterElement().click({ force: true })
    }
    //BType
    selectFilterBoxtype() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.boxtype)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.boxtype)
        rb.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.boxtype)
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('not.contain', tdata.repairBox.boxtype)
        rb.clearFilterElement().click({ force: true })
    }
    filterEqualsBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.boxtype)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.boxtype)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotequalBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.boxtype)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairBox.boxtype)
        rb.clearFilterElement().click({ force: true })
    }
    filterBeginswithBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(4).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type('Inb')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Inb')
        rb.clearFilterElement().click({ force: true })
    }
    filterEndswithBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type('nd')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'nd')
        rb.clearFilterElement().click({ force: true })
    }
    filterBlankBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblankBT() {
        rb.addFilterElement().eq(4).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(7).click({ force: true })
        rb.fieldValueElement().eq(1).clear({ force: true }).type(tdata.repairBox.boxtype, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.boxtype)
        rb.clearFilterElement().click({ force: true })
    }
    //ss
    filterSearchCheck() {
        rb.addFilterElement().eq(5).click({ force: true })
        rb.searchElement().type('Vivacity')
        rb.searchboxElement().eq(1).contains(tdata.repairBox.shippingboxstatus2).click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippingboxstatus2)
        cy.get('.reset-button').click({ force: true })
        rb.searchElement().clear({ force: true })
    }
    filterCheck1() {
        rb.addFilterElement().eq(5).click({ force: true })
        rb.searchboxElement().eq(0).contains(tdata.repairBox.shippingboxstatus1).click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippingboxstatus1)
        cy.get('.reset-button').click({ force: true })
    }
    filterCheck2() {
        rb.addFilterElement().eq(5).click({ force: true })
        rb.searchboxElement().eq(1).contains(tdata.repairBox.shippingboxstatus2).click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippingboxstatus2)
        cy.get('.reset-button').click({ force: true })

    }
    filterCheck3() {
        rb.addFilterElement().eq(5).click({ force: true })
        rb.searchboxElement().eq(2).contains(tdata.repairBox.shippingboxstatus3).click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippingboxstatus3)
        cy.get('.reset-button').click({ force: true })
    }
    filterCheckAll() {
        rb.addFilterElement().eq(5).click({ force: true })
        rb.searchboxElement().eq(0).contains(tdata.repairBox.shippingboxstatus1).click({ force: true })
        rb.searchboxElement().eq(1).contains(tdata.repairBox.shippingboxstatus2).click({ force: true })
        rb.searchboxElement().eq(2).contains(tdata.repairBox.shippingboxstatus3).click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.shippingboxstatus1, tdata.repairBox.shippingboxstatus2, tdata.repairBox.shippingboxstatus3)
        cy.get('.reset-button').click({ force: true })
    }
    //Cby
    selectFilterCreatedby() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        rb.fieldValueElement().type(tdata.repairBox.createdby)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.createdby)
        rb.clearFilterElement().click({ force: true })
    }
    filterDoesnotcontainCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.createdby)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairBox.createdby)
        rb.clearFilterElement().click({ force: true })
    }
    filterEqualsCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.createdby)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.createdby)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotequalCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(tdata.repairBox.createdby)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairBox.createdby)
        rb.clearFilterElement().click({ force: true })
    }
    filterBeginswithCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(4).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type('demo')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'demo')
        rb.clearFilterElement().click({ force: true })
    }
    filterEndswithCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type('vivacitytech.com')
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'vivacitytech.com')
        rb.clearFilterElement().click({ force: true })
    }
    filterBlankCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        rb.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', ' ')
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblankCBy() {
        rb.addFilterElement().eq(6).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(7).click({ force: true })
        rb.fieldValueElement().eq(1).clear({ force: true }).type('Maleja Duque', { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', 'Maleja Duque')
        rb.clearFilterElement().click({ force: true })
    }
    //Ldate
    filterEqualsLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(0).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.lastdate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('contain', tdata.repairBox.lastdate1)
    }
    filterNotequalLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(1).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.lastdate)
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain.value', tdata.repairBox.lastdate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterBeforeLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(2).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.lastdate)
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.repairBox.lastdate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterAfterLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.lastdate)
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rb.clearFilterElement().click({ force: true })
    }
    filterBetweenLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(3).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.repairBox.lastdate)
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairBox.lastdate, { force: true })
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', '2024-07-15')
        rb.clearFilterElement().click({ force: true })
    }
    filterBlankLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(5).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairBox.lastdate, { force: true })
        rb.applyElement().click({ force: true })
        // cy.get('[row-index="0"]').should('contain', tdata.repairBox.lastdate1)
        rb.clearFilterElement().click({ force: true })
    }
    filterNotblankLDate() {
        rb.addFilterElement().eq(7).click({ force: true })
        rb.fieldNameElement().eq(1).click({ force: true })
        rb.fieldOpElement().eq(6).click({ force: true })
        cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.repairBox.lastdate, { force: true })
        rb.applyElement().click({ force: true })
        cy.get('[row-index="0"]').should('not.contain', tdata.repairBox.lastdate1)
        rb.clearFilterElement().click({ force: true })
    }
}
export default RepairBoxesActions 