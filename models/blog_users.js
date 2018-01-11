// sets up sequelize
const Sequelize = require('sequelize');
const sequelize = require('../database');

// defines blog_users table
const BlogUser = sequelize.define('blog_user', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    author_permission: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

// creates blog_users table in database
BlogUser.sync()
    .then(() => {
        console.log('Created blog_users table');
    });

// exports module so other js files can require
module.exports = BlogUser;