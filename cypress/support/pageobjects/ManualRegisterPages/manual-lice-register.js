export class ManualLiceRegister{
    loadingSpinner(){
        return  cy.get('.scp-data-loading-text')
    };

    calendarPageIsLoaded(){
        return cy.get('#scp-lc-add-btn')
            .should('be.visible')
    }

    sendDeleteReportRequest(locationId = Cypress.env('locationId'), deleteReportDate = Cypress.moment().format("YYYY-MM-DD")){
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

    seaTemperatureValue(){
        return cy.get('#scp-lice-count-temperature-value')
    }

    triggerLevelValue(){
        return cy.get('#scp-lice-count-trigger-level-value')
    }

    deleteButton(){
        return cy.get('#delete-btn')
    }

    confirmButton(){
        return cy.get('.confirm').wait(700)
    }

    currentDayInCalendar(){
        return  cy.get('.scp-calendar-current-date')

    }

    addManualLiceCountReport(locationId = Cypress.env('locationId'),
                             createReportDate = Cypress.moment().format("YYYY-MM-DD"),
                             penM1 = Cypress.env('penM1'),
                             penM1Id = Cypress.env('penM1Id'),
                             penM2 = Cypress.env('penM2'),
                             penM2Id = Cypress.env('penM2Id')
    ){

        cy.request(
            {   method: 'POST',
                url: 'api/lice-count/save',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `LocationId=${locationId}&OriginalCountedDate=${createReportDate}&NewCountedDate=${createReportDate}&Temperature=&TriggerLevel=2&CountingMode=2&PenLiceCounts%5B0%5D%5BPenId%5D=${penM1Id}&PenLiceCounts%5B0%5D%5BPenName%5D=${penM1}&PenLiceCounts%5B0%5D%5BFishCount%5D=5&PenLiceCounts%5B1%5D%5BPenId%5D=${penM2Id}&PenLiceCounts%5B1%5D%5BPenName%5D=${penM2}&PenLiceCounts%5B1%5D%5BFishCount%5D=5`

            })
        cy.visit(`/en/LiceCount/Edit?locationId=${locationId}&countedDate=${createReportDate}`)

    }




}