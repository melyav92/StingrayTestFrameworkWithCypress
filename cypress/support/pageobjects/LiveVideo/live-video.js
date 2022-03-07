export class LiveVideo {

    customerDropdown(){
        return cy.get('#customer')
    };

    locationDropdown(){
       return cy.get('#location')
    };

    oKButton(){
        return cy.get('.confirm')
    };

    selectCustomerLocationIfPopupOpen(customer = Cypress.env('demoCustomer'), location = Cypress.env('demoLocation')){
        cy.wait(2000)

        cy.get('body').then((body)=>{

            if(body.find('#customer').length === 1){

                this.customerDropdown().select(customer)
                cy.get('#location').select(location)
                cy.get('.confirm').click()
            }else if (body.find('#location').length === 1){
                cy.get('#location').select(location)
                cy.get('.confirm').click()
            }
        })
    };

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

    nodeCameraBoxWithStreaming(){
           return cy.get('.scp-camera-stream-block')
               .children('div')
    };


}