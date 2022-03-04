export class Dashboard {
    laserStatusWidgetTitle(){
       return cy.get('.scp-dashboard-laser-status-widget')
           .find('[data-loading-status="loaded"]')
   };

    liceStatusWidgetTitle(){
        return cy.get('.scp-dashboard-lice-status-widget')
            .find('[data-loading-status="loaded"]')
    };

    diagnosticsStatusWidgetTitle(){
        return cy.get('.scp-dashboard-diagnostics-status-widget')
            .find('[data-loading-status="loaded"]')
    };

    biometricsStatusWidgetTitle(){
        return cy.get('.scp-dashboard-biometrics-status-widget')
            .find('[data-loading-status="loaded"]')
    };

    uptimeStatusWidgetTitle(){
        return cy.get('.scp-dashboard-avg-uptime-widget')
            .find('[data-loading-status="loaded"]')
    };
}