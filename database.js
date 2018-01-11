const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-blog', 'AndrewKeller', '', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected!');
    })
    .catch(err => {
        console.error('Error: Not connected!');
    });