import {TreatmentRegister} from "../../support/pageobjects/treatment-register";
import {NewReport} from "../../support/pageobjects/treatment-register";
/*
before(function (){
    cy.LoginToTreatmentRegisterPage()
})
 */


const penM1 = 'M1';
const penM1Comment = 'Comment for pen M1';
const penM1FishPenCount = '1000';
const penM2 = 'M2';
const penM2Comment = 'Comment for pen M2';
const penM2FishPenCount = '2000';
const treatmentTypeForAllPens =  "Slice (Emamectin)";
const toasterPopupMessage = 'Treatment was saved successfully';


let treatmentRegister = new TreatmentRegister();
beforeEach(function (){
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    cy.Login('bolacslu', 123456)
    treatmentRegister.pageDataIsLoaded()
})

describe('Treatment register',function (){
       it('should register treatment report for the current date',function (){
       treatmentRegister.addNewTreatmentButton().click();
       treatmentRegister.openDatePicker().click();
       treatmentRegister.selectCurrentDate().click()
       treatmentRegister.openPensDropdown().click()
       treatmentRegister.selectPen(penM1).click()
       treatmentRegister.openPensDropdown().click()
       treatmentRegister.selectPen(penM2).click()
       treatmentRegister.selectTreatmentTypeForAllPens(treatmentTypeForAllPens)
       treatmentRegister.addPensButton().click()
       treatmentRegister.commentForPen(penM1).type(penM1Comment)
       treatmentRegister.commentForPen(penM2).type(penM2Comment)
       treatmentRegister.addFishPenCount(penM1).clear().type(penM1FishPenCount)
       treatmentRegister.addFishPenCount(penM2).clear().type(penM2FishPenCount)
       treatmentRegister.saveButton().click()

       treatmentRegister.toasterPopup()
           .should('have.text',toasterPopupMessage)

        treatmentRegister.expandTreatmentReportsList().click();
        treatmentRegister.deleteTreatmentReportItem().next()
            .should('contain.text', Cypress.moment().format("DD/MM/YYYY"))
        treatmentRegister.deleteTreatmentReportItem().click()
        treatmentRegister.confirmDeleteButton().click()
        treatmentRegister.deleteTreatmentReportItem().next()
            .should('not.eq', Cypress.moment().format("DD/MM/YYYY"))



    })



    it("should verify just created data in the report",function (){
       treatmentRegister.addTreatmentReport(penM1,penM2,treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)

        treatmentRegister.getPenObjectByName(penM1)
            .should('contain.text', penM1)
        treatmentRegister.getPenObjectByName(penM2)
            .should('contain.text', penM2)
        treatmentRegister.treatmentTypeForThePen(penM1)
            .should('have.text', treatmentTypeForAllPens);
        treatmentRegister.treatmentTypeForThePen(penM2)
            .should('have.text', treatmentTypeForAllPens);
        treatmentRegister.commentForPen(penM1).children('input')
            .should('have.value', penM1Comment)
        treatmentRegister.commentForPen(penM2).children('input')
            .should('have.value', penM2Comment)
        treatmentRegister.fishCountValueInTable(penM1)
            .should('have.value', penM1FishPenCount)
        treatmentRegister.fishCountValueInTable(penM2)
            .should('have.value', penM2FishPenCount)
        treatmentRegister.deleteReport()
    })

    it("should delete just created report",function (){
        treatmentRegister.addTreatmentReport(penM1,penM2,treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)

        treatmentRegister.expandTreatmentReportsList().click();
        treatmentRegister.deleteTreatmentReportItem().click()
        treatmentRegister.confirmDeleteButton().click()
        treatmentRegister.deleteTreatmentReportItem().next()
            .should('not.eq', Cypress.moment().format("DD/MM/YYYY"))
    })
    /*
    it('should verify that pen M1 and M2 exist in the reports details section after saving',function (){
        treatmentRegister.getPenObjectByName(penM1)
            .should('contain.text', penM1)
        treatmentRegister.getPenObjectByName(penM2)
            .should('contain.text', penM2)
    })

    it('should verify that treatment type for pens is correct',function (){
        treatmentRegister.treatmentTypeForThePen(penM1)
            .should('have.text', treatmentTypeForAllPens);
        treatmentRegister.treatmentTypeForThePen(penM2)
            .should('have.text', treatmentTypeForAllPens);
    })

    it('should verify that comment value for pens are correct',function (){
        treatmentRegister.commentForPen(penM1).children('input')
            .should('have.value', penM1Comment)
        treatmentRegister.commentForPen(penM2).children('input')
            .should('have.value', penM2Comment)
    })

    it('should verify that fish/pen count value for pens',function (){
        treatmentRegister.fishCountValueInTable(penM1)
            .should('have.value', penM1FishPenCount)
        treatmentRegister.fishCountValueInTable(penM2)
            .should('have.value', penM2FishPenCount)
    })

     */
    /*
    before(function (){
        treatmentRegister.addTreatmentReport(penM1,penM2,treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)

    })

     */
/*
       it("delete report",function (){

        treatmentRegister.deleteReport()
    })

 */








})