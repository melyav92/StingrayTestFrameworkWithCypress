import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {ImgBasedAnalysisCalendar} from "../../../support/pageobjects/ImageBasedAnalysisCalendar/img-based-analysis-calendar";
import {ManualLiceRegister} from "../../../support/pageobjects/ManualRegisterPages/manual-lice-register";


let manualLogin = new ManualLoginWithPasteCookies();
let selectCustomerAndOrLocationDropdown = new ManualLiceRegister();
let imgBasedAnalysisCalendar = new ImgBasedAnalysisCalendar();


describe("Image based analysis calendar page",function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/ImageBasedAnalysis/Register?year=2022&imageBasedAnalysisMode=User');
        selectCustomerAndOrLocationDropdown.selectCustomerOrAndLocationIfDropdownsExist();
        imgBasedAnalysisCalendar.pageDataLoaded()

    });

    it('should verify that Lice context data exists and returned without errors ', function () {
        imgBasedAnalysisCalendar.liceCountContextFilter().click();
        imgBasedAnalysisCalendar.liceCountContextFilter()
            .should('have.class', 'scp-selected');
        imgBasedAnalysisCalendar.daysWithSequencesAvailableInTheCalendar()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Ulcer context data exists and returned without errors ', function () {
        imgBasedAnalysisCalendar.ulcerCountContextFilter().click();
        imgBasedAnalysisCalendar.ulcerCountContextFilter()
            .should('have.class', 'scp-selected');
        imgBasedAnalysisCalendar.daysWithSequencesAvailableInTheCalendar()
            .should('exist')
            .and('be.visible')

    });

    it('should verify that Maturation context data exists and returned without errors ', function () {
        imgBasedAnalysisCalendar.maturationCountContextFilter().click();
        imgBasedAnalysisCalendar.maturationCountContextFilter()
            .should('have.class', 'scp-selected');
        imgBasedAnalysisCalendar.daysWithSequencesAvailableInTheCalendar()
            .should('exist')
            .and('be.visible')

    });

    it('should verify that Snout damage context data exists and returned without errors ', function () {
        imgBasedAnalysisCalendar.snoutDamageCountContextFilter().click();
        imgBasedAnalysisCalendar.snoutDamageCountContextFilter()
            .should('have.class', 'scp-selected');
        imgBasedAnalysisCalendar.daysWithSequencesAvailableInTheCalendar()
            .should('exist')
            .and('be.visible')

    });


})


