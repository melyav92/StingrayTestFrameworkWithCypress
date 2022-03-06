import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {LiveVideo} from "../../../support/pageobjects/LiveVideo/live-video";


let manualLogin = new ManualLoginWithPasteCookies();
let liveVideo = new LiveVideo();


describe("Live video page",function () {
    beforeEach(function () {
        manualLogin.manualLoginWithPasteCookies()
        cy.visit('/en/Live/Video')
        liveVideo.selectCustomerLocationOnPopupOpen()

    });

    it('should verify that there is streaming available for Su Detection Camera type', function () {
        liveVideo.selectSuDetectionCameraFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Su Color camera type', function () {
        liveVideo.selectSuColorCamFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Su Far camera type ', function () {
        liveVideo.selectSuFarCamFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Bu Periscope Home camera type', function () {
        liveVideo.selectBuPeriscopeHomeFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Bu Periscope Away camera type', function () {
        liveVideo.selectBuPeriscopeAwayFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

    it('should verify that there is streaming available for Bu Down camera type', function () {
        liveVideo.selectBuDownCamFilter()
        liveVideo.nodeCameraBoxWithStreaming().should('have.class', 'scp-camera-stream-image-block')
    });

})