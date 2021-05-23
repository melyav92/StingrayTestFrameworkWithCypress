export class BiomassRegister{
    addNewBiomassCountButton(){
        return cy.get('#add-new-biomass-btn')
    }
    pageDataIsLoaded(){
        cy.intercept('GET', '/api/biomass/get-pens').as('getPens')
        cy.wait('@getPens').its('response.statusCode')
            .should('eq', 200);

        this.loadingSpinner()
            .should('not.be.visible')
    };
    getPenObjectByName(penName){
        return cy.contains('.scp-pen-code', penName)
    };
    loadingSpinner(){
       return  cy.get('#loading-spinner-overlay')
    }
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
    };
    saveButton(){
        return cy.get('#save-btn')
    };
    toasterPopup(){
        return cy.get('div.toast-title')
    };





    expandBiomassReportsListItem (){
        return cy.get('.scp-expandable-area-button-text')
    };

    deleteBiomassReportItem(reportDate){
        this.loadingSpinner().should('not.be.visible')
        return  cy.get(`[data-counted-date="${reportDate}"]`)
    };
    confirmDeleteReportButton(){
        cy.wait(500)
        return cy.get('.confirm')
    };

    biomassReportIsLoaded(){
        cy.intercept('GET', '/api/biomass/get-pens').as('getPens')
        cy.wait('@getPens').its('response.statusCode')
             .should('eq', 200);

        this.loadingSpinner()
            .should('not.be.visible')
    };

    addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
                     penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate   ){

        this.addNewBiomassCountButton().click()
        this.openDatePicker().click()
        this.selectCurrentDate().click()
        this.seaTemperatureInput().type(seaTemperature)
        this.openPensDropdown().click()
        this.selectPen(penM1).click()
        this.openPensDropdown().click()
        this.selectPen(penM2).click()
        this.addPensButton().click()
        this.addAverageWeightValue(penM1).type(averageWeightValueForM1)
        this.addNumberOfFishValue(penM1).clear().type(numberOfFishValueForPenM1)

        this.addCommentForPen(penM1).type(penM1Comment)
        this.addNumberOfFishValue(penM2).clear().type(numberOfFishValueForPenM2);
        this.addAverageWeightValue(penM2).type(averageWeightValueForM2)
        this.addCommentForPen(penM2).type(penM2Comment)
        this.saveButton().click()
        this.toasterPopup()
            .should('have.text',successfulToasterPopupMessage)
        this.biomassReportIsLoaded()
    }

    deleteBiomassReport(reportDate){
        this.expandBiomassReportsListItem().click()
        this.deleteBiomassReportItem(reportDate).click()
        this.confirmDeleteReportButton().click()
        this.deleteBiomassReportItem(reportDate)
            .should('not.contain', reportDate)

    }


}