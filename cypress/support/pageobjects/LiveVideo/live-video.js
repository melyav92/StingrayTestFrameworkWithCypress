export class LiveVideo {
     selectSuDetectionCameraFilter(){
         return cy.get('.scp-navigation-group-menu button ')
             .contains('SU Detection Camera')
             .click()
    };

    selectSuColorCamFilter(){
        return cy.get('.scp-navigation-group-menu button ')
            .contains('SU Colorcam')
            .click()
    };

    selectSuFarCamFilter(){
        return cy.get('.scp-navigation-group-menu button ')
            .contains('SU Farcam')
            .click()
    };

    selectBuPeriscopeHomeFilter(){
        return cy.get('.scp-navigation-group-menu button ')
            .contains('BU Periscope Home')
            .click()
    };

    selectBuPeriscopeAwayFilter(){
        return cy.get('.scp-navigation-group-menu button ')
            .contains('BU Periscope Away')
            .click()
    };

    selectBuDownCamFilter(){
        return cy.get('.scp-navigation-group-menu button ')
            .contains('BU Downcam')
            .click()
    };

    nodeCameraBox(){
           return cy.get('.scp-camera-stream-block')
               .children('div')
    };


}