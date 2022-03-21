export class LockInPages{
    lockInStateBox(){
        return cy.get('.scp-lock-in-state-box-title-container')
    };

    countedBox(){
        return cy.get('.scp-value-box-text-container').first()
            .invoke('text')
            .then(parseFloat)
    };

    adultFemalesBox(){
        return cy.get('.scp-multi-values-box-container').first()
    };

    mobilesLiceBox(){
        return cy.get('.scp-multi-values-box-container').last()
    };

    dayIncludedInLockIn(){
        return cy.get('.scp-day-count-cell-selected')
    };

    countOfLockedInSequencesForDay(){
        return this.dayIncludedInLockIn().first()
            .find('button[direction="right"]')
            .invoke('text')
            .then(parseFloat)
    };

    threeDotsMenuItemInDayCell(){
        return this.dayIncludedInLockIn().first().find('#dropdown-split-basic')
    };

    viewSequenceListMenuItem(){
        this.fishCountInput().should('be.visible')
        return cy.get('.dropdown-item').contains('View sequence-list')
    };

    fishCountInput(){
        return cy.get('.scp-fish-count-input-container').first()
            .children('input.scp-fish-count-input')
    };

    sequenceListTable(){
        return cy.get('#scp-lock-in-sequence-list-table')
    };

    pageTitle(){
      return cy.get('.scp-header-label').last()
    };

    lockInHistoryButton(){
        return cy.get('#scp-btn-go-to-lock-in-history')
    };

    lockInHistoryTable(){
        return cy.get('#scp-lock-in-history-table')
    };

    lockedInWeekExistsInTheHistoryTable(){
        cy.intercept({ method:'GET',
            pathName: '/weekly-lice-count'}).as('weeklyLiceCount')

        cy.wait('@weeklyLiceCount').its('response.statusCode').should('eq', 200 );
        this.lockInHistoryTable().should('be.visible');
        return this.lockInHistoryTable().find('tbody tr')
    };






}