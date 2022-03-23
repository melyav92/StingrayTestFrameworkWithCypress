export class SequenceAnalyzer {
    gotItButton (){
     return cy.get('button[data-action-type="OK"]');
    };

    frameEditor(){
        return cy.get('#markers-canvas');
    };

    imageInFrameEditor(){
        return cy.get('#image-layer').children();
    };

    imageInFramesList(){
        return cy.get('.list-item-image');
    };

    sequencesInTheSequenceList(){
        return cy.get('.scp-sa-fish-item');
    };

    hintLableInFrameEditor(){
        return cy.get('#scp-sa-editor-hint-label');
    };




    contextFilterInContextMenu(){
      return cy.get('.scp-sa-popup-analysis-context-item');
    };



   approveObservationBoundingBox(){
        return cy.get('.scp-sa-edit-mode-apply.scp-sa-edit-mode-btn');
   };
   approveAllButton(){
        return cy.get('#scp-sa-complete-all-contexts');
    };

    confirmApprove(){
    return cy.get('.scp-sa-popup-btn.scp-sa-action-btn.scp-sa-element-to-focus');
    };

}