import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {LiveVideo} from "../../../../support/pageobjects/LiveVideo/live-video";


let manualLogin = new ManualLoginWithPasteCookies();
let liveVideo = new LiveVideo();


describe("Live video page",function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies()
        cy.visit('/en/Live/Video')

    });

    it('should verify that there is streaming available for all camera types', function () {
        liveVideo.selectSuDetectionCameraFilter()
        liveVideo.nodeCameraBox().should('have.class', 'scp-camera-stream-image-block')

        liveVideo.selectSuColorCamFilter()
        liveVideo.nodeCameraBox().should('have.class', 'scp-camera-stream-image-block')

        liveVideo.selectSuFarCamFilter()
        liveVideo.nodeCameraBox().should('have.class', 'scp-camera-stream-image-block')

        liveVideo.selectBuPeriscopeHomeFilter()
        liveVideo.nodeCameraBox().should('have.class', 'scp-camera-stream-image-block')

        liveVideo.selectBuPeriscopeAwayFilter()
        liveVideo.nodeCameraBox().should('have.class', 'scp-camera-stream-image-block')

        liveVideo.selectBuDownCamFilter()
        liveVideo.nodeCameraBox().should('have.class', 'scp-camera-stream-image-block')

    });


})