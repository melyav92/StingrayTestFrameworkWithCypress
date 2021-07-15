export class HarvestRegister{

    pageDataIsLoaded(locationId){
        cy.intercept('GET', `/api/harvests/harvest?locationId=${locationId}`).as('getHarvestReports')
        cy.wait('@getHarvestReports').its('response.statusCode')
            .should('eq', 200);

         this.loadingSpinner()
             .should('not.be.visible')
    };
    loadingSpinner(){
        return  cy.get('#loading-spinner-overlay')
    };
    sendDeleteReportRequestForTheCurrentDate(locationId){
        const deleteReportDate = Cypress.moment().format("YYYY-MM-DD");
        cy.request({
            method: 'DELETE',
            url: `/api/harvests/harvest?locationId=${locationId}&date=${deleteReportDate}`,
            //failOnStatusCode: false
        })
    }
    addNewHarvestCountBtn(){
        return cy.get('#add-new-harvest-btn')
    };
   openDatePicker(){
       cy.wait(500)
        return  cy.get('#counted-date-date-picker')
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
    addPensButton (){
        return cy.get('#add-new-harvest-for-pen-btn')
    };
    getPenObjectByName(penName){
        return cy.contains('.scp-pen-code', penName)
    };
    addFishHarvestedValue(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="fish-harvested"]')
    }
    addAverageHarvestWeightValue(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="average-weight"]')
    }
    addFishPenAfterHarvestValue(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="fish-per-pen"]')
    }
    addCommentForPen(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="comment"]')
    }
    saveButton(){
        return cy.get('#save-btn')
    };
    toasterPopup(){
        return cy.get('div.toast-title')
    };
    expandHarvestReportsListItem(){
        return cy.get('.scp-expandable-area-button-text')
    };
    reportExistsInTheList(reportDate){
        this.loadingSpinner().should('not.be.visible')
        return  cy.get(`[data-counted-date="${reportDate}"]`)
    };
    deleteHarvestReportItem(){
        return cy.get('a.scp-registered-date.scp-harvest-date.selected').prev()
    };



}