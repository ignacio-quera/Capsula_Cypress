describe('My First Test', () => {
    it('Visits the Rails app', () => {
      cy.visit('/');
      cy.contains('Welcome');
    });
  });
  