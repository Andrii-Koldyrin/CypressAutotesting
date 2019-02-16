describe('The Home Page', function() {
    before(() => {
        cy.visit('/');
    });

 /*    it('successfully loads', function() {

    }); */

    it('successfully loads', function() {
        cy.visit('/');
        cy.get('#name')
      .should('have.attr', 'name')
      .and('equal', 'name');
        cy.get('#city')
      .should('have.attr', 'name')
      .and('equal', 'city');
  });
});
