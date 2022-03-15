import {NavigatorLocationLevelPanel} from "../../../../support/pageobjects/Navigator/LocationLevePanel/navigatorLocationLevelPanel";
import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import navigator from "../../../../fixtures/Navigator/navigator-data.json";


let manualLogin = new ManualLoginWithPasteCookies();
let navigatorLocation = new NavigatorLocationLevelPanel();

describe("Navigator location level panel", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Navigator/Location');
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
        navigatorLocation.jumpToSuNumberInput().type(`${navigator.nodeSerialNumber}{enter}`)
        navigatorLocation.selectedNodeOnNodeLevelPage().should('contain', navigator.nodeSerialNumber)
    });


})

