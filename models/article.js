// sets up sequelize and association with other tables
const Sequelize = require('sequelize');
const sequelize = require('../database');
const BlogUser = require('./blog_user');

// defines articles table
const Article = sequelize.define('article', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

// adds foreign key to articles
Article.belongsTo(BlogUser);

// creates articles table in database
Article.sync()
    .then(() => {
        console.log(`Created 'articles' table`);
    });

// exports module so other js files can require
module.exports = Article;
