export class LoginPage {
    userName(){
       return cy.get('#Username');
    }
    password(){
       return cy.get('#Password');
    }
    loginButton(){
        return cy.get('#login-button');
    }

    loginToThePage(username, password){
        this.userName().type(username)
        this.password().type(password)
        this.loginButton().click()
    }


}