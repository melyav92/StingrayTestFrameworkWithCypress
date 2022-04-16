import navigatorData from "../../../../fixtures/Navigator/navigator-data";

export class NavigatorNodeLevelPanel {
    selectedNodeOnNodeLevelPage(){
        const commandLogTable = cy.get('#scp-commands-log-table_wrapper')
            commandLogTable.should('be.visible');
        return cy.get('.scp-selected-node-info-value');
    };
//Change absolute position to section
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

//Controls section
    rightArrowButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-right-move-icon');
    };

    leftArrowButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-left-move-icon');
    };

    downArrowButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-down-move-icon');
    };

    upArrowButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-up-move-icon');
    };

    homeButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-home-btn');
    };

    awayButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-away-btn');
    };

    dockButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-dock-btn');
    };

    lockButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-lock-btn');
    };

    unLockButton(){
        this.buDownCamStreamingExists();
        return cy.get('.scp-navigator-controls-unlock-btn');
    };

    lightButton(){
        return cy.get('.scp-navigator-controls-down-light-btn');
    }

    lightButtonFunctionalityTest(){
        this.buDownCamStreamingExists();
        cy.get('body').then((body)=>{
            if(body.find('.scp-down-light-on').length === 1){

                this.lightButton().should('have.class', 'scp-down-light-on');
                this.lightButton().click();
                this.toasterPopup()
                    .should('be.visible')
                    .and('have.class', 'toast-success')
                    .and('have.text', `${navigatorData.bUDownLightOffCommandName} command is successfully created`);

                this.lightButton().should('not.have.class', 'scp-down-light-on');

            } else

            this.lightButton().should('not.have.class', 'scp-down-light-on');
            this.lightButton().click();
            this.toasterPopup()
                .should('be.visible')
                .and('have.class', 'toast-success')
                .and('have.text', `${navigatorData.bUDownLightOnCommandName} command is successfully created`)
            this.lightButton().should('have.class', 'scp-down-light-on');
        });
    }


    changeGranularityForTheNode(){
        this.buDownCamStreamingExists();
        return cy.get('#js-rangeslider-0')
    }

    currentGranularityValue() {
        return  cy.get('.scp-granulatiry-slider-value').invoke('text');
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

    executingCommandTarget(){
        return cy.get('.scp-command-target-value');
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