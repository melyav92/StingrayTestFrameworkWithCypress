//login
Cypress.Commands.add("Login", function (username, password) {
    cy.get('#Username').type(username)
    cy.get('#Password').type(password)
    cy.get('#login-button').click()
})

export class TreatmentRegister {
    pageDataIsLoaded(){
        cy.intercept('GET', '/api/treatments/treatment-dates').as('getAllTreatments')
        cy.intercept('GET', '/api/pen/pens-latest-fish-stock-before-date').as('getPenFishStock')
        cy.wait('@getAllTreatments').its('response.statusCode')
            .should('eq', 200);
        cy.wait('@getPenFishStock').its('response.statusCode')
            .should('eq', 200);
        let loadingSpinner = cy.get('#loading-spinner-overlay')
        loadingSpinner.should('not.be.visible')
    };

    addNewTreatmentButton(){
              return cy.get('#add-new-treatment-btn')
    };

    getPenObjectByName(penName){
        return cy.contains('.scp-pen-code', penName)
    };

    openDatePicker(){
        let dataTableIsEmpty = cy.get('.dataTables_empty')
            .contains('No data available in table')
        dataTableIsEmpty.should('be.visible')
        return cy.get('#counted-date-date-picker')
    };

    selectCurrentDate(){
       const currentDate =  Cypress.moment().format('D')
       return cy.get('.day:not(.new):not(.old)').contains(currentDate)
    };

    openPensDropdown(){
        return cy.get('#pens_selector_chosen')
    };

    selectPen(penName){
       return cy.get('li.active-result').contains(penName)
    };

     selectTreatmentTypeForAllPens(treatmentType){
        return cy.get('#treatment-selector-for-all-pens').select(treatmentType)
    };

    addPensButton (){
        return cy.get('#add-new-treatment-for-pens-btn')
    };

   commentForPen(penName){
       return this.getPenObjectByName(penName)
           .parents("tr")
           .find('.comment-input')
   };

   addFishPenCount(penName){
       return this.getPenObjectByName(penName)
           .parents("tr")
           .find('.scp-fish-per-pen-input')
   };

   saveButton(){
       return cy.get('#save-btn')
   };

   toasterPopup(){
       return cy.get('div.toast-title')
   };

   treatmentTypeForThePen(penName) {
       return this.getPenObjectByName(penName).parent().next().children('select').find('option:selected')
   };

  fishCountValueInTable (penName){
      return this.getPenObjectByName(penName).parent().next().next().next().children().children('input')
  };

  expandTreatmentReportsList (){
        return cy.get('.scp-expandable-area-button-text')
    };

  deleteTreatmentReportItem(){
        return cy.get('a.scp-registered-date.scp-treatment-date.selected').prev()
  };
  confirmDeleteButton(){
        cy.wait(500)
        return cy.get('.confirm')
  };

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
  };

  deleteReport(){
        this.expandTreatmentReportsList().click();
        this.deleteTreatmentReportItem().click()
        this.confirmDeleteButton().click()
  };





}



