const express = require('express');
const Article = require('../models/article');
const router = express.Router();

router.route('/articles')
    .get((req, res) => {
        Article.findAll()
            .then(allArticles => {
                res.send(allArticles);
            });
    })
    .post((req, res) => {
        Article.create({
            title: req.body.title,
            content: req.body.content,
            blogUserId: req.body.blogUserId
        })
            .then((article) => {
                res.send(article);
            });
    })
    // .delete((req, res) => {
    //     Article.
    //         .then(() => {
    //             res.send('article deleted');
    //         })
    // });

module.exports = router;