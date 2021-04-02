import {TreatmentRegister} from "../../support/pageobjects/treatment-register";
/*
before(function (){
    cy.LoginToTreatmentRegisterPage()
})
 */
before(function (){
    cy.Login('bolacslu', 123456)
})

describe('Treatment register',function (){
    let treatmentRegister = new TreatmentRegister();
    it('should register treatment report for the current date',function (){
       treatmentRegister.addNewTreatmentButton().click();
       treatmentRegister.reportDetailsTableIsEmpty()
       treatmentRegister.openDatePicker();
       treatmentRegister.selectCurrentDate().click()
       treatmentRegister.openPensDropdown()
       treatmentRegister.selectPen('M1')
       treatmentRegister.openPensDropdown()
       treatmentRegister.selectPen('M2')
       treatmentRegister.selectTreatmentTypeForAllPens('Slice (Emamectin)')
       treatmentRegister.addPensButton().click()
       treatmentRegister.commentForPen('M1').click().clear().type('Comment for pen M1')
       treatmentRegister.commentForPen('M2').click().clear().type('Comment for pen M2')
       treatmentRegister.addFishPenCount('M1').click().clear().type('1000')
       treatmentRegister.addFishPenCount('M2').click().clear().type('2000')
       treatmentRegister.saveReport()

       treatmentRegister.toasterPopup().should('have.text',"Treatment was saved successfully")

    })

    it('should verify that pen M1 exists in the reports details section',function (){
        treatmentRegister.penExistsInReportsTable('M1').should('contain.text', 'M1')
    })

    it('should verify that treatment type for pen is correct',function (){
        treatmentRegister.treatmentTypeForThePen('M1').find('option:selected').should('have.text', 'Slice (Emamectin)');
    })

    it('should verify that comment value for pen M1 is "Comment for pen M1"',function (){
        treatmentRegister.commentForPen('M1').children('input')
            .should('have.value', 'Comment for pen M1')
    })








})