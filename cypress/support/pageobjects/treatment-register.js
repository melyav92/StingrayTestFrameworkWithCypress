//login and go to the treatment register
Cypress.Commands.add("Login", function (username, password) {
    cy.get('#Username').type(username)
    cy.get('#Password').type(password)
    cy.get('#login-button').click()
})

/*Cypress.Commands.add("LoginToTreatmentRegisterPage", function (){
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    cy.get('#Username').type('bolacslu')
    cy.get('#Password').type(123456)
    cy.get('#login-button').click()
})
 */

export class TreatmentRegister {
    pageDataIsLoaded(){
        cy.intercept('GET', '/api/treatments/treatment-dates').as('getAllTreatments')
        cy.intercept('GET', '/api/pen/pens-latest-fish-stock-before-date').as('getPenFishStock')
        cy.wait('@getAllTreatments').its('response.statusCode').should('eq', 200);
        cy.wait('@getPenFishStock').its('response.statusCode').should('eq', 200);
        let loadingSpinner = cy.get('#loading-spinner-overlay')
        loadingSpinner.should('not.be.visible')
    }

    addNewTreatmentButton(){
              return cy.get('#add-new-treatment-btn')
    };
    getPenObjectByName(penName){
        return cy.get('div.scp-pen-code').contains(penName)
    }

    openDatePicker(){
        let dataTableIsEmpty = cy.get('.dataTables_empty').contains('No data available in table')
            dataTableIsEmpty.should('be.visible')
        return cy.get('#counted-date-date-picker')
    }

    selectCurrentDate(){
       const currentDate =  Cypress.moment().format('D')
       return cy.get('.day:not(.new):not(.old)').contains(currentDate)
    }

    openPensDropdown(){
        return cy.get('#pens_selector_chosen')
    }

    selectPen(penName){
       return cy.get('li.active-result').contains(penName)
    }

     selectTreatmentTypeForAllPens(treatmentType){
        return cy.get('#treatment-selector-for-all-pens').select(treatmentType)
    }

    addPensButton (){
        return cy.get('#add-new-treatment-for-pens-btn')
    }

   commentForPen(penName){
        return this.getPenObjectByName(penName).parent().next().next()
      // let penIdDataAttribute = this.getPenObjectByName(penName).invoke('attr', 'data-pen-id').toString()
       //const penIdDataAttribute = this.getPenObjectByName(penName).get('[data-pen-id]')

       /*let penIdDataAttribute = cy.get('div.scp-pen-code').contains(penName).then(elem => {
           let dataPenId = elem.attr("data-pen-id");
           cy.log(dataPenId);
       })
        */
     // cy.log(cy.get('div.scp-pen-code').contains(penName).parent().next().next())
       //const penIdDataAttribute  = this.getPenObjectByName(penName).attribute('data-pen-id')
      // cy.log(typeof(penIdDataAttribute))
       //cy.log(penIdDataAttribute.length)
       //cy.log(penIdDataAttribute)


       //return cy.get('input.comment-input[data-pen-id="4042"]')
     //return cy.get(`input.comment-input[data-pen-id='${penIdDataAttribute}']`)
      // return cy.get('input.comment-input[data-pen-id="4042"]')
   }

//addFishPenCountInput
   addFishPenCount(penName){
       return this.getPenObjectByName(penName).parent().next().next().next()
   }

   saveButton(){
       return cy.get('#save-btn')
   }

   toasterPopup(){
       return cy.get('div.toast-title')
   }

   treatmentTypeForThePen(penName) {
       return this.getPenObjectByName(penName).parent().next().children('select').find('option:selected')
   }

  fishCountValueInTable (penName){
      return this.getPenObjectByName(penName).parent().next().next().next().children().children('input')
  }

    expandTreatmentReportsList (){
        return cy.get('.scp-expandable-area-button-text')
    }
  deleteTreatmentReportItem(){
        return cy.get('a.scp-registered-date.scp-treatment-date.selected').prev()
  }
  confirmDeleteButton(){
        cy.wait(500)
        return cy.get('.confirm')
    }
addTreatmentReport(penM1,penM2,treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount){
        this.addNewTreatmentButton().click()
        this.openDatePicker().click();
        this.selectCurrentDate().click()
        this.openPensDropdown().click()
        this.selectPen(penM1).click()
        this.openPensDropdown().click()
        this.selectPen(penM2).click()
        this.selectTreatmentTypeForAllPens(treatmentTypeForAllPens)
        this.addPensButton().click()
        this.commentForPen(penM1).type(penM1Comment)
        this.commentForPen(penM2).type(penM2Comment)
        this.addFishPenCount(penM1).clear().type(penM1FishPenCount)
        this.addFishPenCount(penM2).clear().type(penM2FishPenCount)
        this.saveButton().click()
}
deleteReport(){
        this.expandTreatmentReportsList().click();
        this.deleteTreatmentReportItem().click()
        this.confirmDeleteButton().click()
}





}



