export class NavigatorNodeLevelPanel {
    selectedNodeOnNodeLevelPage(){
        const commandLogTable = cy.get('#scp-commands-log-table_wrapper')
            commandLogTable.should('be.visible');
        return cy.get('.scp-selected-node-info-value');
    };

    verticalDirectionInput(){
      return cy.get('#scp-vertical-position-input');
    };

    horizontalDirectionInput(){
        return cy.get('#scp-horizontal-position-input');
    };

    goButton(){
        this.buDownCamStreamingExists();
        return cy.get('#scp-change-position-button');
    };

    yesProceedButtonInThePopup(){
        return cy.get('.scp-custom-popup-submit-popup');
    };

    toasterPopup(){
        return cy.get('#toast-container').children();
    };

    stopMovementButton(){
        return cy.get('#scp-nav-stop-command');
    };

    buDownCamStreamingExists(){
        return cy.get('.scp-camera-stream-image').first()
            .should('have.css', 'display', 'block')
            .and('have.attr', 'src');
    };

    sendUnlockCommandRequest(){
      cy.request(
          {   method: 'POST',
              url: `/api/navigator/v4/${Cypress.env('demo-001NodeCableId')}/command`,
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  "Accept": "*/*",
                  "X-Requested-With": "XMLHttpRequest"
              },
              body: '{"payloadArg":{"moveArgs":{"locked":false}},"payloadKey":"Nav_Move"}'
          }
      ).its('status').should('eq', 200)

    };






}