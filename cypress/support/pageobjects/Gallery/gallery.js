export class Gallery{

    customerDropdown(){
        return cy.get('#scp-customers-list')
    };

    locationDropdown(){
        return cy.get('#scp-locations-list')
    };

    liceDiagnosticsTypeFilter(){
        return cy.get('.scp-diagnostics-type-selector-item').contains('Lice')
    };

    approveObservationsForAllContexts(){
        cy.request({
            url: '/api/sequence-analyzer/observations?imageBasedAnalysisMode=0',
            method: 'POST',
            body:{
                "SequenceExternalId": "eb2e5648-7138-4cff-90ae-406bd01bf3aa",
                "UserId": 2586,
                "AnalysisStateByContextType": {
                    "LiceCount": {
                        "Status": "Approved"
                    },
                    "Ulcer": {
                        "Status": "Approved"
                    },
                    "Maturity": {
                        "Status": "Approved"
                    },
                    "SnoutDamage": {
                        "Status": "Approved"
                    }
                },
                "ObservationsByDiseaseType": {
                    "AdultFemaleLouse": [{
                        "ExternalId": "63d3e311-ef77-4957-a94d-dfe7f920685a",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 0,
                            "TopLeftX": 242,
                            "TopLeftY": 1558,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": true
                        }, {
                            "FrameIndex": 1,
                            "TopLeftX": 426,
                            "TopLeftY": 1536,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": false
                        }
                        ]
                    }
                    ],
                    "MobileLouse": [{
                        "ExternalId": "51e0a77b-101e-4859-8d13-7b1c71d9c8bb",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 0,
                            "TopLeftX": 406,
                            "TopLeftY": 1534,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": true
                        }, {
                            "FrameIndex": 1,
                            "TopLeftX": 580,
                            "TopLeftY": 1516,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 2,
                            "TopLeftX": 760,
                            "TopLeftY": 1476,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 3,
                            "TopLeftX": 930,
                            "TopLeftY": 1402,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 4,
                            "TopLeftX": 1104,
                            "TopLeftY": 1334,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 5,
                            "TopLeftX": 1292,
                            "TopLeftY": 1304,
                            "Width": 0,
                            "Height": 0,
                            "IsKeyframe": false
                        }
                        ]
                    }
                    ],
                    "Ulcer": [{
                        "ExternalId": "d687f8e9-0f09-41ec-b457-2dd13097d5ff",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 0,
                            "TopLeftX": 49,
                            "TopLeftY": 1613,
                            "Width": 343,
                            "Height": 111,
                            "IsKeyframe": true
                        }
                        ]
                    }, {
                        "ExternalId": "c796f7bf-e9d5-41d4-bde7-c1f77c204bf7",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 9,
                            "TopLeftX": 212,
                            "TopLeftY": 945,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": true
                        }, {
                            "FrameIndex": 10,
                            "TopLeftX": 416,
                            "TopLeftY": 839,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 11,
                            "TopLeftX": 610,
                            "TopLeftY": 839,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 12,
                            "TopLeftX": 806,
                            "TopLeftY": 817,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 13,
                            "TopLeftX": 972,
                            "TopLeftY": 823,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 14,
                            "TopLeftX": 1156,
                            "TopLeftY": 847,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 15,
                            "TopLeftX": 1350,
                            "TopLeftY": 859,
                            "Width": 444,
                            "Height": 494,
                            "IsKeyframe": false
                        }
                        ]
                    }
                    ],
                    "Maturity": [{
                        "ExternalId": "d67e4356-3ffa-4dbe-8a60-7a6a6b889554",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 0,
                            "TopLeftX": 0,
                            "TopLeftY": 1216,
                            "Width": 901,
                            "Height": 560,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 1,
                            "TopLeftX": 43,
                            "TopLeftY": 1200,
                            "Width": 1058,
                            "Height": 560,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 2,
                            "TopLeftX": 227,
                            "TopLeftY": 1154,
                            "Width": 1058,
                            "Height": 560,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 3,
                            "TopLeftX": 377,
                            "TopLeftY": 1078,
                            "Width": 1058,
                            "Height": 560,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 4,
                            "TopLeftX": 533,
                            "TopLeftY": 1022,
                            "Width": 1058,
                            "Height": 560,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 5,
                            "TopLeftX": 685,
                            "TopLeftY": 1028,
                            "Width": 1058,
                            "Height": 560,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 6,
                            "TopLeftX": 871,
                            "TopLeftY": 1048,
                            "Width": 1058,
                            "Height": 560,
                            "IsKeyframe": true
                        }
                        ]
                    }, {
                        "ExternalId": "a372ae1a-228e-4721-8027-7d5ea5a89ae4",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 8,
                            "TopLeftX": 789,
                            "TopLeftY": 1228,
                            "Width": 747,
                            "Height": 297,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 9,
                            "TopLeftX": 981,
                            "TopLeftY": 1184,
                            "Width": 747,
                            "Height": 297,
                            "IsKeyframe": true
                        }, {
                            "FrameIndex": 10,
                            "TopLeftX": 1065,
                            "TopLeftY": 1158,
                            "Width": 747,
                            "Height": 297,
                            "IsKeyframe": false
                        }
                        ]
                    }
                    ],
                    "SnoutDamage": [{
                        "ExternalId": "3afbc970-4059-4a81-8173-9e9327a95273",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 2,
                            "TopLeftX": 736,
                            "TopLeftY": 1428,
                            "Width": 328,
                            "Height": 161,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 3,
                            "TopLeftX": 930,
                            "TopLeftY": 1360,
                            "Width": 328,
                            "Height": 161,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 4,
                            "TopLeftX": 1114,
                            "TopLeftY": 1300,
                            "Width": 328,
                            "Height": 161,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 5,
                            "TopLeftX": 1268,
                            "TopLeftY": 1298,
                            "Width": 328,
                            "Height": 161,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 6,
                            "TopLeftX": 1444,
                            "TopLeftY": 1306,
                            "Width": 328,
                            "Height": 161,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 7,
                            "TopLeftX": 1628,
                            "TopLeftY": 1300,
                            "Width": 328,
                            "Height": 161,
                            "IsKeyframe": true
                        }
                        ]
                    }, {
                        "ExternalId": "bc7d2826-037d-43a6-b55a-f32589c4487c",
                        "Automatic": false,
                        "DiseaseObservationLocations": [{
                            "FrameIndex": 8,
                            "TopLeftX": 742,
                            "TopLeftY": 963,
                            "Width": 264,
                            "Height": 283,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 9,
                            "TopLeftX": 964,
                            "TopLeftY": 915,
                            "Width": 264,
                            "Height": 283,
                            "IsKeyframe": true
                        }, {
                            "FrameIndex": 10,
                            "TopLeftX": 1158,
                            "TopLeftY": 881,
                            "Width": 264,
                            "Height": 283,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 11,
                            "TopLeftX": 1308,
                            "TopLeftY": 885,
                            "Width": 264,
                            "Height": 283,
                            "IsKeyframe": false
                        }, {
                            "FrameIndex": 12,
                            "TopLeftX": 1478,
                            "TopLeftY": 903,
                            "Width": 264,
                            "Height": 283,
                            "IsKeyframe": false
                        }
                        ]
                    }
                    ]
                }
            }
        })
    }

    imageContainer(){
        return cy.get('.scp-image')
    }




}