import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorLocationLevelPanel} from "../../../../support/pageobjects/Navigator/LocationLevePanel/navigator-location-level-panel";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";
import navigator from "../../../../fixtures/Navigator/navigator-data.json"

let manualLogin = new ManualLoginWithPasteCookies();
let navigatorLocation = new NavigatorLocationLevelPanel();
let navigatorNode = new NavigatorNodeLevelPanel();


describe("Navigator node level panel",function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Navigator/Location');
        navigatorLocation.selectCustomerOrAndLocationIfDropdownsExist();

    })

    it('should verify jump to SU number functionality on node level panel', function () {
        navigatorLocation.goToTheNodePageArrow().click()
        navigatorNode.selectedNodeOnNodeLevelPage().should('not.contain', navigator.nodeSerialNumber)
        navigatorLocation.jumpToSuNumberInput().type(`${navigator.nodeSerialNumber}{enter}`)
        navigatorNode.selectedNodeOnNodeLevelPage().should('contain', navigator.nodeSerialNumber)

    });

})