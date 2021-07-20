import{HarvestRegister} from "../../support/pageobjects/harvest-register";
import {LoginPage} from "../../support/pageobjects/login-page";

let reportDate = Cypress.moment().format("DD/MM/YYYY");
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


    it('should register harvest report for the current date',function (){
        harvestRegister.addNewHarvestCountBtn().click()
        harvestRegister.selectCurrentDate()
        harvestRegister.pensDropdown().click()
        harvestRegister.penItem(Cypress.env('penM1')).click()
        harvestRegister.pensDropdown().click()
        harvestRegister.penItem(Cypress.env('penM2')).click()
        harvestRegister.addPensButton().click()
        harvestRegister.fishHarvestedInput(Cypress.env('penM1')).type(this.harvestData.fishHarvestedValueForPenM1)

        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1')).type(this.harvestData.averageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1')).clear().type(this.harvestData.fishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1')).type(this.harvestData.penM1Comment)
        harvestRegister.fishHarvestedInput(Cypress.env('penM2')).type(this.harvestData.fishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2')).type(this.harvestData.averageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2')).clear().type(this.harvestData.fishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2')).type(this.harvestData.penM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.toasterPopup()
             .should('have.text',this.harvestData.successfulToasterPopupMessage)
        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.reportExistsInTheList(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)
    })

    it('should verify added data in the report',function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            this.harvestData.fishHarvestedValueForPenM1,
            this.harvestData.averageHarvestWeightValueForM1,
            this.harvestData.fishPenAfterHarvestValueForM1,
            this.harvestData.penM1Comment,
            Cypress.env('penM2'),
            this.harvestData.fishHarvestedValueForPenM2,
            this.harvestData.averageHarvestWeightValueForM2,
            this.harvestData.fishPenAfterHarvestValueForM2,
            this.harvestData.penM2Comment,
            this.harvestData.successfulToasterPopupMessage)

        harvestRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.fishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.averageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.fishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.penM1Comment)
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.fishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.averageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.fishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.penM2Comment)
    })

    it("should update and verify the report with new values", function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            this.harvestData.fishHarvestedValueForPenM1,
            this.harvestData.averageHarvestWeightValueForM1,
            this.harvestData.fishPenAfterHarvestValueForM1,
            this.harvestData.penM1Comment,
            Cypress.env('penM2'),
            this.harvestData.fishHarvestedValueForPenM2,
            this.harvestData.averageHarvestWeightValueForM2,
            this.harvestData.fishPenAfterHarvestValueForM2,
            this.harvestData.penM2Comment,
            this.harvestData.successfulToasterPopupMessage)

        harvestRegister.fishHarvestedInput(Cypress.env('penM1')).clear().type(this.harvestData.updatedFishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1')).clear().type(this.harvestData.updatedAverageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1')).clear().type(this.harvestData.updatedFishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1')).clear().type(this.harvestData.updatedPenM1Comment)
        harvestRegister.fishHarvestedInput(Cypress.env('penM2')).clear().type(this.harvestData.updatedFishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2')).clear().type(this.harvestData.updatedAverageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2')).clear().type(this.harvestData.updatedFishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2')).clear().type(this.harvestData.updatedPenM2Comment)
        harvestRegister.saveButton().click()

        harvestRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.updatedFishHarvestedValueForPenM1)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.updatedAverageHarvestWeightValueForM1)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.updatedFishPenAfterHarvestValueForM1)
        harvestRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', this.harvestData.updatedPenM1Comment)
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        harvestRegister.fishHarvestedInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.updatedFishHarvestedValueForPenM2)
        harvestRegister.averageHarvestWeightInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.updatedAverageHarvestWeightValueForM2)
        harvestRegister.fishPenAfterHarvestInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.updatedFishPenAfterHarvestValueForM2)
        harvestRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', this.harvestData.updatedPenM2Comment)
    })

    it('should delete the report', function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            this.harvestData.fishHarvestedValueForPenM1,
            this.harvestData.averageHarvestWeightValueForM1,
            this.harvestData.fishPenAfterHarvestValueForM1,
            this.harvestData.penM1Comment,
            Cypress.env('penM2'),
            this.harvestData.fishHarvestedValueForPenM2,
            this.harvestData.averageHarvestWeightValueForM2,
            this.harvestData.fishPenAfterHarvestValueForM2,
            this.harvestData.penM2Comment,
            this.harvestData.successfulToasterPopupMessage)

        harvestRegister.expandHarvestReportsListItem().click()
        harvestRegister.deleteHarvestReportItem().click()
        harvestRegister.confirmDeleteReportButton().click()
        harvestRegister.pageDataIsLoaded()
        harvestRegister.reportExistsInTheList(reportDate)
            .should('not.exist')
    })

    it('should delete one pen from the report', function (){
        harvestRegister.addHarvestReport(Cypress.env('penM1'),
            this.harvestData.fishHarvestedValueForPenM1,
            this.harvestData.averageHarvestWeightValueForM1,
            this.harvestData.fishPenAfterHarvestValueForM1,
            this.harvestData.penM1Comment,
            Cypress.env('penM2'),
            this.harvestData.fishHarvestedValueForPenM2,
            this.harvestData.averageHarvestWeightValueForM2,
            this.harvestData.fishPenAfterHarvestValueForM2,
            this.harvestData.penM2Comment,
            this.harvestData.successfulToasterPopupMessage)

        harvestRegister.deletePenItem(Cypress.env('penM2')).click()
        harvestRegister.saveButton().click()
        harvestRegister.pageDataIsLoaded()
        harvestRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('not.exist')
    })


})