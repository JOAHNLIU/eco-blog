const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Подключение к MongoDB
const PORT = process.env.PORT || 0; // Позволяет выбрать свободный порт

app.get('/api/posts', (req, res) => {
  res.status(200).json([]); // Временный ответ для тестов
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${server.address().port}`);
});

module.exports = app;
