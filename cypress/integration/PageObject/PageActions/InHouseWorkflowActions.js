/// <reference types="cypress" />
const Repair360Elements = require("../PageElements/Repair360Elements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const InHouseWorkflowElements = require("../PageElements/InHouseWorkflowElements.js")
const tdata = require("../../../testData.json");
export class InHouseWorkflowActions {
    constructor() {
        globalThis.mdev = new Repair360Elements();
        globalThis.dash = new DashboardElements();
        globalThis.ihw = new InHouseWorkflowElements();
    }
    closeTermsOfServiceWindow() {
        dash.termsElement().click({ force: true })
    }
    clickOnRepair360() {
        dash.repair360Element().click({ force: true })
    }
    clickOnInHouseRepairCenter() {
        mdev.inhousercElement().click({ force: true })
    }
    verifyTitle() {
        ihw.titleElement().should('be.visible')
    }
    filtersVisible() {
        ihw.filtersElement().should('be.visible')
    }
    clickOnNewButton() {
        ihw.newbtnElement().click({ force: true })
    }
    selectFailureType() {
        ihw.failuretypeElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.failuretype).click()
    }
    selectSerialDevice() {
        ihw.serialdeviceElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.inHouseWorkflow.serialdevice).click({ force: true })
        // cy.get(tdata.inHouseWorkflow.serialdevice).click()
    }
    selectTechnician() {
        ihw.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.inHouseWorkflow.technician).click({ force: true })
    }
    selectBuilding() {
        ihw.buildingElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains("Dream Building").click({ force: true })
    }
    selectRepairissue() {
        ihw.repairissueElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.repairissue).click({ force: true })
    }
    enterChromebookIssue() {
        ihw.chromebookissueElement().type(tdata.inHouseWorkflow.chromebookissue, { force: true })
    }
    clickOnSaveButton() {
        ihw.savebtnElement().click({ force: true })
    }
    verifyNewTicket() {
        cy.wait(10000)
        // dash.messageElement().should('contain', tdata.inHouseWorkflow.createTicketmsg)
    }
    clickOnExport() {
        ihw.exportbtnElement().click({ force: true })
    }
    verifyDownload() {
        cy.verifyDownload("/download/", tdata.inHouseWorkflow.filename)
    }
    searchTicketNo() {
       // cy.wait(10000)
        ihw.searchElement().type(tdata.inHouseWorkflow.ticketno + '{enter}', { force: true })
    }
    verfiySearchResult() {
       //cy.wait(8000)
        cy.get('.css-ax8uhp').eq(0).contains(tdata.inHouseWorkflow.ticketno).should('be.visible')
    }
    clickOnAddLine() {
        ihw.addlineElement().click({ force: true })
        ihw.custompartElemnet().click({ force: true })
        ihw.partElement().click({ force: true })
        cy.get('[role="listbox"]').contains('demo unit').click({ force: true })
        ihw.noteElement().type('Testing line', { force: true })
        ihw.createlineElement().contains('Create Line Item').click({ force: true })
        dash.messageElement().should('contain', 'Line Item Created')
        // cy.get('[data-testid="CloseIcon"]').click({ force: true })
    }
    clickOnAddRepairImage() {
        ihw.addimageElement().click({ force: true })
        ihw.uploadimageElement().attachFile('image1.jpeg', { force: true })
        ihw.imagedescriptionElement().type('Testing Image')
        ihw.updateimageElement().contains('Upload Image').click({ force: true })
        dash.messageElement().should('contain', 'Image Created')
        //cy.get('[data-testid="CloseIcon"]').click({force:true})
    }
    clickOnAddNote() {
        ihw.addnoteElement().click({ force: true })
        ihw.notetypeElement().click({ force: true })
        cy.get('[data-value="QA"]').click({ force: true })
        ihw.noteElement().type('Testing Note', { force: true })
        ihw.createnoteElement().contains('Create').click({ force: true })
        dash.messageElement().should('contain', 'Ticket updated')
        cy.get('body').type('{ctrl}w');
        cy.get('[data-testid="KeyboardBackspaceIcon"]').click({force:true})
        mdev.inhousercElement().click({ force: true })
    }
    // enterSearchBox() {
    //     cy.get('[role="combobox"]').eq(0).click({ force: true })
    //     cy.get('[data-value="ticket_number"]').click({ force: true })
    //     ihw.searchElement().type(tdata.inHouseWorkflow.ticketnumber + '{enter}', { force: true })
    // }
    // verifySearchResult() {
    //     cy.get('tr td').eq(1).should('contain', tdata.inHouseWorkflow.ticketnumber)
    // }
    clickViewButton() {
        //ihw.viewdetailsElement().click({ force: true })
        // cy.get('tr td').eq(8).scrollIntoView().contains('View').click({ force: true })
        cy.window().then(win => {
            // win.open('https://google.com', '_blank')
        });
        cy.get('body').type('{ctrl}t');
        cy.visit("https://dream-frontend-stage.onrender.com/repair/inHouse-detail/" + tdata.inHouseWorkflow.recordid, { visitTimeout: 30000 })
        cy.wait(2000)
    }
    verifySrcRepairTicket() {
        cy.contains('Repair Ticket Details').should('be.visible')
    }
    clickOnEditButton() {
        cy.wait(4000)
        ihw.editTicketElement().click({ force: true })
    }
    editTehnician() {
        ihw.technicianElement().click({ force: true })
        cy.get('[role="listbox"]').find('li').contains(tdata.inHouseWorkflow.technician).click({ force: true })
    }
    editRepairStatus() {
        ihw.repairstatusEditElement().click({ force: true })
        cy.get(tdata.inHouseWorkflow.repairstatusEdit).click({ force: true })
    }
    clickOnUpdate() {
        ihw.updateElement().click({ force: true })
    }
    verifyUpdate() {
        //cy.get('tr td').eq(1).should('contain', tdata.inHouseWorkflow.recordid)
    }

}
export default InHouseWorkflowActions 