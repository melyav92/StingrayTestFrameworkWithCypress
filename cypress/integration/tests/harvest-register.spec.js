import{HarvestRegister} from "../../support/pageobjects/harvest-register";
import {LoginPage} from "../../support/pageobjects/login-page";

//const fishHarvestedValueForPenM1 = 40000;
const averageHarvestWeightValueForM1 = 6500;
const fishPenAfterHarvestValueForM1 = 60000;
const penM1Comment = "Comment for pen M1";

const fishHarvestedValueForPenM2 = 30000;
const averageHarvestWeightValueForM2 = 4500;
const fishPenAfterHarvestValueForM2 = 64000;
const penM2Comment = "Comment for pen M2";
const successfulToasterPopupMessage = 'Saved successfully';
let reportDate = Cypress.moment().format("DD/MM/YYYY");
const updatedFishHarvestedValueForPenM1 = 70000;
const updatedAverageHarvestWeightValueForM1 = 7500;
const updatedFishPenAfterHarvestValueForM1 = 50000;
const updatedPenM1Comment = "Updated Comment for pen M1";
const updatedFishHarvestedValueForPenM2 = 80000;
const updatedAverageHarvestWeightValueForM2 = 4500;
const updatedFishPenAfterHarvestValueForM2 = 10000;
const updatedPenM2Comment = "Updated Comment for pen M2";

let harvestRegister = new HarvestRegister();
let login = new LoginPage();


describe('Harvest register',function (){
    beforeEach(function (){
       cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fHarvest%2fRegister')
       //cy.visit('https://192.168.10.49:8100/en/Harvest/Register')
       login.loginToThePage(Cypress.env('username'), Cypress.env('password'))
       harvestRegister.pageDataIsLoaded(Cypress.env('locationId'))
       harvestRegister.sendDeleteReportRequest(Cypress.env('locationId'))

        })

    beforeEach(function () {
        cy.fixture('harvest-register-test-data').as('harvestData')
    })

        after(function (){
         harvestRegister.sendDeleteReportRequest(Cypress.env('locationId'))
    })


    it.only('should register harvest report for the current date',function (){
        harvestRegister.addNewHarvestCountBtn().click()
        harvestRegister.selectCurrentDate()
        harvestRegister.pensDropdown().click()
        harvestRegister.penItem(Cypress.env('penM1')).click()
        harvestRegister.pensDropdown().click()
        harvestRegister.penItem(Cypress.env('penM2')).click()
        harvestRegister.addPensButton().click()
        harvestRegister.fishHarvestedInput(Cypress.env('penM1')).type(this.harvestData.fishHarvestedValueForPenM1)

        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1')).type(averageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1')).clear().type(fishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1')).type(penM1Comment)
        harvestRegister.fishHarvestedInput(Cypress.env('penM2')).type(fishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2')).type(averageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2')).clear().type(fishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2')).type(penM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.toasterPopup()
             .should('have.text',successfulToasterPopupMessage)
        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.reportExistsInTheList(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)
    })

    it('should verify added data in the report',function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            fishHarvestedValueForPenM1,
            averageHarvestWeightValueForM1,
            fishPenAfterHarvestValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            fishHarvestedValueForPenM2,
            averageHarvestWeightValueForM2,
            fishPenAfterHarvestValueForM2,
            penM2Comment,
            successfulToasterPopupMessage)

        harvestRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM1'))
            .should('have.value', fishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1'))
            .should('have.value', averageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1'))
            .should('have.value', fishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', penM1Comment)
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM2'))
            .should('have.value', fishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2'))
            .should('have.value', averageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2'))
            .should('have.value', fishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', penM2Comment)
    })

    it("should update and verify the report with new values", function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            fishHarvestedValueForPenM1,
            averageHarvestWeightValueForM1,
            fishPenAfterHarvestValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            fishHarvestedValueForPenM2,
            averageHarvestWeightValueForM2,
            fishPenAfterHarvestValueForM2,
            penM2Comment,
            successfulToasterPopupMessage)

        harvestRegister.fishHarvestedInput(Cypress.env('penM1')).clear().type(updatedFishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1')).clear().type(updatedAverageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1')).clear().type(updatedFishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1')).clear().type(updatedPenM1Comment)
        harvestRegister.fishHarvestedInput(Cypress.env('penM2')).clear().type(updatedFishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2')).clear().type(updatedAverageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2')).clear().type(updatedFishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2')).clear().type(updatedPenM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM1'))
            .should('have.value', updatedFishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1'))
            .should('have.value', updatedAverageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1'))
            .should('have.value', updatedFishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', updatedPenM1Comment)
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM2'))
            .should('have.value', updatedFishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2'))
            .should('have.value', updatedAverageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2'))
            .should('have.value', updatedFishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', updatedPenM2Comment)
    })

    it('should delete the report', function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            fishHarvestedValueForPenM1,
            averageHarvestWeightValueForM1,
            fishPenAfterHarvestValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            fishHarvestedValueForPenM2,
            averageHarvestWeightValueForM2,
            fishPenAfterHarvestValueForM2,
            penM2Comment,
            successfulToasterPopupMessage)

        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.deleteHarvestReportItem().click()
        harvestRegister.confirmDeleteReportButton().click()
        harvestRegister.pageDataIsLoaded()
        harvestRegister.reportExistsInTheList(reportDate)
            .should('not.exist')
    })

    it('should delete one pen from the report', function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            fishHarvestedValueForPenM1,
            averageHarvestWeightValueForM1,
            fishPenAfterHarvestValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            fishHarvestedValueForPenM2,
            averageHarvestWeightValueForM2,
            fishPenAfterHarvestValueForM2,
            penM2Comment,
            successfulToasterPopupMessage)

        harvestRegister.deletePenItem(Cypress.env('penM2')).click()
        harvestRegister.saveButton().click()
        harvestRegister.pageDataIsLoaded()
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('not.exist')
    })


})