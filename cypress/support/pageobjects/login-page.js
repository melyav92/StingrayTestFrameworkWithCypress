export class LoginPage {
    userName(){
        cy.get('#Username');
    }
    password(){
        cy.get('#Password');
    }
    loginButton(){
        cy.get('#login-button');
    }

    loginToThePage(username, password){
        this.userName().type(username)
        this.password().type(password)
        this.loginButton().click()
    }


}