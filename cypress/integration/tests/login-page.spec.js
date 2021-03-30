 describe('Login page tests',function (){
     it('should go to the login page',function (){
         cy.visit('https://192.168.10.49:8100/en/Authentication/Login/?ReturnUrl=%2fen')
         cy.get('#Username').type('bolacslu')
         cy.get('#Password').type('123456')
         cy.get('#login-button').click()



     })

 })