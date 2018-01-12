// sets up sequelize
const Sequelize = require('sequelize');
const sequelize = require('../database');

// defines BlogUsers table
const BlogUser = sequelize.define('blog_user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    authorPermission: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

// creates blog_users table in database
BlogUser.sync()
    .then(() => {
        console.log(`Created 'blog_users' table`);
        // return BlogUser.create({
        //     firstName: 'Andrew',
        //     lastName: 'Keller',
        //     email: 'Keller192@gmail.com',
        //     authorPermission: true
        //     },
        //     {
        //     firstName: 'Seth',
        //     lastName: 'Zimbo',
        //     email: 'Sethy@McSeth.com',
        //     authorPermission: false
        //     });
    });

// exports module so other js files can require
module.exports = BlogUser;