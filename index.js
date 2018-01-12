const express = require('express');
const app = express();
const Article = require('./models/article');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('running on port 3000');
});

app.use((req, res, next) => {
    console.log('got request');
    next();
});

app.get('/', (req, res) => {
    Article.findOne()
        .then(article => {
            res.send(`<h1>${article.title}</h1><br><p>${article.content}</p>`);
        });
});

// app.get('/heroes', (req, res) => {
//     res.send('here are the heroes');
// });

// app.get('/heroes/blaze', (req, res) => {
//     res.send('the newest hero blaze boiii');
// });

// app.post('/', (req, res) => {
//     res.send('you posted');
// });
