describe('Eco-Blog E2E Test', () => {
    it('should load the home page', () => {
      cy.visit('http://localhost:3000'); 
      cy.contains('Eco-Blog'); 
    });
  
    it('should create a new post', () => {
      cy.visit('http://localhost:3000'); 
      cy.get('input[name="title"]').type('Новый пост'); 
      cy.get('textarea[name="content"]').type('Тестовый контент поста'); 
      cy.get('button[type="submit"]').click(); 
      cy.contains('Новый пост'); 
    });
  });
  