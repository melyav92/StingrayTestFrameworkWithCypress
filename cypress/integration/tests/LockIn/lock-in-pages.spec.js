import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {LockInPages} from "../../../support/pageobjects/LockIn/lock-in-pages";
import {ManualLiceRegister} from "../../../support/pageobjects/ManualRegisterPages/manual-lice-register";


let manualLogin = new ManualLoginWithPasteCookies();
let lockIn = new LockInPages();
let selectCustomerAndOrLocationDropdown = new ManualLiceRegister();


describe("Lock in pages", function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();

    });

    it('should verify Count summary data for locked in week is returned without any errors', function () {

        cy.visit(`/en/LockIn/WeekEdit/?locationId=${Cypress.env('locationId')}&week=${Cypress.env('lockedInWeek')}&year=${Cypress.env('lockInYear')}`);

        lockIn.lockInStateBox()
            .should('have.text', 'Locked-in')
            .and('be.visible');

        lockIn.countedBox()
            .should('be.greaterThan', 19);

        lockIn.adultFemalesBox().children()
            .should('have.class', 'scp-value-with-title-block');

        lockIn.mobilesLiceBox().children()
            .should('have.class', 'scp-value-with-title-block');

        lockIn.dayIncludedInLockIn()
            .should('exist');

        lockIn.countOfLockedInSequencesForDay()
            .should('be.greaterThan', 19);

        lockIn.threeDotsMenuItemInDayCell()
            .should('exist')
            .and('be.visible');

        lockIn.fishCountInput()
            .should('not.have.value', '');

    });

    it('should verify Count summary page for NOT locked in week and page data is returned without any errors', function () {

        cy.visit(`/en/LockIn/WeekEdit/?locationId=${Cypress.env('locationId')}&week=${Cypress.env('notLockedInWeek')}&year=${Cypress.env('lockInYear')}`);

        lockIn.fishCountInput()
            .should('have.value', '');

        lockIn.lockInStateBox()
            .should('have.text', 'Not Locked-in')
            .and('be.visible');

        lockIn.dayIncludedInLockIn()
            .should('not.exist');

        lockIn.countedBox()
            .should('be.NaN');

        lockIn.adultFemalesBox().children('.scp-value-with-title-block')
            .should('not.exist');

        lockIn.mobilesLiceBox().children('.scp-value-with-title-block')
             .should('not.exist');

    });

    it('should verify that user navigates to the Sequences list page for Locked In day by using "View sequence-list" menu item and page data is loaded without errors', function () {

        cy.visit(`/en/LockIn/WeekEdit/?locationId=${Cypress.env('locationId')}&week=${Cypress.env('lockedInWeek')}&year=${Cypress.env('lockInYear')}`);
        lockIn.threeDotsMenuItemInDayCell().click();
        lockIn.viewSequenceListMenuItem().click();

        lockIn.pageTitle()
            .should('have.text', 'Approved fish-sequences');

        lockIn.lockInStateBox()
            .should('have.text', 'Locked-in')
            .and('be.visible');

        lockIn.countedBox()
            .should('be.greaterThan', 19);

        lockIn.sequenceListTable()
            .should('not.have.class', 'react-bs-table-no-data');

    });

    it('should Lock In history page data is returned without any errors ', function () {
        cy.visit('/en/ImageBasedAnalysis/Register');
        selectCustomerAndOrLocationDropdown.selectCustomerOrAndLocationIfDropdownsExist();
        lockIn.lockInHistoryButton().click();

        lockIn.pageTitle()
            .should('have.text', 'Locked-in imagebased licecounts history');

        lockIn.lockInStateBox()
            .should('have.text', 'Locked-in')
            .and('be.visible');

        lockIn.lockedInWeekExistsInTheHistoryTable()
            .should('contain', `${Cypress.env('lockedInWeek')}-${Cypress.env('lockInYear')}`);

        lockIn.lockInHistoryTable()
            .should('not.have.class', 'react-bs-table-no-data');

    });


})