import {BiomassRegister} from "../../support/pageobjects/biomass-register";
import {LoginPage} from "../../support/pageobjects/login-page";

const locationId = 2127;
const username = "bolacslu";
const password = 123456;
const seaTemperature = '8';
const penM1 = "M1";
const numberOfFishValueForPenM1 = 40000;
const averageWeightValueForM1 = 4500;
const penM1Comment = "Comment for pen M1";
const penM2 = "M2";
const numberOfFishValueForPenM2 = 60000;
const averageWeightValueForM2 = 6500;
const penM2Comment = "Comment for pen M2";
const salmon = "Salmon";
const trout = "Trout";
const successfulToasterPopupMessage = 'Biomass saved';
const reportDate = Cypress.moment().format("DD/MM/YYYY");
let biomassForPenM1Value = ((numberOfFishValueForPenM1 * averageWeightValueForM1)/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
let biomassForPenM2Value = ((numberOfFishValueForPenM2 * averageWeightValueForM2)/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")




let biomassRegister = new BiomassRegister();
let login = new LoginPage()

describe('Biomass register',function (){
    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fBiomass%2fRegister')
       login.loginToThePage(username, password)
       biomassRegister.pageDataIsLoaded()
       biomassRegister.sendDeleteReportRequest(reportDate,locationId)
    })

    it('should register biomass report for the current date',function (){
        biomassRegister.addNewBiomassCountButton().click();
        biomassRegister.openDatePicker().click();
        biomassRegister.selectCurrentDate().click();
        biomassRegister.seaTemperatureInput().type(seaTemperature);
        biomassRegister.openPensDropdown().click();
        biomassRegister.selectPen(penM1).click();
        biomassRegister.openPensDropdown().click();
        biomassRegister.selectPen(penM2).click();
        biomassRegister.addPensButton().click();
        biomassRegister.addAverageWeightValue(penM1).type(averageWeightValueForM1)
        biomassRegister.addNumberOfFishValue(penM1).clear().type(numberOfFishValueForPenM1);
        biomassRegister.addCommentForPen(penM1).type(penM1Comment)
        biomassRegister.addNumberOfFishValue(penM2).clear().type(numberOfFishValueForPenM2);
        biomassRegister.addAverageWeightValue(penM2).type(averageWeightValueForM2)
        biomassRegister.addCommentForPen(penM2).type(penM2Comment)
        biomassRegister.saveButton().click()

        biomassRegister.toasterPopup()
           .should('have.text',successfulToasterPopupMessage)

        biomassRegister.expandBiomassReportsListItem().click()
        biomassRegister.deleteBiomassReportItem(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)


    })

    it.only("should verify added data in the report",function (){
        biomassRegister.addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
           penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate)

        biomassRegister.getPenObjectByName(penM1)
            .should('contain.text', penM1)
        biomassRegister.addNumberOfFishValue(penM1)
            .should('have.value', numberOfFishValueForPenM1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.addAverageWeightValue(penM1)
            .should('have.value', averageWeightValueForM1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenValue(penM1)
            .should('have.value',biomassForPenM1Value)
        biomassRegister.fishType(penM1)
            .should('have.text', salmon)
        biomassRegister.addCommentForPen(penM1)
            .should('have.value', penM1Comment)

        biomassRegister.getPenObjectByName(penM2)
            .should('contain.text', penM2)
        biomassRegister.addNumberOfFishValue(penM2)
            .should('have.value', numberOfFishValueForPenM2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.addAverageWeightValue(penM2)
            .should('have.value', averageWeightValueForM2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenValue(penM2)
            .should('have.value',biomassForPenM2Value)
        biomassRegister.fishType(penM2)
            .should('have.text', salmon)
        biomassRegister.addCommentForPen(penM2)
            .should('have.value', penM2Comment)

    })

    it("should update the report with new values",function (){
        biomassRegister.addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
            penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate)


    })

})