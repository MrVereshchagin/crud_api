// const express = require('express');
// const app = express();

// // Обработка корневого маршрута
// app.get('/', (req, res) => {
//   res.send('Привет, мир!');
// });


// // Запуск сервера
// app.listen(3000, () => {
//   console.log('Сервер запущен на порту 3000');
// });

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database Connection
const postsdb = require('./config/database');
postsdb.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

//Gig routes
app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
postsdb.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));