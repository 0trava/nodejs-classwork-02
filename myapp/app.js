const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact page</h1>');
  });

// Функції проміжної обробки виконують наступні завдання:
// виконують певний код.
// вносять зміни до об'єктів запитів та відповідей.
// можуть завершити цикл "запит-відповідь" та перервати обробку запиту.
// викликають наступну функцію проміжної обробки зі стеку, виконанням функції next().

app.use((req, res, next) => {
  console.log('Наше проміжне ПЗ');
  next();
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});