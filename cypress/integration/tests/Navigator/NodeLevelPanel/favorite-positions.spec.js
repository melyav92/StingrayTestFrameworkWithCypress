import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {FavoritePositions} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/favorite-positions";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";
import favoritePositionData from "/cypress/fixtures/Navigator/favorite-positions.js";



let manualLogin = new ManualLoginWithPasteCookies();
let favoritePosition = new FavoritePositions();
let nodePage = new NavigatorNodeLevelPanel();

describe("Favorite Positions CRUD", function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit(`/en/Navigator/Node?nodeId=${Cypress.env('demo-001NodeSoId')}`);
        nodePage.selectedNodeOnNodeLevelPage().should('contain', `${Cypress.env('demo-001NodeSerialNumber')}`);
    });

    it('should verify that the user is able to create DAY favorite position', function () {
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.dayPositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.dayPositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');
        cy.reload();
        favoritePosition.favoritePositionRawInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('exist')
            .and('be.visible');

    });

    it('should verify that the user is able to EDIT DAY favorite position with new VERTICAL, HORIZONTAL AND THRUSTERS "OFF" state', function () {
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.dayPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.dayPositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.dayPositionType)
        favoritePosition.verticalPositionInput().clear().type(favoritePositionData.verticalPositionValue);
        favoritePosition.horizontalPositionInput().clear().type(favoritePositionData.horizontalPositionValue);
        favoritePosition.thrustersOrientationInput().click();
        favoritePosition.thrustersOffButton().click();

        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is updated successfully');

        cy.reload();
        favoritePosition.descriptionValueInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('have.text', favoritePositionData.dayPositionType);
        favoritePosition.verticalPositionValueInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('have.text', favoritePositionData.verticalPositionValue + '.0m');
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('have.text', favoritePositionData.horizontalPositionValue + '.0m');
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('have.text', favoritePositionData.thrustersOffValue);



    });

    it('should verify that the user is able to create NIGHT favorite position', function () {
        favoritePosition.sendSwitchOnThrustersStingrayManualModeRequest();
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.nightPositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.nightPositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');
        cy.reload();
        favoritePosition.favoritePositionRawInTheFavPosTable(favoritePositionData.nightPositionType)
            .should('exist')
            .and('be.visible');

    });


})
