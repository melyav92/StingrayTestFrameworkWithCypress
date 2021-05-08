import {LoginPage} from "../../support/pageobjects/login-page";



describe('Login page tests',function (){
    let login = new LoginPage();

     it('should go to the login page',function (){
         cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen')
         login.userName().type('bolacslu')
         login.password().type('123456')
         login.loginButton().click()

         cy.contains('Logout')



     })

 })