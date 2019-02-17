const statusList = {
    'applied' : 0,
    'interviewing' : 1,
    'hired' : 2
};

const putIntoStorage = (crew, filter) => {
    window.localStorage.setItem('redux', JSON.stringify({
        data: crew ? crew : [],
        filter: filter ? filter : {}
    }));
};

const checkAmountOfMembersByStatus = (status, expectedAmount) => {
    cy.get('.App-column').eq(statusList[status]).then((column) => {
        expect(column.find('.CrewMember-container').length).to.be.equal(expectedAmount);
    });
};

export default {
    putIntoStorage,
    checkAmountOfMembersByStatus
}
