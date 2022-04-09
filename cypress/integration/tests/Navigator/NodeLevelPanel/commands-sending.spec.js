import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";


let manualLogin = new ManualLoginWithPasteCookies();
let commands = new NavigatorNodeLevelPanel();


describe("Navigator node level commands sending", function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Navigator/Node?nodeId=186');
        commands.selectedNodeOnNodeLevelPage().should('contain', 'DEMO-001');

    });

    it('should verify that the user is able to send node vertically from "Change absolute" position to section ', function () {
        commands.verticalDirectionInput().type('2');
        commands.goButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.successToasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
        //add and with command name

        commands.stopMovementButton().click();

    });


})