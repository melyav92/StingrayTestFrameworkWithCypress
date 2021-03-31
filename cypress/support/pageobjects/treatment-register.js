class TreatmentRegister {
    addNewTreatmentButton(){
        return cy.get('#add-new-treatment-btn')
    };

    openDatePicker(){
        return cy.get('#counted-date-date-picker').click()
    }




}


/*Cypress.Commands.add("LoginToTreatmentRegisterPage", function (){
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    cy.get('#Username').type('bolacslu')
    cy.get('#Password').type(123456)
    cy.get('#login-button').click()
})

 */

Cypress.Commands.add("Login", function (username, password) {
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    cy.get('#Username').type(username)
    cy.get('#Password').type(password)
    cy.get('#login-button').click()
})
//export default (TreatmentRegister, login);
export default TreatmentRegister