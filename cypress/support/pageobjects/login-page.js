export class LoginPage {
    loadingSpinner(){
        return cy.get('#loading-spinner-overlay').should('not.be.visible')
    }

    userName(){
       return cy.get('#Username');
       //return cy.get('#1-email') //Auth0 login
    }
    password(){
       return cy.get('#Password');
       //return cy.get('.auth0-lock-input-password') //Auth0 login
    }
    loginButton(){
        return cy.get('#login-button');
        //return cy.get('[name="submit"]') //Auth0 login
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