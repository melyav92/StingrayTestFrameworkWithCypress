export class ManualLiceRegister{
    loadingSpinner(){
        return  cy.get('.scp-data-loading-text')
    };
    calendarPageIsLoaded(){
        return cy.get('.months-container')
            .should('be.visible')
    }
    sendDeleteReportRequestForTheCurrentDate(locationId){
        const deleteReportDate = Cypress.moment().format("YYYY-MM-DD");
        cy.request({
            method: 'DELETE',
            url: `api/lice-count/delete?locationId=${locationId}&date=${deleteReportDate}`,
            //failOnStatusCode: false
        })
    }

    addNewButton(){
        return cy.get('#scp-lc-add-btn')
    }
    openDatePicker(){
        return  cy.get('#counted-date-date-picker')
    };
    selectCurrentDate(){
        const currentDate =  Cypress.moment().format('D')
        return cy.get('.day:not(.new):not(.old)').contains(currentDate)
    };
    seaTemperatureInput(){
        return cy.get('#temperature-edit')
    };
    triggerLevel(){
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
    addFixedStages(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="fixedStage"]')
            .filter('[data-lice-counting-mode="2"]')
    }
    addMobiles(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="mobiles"]')
            .filter('[data-lice-counting-mode="2"]')
    };
    addAdultsFemales(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="adultFemales"]')
            .filter('[data-lice-counting-mode="2"]')
    };
    addCalligus(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="calligus"]')
            .filter('[data-lice-counting-mode="2"]')
    };
    addFishCount(penName){
        return this.getPenObjectByName(penName)
            .parents('tr')
            .find('[data-type="fish"]')
    }
    addCommentForPen(penName){
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
    countedDateAboveTheTable(){
       return cy.get('#scp-lice-count-date-value')
    }




}