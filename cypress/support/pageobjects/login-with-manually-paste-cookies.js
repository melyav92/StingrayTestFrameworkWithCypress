export class ManualLoginWithPasteCookies {

    manualLoginWithPasteCookies( cookiesValue = '11'){
        cy.setCookie(".AspNet.Cookies", cookiesValue)
        return  cy.visit('/en')

    }

}