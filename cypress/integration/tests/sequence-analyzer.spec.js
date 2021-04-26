import {SequenceAnalyzer} from "../../support/pageobjects/sequence-analyzer";




describe('Sequence analyzer  ', () => {
        let sequenceAnalyzer = new SequenceAnalyzer();
    before(function (){
        cy.visit('/en/SequenceAnalyzer?locationId=87&countedDate=2019-11-16&skipContextsSelection=False&contexts%5B0%5D=3&returnUrl=%2Fen%2FImageBasedAnalysis%2FSequenceSummary%3FlocationId%3D87%26countedDate%3D2019-11-16%26contexts%255B0%255D%3D3%26returnUrl%3D%252Fen%252FImageBasedAnalysis%252FRegister%253FcustomerId%253D43%2526locationId%253D87%2526year%253D2019%2526context%253DSnoutDamageCount')
        cy.Login('ellu', 123456)
        sequenceAnalyzer.gotItButton().click()
        sequenceAnalyzer.gotItButton().click()
    })
    //approve count of sequences in the loop
    for( let i = 0; i < 10; i++  ){
            it('Add and approve observation', () => {
                //sequenceAnalyzer.loadingSpinner()
            // const selectNotAnalyzedSequence = $('.scp-sa-fish-item:not(.scp-sa-accepted)')
            // selectNotAnalyzedSequence.waitForDisplayed({timeout: 5000})
            //selectNotAnalyzedSequence.click()
            sequenceAnalyzer.frameEditor().dblclick()

            sequenceAnalyzer.selectItemInContextMenu().click()

            sequenceAnalyzer.approveObservationBoundingBox().click()

            sequenceAnalyzer.approveAllButton().click()

            sequenceAnalyzer.confirmApprove().click()



        })
    }


});
