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
    };

    datePicker(){
        return cy.get('#counted-date-date-picker')
    };

    selectCurrentDate(){
        this.datePicker().click()
        let currentDate =  Cypress.moment().format('D')
        return cy.get('.day:not(.new):not(.old)')
            .contains(currentDate)
            .click()
    };

    seaTemperatureInput(){
        return cy.get('#temperature-edit')
    }

    pensDropdown(){
        return cy.get('#pens_selector_chosen')
    };

    penItem(penName){
        return cy.get('li.active-result').contains(penName)
    };

    addPensButton (){
        return cy.get('#add-new-biomass-for-pen-btn')
    };

    numberOfFishInput(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.scp-fish-per-pen-input')
    };

    averageWeightInput(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="biomass-average-weight"]')
    };

    commentForPenInput(penName){
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

    biomassForPenReadOnly(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.biomass-value-input')
    };

    troutFishTypeCheckBox(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.scp-pen-fish-type-radio-group-container')
            .contains('Trout')
    };

    salmonFishTypeCheckBox(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.scp-pen-fish-type-radio-group-container')
    };

    fishTypeInput(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.scp-iradio.checked')
            .next()
    }
    expandBiomassReportsListItem (){
        return cy.get('.scp-expandable-area-button-text')
    };

    reportExistsInTheList(reportDate){
        this.loadingSpinner().should('not.be.visible')
        return  cy.get(`[data-counted-date="${reportDate}"]`)
    };

    deleteBiomassReportItem(){
        return cy.get('.scp-registered-date.scp-biomass-date.selected').prev()
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

    sendDeleteReportRequest(reportDate, locationId){
        cy.request({
            method: 'DELETE',
            url: `/api/biomass/delete?locationId=${locationId}&date=${reportDate}`,
            failOnStatusCode: false
        })
    };

    deletePenItem(penName){
     return this.getPenObjectByName(penName)
         .parents("tr")
         .find('.icon-cross')
    };

    addBiomassReport(seaTemperature,
                     penM1,
                     numberOfFishValueForPenM1,
                     averageWeightValueForM1,
                     penM1Comment,
                     penM2,
                     numberOfFishValueForPenM2,
                     averageWeightValueForM2,
                     penM2Comment,
                     successfulToasterPopupMessage,
                     ){

        this.addNewBiomassCountButton().click()
        this.selectCurrentDate()
        this.seaTemperatureInput().type(seaTemperature)
        this.pensDropdown().click()
        this.penItem(penM1).click()
        this.pensDropdown().click()
        this.penItem(penM2).click()
        this.addPensButton().click()
        this.averageWeightInput(penM1).type(averageWeightValueForM1)
        this.numberOfFishInput(penM1).clear().type(numberOfFishValueForPenM1)

        this.commentForPenInput(penM1).type(penM1Comment)
        this.numberOfFishInput(penM2).clear().type(numberOfFishValueForPenM2);
        this.averageWeightInput(penM2).type(averageWeightValueForM2)
        this.commentForPenInput(penM2).type(penM2Comment)
        this.saveButton().click()
        this.toasterPopup()
            .should('have.text',successfulToasterPopupMessage)
        this.biomassReportIsLoaded()
    }


}