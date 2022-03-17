import {NavigatorLocationLevelPanel} from "../../../../support/pageobjects/Navigator/LocationLevePanel/navigator-location-level-panel";
import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";


let manualLogin = new ManualLoginWithPasteCookies();
let navigatorLocation = new NavigatorLocationLevelPanel();
let navigatorNode = new NavigatorNodeLevelPanel();

describe("Navigator location level panel", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Navigator/Location');
        navigatorLocation.getFirstNodeInTheLocationToJump();
        navigatorLocation.selectCustomerOrAndLocationIfDropdownsExist();

    });

    it('should verify that there is streaming available for Su Detection camera types', function () {
        navigatorLocation.selectSuDetectionCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Su Color camera type', function () {
        navigatorLocation.selectSuColorcamCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Su Far camera type ', function () {
        navigatorLocation.selectSuFarcamCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Bu Periscope Home camera type', function () {
        navigatorLocation.selectBuPeriscopeHomeCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Bu Periscope Away camera type', function () {
        navigatorLocation.selectBuPeriscopeAwayCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify that there is streaming available for Bu Down camera type', function () {
        navigatorLocation.selectBuDowncamCameraType()
        navigatorLocation.nodeCameraBoxWithStreaming().should('have.css', 'display', 'inline')
            .and('have.attr', 'src')
    });

    it('should verify jump to Su number functionality', function () {
        cy.get('@nodeToJump').then((nodeToJump)=>{

            navigatorLocation.jumpToSuNumberInput().type(`${nodeToJump}{enter}`)
            navigatorNode.selectedNodeOnNodeLevelPage().should('contain', nodeToJump)
        })

    });


})

