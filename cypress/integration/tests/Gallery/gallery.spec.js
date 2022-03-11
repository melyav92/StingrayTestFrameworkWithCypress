import{ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {Gallery} from "../../../support/pageobjects/Gallery/gallery";


let manualLogin = new ManualLoginWithPasteCookies();
let gallery = new Gallery();

describe("Gallery page", function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/ProdCtrlGallery?from=2022-03-07&to=2022-03-13')
        gallery.approveObservationsForAllContexts()

    })


    it('should verify that there is images data successfully loaded for Lice Count context ', function () {
        gallery.liceDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select(Cypress.env('bolaksCustomer'))
        gallery.locationDropdown().select(Cypress.env('fusavikaLocation'))

        gallery.imageContainer().should('be.visible')
    });

    it('should verify that there is images data successfully loaded for Ulcers Count context', function () {
        gallery.ulcersDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select(Cypress.env('bolaksCustomer'))
        gallery.locationDropdown().select(Cypress.env('fusavikaLocation'))

        gallery.imageContainer().should('be.visible')
    });

    it('should verify that there is images data successfully loaded for Maturation Count context', function () {
        gallery.maturationDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select(Cypress.env('bolaksCustomer'))
        gallery.locationDropdown().select(Cypress.env('fusavikaLocation'))

        gallery.imageContainer().should('be.visible')
    });

    it('should verify that there is images data successfully loaded for Snout damage Count context', function () {
        gallery.snoutDamageDiagnosticsTypeFilter().click()
        gallery.customerDropdown().select(Cypress.env('bolaksCustomer'))
        gallery.locationDropdown().select(Cypress.env('fusavikaLocation'))

        gallery.imageContainer().should('be.visible')
    });

})