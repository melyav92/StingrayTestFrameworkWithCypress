import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {Diagrams} from "../../../support/pageobjects/Diagrams/diagrams";
import {Gallery} from "../../../support/pageobjects/Gallery/gallery";


let manualLogin = new ManualLoginWithPasteCookies();
let diagrams = new Diagrams();
let approveObservationsForAllContexts = new Gallery();



describe("Diagrams",function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();

    });

    it('should verify that Manual lice count metrics: MAN Adult females, MAN Mobiles, MAN Fixed Stages and MAN Calligus data is returned without errors', function () {
        diagrams.sendSaveManualLiceCountReportRequest();
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=ManualAdultFemaleAverage&Ms.M[1]=ManualMobilesAverage&Ms.M[2]=ManualFixedAverage&Ms.M[3]=ManualCalligusAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.manAFLiceMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.manMobilesMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.manFixedStagesMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.manCaligusMetricInTheLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Image based lice count: Adult females and Mobiles metrics data is returned without errors', function () {
        approveObservationsForAllContexts.approveObservationsForAllContexts()
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=ImageBasedAdultFemalesAverage&Ms.M[1]=ImageBasedMobilesAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.imgAFMetricInLegend()
            .should('exist')
            .and('be.visible');

        diagrams.imgMobilesMetricInLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Automated lice: Adult females count metric data is returned without errors', function () {
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=LiceAutomatedCountsAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.autAFLiceMetricInTheLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that pulses, uptime and fish passings metrics data is returned without errors', function () {
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=PulsesSum&Ms.M[1]=UpTimeAverage&Ms.M[2]=FishPassingsSum&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.pulsesMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.upTimeMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.fishPassingsMetricInTheLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Customer biometrics: MAN Fish stock, MAN Fish weight and MAN biomass metrics data is returned without errors', function () {
        diagrams.sendSaveBiomassReportRequest()
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=FishStockSum&Ms.M[1]=FishWeightAverage&Ms.M[2]=BiomassSum&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.manFishStockMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.manFishWeightMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.manBiomassMetricInTheLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that automated Stingray biometrics:AUT Fish weight metrics data is returned without errors', function () {
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=StingrayFishWeightAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.autFishWeightMetricInTheLegend()
            .should('exist')
            .and('be.visible')

    });

    it('should verify that Image based Diagnostics: Fish with ulcers, Mature fish and Snout damage counts metrics data is returned without errors', function () {
        approveObservationsForAllContexts.approveObservationsForAllContexts()
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=ImageBasedUlcersAverage&Ms.M[1]=ImageBasedMaturationAverage&Ms.M[2]=ImageBasedSnoutDamageAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.imgFishWithUlcersMetricInLegend()
            .should('exist')
            .and('be.visible');

        diagrams.imgMatureFishMetricInLegend()
            .should('exist')
            .and('be.visible');

        diagrams.imgSnoutDamageMetricInLegend()
            .should('exist')
            .and('be.visible');
        
    });

    it('should verify that automated Diagnostics counts metrics data is returned without errors', function () {
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=UlcersAverage&Ms.M[1]=SwimmingSpeedAverage&Ms.M[2]=MaturationAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.autFishWithUlcersMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.autSwimSpeedMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.autMatureFishMetricInTheLegend()
            .should('exist')
            .and('be.visible');
        
    });



})