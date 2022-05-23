import {NavigatorNodeLevelPanel} from "./navigator-node-level-panel";
let navigatorNode = new NavigatorNodeLevelPanel();

export class FavoritePositions {
    storeCurrentPositionAsFavoriteButton(){
        navigatorNode.buDownCamStreamingExists();
        return cy.get('#scp-store-current-position-link-btn');
    };

    descriptionInput(){
        return cy.get('#scp-description-input');
    };

    favoritePositionCategoryTypeLabel(positionCategoryType){
        return cy.get('.scp-iradio').parent().contains(positionCategoryType);
    };

    verticalPositionInput(){
        return cy.get('#scp-vertical-position-value-input');
    };

    horizontalPositionInput(){
        return cy.get('#scp-horizontal-position-value-input');
    };

    thrustersOffButton(){
        return cy.get('#scp-off-state-button');
    };

    thrustersOrientationButton(){
        return cy.get('#scp-orientation-state-button');
    };

    thrustersOrientationInput(){
        return cy.get('#scp-thruster-position-value-input');
    };

    saveButton(){
        return cy.get('#scp-save-button');
    };
//Favorite positions table objects
    favoritePositionRawInTheFavPosTable(positionType){
        cy.get('[data-original-title="Edit favorite position"]').should('be.visible');
        return cy.get('#scp-favorite-positions-table td')
            .contains(`${positionType}`);
    };

    editFavoritePositionPencilItem(positionType){
        cy.get('[data-original-title="Edit favorite position"]').should('be.visible');
        return cy.get('#scp-favorite-positions-table td')
            .contains(`${positionType}`)
            .parents('tr')
            .find('[data-original-title="Edit favorite position"]');
    };

    descriptionValueInTheFavPosTable(positionType){
        cy.get('[data-original-title="Edit favorite position"]').should('be.visible');
        return cy.get('#scp-favorite-positions-table td')
            .contains(`${positionType}`)
            .parents('tr')
            .find('td')
            .eq(2);
    };

    verticalPositionValueInTheFavPosTable(positionType){
        cy.get('[data-original-title="Edit favorite position"]').should('be.visible');
        return cy.get('#scp-favorite-positions-table td')
            .contains(`${positionType}`)
            .parents('tr')
            .find('td')
            .eq(3);
    };

    horizontalPositionValueInTheFavPosTable(positionType){
        cy.get('[data-original-title="Edit favorite position"]').should('be.visible');
        return cy.get('#scp-favorite-positions-table td')
            .contains(`${positionType}`)
            .parents('tr')
            .find('td')
            .eq(4);
    };

    thrustersValueInTheFavPosTable(positionType){
        cy.get('[data-original-title="Edit favorite position"]').should('be.visible');
        return cy.get('#scp-favorite-positions-table td')
            .contains(`${positionType}`)
            .parents('tr')
            .find('td')
            .eq(5);
    };



    sendSwitchOnThrustersStingrayManualModeRequest() {
        cy.request(
            {   method: 'POST',
                url: `/api/navigator/v4/${Cypress.env('demo-001NodeCableId')}/command`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: '{"payloadArg":{"thrusterArgs":{"mode":"Manual","target":56}},"payloadKey":"Nav_Thruster_Control"}',
            }
        ).its('status').should('eq', 200);

    };

    sendCreteFavoritePositionRequest(positionType) {
        cy.request(
            {   method: 'POST',
                url: '/api/navigator/v4/favorite-positions',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `[{
                    "item": {
                        "favoriteName": "${positionType}",
                        "active": true,
                        "type": "${positionType}",
                        "favoritePosition": {
                            "moveArgs": {
                                "locked": null,
                                "horizontal": {
                                    "direction": "Abs",
                                    "distCm": 1100
                                },
                                "vertical": {
                                    "direction": "Abs",
                                    "distCm": 1000
                                }
                            },
                            "thrusterArgs": null
                        },
                        "note": ""
                    },
                    "cableId": ${Cypress.env('demo-001NodeCableId')}
            }
         ]`,
            }
        );
        cy.reload()

    };

    sendDeleteFavoritePositionRequest(){
        cy.request(
            {   method: 'DELETE',
                url: `api/navigator/v4/favorite-positions?cableId=${Cypress.env('demo-001NodeCableId')}&favoritePositionId=6282943e625403475f65ec40`
            }
        ).its('status').should('eq', 200);
    };




}