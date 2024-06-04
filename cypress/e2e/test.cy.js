// cypress/e2e/users_spec.js
describe('User management', () => {
    it('Visits the users page', () => {
      cy.visit('/');
      cy.contains('Users');
    });
  
    it('Creates a new user', () => {
      cy.visit('/');
      cy.contains('New User').click();
  
      cy.url().should('include', '/users/new');
  
      cy.get('input[name="user[name]"]').type('Test User');
      cy.get('input[name="user[email]"]').type('test@example.com');
      cy.contains('Create User').click();
  
      cy.url().should('include', '/users');
      cy.contains('Test User');
      cy.contains('test@example.com');
    });
  });
  