const express = require('express');
// const Article = require('./models/article');
// const articleRouter = require('./routes/articles');
// const bodyParser = require('body-parser');
const app = express();
const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static('public'));

// app.use(articleRouter);

app.get('/blah', (req, res) => {
    res.render('home', {
        title: 'this is blah'
    });
});

app.listen(3000, () => {
    console.log('running on port 3000');
});

// app.use((req, res, next) => {
//     console.log('got request');
//     next();
// });

// app.get('/users/:userName', (req, res) => {
//     res.end(`Hello ${req.params.userName}!`);
// });

// app.get('/', (req, res) => {
//     Article.findOne()
//         .then(article => {
//             res.send(`<h1>${article.title}</h1><br><p>${article.content}</p>`);
//         });
// });

// app.get('/heroes', (req, res) => {
//     res.send('here are the heroes');
// });

// app.get('/heroes/blaze', (req, res) => {
//     res.send('the newest hero blaze boiii');
// });

// app.post('/', (req, res) => {
//     res.send('you posted');
// });
