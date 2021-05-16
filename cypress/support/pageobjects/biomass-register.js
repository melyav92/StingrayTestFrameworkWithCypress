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

}