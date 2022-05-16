import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";
import navigatorData from "/cypress/fixtures/Navigator/navigator-data.js";
import favoritePositions from "/cypress/fixtures/Navigator/favorite-positions.js";
import {FavoritePositions} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/favorite-positions";


let manualLogin = new ManualLoginWithPasteCookies();
let commands = new NavigatorNodeLevelPanel();
let positions = new FavoritePositions();


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
        commands.changeGranularityForTheNode().click('center');
        commands.changeGranularityForTheNode().click(`${navigatorData["setGranularity0.5m"]}`);
        commands.toasterPopup()
           .should('be.visible')
           .and('have.class', 'toast-success')
           .and('have.text', 'Granularity value is saved successfully');

        commands.getCurrentGranularityValue();
        cy.get('@granularity').then((granularity)=>{
            commands.currentGranularityValue().should('eq', `${granularity}`)
        });

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

        commands.getCurrentGranularityValue();
        cy.get('@granularity').then((granularity)=>{
            commands.executingCommandTarget().should('contain', `${granularity}`)
        });

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send LEFT command by using left arrow from "Controls" section ', function () {
        commands.leftArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.leftArrowCommandName} command is successfully created`)
        commands.getCurrentGranularityValue();
        cy.get('@granularity').then((granularity)=>{
            commands.executingCommandTarget().should('contain', `${granularity}`)
        });

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send DOWN command by using down arrow from "Controls" section ', function () {
        commands.downArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.downArrowCommandName} command is successfully created`);
        commands.getCurrentGranularityValue();
        cy.get('@granularity').then((granularity)=>{
            commands.executingCommandTarget().should('contain', `${granularity}`)
        });

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send UP command by using UP arrow from "Controls" section ', function () {
        commands.upArrowButton().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.upArrowCommandName} command is successfully created`);
        commands.getCurrentGranularityValue();
        cy.get('@granularity').then((granularity)=>{
            commands.executingCommandTarget().should('contain', `${granularity}`)
        });

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send AWAY command by using away button from "Controls" section ', function () {
        commands.awayButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.awayCommandName} command is successfully created`);

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send HOME command by using home from "Controls" section ', function () {
        commands.homeButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.homeCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send DOCK command by using dock button from "Controls" section ', function () {
        commands.dockButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.dockCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send LOCK command by using lock button from "Controls" section', function () {
        commands.lockButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.lockCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send UNLOCK command by using unlock button from "Controls" section', function () {
        commands.unLockButton().click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.unLockCommandName} command is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send Light ON/Off command for the node from "Controls" section ', function () {
        commands.lightButtonFunctionalityTest();

    });

    it('should verify that the user is able to send the node to the DAY favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.dayPosition);
        commands.goToFavoritePositionButton(favoritePositions.dayPositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the NIGHT favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.nightPosition);
        commands.goToFavoritePositionButton(favoritePositions.nightPositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the STORM favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.stormPosition);
        commands.goToFavoritePositionButton(favoritePositions.stormPositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the CLEAN favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.cleanPosition);
        commands.goToFavoritePositionButton(favoritePositions.cleanPositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the PRE-CLEAN favorite position by clicking on "GO" button in the favorite positions table', function () {
        commands.goToFavoritePositionButton(favoritePositions.preCleanPositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the ALT-1 favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.alt1Position);
        commands.goToFavoritePositionButton(favoritePositions.alt1PositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the ALT-2 favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.alt2Position);
        commands.goToFavoritePositionButton(favoritePositions.alt2PositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });

    it('should verify that the user is able to send the node to the CUSTOM favorite position by clicking on "GO" button in the favorite positions table', function () {
        positions.sendCreteFavoritePositionRequest(navigatorData.customPosition);
        commands.goToFavoritePositionButton(favoritePositions.customPositionType).click();
        commands.yesProceedButtonInThePopup().click();
        commands.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', `${navigatorData.goToFavoritePositionCommandName} command for node #${Cypress.env('demo-001NodeSerialNumber')} is successfully created`)

        commands.stopMovementButton().click();

    });


})