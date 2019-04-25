
const propertySchema = require('./propertySchema.js');

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('airbnbDesc', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;



