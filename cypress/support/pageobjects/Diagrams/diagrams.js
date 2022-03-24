export class Diagrams{
    generateButton(){
        return cy.get('#scp-generate-diagram-button');
    };

    locationObjectInLegend(){
        return cy.get('.scp-chart-legend-group-name')
            .contains(`${Cypress.env('fusavikaLocation')}`)
            .parents('div.scp-chart-legend-grouped-item');
    };

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

    autAFLiceMetricInTheLegend(){
      return this.locationObjectInLegend()
          .find('.scp-chart-legend-metrics-item-part')
          .contains('AUT Adult females');
    };

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

    autFishWeightMetricInTheLegend(){
        return this.locationObjectInLegend()
            .find('.scp-chart-legend-metrics-item-part')
            .contains('AUT Fish weight');
    };

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










}