// sets up sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-blog', 'AndrewKeller', '', {
    host: 'localhost',
    dialect: 'postgres',
});

// tests connection to database
// sequelize
    // .authenticate()
    // .then(() => {
    //     console.log('Connected!');
    // })
    // .catch(err => {
    //     console.error('Error: Not connected!');
    // });

// queries table for all rows
// BlogUser.findAll().then(blog_user => {
//     console.log(blog_user)
// });

// exports module so other js files can require
module.exports = sequelize;