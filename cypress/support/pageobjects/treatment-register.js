//login and go to the treatment register
Cypress.Commands.add("Login", function (username, password) {
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    cy.get('#Username').type(username)
    cy.get('#Password').type(password)
    cy.get('#login-button').click()
})

export class TreatmentRegister {
    addNewTreatmentButton(){
        let pensDropdownIsLoaded = cy.get('li.search-choice').contains('All pens')
        pensDropdownIsLoaded.should('be.visible')
        return cy.get('#add-new-treatment-btn')
    }

    reportDetailsTableIsEmpty(){
        return cy.get('.dataTables_empty').contains('No data available in table').should('have.text','No data available in table')
    }

    openDatePicker(){
        return cy.get('#counted-date-date-picker').click()
    }

    selectCurrentDate(){
       const currentDate =  Cypress.moment().format('D')
       return cy.get('.day:not(.new):not(.old)').contains(currentDate)
    }

    openPensDropdown(){
        return cy.get('#pens_selector_chosen').click()
    }

    selectPen(penName){
       return cy.get('li.active-result').contains(penName).click()
    }

     selectTreatmentTypeForAllPens(treatmentType){
        return cy.get('#treatment-selector-for-all-pens').select(treatmentType)
    }

    addPensButton (){
        return cy.get('#add-new-treatment-for-pens-btn')
    }

   addCommentForPen(penName){
        return cy.get('div.scp-pen-code').contains(penName).parent().next().next()
       //const penIdDataAttribute = cy.get('div.scp-pen-code').contains(penName).invoke('attr', 'data-pen-id')
       //const penIdDataAttribute = cy.get('[data-pen-id]').should('have.text', penName)
       /*let penIdDataAttribute = cy.get('div.scp-pen-code').contains(penName).then(elem => {
           let dataPenId = elem.attr("data-pen-id");
           cy.log(dataPenId);
       })
        */
     // cy.log(cy.get('div.scp-pen-code').contains(penName).parent().next().next())
     //return cy.get('input.comment-input[data-pen-id="4043"]').click()
   }

   addFishPenCount(penName){
       return cy.get('div.scp-pen-code').contains(penName).parent().next().next().next()
   }

   saveReport(){
       return cy.get('#save-btn').click()
   }

   toasterPopup(){
       return cy.get('div.toast-title').contains('Treatment was saved successfully')
   }


}


/*Cypress.Commands.add("LoginToTreatmentRegisterPage", function (){
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    cy.get('#Username').type('bolacslu')
    cy.get('#Password').type(123456)
    cy.get('#login-button').click()
})
 */
