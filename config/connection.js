const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "todo_app_db",
    "postgres",
    "2212",
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;