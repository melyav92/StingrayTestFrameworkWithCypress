import {LoginPage} from "../../support/pageobjects/login-page";
import {ManualLiceRegister} from "../../support/pageobjects/manual-lice-register";

const locationId = 2127;
const currentYear = Cypress.moment( ).format("YYYY");
const reportDate = Cypress.moment().format("DD/MM/YYYY");
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
        manualLiceRegister.sendDeleteReportRequestForTheCurrentDate(locationId)
    })

    /*after(function (){
        manualLiceRegister.sendDeleteReportRequestForTheCurrentDate(locationId)
    })

     */

    it("should register new manual lice count report by using 'Add new' button'",function (){
        manualLiceRegister.addNewButton().click()
        manualLiceRegister.openDatePicker().click()
        manualLiceRegister.selectCurrentDate().click()
        manualLiceRegister.seaTemperatureInput().type(seaTemperature)
        manualLiceRegister.triggerLevel().clear().type(triggerLevel)
        manualLiceRegister.penDropdown().select(penM1)
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.penDropdown().select(penM2)
        manualLiceRegister.addPenButton().click()
        manualLiceRegister.addFixedStages(penM1).type(fixedStagesForPenM1)
        manualLiceRegister.addMobiles(penM1).type(mobilesForPenM1)
        manualLiceRegister.addAdultsFemales(penM1).type(adultsFemalesForPenM1)
        manualLiceRegister.addCalligus(penM1).type(calligusForPenM1)
        manualLiceRegister.addFishCount(penM1).type(fishCountForPenM1)
        manualLiceRegister.addCommentForPen(penM1).type(penM1Comment)

        manualLiceRegister.addFixedStages(penM2).type(fixedStagesForPenM2)
        manualLiceRegister.addMobiles(penM2).type(mobilesForPenM2)
        manualLiceRegister.addAdultsFemales(penM2).type(adultsFemalesForPenM2)
        manualLiceRegister.addCalligus(penM2).type(calligusForPenM2)
        manualLiceRegister.addFishCount(penM2).type(fishCountForPenM2)
        manualLiceRegister.addCommentForPen(penM2).type(penM2Comment)
        manualLiceRegister.saveButton().click()

        manualLiceRegister.toasterPopup()
            .should('have.text', successfulToasterPopupMessage)
        manualLiceRegister.countedDateAboveTheTable()
            .should('have.text', reportDate)
    })



})