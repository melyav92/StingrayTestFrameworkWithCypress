export class BiomassRegister{
    addNewBiomassCountButton(){
        return cy.get('#add-new-biomass-btn')
    }
    getPenObjectByName(penName){
        return cy.contains('.scp-pen-code', penName)
    };
    openDatePicker(){
        return cy.get('#counted-date-date-picker')
    };
    selectCurrentDate(){
        const currentDate =  Cypress.moment().format('D')
        return cy.get('.day:not(.new):not(.old)').contains(currentDate)
    };

    seaTemperatureInput(){
        return cy.get('#temperature-edit')
    }
    openPensDropdown(){
        return cy.get('#pens_selector_chosen')
    };

    selectPen(penName){
        return cy.get('li.active-result').contains(penName)
    };
    addPensButton (){
        return cy.get('#add-new-biomass-for-pen-btn')
    };
    addNumberOfFishValue(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.scp-fish-per-pen-input')
    };
    addAverageWeightValue(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="biomass-average-weight"]')
    };
    addCommentForPen(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="biomass-comment"]')
    }




    saveButton(){
        return cy.get('#save-btn')
    };
    toasterPopup(){
        return cy.get('div.toast-title')
    };
    expandBiomassReportsListItem (){
        return cy.get('.scp-expandable-area-button-text')
    };

    deleteBiomassReportItem(){
        return cy.get('a.scp-registered-date.scp-biomass-date.selected').prev()
    };
    confirmDeleteReportButton(){
        cy.wait(500)
        return cy.get('.confirm')
    };

    biomassReportNotExistInTheList (reportDate){
        // cy.intercept('GET', ' /api/biomass/get').as('getReports')
        // cy.wait('@getReports').its('response.statusCode')
        //     .should('eq', 200);
        //const reportDate = Cypress.moment().format("DD/MM/YYYY")
        cy.wait(2000)
        return  cy.get(`[data-counted-date="${reportDate}"]`)
    }



}