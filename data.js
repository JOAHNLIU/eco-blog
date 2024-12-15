// data.js
const users = [
    { id: 1, name: 'Іоанн Любченко', email: 'liubchenko18@gmail.com' },
    { id: 2, name: 'Шкарніков Дмитро', email: 'dimakashiroff@gmail.com' },
  ];
  
  const posts = [
    { id: 1, title: 'Будь Eco-friendly', content: 'Контент поста', userId: 1 },
    { id: 2, title: 'Життя із дотриманням правил Eco-friendly', content: 'Контент поста', userId: 2 },
  ];
  
  const comments = [
    { id: 1, content: 'Чудовий пост', postId: 1, userId: 2 },
    { id: 2, content: 'Дуже інформативно', postId: 2, userId: 1 },
  ];
  
  export { users, posts, comments };
  