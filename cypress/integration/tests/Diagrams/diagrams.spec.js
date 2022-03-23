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

    it('should verify that Image based lice count metrics data is returned without errors', function () {
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

    it.only('should verify that Automated lice count metric data is returned without errors', function () {
        cy.visit(`/en/Results/Diagrams?CustomerId=48&From=2022-03-01&To=2022-03-23&Ms.M[0]=LiceAutomatedCountsAverage&Dss.L[0]=${Cypress.env('locationId')}`)
        diagrams.generateButton().click();

        diagrams.autAFLiceMetricInTheLegend()
            .should('exist')
            .and('be.visible');

    });

    it('should verify that Image based Diagnostics counts metrics data is returned without errors', function () {
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


})