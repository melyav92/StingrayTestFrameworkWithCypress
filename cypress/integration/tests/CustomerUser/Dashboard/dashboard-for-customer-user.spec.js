import{ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {Dashboard} from "../../../../support/pageobjects/Dashboard/dashboard";

let manualLogin = new ManualLoginWithPasteCookies();
let dashboard = new Dashboard();

describe("Manual lice count register page",function (){

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies()
        cy.visit('/en/')
    })

    it("should verify that Laser status widget data is loaded without errors",function (){
            dashboard.laserStatusWidgetTitle().should('have.css', 'display','none')
    });

    it("should verify that Lice status widget data is loaded without errors",function (){
        dashboard.liceStatusWidgetTitle().should('have.css', 'display', 'none')
    });

    it("should verify that Diagnostics status widget data is loaded without errors",function (){
        dashboard.diagnosticsStatusWidgetTitle().should('have.css', 'display', 'none')
    });

    it("should verify that Biometrics status widget data is loaded without errors",function (){
        dashboard.biometricsStatusWidgetTitle().should('have.css', 'display', 'none')
    });

    it("should verify that Uptime status widget data is loaded without errors",function (){
        dashboard.uptimeStatusWidgetTitle().should('have.css', 'display', 'none')
    });



})