import {LoginPage} from "../../support/pageobjects/login-page";


const username = 'bolacslu';
const password = 123456;

describe('Login page tests',function (){
    let login = new LoginPage();

    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen')
    })


    it('Should Login', () => {

        cy.login();

        cy.visit("https://192.168.10.49:8100/en");
    })



     it('should login the user to the Customer portal',function (){
         login.userName().type(username)
         login.password().type(password)
         login.loginButton().click()

         cy.contains('Logout')
     })

    it("Email field required validation when it is empty",function (){
        login.password().type(password)
        login.loginButton().click()

        login.validationMessage()
            .should('be.visible')
            .and('have.text','Username/Email is required.')
    })

    it( 'should verify validation when Password field is empty',function (){
        login.userName().type(username)
        login.loginButton().click()

        login.validationMessage()
            .should('be.visible')
            .and('contain.text', 'Password is required.')

    })

    it( 'should verify validation when valid Username & invalid Password  ',function (){
        login.userName().type(username)
        login.password().type('1')
        login.loginButton().click()

        login.validationMessage()
            .should('be.visible')
            .and('contain.text', 'Username/Email or password is incorrect. Or user is disabled.')

    })





 })