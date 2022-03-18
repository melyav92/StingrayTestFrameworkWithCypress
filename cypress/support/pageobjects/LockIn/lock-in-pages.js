export class LockInPages{
    lockInStateBox(){
        return cy.get('.scp-lock-in-state-box-title-container')
    };

    countedBox(){
        return cy.get('.scp-value-box-text-container').first()
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

    threeDotsMenuItemInDayCell(){
        return this.dayIncludedInLockIn().first().find('#dropdown-split-basic')
    };

    fishCountInput(){
        return cy.get('.scp-fish-count-input-container').first().children('input.scp-fish-count-input')
    }





}