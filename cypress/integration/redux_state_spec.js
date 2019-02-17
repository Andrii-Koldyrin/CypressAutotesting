import utils from '../support/utils.js'

describe('Redux state tests', function() {
    before(() => {
        cy.visit('');
    });

    it ('clear storage test', function () {
        cy.clearReduxStorage();

        cy.get('.App-column').then((column) => {
            expect(column.find('.CrewMember-container').length).to.be.equal(0);
        });
    });

    it ('put crew into Applied status', function () {
        const status = 'applied';
        cy.addCrewWithStatus(status, 'till', 'lindemann', 42);

        utils.checkAmountOfMembersByStatus(status, 1);
        utils.checkAmountOfMembersByStatus('interviewing', 0);
        utils.checkAmountOfMembersByStatus('hired', 0);
    });

    it ('put crew into Interviewing status', function () {
        const status = 'interviewing';
        cy.addCrewWithStatus(status, 'till', 'lindemann', 42);

        utils.checkAmountOfMembersByStatus(status, 1);
        utils.checkAmountOfMembersByStatus('applied', 0);
        utils.checkAmountOfMembersByStatus('hired', 0);
    });

    it ('put crew into Hired status', function () {
        const status = 'hired';
        cy.addCrewWithStatus(status, 'till', 'lindemann', 42);

        utils.checkAmountOfMembersByStatus(status, 1);
        utils.checkAmountOfMembersByStatus('applied', 0);
        utils.checkAmountOfMembersByStatus('interviewing', 0);
    });

    it ('put rammstein squad', function () {
        cy.addCrewWithStatus('hired', 'till', 'lindemann', 42);
        cy.addCrewWithStatus('interviewing', 'richard ', 'kruspe', 41);
        cy.addCrewWithStatus('applied', 'Oliver', 'Riedel', 39);
        cy.addCrewWithStatus('interviewing', 'Paul', 'Landers', 38);
        cy.addCrewWithStatus('applied', 'Christian', 'Lorenz', 37);
        cy.addCrewWithStatus('interviewing', 'Christoph', 'Schneider', 36);

        utils.checkAmountOfMembersByStatus('hired', 1);
        utils.checkAmountOfMembersByStatus('applied', 2);
        utils.checkAmountOfMembersByStatus('interviewing', 3);
    });
});
