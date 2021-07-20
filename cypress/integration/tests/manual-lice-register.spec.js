import {LoginPage} from "../../support/pageobjects/login-page";
import {ManualLiceRegister} from "../../support/pageobjects/manual-lice-register";


let reportDate = Cypress.moment().format("DD/MM/YYYY");
let manualLiceRegister = new ManualLiceRegister();
let login = new LoginPage()



describe("Manual lice count register page",function (){
    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fLiceCount%2fRegisterManual')
        login.loginToThePage(Cypress.env('username'),  Cypress.env('password'))
        manualLiceRegister.calendarPageIsLoaded()
        manualLiceRegister.sendDeleteReportRequest(Cypress.env('locationId'))

        cy.fixture('manual-lice-register-test-data').as('liceData')

    })

    after(function (){
        manualLiceRegister.sendDeleteReportRequest(Cypress.env('locationId'))
    })



    it("should register new manual lice count report by using 'Add new' button'",function (){
        manualLiceRegister.addNewButton().click()
        manualLiceRegister.selectCurrentDate()
        manualLiceRegister.seaTemperatureInput().type(this.liceData.seaTemperature)
        manualLiceRegister.triggerLevelInput().clear().type(this.liceData.triggerLevel)
        manualLiceRegister.penDropdown().select(Cypress.env('penM1'))
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.penDropdown().select(Cypress.env('penM2'))
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.fixedStagesInput(Cypress.env('penM1')).type(this.liceData.fixedStagesForPenM1)
        manualLiceRegister.mobilesInput(Cypress.env('penM1')).type(this.liceData.mobilesForPenM1)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM1')).type(this.liceData.adultsFemalesForPenM1)
        manualLiceRegister.calligusInput(Cypress.env('penM1')).type(this.liceData.calligusForPenM1)
        manualLiceRegister.fishCountImput(Cypress.env('penM1')).type(this.liceData.fishCountForPenM1)
        manualLiceRegister.commentForPenInput(Cypress.env('penM1')).type(this.liceData.penM1Comment)

        manualLiceRegister.fixedStagesInput(Cypress.env('penM2')).type(this.liceData.fixedStagesForPenM2)
        manualLiceRegister.mobilesInput(Cypress.env('penM2')).type(this.liceData.mobilesForPenM2)
        manualLiceRegister.adultsFemalesInput(Cypress.env('penM2')).type(this.liceData.adultsFemalesForPenM2)
        manualLiceRegister.calligusInput(Cypress.env('penM2')).type(this.liceData.calligusForPenM2)
        manualLiceRegister.fishCountImput(Cypress.env('penM2')).type(this.liceData.fishCountForPenM2)
        manualLiceRegister.commentForPenInput(Cypress.env('penM2')).type(this.liceData.penM2Comment)
        manualLiceRegister.saveButton().click()

        manualLiceRegister.toasterPopup()
            .should('have.text', this.liceData.successfulToasterPopupMessage)
        manualLiceRegister.reportCountedDate()
            .should('have.text', reportDate)
    })



})