import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {NavigatorLocationLevelPanel} from "../../../../support/pageobjects/Navigator/LocationLevePanel/navigator-location-level-panel";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";

let manualLogin = new ManualLoginWithPasteCookies();
let navigatorLocation = new NavigatorLocationLevelPanel();
let navigatorNode = new NavigatorNodeLevelPanel();


describe("Navigator node level panel jump to SU number functionality",function (){


    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/Navigator/Location');
        navigatorLocation.selectCustomerOrAndLocationIfDropdownsExist();

    })

    it('should verify jump to SU number functionality on node level panel', function () {
        navigatorLocation.getFirstNodeInTheLocationToJump()
        navigatorLocation.goToTheNodePageArrow().click()
        cy.get('@nodeToJump').then((nodeToJump)=>{
            navigatorNode.selectedNodeOnNodeLevelPage().should('not.contain', nodeToJump)
            navigatorLocation.jumpToSuNumberInput().type(`${nodeToJump}{enter}`)
            navigatorNode.selectedNodeOnNodeLevelPage().should('contain', nodeToJump)
        })

    });

})