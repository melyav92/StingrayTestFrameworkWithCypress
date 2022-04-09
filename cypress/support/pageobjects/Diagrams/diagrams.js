export class Diagrams{
    generateButton(){
              return cy.get('#scp-generate-diagram-button');
    };

    customerDropdown(){
        return cy.get('#scp-customer-select');
    };

    expandMetricsTree(){
        return cy.get('.expand-icon.fa-angle-right');
    };

    dataSeriesTreeISLoadedAndVisible(){
        return  cy.get('#scp-data-series-tree')
            .should('be.visible');
    };

    selectCustomerIfDropdownsExist(customer = Cypress.env('bolaksCustomer')){
        cy.wait(1000);

        cy.get('body').then((body)=>{

            if(body.find('#scp-customer-select').length === 1){
                this.customerDropdown().select(customer);
                this.dataSeriesTreeISLoadedAndVisible();

            }
            this.dataSeriesTreeISLoadedAndVisible();

        })

    };

    sendSaveBiomassReportRequest(){
        cy.request(
            {
                method: 'POST',
                url: '/api/biomass/save',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `BiomassMaster%5BId%5D=0&BiomassMaster%5BLocationId%5D=${Cypress.env('locationId')}&BiomassMaster%5BFormattedDate%5D=08%2F03%2F2022&BiomassMaster%5BTemperature%5D=&BiomassMaster%5BOriginalCountedDate%5D=&BiomassItems%5B0%5D%5BPenId%5D=${Cypress.env('penM1Id')}&BiomassItems%5B0%5D%5BPenName%5D=${Cypress.env('penM1')}&BiomassItems%5B0%5D%5BFishPerPen%5D=45550&BiomassItems%5B0%5D%5BAverageWeight%5D=4500&BiomassItems%5B0%5D%5BComment%5D=&BiomassItems%5B0%5D%5BpenFishType%5D=0`

            });
    };

    sendSaveManualLiceCountReportRequest(){
        cy.request(
            {
                method: 'POST',
                url: '/api/lice-count/save',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `LocationId=${Cypress.env('locationId')}&OriginalCountedDate=2022-03-08&NewCountedDate=2022-03-08&Temperature=&TriggerLevel=2&CountingMode=1&PenLiceCounts%5B0%5D%5BPenId%5D=${Cypress.env('penM1Id')}&PenLiceCounts%5B0%5D%5BPenName%5D=${Cypress.env('penM1')}&PenLiceCounts%5B0%5D%5BFixedStagesCount%5D=1&PenLiceCounts%5B0%5D%5BMobilesCount%5D=2&PenLiceCounts%5B0%5D%5BAdultFemaleCount%5D=3&PenLiceCounts%5B0%5D%5BCaligusCount%5D=1&PenLiceCounts%5B0%5D%5BFishCount%5D=10`

            });
    };

    sendSavePenCommentRequest(){
        cy.request(
            {
                method: 'POST',
                url: '/en/PenComments/AddComment',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `scp-pen-select=${Cypress.env('penM1Id')}&Date=08%2F03%2F2022&Comment=test+pen+comment&PenIds%5B0%5D=${Cypress.env('penM1Id')}&CustomerId=${Cypress.env('bolaksCustomerId')}&LocationId=${Cypress.env('locationId')}`

            }).its('status').should('eq', 200);
    };

    sendSaveHarvestReportRequest(){
        cy.request(
            {
                method: 'POST',
                url: '/api/harvests/harvest',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `HarvestMaster%5BId%5D=0&HarvestMaster%5BLocationId%5D=${Cypress.env('locationId')}&HarvestMaster%5BFormattedDate%5D=08%2F03%2F2022&HarvestMaster%5BCountedDate%5D=2022-03-08&HarvestMaster%5BOriginalCountedDate%5D=&HarvestItems%5B0%5D%5BId%5D=0&HarvestItems%5B0%5D%5BPenId%5D=${Cypress.env('penM1Id')}&HarvestItems%5B0%5D%5BPenName%5D=${Cypress.env('penM1')}&HarvestItems%5B0%5D%5BFishHarvested%5D=3333&HarvestItems%5B0%5D%5BAverageHarvestWeight%5D=45000&HarvestItems%5B0%5D%5BFishPerPenAfterHarvest%5D=45550&HarvestItems%5B0%5D%5BComment%5D=`

            }).its('status').should('eq', 200);
    };

    sendSaveTreatmentsReportRequest(){
        cy.request(
            {
                method: 'POST',
                url: '/api/treatments/treatment',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `TreatmentMaster%5BId%5D=-1&TreatmentMaster%5BLocationId%5D=${Cypress.env('locationId')}&TreatmentMaster%5BTreatmentDate%5D=2022-03-08&TreatmentMaster%5BOriginalTreatmentDate%5D=Invalid+date&TreatmentMaster%5BFormattedDate%5D=08%2F03%2F2022&TreatmentItems%5B0%5D%5BPenId%5D=${Cypress.env('penM1Id')}&TreatmentItems%5B0%5D%5BPenName%5D=${Cypress.env('penM1')}&TreatmentItems%5B0%5D%5BComment%5D=&TreatmentItems%5B0%5D%5BTreatmentTypeId%5D=15&TreatmentItems%5B0%5D%5BFishPerPen%5D=45550`,
                failOnStatusCode: false

            });
    };

//Events tree
    penCommentsEvent(){
        return cy.get('.scp-checkable-tree-node-label').contains('Pen comments');
    };

    harvestsEvent(){
        return cy.get('.scp-checkable-tree-node-label').contains('Harvests');
    };

    treatmentsEvent(){
        return cy.get('.scp-checkable-tree-node-label').contains('Treatments');
    };

//Metrics tree groups
    manualLiceCountMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Manual lice count');
    };

    imgBasedLiceCountMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Image based lice count');
    };

    automatedLiceCountMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Automated counts');
    };

    operationsMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Operations');
    };

    customerBiometricsMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Customer Biometrics');
    };

    stingrayBiometricsMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Stingray Biometrics');
    };

    imageBasedDiagnosticsMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Image based counts');
    };

    automatedDiagnosticsMetricsGroup(){
        return cy.get('.scp-checkable-tree-node-label').contains('Automated measurements');
    };

//events data on the graph
    penCommentsEventOnTheGraph(){
        return cy.get('.c3-xgrid-line').contains('Pen comment');
    };

    harvestsEventOnTheGraph(){
        return cy.get('.c3-xgrid-line').contains('Harvest');
    };

    treatmentsEventOnTheGraph(){
        return cy.get('.c3-xgrid-line').contains('Treatment');
    };



//metrics data in the legend under the graph
    locationObjectInLegend(){
        return cy.get('.scp-chart-legend-group-name')
            .contains(`${Cypress.env('fusavikaLocation')}`)
            .parents('div.scp-chart-legend-grouped-item');
    };

//Manual lice counts
    manAFLiceMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Adult females');
    };

    manMobilesMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Mobiles');
    };

    manFixedStagesMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Fixed stages');
    };

    manCaligusMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Caligus');
    };

    triggerLevel(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('Trigger level');
    };

//Image based lice counts
    imgAFMetricInLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('IMG Adult females');
    };

    imgMobilesMetricInLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('IMG Mobiles');
    };

//Automated lice counts
    autAFLiceMetricInTheLegend(){
      return this.locationObjectInLegend()
          .find('.scp-chart-legend-metrics-item-part')
          .contains('AUT Adult females');
    };

//Operations section
    pulsesMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('Pulses');
    };

    upTimeMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('UpTime');
    };

    fishPassingsMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('Fish passings');
    };

//Biometrics section
    manFishStockMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Fish stock');
    };

    manFishWeightMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Fish weight');
    };

    manBiomassMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('MAN Fish weight');
    };

    autFishWeightMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('AUT Fish weight');
    };

//Image based diagnostics section
    imgFishWithUlcersMetricInLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('IMG Fish with ulcers');
    };

    imgMatureFishMetricInLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('IMG Mature fish');
    };

    imgSnoutDamageMetricInLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('IMG Snout damage');
    };

//Automated diagnostics section
    autFishWithUlcersMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('AUT Fish with ulcers');
    };

    autSwimSpeedMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('AUT Swimspeed');
    };

    autMatureFishMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('AUT Mature fish');
    };


}