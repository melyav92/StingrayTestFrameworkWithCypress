export class ManualLoginWithPasteCookies {

    manualLoginWithPasteCookies( cookiesValue = ''){
        cy.setCookie(".AspNet.Cookies", cookiesValue)
        return  cy.visit('/en')

    }

}