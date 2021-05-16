import {BiomassRegister} from "../../support/pageobjects/biomass-register";
import {LoginPage} from "../../support/pageobjects/login-page";

const username = 'bolacslu';
const password = 123456;
const seaTemperature = '8';
const penM1 = 'M1';
const numberOfFishValueForPenM1 = 40000;
const averageWeightValueForM1 = 4500;
const penM1Comment = 'Comment for pen M1';
const penM2 = 'M2';
const numberOfFishValueForPenM2 = 60000;
const averageWeightValueForM2 = 6500;
const penM2Comment = 'Comment for pen M2';
const successfulToasterPopupMessage = 'Biomass saved';

let biomassRegister = new BiomassRegister();
let login = new LoginPage()

describe('Biomass register',function (){
    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fBiomass%2fRegister')
        login.loginToThePage(username, password)
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
        biomassRegister.addNumberOfFishValue(penM1).clear().type(numberOfFishValueForPenM1);
        biomassRegister.addAverageWeightValue(penM1).type(averageWeightValueForM1)
        biomassRegister.addCommentForPen(penM1).type(penM1Comment)
        biomassRegister.addNumberOfFishValue(penM2).clear().type(numberOfFishValueForPenM2);
        biomassRegister.addAverageWeightValue(penM2).type(averageWeightValueForM2)
        biomassRegister.addCommentForPen(penM2).type(penM2Comment)
        biomassRegister.saveButton().click()

        biomassRegister.toasterPopup()
            .should('have.text',successfulToasterPopupMessage)













    })

})