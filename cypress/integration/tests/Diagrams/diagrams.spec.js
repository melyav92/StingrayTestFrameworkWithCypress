import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {Diagrams} from "../../../support/pageobjects/Diagrams/diagrams";
import {Gallery} from "../../../support/pageobjects/Gallery/gallery";


let manualLogin = new ManualLoginWithPasteCookies();
let diagrams = new Diagrams();
let approveObservationsForAllContexts = new Gallery();



describe("Diagrams",function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Results/Diagrams?From=2022-03-01&To=2022-03-23');
        diagrams.expandMetricsTree().click({multiple:true});
        diagrams.selectCustomerIfDropdownsExist();

    });

    it('should verify that Pen comments event data is returned without errors and it is displayed on the graph', function () {
        diagrams.sendSavePenCommentRequest();
        diagrams.penCommentsEvent().click();
        diagrams.generateButton().click();

        diagrams.penCommentsEventOnTheGraph()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Harvest event data is returned without errors and it is displayed on the graph', function () {
        diagrams.sendSaveHarvestReportRequest();
        diagrams.harvestsEvent().click()
        diagrams.generateButton().click();

        diagrams.harvestsEventOnTheGraph()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Treatments event data is returned without errors and it is displayed on the graph', function () {
        diagrams.sendSaveTreatmentsReportRequest()
        diagrams.treatmentsEvent().click()
        diagrams.generateButton().click();

        diagrams.treatmentsEventOnTheGraph()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Manual lice count metrics: MAN Adult females, MAN Mobiles, MAN Fixed Stages and MAN Calligus data is returned without errors', function () {
        diagrams.sendSaveManualLiceCountReportRequest();
        diagrams.manualLiceCountMetricsGroup().click();

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

        diagrams.triggerLevel()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Image based lice count: Adult females and Mobiles metrics data is returned without errors', function () {
        approveObservationsForAllContexts.approveObservationsForAllContexts();
        diagrams.imgBasedLiceCountMetricsGroup().click();
        diagrams.generateButton().click();

        diagrams.imgAFMetricInLegend()
            .should('exist')
            .and('be.visible');

        diagrams.imgMobilesMetricInLegend()
            .should('exist')
            .and('be.visible');

        diagrams.triggerLevel()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Automated lice: Adult females count metric data is returned without errors', function () {
        diagrams.automatedLiceCountMetricsGroup().click();
        diagrams.generateButton().click();

        diagrams.autAFLiceMetricInTheLegend()
            .should('exist')
            .and('be.visible');

        diagrams.triggerLevel()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that pulses, uptime and fish passings metrics data is returned without errors', function () {
        diagrams.operationsMetricsGroup().click();
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
        diagrams.sendSaveBiomassReportRequest();
        diagrams.customerBiometricsMetricsGroup().click();
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
        diagrams.stingrayBiometricsMetricsGroup().click();
        diagrams.generateButton().click();

        diagrams.autFishWeightMetricInTheLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Image based Diagnostics: Fish with ulcers, Mature fish and Snout damage counts metrics data is returned without errors', function () {
        approveObservationsForAllContexts.approveObservationsForAllContexts();
        diagrams.imageBasedDiagnosticsMetricsGroup().click();
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
        diagrams.automatedDiagnosticsMetricsGroup().click();
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

//TO DO: Tests for Events

})