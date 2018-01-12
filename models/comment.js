// sets up sequelize and association with other tables
const Sequelize = require('sequelize');
const sequelize = require('../database');
const BlogUser = require('./blog_user');
const Article = require('./article');

// defines comments table
const Comment = sequelize.define('comment', {
    content: {
        type: Sequelize.TEXT
    },
    reply_id: {
        type: Sequelize.INTEGER
    }
});

// adds foreign keys to articles
Comment.belongsTo(BlogUser);
Comment.belongsTo(Article);

// creates comments table in database
Comment.sync()
    .then(() => {
        console.log(`Created 'comments' table`);
    });

// exports module so other js files can require
module.exports = Comment;