// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import utils from "./utils";

Cypress.Commands.add('clearReduxStorage', () => {
    utils.putIntoStorage([]);
    cy.reload();
});

Cypress.Commands.add('addCrewWithStatus', (status, firstName, lastName, age) => {
    const person = {
        "gender": "female",
        "hiringStage": status,
        "name": {
            "title": "ms",
            "first": firstName,
            "last": lastName
        },
        "location": {
            "street": "1544 park road",
            "city": "sheffield",
            "state": "gwynedd county",
            "postcode": "WL10 5US",
            "coordinates": {
                "latitude": "-12.0422",
                "longitude": "157.8099"
            },
            "timezone": {
                "offset": "-1:00",
                "description": "Azores, Cape Verde Islands"
            }
        },
        "email": "julia.cunningham@example.com",
        "login": {
            "uuid": "72e629c7-04a5-42fc-a552-6cf83576b0b5",
            "username": "blackgoose776",
            "password": "fuking",
            "salt": "qPuj8Y5v",
            "md5": "dc1a7bb4d6fcb494a0be412103eb22ca",
            "sha1": "660648b4d9fde20e37faa5f856233a69b7d3ff14",
            "sha256": "ddc57c58735ded6ae37182cd8b64829c3b5ace03ca5bd2a67cb7079b64772023"
        },
        "dob": {
            "date": "1994-12-01T19:18:01Z",
            "age": age
        },
        "registered": {
            "date": "2010-08-14T10:29:43Z",
            "age": 8
        },
        "phone": "015396 09075",
        "cell": "0719-357-068",
        "id": {
            "name": "NINO",
            "value": "XH 76 31 38 U"
        },
        "picture": {
            "large": `https://randomuser.me/api/portraits/men/${age}.jpg`,
            "medium": `https://randomuser.me/api/portraits/med/men/${age}.jpg`,
            "thumbnail": `https://randomuser.me/api/portraits/thumb/men/${age}.jpg`
        },
    "nat": "GB"
};

    const redux = JSON.parse(window.localStorage.getItem('redux'));
    const data = redux && redux.data ? redux.data : [];
    data.push(person);

    utils.putIntoStorage(data);
    cy.reload();
});
