/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class UsersElements {
    filtersElement() {
        return cy.get(locator.users.filters, {
            timeout: 30000,
        })
    }
    tableElement() {
        return cy.get(locator.users.table, {
            timeout: 30000,
        })
    }
    addnewUserbtnElement() {
        return cy.get(locator.users.addnewUserbtn, {
            timeout: 30000,
        })
    }
    titleElement() {
        return cy.get(locator.users.title, {
            timeout: 30000,
        })
    }
    fullnameElement() {
        return cy.get(locator.users.fullname, {
            timeout: 30000,
        })
    }
    emailElement() {
        return cy.get(locator.users.email, {
            timeout: 30000,
        })
    }
    phoneElement() {
        return cy.get(locator.users.phone, {
            timeout: 30000,
        })
    }
    cellnumberElement() {
        return cy.get(locator.users.cellnumber, {
            timeout: 30000,
        })
    }
    submitElement() {
        return cy.get(locator.users.submit, {
            timeout: 30000,
        })
    }
    searchElement() {
        return cy.get(locator.users.search, {
            timeout: 30000,
        })
    }
    userroleElement() {
        return cy.get(locator.users.userrole, {
            timeout: 30000,
        })
    } 
    userstatusElement() {
        return cy.get(locator.users.userstatus, {
            timeout: 30000,
        })
    }
    inhouserepaireElement() {
        return cy.get(locator.users.inhouserepaire, {
            timeout: 30000,
        })
    }
    editsubmitElement() {
        return cy.get(locator.users.editsubmit, {
            timeout: 30000,
        })
    }
    bulkupdatebtnElement() {
        return cy.get(locator.users.bulkupdatebtn, {
            timeout: 30000,
        })
    }
    editbtnElement() {
        return cy.get(locator.users.editbtn, {
            timeout: 30000,
        })
    }
    deletebtnElement() {
        return cy.get(locator.users.deletebtn, {
            timeout: 30000,
        })
    }
    conDeletebtnElement() {
        return cy.contains(locator.users.conDeletebtn, {
            timeout: 30000,
        })
    }
    downloadbtnElement() {
        return cy.get(locator.users.downloadbtn, {
            timeout: 30000,
        })
    }
    fieldNameElement() {
        return cy.get(locator.users.fieldName, {
            timeout: 30000,
        });
    }
    fieldValueElement() {
        return cy.get(locator.users.fieldValue, {
            timeout: 30000,
        });
    }
    fieldOpElement() {
        return cy.get(locator.users.fieldOp, {
            timeout: 30000,
        });
    }
    applyElement() {
        return cy.get(locator.users.apply, {
            timeout: 30000,
        });
    }
   buildingElement() {
        return cy.get(locator.users.building, {
            timeout: 30000,
        });
    }
    addFilterElement() {
        return cy.get(locator.users.addFilter, {
            timeout: 30000,
        });
    }
    clearFilterElement() {
        return cy.get(locator.users.clearFilter, {
            timeout: 30000,
        });
    }
   viewElement() {
        return cy.get(locator.users.view, {
            timeout: 30000,
        });
    }
    recordidElement() {
        return cy.get(locator.users.recordid, {
            timeout: 30000,
        });
    } 
    expandElement() {
        return cy.get(locator.users.expand, {
            timeout: 30000,
        });
    } 
    checkbox1Element() {
        return cy.get(locator.users.checkbox1, {
            timeout: 30000,
        });
    } 
   checkbox2Element() {
        return cy.get(locator.users.checkbox2, {
            timeout: 30000,
        });
    } 
    checkbox3Element() {
        return cy.get(locator.users.checkbox3, {
            timeout: 30000,
        });
    } 
   checkbox4Element() {
        return cy.get(locator.users.checkbox4, {
            timeout: 30000,
        });
    } 
    exportElement() {
        return cy.get(locator.users.export, {
            timeout: 30000,
        });
    }
    uploadElement(){
        return cy.get(locator.users.upload, {
            timeout: 30000,
        })
    }

}
