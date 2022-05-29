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
            .should('have.text', favoritePositionData.verticalPositionValue);
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('have.text', favoritePositionData.horizontalPositionValue);
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.dayPositionType)
            .should('have.text', favoritePositionData.thrustersOffValue);

    });

    it("should verify that the user is able to DELETE DAY favorite position by using delete 'TRASH CAN' in the favorite position table",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.dayPosition);
        favoritePosition.deleteFavPosTrashCanItem(favoritePositionData.dayPositionType).click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.dayPosition)

    });

    it("should verify that the user is able to DELETE DAY favorite position by using 'DELETE' button in the edit favorite position popup",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.dayPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.dayPositionType).click();
        favoritePosition.deleteButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.dayPosition)
    })

    it('should verify that the user is able to create NIGHT favorite position', function () {
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

    it('should verify that the user is able to UPDATE NIGHT favorite position with new VERTICAL, HORIZONTAL(HOME) AND THRUSTERS "Orientation" mode', function () {
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.nightPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.nightPositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.nightPositionType)
        favoritePosition.verticalPositionInput().clear().type(favoritePositionData.verticalPositionValue);
        favoritePosition.homeButton().click();
        favoritePosition.thrustersOrientationInput().clear().type(favoritePositionData.thrustersOrientationValue);

        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is updated successfully');

        cy.reload();
        favoritePosition.descriptionValueInTheFavPosTable(favoritePositionData.nightPositionType)
            .should('have.text', favoritePositionData.nightPositionType);
        favoritePosition.verticalPositionValueInTheFavPosTable(favoritePositionData.nightPositionType)
            .should('have.text', favoritePositionData.verticalPositionValue);
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.nightPositionType)
            .should('have.text', favoritePositionData.homeState);
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.nightPositionType)
            .should('have.text', favoritePositionData.thrustersOrientationValue);

    });

    it("should verify that the user is able to DELETE NIGHT favorite position by using delete 'TRASH CAN' in the favorite position table",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.nightPosition);
        favoritePosition.deleteFavPosTrashCanItem(favoritePositionData.nightPositionType).click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.nightPosition)

    });

    it("should verify that the user is able to DELETE NIGHT favorite position by using 'DELETE' button in the edit favorite position popup",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.nightPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.nightPositionType).click();
        favoritePosition.deleteButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.nightPosition)
    });

    it('should verify that the user is able to create STORM favorite position', function () {
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.stormPositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.stormPositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');
        cy.reload();
        favoritePosition.favoritePositionRawInTheFavPosTable(favoritePositionData.stormPositionType)
            .should('exist')
            .and('be.visible');

    });

    it('should verify that the user is able to UPDATE STORM favorite position with new VERTICAL(Docked), HORIZONTAL AND THRUSTERS "N/A" state', function () {
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.stormPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.stormPositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.stormPositionType)
        favoritePosition.dockButton().click();
        favoritePosition.horizontalPositionInput().clear().type(favoritePositionData.horizontalPositionValue);
        favoritePosition.thrustersOrientationInput().click();
        favoritePosition.thrustersOrientationButton().click();

        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is updated successfully');

        cy.reload();
        favoritePosition.descriptionValueInTheFavPosTable(favoritePositionData.stormPositionType)
            .should('have.text', favoritePositionData.stormPositionType);
        favoritePosition.verticalPositionValueInTheFavPosTable(favoritePositionData.stormPositionType)
            .should('have.text', favoritePositionData.dockedState);
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.stormPositionType)
            .should('have.text', favoritePositionData.horizontalPositionValue);
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.stormPositionType)
            .should('have.text', favoritePositionData.thrustersNAValue);

    });

    it("should verify that the user is able to DELETE STORM favorite position by using delete 'TRASH CAN' in the favorite position table",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.stormPosition);
        favoritePosition.deleteFavPosTrashCanItem(favoritePositionData.stormPositionType).click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.stormPosition)

    });

    it("should verify that the user is able to DELETE STORM favorite position by using 'DELETE' button in the edit favorite position popup",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.stormPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.stormPositionType).click();
        favoritePosition.deleteButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.stormPosition)
    })

    it('should verify that the user is able to create CLEAN favorite position', function () {
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.cleanPositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.cleanPositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');
        cy.reload();
        favoritePosition.favoritePositionRawInTheFavPosTable(favoritePositionData.cleanPositionType)
            .should('exist')
            .and('be.visible');

    });

    it('should verify that the user is able to UPDATE CLEAN favorite position with new VERTICAL, HORIZONTAL(AWAY) AND THRUSTERS "Orientation" mode', function () {
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.cleanPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.cleanPositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.cleanPositionType);
        favoritePosition.awayButton().click();
        favoritePosition.thrustersOrientationInput().clear().type(favoritePositionData.thrustersOrientationValue);

        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is updated successfully');

        cy.reload();
        favoritePosition.descriptionValueInTheFavPosTable(favoritePositionData.cleanPositionType)
            .should('have.text', favoritePositionData.cleanPositionType);
        favoritePosition.verticalPositionValueInTheFavPosTable(favoritePositionData.cleanPositionType)
            .should('have.text', favoritePositionData.dockedState + ' & ' + favoritePositionData.lockedState);
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.cleanPositionType)
            .should('have.text', favoritePositionData.awayState);
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.cleanPositionType)
            .should('have.text', favoritePositionData.thrustersOrientationValue);

    });

    it("should verify that the user is able to DELETE CLEAN favorite position by using delete 'TRASH CAN' in the favorite position table",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.cleanPosition);
        favoritePosition.deleteFavPosTrashCanItem(favoritePositionData.cleanPositionType).click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.cleanPosition)

    });

    it("should verify that the user is able to DELETE CLEAN favorite position by using 'DELETE' button in the edit favorite position popup",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.cleanPosition);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.cleanPositionType).click();
        favoritePosition.deleteButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.cleanPosition)
    });

    it('should verify that the user is able to CREATE ALT-1 favorite position', function () {
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.alt1PositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.alt1PositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');
        cy.reload();
        favoritePosition.favoritePositionRawInTheFavPosTable(favoritePositionData.alt1PositionType)
            .should('exist')
            .and('be.visible');

    });

    it('should verify that the user is able to EDIT ALT1 favorite position with new VERTICAL, HORIZONTAL AND THRUSTERS "OFF" state', function () {
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.alt1Position);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.alt1PositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.alt1PositionType)
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
        favoritePosition.descriptionValueInTheFavPosTable(favoritePositionData.alt1PositionType)
            .should('have.text', favoritePositionData.alt1PositionType);
        favoritePosition.verticalPositionValueInTheFavPosTable(favoritePositionData.alt1PositionType)
            .should('have.text', favoritePositionData.verticalPositionValue);
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.alt1PositionType)
            .should('have.text', favoritePositionData.horizontalPositionValue);
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.alt1PositionType)
            .should('have.text', favoritePositionData.thrustersOffValue);

    });

    it("should verify that the user is able to DELETE ALT1 favorite position by using delete 'TRASH CAN' in the favorite position table",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.alt1Position);
        favoritePosition.deleteFavPosTrashCanItem(favoritePositionData.alt1PositionType).click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.alt1Position)

    });

    it("should verify that the user is able to DELETE ALT1 favorite position by using 'DELETE' button in the edit favorite position popup",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.alt1Position);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.alt1PositionType).click();
        favoritePosition.deleteButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.alt1Position)
    });

    it('should verify that the user is able to CREATE ALT-2 favorite position', function () {
        favoritePosition.storeCurrentPositionAsFavoriteButton().click();
        favoritePosition.descriptionInput().type(favoritePositionData.alt2PositionType)
        favoritePosition.favoritePositionCategoryTypeLabel(favoritePositionData.alt2PositionType).click();
        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is added successfully');
        cy.reload();
        favoritePosition.favoritePositionRawInTheFavPosTable(favoritePositionData.alt2PositionType)
            .should('exist')
            .and('be.visible');

    });

    it('should verify that the user is able to EDIT ALT2 favorite position with new VERTICAL(DOCK), HORIZONTAL(HOME) AND THRUSTERS "ORIENTATION" mode', function () {
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.alt2Position);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.alt2PositionType).click();
        favoritePosition.descriptionInput().clear().type(favoritePositionData.alt2PositionType)
        favoritePosition.dockButton().click();
        favoritePosition.homeButton().click();
        favoritePosition.thrustersOrientationInput().clear().type(favoritePositionData.thrustersOrientationValue);


        favoritePosition.saveButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is updated successfully');

        cy.reload();
        favoritePosition.descriptionValueInTheFavPosTable(favoritePositionData.alt2PositionType)
            .should('have.text', favoritePositionData.alt2PositionType);
        favoritePosition.verticalPositionValueInTheFavPosTable(favoritePositionData.alt2PositionType)
            .should('have.text', favoritePositionData.dockedState);
        favoritePosition.horizontalPositionValueInTheFavPosTable(favoritePositionData.alt2PositionType)
            .should('have.text', favoritePositionData.homeState);
        favoritePosition.thrustersValueInTheFavPosTable(favoritePositionData.alt2PositionType)
            .should('have.text', favoritePositionData.thrustersOrientationValue);

    });

    it("should verify that the user is able to DELETE ALT2 favorite position by using delete 'TRASH CAN' in the favorite position table",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.alt2Position);
        favoritePosition.deleteFavPosTrashCanItem(favoritePositionData.alt2PositionType).click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.alt2Position)

    });

    it("should verify that the user is able to DELETE ALT2 favorite position by using 'DELETE' button in the edit favorite position popup",function (){
        favoritePosition.sendCreteFavoritePositionRequest(favoritePositionData.alt2Position);
        favoritePosition.editFavoritePositionPencilItem(favoritePositionData.alt2PositionType).click();
        favoritePosition.deleteButton().click();
        nodePage.yesProceedButtonInThePopup().click();
        nodePage.toasterPopup()
            .should('be.visible')
            .and('have.class', 'toast-success')
            .and('have.text', 'Favorite position is removed successfully');

        favoritePosition.checkThatFavoritePositionDoesNotExist(favoritePositionData.alt2Position)
    });




})
