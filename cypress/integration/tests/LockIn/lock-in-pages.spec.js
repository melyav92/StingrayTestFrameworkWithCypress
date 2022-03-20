import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {LockInPages} from "../../../support/pageobjects/LockIn/lock-in-pages";



let manualLogin = new ManualLoginWithPasteCookies();
let lockIn = new LockInPages();

describe("Lock in pages", function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();

    });

    it('should verify Count summary data for locked in week is returned without any errors', function () {

        cy.visit(`/en/LockIn/WeekEdit/?locationId=${Cypress.env('locationId')}&week=${Cypress.env('lockedInWeek')}&year=2019`);

        lockIn.lockInStateBox()
            .should('have.text', 'Locked-in')
            .and('be.visible');

        lockIn.countedBox()
            .should('not.have.text', '');

        lockIn.adultFemalesBox().children()
            .should('have.class', 'scp-value-with-title-block');

        lockIn.mobilesLiceBox().children()
            .should('have.class', 'scp-value-with-title-block');

        lockIn.dayIncludedInLockIn()
            .should('exist');

        lockIn.threeDotsMenuItemInDayCell()
            .should('exist')
            .and('be.visible');

        lockIn.fishCountInput()
            .should('not.have.value', '');

    });

    it('should verify Count summary page for NOT locked in week and page data is returned without any errors', function () {

        cy.visit(`/en/LockIn/WeekEdit/?locationId=${Cypress.env('locationId')}&week=${Cypress.env('notLockedInWeek')}&year=2019`);

        lockIn.fishCountInput()
            .should('have.value', '');

        lockIn.lockInStateBox()
            .should('have.text', 'Not Locked-in')
            .and('be.visible');

        lockIn.dayIncludedInLockIn()
            .should('not.exist');

        lockIn.countedBox()
            .should('have.text', '');

        lockIn.adultFemalesBox().children('.scp-value-with-title-block')
            .should('not.exist');

        lockIn.mobilesLiceBox().children('.scp-value-with-title-block')
             .should('not.exist');


    });



})