export class NavigatorLocationLevelPanel {
    customerDropdown(){
        return cy.get('#scp-navigator-customers-list')
    };

    locationDropdown(){
        return cy.get('#scp-navigator-locations-list')
    };

    setLocationButton(){
      return cy.get('#scp-start-streaming-button')
    };

    nodeCameraBoxWithStreaming(){
      return cy.get('img.scp-camera-stream-image')
    };

    selectSuDetectionCameraType(){
        return cy.get('[data-cam-type-value="leftCam"]').click()
    };

    selectSuColorcamCameraType(){
        return cy.get('[data-cam-type-value="observationCam"]').click()
    };

    selectSuFarcamCameraType(){
        return cy.get('[data-cam-type-value="farCam"]').click()
    };

    selectBuPeriscopeHomeCameraType(){
        return cy.get('[data-cam-type-value="periscopeHomeCam"]').click()
    };

    selectBuPeriscopeAwayCameraType(){
        return cy.get('[data-cam-type-value="periscopeAwayCam"]').click()
    };

    selectBuDowncamCameraType(){
        return cy.get('[data-cam-type-value="downCam"]').click()
    };





    selectCustomerOrAndLocationIfDropdownsExist(customer = Cypress.env('demoCustomer'), location = Cypress.env('demoLocation')){
        cy.wait(1500)

        cy.get('body').then((body)=>{

            if(body.find('#scp-navigator-customers-list').length === 1){

                this.customerDropdown().select(customer)
                this.locationDropdown().select(location)
                this.setLocationButton().click()

            }else if (body.find('#scp-navigator-locations-list').length === 1){
                this.locationDropdown().select(location)
                this.setLocationButton().click()

            }
        })

    };


}