// sets up sequelize
const Sequelize = require('sequelize');
const sequelize = require('../database');
const blog_user = require('./blog_users');

// defines articles table
const Article = sequelize.define('article', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    date_time: {
        type: Sequelize.DATE
    }
});

Article.belongsTo(blog_user);

// creates articles table in database
Article.sync({ force: true})
    .then(() => {
        console.log('Created articles table');
    });

// exports module so other js files can require
module.exports = Article;
