import {NavigatorLocationLevelPanel} from "../../../../support/pageobjects/Navigator/LocationLevePanel/navigator-location-level-panel";
import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";


let manualLogin = new ManualLoginWithPasteCookies();
let navigatorLocation = new NavigatorLocationLevelPanel();
let navigatorNode = new NavigatorNodeLevelPanel();

describe("Navigator location level panel", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies('X2SzewSR9fVe2_nnGrrvvcrcbbIPaNra6AVeXISNRvhUv3lnqM3tW-110Ekm_ErdyPL56DdTEILB9fujq3tlkC8zUh6auoDMXDP8GG-KfN1M6xvG3hSk0TQ7hp2gF2JX5XaQWk5140TK5XgR131wvj0w6Cj4-sy308tsT7I1bDwnswugwGGE2eyuijt3-snSacxhsrYRGdS4Cc2MWzgM46ICPRNkTVvUivI5e-bb79BAC3eyYtjQo01A6nHGOrseHcfTH5b8RVNLIpUbvXd98mGIxNLCoNeWfEPDyhO-aKrp2172hOhRTem5-xoohRxBG5YRazb3e3ZrsFxtD4NqM6w_GwI5y8g9rwjpGSfPzeOVmLhhrI7C2GIReSJwd9DlEzGgfbfk13frukKRdqtXmGCs4N2H34moulnBLyA7ADgYEBjcW9sfNPF3BqfNjZx5dR5r_ceIqCZWN039kzIDoHsFSWgLfkZ00FT122PL-aP5Tva0Yj_kJ77XnIT2CN5OossLnDChWVsjVUVIAvYjnpZdnr99GaE5Flz2ZTs84eAf_rZ6Wx00AcL0lTZ6_THdQsdKNLHNnZ_xG7GhLHrgKwob0mnXt2D752-apBim7CA6z-xfWkfwtO-Rj8eLHpIVMAd4ZeQNNk5sueCay5gANmFRUgGOXPWzzoc3hQS33ZIntrkkfb35juPFzOrZSJDzkbKdcOYBj2nd2b0nzxpHk8tISQ9VOQp-bFtrkAnraMPDO4i1374UsHA8_3ObuM1kSDLVu65iKr5bW-FjaTAMn123nzVHem7ZCRJNJOV1ZYCp1EwpV_jyZNaLMCSXn8IVDDOUb_gwR1kEped8DHJGzWtupb5mBh4joWm_H9w_q8SE5sQWliH67Fa8KPSHHF49RShoIJ175b3jfeSRMOMNS_Cc2vbFhWHg2gmm6b2uqteCkfhm0FGko3C9uKJen0jcMOz_XcJ83_tz3GxaKekYmWFngJ7iuP3z3OxsXlAaEwdQBGwf8iysloLv6xuARMse1uI1YvYj3srd7ErTiEXwJlnh-UQI-RreSmbY9Zs-rUDJwGoFrr7eWemmvoz2VR_o9uOc-Jq16sC3LrX8OBPnnYT6Mj-jSLWieb4wi3zIcb5Gd1AOqiiUH8YaIYpvFaggiJb9lSJqI2IuBn8qNwjSz-xjoRfgjKEi3TxhJkYyRY-YWIz4TCzkeW7T8MekWXMQ1F9Gr6EfHoMNQb7IFXIJKNUXBRqe4SCPEmFaLLFlKmAaq0WZd7SO-fb8jWhsYwO4zDzlCTI6lRniQy16oluCGIPyANm451qIMDsE-zJaZV7j-4IERMQ8MdZUb3KjvHI6SFpU0_z8-DCvnPzDlWm4BPKeaV9IhE5zRaA9L_96nN4cNvcvMa-fCHyKtR7rcJyo2EEfey-gVEivuIc5HQdkCq4cVMwgPA9-NMJ-4H9kIGJ04OD3lIyBFmnTmuwUhkLhQH1IYIdfNnvsqiiAeqaHNHfnlzcjGnqDaCrHWrhgPYIgLwvh9n14f3PERPbhxnLnPWiMORHGIcqg_5dtlAXjEnZtI_vAcFIcGPkw2G5VlPi6A_8UzkzcIJhCIKA4DJEKIf2KJv8HS360V8e50ObKC8IDdspR6zdNvyREABDgZC9WGxP2XCnu7_ni1FDX_wKk6J2jCbgkGaDg8XISbBNrVGyskXQRPTJV5w4ZvTjDAms2UqdlpAUEvvgdDGopU5eQI6DSJ5CjLrrzZj1TD_cIjAJ5fTMOgG-dD61NSl-no-RuoB6BKHMHoQZE4IpCR8B27hhGQ_WcToXvYool5lebFRVcLXzB2j8cMg9OrNU2RTNY6BHPfrrD9ZCs0JlceyLUJoMuR-zaEyLx7rT3qLQSrv_hLP0A8PGCBeIuZ1FK2U-ZIsZfU7-uwDKRm2S2jPWn3NKoHW6Kw6nh4KfS9caSNjYkzFUiLLDFt7EybWMRdUN7FuPPbLtnPSPNLsQ9YbsCgCoyW4avozdxPrETIIHk1e1a-IuPN9VV2LFdjBZZe0jYc6oIw2p_vsleuP0WlfLTRg-Ro8TFUuko2M2-jcCmm3OqPqg2w_Uj7DP-pYmoY9Pvm6wV3TWdoxSgacJ97t7edUyREsdRxdTIv7YEDzfZIanVXBeq0zpD6sBSPxBegMDg5cBuMC1_4tAo5b01UXcfcM4r9_29dzD0HaP0XiJEj7FXJtV0uPxG984lBgNGqRUgMHinufPP_bULOKAA7F2GrVJlyiEo8oTWPoli99md25hPCZRNS6HdYgSlF-b6JLpPTFYbMj-kTbaz7ji7OTmrNCvyMQTLxiS0YDdoisb-VtBCTJLLow88bxDj-22VROQDOhc76rOETBaBOc-z2XVEnafcuPm7-WCpgWZPUUOS_zPhGzQ1srR0vYPfDMEFxDu45Dvj52-9Kt4McbHxwp7vh9lJEDyEGTHyOnwLfYBMx9Rd9eO-6LQ1QXWJpTWeV_6QB9lO_Pk1TVSqnPkRZ3KH-47-DVhzza0Eyz5n1uiGQqh8Jcr56nGvFg0odVGARR7BXob-tcNhr4LcUdzafomX5A1Ux3QWK63zmFkW94t1iufJZ3KMXtfXcCE5m9WPbrM');
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

    it.only('should verify jump to Su number functionality', function () {
        cy.get('@nodeToJump').then((nodeToJump)=>{

            navigatorLocation.jumpToSuNumberInput().type(`${nodeToJump}{enter}`)
            navigatorNode.selectedNodeOnNodeLevelPage().should('contain', nodeToJump)
        })

    });


})

