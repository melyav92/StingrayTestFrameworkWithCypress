export class NavigatorNodeLevelPanel {
    selectedNodeOnNodeLevelPage(){
        const commandLogTable = cy.get('#scp-commands-log-table_wrapper')
            commandLogTable.should('be.visible')
        return cy.get('.scp-selected-node-info-value')
    };


}