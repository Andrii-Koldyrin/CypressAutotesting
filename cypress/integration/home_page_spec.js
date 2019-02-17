describe('The Home Page', function() {
    before(() => {
        cy.visit('/');
    });

    it('filter input is present', function() {
        cy.get('#name')
      .should('have.attr', 'name')
      .and('equal', 'name');
        cy.get('#city')
      .should('have.attr', 'name')
      .and('equal', 'city');
  });
    it('three columns are present', function () {
      cy.get('.App-column')
          .should('have.length', 3)
    });
    it('Applied,Interviewing and Hired column names are present', function () {
        cy.get('.App-column h2').eq(0).contains('Applied');
        cy.get('.App-column h2').eq(1).contains('Interviewing');
        cy.get('.App-column h2').eq(2).contains('Hired');
    });
    it('Moving buttons are functional and crew-member container can be moved into the next column after each button click', function () {
        cy.get('.App-column').eq(0).find('.CrewMember-up').eq(0).click();
        cy.get('.App-column').eq(1)
            .find('.CrewMemeber-name').eq(0)
            .find('div').eq(0)
            .contains('lloyd gonzalez');
        cy.get('.App-column').eq(1).find('.CrewMember-up').eq(0).click();
        cy.get('.App-column').eq(2)
            .find('.CrewMemeber-name').eq(1)
            .find('div').eq(0)
            .contains('lloyd gonzalez');
        cy.get('.App-column').eq(2).find("[type='button']").eq(1).click();
        cy.get('.App-column').eq(1)
            .find('.CrewMemeber-name').eq(0)
            .find('div').eq(0)
            .contains('lloyd gonzalez');
        cy.get('.App-column').eq(1).find("[type='button']").eq(0).click();
        cy.get('.App-column').eq(0)
            .find('.CrewMemeber-name').eq(0)
            .find('div').eq(0)
            .contains('lloyd gonzalez');
    });
    it('submit and clear buttons are functional and name input is active', function () {
        cy.get('#name').type('danielle');
        cy.get("[type='submit']").click();
        cy.get('.App-column').eq(0)
            .find('.CrewMemeber-name').eq(0)
            .find('div').eq(0)
            .contains('danielle moore');
        cy.get("#filters [type='button']").click();
        cy.reload();
    });

    it('submit and clear buttons are functional and city input is active', function () {
        cy.get('#city').type('sheffield');
        cy.get("[type='submit']").click();
        cy.get('.App-column').eq(2)
            .find('.CrewMemeber-name').eq(0)
            .find('div').eq(1)
            .contains('sheffield');
        cy.get("#filters [type='button']").click();
        cy.reload();
    });
});
