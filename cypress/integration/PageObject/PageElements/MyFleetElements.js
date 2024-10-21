/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class MyFleetElements {
    titleElement() {
        return cy.contains(locator.myFleet.title, {
            timeout: 30000,
        })
    }
    filtersElement() {
        return cy.get(locator.myFleet.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.myFleet.table, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.myFleet.search, {
            timeout: 30000,
        });
    }
    fieldnameElement() {
        return cy.get(locator.myFleet.fieldname, {
            timeout: 30000,
        });
    }
    fieldvalueElement() {
        return cy.get(locator.myFleet.fieldvalue, {
            timeout: 30000,
        });
    }
    fieldoperationElement() {
        return cy.get(locator.myFleet.fieldoperation, {
            timeout: 30000,
        });
    }
    applyElement() {
        return cy.get(locator.myFleet.apply, {
            timeout: 30000,
        });
    }
    studentinfoElement() {
        return cy.get(locator.myFleet.studentinfo, {
            timeout: 30000,
        });
    }
    buildingElement() {
        return cy.get(locator.myFleet.building, {
            timeout: 30000,
        });
    }
    updatebtnElement() {
        return cy.contains(locator.myFleet.updatebtn, {
            timeout: 30000,
        });
    }
    addFilterElement() {
        return cy.get(locator.myFleet.addFilter, {
            timeout: 30000,
        });
    }
    clearFilterElement() {
        return cy.get(locator.myFleet.clearFilter, {
            timeout: 30000,
        });
    }
    addfilterGroupElement() {
        return cy.contains(locator.myFleet.addfilterGroup, {
            timeout: 30000,
        });
    }
    exportcsvElement() {
        return cy.get(locator.myFleet.exportcsv, {
            timeout: 30000,
        });
    }
    viewElement() {
        return cy.contains(locator.myFleet.view, {
            timeout: 30000,
        });
    }
    serialNoElement() {
        return cy.get(locator.myFleet.serialNo, {
            timeout: 30000,
        });
    }
    deviceidElement() {
        return cy.get(locator.myFleet.deviceid, {
            timeout: 30000,
        });
    }
    assetTagElement() {
        return cy.get(locator.myFleet.assetTag, {
            timeout: 30000,
        });
    }
    studentidElement() {
        return cy.get(locator.myFleet.studentid, {
            timeout: 30000,
        });
    }
    lonarstatusElement() {
        return cy.get(locator.myFleet.lonarstatus, {
            timeout: 30000,
        });
    }
    devicestatusElement() {
        return cy.get(locator.myFleet.devicestatus, {
            timeout: 30000,
        });
    }
    submitbtnElement() {
        return cy.contains(locator.myFleet.submitbtn, {
            timeout: 30000,
        });
    }
    addDeviceElement() {
        return cy.get(locator.myFleet.addDevice, {
            timeout: 30000,
        });
    }
    fieldNameElement() {
        return cy.get(locator.myFleet.fieldName, {
            timeout: 30000,
        })
    }
    fieldOpElement() {
        return cy.get(locator.myFleet.fieldOp, {
            timeout: 30000,
        })
    }
    fieldValueElement() {
        return cy.get(locator.myFleet.fieldValue, {
            timeout: 30000,
        })
    }
    applyElement() {
        return cy.get(locator.myFleet.apply, {
            timeout: 30000,
        })
    }
    deviceIconElement() {
        return cy.get(locator.myFleet.deviceIcon, {
            timeout: 30000,
        })
    }
    googleIconElement() {
        return cy.get(locator.myFleet.googleIcon, {
            timeout: 30000,
        })
    }
    orgUnitElement() {
        return cy.get(locator.myFleet.orgUnit, {
            timeout: 30000,
        })
    }
    assetIdElement() {
        return cy.get(locator.myFleet.assetId, {
            timeout: 30000,
        })
    }
    locationElement() {
        return cy.get(locator.myFleet.location, {
            timeout: 30000,
        })
    }
    notesElement() {
        return cy.get(locator.myFleet.notes, {
            timeout: 30000,
        })
    }
    addLoanerElement() {
        return cy.contains(locator.myFleet.addLoaner, {
            timeout: 30000,
        });
    }
    editDeviceElement() {
        return cy.contains(locator.myFleet.editDevice, {
            timeout: 30000,
        });
    }
    createTicketElement() {
        return cy.contains(locator.myFleet.createTicket, {
            timeout: 30000,
        });
    }
    savebtnElement() {
        return cy.contains(locator.myFleet.savebtn, {
            timeout: 30000,
        });
    }
    failuretypeElement() {
        return cy.get(locator.myFleet.failuretype, {
            timeout: 30000,
        })
    }
    returnsiteElement() {
        return cy.get(locator.myFleet.returnsite, {
            timeout: 30000,
        })
    }
    chromebookissueElement() {
        return cy.get(locator.myFleet.chromebookissue, {
            timeout: 30000,
        })
    }
    descriptionElement() {
        return cy.get(locator.myFleet.description, {
            timeout: 30000,
        })
    }
    optionElement() {
        return cy.get(locator.myFleet.option, {
            timeout: 30000,
        })
    }
    sortAscendingElement() {
        return cy.contains(locator.myFleet.sortAscending, {
            timeout: 30000,
        })
    }
    sortDescendingElement() {
        return cy.contains(locator.myFleet.sortDescending, {
            timeout: 30000,
        })
    }
    clearSortElement() {
        return cy.contains(locator.myFleet.clearSort, {
            timeout: 30000,
        })
    }
    filterHelpElement() {
        return cy.get(locator.myFleet.filterHelp, {
            timeout: 30000,
        })
    }
}
