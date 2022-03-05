export class Shotrecs {
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
    }



}