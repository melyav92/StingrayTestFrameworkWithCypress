import {LoginPage} from "../../support/pageobjects/login-page";
import {ManualLiceRegister} from "../../support/pageobjects/manual-lice-register";
import liceData from "../../fixtures/manual-lice-register-test-data.js"

let manualLiceRegister = new ManualLiceRegister();
let login = new LoginPage()

describe("Manual lice count register page",function (){
    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fLiceCount%2fRegisterManual')
        login.loginToThePage()
        manualLiceRegister.calendarPageIsLoaded()
        manualLiceRegister.sendDeleteReportRequest()

    })


    after(function (){
        manualLiceRegister.sendDeleteReportRequest(Cypress.env('locationId'))
    })


    it("should register new manual lice count report by using 'Add new' button' and verify that all data in the report is saved correctly",function (){
        manualLiceRegister.addNewButton().click()
        manualLiceRegister.selectCurrentDate()
        manualLiceRegister.seaTemperatureInput().type(liceData.seaTemperature)
        manualLiceRegister.triggerLevelInput().clear().type(liceData.triggerLevel)
        manualLiceRegister.penDropdown().select(Cypress.env('penM1'))
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.penDropdown().select(Cypress.env('penM2'))
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.fixedStagesInput(Cypress.env('penM1')).type(liceData.fixedStagesForPenM1)
        manualLiceRegister.mobilesInput(Cypress.env('penM1')).type(liceData.mobilesForPenM1)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM1')).type(liceData.adultsFemalesForPenM1)
        manualLiceRegister.calligusInput(Cypress.env('penM1')).type(liceData.calligusForPenM1)
        manualLiceRegister.fishCountImput(Cypress.env('penM1')).type(liceData.fishCountForPenM1)
        manualLiceRegister.commentForPenInput(Cypress.env('penM1')).type(liceData.penM1Comment)

        manualLiceRegister.fixedStagesInput(Cypress.env('penM2')).type(liceData.fixedStagesForPenM2)
        manualLiceRegister.mobilesInput(Cypress.env('penM2')).type(liceData.mobilesForPenM2)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM2')).type(liceData.adultsFemalesForPenM2)
        manualLiceRegister.calligusInput(Cypress.env('penM2')).type(liceData.calligusForPenM2)
        manualLiceRegister.fishCountImput(Cypress.env('penM2')).type(liceData.fishCountForPenM2)
        manualLiceRegister.commentForPenInput(Cypress.env('penM2')).type(liceData.penM2Comment)
        manualLiceRegister.saveButton().click()

        manualLiceRegister.toasterPopup()
            .should('have.text', liceData.successfulToasterPopupMessage)
        manualLiceRegister.reportCountedDate()
            .should('have.text', liceData.reportDate)
    })

    it('should update the manual lice count report with new values ',function (){
        manualLiceRegister.addManualLiceCountReport()
        manualLiceRegister.seaTemperatureInput().type(liceData.seaTemperature)
        manualLiceRegister.triggerLevelInput().clear().type(liceData.triggerLevel)
        manualLiceRegister.fixedStagesInput(Cypress.env('penM1')).type(liceData.fixedStagesForPenM1)
        manualLiceRegister.mobilesInput(Cypress.env('penM1')).type(liceData.mobilesForPenM1)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM1')).type(liceData.adultsFemalesForPenM1)
        manualLiceRegister.calligusInput(Cypress.env('penM1')).type(liceData.calligusForPenM1)
        manualLiceRegister.fishCountImput(Cypress.env('penM1')).clear().type(liceData.fishCountForPenM1)
        manualLiceRegister.commentForPenInput(Cypress.env('penM1')).type(liceData.penM1Comment)

        manualLiceRegister.fixedStagesInput(Cypress.env('penM2')).type(liceData.fixedStagesForPenM2)
        manualLiceRegister.mobilesInput(Cypress.env('penM2')).type(liceData.mobilesForPenM2)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM2')).type(liceData.adultsFemalesForPenM2)
        manualLiceRegister.calligusInput(Cypress.env('penM2')).type(liceData.calligusForPenM2)
        manualLiceRegister.fishCountImput(Cypress.env('penM2')).clear().type(liceData.fishCountForPenM2)
        manualLiceRegister.commentForPenInput(Cypress.env('penM2')).type(liceData.penM2Comment)
        manualLiceRegister.saveButton().click()

        manualLiceRegister.toasterPopup()
            .should('have.text', liceData.successfulToasterPopupMessage)
        manualLiceRegister.reportCountedDate()
            .should('have.text', liceData.reportDate)

        manualLiceRegister.seaTemperatureValue().should('have.text', liceData.seaTemperature)
        manualLiceRegister.triggerLevelValue().should('have.text', liceData.triggerLevel)

        manualLiceRegister.fixedStagesInput(Cypress.env('penM1')).should('have.value', liceData.fixedStagesForPenM1)
        manualLiceRegister.mobilesInput(Cypress.env('penM1')).should('have.value', liceData.mobilesForPenM1)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM1')).should('have.value', liceData.adultsFemalesForPenM1)
        manualLiceRegister.calligusInput(Cypress.env('penM1')).should('have.value', liceData.calligusForPenM1)
        manualLiceRegister.fishCountImput(Cypress.env('penM1')).should('have.value', liceData.fishCountForPenM1)

        manualLiceRegister.fixedStagesInput(Cypress.env('penM2')).should('have.value', liceData.fixedStagesForPenM2)
        manualLiceRegister.mobilesInput(Cypress.env('penM2')).should('have.value', liceData.mobilesForPenM2)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM2')).should('have.value', liceData.adultsFemalesForPenM2)
        manualLiceRegister.calligusInput(Cypress.env('penM2')).should('have.value', liceData.calligusForPenM2)
        manualLiceRegister.fishCountImput(Cypress.env('penM2')).should('have.value', liceData.fishCountForPenM2)

    })

    it('should delete the report from the customer portal',function (){
        manualLiceRegister.addManualLiceCountReport()
        manualLiceRegister.deleteButton().click()
        manualLiceRegister.confirmButton().click()

        manualLiceRegister.currentDayInCalendar()
            .should('not.have.class', 'scp-manual-lc-cell' )

    })


})