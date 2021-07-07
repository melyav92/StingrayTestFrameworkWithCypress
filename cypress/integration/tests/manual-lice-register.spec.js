import {LoginPage} from "../../support/pageobjects/login-page";
import {ManualLiceRegister} from "../../support/pageobjects/manual-lice-register";

const locationId = 2127;
let currentYear = Cypress.moment( ).format("YYYY");
let reportDate = Cypress.moment().format("DD/MM/YYYY");
const username = 'bolacslu';
const password = '123456';
const seaTemperature = '8';
const triggerLevel = '5';
const penM1 = "M1";
const fixedStagesForPenM1 = '2';
const mobilesForPenM1 = '3';
const adultsFemalesForPenM1 = '4';
const calligusForPenM1 = '5';
const fishCountForPenM1 = '10';
const penM1Comment = "Comment for pen M1";

const penM2 = "M2";
const fixedStagesForPenM2 = '5';
const mobilesForPenM2 = '4';
const adultsFemalesForPenM2 = '3';
const calligusForPenM2 = '2';
const fishCountForPenM2 = '10';
const penM2Comment = "Comment for pen M2";
const successfulToasterPopupMessage = 'Lice count was saved successfully';


let manualLiceRegister = new ManualLiceRegister();
let login = new LoginPage()


describe("Manual lice count register page",function (){
    beforeEach(function (){
        cy.visit(`/en/Authentication/Login/?ReturnUrl=%2fen%2fLiceCount%2fRegisterManual%3flocationId%3d${locationId}%26year%3d${currentYear}`)
        login.loginToThePage(username, password)
        manualLiceRegister.calendarPageIsLoaded()
        manualLiceRegister.sendDeleteReportRequest(locationId)
    })

    /*after(function (){
        manualLiceRegister.sendDeleteReportRequest(locationId)
    })

     */

    it("should register new manual lice count report by using 'Add new' button'",function (){
        manualLiceRegister.addNewButton().click()
        manualLiceRegister.selectCurrentDate()
        manualLiceRegister.seaTemperatureInput().type(seaTemperature)
        manualLiceRegister.triggerLevelInput().clear().type(triggerLevel)
        manualLiceRegister.penDropdown().select(penM1)
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.penDropdown().select(penM2)
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.fixedStagesInput(penM1).type(fixedStagesForPenM1)
        manualLiceRegister.mobilesInput(penM1).type(mobilesForPenM1)
        manualLiceRegister.adultsFemalesInput(penM1).type(adultsFemalesForPenM1)
        manualLiceRegister.calligusInput(penM1).type(calligusForPenM1)
        manualLiceRegister.fishCountImput(penM1).type(fishCountForPenM1)
        manualLiceRegister.commentForPenInput(penM1).type(penM1Comment)

        manualLiceRegister.fixedStagesInput(penM2).type(fixedStagesForPenM2)
        manualLiceRegister.mobilesInput(penM2).type(mobilesForPenM2)
        manualLiceRegister.adultsFemalesInput(penM2).type(adultsFemalesForPenM2)
        manualLiceRegister.calligusInput(penM2).type(calligusForPenM2)
        manualLiceRegister.fishCountImput(penM2).type(fishCountForPenM2)
        manualLiceRegister.commentForPenInput(penM2).type(penM2Comment)
        manualLiceRegister.saveButton().click()

        manualLiceRegister.toasterPopup()
            .should('have.text', successfulToasterPopupMessage)
        manualLiceRegister.reportCountedDate()
            .should('have.text', reportDate)
    })



})