import{ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {Gallery} from "../../../../support/pageobjects/Gallery/gallery";


let manualLogin = new ManualLoginWithPasteCookies();
let gallery = new Gallery();

const singleLocUserCookie = '';
const maltyLocUser ='';
const maltyCustomerUser = '';

describe("Gallery page", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies(maltyCustomerUser);
        cy.visit('/en/ProdCtrlGallery')
        gallery.approveObservationsForAllContexts()

    })


    it('should verify that there is images data successfully loaded for Lice Count context ', function () {
        gallery.customerDropdown().select('Bolaks AS')
        gallery.locationDropdown().select('Fusavika')
        gallery.liceDiagnosticsTypeFilter().click()

        gallery.imageContainer().should('be.visible')
    });

})