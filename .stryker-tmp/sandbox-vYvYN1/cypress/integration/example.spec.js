// @ts-nocheck
describe('Eco-Blog E2E Test', () => {
    it('should load the home page', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Eco-Blog');
    });
  
    it('should create a new post', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[name="title"]').type('Новий пост');
      cy.get('textarea[name="content"]').type('Контент нового поста');
      cy.get('button[type="submit"]').click();
      cy.contains('Новий пост');
    });
  });
  