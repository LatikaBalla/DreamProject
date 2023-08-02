/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class BuildingsElements {
    searchElement() {
        return cy.get(locator.buildings.search, {
            timeout: 30000,
        })
    }
    editIconElement(){
        return cy.get(locator.buildings.editIcon, {
            timeout: 30000,
        })
    }
    deleteIconElement(){
        return cy.get(locator.buildings.deleteIcon, {
            timeout: 30000,
        })
    }
    confirmdeleteElement(){
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
    tablebuildingElement(){
        return cy.get(locator.buildings.tablebuilding, {
            timeout: 30000,
        })
    }
    baddressElement(){
        return cy.get(locator.newbuilding.baddress, {
            timeout: 30000,
        })
    } saddressElement(){
        return cy.get(locator.newbuilding.saddress, {
            timeout: 30000,
        })
    }
    bcityElement(){
        return cy.get(locator.newbuilding.bcity, {
            timeout: 30000,
        })
    }
    scityElement(){
        return cy.get(locator.newbuilding.scity, {
            timeout: 30000,
        })
    }
    bstateElement(){  
        return cy.get(locator.newbuilding.bstate, {
            timeout: 30000,
        })
    }
    sstateElement(){  
        return cy.get(locator.newbuilding.sstate, {
            timeout: 30000,
        })
    }
    bcountryElement(){
        return cy.get(locator.newbuilding.bcountry, {
            timeout: 30000,
        }) 
    }
    scountryElement(){
        return cy.get(locator.newbuilding.scountry, {
            timeout: 30000,
        })
    }
    bzipcodeElement(){
        return cy.get(locator.newbuilding.bzipcode, {
            timeout: 30000,
        })
    }
    szipcodeElement(){
        return cy.get(locator.newbuilding.szipcode, {
            timeout: 30000,
        })
    }
    buildingnameElement(){
        return cy.get(locator.newbuilding.buildingname, {
            timeout: 30000,
        })
    }
    phoneElement(){
        return cy.get(locator.newbuilding.phone, {
            timeout: 30000,
        })
    }
    extensionElement(){
        return cy.get(locator.newbuilding.extension, {
            timeout: 30000,
        })
    }
    defaultbuildingElement(){
        return cy.get(locator.newbuilding.defaultbuilding, {
            timeout: 30000,
        })
    }
    buildingimgElement(){
        return cy.get(locator.newbuilding.buildingimg, {
            timeout: 30000,
        })
    }
    savebtnElement(){
        return cy.get(locator.newbuilding.savebtn, {
            timeout: 30000,
        })
    }
//edit
editbuildingnameElement(){
    return cy.get(locator.editbuilding.buildingname, {
        timeout: 30000,
    })
}
editphoneElement(){
    return cy.get(locator.editbuilding.phone, {
        timeout: 30000,
    })
}
editextensionElement(){
    return cy.get(locator.editbuilding.extension, {
        timeout: 30000,
    })
}
editdefaultbuildingElement(){
    return cy.get(locator.editbuilding.defaultbuilding, {
        timeout: 30000,
    })
}
editbuildingimgElement(){
    return cy.get(locator.editbuilding.buildingimg, {
        timeout: 30000,
    })
}
updatebtnElement(){
    return cy.get(locator.editbuilding.updatebtn, {
        timeout: 30000,
    })
}


    
  


  
}