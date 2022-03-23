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










}