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

// Само собою якщо ми тепер звернемося за маршрутом /contact/123 то req.params.id міститиме значення 123. 
// Цей спосіб передачі параметрів на сервер використовують дуже часто.



app.get('/contact/:id', (req, res) => {
    res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
  });

  app
  .route('/blog')
  .get((req, res) => {
    res.send('Get a list of blog');
  })
  .post((req, res) => {
    res.send('Add a record to blog');
  })
  .put((req, res) => {
    res.send('Update blog');
  });
  


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

