import {SequenceAnalyzer} from "../../support/pageobjects/SequenceAnayzerApplication/sequence-analyzer";
import {ManualLoginWithPasteCookies} from "../../support/pageobjects/login-with-manually-paste-cookies";


describe.skip('Sequence analyzer  ', () => {
        let sequenceAnalyzer = new SequenceAnalyzer();
        //let login = new LoginPage()
    let manualLogin = new ManualLoginWithPasteCookies();

    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit('/en/SequenceAnalyzer?locationId=93&countedDate=2022-02-18&skipContextsSelection=False&imageBasedAnalysisMode=User&contexts%5B0%5D=0&returnUrl=%2Fen%2FImageBasedAnalysis%2FSequenceSummary%3FlocationId%3D93%26countedDate%3D2022-02-18%26imageBasedAnalysisMode%3DUser%26contexts%255B0%255D%3D0%26returnUrl%3D%252Fen%252FImageBasedAnalysis%252FRegister%253FcustomerId%253D48%2526locationId%253D93%2526year%253D2022%2526imageBasedAnalysisMode%253DUser%2526context%253DLiceCount')
        //login.loginToThePage('bolacslu', 123456)
        //manualLogin.manualLoginWithPasteCookies();
        sequenceAnalyzer.gotItButton().click()
        sequenceAnalyzer.gotItButton().click()
    })
    //approve count of sequences in the loop
    for( let i = 0; i < 15; i++  ){
            it('Add and approve observation', () => {
                //sequenceAnalyzer.loadingSpinner()
            // const selectNotAnalyzedSequence = $('.scp-sa-fish-item:not(.scp-sa-accepted)')
            // selectNotAnalyzedSequence.waitForDisplayed({timeout: 5000})
            //selectNotAnalyzedSequence.click()
            sequenceAnalyzer.frameEditor().dblclick()
                cy.get('.scp-sa-ctx-menu-list-item').first().click()

            //sequenceAnalyzer.selectItemInContextMenu().click()

            //sequenceAnalyzer.approveObservationBoundingBox().click()

            sequenceAnalyzer.approveAllButton().click()

            sequenceAnalyzer.confirmApprove().click()

        })
    }


});
