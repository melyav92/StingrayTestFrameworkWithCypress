import{HarvestRegister} from "../../../support/pageobjects/ManualRegisterPages/harvest-register";
import {LoginPage} from "../../../support/pageobjects/login-page";
import harvestData from "../../../fixtures/ManualRegisterPages/harvest-register-test-data.json"
import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";

let reportDate = Cypress.moment().format("DD/MM/YYYY");
let harvestRegister = new HarvestRegister();
let login = new LoginPage();
let manualLogin = new ManualLoginWithPasteCookies()


describe('Harvest register',function (){
    beforeEach(function (){
       //cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fHarvest%2fRegister')
       //login.loginToThePage()

        manualLogin.manualLoginWithPasteCookies()
        cy.visit('/en/Harvest/Register')
        harvestRegister.selectCustomerOrAndLocationIfDropdownsExist()
       //harvestRegister.pageDataIsLoaded()
       harvestRegister.sendDeleteReportRequest()

        })

     after(function (){
         harvestRegister.sendDeleteReportRequest()
    })


    it('should register harvest report for the current date',function (){
        harvestRegister.addNewHarvestCountBtn().click()
        harvestRegister.selectCurrentDate()
        harvestRegister.pensDropdown().click()
        harvestRegister.penItem(Cypress.env('penM1')).click()
        harvestRegister.pensDropdown().click()
        harvestRegister.penItem(Cypress.env('penM2')).click()
        harvestRegister.addPensButton().click()
        harvestRegister.fishHarvestedInput(Cypress.env('penM1')).type(harvestData.fishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1')).type(harvestData.averageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1')).clear().type(harvestData.fishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1')).type(harvestData.penM1Comment)

        harvestRegister.fishHarvestedInput(Cypress.env('penM2')).type(harvestData.fishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2')).type(harvestData.averageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2')).clear().type(harvestData.fishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2')).type(harvestData.penM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.toasterPopup()
             .should('have.text',harvestData.successfulToasterPopupMessage)
        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.reportExistsInTheList(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)
    })

    it('should verify added data in the report',function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            harvestData.fishHarvestedValueForPenM1,
            harvestData.averageHarvestWeightValueForM1,
            harvestData.fishPenAfterHarvestValueForM1,
            harvestData.penM1Comment,
            Cypress.env('penM2'),
            harvestData.fishHarvestedValueForPenM2,
            harvestData.averageHarvestWeightValueForM2,
            harvestData.fishPenAfterHarvestValueForM2,
            harvestData.penM2Comment,
            harvestData.successfulToasterPopupMessage)

        harvestRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM1'))
            .should('have.value', harvestData.fishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1'))
            .should('have.value', harvestData.averageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1'))
            .should('have.value', harvestData.fishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', harvestData.penM1Comment)
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM2'))
            .should('have.value', harvestData.fishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2'))
            .should('have.value', harvestData.averageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2'))
            .should('have.value', harvestData.fishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', harvestData.penM2Comment)
    })

    it("should update and verify the report with new values", function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            harvestData.fishHarvestedValueForPenM1,
            harvestData.averageHarvestWeightValueForM1,
            harvestData.fishPenAfterHarvestValueForM1,
            harvestData.penM1Comment,
            Cypress.env('penM2'),
            harvestData.fishHarvestedValueForPenM2,
            harvestData.averageHarvestWeightValueForM2,
            harvestData.fishPenAfterHarvestValueForM2,
            harvestData.penM2Comment,
            harvestData.successfulToasterPopupMessage)

        harvestRegister.fishHarvestedInput(Cypress.env('penM1')).clear().type(harvestData.updatedFishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1')).clear().type(harvestData.updatedAverageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1')).clear().type(harvestData.updatedFishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1')).clear().type(harvestData.updatedPenM1Comment)
        harvestRegister.fishHarvestedInput(Cypress.env('penM2')).clear().type(harvestData.updatedFishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2')).clear().type(harvestData.updatedAverageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2')).clear().type(harvestData.updatedFishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2')).clear().type(harvestData.updatedPenM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM1'))
            .should('have.value', harvestData.updatedFishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1'))
            .should('have.value', harvestData.updatedAverageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1'))
            .should('have.value', harvestData.updatedFishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', harvestData.updatedPenM1Comment)
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM2'))
            .should('have.value', harvestData.updatedFishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2'))
            .should('have.value', harvestData.updatedAverageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2'))
            .should('have.value', harvestData.updatedFishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', harvestData.updatedPenM2Comment)
    })

    it('should delete the report', function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            harvestData.fishHarvestedValueForPenM1,
            harvestData.averageHarvestWeightValueForM1,
            harvestData.fishPenAfterHarvestValueForM1,
            harvestData.penM1Comment,
            Cypress.env('penM2'),
            harvestData.fishHarvestedValueForPenM2,
            harvestData.averageHarvestWeightValueForM2,
            harvestData.fishPenAfterHarvestValueForM2,
            harvestData.penM2Comment,
            harvestData.successfulToasterPopupMessage)

        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.deleteHarvestReportItem().click()
        harvestRegister.confirmDeleteReportButton().click()
        harvestRegister.pageDataIsLoaded()
        harvestRegister.reportExistsInTheList(reportDate)
            .should('not.exist')
    })

    it('should delete one pen from the report', function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            harvestData.fishHarvestedValueForPenM1,
            harvestData.averageHarvestWeightValueForM1,
            harvestData.fishPenAfterHarvestValueForM1,
            harvestData.penM1Comment,
            Cypress.env('penM2'),
            harvestData.fishHarvestedValueForPenM2,
            harvestData.averageHarvestWeightValueForM2,
            harvestData.fishPenAfterHarvestValueForM2,
            harvestData.penM2Comment,
            harvestData.successfulToasterPopupMessage)

        harvestRegister.deletePenItem(Cypress.env('penM2')).click()
        harvestRegister.saveButton().click()
        harvestRegister.pageDataIsLoaded()
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('not.exist')
    })


})