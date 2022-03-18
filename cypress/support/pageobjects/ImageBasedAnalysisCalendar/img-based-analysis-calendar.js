export class ImgBasedAnalysisCalendar {
    pageDataLoaded(){
        cy.intercept({ method:'GET',
            pathName: '/get-location-summary-for-year'}).as('sequencesForYear')

        cy.wait('@sequencesForYear').its('response.statusCode').should('eq', 200 )

    };

    daysWithSequencesAvailableInTheCalendar(){
        return cy.get('.scp-img-based-sequences-cell')
    };

    liceCountContextFilter(){
        return cy.get('[data-context="LiceCount"]')
    };

    ulcerCountContextFilter(){
        return cy.get('[data-context="UlcerCount"]')
    };

    maturationCountContextFilter(){
        return cy.get('[data-context="MaturationCount"]')
    };

    snoutDamageCountContextFilter(){
        return cy.get('[data-context="SnoutDamageCount"]')
    };




}





