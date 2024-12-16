describe('Eco-Blog E2E Test', () => {
    it('should load the home page', () => {
      cy.visit('http://localhost:3000'); // Открытие главной страницы
      cy.contains('Eco-Blog'); // Проверка заголовка
    });
  
    it('should create a new post', () => {
      cy.visit('http://localhost:3000'); // Переход на главную страницу
      cy.get('input[name="title"]').type('Новый пост'); // Заполнение поля "title"
      cy.get('textarea[name="content"]').type('Тестовый контент поста'); // Заполнение контента
      cy.get('button[type="submit"]').click(); // Клик по кнопке отправки
      cy.contains('Новый пост'); // Проверка добавленного поста
    });
  });
  