import TreatmentRegister from "../../support/pageobjects/treatment-register";
import Login from "../../support/pageobjects/treatment-register";

/*
before(function (){
    cy.LoginToTreatmentRegisterPage()
})
 */

before(function (){
    cy.Login('bolacslu', 123456)
})

describe('Treatment register',function (){
    it('should register treatment report for the current date',function (){
        let title = cy.get('.scp-title')
        console.log(title)
        console.log(cy.get('.scp-title'))

       let treatmentRegister = new TreatmentRegister();
       treatmentRegister.addNewTreatmentButton().click();


    })

})