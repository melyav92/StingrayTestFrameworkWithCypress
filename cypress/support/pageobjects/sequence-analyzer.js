export class SequenceAnalyzer {
    gotItButton (){
     return cy.get('button[data-action-type="OK"]')
    };

    frameEditor(){
        return cy.get('#markers-canvas')
    };

    selectItemInContextMenu(){
      return cy.get('.scp-sa-ctx-menu-list-item')
    }

   approveObservationBoundingBox(){
        return cy.get('.scp-sa-edit-mode-apply.scp-sa-edit-mode-btn')
   }
   approveAllButton(){
        return cy.get('#scp-sa-complete-all-contexts')
    }

    confirmApprove(){
    return cy.get('.scp-sa-popup-btn.scp-sa-action-btn.scp-sa-element-to-focus')
    }

}