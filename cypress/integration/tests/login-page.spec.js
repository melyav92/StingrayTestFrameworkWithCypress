import {LoginPage} from "../../support/pageobjects/login-page";

let login =new LoginPage();

describe('Login page tests',function (){
     it('should go to the login page',function (){
         cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen')
         login.userName().type('bolacslu')
         login.password().type('123456')
         login.loginButton().click()

         cy.get('a.btn.btn-link').contains('Logout')



     })

 })