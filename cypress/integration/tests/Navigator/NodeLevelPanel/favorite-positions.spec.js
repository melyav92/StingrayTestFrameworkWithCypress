import {ManualLoginWithPasteCookies} from "../../../../support/pageobjects/login-with-manually-paste-cookies";
import {FavoritePositions} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/favorite-positions";
import {NavigatorNodeLevelPanel} from "../../../../support/pageobjects/Navigator/NodeLevelPanel/navigator-node-level-panel";
import favoritePositionData from "/cypress/fixtures/Navigator/favorite-positions.js";
import navigatorData from "/cypress/fixtures/Navigator/navigator-data";


let manualLogin = new ManualLoginWithPasteCookies();
let favoritePosition = new FavoritePositions();
let nodePage = new NavigatorNodeLevelPanel();

describe("Favorite Positions CRUD", function (){
    beforeEach(function (){
        manualLogin.manualLoginWithPasteCookies();
        cy.visit(`/en/Navigator/Node?nodeId=${Cypress.env('demo-001NodeSoId')}`);
        nodePage.selectedNodeOnNodeLevelPage().should('contain', `${Cypress.env('demo-001NodeSerialNumber')}`);
    });

    it('should verify that the user is able to create DAY favorite position with thrusters "OFF" state', function () {
        favoritePosition.sendSwitchOffThrustersModeRequest();
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.dayPositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.dayPositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');

    });

    it('should verify that the user is able to EDIT DAY favorite position with new VERTICAL, HORIZONTAL AND THRUSTERS "OFF" state', function () {
        favoritePosition.sendCreteFavoritePositionRequest(navigatorData.dayPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.dayPositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.dayPositionType)
        favoritePosition.thrustersOffButton().click();
        favoritePosition.verticalPositionInput().clear().type(favoritePositionData.verticalPositionValue);
        favoritePosition.horizontalPositionInput().clear().type(favoritePositionData.horizontalPositionValue);

        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is updated successfully');

        //need to add position values checking


    });

    it('should verify that the user is able to create NIGHT favorite position', function () {
        favoritePosition.sendSwitchOffThrustersModeRequest();
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.nightPositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.nightPositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');

    });


})
