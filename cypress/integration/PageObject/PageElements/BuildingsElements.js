/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class BuildingsElements {
    searchElement() {
        return cy.get(locator.buildings.search, {
            timeout: 30000,
        })
    }
    editIconElement() {
        return cy.get(locator.buildings.editIcon, {
            timeout: 30000,
        })
    }
    deleteIconElement() {
        return cy.get(locator.buildings.deleteIcon, {
            timeout: 30000,
        })
    }
    confirmdeleteElement() {
        return cy.get(locator.buildings.confirmdelete, {
            timeout: 30000,
        })
    }
    titleElement() {
        return cy.contains(locator.buildings.title, {
            timeout: 30000,
        })
    }
    addnewbtnElement() {
        return cy.get(locator.buildings.addnewbtn, {
            timeout: 30000,
        })
    }
    addFilterElement() {
        return cy.get(locator.buildings.addFilter, {
            timeout: 30000,
        })
    }
    refreshbtnElement() {
        return cy.get(locator.buildings.refreshbtn, {
            timeout: 30000,
        })
    }
    tablebuildingElement() {
        return cy.get(locator.buildings.tablebuilding, {
            timeout: 30000,
        })
    }
    saddressElement() {
        return cy.get(locator.newbuilding.saddress, {
            timeout: 30000,
        })
    }
    buildingnameElement() {
        return cy.get(locator.newbuilding.buildingname, {
            timeout: 30000,
        })
    }
    buildingIdElement() {
        return cy.get(locator.newbuilding.buildingId, {
            timeout: 30000,
        })
    }
    phoneElement() {
        return cy.get(locator.newbuilding.phone, {
            timeout: 30000,
        })
    }
    extensionElement() {
        return cy.get(locator.newbuilding.extension, {
            timeout: 30000,
        })
    }
    defaultbuildingElement() {
        return cy.get(locator.newbuilding.defaultbuilding, {
            timeout: 30000,
        })
    }
    savebtnElement() {
        return cy.get(locator.newbuilding.savebtn, {
            timeout: 30000,
        })
    }
    filtersElement(){
        return cy.get(locator.buildings.filters, {
            timeout: 30000,
        })
    }
    buildabbreviationElement(){
        return cy.get(locator.newbuilding.buildabbreviation, {
            timeout: 30000,
        })
    }
    //edit
    buildingIconElement() {
        return cy.get(locator.editbuilding.buildingIcon, {
            timeout: 30000,
        })
    }
    editbuildingnameElement() {
        return cy.get(locator.editbuilding.buildingname, {
            timeout: 30000,
        })
    }
    editphoneElement() {
        return cy.get(locator.editbuilding.phone, {
            timeout: 30000,
        })
    }
    editextensionElement() {
        return cy.get(locator.editbuilding.extension, {
            timeout: 30000,
        })
    }
    editdefaultbuildingElement() {
        return cy.get(locator.editbuilding.defaultbuilding, {
            timeout: 30000,
        })
    }
    updatebtnElement() {
        return cy.get(locator.editbuilding.updatebtn, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.buildings.fieldName, {
            timeout: 30000,
        });
    }
    fieldValueElement() {
        return cy.get(locator.buildings.fieldValue, {
            timeout: 30000,
        });
    }
    fieldOpElement() {
        return cy.get(locator.buildings.fieldOp, {
            timeout: 30000,
        });
    }
    applyElement() {
        return cy.get(locator.buildings.apply, {
            timeout: 30000,
        });
    }
    clearFilterElement() {
        return cy.get(locator.buildings.clearFilter, {
            timeout: 30000,
        });
    }
    detailsBuildingnameElement() {
        return cy.get(locator.buildings.detailsBuildingname, {
            timeout: 30000,
        });
    }
    checkElement() {
        return cy.get(locator.newbuilding.check, {
            timeout: 30000,
        });
    }
    buildingnamedropElement() {
        return cy.get(locator.buildings.buildingnamedrop, {
            timeout: 30000,
        });
    }
    shippingaddressElement() {
        return cy.get(locator.buildings.shippingaddress, {
            timeout: 30000,
        });
    }
    phonedropElement() {
        return cy.get(locator.buildings.phonedrop, {
            timeout: 30000,
        });
    }
    searchboxElement() {
        return cy.get(locator.buildings.searchbox, {
            timeout: 30000,
        });
    }
    exportElement() {
        return cy.contains(locator.buildings.export, {
            timeout: 30000,
        });
    }
    uploadElement(){
        return cy.get(locator.buildings.upload, {
            timeout: 30000,
        })
    }

}
