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
    sendDeleteReportRequest(locationId){
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
   datePicker(){
       cy.wait(400)
        return  cy.get('#counted-date-date-picker')
    };
    selectCurrentDate(){
        const currentDate =  Cypress.moment().format('D')
        return cy.get('.day:not(.new):not(.old)').contains(currentDate)
    };
    pensDropdown(){
        return cy.get('#pens_selector_chosen')
    };
    penItem(penName){
        return cy.get('li.active-result').contains(penName)
    };
    addPensButton (){
        return cy.get('#add-new-harvest-for-pen-btn')
    };
    getPenObjectByName(penName){
        return cy.contains('.scp-pen-code', penName)
    };
    fishHarvestedInput(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="fish-harvested"]')
    }
    averageHarvestWeightInput(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="average-weight"]')
    }
    fishPenAfterHarvestInput(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('[data-type="fish-per-pen"]')
    }
    commentForPenInput(penName){
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
    confirmDeleteReportButton(){
        cy.wait(500)
        return cy.get('.confirm')
    };
    deletePenItem(penName){
        return this.getPenObjectByName(penName)
            .parents("tr")
            .find('.icon-cross')
    }

    addHarvestReport(penM1,
                     fishHarvestedValueForPenM1,
                     averageHarvestWeightValueForM1,
                     fishPenAfterHarvestValueForM1,
                     penM1Comment,
                     penM2,
                     fishHarvestedValueForPenM2,
                     averageHarvestWeightValueForM2,
                     fishPenAfterHarvestValueForM2,
                     penM2Comment,
                     successfulToasterPopupMessage
                     ){
        this.addNewHarvestCountBtn().click()
        this.datePicker().click()
        this.selectCurrentDate().click()
        this.pensDropdown().click()
        this.penItem(penM1).click()
        this.pensDropdown().click()
        this.penItem(penM2).click()
        this.addPensButton().click()
        this.fishHarvestedInput(penM1).type(fishHarvestedValueForPenM1)
        this.averageHarvestWeightInput(penM1).type(averageHarvestWeightValueForM1)
        this.fishPenAfterHarvestInput(penM1).clear().type(fishPenAfterHarvestValueForM1)
        this.commentForPenInput(penM1).type(penM1Comment)
        this.fishHarvestedInput(penM2).type(fishHarvestedValueForPenM2)
        this.averageHarvestWeightInput(penM2).type(averageHarvestWeightValueForM2)
        this.fishPenAfterHarvestInput(penM2).clear().type(fishPenAfterHarvestValueForM2)
        this.commentForPenInput(penM2).type(penM2Comment)
        this.saveButton().click()
        this.toasterPopup()
            .should('have.text',successfulToasterPopupMessage)
        this.pageDataIsLoaded()
    }




}