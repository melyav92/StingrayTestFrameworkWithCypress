import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {Shotrecs} from "../../../../support/pageobjects/Shotrecs/shotrecs";

let manualLogin = new ManualLoginWithPasteCookies();
let shotrecs = new Shotrecs();

describe("Shotrecs",function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies()
        cy.visit('/en/ShotRec')
        shotrecs.selectCustomerOrAndLocationIfDropdownsExist()

    })

    //Dates in the filter are hardcoded because we know for sure that there are patched available in the range

    it('should verify that shotrecs thumbnails videos are returned without any errors', function () {
        shotrecs.fromDatePicker().clear().type('03/12/2021')
        shotrecs.toDatePicker().clear().type('03/03/2022')
        shotrecs.showBtn().click()

        shotrecs.patchesImagesInTheList().should('be.visible')
        shotrecs.viewMode().should('have.value', '0')

    });

    it('should verify that shotrecs patches videos are returned without any errors', function () {
        shotrecs.fromDatePicker().clear().type('03/12/2021')
        shotrecs.toDatePicker().clear().type('03/03/2022')
        shotrecs.selectPatchesViewMode().click()
        shotrecs.showBtn().click()

        shotrecs.patchesImagesInTheList().should('be.visible')
        shotrecs.viewMode().should('have.value', '1')

    });

})