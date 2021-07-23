export class ManualLiceRegister{
    loadingSpinner(){
        return  cy.get('.scp-data-loading-text')
    };

    calendarPageIsLoaded(){
        return cy.get('.months-container')
            .should('be.visible')
    }

    sendDeleteReportRequest(locationId, deleteReportDate = Cypress.moment().format("YYYY-MM-DD")){
        cy.request({
            method: 'DELETE',
            url: `api/lice-count/delete?locationId=${locationId}&date=${deleteReportDate}`,
            //failOnStatusCode: false
        })
    }

    addNewButton(){
        return cy.get('#scp-lc-add-btn')
    }

    datePicker(){
        return  cy.get('#counted-date-date-picker')
    };

    selectCurrentDate(currentDate =  Cypress.moment().format('D')){
      this.datePicker().click()
      return cy.get('.day:not(.new):not(.old)')
            .contains(currentDate)
            .click()
    };

    seaTemperatureInput(){
        return cy.get('#temperature-edit')
    };

    triggerLevelInput(){
        return cy.get('#trigger-level-edit')
    }

    penDropdown(){
        return cy.get('#pens-selector')
    };

    addPenButton(){
        return cy.get('#add-new-lice-count-for-pen-btn')
    };

    getPenObjectByName(penName){
        return cy.contains('.scp-pen-code', penName)
    };

    fixedStagesInput(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="fixedStage"]')
            .filter('[data-lice-counting-mode="2"]')
    }

    mobilesInput(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="mobiles"]')
            .filter('[data-lice-counting-mode="2"]')
    };

    adultsFemalesInput(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="adultFemales"]')
            .filter('[data-lice-counting-mode="2"]')
    };

    calligusInput(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="calligus"]')
            .filter('[data-lice-counting-mode="2"]')
    };

    fishCountImput(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="fish"]')
    }

    commentForPenInput(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="comments"]')
    };

    saveButton(){
        return cy.get('#save-btn')
    };

    toasterPopup(){
        return cy.get('div.toast-message')
    };

    reportCountedDate(){
       return cy.get('#scp-lice-count-date-value')
    }




}