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
const seaTemperatureUpdate = "10";
const numberOfFishValueForPenM1Update = 20000;
const averageWeightValueForM1Update = 2500;
const penM1CommentUpdate = "Updated Comment for pen M1";
const numberOfFishValueForPenM2Update = 30000;
const averageWeightValueForM2Update = 3500;
const penM2CommentUpdate = "Updated Comment for pen M2";
let biomassForPenM1ValueUpdated = ((numberOfFishValueForPenM1Update * averageWeightValueForM1Update)/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
let biomassForPenM2ValueUpdated = ((numberOfFishValueForPenM2Update * averageWeightValueForM2Update)/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
const penM3 = "M3";




let biomassRegister = new BiomassRegister();
let login = new LoginPage()

describe('Biomass register',function (){
    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fBiomass%2fRegister')
       login.loginToThePage(username, password)
       biomassRegister.pageDataIsLoaded()
       biomassRegister.sendDeleteReportRequest(reportDate,locationId)
    })

    after(function (){
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
        biomassRegister.reportExistsInTheList(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)


    })

    it("should verify added data in the report",function (){
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
        biomassRegister.fishTypeValue(penM1)
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
        biomassRegister.fishTypeValue(penM2)
            .should('have.text', salmon)
        biomassRegister.addCommentForPen(penM2)
            .should('have.value', penM2Comment)

    })

    it("should update the report with new values",function (){
        biomassRegister.addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
            penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate)

        biomassRegister.seaTemperatureInput().clear().type(seaTemperatureUpdate)
        biomassRegister.addAverageWeightValue(penM1).clear().type(averageWeightValueForM1Update)
        biomassRegister.addNumberOfFishValue(penM1).clear().type(numberOfFishValueForPenM1Update);
        biomassRegister.addCommentForPen(penM1).clear().type(penM1CommentUpdate)
        biomassRegister.selectTroutFishType(penM1).click()
        biomassRegister.addNumberOfFishValue(penM2).clear().type(numberOfFishValueForPenM2Update);
        biomassRegister.addAverageWeightValue(penM2).clear().type(averageWeightValueForM2Update)
        biomassRegister.addCommentForPen(penM2).clear().type(penM2CommentUpdate)
        biomassRegister.selectTroutFishType(penM2).click()
        biomassRegister.saveButton().click()
        biomassRegister.biomassReportIsLoaded()
//pen M1 data
        biomassRegister.getPenObjectByName(penM1)
            .should('contain.text', penM1)
        biomassRegister.addNumberOfFishValue(penM1)
            .should('have.value', numberOfFishValueForPenM1Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.addAverageWeightValue(penM1)
            .should('have.value', averageWeightValueForM1Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenValue(penM1)
            .should('have.value',biomassForPenM1ValueUpdated)
        biomassRegister.fishTypeValue(penM1)
            .should('have.text', trout)
        biomassRegister.addCommentForPen(penM1)
            .should('have.value', penM1CommentUpdate)
//pen M2 data
        biomassRegister.getPenObjectByName(penM2)
            .should('contain.text', penM2)
        biomassRegister.addNumberOfFishValue(penM2)
            .should('have.value', numberOfFishValueForPenM2Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.addAverageWeightValue(penM2)
            .should('have.value', averageWeightValueForM2Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenValue(penM2)
            .should('have.value',biomassForPenM2ValueUpdated)
        biomassRegister.fishTypeValue(penM2)
            .should('have.text', trout)
        biomassRegister.addCommentForPen(penM2)
            .should('have.value', penM2CommentUpdate)

    })

    it("should delete the report", function (){
        biomassRegister.addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
            penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate)
        biomassRegister.biomassReportIsLoaded()
        biomassRegister.expandBiomassReportsListItem().click()
        biomassRegister.deleteBiomassReportItem().click()
        biomassRegister.confirmDeleteReportButton().click()
        biomassRegister.biomassReportIsLoaded()

        biomassRegister.reportExistsInTheList(reportDate)
            .should("not.contain", reportDate)

    })

    it("should delete one pen from the report",function (){
        biomassRegister.addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
            penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate)
        biomassRegister.biomassReportIsLoaded()

        biomassRegister.deletePenItemFromTable(penM2).click()
        biomassRegister.saveButton().click()
        biomassRegister.biomassReportIsLoaded()

        biomassRegister.getPenObjectByName(penM2)
            .should('not.exist')
    })

    it("should add one more pen to the report",function (){
        biomassRegister.addBiomassReport(seaTemperature,penM1,numberOfFishValueForPenM1,averageWeightValueForM1,penM1Comment,
            penM2,numberOfFishValueForPenM2, averageWeightValueForM2,penM2Comment,successfulToasterPopupMessage,reportDate)

        biomassRegister.biomassReportIsLoaded()
        biomassRegister.openPensDropdown().click();
        biomassRegister.selectPen(penM3).click();
        biomassRegister.addPensButton().click();
        biomassRegister.addAverageWeightValue(penM3).clear().type(averageWeightValueForM1)
        biomassRegister.addNumberOfFishValue(penM3).clear().type(numberOfFishValueForPenM1);
        biomassRegister.addCommentForPen(penM3).type(penM1Comment)
        biomassRegister.saveButton().click()
        biomassRegister.biomassReportIsLoaded()

        biomassRegister.getPenObjectByName(penM1)
            .should('exist')
        biomassRegister.getPenObjectByName(penM2)
            .should('exist')
        biomassRegister.getPenObjectByName(penM3)
            .should('exist')
    })

})