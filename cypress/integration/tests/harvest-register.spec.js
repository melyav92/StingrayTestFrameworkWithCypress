import{HarvestRegister} from "../../support/pageobjects/harvest-register";
import {LoginPage} from "../../support/pageobjects/login-page";


const locationId = 2127;
const username = "bolacslu";
const password = 123456;
const penM1 = "M1";
const fishHarvestedValueForPenM1 = 40000;
const averageHarvestWeightValueForM1 = 6500;
const fishPenAfterHarvestValueForM1 = 60000;
const penM1Comment = "Comment for pen M1";
const penM2 = "M2";
const fishHarvestedValueForPenM2 = 30000;
const averageHarvestWeightValueForM2 = 4500;
const fishPenAfterHarvestValueForM2 = 64000;
const penM2Comment = "Comment for pen M2";
const successfulToasterPopupMessage = 'Saved successfully';
const reportDate = Cypress.moment().format("DD/MM/YYYY");

let harvestRegister = new HarvestRegister();
let login = new LoginPage()



describe('Harvest register',function (){
    beforeEach(function (){
       cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fHarvest%2fRegister')
       login.loginToThePage(username, password)
       harvestRegister.pageDataIsLoaded(locationId)
       harvestRegister.sendDeleteReportRequestForTheCurrentDate(locationId)

        })
    // after(function (){
    //     harvestRegister.sendDeleteReportRequestForTheCurrentDate(locationId)
    // })

    it('should register harvest harvest report for the current date',function (){
        harvestRegister.addNewHarvestCountBtn().click()
        harvestRegister.openDatePicker().click()
        harvestRegister.selectCurrentDate().click()
        harvestRegister.openPensDropdown().click()
        harvestRegister.selectPen(penM1).click()
        harvestRegister.openPensDropdown().click()
        harvestRegister.selectPen(penM2).click()
        harvestRegister.addPensButton().click()
        harvestRegister.addFishHarvestedValue(penM1).type(fishHarvestedValueForPenM1)
        harvestRegister.addAverageHarvestWeightValue(penM1).type(averageHarvestWeightValueForM1)
        harvestRegister.addFishPenAfterHarvestValue(penM1).clear().type(fishPenAfterHarvestValueForM1)
        harvestRegister.addCommentForPen(penM1).type(penM1Comment)
        harvestRegister.addFishHarvestedValue(penM2).type(fishHarvestedValueForPenM2)
        harvestRegister.addAverageHarvestWeightValue(penM2).type(averageHarvestWeightValueForM2)
        harvestRegister.addFishPenAfterHarvestValue(penM2).clear().type(fishPenAfterHarvestValueForM2)
        harvestRegister.addCommentForPen(penM2).type(penM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.toasterPopup()
             .should('have.text',successfulToasterPopupMessage)
        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.reportExistsInTheList(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)

})


})