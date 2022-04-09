export class NavigatorNodeLevelPanel {
    selectedNodeOnNodeLevelPage(){
        const commandLogTable = cy.get('#scp-commands-log-table_wrapper')
            commandLogTable.should('be.visible');
        return cy.get('.scp-selected-node-info-value');
    };

    verticalDirectionInput(){
      return cy.get('#scp-vertical-position-input');
    };

    goButton(){
        return cy.get('#scp-change-position-button');
    };

    yesProceedButtonInThePopup(){
        return cy.get('.scp-custom-popup-submit-popup');
    };

    successToasterPopup(){
        return cy.get('#toast-container').children();
    };

    stopMovementButton(){
        return cy.get('#scp-nav-stop-command')
    }






}