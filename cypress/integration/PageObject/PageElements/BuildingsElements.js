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
        return cy.contains(locator.buildings.addnewbtn, {
            timeout: 30000,
        })
    }
    addfilterbtnElement() {
        return cy.get(locator.buildings.addfilterbtn, {
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
    baddressElement() {
        return cy.get(locator.newbuilding.baddress, {
            timeout: 30000,
        })
    } 
    buildingnameElement() {
        return cy.get(locator.newbuilding.buildingname, {
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
    //edit
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
    fieldnameElement() {
        return cy.get(locator.buildings.fieldname, {
            timeout: 30000,
        });
    }
    fieldvalueElement() {
        return cy.get(locator.buildings.fieldvalue, {
            timeout: 30000,
        });
    }
    fieldoperationElement() {
        return cy.get(locator.buildings.fieldoperation, {
            timeout: 30000,
        });
    }
    applybtnElement() {
        return cy.get(locator.buildings.applybtn, {
            timeout: 30000,
        });
    }
    morefiltersbtnElement() {
        return cy.contains(locator.buildings.morefiltersbtn, {
            timeout: 30000,
        });
    }
    clearfilterbtnElement() {
        return cy.contains(locator.buildings.clearfilterbtn, {
            timeout: 30000,
        });
    }
    addfilterElement() {
        return cy.contains(locator.buildings.addfilter, {
            timeout: 30000,
        });
    }  
    detailsBuildingnameElement() {
        return cy.get(locator.buildings.detailsBuildingname, {
            timeout: 30000,
        });
    }
    checkElement(){
        return cy.get(locator.newbuilding.check, {
            timeout: 30000,
        });
    }
}