describe('Treatment register',function (){
    it('should login to the Customer portal under location user',function (){
        cy.visit('https://192.168.10.49:8100/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
        cy.get('#Username').type('bolacslu')
        cy.get('#Password').type('123456')
        cy.get('#login-button').click()
    })

    it('should register treatment report for the current date',function (){
       let addNewTreatmentButton=  cy.get('#add-new-treatment-btn')
       addNewTreatmentButton.click()

    })

})