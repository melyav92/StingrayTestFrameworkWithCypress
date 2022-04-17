export class FavoritePositions {
    sendCreteFavoritePositionRequest(positionType) {
        cy.request(
            {   method: 'POST',
                url: '/api/navigator/v4/favorite-position?cableId=329',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Accept": "*/*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: `{"favoriteName":"${positionType}","active":true,"type":"${positionType}","favoritePosition":{"moveArgs":{"locked":null,"horizontal":{"direction":"Abs","distCm":1000},"vertical":{"direction":"Abs","distCm":1000}},"thrusterArgs":null},"note":""}`,
                failOnStatusCode: false
            }
        );
        cy.reload()

    };

}