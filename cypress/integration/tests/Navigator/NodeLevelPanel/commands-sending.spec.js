import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";
import navigatorData from "/cypress/fixtures/Navigator/navigator-data.js";


let manualLogin = new ManualLoginWithPasteCookies();
let commands = new NavigatorNodeLevelPanel();


describe("Navigator node level commands sending", function (){
    before(function (){
        manualLogin.manualLoginWithPasteCookies();
        commands.sendUnlockCommandRequest();
    })

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit(`/en/Navigator/Node?nodeId=${Cypress.env('demo-001NodeSoId')}`);
        commands.selectedNodeOnNodeLevelPage().should('contain', `${Cypress.env('demo-001NodeSerialNumber')}`);

    });

    it('should verify that the user is able to send node vertically from "Change absolute" position to section ', function () {
        commands.verticalDirectionInput().type(navigatorData.verticalPositionValue);
        commands.goButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToPositionCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send node horizontally from "Change absolute" position to section ', function () {
        commands.horizontalDirectionInput().type(navigatorData.horizontalPositionValue);
        commands.goButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToPositionCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });


})