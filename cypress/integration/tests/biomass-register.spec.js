import {BiomassRegister} from "../../support/pageobjects/biomass-register";
import {LoginPage} from "../../support/pageobjects/login-page";

const seaTemperature = '8';
const numberOfFishValueForPenM1 = 40000;
const averageWeightValueForM1 = 4500;
const penM1Comment = "Comment for pen M1";
const numberOfFishValueForPenM2 = 60000;
const averageWeightValueForM2 = 6500;
const penM2Comment = "Comment for pen M2";
const salmon = "Salmon";
const trout = "Trout";
const successfulToasterPopupMessage = 'Biomass saved';
let reportDate = Cypress.moment().format("DD/MM/YYYY");
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




let biomassRegister = new BiomassRegister();
let login = new LoginPage()

describe('Biomass register',function (){
    beforeEach(function (){
        cy.visit('/en/Authentication/Login/?ReturnUrl=%2fen%2fBiomass%2fRegister')
       login.loginToThePage(Cypress.env('username'), Cypress.env('password'))
       biomassRegister.pageDataIsLoaded()
       biomassRegister.sendDeleteReportRequest(reportDate,Cypress.env('locationId'))
    })

    after(function (){
        biomassRegister.sendDeleteReportRequest(reportDate,Cypress.env('locationId'))
    })


    it('should register biomass report for the current date',function (){
        biomassRegister.addNewBiomassCountButton().click();
        biomassRegister.selectCurrentDate()
        biomassRegister.seaTemperatureInput().type(seaTemperature);
        biomassRegister.pensDropdown().click();
        biomassRegister.penItem(Cypress.env('penM1')).click();
        biomassRegister.pensDropdown().click();
        biomassRegister.penItem(Cypress.env('penM2')).click();
        biomassRegister.addPensButton().click();
        biomassRegister.averageWeightInput(Cypress.env('penM1')).type(averageWeightValueForM1)
        biomassRegister.numberOfFishInput(Cypress.env('penM1')).clear().type(numberOfFishValueForPenM1);
        biomassRegister.commentForPenInput(Cypress.env('penM1')).type(penM1Comment)
        biomassRegister.numberOfFishInput(Cypress.env('penM2')).clear().type(numberOfFishValueForPenM2);
        biomassRegister.averageWeightInput(Cypress.env('penM2')).type(averageWeightValueForM2)
        biomassRegister.commentForPenInput(Cypress.env('penM2')).type(penM2Comment)
        biomassRegister.saveButton().click()

        biomassRegister.toasterPopup()
           .should('have.text',successfulToasterPopupMessage)

        biomassRegister.expandBiomassReportsListItem().click()
        biomassRegister.reportExistsInTheList(reportDate).next()
            .should('be.visible')
            .and("contain", reportDate)


    })

    it("should verify added data in the report",function (){
        biomassRegister.addBiomassReport(seaTemperature,
            Cypress.env('penM1'),
            numberOfFishValueForPenM1,
            averageWeightValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            numberOfFishValueForPenM2,
            averageWeightValueForM2,
            penM2Comment,
            successfulToasterPopupMessage,
            reportDate)
        cy.wait(2000)

        biomassRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        biomassRegister.numberOfFishInput(Cypress.env('penM1'))
            .should('have.value', numberOfFishValueForPenM1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.averageWeightInput(Cypress.env('penM1'))
            .should('have.value', averageWeightValueForM1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenReadOnly(Cypress.env('penM1'))
            .should('have.value',biomassForPenM1Value)
        biomassRegister.fishTypeInput(Cypress.env('penM1'))
            .should('have.text', salmon)
        biomassRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', penM1Comment)

        biomassRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        biomassRegister.numberOfFishInput(Cypress.env('penM2'))
            .should('have.value', numberOfFishValueForPenM2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.averageWeightInput(Cypress.env('penM2'))
            .should('have.value', averageWeightValueForM2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenReadOnly(Cypress.env('penM2'))
            .should('have.value',biomassForPenM2Value)
        biomassRegister.fishTypeInput(Cypress.env('penM2'))
            .should('have.text', salmon)
        biomassRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', penM2Comment)

    })

    it("should update the report with new values",function (){
        biomassRegister.addBiomassReport(seaTemperature,
            Cypress.env('penM1'),
            numberOfFishValueForPenM1,
            averageWeightValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            numberOfFishValueForPenM2,
            averageWeightValueForM2,
            penM2Comment,
            successfulToasterPopupMessage,
            reportDate)
        cy.wait(2000)
        biomassRegister.seaTemperatureInput().clear().type(seaTemperatureUpdate)
        biomassRegister.averageWeightInput(Cypress.env('penM1')).clear().type(averageWeightValueForM1Update)
        biomassRegister.numberOfFishInput(Cypress.env('penM1')).clear().type(numberOfFishValueForPenM1Update);
        biomassRegister.commentForPenInput(Cypress.env('penM1')).clear().type(penM1CommentUpdate)
        biomassRegister.troutFishTypeCheckBox(Cypress.env('penM1')).click()
        biomassRegister.numberOfFishInput(Cypress.env('penM2')).clear().type(numberOfFishValueForPenM2Update);
        biomassRegister.averageWeightInput(Cypress.env('penM2')).clear().type(averageWeightValueForM2Update)
        biomassRegister.commentForPenInput(Cypress.env('penM2')).clear().type(penM2CommentUpdate)
        biomassRegister.troutFishTypeCheckBox(Cypress.env('penM2')).click()
        biomassRegister.saveButton().click()
        biomassRegister.biomassReportIsLoaded()
        cy.wait(2000)
//pen M1 data
        biomassRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('contain.text', Cypress.env('penM1'))
        biomassRegister.numberOfFishInput(Cypress.env('penM1'))
            .should('have.value', numberOfFishValueForPenM1Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.averageWeightInput(Cypress.env('penM1'))
            .should('have.value', averageWeightValueForM1Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenReadOnly(Cypress.env('penM1'))
            .should('have.value',biomassForPenM1ValueUpdated)
        biomassRegister.fishTypeInput(Cypress.env('penM1'))
            .should('have.text', trout)
        biomassRegister.commentForPenInput(Cypress.env('penM1'))
            .should('have.value', penM1CommentUpdate)
//pen M2 data
        biomassRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('contain.text', Cypress.env('penM2'))
        biomassRegister.numberOfFishInput(Cypress.env('penM2'))
            .should('have.value', numberOfFishValueForPenM2Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.averageWeightInput(Cypress.env('penM2'))
            .should('have.value', averageWeightValueForM2Update.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
        biomassRegister.biomassForPenReadOnly(Cypress.env('penM2'))
            .should('have.value',biomassForPenM2ValueUpdated)
        biomassRegister.fishTypeInput(Cypress.env('penM2'))
            .should('have.text', trout)
        biomassRegister.commentForPenInput(Cypress.env('penM2'))
            .should('have.value', penM2CommentUpdate)

    })

    it("should delete the report", function (){
        biomassRegister.addBiomassReport(seaTemperature,
            Cypress.env('penM1'),
            numberOfFishValueForPenM1,
            averageWeightValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            numberOfFishValueForPenM2,
            averageWeightValueForM2,
            penM2Comment,
            successfulToasterPopupMessage,
            reportDate)

        biomassRegister.biomassReportIsLoaded()
        biomassRegister.expandBiomassReportsListItem().click()
        biomassRegister.deleteBiomassReportItem().click()
        biomassRegister.confirmDeleteReportButton().click()
        biomassRegister.biomassReportIsLoaded()

        biomassRegister.reportExistsInTheList(reportDate)
            .should("not.contain", reportDate)

    })

    it("should delete one pen from the report",function (){
        biomassRegister.addBiomassReport(seaTemperature,
            Cypress.env('penM1'),
            numberOfFishValueForPenM1,
            averageWeightValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            numberOfFishValueForPenM2,
            averageWeightValueForM2,
            penM2Comment,
            successfulToasterPopupMessage,
            reportDate)

        biomassRegister.biomassReportIsLoaded()
        cy.wait(2000)

        biomassRegister.deletePenItem(Cypress.env('penM2')).click({timeout:5000})
        biomassRegister.saveButton().click()
        biomassRegister.biomassReportIsLoaded()
        cy.wait(2000)

        biomassRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('not.exist')
    })

    it("should add one more pen to the report",function (){
        biomassRegister.addBiomassReport(seaTemperature,
            Cypress.env('penM1'),
            numberOfFishValueForPenM1,
            averageWeightValueForM1,
            penM1Comment,
            Cypress.env('penM2'),
            numberOfFishValueForPenM2,
            averageWeightValueForM2,
            penM2Comment,
            successfulToasterPopupMessage,
            reportDate)

        biomassRegister.biomassReportIsLoaded()
        biomassRegister.pensDropdown().click();
        biomassRegister.penItem(Cypress.env('penM3')).click();
        biomassRegister.addPensButton().click();
        biomassRegister.averageWeightInput(Cypress.env('penM3')).clear().type(averageWeightValueForM1)
        biomassRegister.numberOfFishInput(Cypress.env('penM3')).clear().type(numberOfFishValueForPenM1);
        biomassRegister.commentForPenInput(Cypress.env('penM3')).type(penM1Comment)
        biomassRegister.saveButton().click()
        biomassRegister.biomassReportIsLoaded()
        cy.wait(2000)

        biomassRegister.getPenObjectByName(Cypress.env('penM1'))
            .should('exist')
        biomassRegister.getPenObjectByName(Cypress.env('penM2'))
            .should('exist')
        biomassRegister.getPenObjectByName(Cypress.env('penM3'))
            .should('exist')
    })

})