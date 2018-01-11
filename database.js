const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-blog', 'AndrewKeller', {
    host: 'localhost',
    dialect: 'postgres',
});