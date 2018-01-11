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

const BlogUser = sequelize.define('blog_users', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    }
});

BlogUser.sync({ force: true })
    .then(() => {
        console.log(`Table 'blog_users' created!`);
        return BlogUser.create({
            first_name: 'Andrew',
            last_name: 'Keller'
        });
    });