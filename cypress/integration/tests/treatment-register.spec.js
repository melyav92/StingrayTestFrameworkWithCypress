import {TreatmentRegister} from "../../support/pageobjects/treatment-register";
import {LoginPage} from "../../support/pageobjects/login-page";

const penM1Comment = 'Comment for pen M1';
const penM1FishPenCount = '1000';
const penM2Comment = 'Comment for pen M2';
const penM2FishPenCount = '2000';
const treatmentTypeForAllPens =  "Slice (Emamectin)";
const successfulToasterPopupMessage = 'Treatment was saved successfully';
const updatePenM1Comment = 'Updated Comment for pen M1';
const updatePenM2Comment = 'Updated Comment for pen M2';
const updatePenM1FishPenCount = '5000';
const updatePenM2FishPenCount = '8000';
const updateTreatmentTypeForPenM1 = 'Hydrolizer';
const updateTreatmentTypeForPenM2 = 'Thermolicer';
let reportDate = Cypress.moment().format('YYYY-MM-DD');

let treatmentRegister = new TreatmentRegister();
let login = new LoginPage()

beforeEach(function (){
    cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fTreatment%2fRegister')
    login.loginToThePage(Cypress.env('username'), Cypress.env('password'))
    treatmentRegister.pageDataIsLoaded()
    treatmentRegister.sendDeleteTreatmentRequest(reportDate,Cypress.env('locationId'))
})

after(function (){
    treatmentRegister.sendDeleteTreatmentRequest(reportDate,Cypress.env('locationId'))
})

describe('Treatment register',function (){
    it('should register treatment report for the current date',function (){
       treatmentRegister.addNewTreatmentButton().click();
       treatmentRegister.datePicker().click();
       treatmentRegister.selectCurrentDate()
       treatmentRegister.pensDropdown().click()
       treatmentRegister.penItem(Cypress.env('penM1')).click()
       treatmentRegister.pensDropdown().click()
       treatmentRegister.penItem(Cypress.env('penM2')).click()
       treatmentRegister.selectTreatmentTypeForAllPens(treatmentTypeForAllPens)
       treatmentRegister.addPensButton().click()
       treatmentRegister.commentForPenInput(Cypress.env('penM1')).type(penM1Comment)
       treatmentRegister.fishPenInput(Cypress.env('penM1')).clear().type(penM1FishPenCount)
       treatmentRegister.commentForPenInput(Cypress.env('penM2')).type(penM2Comment)
       treatmentRegister.fishPenInput(Cypress.env('penM2')).clear().type(penM2FishPenCount)
       treatmentRegister.saveButton().click()

       treatmentRegister.toasterPopup()
           .should('have.text',successfulToasterPopupMessage)

        treatmentRegister.expandTreatmentReportsListItem().click();
        treatmentRegister.deleteTreatmentReportItem().next()
            .should('contain.text', Cypress.moment().format("DD/MM/YYYY"))

    })

    it("should verify just created data in the report",function (){
       treatmentRegister.addTreatmentReport(Cypress.env('penM1'),Cypress.env('penM2'),treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)

        treatmentRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        treatmentRegister.selectedTreatmentTypeForThePen(Cypress.env('penM1'))
            .should('have.text', treatmentTypeForAllPens);
        treatmentRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', penM1Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM1'))
            .should('have.value', penM1FishPenCount)
        treatmentRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        treatmentRegister.selectedTreatmentTypeForThePen(Cypress.env('penM2'))
            .should('have.text', treatmentTypeForAllPens);
        treatmentRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', penM2Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM2'))
            .should('have.value', penM2FishPenCount)

    })

    it("should delete just created report",function (){
        treatmentRegister.addTreatmentReport(Cypress.env('penM1'),Cypress.env('penM2'),treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)

        treatmentRegister.expandTreatmentReportsListItem().click();
        treatmentRegister.deleteTreatmentReportItem().click()
        treatmentRegister.confirmDeleteReportButton().click()
        treatmentRegister.deleteTreatmentReportItem().next()
            .should('not.eq', Cypress.moment().format("DD/MM/YYYY"))
    })

    it('should verify updated data in the report',function (){
        treatmentRegister.addTreatmentReport(Cypress.env('penM1'),Cypress.env('penM2'),treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)
        //update report
        treatmentRegister.selectTreatmentTypeForPen(Cypress.env('penM1'),updateTreatmentTypeForPenM1)
        treatmentRegister.commentForPenInput(Cypress.env('penM1')).clear().type(updatePenM1Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM1')).clear().type(updatePenM1FishPenCount)
        treatmentRegister.selectTreatmentTypeForPen(Cypress.env('penM2'),updateTreatmentTypeForPenM2)
        treatmentRegister.commentForPenInput(Cypress.env('penM2')).clear().type(updatePenM2Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM2')).clear().type(updatePenM2FishPenCount)
        treatmentRegister.saveButton().click()
        treatmentRegister.treatmentReportIsLoaded()

        treatmentRegister.toasterPopup()
            .should('have.text',successfulToasterPopupMessage)
        treatmentRegister.selectedTreatmentTypeForThePen(Cypress.env('penM1'))
            .should('have.text', updateTreatmentTypeForPenM1);
        treatmentRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', updatePenM1Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM1'))
            .should('have.value', updatePenM1FishPenCount)
        treatmentRegister.selectedTreatmentTypeForThePen(Cypress.env('penM2'))
            .should('have.text', updateTreatmentTypeForPenM2);
        treatmentRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', updatePenM2Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM2'))
            .should('have.value', updatePenM2FishPenCount)
    })

    it("should delete one pen from the report",function (){
        treatmentRegister.addTreatmentReport(Cypress.env('penM1'),Cypress.env('penM2'),treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)
        treatmentRegister.deletePenItem(Cypress.env('penM2')).click()
        treatmentRegister.saveButton().click()
        treatmentRegister.treatmentReportIsLoaded()

        treatmentRegister.getPenObjectByName(Cypress.env('penM2')).should('not.exist')
    })

    it("should add one more pen to the report",function (){
        treatmentRegister.addTreatmentReport(Cypress.env('penM1'),Cypress.env('penM2'),treatmentTypeForAllPens,penM1Comment,penM2Comment,penM1FishPenCount,penM2FishPenCount)
        treatmentRegister.pensDropdown().click()
        treatmentRegister.penItem(Cypress.env('penM3')).click()
        treatmentRegister.selectTreatmentTypeForAllPens(treatmentTypeForAllPens)
        treatmentRegister.addPensButton().click()
        treatmentRegister.commentForPenInput(Cypress.env('penM3')).type(penM2Comment)
        treatmentRegister.fishPenInput(Cypress.env('penM3')).clear().type(penM2FishPenCount)

        treatmentRegister.saveButton().click()
        treatmentRegister.treatmentReportIsLoaded()

        treatmentRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('exist')
        treatmentRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('exist')
        treatmentRegister.getPenObjectByName(Cypress.env('penM3'))
            .should('exist')



})