import {ManualLoginWithPasteCookies} from "../../../support/pageobjects/login-with-manually-paste-cookies";
import {SequenceAnalyzer} from "../../../support/pageobjects/SequenceAnayzerApplication/sequence-analyzer";

let manualLogin = new ManualLoginWithPasteCookies();
let sequenceAnalyzer = new SequenceAnalyzer();

describe("", function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit(`/en/SequenceAnalyzer?locationId=${Cypress.env('locationId')}&countedDate=2019-11-19`);
        sequenceAnalyzer.gotItButton().click();
        sequenceAnalyzer.gotItButton().click();
    })

    it('should verify that sequences and sequence images returned without any errors', function (){
        sequenceAnalyzer.imageInFrameEditor()
            .should('have.attr', 'src');

        sequenceAnalyzer.hintLableInFrameEditor()
            .should('be.visible')
            .and('not.have.css', 'display', 'none');

        sequenceAnalyzer.imageInFramesList()
            .should('exist')
            .and('be.visible');

        sequenceAnalyzer.sequencesInTheSequenceList()
            .should('exist')
            .and('be.visible');

    });


})
