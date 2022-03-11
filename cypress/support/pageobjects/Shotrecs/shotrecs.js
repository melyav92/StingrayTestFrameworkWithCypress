export class Shotrecs {
    customerDropdown(){
      return cy.get('#scp-customers-list')
    };

    locationDropdown(){
        return cy.get('#scp-locations-list')
    };

    fromDatePicker(){
        return cy.get('#scp-from-date-picker')
    };

    toDatePicker(){
      return cy.get('#scp-to-date-picker')
    };

    showBtn(){
        return cy.get('#scp-show-btn')
    };

    patchesImagesInTheList(){
        return cy.get('#scp-images-grid-container')
    };

    viewMode(){
        return cy.get('.checked').children()
    };

    selectPatchesViewMode(){
        return cy.contains('View Patch')
    };

    selectCustomerOrAndLocationIfDropdownsExist(customer = Cypress.env('bolaksCustomer'), location = Cypress.env('fusavikaLocation')){
        cy.wait(1500)

        cy.get('body').then((body)=>{

            if(body.find('#scp-customers-list').length === 1){

                this.customerDropdown().select(customer)
                this.locationDropdown().select(location)

            }else if (body.find('#scp-locations-list').length === 1){
                this.locationDropdown().select(location)

            }
        })

    };



}