export class ManualLoginWithPasteCookies {

    manualLoginWithPasteCookies( cookiesValue = ''){
        return  cy.setCookie(".AspNet.Cookies", cookiesValue),
                cy.visit('/en')

    }

}