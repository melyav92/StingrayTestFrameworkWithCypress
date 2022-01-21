import {SequenceAnalyzer} from "../../support/pageobjects/sequence-analyzer";
import {LoginPage} from "../../support/pageobjects/login-page";


describe.skip('Sequence analyzer  ', () => {
        let sequenceAnalyzer = new SequenceAnalyzer();
        let login = new LoginPage()

    before(function (){
        cy.visit('/en/SequenceAnalyzer?locationId=2132&countedDate=2019-10-31&skipContextsSelection=False&contexts%5B0%5D=0&returnUrl=%2Fen%2FImageBasedAnalysis%2FSequenceSummary%3FlocationId%3D2132%26countedDate%3D2019-10-22%26contexts%255B0%255D%3D0%26returnUrl%3D%252Fen%252FImageBasedAnalysis%252FRegister%253FcustomerId%253D48%2526locationId%253D2132%2526year%253D2019%2526context%253DLiceCount')
        login.loginToThePage('bolacslu', 123456)
        sequenceAnalyzer.gotItButton().click()
        sequenceAnalyzer.gotItButton().click()
    })
    //approve count of sequences in the loop
    for( let i = 0; i < 20; i++  ){
            it('Add and approve observation', () => {
                //sequenceAnalyzer.loadingSpinner()
            // const selectNotAnalyzedSequence = $('.scp-sa-fish-item:not(.scp-sa-accepted)')
            // selectNotAnalyzedSequence.waitForDisplayed({timeout: 5000})
            //selectNotAnalyzedSequence.click()
            sequenceAnalyzer.frameEditor().dblclick()

            sequenceAnalyzer.selectItemInContextMenu().click()

            //sequenceAnalyzer.approveObservationBoundingBox().click()

            sequenceAnalyzer.approveAllButton().click()

            sequenceAnalyzer.confirmApprove().click()

        })
    }


});
