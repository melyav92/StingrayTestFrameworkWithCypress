export class LoginPage {
    loadingSpinner(){
        return cy.get('#loading-spinner-overlay').should('not.be.visible')
    }

    userName(){
       return cy.get('#Username');
    }
    password(){
       return cy.get('#Password');
    }
    loginButton(){
        return cy.get('#login-button');
    }
    validationMessage(){
        this.loadingSpinner()
        return cy.get('.field-validation-error')
    }



    loginToThePage(username = Cypress.env('username'), password = Cypress.env('password')){
        this.userName().type(username)
        this.password().type(password)
        this.loginButton().click()
    }




}