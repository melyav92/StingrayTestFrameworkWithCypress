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

    it('should verify that the user is able to change GRANULARITY value for the node', function () {
        commands.changeGranularityForTheNode().click('left');
        commands.currentGranularityValue().should('not.eq', `${navigatorData.nodeGranularityValue}`)
        commands.changeGranularityForTheNode().click(`${navigatorData["setGranularity1.5m"]}`);
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Granularity value is saved successfully')
        commands.currentGranularityValue().should('eq', `${navigatorData.nodeGranularityValue}`)

    });

    it('should verify that the user is able to send node VERTICALLY from "Change absolute" position to section ', function () {
        commands.verticalDirectionInput().type(navigatorData.verticalPositionValue);
        commands.goButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToPositionCommandName} command is successfully created`);
        commands.executingCommandTarget().should('contain', `${navigatorData.verticalPositionValue}`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send node HORIZONTALLY from "Change absolute" position to section ', function () {
        commands.horizontalDirectionInput().type(navigatorData.horizontalPositionValue);
        commands.goButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToPositionCommandName} command is successfully created`)
        commands.executingCommandTarget().should('contain', `${navigatorData.horizontalPositionValue}`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send node HORIZONTALLY AND VERTICALLY from "Change absolute" position to section ', function () {
        commands.verticalDirectionInput().type(navigatorData.verticalPositionValue);
        commands.horizontalDirectionInput().type(navigatorData.horizontalPositionValue);
        commands.goButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToPositionCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send RIGHT command by using right arrow from "Controls" section ', function () {
        commands.rightArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.rightArrowCommandName} command is successfully created`)
        commands.executingCommandTarget().should('contain', `${navigatorData.nodeGranularityValue}`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send LEFT command by using right arrow from "Controls" section ', function () {
        commands.leftArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.leftArrowCommandName} command is successfully created`)
        commands.executingCommandTarget().should('contain', `${navigatorData.nodeGranularityValue}`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send Down command by using right arrow from "Controls" section ', function () {
        commands.downArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.downArrowCommandName} command is successfully created`);
        commands.executingCommandTarget().should('contain', `${navigatorData.nodeGranularityValue}`);

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send UP command by using right arrow from "Controls" section ', function () {
        commands.upArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.upArrowCommandName} command is successfully created`);
        commands.executingCommandTarget().should('contain', `${navigatorData.nodeGranularityValue}`);

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send AWAY command by using right arrow from "Controls" section ', function () {
        commands.awayButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.awayCommandName} command is successfully created`);

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send HOME command by using right arrow from "Controls" section ', function () {
        commands.homeButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.homeCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send DOCK command by using right arrow from "Controls" section ', function () {
        commands.dockButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.dockCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send LOCK command by using right arrow from "Controls" section', function () {
        commands.lockButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.lockCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send UNLOCK command by using right arrow from "Controls" section', function () {
        commands.unLockButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.unLockCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });




})