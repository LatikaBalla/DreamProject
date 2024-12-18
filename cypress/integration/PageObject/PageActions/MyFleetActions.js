/// <reference types="cypress" />
const ManageDevicesElements = require("../PageElements/ManageDevicesElements.js")
const DashboardElements = require("../PageElements/DashboardElements.js")
const MyFleetElements = require("../PageElements/MyFleetElements.js")
const tdata = require("../../../testData.json");

export class MyFleetActions {
   constructor() {
      globalThis.mdev = new ManageDevicesElements();
      globalThis.dash = new DashboardElements();
      globalThis.mf = new MyFleetElements();
   }
   closeTermsOfServiceWindow() {
      cy.wait(4000)
     // dash.termsElement().contains('Agree').click({ force: true })
   }
   clickOnManageDevices() {
      dash.managedevicesElement().click({ force: true })
   }
   clickOnMyFleet() {
      mdev.myfleetElement().click({ force: true })
   }
   verifyTitle() {
      mf.titleElement().should('be.visible')
   }
   filtersVisible() {
      mf.filtersElement().should('be.visible')
   }
   tableVisible() {
      mf.tableElement().should('be.visible')
   }
   enterSearchValue() {
      mf.searchElement().clear({ force: true }).type(tdata.myFleet.search, { force: true })
   }
   enterSearchValue1() {
      mf.searchElement().clear({ force: true }).type(tdata.myFleet.search1, { force: true })
   }
   verifySearchResult() {
      cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.search, { force: true })
   }
   verifySearchResult1() {
      cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', tdata.myFleet.search1, { force: true })
   }
   clickOnMoreFiltersButton() {
      cy.get('[data-testid="FilterListIcon"]').click({ force: true })
      //mf.morefiltersElement().scrollIntoView().click({ force: true })
   }
   clickOnEditButtonGeneral() {
      cy.get('[aria-label="Edit General Device Info"]').click({ force: true })
   }
   clickOnEditButtonAssign() {
      cy.get('[aria-label="Edit Device Assignment"]').click({ force: true })
   }
   editGeneral() {
      mf.assetTagElement().clear({ force: true }).type(tdata.myFleet.assetTagEdit, { force: true })

   }
   editAssignment() {
      mf.studentinfoElement().click({ force: true })
      cy.get('[role="listbox"]').find('li').contains('Demo Test').click({ force: true })
      mf.buildingElement().click({ force: true })
      cy.get('[role="listbox"]').find('li').contains(tdata.myFleet.buildingname).click({ force: true })
   }
   clickOnUpdateButton() {
      mf.updatebtnElement().click({ froce: true })
   }
   verifyGeneralUdate() {
      dash.messageElement().should('contain', 'Device info updated')
   }
   verifyAssignmnetUdate() {
      dash.messageElement().should('contain', 'Device assignment updated')
   }
   clickOnCExportToCSVButton() {
      cy.wait(1000)
      mf.exportcsvElement().click({ force: true })
   }
   verifyDownloadSuccessful() {
      cy.verifyDownload("/download/", tdata.myFleet.filename)
   }
   clickOnDeviceIcon() {
      mf.deviceIconElement().eq(1).click({ force: true })
   }
   clickOnViewButton() {
      mf.viewElement().click({ force: true });
   }
   verifyViewResult() {
      cy.contains('General Info').should('be.visible', { force: true })
   }
   verifyViewResult1() {
      cy.contains(tdata.myFleet.serialno1).should('be.visible', { force: true })
   }
   clickOnAddDevice() {
      mf.addDeviceElement().click({ force: true })
   }
   enterSerialNo() {
      const uniqueSeed = Date.now();
      mf.serialNoElement().type(uniqueSeed)
   }
   selectDeviceId() {
      mf.deviceidElement().click({ force: true })
      cy.get('#device-option-0').click({ force: true })
   }
   enterAssetTag() {
      mf.assetTagElement().type(tdata.myFleet.assettag)
   }
   selectStudentid() {
      mf.studentidElement().click({ force: true })
      cy.get(tdata.myFleet.studentid).click({ force: true })
   }
   selectLonarStatus() {
      mf.lonarstatusElement().click()
     // cy.get('.MuiList-root > [tabindex="0"]').click()
   }
   selectDeviceStatus() {
      mf.devicestatusElement().click()
      cy.get(tdata.myFleet.devicestatus).click({ force: true })
   }
   clickOnsubmitButton() {
      mf.submitbtnElement().click({ force: true })
   }
   verfifyDeviceAdded() {
      dash.messageElement().should('contain', tdata.myFleet.addDevicemsg)
   }
   selectFailureType() {
      mf.failuretypeElement().click({ force: true })
      cy.get(tdata.repairTickets.failuretype).click({ force: true })
   }
   selectReturnSite() {
      mf.returnsiteElement().click({ force: true })
      cy.get('#outbound_address-option-5').click({ force: true })
   }
   selectStudent() {
      cy.get('#student_id').click({ force: true })
      cy.get('#student_id-option-5').click({ force: true })
   }
   selectBuilding() {
      cy.wait(1000)
      mf.buildingElement().click({ force: true })
      cy.get('#building-option-5').click({ force: true })
   }
   selectChromebookIssue() {
      mf.chromebookissueElement().click({ force: true })
      cy.get(tdata.myFleet.chromebookissue).click({ force: true })
   }
   enterDescritionOfIssue() {
      mf.descriptionElement().type(tdata.myFleet.description, { force: true })
   }
   clickOnSaveButton() {
      mf.savebtnElement().click({ force: true })
   }
   verifyNewTicket() {
      dash.messageElement().should('contain', tdata.myFleet.createTicketmsg)
   }
   clickOnAddLoaner() {
      cy.get('[data-testid="FilterAltIcon"]').click({ force: true })
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.assetTagEdit)
      mf.applyElement().click({ force: true })
      cy.wait(1000)
      mf.deviceIconElement().eq(1).click({ force: true })
      mf.addLoanerElement().click({ force: true })
   }
   clickOnRemoveLoaner() {
      cy.get('[data-testid="FilterAltIcon"]').click({ force: true })
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.assetTagEdit)
      mf.applyElement().click({ force: true })
      cy.wait(1000)
      mf.deviceIconElement().eq(1).click({ force: true })
      mf.removeLoanerElement().click({ force: true })
      cy.get('[data-testid="FilterAltIcon"]').click({ force: true })
   }
   verifyaddTicketLoaner() {
      dash.messageElement().should('contain', tdata.myFleet.addLoanermsg)
   }
   verifyRemoveTicketLoaner() {
      dash.messageElement().should('contain', tdata.myFleet.removeLoanermsg)
   }
   clickOnEditDevice() {
      cy.wait(2000)
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.assettag)
      mf.applyElement().click({ force: true })
      mf.deviceIconElement().eq(1).click({ force: true })
      mf.editDeviceElement().click({ force: true })
   }
   clickonGoogleIcon() {
      cy.wait(4000)
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.searchG)
      mf.applyElement().click({ force: true })
      mf.googleIconElement().eq(0).click({ force: true })
   }
   verifyGoogleGolocation() {
      cy.contains('Google Data').should('be.visible')
      cy.contains('Current Geolocation').scrollIntoView().should('be.visible')
   }
   clickonEditGoogle() {
      cy.get('[aria-label="Edit Google Data"]').click({ force: true })
   }
   editGoogleData() {
      mf.orgUnitElement().click({ force: true })
      cy.contains(tdata.myFleet.editorgUnit).click({ force: true })
      mf.assetIdElement().clear().type(tdata.myFleet.editassetId)
      mf.locationElement().clear().type(tdata.myFleet.editlocation)
      mf.notesElement().clear().type(tdata.myFleet.editnotes)
   }
   verifyGoogleUpdated() {
      dash.messageElement().should('contain', 'Google Chrome OS Device updated')
   }
   clickOnCreateTicket() {
      mf.createTicketElement().click({ force: true });
   }
   converRetired() {
      cy.wait(4000)
      cy.get('[data-testid="FilterAltIcon"]').click({ force: true })
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear().type(tdata.myFleet.serialnumber, { force: true })
      mf.applyElement().click({ force: true })
      cy.wait(1000)
      mf.deviceIconElement().eq(1).click({ force: true })
      cy.get('[href="/devices"]').eq(4).click({ force: true })
      cy.get('[type="button"]').contains("Confirm").click({ force: true })
   }
   verifyRetired() {
      dash.messageElement().should('contain', 'Device Retired', { force: true })
   }
   convertActive() {
      cy.wait(4000)
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().eq(0).clear().type(tdata.myFleet.serialnumber, { force: true })
      mf.applyElement().click({ force: true })
      cy.wait(1000)
      mf.deviceIconElement().eq(1).click({ force: true })
      cy.get('[href="/devices"]').eq(3).click({ force: true })
      cy.get('[type="button"]').contains("Confirm").click({ force: true })
   }
   clickOnHelpIcon() {
      mf.filterHelpElement().click({ force: true })
   }
   verifyfilteringGuide() {
      cy.contains('Dream Data Filtering Guide').should('be.visible')
      cy.get('[data-testid="CloseIcon"]').eq(1).click({ force: true })
   }
   clickOnSaveTableIcon() {
      cy.wait(100)
      mf.saveIconElement().click({ force: true })
   }
   verifySaveMessage() {
      dash.messageElement().should('contain', 'Table view preferences saved successfully!')
   }
   verifyActive() {
      dash.messageElement().should('contain', 'Device Activated', { force: true })
   }
   clickOnRetiredTab() {
      cy.get('[data-test-id="tabDeactivate"]').click({ force: true })
   }
   clickOnCPUStatus() {
      cy.get('[type="button"]').contains('CPU Status').click({ force: true })
   }
   verifyCPUStatus() {
      cy.get('.css-1qw96cp').contains('CPU Cores Temperature').should('be.visible', { force: true })
   }
   clickOnMemory() {
      cy.get('[type="button"]').contains('Memory Information').click({ force: true })
   }
   verifyMemory() {
      cy.get('.css-1qw96cp').contains('Memory Available Over Time').should('be.visible', { force: true })
   }
   clickOnNetwork() {
      cy.get('[type="button"]').contains('Network Information').click({ force: true })
   }
   verifyNetwork() {
      cy.get('.css-boebq5').eq(0).contains('Network Information').should('be.visible', { force: true })
   }
   clickOnOS() {
      cy.get('[type="button"]').contains('OS Information').click({ force: true })
   }
   verifyOS() {
      cy.get('.css-sgter1').contains('OS Information').should('be.visible', { force: true })
   }
   clickOnBattery() {
      cy.get('[type="button"]').contains('Battery Information').click({ force: true })
   }
   verifyBattery() {
      cy.get('.css-boebq5').contains('Battery Information').should('be.visible', { force: true })
   }
   clickOnStorage() {
      cy.get('[type="button"]').contains('Storage Information').click({ force: true })
   }
   verifyStorage() {
      cy.get('.css-13srkaz').contains('Storage Information').should('be.visible', { force: true })
   }
   clickOnBootPerformanceReport() {
      cy.get('[type="button"]').contains('Boot Performance Report').click({ force: true })
   }
   verifyBootPerformanceReport() {
      cy.get('.css-boebq5').contains('Boot Performance Report').should('be.visible', { force: true })
   }
   clickOnRecentUser() {
      cy.get('[type="button"]').contains('Recent User').click({ force: true })
   }
   verifyRecentUser() {
      cy.get('.css-1qw96cp').contains('Recent User').should('be.visible', { force: true })
   }
   //SN
   selectFilterSerialNumber() {
      cy.wait(1000)
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.serialno, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.serialno)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.serialno)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).type('VIVA')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VIVA')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).type('Test')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Test')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankSN() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).type(tdata.myFleet.serialno, { force: true })
      mf.applyElement().click({ force: true })
      cy.wait(100)
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno)
      mf.clearFilterElement().click({ force: true })
   }
   //tag
   selectFilterAssetTag() {
      cy.wait(1000)
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.assettag)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontaintag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.assettag)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualstag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequaltag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.assettag)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithtag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Ty')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Ty')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithtag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('que')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'que')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlanktag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblanktag() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.assettag, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag)
      mf.clearFilterElement().click({ force: true })
   }
   //model
   filtercontainM() {
      cy.wait(1000)
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.model)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.model)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.model)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.model)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.model)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Gen')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Gen')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('book')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'book')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankM() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.model, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.model)
      mf.clearFilterElement().click({ force: true })
   }
   //SKU
   filtercontainSKU() {
      cy.wait(1000)
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.sku)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.sku)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.sku)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('VT')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'VT')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('ric')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'ric')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankSKU() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.sku, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku)
      mf.clearFilterElement().click({ force: true })
   }
   //b
   selectFilterBuilding() {
      cy.wait(1000)
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.buildingname)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.buildingname)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.buildingname)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Pro')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Pro')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('rth')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'rth')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankB() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.buildingname, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname)
      mf.clearFilterElement().click({ force: true })
   }
   filterVToption1() {
      cy.get('[col-id="is_verified"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-filter-button > .ag-icon').scrollIntoView().click({ force: true })
      //cy.get('[data-ref="eLabel"]').find('[data-ref="eText"]').contains('VT Verified').scrollIntoView().click({ force: true })
      //mf.addFilterElement().eq(5).click({ force: true })
      cy.get('[value="Yes"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Yes')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   filterVToption2() {
      mf.addFilterElement().eq(5).click({ force: true })
      cy.get('[value="No"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'No')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   //oU
   filtercontainOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.orgUnit)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.orgUnit)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.orgUnit)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('/')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '/')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('/')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '/')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      //  cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankOU() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.orgUnit, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit)
      mf.clearFilterElement().click({ force: true })
   }
   //user
   filtercontainU() {
      cy.wait(1000)
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.user)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.user)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.user)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.user)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.user)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Ryk')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Ryk')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('son')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'son')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankU() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.user, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.user)
      mf.clearFilterElement().click({ force: true })
   }
   //warranty
   filtercontainW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.warranty)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.warranty)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.warranty)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Vivac')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Vivac')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Warranty')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Warranty')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      //  cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankW() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.warranty, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty)
      mf.clearFilterElement().click({ force: true })
   }
   //date
   filterEqualsDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.warrantyDate1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeforeDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate)
      mf.clearFilterElement().click({ force: true })
   }
   filterAfterDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', '2024-07-15')
      mf.clearFilterElement().click({ force: true })
   }
   filterBetweenDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate)
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate, { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', '2024-07-15')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate, { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankDate() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(2).type(tdata.myFleet.warrantyDate, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate1)
      mf.clearFilterElement().click({ force: true })
   }
   filterLSOption1() {
      mf.addFilterElement().eq(9).click({ force: true })
      cy.get('[value="Checked Out"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Checked Out')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   filterLSOption2() {
      mf.addFilterElement().eq(9).click({ force: true })
      cy.get('[value="In Loaner Pool"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'In Loaner Pool')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   filterLSOption3() {
      mf.addFilterElement().eq(9).click({ force: true })
      cy.get('[value="Not In Loaner Pool"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Not In Loaner Pool')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   filterLSOption4() {
      cy.get('[value="Not Set"]').click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Not Set')
      cy.get('[class="reset-button"]').click({ force: true })
   }
   //Retire-------------------------
   selectFilterSerialNumber1() {
      cy.wait(2000)
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.serialno1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSN1() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.serialno1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsSN1() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalSN1() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).type(tdata.myFleet.serialno1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.serialno1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithSN1() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).type('1CD')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '1CD')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithSN1() {

      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).type('Test')
      mf.applyElement().click({ force: true })
      cy.wait(100)
      cy.get('[row-index="0"]').should('contain', 'Test')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankSN1() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankSN1() {
      mf.addFilterElement().eq(0).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).type(tdata.myFleet.serialno1, { force: true })
      mf.applyElement().click({ force: true })
      cy.wait(100)
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.serialno1)
      mf.clearFilterElement().click({ force: true })
   }
   //tag
   selectFilterAssetTag1() {
      cy.wait(3000)
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().type(tdata.myFleet.assettag1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontaintag1() {
      cy.wait(2000)
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.assettag1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualstag1() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequaltag1() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.assettag1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.assettag1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithtag1() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Nov')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Nov')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithtag1() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('ella')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'ella')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlanktag1() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblanktag1() {
      mf.addFilterElement().eq(1).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.assettag1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.assettag1)
      mf.clearFilterElement().click({ force: true })
   }
   //model
   filtercontainM1() {
      cy.wait(2000)
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.model1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.model1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.model1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.model1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.model1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.model1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('1234')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '1234')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Ab6')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Ab6')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      //cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankM1() {
      mf.addFilterElement().eq(2).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.model1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.model1)
      mf.clearFilterElement().click({ force: true })
   }
   //SKU
   filtercontainSKU1() {
      cy.wait(2000)
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.sku1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.sku1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.sku1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.sku1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('abcd')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'abcd')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('efg')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'efg')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      //  cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankSKU1() {
      mf.addFilterElement().eq(3).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.sku1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.sku1)
      mf.clearFilterElement().click({ force: true })
   }
   //b
   selectFilterBuilding1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.buildingname1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.buildingname1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.buildingname1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.buildingname1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Ray')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Ray')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('ation')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'ation')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankB1() {
      mf.addFilterElement().eq(4).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.buildingname1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.buildingname1)
      mf.clearFilterElement().click({ force: true })
   }
   //oU
   filtercontainOU1() {
      cy.wait(2000)
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.orgUnit1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit1)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.orgUnit1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.orgUnit1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.orgUnit1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('/')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '/')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('/')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', '/')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      //cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankOU1() {
      mf.addFilterElement().eq(5).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.orgUnit1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.orgUnit1)
      mf.clearFilterElement().click({ force: true })
   }
   //user
   filtercontainU1() {
      cy.wait(2000)
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.user1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.user1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user1)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.user1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.user1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.user1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.user1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Rob')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Rob')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('mas')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'mas')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankU1() {
      mf.addFilterElement().eq(6).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.user1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.user1)
      mf.clearFilterElement().click({ force: true })
   }
   //warranty
   filtercontainW1() {
      cy.wait(2000)
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      mf.fieldValueElement().clear({ force: true }).type(tdata.myFleet.warranty1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty1)
      mf.clearFilterElement().click({ force: true })
   }
   filterDoesnotcontainW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain', tdata.myFleet.warranty1)
      mf.clearFilterElement().click({ force: true })
   }
   filterEqualsW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty1)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(tdata.myFleet.warranty1)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.warranty1)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeginswithW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(4).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Vivac')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Vivac')
      mf.clearFilterElement().click({ force: true })
   }
   filterEndswithW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type('Warranty')
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', 'Warranty')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      mf.fieldValueElement().eq(0).clear({ force: true }).type(' ', { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankW1() {
      mf.addFilterElement().eq(7).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(7).click({ force: true })
      mf.fieldValueElement().eq(1).clear({ force: true }).type(tdata.myFleet.warranty1, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warranty1)
      mf.clearFilterElement().click({ force: true })
   }
   //date
   filterEqualsDate1() {
      cy.wait(2000)
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(0).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate2)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate3)
      mf.clearFilterElement().click({ force: true })
   }
   filterNotequalDate1() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(1).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate2)
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('not.contain.value', tdata.myFleet.warrantyDate3)
      mf.clearFilterElement().click({ force: true })
   }
   filterBeforeDate1() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(2).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate2)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate)
      mf.clearFilterElement().click({ force: true })
   }
   filterAfterDate1() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate2)
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', '2024-07-15')
      mf.clearFilterElement().click({ force: true })
   }
   filterBetweenDate1() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(3).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(0).type(tdata.myFleet.warrantyDate2)
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate2, { force: true })
      mf.applyElement().click({ force: true })
      // cy.get('[row-index="0"]').should('contain', '2024-07-15')
      mf.clearFilterElement().click({ force: true })
   }
   filterBlankDate1() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(5).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate2, { force: true })
      mf.applyElement().click({ force: true })
      //cy.get('[row-index="0"]').should('contain', ' ')
      mf.clearFilterElement().click({ force: true })
   }
   filterNotblankDate1() {
      mf.addFilterElement().eq(8).click({ force: true })
      mf.fieldNameElement().eq(1).click({ force: true })
      mf.fieldOpElement().eq(6).click({ force: true })
      cy.get('[placeholder="yyyy-mm-dd"]').eq(1).type(tdata.myFleet.warrantyDate2, { force: true })
      mf.applyElement().click({ force: true })
      cy.get('[row-index="0"]').should('contain', tdata.myFleet.warrantyDate3)
      mf.clearFilterElement().click({ force: true })
   }
   sortingSN() {
      cy.wait(1000)
      mf.optionElement().eq(1).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(1).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(1).click({ force: true })
         .click({ force: true })
   }
   sortingATag() {
      cy.wait(1000)
      mf.optionElement().eq(2).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(2).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(2).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingModel() {
      cy.wait(1000)
      mf.optionElement().eq(3).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(3).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(3).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingSKU() {
      cy.wait(1000)
      mf.optionElement().eq(4).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(4).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(4).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingBuilding() {
      cy.wait(1000)
      mf.optionElement().eq(5).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(5).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(5).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingSN1() {
      cy.wait(1000)
      mf.optionElement().eq(1).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(1).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(1).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingATag1() {
      cy.wait(1000)
      mf.optionElement().eq(2).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(2).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(2).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingModel1() {
      cy.wait(1000)
      mf.optionElement().eq(3).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(3).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(3).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingSKU1() {
      cy.wait(1000)
      mf.optionElement().eq(4).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(4).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(4).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
   sortingBuilding1() {
      cy.wait(1000)
      mf.optionElement().eq(5).click({ force: true })
      mf.sortAscendingElement().click({ force: true })
      mf.optionElement().eq(5).click({ force: true })
      mf.sortDescendingElement().click({ force: true })
      mf.optionElement().eq(5).click({ force: true })
      mf.clearSortElement().click({ force: true })
   }
}
export default MyFleetActions 