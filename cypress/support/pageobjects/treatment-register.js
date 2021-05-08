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
        cy.get('#loading-spinner-overlay').should('not.be.visible')
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

   addCommentForPen(penName){
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

   selectedTreatmentTypeForThePen(penName) {
       return this.getPenObjectByName(penName)
           .parents("tr")
           .find('.scp-white-select option:selected')
   };

  verifyFishCountValueInTable (penName){
      return this.getPenObjectByName(penName)
          .parents("tr")
          .find('.scp-fish-per-pen-input')
  };

  expandTreatmentReportsListItem (){
        return cy.get('.scp-expandable-area-button-text')
    };

  deleteTreatmentReportItem(){
        return cy.get('a.scp-registered-date.scp-treatment-date.selected').prev()
  };
  confirmDeleteReportButton(){
        cy.wait(500)
        return cy.get('.confirm')
  };
   selectTreatmentTypeForPen(penName,treatmentType){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.scp-white-select')
            .select(treatmentType)
   };

    treatmentReportIsLoaded(){
        cy.intercept('GET', '/api/treatments/treatment-dates').as('getAllTreatments')
        cy.intercept('GET', '/api/treatments/treatment?locationId').as('getTreatment')
        cy.wait('@getAllTreatments').its('response.statusCode')
            .should('eq', 200);
        cy.wait('@getTreatment').its('response.statusCode')
            .should('eq', 200);
        cy.get('#loading-spinner-overlay').should('not.be.visible')
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
        this.addCommentForPen(penM1).type(penM1Comment)
        this.addFishPenCount(penM1).clear().type(penM1FishPenCount)
        this.addCommentForPen(penM2).type(penM2Comment)
        this.addFishPenCount(penM2).clear().type(penM2FishPenCount)
        this.saveButton().click()
        this.treatmentReportIsLoaded()
    };

  deleteReport(){
        this.expandTreatmentReportsListItem().click();
        this.deleteTreatmentReportItem().click()
        this.confirmDeleteReportButton().click()

  };

}



